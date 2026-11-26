/**
 * Green Master – backend Google Sheet (Apps Script)
 * Déployé en « Application Web » : exécuter en tant que moi, accès « Tout le monde ».
 * Le jeu appelle :
 *   GET  ?action=state      → { gifts:[8], qr:"", rules:"", board:[...], team:[...], guests:[...] }
 *   POST (JSON texte brut)  → ajoute une partie dans le bon onglet (ou complète le cadeau de la roue)
 * Onglets : « Parties » (visiteurs du salon), « Team Liberty » (e-mail « liberty »), « Invités » (e-mail « invité »).
 */
const SHEET_ID = '1pn7KgT50j1GO1pSNmi4fOv31EYHw9455-dJmfE7zOaQ';
const HEAD = ['date','name','email','contest','marketing','team','pts','reports','total','crashes','time','gift','flooz','id','guest'];
const TABS = { public: 'Parties', team: 'Team Liberty', guest: 'Invités' };

function sheet_(name){
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sh = ss.getSheetByName(name);
  if (!sh) sh = ss.insertSheet(name);
  if (name !== 'Config' && sh.getLastRow() === 0) { sh.appendRow(HEAD); sh.setFrozenRows(1); }
  return sh;
}
function out_(obj){ return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }
function yes_(v){ return v === true || String(v).toLowerCase() === 'oui' || String(v).toLowerCase() === 'true'; }
function modeOf_(d){ return yes_(d.guest) ? 'guest' : yes_(d.team) ? 'team' : 'public'; }

function readConfig_(){
  const rows = sheet_('Config').getDataRange().getValues();
  const cfg = {}; rows.forEach(r => { if (r[0]) cfg[String(r[0]).trim()] = String(r[1] == null ? '' : r[1]).trim(); });
  const gifts = []; for (let i = 1; i <= 8; i++) gifts.push(cfg['cadeau' + i] || '');
  return { gifts, qr: cfg['qr_url'] || '', rules: cfg['reglement_url'] || '', dpo: cfg['contact_rgpd'] || '' };
}

function readTab_(mode){
  const sh = sheet_(TABS[mode]); const rows = sh.getDataRange().getValues(); if (rows.length < 2) return [];
  const head = rows[0].map(String);
  return rows.slice(1).filter(r => r[1]).map(r => { const o = {}; head.forEach((h, i) => o[h] = r[i]); return o; });
}
function board_(mode){
  return readTab_(mode)
    .map(e => ({ name: String(e.name), pts: Number(e.pts) || 0, reports: Number(e.reports) || 0, time: Number(e.time) || 0, id: String(e.id || ''), gift: String(e.gift || '') }))
    .sort((a, b) => b.pts - a.pts || b.reports - a.reports || a.time - b.time).slice(0, 50);
}

function doGet(e){
  const action = (e && e.parameter && e.parameter.action) || 'state';
  if (action === 'ping') return out_({ ok: true });
  const cfg = readConfig_();
  const board = board_('public'), team = board_('team'), guests = board_('guest');
  return out_({ ok: true, gifts: cfg.gifts, qr: cfg.qr, rules: cfg.rules, dpo: cfg.dpo, board, team, guests, count: board.length + team.length + guests.length });
}

function doPost(e){
  try {
    const d = JSON.parse(e.postData.contents || '{}');
    if (d.op === 'gift' && d.id){ // la roue a tourné après l'enregistrement : on complète la ligne, quel que soit l'onglet
      for (const mode of ['public', 'team', 'guest']) {
        const sh = sheet_(TABS[mode]); const rows = sh.getDataRange().getValues();
        const idCol = HEAD.indexOf('id'), giftCol = HEAD.indexOf('gift');
        for (let i = rows.length - 1; i >= 1; i--) if (String(rows[i][idCol]) === String(d.id)) { sh.getRange(i + 1, giftCol + 1).setValue(d.gift || ''); return out_({ ok: true }); }
      }
      return out_({ ok: true, found: false });
    }
    const sh = sheet_(TABS[modeOf_(d)]);
    sh.appendRow([new Date(), d.name || '', d.email || '', d.contest ? 'oui' : 'non', d.marketing ? 'oui' : 'non', d.team ? 'oui' : 'non',
      Number(d.pts) || 0, Number(d.reports) || 0, Number(d.total) || 0, Number(d.crashes) || 0, Number(d.time) || 0, d.gift || '', Number(d.flooz) || 0, String(d.id || ''), d.guest ? 'oui' : 'non']);
    return out_({ ok: true, tab: sh.getName() });
  } catch (err) { return out_({ ok: false, error: String(err) }); }
}
