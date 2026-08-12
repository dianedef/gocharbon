---
section: tutos
type: Tuto
statut:
- backlog
_priorité: normal
tags:
- Tutoriels
title: Retrouver L'Email D'Une Entreprise À Partir D'Une Page Facebook Ou Linkedin
author: Diane
description: 'Découvre Retrouver L''Email D''Une Entreprise À Partir D''Une Page Facebook
  Ou Linkedin : outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

J’ai réussi a scrapper bcp (énormément) d’url fb; tous des professionnels que je souhaite démarcher à froid et par e-mail.

Mon seul objectif est d’extraire les mails lorsqu’il sont présents sur les pages.

Malheuresement, je rencontre des problèmes à chaque fois que j’essaie de scraper de grandes quantités d’url.

J’ai essayé plusieurs scripts, tous en python, des logiciels d’automatisation comme Zennoposter et BAS mais rien n’y fait, je finis toujours soit par être restreint par FB, soit dans l’obligation de me connecter.

Parfois je récupère qu’une partie du mail , et à l’envers style @nom.prenom et aucun fournisseur…

Je vous avoue que je ne sais plus trop quoi faire si ce n’est faire entrer en jeu des proxys (pas hyper familier avec ca) donc si vous avez des conseils la dessus; ils sont les bienvenus…


  
Ce ne sont que des facebook de société?

Si oui, je viens de sortir une api : ou tu donnes : siret ou lien facebook/linkedin société ou adresseou nom … et ça te renvois la fiche sur la société dont les emails.

Les 50.000 gets sont à 50 euros.  
les 500 gets sont gratuites je les ouvres au comptes goutes

exemple de requete ( il te faut un token pour que ça marche)

[http://api.rocketlead.fr:8080/api/v1/companies?api_key=token&social_facebook=www.facebook.com/cfa35pp 6](http://api.rocketlead.fr:8080/api/v1/companies?api_key=token&social_facebook=www.facebook.com/cfa35pp)