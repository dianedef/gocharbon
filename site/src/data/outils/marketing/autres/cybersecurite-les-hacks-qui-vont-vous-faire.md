---
draft: true
section: outils
metadataEnrichedAt: null
tags:
- Outils
imageNameKey: null
title: Cybersécurité Les Hacks Qui Vont Vous Faire Frémir (Et Comment S'En Protéger)
author: Diane
description: "Cybersécurité Les Hacks Qui Vont Vous Faire Frémir (Et Comment S'En Protéger)."
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
---

# ANY.RUN - La sandbox cloud des chasseurs de malwares

Le 7 mars 2024par Korben -

1. [Sécurité-Vie-Privee](https://korben.info/categories/securite-vie-privee/ "Voir tous les articles de la catégorie Securite-Vie-Privee")
2. [Cybersecurite](https://korben.info/categories/securite-vie-privee/cybersecurite/ "Voir tous les articles de la sous-catégorie Cybersecurite")

– Article en partenariat avec Any.run –

Aujourd’hui, j’aimerais vous parler d’un service qui va modifier totalement la manière dont nous analysons et protégeons nos systèmes contre les menaces informatiques et plus particulièrement contre les attaques de phishing et les malwares qui en découlent.

Il s’agit d’[ANY.RUN](https://app.any.run/?utm_source=korben&utm_medium=article&utm_campaign=lasandbox&utm_content=tipromo&utm_term=07032024#register/), un outil basé sur le cloud qui permet d’analyser sans prendre de risque et sans prise de tête, tous types de malwares présents sous Windows ou Linux. Vous l’aurez compris, ce service est d’abord conçu pour aider les chercheurs en sécurité, mais également les équipes SOC (Security Operations Center) et DFIR (Digital forensics and incident response) à examiner en détail les menaces qu’ils détectent, mais également simuler différents scénarios et ainsi obtenir des tonnes d’infos sur le comportement de ces logiciels malveillants.


Pour rappel, un malware est un logiciel malveillant capable de s’infiltrer sur votre ordinateur, et dont le seul but est de vous nuire en vous voulant des données, en vous extorquant de l’argent, en endommageant votre système ou en exploitant votre machine au travers d’un botnet. Sous Windows, ces menaces sont particulièrement virulentes, exploitant la plupart du temps des vulnérabilités du système ou les comportements imprudents des utilisateurs. Mais je ne vous apprends rien en vous disant qu’un simple clic sur un lien dans un email de phishing peut suffire à déployer par exemple un ransomware qui chiffrera alors l’ensemble de vos fichiers et exigera une rançon (en cryptomonnaie ^^) pour les récupérer.

Contrairement à d’autres outils plus basiques comme VirusTotal, [ANY.RUN](https://app.any.run/?utm_source=korben&utm_medium=article&utm_campaign=lasandbox&utm_content=tipromo&utm_term=07032024#register/) propose un environnement en vase clos où chaque malware peut être exécuté sans risque, comme s’il se déployait sur un véritable système. Cette approche permet aux utilisateurs d’observer en temps réel les actions du malware : De la création de nouveaux processus et l’arrivée de fichiers malveillants jusqu’aux tentatives de connexion à des URL douteuses. Tout ce qui se passe dans le système infecté, y compris les modifications apportées à la base de registre et les communications réseau, est relevé de manière transparente.


Linux étant au cœur des infrastructures informatiques des entreprises et des organisations, il représente également une cible de choix pour les cybercriminels, ce qui se confirme puisque des chercheurs d’IBM ont noté sur 2020, une hausse de 40 % des malwares ciblant spécifiquement Linux. C’est pourquoi ANY.RUN propose en plus de sa sandbox Windows, un environnement basé sur Ubuntu.


Les outils d’audit fournis par ce service permettent également de générer des rapports contenant tout ce qu’il y a à retenir de votre analyse de malware. Je parle bien sûr de vidéos, de captures d’écran, de hash de fichiers, ainsi que toutes les données accumulées durant l’exécution de la tâche.

Comme vous pouvez le voir sur les captures écran, ANY.RUN supporte les dernières versions de tous les navigateurs et systèmes d’exploitation populaires. La plupart des signatures de logiciels malveillants produites par ANY.RUN sont également poussées vers [la base ATT&CK de Mitre](https://korben.info/base-de-connaissances-cybersec-attck.html) et sont présentées de manière visuelle et pratique, ce qui permet de former les nouveaux chasseurs de malwares.

Si vous voulez analyser une nouvelle menace potentielle, pas de problème avec ANY.RUN. Il vous suffit d’uploader un fichier ou d’utiliser une URL pour lancer l’analyse dans un environnement Windows de la version de votre choix. Vous pourrez alors ajuster la durée de l’exécution, et simuler des interactions réseaux via un proxy HTTPS ou router le réseau via un VPN/Proxy/Tor. La plateforme propose également plusieurs applications et outils préinstallés pour imiter un environnement utilisateur réel. Les paramètres de confidentialité et de conservation de la tâche sont facilement spécifiables et des fonctionnalités avancées comme l’interactivité automatisée ou l’accès à ChatGPT viendront enrichir encore plus l’analyse.


L’outil affiche le schéma d’attaque du malware dans une structure arborescente interactive, vous permettant de voir en un clin d’œil les principaux processus lancés. Ensuite, toutes les données collectées au travers de cette sandbox peuvent être rejouées autant de fois qu’on le souhaite pour des analyses futures ou tout simplement générer des rapports. Bien sûr, tout est exportable et partageable, ce qui vous permettra de travailler à plusieurs sur une menace.

Dans cet exemple d’un malware en pleine action, celui-ci cherche à s’ancrer dans le système par des modifications du registre Windows, signe d’une tentative de persistance. Il exécute également un fichier batch suspect qui pourrait déployer d’autres composants nuisibles. Il utilise également la commande `vssadmin.exe` pour effacer les points de restauration du système. C’est une technique typique des ransomwares pour empêcher toute récupération de données après une attaque. Vous voyez, on en apprend beaucoup avec ANY.RUN.


Au-delà des possibilités d’analyse temps réel des malwares, l’intégration poussée de la Threat Intelligence (TI) au sein d’Any Run est également à souligner. Cela se matérialise au travers d’une base de renseignement sur les menaces qui est constamment enrichie par une communauté internationale de chercheurs. Cela permet de collecter et d’analyser les malwares dès qu’ils pointent le bout de leur nez. Les indicateurs de compromission (IOC) sont alors connus, ce qui offre un gros avantage pour la suite. [D’ailleurs si vous voulez vous abonner, Any run vous offre gratuitement 50 options TI en passant par ce lien.](https://intelligence.any.run/plans?TI_promo=&utm_source=korben&utm_medium=article&utm_campaign=lasandbox&utm_content=tipromo&utm_term=07032024)


On y retrouve dans un flux JSON / STIX ou via le site web, tous les événements liés au malware, les adresses IP, les domaines utilisés, les hash de fichiers…etc. Comme ça, les équipes SOC sont à jour sur les menaces et leurs IOC et peuvent réagir beaucoup plus vite.


Vous l’aurez compris, ANY.RUN permet aux chercheurs en sécurité d’éliminer totalement ce besoin d’avoir une infrastructure d’analyse. C’est un gain de temps et de sécurité assuré ! Et comme c’est un outil professionnel, vous pouvez également l’utiliser en combinaison avec votre SIEM (Security Information and Event Management) / SOAR (Security Orchestration, Automation and Response).

Si l’analyse de malware fait partie de votre travail ou est une passion dévorante, [je vous invite donc à essayer ANY.RUN durant les 14 jours d’essai offerts.](https://app.any.run/?utm_source=korben&utm_medium=article&utm_campaign=lasandbox&utm_content=tipromo&utm_term=07032024#register/)

Largement de quoi vous faire une idée !

[franckferman/MetaDetective: 🕵️ Unleash Metadata Intelligence with MetaDetective. Your Assistant Beyond Metagoofil.](https://github.com/franckferman/MetaDetective)
# ChatGPT est plus efficace et moins coûteux qu'un cybercriminel

Le 18 avril 2024par Korben -

1. [Sécurité-Vie-Privee](https://korben.info/categories/securite-vie-privee/ "Voir tous les articles de la catégorie Securite-Vie-Privee")
2. [Cybersecurite](https://korben.info/categories/securite-vie-privee/cybersecurite/ "Voir tous les articles de la sous-catégorie Cybersecurite")

Les grands modèles de langage (LLM), comme le célèbre **GPT-4** d’OpenAI, font des prouesses en termes de génération de texte, de code et de résolution de problèmes. Perso, je ne peux plus m’en passer, surtout quand je code. Mais ces avancées spectaculaires de l’IA pourraient avoir un côté obscur : la capacité à exploiter des vulnérabilités critiques.

C’est ce que révèle [une étude de chercheurs de l’Université d’Illinois](https://arxiv.org/abs/2404.08144) à Urbana-Champaign, qui ont collecté un ensemble de 15 vulnérabilités 0day bien réelles, certaines classées comme critiques dans la base de données CVE et le constat est sans appel. Lorsqu’on lui fournit la description CVE, GPT-4 parvient à concevoir des attaques fonctionnelles pour 87% de ces failles ! En comparaison, GPT-3.5, les modèles open source (OpenHermes-2.5-Mistral-7B, Llama-2 Chat…) et même les scanners de vulnérabilités comme ZAP ou Metasploit échouent lamentablement avec un taux de 0%.

Heureusement, sans la description CVE, les performances de GPT-4 chutent à 7% de réussite. Il est donc bien meilleur pour exploiter des failles connues que pour les débusquer lui-même. Ouf !

Mais quand même, ça fait froid dans le dos… Imaginez ce qu’on pourrait faire avec un agent IA qui serait capable de se balader sur la toile pour mener des attaques complexes de manière autonome. Accès root à des serveurs, exécution de code arbitraire à distance, exfiltration de données confidentielles… Tout devient possible et à portée de n’importe quel script kiddie un peu motivé.

Et le pire, c’est que c’est déjà rentable puisque les chercheurs estiment qu’utiliser un agent LLM pour exploiter des failles coûterait 2,8 fois moins cher que de la main-d’œuvre cyber-criminelle. Sans parler de la scalabilité de ce type d’attaques par rapport à des humains qui ont des limites.

Alors concrètement, qu’est ce qu’on peut faire contre ça ? Et bien, rien de nouveau, c’est comme d’hab, à savoir :

- Patcher encore plus vite les vulnérabilités critiques, en priorité les “0day” qui menacent les systèmes en prod
- Monitorer en continu l’émergence de nouvelles vulnérabilités et signatures d’attaques
- Mettre en place des mécanismes de détection et réponse aux incidents basés sur l’IA pour contrer le feu par le feu
- Sensibiliser les utilisateurs aux risques et aux bonnes pratiques de “cyber-hygiène”
- Repenser l’architecture de sécurité en adoptant une approche “zero trust” et en segmentant au maximum
- Investir dans la recherche et le développement en cybersécurité pour garder un coup d’avance

Les fournisseurs de LLM comme OpenAI ont aussi un rôle à jouer en mettant en place des garde-fous et des mécanismes de contrôle stricts sur leurs modèles. La bonne nouvelle, c’est que les auteurs de l’étude les ont avertis et ces derniers ont demandé de ne pas rendre publics les prompts utilisés dans l’étude, au moins le temps qu’ils “corrigent” leur IA.

[Source](https://www.tomshardware.com/tech-industry/artificial-intelligence/chatgpt-can-craft-attacks-based-on-chip-vulnerabilities-gpt-4-model-tested-by-uiuc-computer-scientists)

# OpenCanary - Le pot de miel pour piéger les cyber criminels

Le 29 juin 2024par Korben -

1. [Sécurité-Vie-Privee](https://korben.info/categories/securite-vie-privee/ "Voir tous les articles de la catégorie Securite-Vie-Privee")
2. [Cybersecurite](https://korben.info/categories/securite-vie-privee/cybersecurite/ "Voir tous les articles de la sous-catégorie Cybersecurite")

**OpenCanary**, c’est le pot de miel nouvelle génération pour attraper tous ces satanés cybercriminels. Ce petit logiciel va simuler plein de services réseau, comme un serveur web, un partage Windows, un serveur SSH…etc Bref, un vrai buffet à appâts numériques et dès qu’un hacker tombe dans le panneau et interagit avec, paf, vous recevez une alerte !

L’outil est hyper léger et s’installe facilement, même sur un Raspberry Pi ou un VM. Et comme c’est du logiciel libre, vous pouvez l’adapter à vos besoins et surtout vous éviter une solution proprio payante.

Alors comment ça fonctionne ? Et bien c’est simple comme bonjour :

- Vous installez **[OpenCanary](https://github.com/thinkst/opencanary)**sur une machine de votre réseau interne
- Vous le configurez pour imiter les services qui vous bottent (serveur web, FTP, base de données…)
- Vous attendez patiemment qu’un hacker morde à l’hameçon
- Dès qu’il interagit avec le honeypot, vous recevez une belle alerte qui vous file son IP et plein d’infos sur l’intrusion

C’est pas beau ça ?

En plus, vous pouvez même envoyer les alertes par mail, SMS ou même les agréger dans un outil de monitoring. Bon, je vous cache pas qu’il faut quand même un minimum de connaissances techniques pour faire tourner le bouzin. Mais si vous n’avez pas peur de mettre les mains dans le cambouis et de jouer avec la ligne de commande, c’est à la portée de n’importe quel barbu un peu motivé.

Et puis c’est quand même super fun de tendre des pièges aux méchants hackers et de les voir se faire avoir comme des bleus. Mais attention hein, faut pas non plus tomber dans la paranoïa et transformer son réseau en véritable champ de mines. Faudra doser pour que ça reste digeste sinon, vous allez avoir beaucoup de bruit dans vos alertes.

En tout cas, moi je dis bravo aux petits gars de [Thinkst](https://thinkst.com/)qui nous ont pondu cet outil. Pour les plus motivés, voici le lien Github du projet : [https://github.com/thinkst/opencanary](__MASK_18__).

Amusez-vous bien et happy hacking !

# Ressources

[Le principe fondamental de la cybersécurité (ft. @Pour1nfo ) - YouTube](https://www.youtube.com/watch?v=zTc1fIs0Xt8)
- 💻 La notion de défense en profondeur est fondamentale en cybersécurité.
- 🔒 Miser sur la redondance et la diversification des solutions améliore la protection.
- 🕵️‍♂️ Le monitoring constant du système d'information permet d'identifier les anomalies rapidement.
- 🛡️ Limiter les droits de chaque composant au strict minimum nécessaire renforce la sécurité.
- 🚪 Réduire au maximum la surface d'attaque en minimisant le nombre de portes d'entrée est essentiel.
- 💻 Les erreurs des collaborateurs peuvent compromettre la sécurité informationnelle de l'organisation
- 🔒 Appliquer la défense en profondeur pour éviter les compromissions en cas d'erreurs individuelles
- 🤝 Accompagner et former les collaborateurs pour les impliquer dans la cybersécurité de l'organisation
- 💬 Contributions importantes à la cybersécurité = poser les bonnes questions et s'approprier le sujet
- 📚 Importance d'une réponse sociétale à la menace cyber, au-delà des actions individuelles
- 🛡 Augmenter les exigences légales vis-à-vis des produits informatiques pour renforcer la sécurité
- 🆓 Favoriser les logiciels libres et open source pour plus de contrôle face aux menaces cyber
- 🌐 Journalistes, développeurs et scientifiques ont une responsabilité particulière dans la cyberdéfense

[Cyber-attaques: impacts et solutions pour protéger son business - François-Xavier Combe - YouTube](https://www.youtube.com/watch?v=KhG7Jpn6QzE&list=WL&index=395)
[Que deviennent nos mots de passe après un leak de données - Houssem Belhadj Ahmed & Mickael Jeanroy - YouTube](https://www.youtube.com/watch?v=eHrlyo9U6E4&list=WL&index=408)
[CHRIS : 4 Cyber-Attaques Hors-Norme ! - YouTube](https://www.youtube.com/watch?v=Gl5CSPvYvtU&list=WL&index=16)
[Protégez vos identités Active Directory avec une authentification à double facteurs (2FA) et à l'authentification unique (SSO) | UserLock](https://www.isdecisions.fr/logiciels/userlock/)
[ReachFive | Gestion des Identités et Accès Client pour le B2C](https://reachfive.com/fr/)
[Prix et essai gratuit pour gestionnaire de mot de passe | 1Password](https://1password.com/fr/business-pricing)
[OneWave • La carte biométrique dédiée à l’authentification forte](https://onewave.io/)
[Accès sécurisé SafeNet](https://cpl.thalesgroup.com/fr/access-management/safenet-trusted-access)

[Vade | Sécurité de l’email pour les entreprises propulsée par l’IA](https://www.vadesecure.com/fr/)
Sur mon dernier article de blog, je vous plonge dans l'univers de Vade Secure, une entreprise innovante qui révolutionne la sécurité des emails grâce à l'intelligence artificielle 🛡️. **Vade Secure, leader mondial dans ce domaine, protège pas moins de 1,4 milliard de boîtes mail à travers le monde**. Leurs solutions sont conçues pour prévenir efficacement les menaces comme le spear phishing, les malwares et les ransomwares, assurant ainsi une sécurité renforcée pour les entreprises et leurs clients.

Une annonce récente a marqué un tournant majeur pour Vade Secure : leur fusion avec Hornetsecurity Group. Ce partenariat stratégique vise à consolider leur position en tant que leader européen de la cybersécurité. Ensemble, ils s'engagent à offrir des services de sécurité de premier plan, répondant aux besoins croissants de conformité et de protection des données pour les entreprises européennes. Pour en savoir plus sur cette acquisition et ses implications, je vous invite à lire la suite sur leur site officiel. 🌐

- [**Cybersécurité pour les PME | Vade](https://www.vadesecure.com/fr/vade-pour-pme) Picardie - France**


## Vade for M365 Combine Détection des Menaces Basée Sur l’IA et Réponse Automatisée Aux Incidents. Notre Solution Est Ainsi Capable d’intercepter les Menaces Sophistiquées Que Microsoft Laisse Passer et Vous Aide à Répondre Aux Menaces Rapidement et Avec Précision.


## Vade for M365 s’in**tègre à Microsoft 365 via Une API et Peut Être Déployée En Quelques Minutes seu**lement. Il n’est Pas Nécessaire de Modifier les Enregistrements MX


## **Le Tableau de bord** Vous Permet de Visualiser les Menaces Analysées, Classifiées et Bloquées Par Vade Sur la Base de Vos Paramètres Sur les 30 Derniers Jours.


## La Sobriété de l’interface Témoigne des Principes de Design et de Fonctionnalité Qui Définissent **Vade for M365** : Simplicité et Efficacité.


## La Page **Détails du journal** Fournit des Informations Essentielles Sur l’email Qui Vous Intéresse Pour Vous Aider à l’analyser.


## Vous Y Trouverez Notamment l’horodatage de l’email, Son Expéditeur, Son Objet, l’alias Utilisé et l’historique.


## Cet Historique Couvre Toute la Durée de Vie de l’email. Vous Pourrez Également Y Copier les URL Contenues Dans l’email et les Analyser Avec le Décodeur d’URL de Vade. Vous Aurez Aussi la Possibilité d’envoyer des Fichiers Pour les Analyser.


## La Page **Détails du journal** Fournit des Informations Essentielles Sur l’email Qui Vous Intéresse Pour Vous Aider à l’analyser.


## Vous Y Trouverez Notamment l’horodatage de l’email, Son Expéditeur, Son Objet, l’alias Utilisé et l’historique.


## Cet Historique Couvre Toute la Durée de Vie de l’email. Vous Pourrez Également Y Copier les URL Contenues Dans l’email et les Analyser Avec le Décodeur d’URL de Vade. Vous Aurez Aussi la Possibilité d’envoyer des Fichiers Pour les Analyser.


## Si Microsoft Ne Présente Que l’email Signalé Par les Utilisateurs, Vade Regroupe Tous les Emails Signalés.


## Ce Regroupement Est Réalisé Sur la Base de l’expéditeur, de l’objet Ou Encore de l’adresse IP.


## Penchons-nous Maintenant Sur Un Groupe d’emails.


## **File Inspector** Décortique les Fichiers PDF et Office Directement Dans **Vade for M365**, sans Faire Courir le Moindre Risque à l’administrateur.


## Il Révèle Également des Informations Détaillées Sur la Pièce Jointe, Notamment Son Empreinte Numérique (hachage) Dans Divers Formats, Ses Métadonnées, Ses Images Intégrées et Même Son Code Intégré.


## Vous Pouvez Également Importer des Fichiers Dans **File Inspector** à Partir de la Page Toolbox.


Trois ans après un tour de table avorté de 70 millions d’euros auprès du fonds américain General Catalyst, qui devait marquer son accélération aux États-Unis, [Vade](https://www.vadesecure.com/fr/) (ex-Vade Secure) lève cette fois-ci 28 millions d’euros auprès de fonds français. L’entreprise basée à Hem, près de Lille, qui a indiqué son ambition de réaliser un nouveau tour de table plus conséquent dans les mois à venir, a en effet rencontré des difficultés aux États-Unis après que son principal concurrent Proofpoint l’ait attaqué en justice.

_« Les Américains saisissent plus facilement la justice pour contrer un concurrent qui progresse »_, commente Georges Lotigier, CEO de Vade. _« Cette procédure dure depuis juillet 2019, c’est très long et très coûteux […] Nous attendons désormais le verdict final »._

Aujourd’hui, la startup portée par [Georges Lotigier](https://www.linkedin.com/in/georges-lotigier-a0527b/) entend tourner la page avec un tour de table de 28 millions d’euros, réalisé auprès de Tikehau Ace Capital, Bpifrance et Auriga Partners. _« Si nous avons investi dans Vade, c’est parce que nous pensons, nous aussi, que les fournisseurs de services managés (MSP) et les fournisseurs de services managés de sécurité (MSSP) doivent bénéficier d’une technologie à même de neutraliser facilement et efficacement les menaces les plus récentes »_, explique François Lavaste, Executive Director chez Tikehau Ace Capital.


# **80 Recrutements prévus**


L’entreprise spécialisée dans la sécurisation d’e-mails aide en effet les MSP, les FAI et les OEM à protéger leurs utilisateurs contre les cybermenaces sophistiquées telles que le phishing, le spear phishing, les malwares et les ransomwares. Vade réalise à ce jour 40% de son chiffre d’affaires en Europe, contre près de 30% aux États-Unis et près de 18% au Japon.

Vade, qui compte 200 collaborateurs, ambitionne de recruter 80 personnes, dont des ingénieurs afin de développer ses produits. L’entreprise recrute notamment aux États-Unis, ainsi qu’en partie en Europe ou au Japon.

_**Retrouvez l’interview complète de Georges Lotigier, CEO de Vade :**_

[Connaissez-vous VADE la startup qui sécurise vos eMails ?](https://www.frenchweb.fr/connaissez-vous-vade-la-startup-qui-securise-vos-emails/436428)

[Trapster by Ballpoint](https://trapster.cloud/fr/)
[La plateforme la plus intelligente pour manager votre cybersecurité](https://www.tenacy.io/)

IL PR2TENDAIT Gagner des millions sur les réseaux sociaux mais faisait du BEC (arnaque business mail) [(4) Instagram King 'Hushpuppi' Helps Launder $1.3B For Hackers - YouTube](https://www.youtube.com/watch?v=jPC0hU8NuQU)

La menace digitale est chaque jour plus pressante et les TPE/PME sont les plus impactées par la cybercriminalité. **Parce que le danger est omniprésent, il faut sans délai s’interroger sur la vulnérabilité de votre système d’information.**

## **Décryptage**

Dans une société toujours plus digitalisée, ce ne sont plus les bandits de grands chemins qui sont à craindre mais une cyber délinquance galopante, insaisissable, astucieuse qui frappe aveuglément. **Avec 12 millions de nouvelles variantes de malwares tous les mois, soit un nouveau malware téléchargé toutes les 4 secondes** selon une étude intitulé CheckPoint Security Report, **le danger est constant et en évolution permanente**. Une menace protéiforme qui a affecté 80% des entreprises sur les 12 derniers mois selon le Baromètre cybersécurité. Comme si cela ne suffisait pas, les comportements des collaborateurs n’ont de cesse de confronter les systèmes d’information des entreprises qui les emploient à des risques élevés. **Télétravail, connexion au système d’information avec des ordinateurs ou smartphones personnels parfois mal sécurisés (BYOD), le cocktail est explosif** : les cyber incidents sont considérés comme le 1er risque auquel les entreprises sont exposées si l’on s’en remet au Baromètre Allianz Global Corporate & Speciality SE.

## **Vous Êtes Nécessairement En danger**

Comme dans le secteur médical, l’acceptation constitue le premier pas vers la guérison ! Aussi, acceptez en l’augure, ce n’est pas parce que votre entreprise possède un pare-feu et un anti-virus que vous êtes à l’abri du danger. **Lorsque des géants industriels ou bien un acteur des médias succombent à une attaque, quelle probabilité existe-t-il que votre entreprise parvienne à déjouer les malices d’un cybercriminel déterminé ?** En 2019, c’est toute l’activité de M6 qui a été perturbée par une cyberattaque. Celle-ci a frappé avec une intensité telle, que le lundi matin nombre de services du groupe étaient paralysés et que les collaborateurs étaient invités à poser une journée de RTT. Victime d’un ransomware, il aura fallu à M6 plusieurs jours pour rétablir la situation. Un épisode comparable avait frappé le groupe Renault en 2017 lorsqu’une cyberattaque à l’échelle planétaire avait été lancée. Et n’imaginez pas que la menace ne pèse que sur des acteurs d’envergure. Par nature fainéants, les pirates informatiques ne s’attaquent à ces proies conséquentes que ponctuellement. Le centre de leur attention, c’est vous ! Le profil idéal de la victime d’une cyber-attaque ? **Une entreprise qui s’imagine que, du fait de sa taille modeste, elle ne saura pas attirer la convoitise des délinquants numériques.** Comme tous les prédateurs, ce sont les proies faciles qui attirent les cybercriminels !

## **Décidez-vous À Faire Face au danger**

Les experts Be-Cloud ont une conviction : la peur n’évite pas le danger. Il vous faut donc tout mettre en œuvre pour affronter la menace, savoir réagir vite et se montrer résilient. **Les entreprises agiles et réactives souffriront moins des conséquences des attaques.** Mais pour définir le plan de bataille le mieux adapté, il faut encore connaître l’état de ses forces. **Quels sont les usages de vos équipes ? Quelle est votre surface d’exposition aux cyberrisques ? Quels sont les équipements les plus vulnérables de votre système d’informations ? Comment le Cloud vous permettrait-il de rétablir la situation au plus vite ?** Autant d’interrogations qui constituent la colonne vertébrale d’un projet de sécurisation adapté à votre système d’information.

[Avec le Pack Be-Cloud, profitez des outils Microsoft tout en bénéficiant d’une sécurité intelligente intégrée !](https://www.be-cloud.fr/microsoft-365/)

# Pourquoi Choisir Une Solution de Cybersécurité à 360° En 2022 ?

Par Paco Vestieu•Mis à jour le 9 mai 2022, publié initialement en février 2021

## Sommaire

- [Que retenir de 2020 en matière de cybersécurité ?](https://www.appvizer.fr/magazine/services-informatiques/securite-informatique/cybersecurite-360#id1)

- [Des cyberattaques de plus en plus ciblées](https://www.appvizer.fr/magazine/services-informatiques/securite-informatique/cybersecurite-360#id3)
- [Un fort niveau de vulnérabilité pour les entreprises face à ces cyberattaques](https://www.appvizer.fr/magazine/services-informatiques/securite-informatique/cybersecurite-360#id5)

- [Quelles solutions pour protéger efficacement sa messagerie professionnelle des cyberattaques ?](https://www.appvizer.fr/magazine/services-informatiques/securite-informatique/cybersecurite-360#id7)

- [L’importance des solutions technologiques](https://www.appvizer.fr/magazine/services-informatiques/securite-informatique/cybersecurite-360#id9)
- [L’importance des solutions pédagogiques](https://www.appvizer.fr/magazine/services-informatiques/securite-informatique/cybersecurite-360#id11)

- [Protégez-vous des attaques informatiques avec une solution à 360°](https://www.appvizer.fr/magazine/services-informatiques/securite-informatique/cybersecurite-360#id13)

Élément central de votre entreprise, votre **système informatique** ainsi que toutes ses données doivent être protégés. Entre virus, vol de données, infiltration de votre système ou encore mise hors service de certains composants de votre structure, la protection contre les diverses **menaces informatiques existantes** doit être une de vos priorités.

Mais quelles sont leurs **conséquences** ?

Et comment **s’en protéger** efficacement ?

C’est ce que nous allons développer dans cet article.

# Que Retenir de 2020 En Matière de Cybersécurité ?

# Des Cyberattaques de plus En plus Ciblées

L’année 2020 a, sans aucun doute, été une des années les plus difficiles vécues depuis bien longtemps. Nous sommes tous d’accord là-dessus ! Télétravail, pandémie de coronavirus, confinement… la simple évocation de ces mots peut soudainement devenir une source de stress.

Cependant, une autre menace a également impacté l’activité de nombreuses entreprises. Il s’agit bien sûr des **attaques informatiques**. Ciblées, mais aussi sophistiquées, ces dernières se sont répandues à une **vitesse impressionnante** tout au long de l’année, augmentant de plus de 400 % selon le site cybermalveillance.gouv. Profitant d’un climat instable et de l’attention des entreprises essentiellement captée par l’actualité, les hackers ont développé de nombreux stratagèmes pour arriver à leurs fins.


Mais alors, quelles sont les attaques les plus répandues ? Et quelles ont été leurs conséquences ? 


Sans surprise, les attaques de **phishing** (ou **hameçonnage**) se sont, une année de plus, imposées. Selon l’étude de vulnérabilité des entreprises face aux cyberattaques menée par Mailinblack, ces attaques informatiques misant sur l’usurpation d’identité pour obtenir vos données personnelles représentent 61 % des attaques recensées en 2020. 

Mais, les **ransomwares** et les **malwares** n’ont pas pour autant été inactifs. En effet, ces logiciels malveillants infiltrant votre système informatique se sont imposés sur le paysage informatique avec un taux respectif de 14 % et 6 %. 

Les conséquences de ces attaques informatiques sont nombreuses et peuvent être redoutables pour votre structure :

- **paralysie de l’activité**,
- **pertes financières**,
- **dégradation de la réputation** de l’entreprise,
- **perte de clients**, etc.

Il devient alors primordial de s’en protéger efficacement.

# Un Fort Niveau de Vulnérabilité Pour les Entreprises Face à Ces Cyberattaques

Si les cyberattaques ont autant augmenté, c’est essentiellement parce que les pirates informatiques ont trouvé de **nombreuses failles** permettant leur déploiement. En effet, les portes d’entrée semblent variées :

- **télétravail**,
- **utilisation d’équipement personnel** (**BYOD**),
- **wifi non sécurisé**, etc. 

Comment cela est-il possible ? 

Tout simplement parce que les entreprises françaises, souvent **trop peu sensibilisées à la cybersécurité**, souffrent d’un fort niveau de vulnérabilité face aux hackers. 

En effet, selon l’étude de vulnérabilité des entreprises en 2020 de Mailinblack, 69 % des structures françaises sont équipées d’une **solution de protection de messagerie**, mais 32 % d’entre elles continuent de recevoir des emails dangereux, ce qui souligne un problème de sécurité non négligeable. En effet, même si 65 % des entreprises essaient de développer leur **cyberculture** en proposant des **campagnes de sensibilisation** à leurs salariés, ces dernières ne sont pas assez régulières pour avoir un véritable impact sur les équipes.


Mailinblack

33 avis

VISITER SITE WEB

Solution française de protection de messagerie

[En savoir plus sur Mailinblack](https://www.appvizer.fr/services-informatiques/antispam/mailinblack)

Voir tous les logiciels Sécurité informatique

# Quelles Solutions Pour Protéger Efficacement Sa Messagerie Professionnelle des Cyberattaques ?

# L’importance Des Solutions Technologiques

Quasiment indissociables l’une de l’autre, la technologie et la cybersécurité semblent être de parfaits alliés. Et c’est le cas ! De nombreuses technologies essentielles pour la sécurité de votre structure existent :

- **anti-virus**,
- **anti-spam**,
- système de **vérification des liens** ou d’**analyse de pièces jointes**.

Ces dernières ne cessent d’évoluer pour rester le plus efficaces possible.

Être équipé d’une solution basée sur une **protection technologique** est donc une nécessité pour faire face aux menaces informatiques existantes. 

Mais, ces technologies permettent-elles d’autres avantages ? La réponse est oui. Sans compter le renforcement de sécurité qu’elles confèrent, ces dernières peuvent aussi vous permettre :

- de **gagner du temps** au quotidien,
- de vous libérer de l’angoisse de subir une attaque,
- et, _in fine_, d’**améliorer vos conditions de travail**. 

Vous l’aurez compris, sécuriser votre structure avec des outils technologiques permettra à vos salariés, en plus de gagner du temps au quotidien en les libérant de tâches chronophages comme le tri des emails reçus, de travailler dans de meilleures conditions, avec un stress technologique en moins. 

# L’importance Des Solutions Pédagogiques

Si les solutions technologiques sont nécessaires pour sécuriser votre structure, le **facteur humain** doit lui aussi être au cœur de vos démarches de cybersécurité.

En effet, 90 % des attaques réussies avec vols de données sont liées à une **erreur humaine**. Il semble donc imprudent de ne pas accorder d’importance à la **sensibilisation** de vos équipes face aux attaques de phishing. Car oui, une **solution pédagogique** représente par nature une solution qui accompagne à long terme vos salariés. Sensibilisés et formés aux véritables enjeux de la sécurité informatique, mais aussi à des méthodes de protection adaptées et nécessaires, ces derniers deviennent plus vigilants.

De surcroît, une telle solution amène de nombreux autres avantages. Certes, mettre en place une approche pédagogique permet de limiter les risques d’attaques et les erreurs de vos équipes. Mais elle augmente aussi le niveau de **cyberculture** de votre structure, ce qui renforce les liens de vos salariés autour d’un projet commun. 

En d’autres termes, une telle solution permet de faire monter vos utilisateurs en compétence et d’en faire profiter toute votre entreprise. Plutôt intéressant, vous ne trouvez pas ? 😉


Mailinblack

33 avis

VISITER SITE WEB

Solution française de protection de messagerie

[En savoir plus sur Mailinblack](https://www.appvizer.fr/services-informatiques/antispam/mailinblack)

Voir tous les logiciels Sécurité informatique

# Protégez-vous des Attaques Informatiques Avec Une Solution à 360°

Qu’est-ce qu’une **protection à 360°** ?

Pour résumer, outiller et former permet de garantir un degré maximal de sécurité. 

Il vous faut donc recourir à une solution qui sécurise intégralement votre messagerie en alliant :

- les avantages de **technologies novatrices**,
- à celles de l’i**ntelligence humaine**.

L’importance du facteur humain n’est donc plus à prouver. Pourtant, si la cybersécurité est un domaine en constante évolution, il reste difficile de trouver des acteurs partisans d’une approche **mixant technologie et humain**. C'est dans ce sens que chez [Mailinblack](https://www.appvizer.fr/services-informatiques/antispam/mailinblack), entreprise française, nous proposons une solution de protection de messagerie à la pointe de la technologie nommée Protect, ainsi qu’un outil de formation et de sensibilisation de ses équipes à la détection des cyberattaques, appelé Phishing Coach.

Parce que vous êtes les principaux acteurs de votre sécurité et que vos équipes ont le potentiel pour devenir de véritables cyber-héros, il est temps de vous armer correctement. Vous avez toutes les clés entre vos mains.

54% des entreprises françaises déclarent avoir subi entre une et trois cyberattaques en 2021 (source : Baromètre annuel, CESIN, 2022).

[Commerce de détail : la zone EMEA première visée par la cybercriminalité](https://www.ecommercemag.fr/Thematique/techno-ux-1226/data-2190/Breves/Commerce-de-detail-la-zone-EMEA-premiere-visee-par-la-383158.htm#utm_source=IndexThematique&utm_medium=Rss&utm_campaign=)

- 🌍 La zone EMEA est devenue la principale cible de la cybercriminalité dans le commerce de détail, dépassant l'Amérique du Nord.
- 🇩🇪 L'Allemagne est le pays le plus touché, avec plus de 3,1 milliards d'attaques Web dans le commerce de détail.
- 🇬🇧 Le Royaume-Uni se classe en deuxième position avec 397 millions d'attaques.
- 🛡️ Le commerce de détail reste le segment le plus ciblé par les attaques Web, avec plus de 14 milliards d'incursions dans le monde.
- 🤖 Près de 835 milliards de bots malveillants ont attaqué le segment du commerce de détail dans la zone EMEA.
- 🧲 Les attaques LFI (Local File Inclusion) sont les plus utilisées, représentant 59 % des attaques dans la zone EMEA.
- 📱 Les attaques d'applications Web et d'API sont les plus courantes dans le segment de marché du commerce dans la zone EMEA, avec 51 % du total.

[Which Computational Universe Do We Live In? | Quanta Magazine](https://www.quantamagazine.org/which-computational-universe-do-we-live-in-20220418/?utm_source=tldrnewsletter)

any computer scientists focus on overcoming hard computational problems. But there’s one area of computer science in which hardness is an asset: cryptography, where you want hard obstacles between your adversaries and your secrets.

Unfortunately, we don’t know [whether secure cryptography truly exists](https://www.quantamagazine.org/researchers-identify-master-problem-underlying-all-cryptography-20220406/). Over millennia, people have created ciphers that seemed unbreakable right until they were broken. Today, our internet transactions and state secrets are guarded by encryption methods that seem secure but could conceivably fail at any moment.

To create a truly secure (and permanent) encryption method, we need a computational problem that’s hard enough to create a provably insurmountable barrier for adversaries. We know of many computational problems that seem hard, but maybe we just haven’t been clever enough to solve them. Or maybe some of them are hard, but their hardness isn’t of a kind that lends itself to secure encryption. Fundamentally, cryptographers wonder: Is there enough hardness in the universe to make cryptography possible?

In 1995, [Russell Impagliazzo](https://cseweb.ucsd.edu/~russell/) of the University of California, San Diego broke down the question of hardness into a set of sub-questions that computer scientists could tackle one piece at a time. To summarize the state of knowledge in this area, he [described five possible worlds](https://ieeexplore.ieee.org/document/514853) — fancifully named Algorithmica, Heuristica, Pessiland, Minicrypt and Cryptomania — with ascending levels of hardness and cryptographic possibility. Any of these could be the world we live in.

# **Algorithmica**

In this world, the most natural computational questions are all easy, which makes cryptography impossible. Here, the set of problems with efficient solutions — a set called P — doesn’t just contain the problems we’ve already figured out how to solve. It also includes all the problems in another set called NP, which consists of the problems for which it’s easy to check a proposed solution if someone hands it to you.


On the face of it, P and NP feel like different categories. For example, take the problem of deciding whether your suitcases will hold all the items you want to pack for a trip. If a friend packs for you, it’s easy to verify whether they’ve fit everything in — just check for any items they’ve missed. So the suitcase-packing problem is in NP. But packing the suitcases yourself is much harder — you might have to try many different arrangements. It’s not clear whether there’s an efficient algorithm that solves this problem for all possible combinations of items and suitcases. That is, we don’t know whether this problem is in P.

The problem of decrypting an encryption scheme is also in NP. After all, if you have an encrypted message and a friend claims to have decrypted it, you can check by feeding their decrypted message into the encryption machine and seeing whether the output matches your original encrypted message. (Of course, you must possess one of the encryption machines to do this, but cryptographers don’t consider a scheme secure unless it can withstand attacks from an enemy who gets hold of one of the machines.)

In Algorithmica, P and NP are the same set of problems. A proof of this would be an algorithmic bonanza, since it would mean there are fast algorithms for things like suitcase packing and all the other seemingly hard problems in NP. But it would be a disaster for cryptographers, since one of the problems we’d be able to solve efficiently is decryption.

 this, even though the “P versus NP” question has been considered the most famous problem in theoretical computer science for five decades. Then again, said [Yuval Ishai](https://www.cs.technion.ac.il/~yuvali/) of the Technion in Haifa, Israel, “apart from the constant failure of the smartest people, we have no evidence that it’s hard to show that P is not equal to NP.”

# **Heuristica**

In this world, there are problems in NP that aren’t easy to solve, but every problem in NP is easy “on average,” meaning it can be solved efficiently in most cases. For example, if we’re in Heuristica, then there exists an efficient suitcase-packing algorithm that nearly always succeeds, but that might fail for a few rare combinations of suitcases and items to pack. (These fast and usually successful algorithms are commonly called “heuristics.”)

From the point of view of cryptography, there’s not a big difference between Heuristica and Algorithmica. If we come up with an encryption scheme in Heuristica, there will be some fast decryption method that can handle nearly every message, making the scheme useless for practical purposes.

# **Pessiland**

This is the worst of all possible worlds. In Pessiland, some problems in NP are hard even on average. For these problems, any efficient algorithm will fail not just occasionally but often. Yet these hard problems are not of a kind that is useful for hiding secret information.

“We definitely don’t want to live in Pessiland,” said [Eric Allender](https://people.cs.rutgers.edu/~allender/) of Rutgers University. “Here we get all the bad aspects of [computational] complexity, but without any of the advantages like cryptography.”

# **Minicrypt**

In this world, some problems in NP are hard on average, and this hardness is enough to build the most fundamental building block of cryptography: a “[one-way function](https://www.quantamagazine.org/researchers-identify-master-problem-underlying-all-cryptography-20220406/),” which is a function that can be carried out efficiently but can’t be reversed efficiently. Cryptographers have shown that secure cryptography requires one-way functions. And if we have them, we get an array of cryptographic goodies, such as secret key encryption, digital signatures and pseudorandom number generators.

“Whether one-way functions exist is, without question, the most important problem in cryptography,” said [Rafael Pass](https://www.cs.cornell.edu/~rafael/) of Cornell University and Cornell Tech. “If we don’t have them, all these things can be broken.”

# **Cryptomania**

In this world, we have enough hardness to create everything in Minicrypt plus even more advanced cryptographic protocols such as public key encryption (in which people can send encrypted messages without knowing the secret key).

# **Eliminating Worlds**

Most cryptographers, Ishai said, believe that at least some cryptography does exist, so we likely live in Cryptomania or Minicrypt. But they don’t expect a proof of this anytime soon. Such a proof would require ruling out the other three worlds — and ruling out Algorithmica alone already requires solving the “P versus NP” problem, which computer scientists have struggled with for decades.

Recently, though, Pass and his doctoral student Yanyi Liu [found a new approach](https://www.quantamagazine.org/researchers-identify-master-problem-underlying-all-cryptography-20220406/) to sifting through these worlds. For the first time, they identified a natural problem — called time-bounded Kolmogorov complexity, or _Kt_ for short — whose difficulty level creates a bright dividing line between the worlds that include cryptography and the worlds that don’t. If _Kt_ is easy on average, Liu and Pass showed, then secure cryptography cannot exist, so we’re in Algorithmica, Heuristica or Pessiland. But if _Kt_ is hard on average, then we can make one-way functions, so we’re at least in Minicrypt, and possibly Cryptomania.

This new result means computer scientists can eliminate Pessiland — the worst world — if they can prove one more statement: If _Kt_ is easy on average, then so is every problem in NP. In that case, we’ll have narrowed things down to the worlds where _Kt_ is hard on average (Minicrypt and Cryptomania) and the ones where _Kt_ — and every other problem in NP — is easy on average (Algorithmica and Heuristica).

# RELATED:

---

1. ### [Researchers Identify ‘Master Problem’ Underlying All Cryptography](https://www.quantamagazine.org/researchers-identify-master-problem-underlying-all-cryptography-20220406/)

2. ### [Cryptographers Achieve Perfect Secrecy With Imperfect Devices](https://www.quantamagazine.org/cryptographers-achieve-perfect-secrecy-with-imperfect-devices-20220225/)

3. ### [A Short Guide to Hard Problems](https://www.quantamagazine.org/a-short-guide-to-hard-problems-20180716/)

4. ### [Computer Scientists Achieve ‘Crown Jewel’ of Cryptography](https://www.quantamagazine.org/computer-scientists-achieve-crown-jewel-of-cryptography-20201110/)

5. ### [Computer Scientists Expand the Frontier of Verifiable Knowledge](https://www.quantamagazine.org/computer-scientists-expand-the-frontier-of-verifiable-knowledge-20190523/)

Researchers have been chipping away at Pessiland for some time, said [Ryan Williams](https://people.csail.mit.edu/rrw/) of the Massachusetts Institute of Technology. “I think the general consensus is that Pessiland can be ruled out, but whether we’re going to do that sooner or later, I don’t know.”

Cryptographers would really like to eliminate Heuristica as well, which would involve proving that if _Kt_ is easy on average then every problem in NP is easy in all cases (not just on average). Ruling out these two worlds would mean that either we live in Algorithmica, where everything is easy all the time, or we have enough hardness for basic cryptography.

Cryptographers widely refer to this goal as the field’s holy grail. Ishai doesn’t expect to see it proved in his lifetime, but even that is uncertain. “When hard problems are cracked, sometimes we see it coming, but sometimes we don’t,” he said. “Definitely our best shot is this new line of work.”

- 💼 Les cryptographes cherchent à déterminer dans lequel des cinq mondes possibles nous vivons pour savoir si une cryptographie vraiment sécurisée est envisageable.
- 🤔 Il existe cinq mondes possibles avec des niveaux de complexité croissants : Algorithmica, Heuristica, Pessiland, Minicrypt et Cryptomania.
- 🔒 Algorithmica est un monde où les problèmes informatiques naturels sont faciles, rendant la cryptographie impossible.
- 🧩 La distinction entre les ensembles P et NP est cruciale pour la cryptographie. Dans Algorithmica, P et NP sont identiques, ce qui serait un défi pour les cryptographes.
- 📈 La question "P contre NP" est fondamentale, mais reste non résolue malgré des décennies de recherche.
- 💡 La découverte d'un problème appelé "time-bounded Kolmogorov complexity" (Kt) pourrait éclaircir la situation en éliminant certains mondes possibles et en indiquant la faisabilité de la cryptographie.
- 🕵️‍♂️ Les cryptographes espèrent vivre dans les mondes de Minicrypt ou Cryptomania, mais des preuves concrètes sont difficiles à obtenir.
- 🔍 Les chercheurs travaillent sur l'élimination de Pessiland et Heuristica pour se rapprocher du Saint Graal de la cryptographie.

# Why Does Web Software Get Hacked?

Reading time: 11 minutes

[Facebook](https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsecuritytrails.com%2Fblog%2Fwhy-does-web-software-get-hacked)[Twitter](https://twitter.com/intent/tweet?url=https://securitytrails.com/blog/why-does-web-software-get-hacked&text=Share%20this%20blog%20post%20on%20Twitter:)[LinkedIn](https://www.linkedin.com/shareArticle?mini=true&url=https://securitytrails.com/blog/why-does-web-software-get-hacked&title=Why%20does%20web%20software%20get%20hacked?summary=&source=SecurityTrails)

Innumerable amounts of technologies, applications and protocols have emerged since the beginning of the Internet. Inevitably, many of them have been left behind – no longer supported and completely forgotten. But many remain valid, even since the early days, and are here to last. We’re talking about websites.

In the 90’s, when the Internet saw a massive amount of new websites, another phenomenon emerged at the same time: a massive amount of website hacking. By then, and until the 2000s, web pages were manually programmed and the concept of CMS had not yet become popular, although hacks did occur day by day.

With the rise of CMS giants like WordPress, Joomla or Drupal, site hacking has become a common situation among webmasters and website owners alike.

According to the Internet Crime Complaint Center in their [2017 annual report](https://www.fbi.gov/news/stories/2017-internet-crime-report-released-050718), the FBI has received more than 4 million complaints since 2000. A lot of those complaints include hacked websites, causing more than $1.4 billion in damages.

Last year Google also [announced](https://webmasters.googleblog.com/2017/03/nohacked-year-in-review.html) a report confirming that website hacking rose by 32% than previous years.

As you can see, hacking is here to stay. That’s why today we’re answering two questions that everyone will ask sooner or later, when they’re burdened by this issue: Why would someone hack my website? And How was my website hacked?

- [Why would someone hack my website?](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-why-would-someone-hack-my-website)
- [Bored people](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-bored-people)
- [Money](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-money)
- [Use of your system resources](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-use-of-your-system-resources)
- [Hacktivism](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-hacktivism)
- [10 reasons to explain how your website was hacked](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-10-reasons-to-explain-how-your-website-was-hacked)
- [1. Weak passwords](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-1-weak-passwords)
- [2. A virus on your local network or PC](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-2-a-virus-on-your-local-network-or-pc)
- [3. Cracked software](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-3-cracked-software)
- [4. Excessive file and directory permissions](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-4-excessive-file-and-directory-permissions)
- [5. Using insecure protocols](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-5-using-insecure-protocols)
- [6. Outdated website software](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-6-outdated-website-software)
- [7. Social engineering](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-7-social-engineering)
- [8. Weak server security](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-8-weak-server-security)
- [9. Not using Two-Factor Authentication](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-9-not-using-two-factor-authentication)
- [10. Data Leaks](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-10-data-leaks)
- [Final thoughts](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-final-thoughts)

## [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-why-would-someone-hack-my-website "Permalink")Why Would Someone Hack My Website?

Let’s find out why would someone mess with your website – and hack it.

### [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-bored-people "Permalink")Bored People

These people are usually called [script kiddies](https://en.wikipedia.org/wiki/Script_kiddie), and a big part of these hacking attempts come from teenagers who have nothing to do with their time. They’ll target random websites or scan for vulnerable websites with different “scripts” that can do their dirty work.

Most of the time, these people don’t have a real knowledge of internet protocols, vulnerabilities or web technologies. They mainly rely on third-party tools to hack and deface websites.

### [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-money "Permalink")Money

Anything can motivate website hacking, but one of the most popular reasons is to make money from it.

There many bug bounty programs, also known as “vulnerability rewards programs, to choose from. These programs are ethical hacking initiatives that reward individuals for discovering and reporting software bugs for companies invested in keeping their systems and applications secure.

But malicious “crackers” (those who intentionally break into another’s computer system) act quite differently. They can easily hack your websites, gain access to your FTP or SSH access, and place massive drive-by-downloads to generate income from many large download network services by using your website traffic.

These kinds of attacks tend to happen only on mid-size to high-traffic websites, where attackers can get a lot of money while the site is being hacked.

Sometimes crackers will use your public web space to upload phishing web pages. In this situation, the attacker will copy the entire website front-end interface from reputable banks, credit card providers or payment platforms like PayPal to create an exact replica of the original website.

The fake website is then relied on to cheat users, forcing them to provide actual personal account details including usernames, passwords, credit card numbers and bank account data.

Blackhat SEO is another money-driven motivation for crackers. This works by using your audience to redirect all or part of your website’s traffic into other e-commerce, gambling or pharmacy websites to generate income from an affiliate program.

### [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-use-of-your-system-resources "Permalink")Use Of Your System Resources

After gaining access to your server space, crackers will try to upload malicious scripts that can be used in several illegal activities using your system resources and services. These include

- Setting up a remote DDOS [botnet](https://en.wikipedia.org/wiki/Botnet).
- Using your domain name to send outgoing SPAM campaigns.
- Using the CPU power of your server for crypto-mining, also known as [cryptojacking campaigns](https://securitytrails.com/blog/cryptojacking-campaigns "Cryptojacking campaigns continue to target vulnerable websites").

### [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-hacktivism "Permalink")Hacktivism

Hacktivism is a form of online protest, an invasive way for people to claim their rights or support social, religious and political campaigns.

Instead of screaming and burning wheels in the middle of the street, hacktivists will deface popular websites with enough traffic to gain media attention and spread their message.

## [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-10-reasons-to-explain-how-your-website-was-hacked "Permalink")10 Reasons to Explain how Your Website Was Hacked

Now that we’re familiar with the most popular hacking motivations, let’s explore how your website got hacked.

### [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-1-weak-passwords "Permalink")**1. Weak passwords**

Although infosec and general computer-related professionals always suggest using strong passwords, users still use very weak passwords. This leads to brute-force hacking over FTP, webmail and public web login areas.


A strong password must include at least 8 characters minimum, uppercase and lowercase letters, numbers, and symbols. This rule is very important to prevent malware infections and hacks.

### [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-2-a-virus-on-your-local-network-or-pc "Permalink")**2. A Virus on Your Local Network or PC**

Sometimes your local computer can be infected with malware or a virus, the first step toward getting hacked or exploiting your website in many different ways.

Many types of viruses can sniff your local network and external internet connections to capture login details from unencrypted protocols, such as FTP.

Also, most FTP clients (like Filezilla) save their login details (username and passwords) unencrypted on disk, which can later be extracted by third-party software very easily.

Once they get the host, username, and password, they’re ready to upload malicious code and exploit your web space.

To prevent your website from being hacked, always keep your antivirus and antimalware updated on your PC, as well as their database definitions.

### [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-3-cracked-software "Permalink")**3. Cracked software**

Nulled software is another way hackers can get into your system. This type of software (e.g. paid scripts for Wordpress, Joomla or other web apps) is downloaded from third-party websites that offer the hackers "nulled" (meaning the licensing module is removed) versions, often including some kind of backdoor that allows your website to get fully hacked.

Using pirated and cracked software downloaded from third-party, untrusted websites can be one of the worst things you can do if you want to prevent hacking on your websites.

Unfortunately, the perception of value often outweighs better judgment. Sometime you’ll be tempted to download a full PC app, along with the crack, in order to avoid paying for it. You’ll save a lot of dollars for sure. But what most people don’t know is that a large part of “cracked” software contains keyloggers, network sniffers, trojans, backdoors and other types of malicious software that can cost you a lot more money later on.

A simple keylogger can log any of the pressed keys from the last 24 hours – and gain valuable login details from any websites you’ve visited during that time.

So remember, whether you use Windows or Mac, it’s always better to buy a license or monthly subscription rather than using pirated software.

Even better, if you decide to [switch to Linux](https://www.forbes.com/sites/jasonevangelho/2018/07/23/5-reasons-you-should-switch-from-windows-to-linux-right-now/%233068a6a7777b), you can get tons of great applications for free. They are open-source and officially released by the Linux community, assuring you they won’t contain any unwanted malicious software.

### [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-4-excessive-file-and-directory-permissions "Permalink")**4. Excessive File and Directory permissions**

Whenever you use a certain type of PHP-based CMS and web app, they require you to set write permissions for some directories and files.

If your web server is configured to use [DSO PHP handler](https://documentation.cpanel.net/display/EA4/PHP%2BHandlers%23PHPHandlers-DSO), this means you will need to apply insecure `777` permissions if you need writing privileges for your web apps. This is insecure by default – and against all best security practices – as it requires you to grant writing permissions for everybody.

DSO handler also allows your web server to run websites and apps with a “nobody” user (Apache), which can lead to cross-site attacks over your server and mass defacements.

Dedicated Servers, VPS and Cloud machines should always use suPHP, CGI, and PHP-FPM by default, as they only require 644 to read and 755 to write. These are more secure than 777 because these handlers use their own system users to run the web processes, instead of “nobody.”

### [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-5-using-insecure-protocols "Permalink")**5. Using Insecure protocols**

FTP is one of the oldest protocols we know, once regarded as of the most famous ways to upload data to servers since the early 1970s, when it was created to transfer data from different hosts and servers over the ARPANET.

While FTP does support SSL encryption ([FTPS](https://tools.ietf.org/rfc/rfc2228.txt)), most our sers who actually use this protocol still upload and download their data the old, insecure FTP way, which sends login details in plain text, without any encryption method in the middle.

If an attacker starts sniffing your network, he can easily capture your login details if you’re using this insecure protocol. That’s why the best way to transfer data from one client to a remote host is to use FTPs with SSL encryption, or even better, with a modern transfer protocol like [SSH2](https://kb.iu.edu/d/aelc).

### [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-6-outdated-website-software "Permalink")**6. Outdated Website software**

Most of the hacks we’ve seen in past years happen because website owners, webmasters, and developers are not responsible for the apps installed on the web server. Most modern CMS malware and virus infections come from outdated plugins, themes and core components.

We all know setting up a WordPress website is easy. It’s fast and free for everyone who needs to create a good-looking website, but once the website is online they totally forget about updating the software. This can lead to BlackHat SEO hacks, traffic redirect, outgoing spam, botnets and much more.

Some time ago we released a post about the [Top 5 WordPress vulnerability scanners](https://securitytrails.com/blog/top-5-wordpress-vulnerability-scanners "Top 5 Wordpress Vulnerability Scanners"). Using any of the WP vulnerability scanners we listed will surely help you with great suggestions for detecting outdated installations, as well as for hardening your site properly.

Remember that nowadays most modern web apps like Wordpress offer auto-update options which rarely break things and can keep your outdated software secure in mere seconds, after patches are released by the software companies.

### [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-7-social-engineering "Permalink")**7. Social engineering**

While some people use [OSINT tools](https://securitytrails.com/blog/osint-tools "Top 25 OSINT Tools for Penetration Testing") to gain valuable data to hack you, others attack with something called “Social engineering.”

This type of intel-gathering technique is based on human social abilities, a way to manipulate individuals into releasing sensitive information like login details, passwords, or other personal information that may be useful for hacking private user areas or remote systems.

If someone has called you or sent you an email or chat request claiming to be your ISP, hosting or domain provider, asking for any personal information regarding your website, then you could be exposed to a social engineering attack.

No serious company will ever ask for your password over the phone, email, SMS or chat sessions. Be aware of this the next time your phone rings and they ask you for anything along those lines.

### [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-8-weak-server-security "Permalink")**8. Weak Server security**

Not all website hacks can be traced to web app vulnerabilities, local virus infections or using insecure protocols. Sometimes it’s not your fault, but accountable to the system administrators in charge of server security.

It’s not something that happens every day, but factors such as outdated server software (including essential OS libraries, packages and the Kernel), not using a good firewall and the lack of WAF or an intrusion detection system can lead to massive hacks on websites. Shortcomings like these can even invite a root compromise with the potential to expose all of your website files and databases to a remote attacker.

Make sure you choose a dependable system administrator or web hosting company that can ensure the OS hosting your websites is properly hardened and secured.

### [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-9-not-using-two-factor-authentication "Permalink")**9. Not Using Two-Factor Authentication**

[Two-factor authentication](https://en.wikipedia.org/wiki/Two-factor_authentication) (aka 2FA) is an additional security layer to traditional password-based authentication.

In the old days before 2FA existed, the only thing an attacker needed to grant access to your user account was to guess the password, either by social engineering, exploiting a vulnerability on your code, or running a brute force attack.

2FA enables you to verify if you really are the individual  accessing your private user area, by requesting an SMS, Authy or [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&rel=nofollow,noopener,noreferrer&target=_blank) remotelygenerated code. This way, even if an attacker does your username and password, he would be locked out, as he doesn’t have the final code in the authentication chain.

If you haven’t enabled 2FA on your email, web access and other areas, start using it now. It’s [widely supported](https://twofactorauth.org/) on almost all Internet services.

### [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-10-data-leaks "Permalink")**10. Data Leaks**

Data leaks can affect any company or individuals in the world. This happens when sensitive login information is stored in insecure ways, which can lead to public exposure.

Attackers use many different techniques to gain access to this data, whether by using [Google dorks](https://securitytrails.com/blog/google-hacking-techniques "Most popular Google Hacking Techniques - Top Google Dorks and Hacks"), exploiting vulnerabilities or exploiting the outdated systems of your hosting provider.

Always avoid spreading sensitive information on public URLs and services, secure and harden your login and password databases properly with encrypted technology, and deliver information needed only to your most trusted employees.

Don’t send it to temporary interns or untrusted people within your company. They’re another reason to activate the previously mentioned Two-Factor Authentication.

## [¶](https://securitytrails.com/blog/why-does-web-software-get-hacked#content-final-thoughts "Permalink")Final Thoughts

While there are multiple reasons as to why your site may get hacked, most automated penetration attempts can be prevented easily – by following such security practices as using strong passwords, updating your software, and having a good WAF, IDS and attack mitigation system installed on the server that hosts your website.

However, modern hackers not only rely on automated attacks against your server, they also investigate and generate tons of intel and reconnaissance data about your hosts.

One of the most frequently-exposed services is the DNS server, which can yield a lot of information, like [stale DNS records](https://securitytrails.com/blog/risks-of-modern-free-ssl-certificates-and-stale-dns-records "Risks of modern free SSL certificates and stale DNS records") or private intranet records, made public by mistake.

The good news is that there is a great way to audit your DNS zones, IPs and domain names to prevent hacking issues: start using [SecurityTrails](https://securitytrails.com/ "SecurityTrails: Data Security, Threat Hunting, and Attack Surface Management Solutions for Security Teams").

---

And if you like our security toolkit, move one step forward in keeping you, your company and your customers safe from hackers. Join us and [grab your free API account](https://securitytrails.com/corp/pricing "SecurityTrails Pricing | Find the right product for your OSINT needs") today!

# La Sécurisation des Échanges Numériques, le Défi des Entreprises

Publié par Laurine bourgeois & Amaury Bargibant le 19 sept. 2023 - mis à jour à 12:19

[


](https://cdn.edi-static.fr/image/upload/c_scale,h_627/c_crop,w_1200/f_auto,q_auto/v1/Img/BREVE/2023/9/384998/securisation-echanges-numeriques-defi-entreprises-F.jpg)

Un simple clic imprudent sur un lien corrompu et vous voici involontairement au point de départ d'une cyberattaque. De plus en plus nombreuses et sophistiquées, elles constituent une menace croissante pour les entreprises.
- [](https://www.beaboss.fr/Thematique/digital-innovation-1074/cybersecurite-2020/Breves/La-securisation-des-echanges-numeriques-le-defi-des-entreprises-384998.htm#)

D'après les données de PWC France, en 2021, l'ANSSI (Agence Nationale de la Sécurité des Systèmes d'information) a enregistré en moyenne trois intrusions avérées, par jour dans des systèmes d'information, soit une hausse alarmante de **37 %** par rapport aux données de 2020.

## Des Pertes Financières Astronomiques

Le IMB Security Cost of Data Breach Report révèle que le coût des violations de données s'évalue à **4,24 millions de dollar** en moyenne en 2021 pour les entreprises. Ce chiffre peut paraître astronomique. Pourtant, le coût d'une cyberattaque ne se limite pas à la prestation informatique pour la remise en route des systèmes d'information. En effet, les dommages collatéraux sont nombreux et souvent coûteux. Ils peuvent comprendre par exemple :

- la perte de [clients](https://www.beaboss.fr/Thematique/rh-management-1026/management-2063/Breves/Comment-gerer-un-conflit-avec-un-client--376364.htm) et par conséquent de chiffre d'affaires ;

**Lire aussi :** [Pole Societes à vos côtés pour recueillir les données sur les entreprises et les marchés](https://www.beaboss.fr/Thematique/juridique-1055/Breves/Pole-Societes-a-vos-cotes-pour-recueillir-les-donnees-sur-384956.htm)

- les coûts liés à la reconquête de clients ;
- les dépenses en communication pour informer les personnes concernées par les fuites de données et pour rassurer le grand public ;
- la perte de patrimoine intellectuel (fuite des secrets de fabrication ou de brevets…)
- la perte d'un avantage concurrentiel suite à la divulgation de stratégies commerciale ou de nouveaux produits…

**Lire aussi** : [20 % des entreprises ont subi des cyberattaques en 2021](https://www.beaboss.fr/Thematique/actualites-1056/Breves/entreprises-ont-subi-cyberattaques-2021-368094.htm)

## Une Activité Paralysée

Au-delà des implications financières, les cyberattaques peuvent également entraver l'activité de l'entreprise, la ralentir ou la paralyser, affectant ainsi son image et la confiance de sa clientèle sur le long terme. Face à ces risques importants de violation de données, les entreprises doivent prendre des mesures pour sécuriser leurs échanges numériques. Or, presque systématiquement, nous utilisons nos boîtes mails et nos messageries instantanées (Teams, Slack, Hangout, etc) pour échanger des informations personnelles ou confidentielles comme un mot de passe, un bulletin de paie, les coordonnées bancaires d'un client, des informations financières ou politiques, des documents d'identité ou encore des documents stratégiques d'entreprise et ce sans prendre de mesures de sécurité particulières.

## Règlement Général Sur la Protection des Données (RGPD)

Des milliers de données personnelles ou confidentielles continue de circuler ainsi et demeurent sur nos boîtes mail et nos messageries d'entreprise, alors que ces canaux de communication ne garantissent ni la sécurité ni la confidentialité de nos échanges. Les données que nous échangeons quotidiennement sont donc exposées à un risque important d'interception, de cyber espionnage ou encore de piratage informatique.

Aujourd'hui, les entreprises sont donc confrontées à un défi crucial en matière de cybersécurité de leurs modes de communication professionnels. Cet enjeu est d'autant plus critique que le Règlement Général sur la Protection des Données (RGPD) impose aux entreprises de veiller à la sécurité et à la protection de la confidentialité et de l'intégrité des données personnelles qu'elles traitent. Il est utile de rappeler qu'en cas de non-respect des dispositions du RGPD, l'amende peut aller jusqu'à **20 millions d'euros ou 4 % du chiffre d'affaire.**

**Lire aussi** : [Cyberattaques : des dirigeants davantage sensibilisés](https://www.beaboss.fr/Thematique/digital-innovation-1074/cybersecurite-2020/Breves/Cyberattaques-dirigeants-davantage-sensibilises-366220.htm)

## **Le Chiffrement des données**

Au-delà de sensibiliser les équipes aux [risques cybers](https://www.beaboss.fr/Thematique/digital-innovation-1074/cybersecurite-2020/Breves/risque-cyber-menace-plus-que-jamais-majeure-357815.htm), les entreprises doivent également adopter les outils et techniques permettant d'assurer la confidentialité et l'intégrité des données qu'elles traitent. Le chiffrement de données fait partie des approches que les entreprises peuvent explorer pour sécuriser leurs échanges numériques, dans le cadre d'une stratégie de cyberdéfense préventive, aussi bien en interne pour l'usage des équipes qu'à l'externe pour les échanges avec les clients.

La CNIL (**Commission Nationale de l'Informatique et des Libertés**) définit le chiffrement comme « une méthode qui consiste à protéger ses documents en les rendant illisibles par toute personne n'ayant pas accès à une clé dite de déchiffrement ». Par exemple, lorsqu'un émail chiffré est envoyé, son contenu est transformé en un code secret que seuls les destinataires autorisés peuvent déchiffrer. Cette technique garantit que, même si le message est intercepté, il demeure incompréhensible et donc inexploitable pour d'éventuels pirates.

**Lire aussi** : [MailInBlack, entre protection et éducation face aux cyberattaques](https://www.beaboss.fr/Thematique/chef-entreprise-TV-1307/start-up-2310/MailInBlack-entre-protection-education-face-cyberattaques-365979.htm)

## Des Protocoles de Chiffrement

Des protocoles de chiffrement existent et sont connus en entreprise comme le **protocole SSL/TLS** que l'on reconnaît sur les sites internet par la mention « https :// » dans la barre d'adresse. Ce protocole permet de s'assurer que la connexion est sécurisée et que les données échangées, comme des coordonnées bancaires, entre le navigateur et le serveur sont chiffrées. Mais qu'en est-il de la sécurisation des échanges numériques ? DataSealed, une [entreprise française](https://www.beaboss.fr/Thematique/gestion-finance-1025/Breves/Les-100-entreprises-fran-aises-les-plus-rentables-373850.htm), a par exemple développé une solution innovante qui permet de sécuriser les échanges numériques, de protéger l'intégrité des données des entreprises ou celles de leurs clients et de se conformer au RGPD, grâce à des algorithmes de chiffrement modernes et complexes.

**Lire aussi** : [Stoïk, la start-up protégeant les TPE et PME des cyberattaques](https://www.beaboss.fr/Thematique/chef-entreprise-TV-1307/emergence-2340/Stoik-la-start-up-protegeant-les-TPE-et-PME-des-374892.htm)

## Des Fonctionnalités Multiples

La plateforme propose aussi une fonctionnalité qui permet d'envoyer l'information jusqu'à **10 destinataires**, qui pourront chacun accéder une fois à l'information. Un suivi de la bonne réception et de la consultation des liens pour chacun des destinataires est également possible depuis la plateforme. Au-delà de permettre de sécuriser les envois d'informations personnelles ou confidentielles, DataSealed permet également de générer un lien de réception à transmettre à la personne dont on souhaite recevoir des informations. Grâce à ce lien, la personne peut déposer les informations à transmettre en toute sécurité, sans avoir à créer de compte.

**Lire aussi :** [Fipto lève 15 millions d'euros pour développer sa solution de paiement B2B](https://www.beaboss.fr/Thematique/start-up-1271/levee-fonds-2074/Breves/Fipto-leve-15-millions-d-euros-pour-developper-sa-solution-384857.htm)

## Un Enjeu Stratégique

La sécurisation des échanges numériques constitue un enjeu stratégique majeur pour les entreprises, dont il est urgent de s'emparer. Sensibiliser les équipes aux risques cybers et investir dans des solutions de chiffrement permet de protéger les échanges numériques et d'éviter les fuites de données, de renforcer la confiance des clients et de préserver la réputation des entreprises.

[


](https://cdn.edi-static.fr/image/upload/c_scale,f_auto,q_auto,w_872/v1/Img/BREVE/2023/9/384998/895210-1-F.png)

Laurine bourgeois est co-fondatrice et directrice générale de DataSealed et juriste de formation.

Amaury Bargibant est développeur informatique et chef de projet digital de formation. Il a exercé en tant qu'indépendant pendant plus de 15 ans au service de différents clients et a également exercé des postes de Directeur Informatique et Transition Numérique.

# Un Mois Après la Cyberattaque Visant le CHU de Rennes, des Données Ont Été Publiées

source : [Un mois après la cyberattaque visant le CHU de Rennes, des données ont été publiées](https://www.usine-digitale.fr/article/chu-rennes.N2157752#xtor=EPR-4)

Des données personnelles, des documents financiers et des données du personnel de santé de l'hôpital ont été mis en ligne sur le dark web.

Un mois après [la cyberattaque ayant visé le CHU de Rennes](https://www.usine-digitale.fr/article/le-chu-de-rennes-victime-d-une-cyberattaque-des-donnees-derobees.N2146632), environ 300 Go de données ont été publiés samedi 29 juillet sur le dark web. _“Des données personnelles, des documents financiers, des données du personnel de santé de l'hôpital”,_ souligne le hacker éthique Clément Domingo.

Ces éléments ont été mis en ligne par le groupe de pirates informatiques BianLian, spécialisé dans les attaques par rançongiciel. Ce dernier n’avait encore pas revendiqué l’offensive ciblant le centre hospitalier rennais.

Selon la direction du CHU, il est encore impossible _“d’identifier avec précision la nature exacte et le contenu des données qui ont fait l’objet de cet accès illégitime”._ Des données de patients auraient été volées, tout comme des informations sur le personnel, notamment des numéros de sécurité sociale et des fiches de paie. La semaine dernière, une trentaine d’employés du CHU ont ainsi reçu _"un mail suspect"_ les menaçant de diffuser des informations personnelles.

## Faille chez Un Prestataire

[Selon des sources citées par LeMagIT](https://www.lemagit.fr/actualites/366542694/CHU-de-Rennes-un-compte-de-prestataire-detourne-pour-la-cyberattaque), la cyberattaque est due _"au détournement d’un compte de VPN SSL créé par les équipes du CHU de Rennes à l’intention d’un tiers, éditeur de logiciels métiers, à des fins de maintenance applicative”_. Des connexions à ce compte ont été constatées à partir de différentes adresses IP non françaises.

Après l’attaque, l’établissement avait assuré que l’impact sur son activité était limité. La prise en charge des patients était assurée, l'accès aux dossiers médicaux était maintenu et la réception des e-mails entrants avait été rétablie. En revanche, le site Internet du CHU est toujours inaccessible, rendant impossible la prise de rendez-vous en ligne et les téléconsultations. En juin, la direction de l'hôpital avait reconnu que _"le retour à la normale_ _[allait]_ _être long"._

# Cybersécurité En Entreprise : Tout Ce qu’il Faut Savoir

[Cybersécurité](https://blog.lockself.com/topic/cybers%C3%A9curit%C3%A9) • Temps de lecture 25 min • 17 juillet 2023

[](https://twitter.com/intent/tweet/?text=Cybers%C3%A9curit%C3%A9+en+entreprise+%3A+tout+ce+qu%E2%80%99il+faut+savoir&url=https%3A%2F%2Fblog.lockself.com%2Fcybersecurite-definition) [](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fblog.lockself.com%2Fcybersecurite-definition)


---

La cybersécurité en entreprise est une stratégie importante basée sur trois piliers : prévenir, détecter et réagir. D’abord, il s’agit de prévenir les risques en les analysant et en sensibilisant le personnel, entre autres. Ensuite, il faut savoir détecter et gérer les nouvelles menaces à travers diverses méthodes. Enfin, la cybersécurité en entreprise implique de mettre en œuvre un protocole d’intervention précis en cas de cyberattaque.

## Cybersécurité, Pourquoi Est-elle Essentielle Dans Votre Entreprise ?

Saviez-vous qu’une cyberattaque se produit toutes les 15 secondes en France ? Dans 60 % des cas, elle a poussée les PME a fermer leurs portes dans les 6 mois après. Le choix d’une solution de protection efficace devient aussi urgent que nécessaire face à un tel fléau.

### Cybersécurité : Définition

La cybersécurité désigne un ensemble de mesures et de techniques qui garantit l’intégrité, la confidentialité et la disponibilité des données. Elle implique différents niveaux de protection selon l’importance ou la sensibilité des informations à protéger. Elle tient compte de plusieurs phases, notamment la collecte, le traitement, le stockage, le transfert et la suppression des données.

La cybersécurité est intrinsèque à la transformation numérique observée au sein des entreprises. [La digitalisation et le télétravail ont bouleversé les process métiers.](https://blog.lockself.com/limpact-du-teletravail-sur-les-donnees-des-entreprises) De plus, les salariés se tournent désormais vers des outils de communication numériques : messagerie, transfert et stockage de fichiers, etc.

En matière de cybersécurité, le dirigeant assume la première responsabilité, qu’il soit à la tête d’une TPE, d’une PME ou d’une multinationale. La confidentialité porte aussi bien sur les données des clients que sur celles des salariés. Deux options sont possibles : l’internalisation avec une Direction des Systèmes d’Information ou l’externalisation avec des audits IT (Information Technology). Les plus vigilants combinent les deux pour une cybersécurité maximale. 

Toutefois, la DSI n’est pas la seule concernée. La cybersécurité nécessite l’implication de l’ensemble du personnel, notamment à travers une sensibilisation et une formation. Il s’agit de composer un bloc solide en associant les **outils sécurisés** avec les compétences humaines. Se protéger des menaces numériques relève de la responsabilité de chacun.

Les qualités humaines sont au cœur de la cybersécurité, parce que les cyberattaques sont les œuvres des humains. Parallèlement, les cybercriminels profitent du manque de vigilance des collaborateurs pour mettre en œuvre une attaque par phishing, par exemple. Les failles humaines deviennent logiquement un des centres de préoccupations. En ce sens, l’élaboration de la stratégie de prévention et de défense passe par une maîtrise de la psychologie. Concrètement, il s’agit d’anticiper au maximum les menaces en étudiant la complexité et les motivations profondes des cybercriminels. De plus, les compétences de ces derniers ne cessent de croître à mesure que les protections progressent. L’objectif est donc de se tenir au même niveau afin de se prémunir des nouvelles formes d’attaques.

Au-delà de celui d’un simple technicien, le besoin en médiateurs et facilitateurs se manifeste également. La cybersécurité en entreprise requiert une communication efficace et claire entre les parties prenantes. Son efficacité repose sur la relation de confiance établie entre la direction, le service informatique, le personnel et la clientèle.

La cybersécurité est l’embranchement de nombreuses méthodes de sécurité informatique. Elle regroupe la configuration et la surveillance des serveurs, l’installation des logiciels antivirus et l’utilisation d’un coffre-fort numérique comme LockSelf.

D’autres composantes sont également décisives, comme [la lutte contre le shadow IT.](https://blog.lockself.com/lutter-contre-shadow-it) Celui-ci désigne la pratique des salariés qui utilisent leurs propres logiciels ou solutions numériques dans leur travail. Cette méthode constitue une brèche dans la sécurité informatique de l’entreprise.

[](https://www.freepik.com/free-vector/access-control-system-abstract-concept_12085707.htm#&position=9&from_view=author)

### Cybersécurité : Distinction Avec Sécurité Informatique

D’un point de vue global, cybersécurité et sécurité informatique semblent renvoyer à une même notion. Elles ont des traits communs, notamment la sécurisation des données, des appareils et des personnes. En revanche, elles diffèrent au niveau de leur approche et des problématiques spécifiques qu’elles traitent.

La sécurité informatique porte essentiellement sur les technologies de l’information et leur intégrité. En pratique, elle met en place des mesures pour protéger les réseaux, les systèmes, [les accès](https://blog.lockself.com/gestion-des-acces-iam-entreprise) et les données. Les dommages à prévenir concernent aussi bien les mauvaises manipulations que les accès non autorisés.

La cybersécurité se concentre davantage sur la protection contre une cyberattaque ou une utilisation malveillante des données. Elle définit et respecte un protocole strict, pour anticiper, évaluer et écarter les menaces dans le cyberespace. Parmi ces dangers, on cite la cyber-invasion, le piratage, le vol ou l’exploitation illicite de données, l’accès non autorisé, etc.

Néanmoins, les deux concepts se rejoignent dans la protection de l’intégrité, de la disponibilité et de la confidentialité de données.

### Cybersécurité : Importance de Protéger Son Entreprise

Comment protéger mes données ? Cette question revient souvent chez tout utilisateur d’internet, car chaque information mérite une protection. Au sein des entreprises, elle revêt un caractère encore plus important. N’importe quelle organisation et activité, commerciale ou non, implique une collecte et un traitement d’informations personnelles. Les enjeux sont de taille pour les entreprises.

Non seulement le risque de pertes est élevé, mais les cyberattaques se multiplient également. D’un autre côté, les collaborateurs ne sont pas encore conscients de l’importance de la cybersécurité. Sécuriser les données devient une priorité, que ce soit sur les appareils connectés ou sur les ordinateurs privés. La mobilisation des équipes ne suffit pas, mais représente déjà un bon début.

Les vulnérabilités humaines figurent en première ligne de la liste des menaces pour la sécurité des données d’une entreprise. Entre négligence, fausse manipulation et mauvaise pratique, les risques sont énormes. Les erreurs émanant du personnel sont à l’origine des fuites ou des pertes de données.

Des études ont révélé que [les clients ou les partenaires sont les voies utilisées dans 48 % des cyberattaques](https://blog.lockself.com/tiers-de-confiance-comment-se-premunir-face-a-la-recrudescence-des-attaques-par-rebond). Les salariés se positionnent à la deuxième place avec 43 %. Les salariés temporaires sont des recours utilisés par les cybercriminels dans 38 % des cas. Subséquemment, les défaillances technologiques ou matérielles ne sont pas les premiers facteurs de risque, ce sont les humains.

La formation sur l’importance et l’évolution de la cybersécurité s’impose d’elle-même. Les collaborateurs doivent prendre conscience des dangers et appliquer les mesures recommandées pour les écarter au maximum. L’utilisation d’outils fiables sert à pallier les failles humaines. De plus, la menace croît proportionnellement avec la taille de l’entreprise, bien que les PME ne soient pas à l’abri.

Les conséquences d’une cyberattaque sont multiples, on parle d'[impacts financiers et matériels, voire juridiques.](https://blog.lockself.com/decryptage-cyberattaque-solarwinds) La cybersécurité s’organise autour de ces questions afin que tous les aspects soient sous contrôle dans la mesure du possible. La responsabilisation de chacun reste la première solution. Les analyses des situations et le développement d’outils numériques de protection viennent compléter ou faciliter la mise en place.

Par ailleurs, la connaissance et la maîtrise de plusieurs notions s'avèrent aussi indispensables. Parmi les plus importantes figurent les normes de sécurité, les risques courants, la cryptographie ou encore la veille informatique. Contrôler les accès et établir un process de gestion des données font partie des exigences en cybersécurité. Néanmoins, certains secteurs sont encadrés par des dispositions spécifiques.

### Cybersécurité : Quelques Exigences Spécifiques

Bien que la protection des données soit essentielle dans toute organisation, certains secteurs y sont soumis pour des raisons légales. 

#### _LA CYBERSÉCURITÉ DANS LE DOMAINE DE LA SANTÉ_

[Les établissements médicaux sont la cible parfaite des cybercriminels](https://blog.lockself.com/soutenir-les-acteurs-de-la-sant%C3%A9-dans-leurs-enjeux-de-cybers%C3%A9curit%C3%A9), car la sophistication des technologies du secteur représente un défi de taille. Les hackers perfectionnent leurs stratégies en défiant les équipements informatiques des services d’hôpitaux. L’Agence du Numérique en Santé ou ANS a d’ailleurs observé une hausse croissante des attaques dans le domaine. Le nombre d’attaques a doublé en France au cours de l’année 2021.

Les impacts d’une cyberattaque dans ce secteur sont dévastateurs. Les données des patients sont exposées à un risque de perte ou de vol. Le système d’information peut être interrompu ou arrêté définitivement. Les interventions d’envergure comme les opérations chirurgicales sont reportées ou perturbées. Les services d’urgences sont réorientés vers d’autres établissements. Les soins ne sont plus assurés correctement.

En somme, c’est toute l’organisation qui se retrouve déstabilisée, voire paralysée. Pire encore, les patients peuvent déposer une plainte ou poursuivre l’établissement, outre la réputation et la crédibilité déjà anéanties. Des pertes financières de différents ordres sont également à craindre, en dehors des frais de réparation des équipements. Les cybercriminels demandent parfois une rançon en échange des données volées ou chiffrées.

Par conséquent, la cybersécurité dans le secteur médical est une obligation. Les établissements mettent tout en œuvre pour protéger au maximum les données et leur système informatique. Plus que jamais, la responsabilisation du personnel présente un caractère important, si ce n’est salutaire. En effet, le phishing reste le premier danger dans les hôpitaux. Les hackers usurpent une identité pour soutirer des informations à des agents internes. D’autres techniques sont aussi courantes, dont l’infiltration du service informatique à travers le ransomware et le cheval de Troie.

#### _LE RGPD ET SES OBLIGATIONS_

Le RGPD est le sigle du Règlement Général sur la Protection des Données. Il s’agit d’un dispositif légal qui encadre la collecte et le traitement des données au niveau européen. Il s’accompagne de plusieurs obligations auxquelles doivent se conformer les entreprises, quelles qu’elles soient.

L’application de ce règlement s’effectue par étape. Le processus débute par l’obtention de l’accord du client pour la collecte de ses informations. L’étape suivante consiste à l’informer de son droit d’accès et de modification des renseignements le concernant. Il est également informé de son droit d’opposition et de suppression. Les obligations suivantes portent sur la sécurité des systèmes d’information et la confidentialité des données. Le RGPD impose aux entreprises de définir et de communiquer la durée de conservation des données qu’elles recueillent et traitent.

Il faut distinguer deux notions dans le RGPD, en l’occurrence la responsabilité de traitements et la sous-traitance. La première renvoie aux entreprises qui recueillent, traitent et stockent des données dites à caractère personnel. La deuxième fait référence aux entreprises qui traitent ces mêmes informations, mais pour le compte d’autres organismes ou structures. Dans les deux cas, les obligations demeurent les mêmes.

#### _LA DIRECTIVE NIS 2_

En juillet 2016, l’Europe adopte la directive appelée [Network and Information Security ou NIS](https://blog.lockself.com/nis2-quels-impacts-pour-mon-organisation-). La France transpose ce dispositif à l’échelle nationale dans 19 secteurs d’activité. Une centaine de structures françaises est concernée, avec l’objectif d’améliorer la cybersécurité. La NIS exige la déclaration des incidents de sécurité auprès de l’ANSSI ou Agence Nationale de la Sécurité des Systèmes d’Information. À cela s’ajoute la mise en œuvre des moyens nécessaires pour diminuer les risques d’exposition aux crises cyber.

En 2022, la NIS 2 correspond à une directive complémentaire qui élargit les exigences règlementaires précédentes. Son entrée en vigueur est prévue pour le 2e semestre de 2024 en France. Deux cas peuvent se présenter dans l’application des réglementations. Elles peuvent nécessiter un délai de mise en conformité comme elles peuvent s’appliquer directement. 

Les ambitions de la NIS 2 sont plus vastes et plus hautes, comparées à celles établies dans le texte fondateur. Le dispositif repose sur une réglementation cyber plus aboutie et plus exigeante au niveau national et européen. Il vise à mieux affronter les défis de plus en plus complexes à cause des cybercriminels qui ne cessent de se perfectionner. 

En pratique, la NIS 2 se présente en tant que socle législatif dans l’évolution de la cybersécurité. Elle se concrétise par une coopération renforcée entre les États européens et une mobilisation effective du secteur public. Cette version révisée de la NIS implique davantage le réseau CyCLONe ou Cyber Crisis Liaison Organisation Network. Les agences nationales chargées de la gestion de crise cyber y sont regroupées. Ensemble, elles mettent en place et appliquent des mesures optimales pour adapter les moyens aux défis des secteurs. Outre un cadre normatif plus concret, la NIS 2 revendique aussi l’adéquation des solutions aux menaces existantes.

Les directives NIS et NIS 2 concernent les secteurs suivants, entre autres :

- Santé ;
- Agroalimentaire ;
- Eau potable ;
- Eaux usées ;
- Gestion des déchets ;
- Transport ;
- Banque ;
- Infrastructure des marchés financiers ;
- Fournisseurs des services numériques ;
- Infrastructures numériques ;
- Administrations publiques ;
- Services postaux et d’expédition ;
- Énergie ;
- Fabrication, production et distribution de produits chimiques ;
- Industrie ;
- [**Aérospatial** ;](https://blog.lockself.com/temoignage-client-exotrail)
- Etc.

La NIS 2 concerne les entreprises de plus de 50 salariés des 35 secteurs d’activité. Leur chiffre d’affaires doit être supérieur à 1 million d’euros. La nouvelle directive distingue deux types d’organisation, à savoir l’EE ou entité essentielle et l’EI ou entité importante. Les entreprises de sous-traitance et les collectivités territoriales sont désormais intégrées dans la NIS 2.

### Cybersécurité : Différents Niveaux de Protection

Le type de données stockées ou traitées définit le niveau de protection requis pour les systèmes informatiques. En effet, les informations ne présentent pas la même criticité. La cybersécurité part de l’évaluation de ces vulnérabilités pour choisir les moyens de protection à déployer.

En principe, il existe 4 niveaux de sécurité. Les solutions abordables qui ne proposent aucun chiffrement composent les systèmes dits à faible niveau de sécurité. Les solutions standards de type pare-feu regroupent les dispositifs de sécurité de niveau moyen. Les technologies de pointe relèvent des systèmes à haute sécurité avec les authentifications 2FA (deux facteurs) ou MFA (multifactorielle). Les points d’extrémité sont également protégés par des logiciels antivirus performants. Le dernier niveau de protection concerne la mise en place d’une isolation complète. Les violations sont maîtrisées au maximum avec des machines spécifiques, des protocoles rigoureux et des ports limités. L’accès aux informations du 4e niveau est strictement réservé à un personnel autorisé.

Dans une démarche plus large, la classification des appareils indique aussi le degré de criticité. Un ordinateur utilisé à domicile fait donc partie des matériels personnels. Un ordinateur utilisé en entreprise se classe parmi les équipements professionnels. Dans les deux cas, les risques ne sont pas seulement numériques, mais peuvent être physiques. La sécurisation tient compte du contexte d’utilisation pour contourner au maximum les tentatives de piratage.

## Cyberattaque : Pourquoi Est-ce Un Risque Non Négligeable ?

En 2021, les cyberattaques ont touché 33 % des TPE et des PME. Ces structures se constituent de moins de 250 salariés. Par conséquent, les menaces concernent toutes les organisations, quelles que soient leur taille et leur activité.

### Le Danger des Cyberattaques

Tous les domaines sont exposés à des risques de cyberattaques. Même si les principales cibles des cybercriminels sont les secteurs financiers, la santé et l’enseignement.

Plusieurs raisons motivent cette préférence. Les structures opérant dans ces secteurs détiennent et traitent des données sensibles et elles constituent également d’importantes ressources de données personnelles. 

Le contexte de la digitalisation multiplie les risques. Chaque année, le volume de données sensibles stockées est de plus en plus important. Leur valeur ne cesse d’augmenter, aiguisant davantage de malveillance de toutes parts. 

Les dégâts laissés par les cyberattaques ne se limitent pas à ceux sur le système informatique. Ils font un effet domino qui compromet toute la structure de l’organisation en général. Les répercussions s’étendent sur plusieurs années. Dans certains cas, les victimes ne parviennent même plus à se remettre sur pied.

Pour une PME, une cyberattaque coûte de 20 000 € jusqu’à plusieurs centaines de milliers d’euros. Les conséquences financières augmentent proportionnellement avec la gravité de l’attaque

De plus, il existe un décalage de temps important entre la durée de l’infection et le redémarrage des activités. Les impacts sur le délai de reprise génèrent d’autres pertes financières, outre celles déjà causées par l’attaque elle-même. Parallèlement, les autres dommages ne se chiffrent plus en argent, mais en perte de client, de crédibilité, de partenariat, etc. D’autres préjudices planent : chômage technique du personnel, demande de rançon des hackers ou encore disparition définitive des données.

[Les PME sont les plus vulnérables aux cyberattaques, parce qu’elles déploient peu de moyens.](https://blog.lockself.com/les-cci-au-service-des-tpe-et-pme-face-au-risque-cyber) Cette défaillance se traduit par l’utilisation de solutions standards et peu fiables, ou encore par des équipements moins performants. D’un autre côté, la nécessité des assurances cybersécurité n’est pas encore ancrée dans la plupart des stratégies d’entreprise.

### Les Différents Types de Cyberattaques

Avec la multitude de cyberattaques possibles, la vigilance est de mise. Reconnaître les méthodes les plus courantes aide à choisir les solutions de protection adaptées.

#### _LE RANÇONGICIEL OU RANSOMWARE_

Le rançongiciel ou ransomware est un technique très courante. Les hackers privilégient cette technique de racket numérique pour son efficacité. Ils infiltrent les systèmes informatiques des entreprises via un virus glissé dans une pièce-jointe conçue pour chiffrer les données qui s’y trouvent. Comme dans un enlèvement physique, les malfaiteurs réclament une rançon en échange de la libération des données prises en otage. 

Le grand danger avec le ransomware est sa rapidité d’infection. En effet, il bascule d’un ordinateur à un autre à grande vitesse. Quelques secondes suffisent pour bloquer les documents dans tous les autres ordinateurs de l’entreprise. Personne n’accède aux fichiers, sauf les hackeurs. Souvent, ces derniers augmentent le montant de la rançon à mesure que le temps passe. Le pic a été celui réclamé à Acer avec une rançon de 50 millions de dollars. L’attaque dure de quelques jours à plusieurs semaines, selon les cas. L’ANSSI a déclaré une hausse de 255 % d’incidents de rançongiciels sur un an (2021). En moyenne, les malfaiteurs réclament entre 900 000 $ et 2 200 000 $, soit environ entre 840 000 € et 2 060 000 € (2020 – 2021).

#### _LE HAMEÇONNAGE OU PHISHING_

Le hameçonnage est dangereux par sa sournoiserie. De plus, il s’agit d’une technique déjà très répandue, mais que les moins vigilants ne soupçonnent pas encore. En 2021, 57 % des tentatives d’hameçonnage dans le monde ont été réussies. Une étude américaine a également rapporté que 83 % des entreprises ont déjà subi ce type de cyberattaque. 

Le phishing piège par sa simplicité qui se veut logique en apparence. Le cybercriminel utilise le nom d’une administration ou d’une entreprise privée pour demander des codes d’accès de comptes. Les cibles se laissent convaincre par les arguments avancés : besoins de sondage, réinitialisation de comptes, amélioration de services, etc. Parfois, les malfaiteurs proposent de réaliser des transactions financières frauduleuses pour extorquer de l’argent et obtenir des données personnelles.

[](https://www.freepik.com/free-vector/computer-pirate-hacker-create-software-designed-cause-damage-computer-server-computer-network-malware-computer-virus-spyware-concept_11667624.htm#page=7&position=11&from_view=author)

#### _LA FUITE DE DONNÉES_

Entre 2020 et 2021, le taux de fuite de données a augmenté de 78 % ! De plus, il s’agit surtout d’une menace interne liée à une négligence ou une malveillance dans 52 % des cas. Elle se produit généralement de deux façons. D’une part, un collaborateur télécharge par inadvertance des fichiers suspects ou se rend sur des sites peu fiables. Cette erreur humaine va coûter cher dans la mesure où elle ouvre grandement la porte aux cybercriminels. Il en va de même pour les utilisateurs qui choisissent des mots de passe faibles. D’autres ne ferment pas leur session après leur connexion. D’autre part, un collaborateur ayant des différends ou des désaccords avec son employeur peut transférer ou copier des données sensibles sur ses appareils personnels. Il stocke ainsi des fichiers sur une clé USB ou son ordinateur afin de les revendre à la concurrence ou les utiliser illégalement. Dans les deux cas, la fuite de données génère des pertes importantes pour l’entreprise victime. 

Il existe également un dernier risque : les vulnérabilités zero-day. Les cybercriminels infiltrent les systèmes informatiques de l’entreprise en passant par des failles de logiciels que les éditeurs eux-mêmes n’ont pas encore repérées. La première solution de prévention reste la mise à jour automatique des applications utilisées afin de se prémunir de ces failles.

#### _LA FRAUDE AU PRÉSIDENT_

La fraude au président est une menace qui relève du haut niveau. En effet, les cybercriminels n’infiltrent pas les systèmes informatiques, mais s’attaquent directement au service de comptabilité. Ils usurpent l’identité d’une haute autorité dans l’entreprise : PDG, directeurs ou autres postes stratégiques. Ils appellent directement le comptable ou lui envoient un courrier électronique. Ils utilisent des arguments solides avec flatterie ou menace pour demander une transaction financière non seulement importante, mais également en urgence. Les malfaiteurs leurrent leur victime et la manipulent de toutes les façons, si bien qu’elle finit souvent par céder. Le virement effectué, les criminels disparaissent, laissant l’entreprise face à ses pertes. 

#### _L’ATTAQUE DDOS_

Entre 2021 et 2022, la hausse des attaques DDos a grimpé de 109 %. Le Distributed Denial of Service attack cible et paralyse les entreprises exerçant en ligne. Les e-commerces sont les premières victimes de ce type de cyberattaque. Les cybercriminels prennent le contrôle à distance et saturent le réseau de la cible. Celle-ci se retrouve envahie par d’innombrables demandes de connexion simultanées qui paralysent immédiatement les ventes. Les pirates profitent de cette saturation pour demander une rançon ou infiltrer le système informatique.

### Les Coûts d’une Cyberattaque Pour Une Entreprise

La cyberattaque sous toutes ses formes génère des coûts visibles et cachés.

#### _LES COÛTS VISIBLES_

Les pertes financières constituent les premiers coûts visibles d’une cyberattaque. Entre 2021 et 2022, une enquête d’IBM Security a révélé que ces incidents coûtent 4,35 millions de dollars. Le groupe informatique rapporte également que la monnaie d’échange la plus courante est désormais la cryptomonnaie. 

Les frais engagés dans une crise cyber sont répartis dans plusieurs réparations. L’entreprise victime doit d’abord demander une enquête technique. Elle doit aussi restaurer son image en sollicitant des conseils et des spécialistes en relations publiques. Dans la même logique, elle s’engage à s’occuper de sa relation client à travers la communication concernant l’incident. La mise en conformité s’impose après une cyberattaque et cette démarche engendre des coûts supplémentaires. 

D’autres procédures payantes sont incontournables, dont la sécurisation des données et le renforcement des solutions de protection. Les frais judiciaires et le paiement des rançons (bien que peu recommandé) pèsent également sur la trésorerie de la victime. Le risque avec le paiement des rançons est la récidive. Rarement satisfaits, les pirates tenteront d’autres attaques pour obtenir plus d’argent. À titre d’exemple de frais judiciaires, Slimpay a dû s’acquitter d’une amende de 180 000 € en 2021. L’entreprise de solution de paiement en ligne a failli à son devoir de protection des données de ses clients. Les sanctions peuvent équivaloir à 20 millions d’euros jusqu’à 4 % du CA annuel en cas de manquement au RGPD. Les dommages matériels et l’inactivité pendant la crise cyber sont autant de coûts financiers pouvant se chiffrer lourdement.

En 2017, la filiale du groupe Saint-Gobain a subi une cyberattaque qui a amputé 220 millions d’euros au chiffre d’affaires. 

[](https://www.freepik.com/free-vector/audit-service-assistance-financial-report-bookkeeping-analysis-company-finances-management-financier-making-corporate-expenses-assessment_11669054.htm#page=4&position=23&from_view=author)

#### _LES COÛTS INVISIBLES_

La reprise des activités s’avère difficile pour une entreprise qui subit une cyberattaque. En effet, les coûts cachés de l’incident affectent également l’activité. D’abord, la situation entraîne une perte de crédibilité. La victime est désormais considérée comme peu fiable et les clients ou les partenaires rechignent à rétablir la confiance rompue. L’image de marque s’en trouve ternie et la marque perd de sa valeur, réduisant davantage ses opportunités d’affaires. Collaborateurs, clients et partenaires se tournent parfois vers la concurrence. En outre, les candidats à l’embauche se raréfient, laissant l’entreprise boiteuse, outre les éventuelles démissions. Dans certains cas, le vol de données concerne des inventions ou des innovations. Les inventeurs perdent ainsi la propriété intellectuelle de leurs projets. Pour les entreprises ayant déjà des dettes à payer, celles-ci risquent de s’alourdir avec les conséquences financières de la cyberattaque.

### Comment Se Protéger des Hackers ?

Tous les systèmes informatiques sont exposés à des failles et des vulnérabilités, aussi sophistiqués et avancés soient-ils. Se protéger des hackers comporte des étapes : évaluation des risques, sensibilisation du personnel et utilisation d’outils sécurisés.

### L’évaluation Du Niveau de Risque des Données

Évaluer le niveau de risque signifie passer au crible toute l’organisation digitale et informatique de l’entreprise. [L’examen porte sur l’état réel du parc informatique](https://blog.lockself.com/securiser-son-parc-informatique-en-3-points) avec une mise au point complète des appareils. Il s’agit aussi de se projeter dans le futur en considérant les menaces potentielles sur l’évolution de l’activité. La connaissance des risques et des vulnérabilités du système informatique est une grande avancée. Bien que les audits internes puissent rapporter ces éléments, les compétences externes sont nécessaires. De plus, les incidents vécus ne suffisent pas non plus à évaluer complètement les risques. Les audits IT externes permettent de renforcer la protection des données. Ils apportent un regard neuf et renseignent sur les nouvelles menaces potentielles ou avisent des risques émergents.

#### _IDENTIFICATION DES MENACES POTENTIELLES_

La phase d’identification permet d’analyser quel type de cyberattaque menace l’entreprise en fonction de son activité et de ses équipements. Elle sert aussi à définir quel danger pourrait s’avérer le plus redoutable et le plus ravageur. Les cybercrimes se présentent de diverses façons et certains sont plus courants que d’autres suivant le contexte. Déterminer celui qui concerne l’entreprise aide à mieux se protéger. 

En pratique, il faut s’intéresser aux incidents rapportés ou survenus dans le secteur. Le hameçonnage menace les petites entreprises dans 90 % des cas. Par exemple, les DME ou dossiers médicaux électroniques se vendent à des milliers de dollars. Si vous êtes dans le secteur de la santé, vous mettez tout en œuvre pour protéger ces types de données. Il suffit de transposer cette méthode d’identification à chaque activité et selon la criticité des informations.

Cette étape vise également à évaluer le coût potentiel des cyberattaques. Connaître les éventuelles pertes à prévoir se révèle nécessaire pour identifier les mesures les plus appropriées pour s’en prémunir.

#### _MÉTHODE AMDEC_

L’Analyse des Modes de Défaillance, de leurs Effets et de leur Criticité est une méthode importée des États-Unis. Elle se base sur l’identification de ce qui s’appelle « modes de défaillances ». Elle part également sur un indice de criticité. En pratique, l’analyse comprend un travail d’inventaire et de listing de toutes les situations pouvant présenter des risques. Ainsi, la liste ambitionne d’être exhaustive et ne laisse aucun détail au hasard. Cette approche nécessite un investissement important, tant en termes de délai que d’investigation. Elle vise un recensement complet de tous les modes de défaillance que l’entreprise peut présenter. Sa finalité est d’élaborer des mesures efficaces et adéquates pour prévenir les risques et corriger les défaillances.

#### _IDENTIFICATION DES VECTEURS D’ATTAQUES_

Les vecteurs d’attaques sont les portes d’entrée des cybercriminels. Ils constituent les principales vulnérabilités de l’entreprise et sont de toutes sortes. L’Institut Ponemon a constaté que la négligence est à l’origine des 60 % de fuites de données survenues dans les PME. Cette étude de 2018 a également démontré que les appareils mobiles sont des vecteurs d’attaques très répandus. Par conséquent, l’évaluation des risques se focalise sur l’analyse des failles potentielles : collaborateurs, partenaires ou prestataires. Elle s’intéresse aussi aux équipements et aux pratiques : mot de passe faible, manque de sauvegarde, shadow IT, etc. Plus ces vecteurs sont répertoriés, plus les mesures de prévention sont plus précises et efficaces. Les besoins de sécurité pour le système et réseau informatique varient sensiblement selon les entreprises.

#### _IDENTIFICATION DES RISQUES LIÉS AUX TIERS_

Les risques externes sont liés au partenariat, à la sous-traitance et au tiers. Cette étape implique une identification des réseaux, des plateformes et des logiciels utilisés par les [tiers en collaboration avec l’entreprise](https://blog.lockself.com/tiers-de-confiance). Elle se concentre sur le traitement et le partage de données effectués entre l’entreprise et les tiers. Il peut s’agir des prestataires, des sous-traitants, des bénéficiaires d'offres ou des fournisseurs. 

L’opération débute par l’inventaire et la catégorisation des tiers en fonction des menaces potentielles. Elle se poursuit avec l’identification des critères d’évaluation et la détermination des fréquences de contrôle. Elle comprend aussi l’évaluation des pratiques informatiques selon les normes en vigueur, qu’elles soient nationales, régionales ou internationales.

### La Formation et la Sensibilisation des Équipes

La sensibilisation du personnel incluant les équipes et les collaborateurs est à la base d’une cybersécurité optimale. La sécurité numérique concerne tout le monde et cette formation constitue une étape obligatoire.

Les cybercriminels profitent de la moindre faille ou négligence pour s’emparer d’une entreprise. Certaines cyberattaques sont évincées grâce à une méthode simple, mais efficace : la formation des collaborateurs. Cette procédure part de l’information et de la sensibilisation. Elle limite les erreurs humaines en insistant sur l’importance de la prudence. 

Parmi les recommandations figurent le choix des mots de passe robustes, la fermeture des sessions à chaque déconnexion. Un mot de passe solide ne contient pas d’information personnelle : nom, date importante ou famille. Il comprend des majuscules, des minuscules, des chiffres. Il convient aussi de sensibiliser sur certains réflexes, comme ne pas répondre à des expéditeurs ou des liens inconnus. La précision est de rigueur dans chacune des étapes d’information et de formation. Par exemple, vous pouvez établir une charte informatique qui indique toutes les conditions d’utilisation et les réglementations des matériels. Le personnel prend connaissance et accepte de se conformer à ces conditions. Celles-ci concernent plusieurs éléments : équipement informatique, messagerie, pratiques professionnelles, etc. La charte informatique peut interdire l’utilisation d’un matériel personnel dans le travail. [Effectivement, le shadow IT constitue une porte d’entrée des cyberattaques.](https://blog.lockself.com/lutter-contre-shadow-it)

La formation peut se faire à travers des stages ou des sessions spécialisées. La mise à jour des connaissances s’impose également. Régulièrement, il convient d’organiser des renforcements de capacités ou des formations spécifiques selon la criticité des données. Cette phase de mise à jour rappelle les bonnes pratiques tout en présentant l’évolution des cyberattaques avec des cas concrets. L’objectif en cybersécurité est de disposer des mêmes informations que les cybercriminels pour mieux s’en protéger.

### L’équipement En Outils Sécurisés

Former les équipes est bien, leur fournir des outils sécurisés est mieux. En effet, les collaborateurs sont plus efficaces et rassurés lorsqu’ils accèdent à des matériels performants. Le transfert de fichiers compte parmi les méthodes de travail qui exigent la plus grande protection. LockSelf s’est spécialisée dans l’élaboration de solutions à la pointe de la technologie. La suite LockSelf comprend des outils indispensables pour le stockage et le transfert : LockFiles et LockTransfer. 

L’**évolution de la cybersécurité** a créé un poste stratégique: le DPO ou délégué à la protection des données. Ses missions et responsabilités s’articulent autour du RGPD et de ses enjeux. À partir de l’identification des problématiques et de l’analyse des menaces, LockSelf a développé une solution sécurisée. La suite met à disposition une interface unique pour gérer et centraliser les données et les tâches. Elle offre un contrôle accru sur plusieurs aspects : accès et authentification, partage de données, activités dans le réseau, etc.

LockTransfer se présente comme une solution sécurisée pour partager des fichiers vers l’extérieur. La certification de l’ANSSI garantit sa conformité aux réglementations en vigueur en France et en Europe. Il permet de créer un espace de partage hautement sécurisé pour renforcer la confiance entre l’entreprise et les tiers. Il présente aussi une compatibilité avec Outlook via un plugin.

### La Gestion de Crise Cyber

Une crise cyber varie selon l’ampleur de l’incident. En moyenne, la gestion d’une cyberattaque a nécessité 277 jours au cours de l’année 2022. Les rançongiciels prennent environ une cinquantaine de jours à être identifiés et neutralisés. La nature de l’attaque et la durée d’intervention ont des répercussions sur la reprise des activités suspendues. Concrètement, plus les dommages sont importants, plus la crise se prolonge, et les pertes augmentent proportionnellement.

Les entreprises prévenantes ont pu raccourcir le délai à 200 jours grâce à une stratégie déjà mise en place. La constitution au préalable d’un comité et la disposition d’une équipe d’intervenants comptent parmi les moyens efficaces. L’établissement d’un plan de RI ou réponse aux incidents représente également un atout dans le renforcement de la cybersécurité.

# Pourquoi Il Est Temps d’aller Vers la Cyber Offensive

[Alain Clapaud](https://www.silicon.fr/author/aclapaud), 4 avril 2023, 15:17 | Mis à jour le 7 avril 2023, 9:36


[0](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.silicon.fr%2Fdossiers%2Fpourquoi-aller-vers-cyber-offensive)[](https://twitter.com/share?text=Pourquoi+il+est+temps+d%E2%80%99aller+vers+la+cyber+offensive&url=https%3A%2F%2Fwww.silicon.fr%2Fdossiers%2Fpourquoi-aller-vers-cyber-offensive)[0](https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.silicon.fr%2Fdossiers%2Fpourquoi-aller-vers-cyber-offensive&title=Pourquoi+il+est+temps+d%E2%80%99aller+vers+la+cyber+offensive&source=https%3A%2F%2Fwww.silicon.fr)

[](https://www.silicon.fr/dossiers/pourquoi-aller-vers-cyber-offensive?print=pdf)[](https://www.silicon.fr/dossiers/pourquoi-aller-vers-cyber-offensive?print=print)

Comment s’assurer que les mesures de protection cyber mises en œuvre sont réellement efficaces ? En les confrontant aux hackers et aux méthodes de la cyber offensive. Une approche qui regroupe de multiples facettes.

Dans l’imaginaire collectif, la cyber offensive fait penser à l’action des services secrets et surtout à la cybercriminalité. Le vocabulaire même de la cyber offensive avec sa « Blue Team contre la Red Team » a des airs de guerre froide.

Pour une entreprise, la cyber offensive consiste essentiellement à recourir à des hackers éthiques pour éprouver la sécurité de son système d’information. Le terme « cyber offensive » regroupe en fait de multiples techniques complémentaires.

Au sommet de la liste des risques figure l’attaque par phishing, point d’entrée de nombreux ransomwares. Plusieurs solutions du marché, dont [Microsoft Defender pour Office 365 Plan 2 ou Microsoft 365 E5](https://www.silicon.fr/edr-soc-microsoft-defender-437717.html) permettent de mener des simulations d’attaque et envoyer des emails de phishing inoffensifs afin d’identifier les collaborateurs les plus enclins à cliquer sur les liens et de leur proposer des formations.

Mouloud Aït-Kaci, fondateur de la société de conseil Hackyom prévient : « Ces opérations sont difficiles à mettre en œuvre pour les entreprises même s’il existe des solutions automatisées ou des prestataires spécialisés. En effet, il faut concevoir des campagnes de phishing pertinentes qui permettent de sensibiliser par étapes des populations de collaborateurs sur des risques spécifiques liés au [vecteur d’attaque phishing.](https://www.silicon.fr/cyberattaques-pme-hameconnage-principale-menace-2022-461138.html) »

## Pentest : l’approche Cyber Offensive la plus Usitée

Avec l’audit de code source, de configuration, d’architecture, l’audit organisationnel et l’audit de sécurité physique, le pentest est le moyen pour le concepteur d’une application de s’assurer de la sécurité d’une application. Le principe est simple : demander à des auditeurs de lister toutes les vulnérabilités sur un périmètre bien précis.

« [Le test d’intrusion](https://www.silicon.fr/dossiers/comment-selectionner-un-fournisseur-de-tests-dintrusion) intervient en général lorsqu’on arrive au stade de l’avant mise en production puis lors de l’exploitation de l’application » précise Mouloud Aït-Kaci. « Il faut bien avoir en tête qu’un test d’intrusion n’est pas exhaustif et ne peut être complet : on ne peut jamais tout tester dans le délai et le budget imparti et les tests dépendent aussi de la séniorité de l’auditeur. »

Rémi Gascou, hacker éthique, Pentest Team Leader & Consultant Cybersécurité offensive chez Capgemini ajoute : « Il est nécessaire de bien définir le périmètre des tests et de ne pas hésiter à auditer des applications critiques. Souvent, on a tendance à ne pas vouloir toucher aux applications trop sensibles tant qu’elles fonctionnent, mais c’est également très important de les auditer et de les protéger, car ce sera les cibles prioritaires des attaquants. »

## Red Team : les Commandos de la Cyber

Alors qu’un pentest est horizontal, avec un attaquant qui cherche toutes les vulnérabilités sur un périmètre précis, le rôle d’une Red Team cherche à rentrer dans le système d’information le plus profondément possible dans le cadre des règles d’engagement préalablement établies.

La Red Team fonctionne très souvent en boite noire avec quasiment aucune information sur sa cible. Et le SOC peut être prévenu au préalable… ou pas. Une Red Team évalue les mécanismes de défense techniques ou organisationnels, mais peut aussi entraîner les équipes chargées de les mettre en œuvre. C’est ce que l’on appelle un fonctionnement en Purple Team.

A ces prestations généralement commandées auprès de cabinets de conseil ou d’entreprises de services numériques aux process bien industrialisés et standards, certaines entreprises très matures dans leurs [processus DevSecOps](https://www.silicon.fr/devsecops-5-tendances-rapport-gitlab-339963.html) s’intéresse à une approche un peu différente, le Bug Bounty.

« Mettre en œuvre un programme de Bug Bounty revient à se doter d’une armée virtuelle d’experts très qualifiés qui peuvent individuellement et potentiellement être pertinents sur LE maillon faible de votre sécurité. » explique Mouloud Aït-Kaci.

L’expert souligne que se lancer dans le Bug Bounty n’est pertinent que si on est déjà très mature sur les process de pentest et que l’on est capable de corriger très rapidement les failles remontées par les hackers, ce qui est encore loin d’être le cas de toutes les entreprises.

# Plus de 50 Millions de Dollars Siphonnés Sur Un Protocole de Finance Décentralisée

Curve, un protocole DeFi, a été victime de plusieurs cyberattaques s'appuyant sur une faille dans le langage de programmation de ses smart contracts. Le montant total du larcin atteindrait plus de 50 millions de dollars. 

Raphaële Karayan

31 juillet 2023 \ 16h47

1 min. de lecture

- [](https://www.usine-digitale.fr/article/plus-de-50-millions-de-dollars-siphonnes-sur-un-protocole-de-finance-decentralisee.N2157872#)
- [](https://www.usine-digitale.fr/article/plus-de-50-millions-de-dollars-siphonnes-sur-un-protocole-de-finance-decentralisee.N2157872#)
- [](https://www.usine-digitale.fr/article/plus-de-50-millions-de-dollars-siphonnes-sur-un-protocole-de-finance-decentralisee.N2157872#)
- [](https://www.usine-digitale.fr/article/plus-de-50-millions-de-dollars-siphonnes-sur-un-protocole-de-finance-decentralisee.N2157872#)
- [](https://www.usine-digitale.fr/article/plus-de-50-millions-de-dollars-siphonnes-sur-un-protocole-de-finance-decentralisee.N2157872#)


© Elifxlite/Pixabay

Une cyberattaque visant le protocole de finance décentralisée Curve, en cours depuis le 30 juillet, aurait déjà abouti au vol de plus de 50 millions de dollars. Il résulterait d'une faille dans le langage de programmation de smart contracts sur la blockchain Ethereum Vyper, utilisé par la plateforme de trading décentralisée (DEX). Plusieurs pools de liquidités de Curve, libellés dans différentes cryptomonnaies, auraient été victimes de l'attaque.

Ces pools de liquidités sont utilisés par les déposants pour obtenir un rendement, et par les traders pour leurs échanges.

Selon un développeur de Vyper, les pirates ont certainement _"mis des semaines voire des mois"_ pour trouver la vulnérabilité dans Vyper.

## Un des Principaux Protocoles de DeFi

Selon les informations de la presse spécialisée, une partie des fonds drainés correspondrait à des pirates "white hats" (hackers éthiques, experts en cybersécurité…), ce qui voudrait dire qu'ils ne sont pas perdus.

Curve gère environ 3 milliards de dollars de liquidités, ce qui en fait l'un des principaux protocoles de la finance décentralisée. Il s'est spécialisé dans les swaps de stablecoins.

Selon Chainalysis, les protocoles DeFi sont depuis 2021 la [cible principale des pirates](https://www.usine-digitale.fr/article/finance-decentralisee-718-millions-de-dollars-pirates-au-seul-mois-d-octobre.N2054767) spécialisés dans les cryptomonnaies. En 2022 ils ont représenté plus de 80% des fonds volés, soit un total de 3,1 milliards de dollars. De manière générale, le piratage de cryptomonnaies a battu des records l'année dernière.
source :[Plus de 50 millions de dollars siphonnés sur un protocole de finance décentralisée](https://www.usine-digitale.fr/article/plus-de-50-millions-de-dollars-siphonnes-sur-un-protocole-de-finance-decentralisee.N2157872#xtor=EPR-4)

# Contenu

Important Note

Users of this website are required to agree to the following terms:

STORM is a research preview from the Stanford Open Virtual Assistant Lab (check out our 🔗research paper). It has limited safety measures and may generate offensive content. It must not be used for any illegal, harmful, violent, racist, or sexual purposes. The generated report can make mistakes; please always check important information. The generated content does not represent the developer's viewpoint.

By visiting our website, you are granting us the permission to collect your inputs and feedback, use them for our research, and potentially distribute them under a Creative Commons Attribution (CC-BY) or a similar license. This online demo is approved by Stanford IRB (Protocol ID: 74154).

Before proceeding, please carefully read our consent form:

DESCRIPTION: You are invited to try out a research preview of our NAACL 2024 paper https://arxiv.org/abs/2402.14207. To use it, you need to first agree with our “Terms of Service” displayed on the web demo and verify you are a real human user by logging in your Google account. On our web demo, you can input the topic you want to learn in depth and your purpose of researching this topic. Based on your input, our system will generate a report with hierarchical outline and references. You can read the report on our web demo. If you would like to, you can provide feedback of the generated report using the feedback box on our web demo. Your input and feedback (if provided) will be securely stored associated with the report generated by our system. Your Google account information will only be used to maintain your login status and will not be combined with data we collected.

USER'S RIGHTS: If you have decided to try out our research preview, please understand you have the right to stop using it at any time. The results of this research study may be presented at scientific or professional meetings or published in scientific journals. Your individual privacy will be maintained in all published and written data resulting from the study.

POTENTIAL RISKS: The risks associated with this study are minimal. Study data will be stored securely, in compliance with Stanford University standards, minimizing the risk of confidentiality breach.

CONTACT INFORMATION: Questions: If you have any questions, concerns or complaints about this research, its procedures, risks and benefits, contact the Protocol Director, Yijia Shao – shaoyj@stanford.edu.

Independent Contact: If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906, or email at irbnonmed@stanford.edu. You can also write to the Stanford IRB, Stanford University, 1705 El Camino Real, Palo Alto, CA 94306.

Please print or save a copy of this page for your records.

I have carefully read the above and accepted all the terms and conditions

📘 Table of Contents

close
Perception of Cybersecurity in E-Commerce

summary
The perception of cybersecurity in e-commerce is a critical concern in today's digital economy, where online transactions and the exchange of sensitive personal and financial data have become ubiquitous. The topic encompasses the evolving challenges and solutions related to protecting e-commerce platforms from cyber threats, which include phishing, malware, social engineering, and data breaches. As the e-commerce sector continues to grow rapidly, robust cybersecurity measures are paramount for safeguarding consumer trust and ensuring the integrity of online transactions. Historically, international agreements such as the North American Free Trade Agreement (NAFTA) initially overlooked the cybersecurity concerns associated with e-commerce, highlighting a significant regulatory gap. This was later addressed by comprehensive digital trade frameworks like the United States-Mexico-Canada Agreement (USMCA), which includes specific chapters on digital trade and data protection. Similarly, the Budapest Convention was pivotal in harmonizing laws and enhancing international cooperation to combat cybercrime, further underscoring the global nature of e-commerce cybersecurity[1]

[2]

. E-commerce businesses face à continuous battle against a myriad of cyber threats. Common issues include phishing attacks, malware, denial of service (DoS) attacks, and data breaches, all of which can result in severe financial losses, reputational damage, and legal consequences. The hyper-connectivity of modern technology has exacerbated these threats, necessitating advanced cybersecurity practices. Despite significant investments in security technologies, cyber actors continually evolve their methods, making cybersecurity a moving target[3]

[4]

. The importance of maintaining consumer trust in e-commerce cannot be overstated. Cybersecurity breaches can lead to a loss of consumer confidence, decreased sales, and a tarnished brand reputation. Legal mandates such as the General Data Protection Regulation (GDPR) impose stringent requirements on data protection, and non-compliance can result in severe penalties. E-commerce platforms must therefore implement comprehensive security measures, including encryption, multi-factor authentication, and regular security audits, to protect consumer data and foster a secure online environment[5]

[6]

. Prominent controversies in e-commerce cybersecurity often revolve around the balance between consumer privacy and data protection versus business interests and regulatory compliance. High-profile breaches, such as the Target data breach in 2013, have highlighted the vulnerabilities of e-commerce systems and the profound impact of cybersecurity failures on consumer trust and corporate reputation. Moving forward, the landscape of e-commerce cybersecurity will likely become even more complex, requiring ongoing vigilance, international cooperation, and substantial investment to keep pace with evolving threats[7]

[8]

.

Sources:

USMCA Chapter 19 on Digital Trade.
The Budapest Convention.
Common cybersecurity threats statistics.
E-commerce cybersecurity measures.
Impact of cybersecurity on consumer trust.
GDPR compliance requirements.
Example of high-profile data breaches.
Consumer trust statistics in e-commerce.
Historical Overview
The evolution of e-commerce has brought significant advancements and conveniences to consumers and businesses alike. However, it has also introduced a variety of cybersecurity challenges that have evolved alongside technological advancements. Initially, agreements like the North American Free Trade Agreement (NAFTA) did not address the emerging concerns of electronic commerce or cybersecurity[1]

. This gap highlighted the need for comprehensive digital trade frameworks, leading to the inclusion of Chapter 19 on Digital Trade in the United States-Mexico-Canada Agreement (USMCA). This chapter addresses issues such as the principles on access and use of the Internet for digital commerce (Article 19.10) and the protection of personal data and the cross-border flow of information by electronic means (Article 19.11)[1]

. The global nature of e-commerce has necessitated international agreements and conventions to combat cybercrime effectively. The Convention on Cybercrime, also known as the Budapest Convention, was the first international agreement aimed at reducing computer-related crime. It harmonized national laws, improved investigative techniques, and increased international cooperation to tackle cyber threats[2]

. The Additional Protocol to this Convention, established in 2003, further obligated state parties to enact laws criminalizing racist or xenophobic acts committed online[2]

. E-commerce's rapid growth has made it a prime target for cyber-attacks. Cybersecurity threats, such as information disclosure, misdirection, damage, or theft of electronic data, have plagued e-commerce since its inception. Studies indicate that significant breaches often result from weak or stolen passwords, hacking, malware, and social engineering attacks[3]

. The hyper-connectivity of modern technology has only exacerbated these threats, highlighting the importance of robust cybersecurity measures[3]

. Despite these challenges, the landscape of cybersecurity in e-commerce continues to evolve. Efforts from governments and international bodies to establish comprehensive cybersecurity frameworks and conventions have laid the groundwork for more secure digital trade practices. Additionally, the integration of threat intelligence services with essential cybersecurity tools provides a cost-effective solution for enterprises, emphasizing the critical role of cybersecurity in protecting both retailers and consumers in the digital age[4]

.

The Significance of Cybersecurity in E-Commerce
E-commerce cybersecurity is a round-the-clock practice that involves people, procedures, and technological solutions[9]

. From its inception, one of the most significant challenges e-commerce has faced is cybersecurity threats. Cybersecurity protects computer systems from information disclosure, misdirection, damage, or theft of electronic data, software, or hardware[3]

. In the context of e-commerce, cybersecurity focuses on the electronic security measures necessary for safeguarding online transactions and sensitive consumer data. Businesses in the e-commerce sector continually invest in technologies to fend off cyber threats, but cyber actors constantly evolve their methods to gain unauthorized access to business systems and data[4]

. In 2021, the most prevalent cyber threats included phishing, social engineering, credential theft, and compromised or stolen devices, accounting for 57%, 30%, and 33% of incidents, respectively[4]

. The importance of cybersecurity cannot be overstated, as a single lapse can inflict irreparable damage to a brand's reputation, particularly in the B2B sphere where breaches can cost hundreds of thousands of dollars[5]

. Implementing robust cybersecurity practices is essential not only for safeguarding data but also for maintaining consumer trust and confidence. Threat intelligence services, often bundled with essential cybersecurity tools like antivirus, email security, and cloud protection, offer a cost-effective solution for enterprises that handle vast amounts of customer data[5]

. In the rapidly expanding world of e-commerce, building and maintaining consumer trust is crucial for the success of any online platform[10]

. A lack of trust can lead to cart abandonment, decreased sales, and a tarnished brand reputation. Thus, fostering a trustworthy online environment is vital for e-commerce businesses[10]

. When trust is broken, the ripple effects are profound; consumers may take their business elsewhere, choose competitors who haven't experienced breaches, or refrain from recommending products or services[11]

. Legal and regulatory mandates, such as the General Data Protection Regulation (GDPR) and the Health Insurance Portability and Accountability Act (HIPAA), impose stringent data protection requirements on businesses. Non-compliance with these regulations can lead to severe penalties, including substantial fines and legal actions, further damaging a company's reputation and financial standing[6]

. Even the best-prepared organizations face the daunting task of navigating the legal complexities and potential public shaming that accompany cybersecurity breaches[12]

.

Common Cybersecurity Threats Targeting E-Commerce Platforms
E-commerce platforms face à multitude of cybersecurity threats, posing significant challenges to maintaining secure operations and customer trust. These threats primarily include phishing attacks, malware, and various other cybercrimes aimed at exploiting vulnerabilities within e-commerce systems.

Phishing Attacks
Phishing is one of the most prevalent and dangerous threats targeting e-commerce platforms. Phishing attacks typically involve cybercriminals mimicking messages from trusted entities, such as large companies or government bodies, to deceive users into revealing personal or financial information. These attacks often create a sense of urgency, prompting the target to click on malicious links or download harmful files [13]

. In 2023, a report by Kaspersky indicated that there were over 30 million phishing attacks within the first ten months, with 43.5% of these attacks using e-commerce platforms as lures [14]

. Various forms of phishing exist, including spear phishing, which targets specific individuals within an organization to steal login credentials. Attackers often gather detailed information about the individual before initiating the attack [15]

. Phishing can also be part of larger, more sophisticated attacks, such as advanced persistent threats (APT), which aim to infiltrate corporate or governmental networks to distribute malware or gain access to secured data [16]

.

Malware
Malware, or malicious software, is another significant threat to e-commerce platforms. Malware can infect devices, steal data, damage systems, or take control of user actions [17]

. Common types of malware include Trojan horses, adware, ransomware, and rootkits. These can scrape information from websites, alter code, gain unauthorized access, or spy on users' online activities [18]

. Cybercriminals use malware to harm or exploit e-commerce websites by various means, including scraping information, altering website code, or gaining backdoor access to systems [18]

. The rise in malware attacks can lead to severe financial losses, reputational damage, and a decline in consumer trust for the affected businesses [19]

.

Denial of Service (DoS) Attacks
Denial of Service (DoS) attacks aim to make an e-commerce service or system unavailable to its intended users by overwhelming it with a flood of illegitimate requests. These attacks can disrupt the normal functioning of e-commerce platforms, causing significant operational and financial damage [3]

.

Data Breaches
Data breaches occur when unauthorized individuals gain access to sensitive information, such as customer details and financial data. This can result in severe financial losses, legal consequences, and damage to a company’s reputation. High-profile breaches have highlighted the vulnerability of e-commerce platforms and the critical need for robust data security measures [20]

. For example, the Target data breach in 2013 impacted millions of customers by exploiting vulnerabilities in the company's e-commerce system [7]

.

Social Engineering and Other Threats
Social engineering attacks, including phishing, rely on manipulating human behavior to gain access to sensitive information. These attacks often exploit the trust and naivety of users, making them click on suspicious links or share confidential information [13]

[21]

. E-commerce platforms must be vigilant against a range of threats, including social engineering, to protect their systems and customers.

Preventative Measures
To combat these threats, e-commerce businesses must implement comprehensive cybersecurity measures. Regular malware scans, employee training on security policies, robust data encryption, and adherence to security standards like PCI DSS can help mitigate risks [22]

.

Effective Cybersecurity Solutions for E-Commerce
E-commerce cybersecurity is a continuous practice that integrates people, procedures, and technological solutions to safeguard online retail platforms against cyber threats[9]

. Cybersecurity in e-commerce is paramount due to the sensitive nature of transactions and personal data exchanged[3]

. Common cybersecurity issues include social engineering, denial of service (DoS) attacks, malware, and personal data breaches[3]

.

Essential Security Measures
Several critical measures can enhance the cybersecurity of e-commerce platforms. These include encryption, authentication, and firewalls. Encryption transforms data into an unreadable form called cipher text, making it unintelligible to unauthorized users[23]

. Authentication verifies the identity of users and may require stringent processes depending on the transactions involved[23]

. Firewalls serve as barriers that examine network traffic and block unauthorized access while allowing authorized communications[23]

.

Multi-Layered Security Controls
Implementing diverse security controls across multiple layers of an e-commerce site is a best practice. This approach ensures a robust defense mechanism against cyber threats[18]

. Secure Sockets Layer (SSL) certificates, for instance, encrypt data during transactions, protecting it from interception[24]

. Additionally, companies should seek security certifications like BBB, PCI, and Astra security seals to validate their adherence to high-security standards[25]

.

Threat Intelligence and Dedicated Security Platforms
Bundled threat intelligence services, including antivirus, email security, and cloud protection, offer a cost-effective and comprehensive solution for enterprises handling extensive customer data[4]

. Moreover, maintaining a dedicated security platform helps mitigate frequent cyber-attacks and provides ongoing protection[25]

. Regular security audits can uncover vulnerabilities, ensuring that potential threats are addressed proactively[25]

.

Importance of Security Hygiene
Basic cybersecurity hygiene is fundamental in protecting e-commerce platforms against a majority of attacks. This includes enabling multi-factor authentication (MFA), employing zero-trust principles, utilizing detection and response (XDR) systems, and applying anti-malware technologies[26]

. Regular system updates and data backups are also crucial steps in maintaining cybersecurity[25]

.

Two-Factor Authentication and Phishing Prevention
Two-factor authentication (2FA) is a highly effective method to counter phishing attacks, adding an additional verification layer during login processes[16]

. This approach requires users to provide something they know (e.g., password) and something they have (e.g., smartphone), thereby preventing unauthorized access even if credentials are compromised[16]

. Using secure devices and connections, alongside regular updates and strong password policies, further helps mitigate the risks associated with phishing and malware attacks[17]

.

Building Customer Trust
Addressing cybersecurity effectively helps in maintaining customer trust and business continuity. Displaying security credentials validated by accredited organizations demonstrates a company’s commitment to maintaining high-security standards and fosters customer confidence[27]

. By implementing comprehensive cybersecurity measures, e-commerce businesses can ensure smooth and secure shopping experiences for their customers, thereby safeguarding their reputation and financial integrity[27]

.

Consumer Perception and Trust in E-Commerce Cybersecurity
Consumer perception and trust are crucial elements in the e-commerce landscape, particularly concerning cybersecurity. One of the primary concerns for consumers shopping online is the security of their personal and financial information[5]

. The increasing prevalence of cyber threats has made consumers more discerning about where they choose to make their purchases[5]

.

Importance of Trust
Building and maintaining consumer trust in e-commerce platforms is vital for their success. Trust influences customer behavior significantly; a lack of trust can lead to cart abandonment, decreased sales, and a negative impact on a brand’s reputation[5]

. According to a report, 75% of consumers are willing to sever ties with a brand following any cybersecurity issue, and 66% of U.S. consumers would not trust a company that falls victim to a data breach with their data[8]

. Furthermore, 44% of consumers attribute cyber incidents to a company's lack of security measures[8]

.

Stratégies to Foster Trust
To instill confidence in customers, e-commerce platforms must invest in robust security measures. These include SSL encryption, secure payment gateways, and two-factor authentication to protect customer data from cyber threats and hackers[5]

. Additionally, displaying trust seals and privacy policies on the website can further boost consumer confidence[5]

. Implementing and communicating business security initiatives have become integral to maintaining consumer trust and protecting sensitive information. Transparency on security measures is essential, as cyber risks can directly affect customer relationships[27]

. Organizations must ensure that they adhere to basic security hygiene practices, such as enabling multi-factor authentication (MFA), implementing zero-trust principles, utilizing detection and response (XDR) and anti-malware technology, and consistently patching and protecting data[26]

.

Consequences of Broken Trust
A breach can have a profound and lasting impact on consumer trust. Broken trust can lead to customers being less likely to do business with the company in the future or even flocking to competitors[11]

. High-profile data breaches, such as the Target incident in 2013, highlight the devastating effects on a company’s reputation and customer trust[7]

. Following such breaches, consumers expect businesses to take on the burden of security and to safeguard their sensitive information[19]

.

Cybersecurity and Customer Relationships
Cybersecurity measures are not just about protecting data but also about maintaining and enhancing brand image and reputation[27]

. With the projected growth of e-commerce fraud, it is crucial for online businesses to continually update and improve their cybersecurity practices to keep pace with evolving threats[28]

. By prioritizing cybersecurity, e-commerce platforms can foster a trustworthy environment that reassures consumers and encourages repeat business.

Overcoming Challenges to Enhance Cybersecurity in E-Commerce
E-commerce cybersecurity is a continuous practice that involves a combination of people, procedures, and technological solutions to safeguard online businesses[9]

. As online shopping becomes more popular, the cybersecurity risks associated with e-commerce cannot be ignored and must be proactively addressed to protect sensitive customer data and maintain business reputations[29]

. The necessity of implementing cybersecurity measures has become paramount for any organization conducting business online[29]

.

Common Cyber Threats
E-commerce platforms face à variety of cyber threats, including phishing, social engineering, credential theft, and compromised or stolen devices[3]

. Cybercriminals exploit vulnerabilities in technology, hyper-connected systems, and human errors to gain unauthorized access to business systems and data[3]

. These threats require continuous investment in technologies and protocols to prevent breaches and mitigate risks.

Best Practices for Security
To effectively enhance cybersecurity in e-commerce, businesses must implement a range of common security measures. These include access management, HTTPS websites, secure third-party cloud storage, and next-gen antivirus solutions[29]

. Additionally, deploying diverse security controls across various website components ensures that the web store is more protected[18]

. This layered security approach helps in providing a seamless and secure shopping expérience for customers[18]

.

Preparedness and Response
Despite efforts to prevent cyber attacks, e-commerce businesses should be prepared for potential breaches. Having a fully realized response plan that includes identification, mitigation, and communication is essential[7]

. Adhering to legal and industry standards helps protect customer information and ensures compliance[7]

. However, these measures alone do not guarantee a secure platform, so ongoing vigilance and updates to security protocols are necessary.

Impact and Compliance
The impact of cyber breaches extends beyond financial losses; it can also tarnish a business's reputation and lead to customer mistrust[20]

. Businesses may face legal consequences and significant fines if they fail to meet cybersecurity standards[12]

. Regulations such as GDPR have been introduced to protect consumer data and ensure businesses adhere to stringent data protection guidelines[30]

. Compliance with these regulations is critical for maintaining customer trust and avoiding punitive actions.

Importance of Investment
Investing in cybersecurity is as crucial as investing in marketing or web design for e-commerce platforms[24]

. A single critical failure in security can lead to substantial business losses[24]

. Therefore, a proactive approach to cybersecurity, including continuous monitoring and upgrading of security measures, is essential to protect against evolving cyber threats and ensure the longevity and success of e-commerce businesses[7]

[31]

.

The Future Landscape of Cybersecurity in E-Commerce
The future landscape of cybersecurity in e-commerce is expected to become increasingly complex and dynamic, reflecting the continuous evolution of cyber threats and the corresponding technological advancements aimed at combating them. Cybersecurity in e-commerce is a round-the-clock practice that involves people, procedures, and technological solutions[9]

. As cybersecurity is often described as a cat-and-mouse game, hackers continually identify potential vulnerabilities while software engineers strive to resolve them[9]
Emerging Cybersecurity Threats
One of the significant challenges that e-commerce has faced from its inception is cybersecurity threats, which include social engineering, denial of service attacks, malware, and personal data breaches[3]

. Among these, phishing, a form of social engineering, remains a prevalent method by which attackers deceive individuals into divulging confidential information such as bank account details or social security numbers[7]

. Brute force attacks, where hackers attempt to guess login passwords by systematically trying every possible combination, also pose a substantial threat to e-commerce platforms[7]
Advanced Defensive Measures
To address these evolving threats, the integration of advanced defensive measures is crucial. Cybersecurity solutions often come bundled with essential tools such as antivirus, email security, and cloud protection, providing a cost-effective, comprehensive solution for enterprises[4]

. Additionally, the adoption of the "Defence in Depth" strategy, which involves layering multiple security measures, is increasingly recognized as an effective way to minimize both the impact and likelihood of cybersecurity breaches[32]
Best Practices for E-Commerce Security
E-commerce businesses must adopt stringent security practices to protect their platforms and customer data. Regular malware scanning, use of strong and unique passwords, frequent software updates, and enabling two-factor or multi-factor authentication are some of the best practices recommended to safeguard e-commerce platforms[20]

[17]

. Furthermore, addressing internal threats through employee training and awareness programs can prevent security breaches caused by human negligence[7]

.

International Collaboration and Investment
The future of cybersecurity in e-commerce will also be shaped by international cooperation and capacity development. Agreements focusing on international collaboration, like those mentioned in trade agreements, emphasize the need for joint efforts to enhance cybersecurity measures globally[1]

. Significant investment in cybersecurity is essential to keep up with the rapidly evolving threat landscape, ensuring that e-commerce businesses remain resilient against cyber attacks[33]

.

Feedback
Thank you for trying our research preview, STORM! We would love to get your feedback to continue improving.

Here are four short questions (take less than 3 minutes) we would like to ask you. Your responses are invaluable to us!

1. How would you rate the generated article?
2. What are the strengths (e.g. comprehensive outline, accurate information, etc.) and limitations (e.g. improper handling of time-sensitive information, associating unrelated sources, etc.) you see in this article produced by STORM?

Type your answer here
3. STORM organizes the information using a hierarchical outline (check out the "Table of contents" panel on the left!). Is there any additional content you expected to be included? You can briefly describe it or share any follow-up questions you have about the topic.

Type your answer here
4. Anything else you would like to share?

Type your answer here

📘 Table of Contents

/article/perception-of-cybersecurity-in-e-commerce-12106
