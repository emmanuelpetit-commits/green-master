# Backend Google Sheet de Green Master

Un seul Google Sheet, partagé à l'équipe, alimenté en direct par le jeu :

- onglet **Parties** : une ligne par partie terminée (date, prénom, e-mail, jeu-concours, marketing, Team Liberty, points, dangers signalés, dangers sur le parcours, chutes, temps, cadeau de la roue, Flooz, identifiant).
- onglet **Config** : clé / valeur. `cadeau1` … `cadeau8` (les 8 cases de la roue), `qr_url` (image du QR code du badge exclusif), `reglement_url`, `contact_rgpd`.

Le script `Code.gs` est déployé en Application Web depuis l'éditeur Apps Script du Sheet (Extensions → Apps Script) :
exécuter en tant que le propriétaire, accès « Tout le monde ». Son URL se terminant par `/exec` est collée dans le jeu,
menu développement → onglet « Google Sheet ».

Dès que l'URL est renseignée, le jeu lit cadeaux, QR code et classements depuis le Sheet et y envoie chaque partie.
Sans connexion ou hors ligne, le jeu continue avec le stockage local de la machine, et renvoie les parties en attente
dès que la connexion revient.
