# Green Master (ex Road Rage) — crédits et licences des assets

Le code du jeu (index.html = version prévention Green Master, road-rage-combat.html = version course/combat 3D, classic-2d.html = version 2D d'origine) est à vous. Pictos d'alerte : fichier Figma « Liberty Rider - Product 2026 » (Mq3yMW8cmW2fmEHpKW05nq), page « Illustrations & icônes », composant icon-alert. Récupérés dans assets/icons : virage dangereux (DANGEROUS_BEND 3167:22296), intersection (ROAD_INTERSECTION 3167:22289), nid-de-poule (PATHOLE 9067:13551), route déformée (ROAD_DEFORMED 9067:13557, utilisé pour les débris), danger communautaire (triangle, Group 745), bouton signaler (icon-add-danger 3262:11820), fatigue (3449:19311), radar (3167:22293).
Restent à récupérer quand le quota Figma MCP le permet (dessinés en canvas en attendant, fonction drawPicto, dans la palette LR) : SLIPPERY_ROAD 3167:22290, GRAVEL 9067:13549, ROADWORK/ROAD-OBJECT 9067:13548, ROAD_DANGER_REPORT 3167:22292, ROAD_OBJECT 9351:11596, WEATHER_ALERT 3167:22287, ROAD_STEEP_UP_MEDIUM 3167:22295, ROAD_HIDDEN-EXIT 9067:13558, et les pins carte (frame 3721:2315 : PIN_SLIPPERY_ROAD 3721:2343, PIN_GRAVEL 9067:13626, PIN_PATHOLE 9067:13731, PIN_ROADWORK 9067:13596, PIN_ROAD_DANGER_REPORT 3721:2322, PIN_ROAD_OBJECT 9351:11635, PIN_WEATHER_ALERT 3721:2325). Les ressources graphiques viennent de banques libres :

| Ressource | Fichiers | Auteur / source | Licence |
|---|---|---|---|
| Moto « Motorcycle » | assets/models/motorcycle.glb | Poly by Google, via https://poly.pizza/m/dse64pqMKAR | CC-BY 3.0 (attribution obligatoire, déjà affichée sur l'écran titre) |
| Voitures (Car Kit 3.1) | assets/models/car-*.glb, assets/models/Textures/colormap.png | Kenney — https://kenney.nl/assets/car-kit | CC0 |
| Arbres, rochers, panneau (Nature Kit 2.1) | assets/models/nature-*.glb | Kenney — https://kenney.nl/assets/nature-kit | CC0 |
| Texture asphalte (Asphalt012) | assets/textures/asphalt_*.jpg | ambientCG — https://ambientcg.com/view?id=Asphalt012 | CC0 |
| Texture herbe (Grass004) | assets/textures/grass_*.jpg | ambientCG — https://ambientcg.com/view?id=Grass004 | CC0 |
| Three.js 0.170 | assets/vendor/ | https://threejs.org | MIT |

Autres banques gratuites utiles pour aller plus loin :

- https://poly.pizza — moteur de recherche de modèles low-poly CC0 / CC-BY (téléchargement GLB direct).
- https://kenney.nl/assets — kits complets CC0 (Racing Kit, City Kit, Mini Characters…).
- https://quaternius.com — packs CC0 (nature, voitures, personnages animés), formats FBX/OBJ/Blend.
- https://kaylousberg.itch.io — KayKit, packs CC0 (forêt, personnages).
- https://ambientcg.com et https://polyhaven.com — textures PBR et HDRI CC0.

## Charte et visuels Green Master

- Palette numérique Liberty Rider : Blanc lunaire #F7FBFB / #F9F6F3, Anthracite #242121, Rouge feu #E84C2E (signature dosée : bouton GO), Prasin #37A67E (= accent-03 Figma, couleur Green Master), Azur #4383E7, Ambre #F5B72B, Rose #F090BB, Bordeaux #611C35.
- Typographies : Spline Sans (titres) + Arimo (corps), chargées depuis Google Fonts, repli DM Sans / Arial.
- Logos et icônes : brand kit « Brand Kit Liberty Rider - Externe » (assets/brand, assets/brand/icons).
- Visuels Green Master exportés depuis Figma (page Illustrations & icônes) : badges-classement (or/argent/bronze, national et départemental), Badge-sécurité (boucliers), casque Liberto (écran d'impact 1-12-GreenMaster) dans assets/brand/gm.
- Écrans de référence : page « GreenMaster - Classement » (écran d'impact 1-12, classement 1-8) du fichier Figma Liberty Rider - Product 2026.
- Classement du stand : stocké dans le navigateur (localStorage, clé gm_board_v1), double-clic sur « réinitialiser » pour l'effacer.

## Stand : inscription, jeu-concours, export

- À compléter en tête du script de index.html, bloc `CONFIG` : `contestUrl` (lien du jeu-concours, bouton « Participer » en fin de partie), `rulesUrl` (règlement, lien dans la case de consentement), `dpoContact` (contact RGPD affiché dans la mention), `retention` (durée de conservation).
- Les joueurs saisissent prénom + e-mail, cochent la participation au jeu-concours (consentement obligatoire pour être rattaché au concours) et, en option, l'accord de recontact commercial. L'e-mail est facultatif pour jouer.
- Export : le petit bouton blanc à point noir en bas à gauche de l'écran d'accueil (ou 5 clics rapides sur le logo Liberty Rider, accueil ou résultats) ouvre le panneau « Inscrits et scores » : Excel (.xlsx, via SheetJS chargé depuis cdnjs), copie CSV, effacement (double-clic). Les données sont dans le navigateur de la machine (localStorage, clé gm_board_v1) : exporter avant de changer de machine ou de vider le navigateur.
- Dans le lecteur d'artifact claude.ai, le téléchargement du fichier peut être bloqué : utiliser « Copier en CSV », ou lancer le jeu depuis le dossier local (python3 -m http.server).

## Liberto en 3D

Le pilote du joueur est Liberto, la mascotte, modélisé procéduralement dans index.html (fonction makeLiberto) : corps-casque jaune ambre (#F5B72B) en super-ellipse à base plate, texture canvas peinte sur le casque (bande blanche avant-sommet-dos, grande visière blanche cernée de noir, visage « zen » yeux fermés, variante A à grand sourire disponible), boutons de visière, bras et jambes tubulaires, gants Mickey et bottes à revers, rendu toon (MeshToonMaterial) avec contours noirs par coque inversée. Banc d'essai : liberto-lab.html (paramètres v=A|B, wave=1, views=bike,front,side,back,face, sun=, hemi=). Références : illustration_liberto_v.png et les visuels newsletter de Liberto dans Téléchargements. Le bras gauche se lève quand on signale un danger.

## Rendu cartoon (v11)

Tout le jeu est rendu en style illustration façon Liberto : matériaux `MeshToonMaterial`
(dégradé 3 paliers), traits d'encre anthracite (#242121) sur les arêtes de chaque objet
(`toonify()`), pas de tone mapping, route et herbe en aplats, ciel bleu uni avec soleil
et nuages dessinés (sprites canvas), collines vertes à contour noir, bords de route noirs.
Les textures `assets/textures/*` ne sont plus utilisées par la route (gardées pour les
anciennes versions). Les arbres Kenney (mint) sont teintés vers le vert Liberty Rider.

## Rivaux Liberto (v14)

Tous les participants sont des Liberto (fonction makeLiberto avec couleur), chacun dans une couleur de la charte avec moto assortie : Biff Rouge feu #E84C2E, Natasha Azur #4383E7, Ikeda Rose #F090BB, Léo Prasin #37A67E, Slater Bleu Majorelle #6369D0, Max Bordeaux #611C35. Le joueur reste en Ambre #F5B72B. Les rivaux lèvent le bras quand ils signalent un danger communautaire.

## Flooz (v15)

Des pièces Flooz (monnaie Liberty Rider : pastille Ambre #F5B72B, anneau #DB9A0A, casque LR au centre, d'après le composant « flooz » du fichier Figma Product 2026) sont posées en petites grappes de 3 ou 4 sur la route, loin des dangers (7 grappes par parcours). Rouler dessus rapporte +5 pts par Flooz (son dédié, ligne dans le HUD et sur l'écran de fin). Icône générée dans assets/brand/gm/flooz.png à partir de lr-icone-blanc.png.

## Roue de la fortune, QR code et menu développement (v20)

- Fin de course : bouton « Tourner la roue » sur l'écran de résultats. Roue à 8 cases aux couleurs de la charte (Rouge feu, Azur, Prasin, Ambre, Rose, Bleu Majorelle, Bordeaux, Anthracite), un seul tour par partie. Le cadeau gagné est affiché (« Trop bien, tu as gagné : … Rapproche-toi d'un membre de l'équipe Liberty Rider ») et enregistré dans la colonne « Cadeau roue » de l'export.
- Sous le cadeau : bloc « Badge exclusif Green Master » avec le QR code (carré vide tant qu'aucun QR code n'est enregistré).
- Menu développement (bouton blanc à point noir sur l'accueil) : onglets « Inscrits et scores », « Gérer la roue » (8 noms de cadeaux, clé localStorage gm_wheel_v1), « Gérer le QR code » (image ou URL, clé gm_qr_v1, max ~1,3 Mo), bouton rouge « Aller à la fin de la course » (saut direct à l'écran de résultats en mode démo, rien n'est enregistré).

## Jeu-concours automatique, fête du cadeau (v21)

- Jeu-concours : plus de case à cocher. Toute partie jouée avec un e-mail vaut participation (bandeau blanc explicite sur l'accueil, lien règlement conservé, texte RGPD mis à jour). La case marketing reste facultative. La colonne « Jeu-concours » de l'export vaut « oui » dès qu'un e-mail est saisi.
- Écran de résultats : le bloc jeu-concours a disparu, remplacé par un grand bouton Rouge feu « Tourne la roue Liberty Rider ».
- Gain à la roue : pluie de confettis aux couleurs de la charte (canvas plein écran) et Liberto en 3D (second rendu WebGL transparent, fonction makeLiberto) qui salue dans la carte du cadeau.

## Retour à l'accueil (v22)

- Pendant la course : bouton blanc « ⌂ Retour à l'accueil » centré dans la bande noire au-dessus de l'écran de jeu (et touche Échap). Il coupe la partie, remet le jeu sur l'écran d'accueil avec le formulaire vide pour la personne suivante, moteur coupé.
- Écran de résultats et écran de la roue : bouton « Retour à l'accueil » à côté de « Rejouer ». « Rejouer » garde le même joueur, « Retour à l'accueil » sort du mode démo et vide prénom, e-mail et case marketing.

## Commandes tactiles (v25)

Sur écran tactile uniquement (media query pointer:coarse ; le PC reste au clavier) : joystick virtuel à droite (gauche/droite = direction progressive, haut = gaz, bas = frein, zone morte au centre) et gros bouton blanc « Signaler un danger » à gauche. Les deux sont dans les coins du bas ; en tactile, le compteur de vitesse et la boîte de score remontent au-dessus d'eux et l'aide clavier disparaît.

## Liberto podium (v27)

Le Liberto 3D animé de la carte du cadeau est remplacé par l'illustration officielle « Liberto médaillé » (Liberto jaune sur un podium avec un trophée), récupérée en SVG depuis le Drive partagé Liberty Rider (dossier des illustrations Liberto) : assets/brand/gm/liberto-podium.svg. L'illustration « Liberto fier et brillant (Flooz - boutique) » est aussi copiée dans assets/brand/gm/liberto-flooz.svg, non utilisée pour l'instant.

## Team Liberty (v28)

Prénom + e-mail « liberty » (en minuscules) = partie de l'équipe Liberty Rider : pas d'e-mail enregistré, pas de jeu-concours, et un classement à part « Classement Team Liberty » affiché à la fin, jamais mélangé au classement public des visiteurs. Colonne « Team Liberty » dans l'export, compteur dans le menu dev.

## Site, appli installable et Google Sheet (v29)

- Site public : https://emmanuelpetit-commits.github.io/green-master/ (GitHub Pages, dépôt emmanuelpetit-commits/green-master, branche main). Chaque modification poussée sur main met le site à jour en une minute environ.
- Appli installable (PWA) : manifest.webmanifest, icônes assets/pwa/, service worker sw.js qui met tout le jeu en cache (fonctionne hors ligne une fois chargé). Sur iPhone : Partager → Sur l'écran d'accueil ; sur Android : Installer l'application. À chaque nouvelle version, changer le nom du cache dans sw.js.
- Google Sheet « Green Master – Stand Lyon » (onglets Parties et Config) + script Apps Script apps-script/Code.gs déployé en application web. L'URL /exec se colle dans le menu dev, onglet « Google Sheet ». Connecté, le jeu envoie chaque partie dans le Sheet (file d'attente locale si le réseau coupe) et lit cadeaux, QR code, règlement et classements depuis l'onglet Config.

## Déploiement Apps Script (v31)

Script « Green Master - Stand Lyon » déployé en application web (version 1, accès « Tout le monde », exécuté avec le compte du propriétaire du Sheet). Son URL /exec est en dur dans CONFIG.sheetUrl : le jeu est connecté au Sheet partout (site, appli, artefact) sans rien configurer. Pour changer de Sheet ou de script, coller une autre URL dans le menu dev, onglet « Google Sheet » (prioritaire sur la valeur en dur). Fuseau du Sheet : Europe/Paris.

## Mode invité (v32)

Prénom + e-mail « invité » (ou « invite ») = partie d'invité : pas d'e-mail, pas de jeu-concours, classement à part « Classement Invités », séparé du public et de la Team Liberty. Colonne « Invité » dans l'export et colonne guest dans le Sheet (script Apps Script version 2).

## Mobile (v33)

Les écrans (accueil, résultats, roue, tuto, menu dev) occupent tout l'écran du téléphone, en portrait comme en paysage, sans débordement horizontal. En portrait pendant la course, un écran « Tourne ton téléphone » s'affiche sur tactile. Sur tactile, les textes parlent du bouton rouge et du joystick au lieu d'ESPACE et des flèches. Mise en page compacte sous 460 px de haut (téléphone en paysage) et cartes empilées sous 520 px de large.

## Lisibilité des dangers, nuages (v34)

- Nuages fixes par rapport au regard : ils ne tournent plus avec la route dans les virages (seules les collines gardent la parallaxe).
- Sur tactile : vitesse maximale réduite de 22 % (l'affichage reste sur 85 km/h, les rivaux ralentissent d'autant) et flaques, huile, nids-de-poule et débris agrandis de 30 %.
- Partout : les taches d'huile sont de vraies nappes de pétrole noires à plusieurs lobes avec liseré et reflet ; flaques plus bleues et opaques, nids-de-poule plus grands.

## Écran de chute Liberty Rider (v35)

À chaque chute du joueur, écran d'alerte 2,4 s aux couleurs Rouge feu : picto alerte pulsant, « Chute détectée », « Liberty Rider prévient les secours et tes proches », barre de progression, illustration officielle « Liberto qui appelle l'assistance » (Drive, assets/brand/gm/liberto-assistance.svg), ambulance cartoon en SVG qui arrive de la droite avec gyrophares et roues animées, sirène synthétique. Pendant l'écran, tout est figé (rivaux, chrono, physique) ; à la fin le pilote repart à 55 % de sa vitesse, sans glissade ni perte de position. La pénalité de points (-20) reste. L'écran d'alerte exact de l'app n'a pas été retrouvé dans le Figma Product 2026 (seuls les réglages de notifications mentionnent la chute) : le style suit la charte et les dégradés « Alert » du fichier.

## Alerte accident (v36)

L'écran de chute reprend le principe de l'app : titre « Alerte accident », compte à rebours (3 s) avant prévenance des secours et des proches, gros bouton vert « Je vais bien » (reprend la course tout de suite) et gros bouton rouge « J'ai besoin d'aide » (les secours sont prévenus, l'ambulance arrive, reprise 2 s plus tard). Sans action, reprise automatique à la fin du compte à rebours. Course, rivaux et chrono figés pendant tout l'écran.

## Mise à jour immédiate (v37)

Le service worker sert désormais la page index.html en « réseau d'abord » (cache seulement hors ligne) : une nouvelle version publiée est visible dès le chargement suivant, sans double rechargement. Les autres fichiers restent en cache versionné.

## Alerte accident sur le décor, ambulance Superdriver, Liberto urgentiste (v39)

- L'écran d'alerte ne masque plus la scène : le décor 3D figé reste visible derrière un panneau sombre translucide (titre, compte à rebours, boutons).
- Ambulance : illustration cartoon des captures Store du Figma « [INTERNAL] - RENAULT Superdriver » (calque image, exportée en 3x, remise à l'endroit et détourée) : assets/brand/gm/ambulance.png. Gyrophares et rampe lumineuse clignotent (halos CSS superposés).
- Liberto urgentiste : illustration générée (ElevenLabs, modèle gemini-3-pro-image) à partir de l'illustration officielle de Liberto et de l'ambulance en références ; variante retenue : assets/brand/gm/liberto-urgentiste.png, variante de secours : liberto-urgentiste-2.png. Référence utilisée : assets/brand/gm/liberto-ref.png.
- Pendant l'alerte, le HUD et les commandes tactiles sont masqués.

## Téléphone : installation, plein écran, vitesse, son (v40)

- Sur tactile dans un navigateur (pas en appli installée), un bandeau sur l'accueil propose « Installer l'appli » : sur Android, invite d'installation native ; sur iPhone, mode d'emploi Partager → Sur l'écran d'accueil (Safari n'autorise pas le plein écran autrement). Sur Android, le bouton GO passe aussi le jeu en plein écran et verrouille le paysage.
- Vitesse maximale sur tactile : 62 % de celle du PC (affichage toujours sur 85 km/h).
- Son moteur : le ralenti s'éteint dès 35 % de la vitesse, le roulage entre dès qu'on bouge et monte jusqu'à pleine vitesse (plus de ralenti audible à fond).

## Google Sheet : un onglet par type de joueur (script v3)

- Le script Google range chaque partie dans l'onglet qui correspond : « Parties » pour les visiteurs du salon (c'est l'onglet à exporter pour le tirage), « Team Liberty » pour l'e-mail `liberty`, « Invités » pour l'e-mail `invité`. Les onglets sont créés automatiquement avec leurs en-têtes.
- Le cadeau de la roue est complété dans le bon onglet. Les trois classements du jeu lisent chacun leur onglet.

## Son moteur refait, lié à la vitesse (v41)

- Diagnostic : l'enregistrement de roulage (DragStar 650) a une fondamentale d'environ 36 Hz, plus basse que celle du ralenti (43 Hz). Même accéléré de 30 %, il sonnait comme un ralenti à pleine vitesse.
- Nouveau modèle : 4 rapports. Dans chaque rapport le régime monte avec la vitesse, puis retombe au passage du suivant (petit creux de volume). À fond en 4e, régime maximal.
- La boucle de roulage est lue entre 0,85× et 2,4× selon le régime (fondamentale ~30 à 90 Hz), avec un filtre qui s'ouvre aux gaz et se ferme au pied levé. Seule la partie stable de l'enregistrement (16 à 54 s) est bouclée.
- Une couche synthétique (45 à 230 Hz) monte dans les tours avec le régime : c'est elle qui donne la sensation de « plein fer ».
- Le ralenti ne joue plus qu'à l'arrêt (sous 10 % de la vitesse).

## Panneaux partenaires au bord de la route, son adouci (v42)

- Chaque partenaire a exactement un panneau publicitaire sur le parcours, dans un ordre tiré au sort à chaque partie : April Moto, Allianz, Banque Populaire, Caisse d'Épargne, Groupama, AXA Passion, MAIF, Macif, Matmut, Mutuelle des Motards, IMA. Les autres panneaux (le premier et trois autres) sont Liberty Rider. Covéa volontairement absent (pas encore partenaire).
- Logos : fichiers blancs du Drive, dossier « logo assurance white » (Drive partagé Marketing), IMA depuis « logoIMA.png ». Copiés dans `assets/brand/partners/`.
- Son moteur : en attendant un nouvel enregistrement, la couche synthétique est coupée et la boucle de roulage n'est plus accélérée qu'entre 0,9× et 1,8× (le modèle à 4 rapports reste).

## Son moteur FJR1300, bouton son, panneau In&motion (v43)

- Nouveau son de roulage : « Yamaha FJR1300 2001 Sport Touring Motorcycle, Driving, Fast, Engine, Perspective » (Epidemic Sound, fourni par Emmanuel). Le jeu ne boucle que le plateau stable de 24,2 à 30,4 s (~77 Hz), avec un fondu de 0,25 s pour une boucle sans clic. Hauteur de 0,55× à 1,35× selon le régime (modèle à 4 rapports conservé), filtre qui s'ouvre aux gaz.
- Bouton rond blanc en haut à droite de la bande noire pour couper ou remettre le son (même effet que la touche M). Paramètre d'URL `?mute=1` pour démarrer en silence.
- Panneau In&motion ajouté (logo « IN&MOTION AIRBAG » extrait du visuel « In & Motion.png » du Drive, passé en blanc). 12 partenaires, 16 panneaux.

## Fin de course silencieuse, invulnérabilité, concurrents, gravillons (v44)

- Le moteur (et la pluie) ne jouent que pendant le compte à rebours et la course : silence sur l'accueil et l'écran de résultats.
- Après une chute, le pilote est invulnérable 1,6 s en se relevant (il clignote) : il traverse la voiture ou le danger qui l'a fait tomber, aucun danger ni collision ne compte pendant ce temps.
- Concurrents : choix de voie par score (voitures, autres concurrents, joueur et dangers devant ; interdiction de se rabattre sur quelqu'un à côté), freinage derrière plus lent, braquage plus vif quand c'est urgent, et 4 fois moins de chutes sur les voitures.
- Gravillons : nappe de sable claire bordée de sombre, gros cailloux contrastés, sur une seule voie (0,8 largeur de voie) au lieu de toute la route, donc évitable ; glissade (vitesse −25 %, −10 PV) au-dessus de 45 % de la vitesse, chute seulement à plus de 75 % dans un virage serré.

## Concurrents qui dépassent, bruit de frein (v45)

- Les concurrents ne freinent plus derrière le joueur ni derrière un autre motard sauf s'il est collé : ils ne freinent que derrière une voiture. Une voie n'est « interdite » que si quelqu'un est vraiment à côté. Ils reprennent donc leurs dépassements.
- Crissement de frein : « Vehicles, Brake, Car, Tire Squeal, Brake Skid 01 » (Epidemic Sound, fourni par Emmanuel) joué au coup de frein au-dessus de 35 % de la vitesse, volume et hauteur selon la vitesse, au plus une fois par 1,5 s.

## Concurrents sans freinage, crissement discret (v46)

- Les concurrents ne freinent plus du tout : ils changent de voie (d'autant plus vite qu'une voiture est proche) et gardent leur rythme. Seul le joueur freine.
- Crissement de frein des concurrents : très léger (volume 0,07 à 0,13 selon la distance, au plus une fois toutes les 5 s par concurrent) quand un concurrent proche lève le pied franchement. Le nôtre reste nettement devant.
- (v47) Mécanique : les concurrents freinent légèrement derrière une voiture seulement quand aucune voie n'est libre (à moins de 6 longueurs), pour éviter le carambolage ; sinon ils gardent leur rythme.

## Feux stop (v48)

- Chaque moto (joueur et concurrents) a un feu stop à l'arrière : rouge sombre éteint, rouge vif avec un halo quand elle freine. Le nôtre s'allume avec le frein (et le crissement), ceux des concurrents quand ils lèvent le pied ou freinent.
- (v49) Notre feu stop s'allume dès qu'on lâche l'accélérateur (frein moteur), pas seulement sur le frein ; le crissement reste réservé au vrai coup de frein.
- (v50) Lâcher l'accélérateur compte comme freiner : feu stop allumé et crissement au moment où on lâche (à plus de 35 % de la vitesse), comme sur le frein.

## Icône Flooz officielle (v51)

- Le bloc jeu-concours de l'accueil affiche l'icône Flooz officielle (composant « flooz » du fichier Figma Liberty Rider – Product 2026, exporté en SVG via Figma dans Chrome, le connecteur Figma étant limité) à la place de l'icône moto.

## Écran de résultat : niveau Liberto et GreenPoints (v52)

- Les cinq illustrations de niveau du Figma Product 2026 (page « GM Classement Lot 2 », cadre « À exporter pour les devs ») : Nouvelle recrue, Routard, Globe-Trotter, Vétéran de la route, GreenMaster (Liberto super-héros à la cape). Export SVG via Figma dans Chrome, découpé en cinq fichiers `assets/brand/gm/levels/`.
- Le niveau dépend de la part des points possibles sur le parcours (dangers × 50 + Flooz × 5) : moins de 20 % recrue, 40 % routard, 60 % globe-trotter, 80 % vétéran, au-delà GreenMaster. L'illustration et le nom s'affichent en tête du résultat.
- Les points sont affichés dans une pastille blanche avec l'icône GreenPoints officielle (casque vert #37A67E, export SVG du même fichier), « 250 GreenPoints ».

## Illustration Flooz sur l'accueil (v53)

- Le bloc jeu-concours affiche l'illustration officielle des trois pièces Flooz (nœud « Group 17 » du Figma Product 2026, page Centre d'activité), exportée en SVG via Figma dans Chrome (les pièces y sont des images intégrées).

## Crissement coupé à la réaccélération, pièces pour les concurrents (v54)

- Le crissement de frein s'éteint en 40 ms dès qu'on réaccélère, au lieu de jouer jusqu'au bout.
- Les concurrents ramassent les Flooz quand ils passent dessus (petit message si c'est devant toi) : la pièce disparaît pour toi. Toute pièce ramassée (par toi ou par eux) réapparaît 6 s plus tard, comme dans Mario Kart.

## Flooz, dangers visibles, chutes des concurrents (v55)

- Flooz : 20 grappes au lieu de 13 ; une pièce prise par un concurrent disparaît net, et toute pièce prise réapparaît 2 s plus tard.
- Dangers : plus aucun danger caché derrière une bosse. Chaque emplacement est vérifié : depuis 80 et 160 segments en amont, la ligne de vue caméra → danger ne coupe aucune bosse, et l'approche est droite (pas de virage sur les 80 derniers segments). Le danger « juste après le sommet » est supprimé ; gravillons et huile sont posés sur la ligne droite avant le virage, plus dedans.
- Concurrents : chutes occasionnelles et réalistes. Sur un danger qu'ils n'ont pas évité à bonne vitesse (huile 55 %, cônes 40 %, gravillons 35 %, débris 30 %, nid-de-poule 25 %, flaque 20 %), et parfois dans un virage serré pris à plus de 90 % (environ 1 % par seconde passée dedans). Message et dérapage si c'est près de toi.

## Classement fiable et page « Classement Liberty » (v56)

- Bug corrigé : le classement de fin de course utilisait les données chargées à l'ouverture de la page. Quand plusieurs personnes jouaient en même temps, chacune était « première ». Désormais le jeu relit le Sheet juste avant d'afficher le résultat (3 s maximum), puis une seconde fois après l'envoi de la partie, et réaffiche le classement avec les données à jour.
- Menu développement → « 🏆 Classement Liberty » : page plein écran avec le classement Team Liberty (onglets Green Master et Invités), 30 premiers, dangers signalés et temps, actualisée toutes les 10 s depuis le Sheet. Pour un écran dédié : `?board=team` (ou `public`, `guest`) dans l'adresse ouvre directement cette page.
