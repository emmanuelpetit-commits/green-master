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
