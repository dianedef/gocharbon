---
section: apps
metadataEnrichedAt: null
tags:
- Outils
imageNameKey: perplexica
u_externe: null
title: Ces Clones De Perplexity Sont Nouveaux, Gratuits & Open Source Avec Des Résultats
  Incroyables !
author: Diane
description: 'Découvre Ces Clones De Perplexity Sont Nouveaux, Gratuits & Open Source
  Avec Des Résultats Incroyables ! : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

[ItzCrazyKns/Perplexica: Perplexica is an AI-powered search engine. It is an Open source alternative to Perplexity AI](https://github.com/ItzCrazyKns/Perplexica)

# Contenu

	Perplexica est une alternative open-source à Perplexity AI, offrant un moteur de recherche basé sur l'IA qui assure la confidentialité de l'utilisateur tout en fournissant des résultats à jour et pertinents.
	
	Emploie SearxNG pour garantir que les informations restent actuelles sans compromettre la confidentialité.
	Propose deux modes principaux : Mode Copilote (en développement) et Mode Normal.
	Comprend plusieurs modes focaux, adaptés à des types de recherche spécifiques : écriture, académique, YouTube, calculs via Wolfram Alpha, et discussion sur Reddit.
	Offre une API pour des intégrations tierces.
	Installation recommandée via Docker, mais disponibles aussi les options sans Docker.
	Propose des fonctionnalités comme la recherche d'image et de vidéo, avec des développements futurs annoncés.
	Encourage contributions et support à travers GitHub et Discord.

Perplexity.ai est un moteur de recherche utilisant l'intelligence artificielle, dont beaucoup défendent la [supériorité face aux autres assistante IA](https://www.youtube.com/watch?v=M4R7IjUounI). 
	 Avant Bing Chat et la "navigation" de GPT-4, c'était vraiment le seul modèle qui intégrait la recherche sur le Web et la citation de sources que je considère comme cruciales pour un travail crédible et un crédit accordé là où le crédit est dû

## Pourquoi Voudrais-je Utiliser Ceci et Non Perplexity ?

Seulement voilà, elle a des inconvénients : 
* la version pro coûte un peu bonbon, et c'est toujours sympa de payer moins… Alors aujourd'hui on teste son clone open source, Perplexica.
Bien que j’aie abordé des solutions alternatives dans mes vidéos précédentes, Perplexity ne vaut pas les 20 $ par mois en raison de sa faible valeur.  
	**Préoccupations de confidentialité** : L'utilisation d'une plateforme d'IA basée sur le cloud soulève des inquiétudes potentielles concernant la confidentialité et la sécurité des données des utilisateurs[](https://www.funfun.tools/fr/comparer/ora-ai-vs-perplexity-ai)[](https://www.allaboutai.com/fr-fr/examens-de-l-ia/perplexity-ai/).
	**Coûts d'abonnement** : Bien qu'il existe une version gratuite, l'accès aux fonctionnalités avancées peut nécessiter un abonnement payant[](https://www.funfun.tools/fr/comparer/ora-ai-vs-perplexity-ai).
	**Personnalisation limitée** : Comparé à certains outils payants, Perplexity AI offre moins d'options de personnalisation
	**Résultats orientés** : OpenAi offre à ses partenaires un placement prioritaire et une "expression plus riche de la marque" dans les conversations de chat, et leur contenu bénéficie d'un traitement des liens plus proéminent.

Le plan à long terme, qu'OpenAI vend aux grands médias : Récemment, un document a fuité, révélant la [stratégie d'OpenAI pour séduire les éditeurs](https://www.adweek.com/media/openai-preferred-publisher-program-deck/) avec son Preferred Publisher Program. Ce programme propose des partenariats de licence avantageux pour les médias. Depuis juillet 2023, OpenAI a déjà signé des accords avec des mastodontes comme l'Associated Press, Axel Springer, The Financial Times, Le Monde, Prisa et Dotdash Meredith. Bien que les détails spécifiques de ces deals restent confidentiels, l'initiative montre bien qu'OpenAI sait comment établir des relations solides avec des publications de renom.

L'avenir des médias où l'IA et l'édition marchent main dans la main. Si tu n'aimes pas l'idée de te faire manipuler par le plus offrant, tu peux essayer des alternatives moins discriminatoires, comme ce projet.

Malgré ces inconvénients, Perplexity AI reste un outil puissant et utile pour de nombreux cas d'utilisation, offrant des capacités avancées de traitement du langage naturel et une interface conviviale[](https://www.funfun.tools/fr/comparer/ora-ai-vs-perplexity-ai).

Ispiré par Perplexity AI, **Perplexica** est un outil de recherche open-source alimenté par l'IA qui utilise des algorithmes avancés de machine learning pour optimiser les résultats de recherche.

Le propre de Perplexica c'est de fonctionner localement, on va devoir l'installer sur notre propre ordinateur, et c'est ça qui fait que l'on aura pas à payer d'abonnement, puisque le logiciel tournera avec les ressources de notre machine, et non pas d'un cloud tiers.

Dans cette section, l'auteur explique comment installer Perplexica sur un serveur ou un ordinateur en utilisant Docker.

* Instructions pour cloner le dépôt GitHub de Perplexica.
* Copier et configurer le fichier de configuration (config.tomel).
* Commandes Docker pour lancer l'installation et le lancement de Perplexica.

## ⚙️ Configuration et Utilisation de Perplexica

Pour installer Perplexica la façon la plus facile et de passer par Docker, que tu doies [d'abord installer.](https://docs.docker.com/desktop/install/windows-install/)

Ensuite on va devoir clôner le dépôt GitHub du projet, suis par exemple ces commandes à partir de la console Windows pour aller dans le dossier 'Documents', créer un dossier 'perplexica', t'y placer et clôner les sources du projet :

```
C:\Users\Shadow>cd Documents

C:\Users\Shadow\Documents>mkdir perplexica

C:\Users\Shadow\Documents>cd perplexica

C:\Users\Shadow\Documents\perplexica>git clone https://github.com/ItzCrazyKns/Perplexica.git

C:\Users\Shadow\Documents\perplexica>cd perplexica
```

(tu dois avoir installé Git CMD pour que l'import GitHub via console fonctionne !).

Le dernier `cd Perplexica` nous place dans le dossier nouvellement importé.
# Perplexica - Le moteur de recherche open source propulsé à l'IA

Le 1 août 2024par Korben -

1. [Developpement](https://korben.info/categories/developpement/ "Voir tous les articles de la catégorie Developpement")
2. [Open-Source](https://korben.info/categories/developpement/open-source/ "Voir tous les articles de la sous-catégorie Open-Source")

**[Perplexica](https://github.com/ItzCrazyKns/Perplexica/tree/master)** est un moteur de recherche gratuit et transparent, qui comprend ce que vous lui demandez et qui vous trouve pile poil ce que vous cherchez, le tout boosté à l’intelligence artificielle dernière génération. Ça vous parle, non ?

Ah bah oui c’est comme [Perplexity.ai](https://www.perplexity.ai/) sauf que c’est gratuit, open source et que ça vous permet de **fouiller le web en profondeur** pour dénicher les réponses à toutes vos questions. Pour cela, l’outil utilise des algorithmes d’apprentissage automatique basés notamment sur la recherche par **similarité sémantique**. En gros, il est capable de piger le sens de votre question et de trouver les sources les plus pertinentes.

Comme ça, vous obtenez des **réponses claires et sourcées**, servies sur un plateau d’argent sans avoir besoin de passer des heures à éplucher les pages de résultats pour trouver l’info qui vous intéresse.


Pas de cookies qui vous espionnent ni de revente de données personnelles en douce et vos recherches restent confidentielles. Côté fonctionnalités, Perplexica propose plusieurs modes de recherche bien pratiques :

- Le mode **Copilot** (encore en développement) : il génère des requêtes pour trouver les sources Internet les plus pertinentes. Plutôt que d’utiliser uniquement le contexte fourni par SearXNG, il visite directement les meilleurs résultats pour trouver les sources les plus adaptées à votre question.
- Le mode **Normal** : il traite votre requête et effectue une recherche web classique.
- Les **Focus Modes** : des modes spécialisés pour répondre à des besoins spécifiques, comme la recherche académique, la recherche YouTube, les calculs via Wolfram Alpha ou encore la recherche Reddit pour les discussions et avis.

Et niveau technique, il utilise un meta-moteur de recherche bien fichu qui s’appelle **SearXNG**. C’est lui qui récupère les résultats, les trie, les recoupe, pour ne garder que la crème de la crème. L’avantage, c’est que vous avez toujours des infos à jour, sans latence. Et comme je le disais en intro, il s’appuie aussi sur des **modèles de langage locaux** comme Llama3 et Mixtral, via l’API Ollama ce qui lui permet d’affiner encore plus les résultats.

Et pour l’installer, c’est super simple :

1. Clonez le dépôt GitHub de [Perplexica](https://github.com/ItzCrazyKns/Perplexica) : `git clone [https://github.com/ItzCrazyKns/Perplexica.git](https://github.com/ItzCrazyKns/Perplexica.git)`
2. Renommez le fichier `sample.config.toml` en `config.toml` et remplissez les champs nécessaires (clé API, etc.)
3. Lancez la commande `docker compose up -d`
4. Attendez quelques minutes que l’installation se termine
5. Accédez à Perplexica via `http://localhost:31337` depuis votre navigateur

Une fois que c’est en place, vous pouvez même **utiliser Perplexica comme moteur de recherche par défaut** dans votre navigateur. Il suffit d’aller dans les paramètres, d’ajouter un nouveau moteur de recherche avec l’URL `http://localhost:31337/?q=%s` et le tour est joué !
## Poursuivre : [Perplexica - Le clone auto hébergeable de Perplexity.ai - YouTube](https://youtu.be/3LpX8zdhJTI?t=242)

et l'utiliser pour effectuer des recherches, y compris des recherches avancées utilisant des fonctionnalités comme le mode copilote.

* Paramétrage des clés API et configuration des préférences utilisateur.
* Utilisation des fonctionnalités de recherche, y compris le mode copilote pour améliorer la recherche.
* Analyse des résultats et comparaisons avec d'autres moteurs de recherche.

## 📚 Focus et Fonctionnalités Supplémentaires

L'auteur explore les différentes options de recherche et fonctionnalités supplémentaires disponibles dans Perplexica, y compris les limitations et les fonctions encore en développement.

* Options de recherche avancée, y compris Wolfram Alpha et Reddit.
* Impact de la décentralisation sur la rapidité et la précision de recherche.
* Aperçu des fonctionnalités à venir et des efforts de développement continu.

## Sous le Capôt

L'architecture de Perplexica se compose des éléments clés suivants :

1. **Interface utilisateur** : Une interface basée sur le Web qui permet aux utilisateurs d'interagir avec Perplexica pour rechercher des images, des vidéos et bien plus encore.
2. **Agent/Chaînes** : Ces composants prédisent les prochaines actions de Perplexica, comprennent les requêtes des utilisateurs et décident si une recherche sur le Web est nécessaire.
3. **SearXNG** : Un moteur de recherche de métadonnées utilisé par Perplexica pour rechercher des sources sur le web.
4. **LLMs (Large Language Models)** : Utilisés par les agents et les chaînes pour des tâches telles que la compréhension du contenu, la rédaction de réponses et la citation de sources. Les exemples incluent Claude, GPT, etc.
5. **Modèles d'intégration** : Pour améliorer la précision des résultats de recherche, les modèles d'intégration reclassent les résultats à l'aide d'algorithmes de recherche de similarité tels que la similarité de cosinus et la distance de produit de point

## How Does Perplexica Work?

Tu es curieux de savoir comment fonctionne Perplexica ? Ne t'inquiète pas, nous allons en parler ici. Avant de commencer, assure-toi d'avoir lu l'architecture de Perplexica pour être sûr de comprendre de quoi elle est composée. Tu ne l'as pas lu ? Tu peux le lire [ici](https://github.com/ItzCrazyKns/Perplexica/tree/master/docs/architecture/README.md).

Nous allons comprendre comment fonctionne Perplexica en prenant l'exemple d'un scénario dans lequel un utilisateur demande : "Comment fonctionne un A.C. ?". Nous allons décomposer le processus en étapes pour le rendre plus facile à comprendre. Les étapes sont les suivantes :

1. Le message est envoyé via WS au serveur dorsal où il invoque la chaîne. La chaîne dépendra de ton mode de focalisation. Pour cet exemple, supposons que nous utilisons le mode de focalisation "webSearch".
2. La chaîne est maintenant invoquée ; tout d'abord, le message est transmis à une autre chaîne qui prédit (à l'aide de l'historique du chat et de la question) s'il est nécessaire de trouver des sources et de faire des recherches sur le Web. Si c'est le cas, elle génère une requête (conformément à l'historique du chat) pour la recherche sur le Web que nous reprendrons plus tard. Si ce n'est pas le cas, la chaîne s'arrêtera là, puis la chaîne du générateur de réponses, également appelée générateur de réponses, sera lancée.
3. La requête renvoyée par la première chaîne est transmise à SearXNG pour rechercher des informations sur le web.
4. Une fois les informations récupérées, elles sont basées sur une recherche par mots-clés. Nous convertissons ensuite les informations en embeddings et la requête également, puis nous effectuons une recherche de similarité pour trouver les sources les plus pertinentes pour répondre à la requête.
5. Une fois que tout cela est fait, les sources sont transmises au générateur de réponses. Cette chaîne prend tout l'historique du chat, la requête et les sources. Elle génère une réponse qui est transmise à l'interface utilisateur.

### Comment les Réponses Sont-elles Citées ?

Les LLM sont invités à le faire. Nous les avons si bien incités qu'ils citent eux-mêmes les réponses, et en utilisant un peu de magie de l'interface utilisateur, nous l'affichons à l'utilisateur.

### Recherche D'images et de Vidéos

Les recherches d'images et de vidéos sont effectuées de la même manière. Une requête est toujours générée en premier, puis nous recherchons sur le Web les images et les vidéos qui correspondent à la requête. Ces résultats sont ensuite renvoyés à l'utilisateur.

##

Le moteur de recherche alimenté par l'IA peut se balader au plus profond d'Internet pour trouver des réponses à tes questions grâce à SearxNG. C'est un moteur de recherche p2p qui ne repose pas sur un serveur, il est décentralisé : tout le monde peut l'installer, et devenir un serveur pour les autres utilisateurs.

Cela lui permet de rester à jour et garantir que tu obtiennes toujours les informations les plus récentes.

Pour regrouper l'information qui extrait du web il utilise des algorithmes avancés d'apprentissage automatique comme la recherche par similarité et les enchâssements pour affiner les résultats et fournit des réponses claires avec les sources citées.

Une fois la recherche sur le web effectuée il faut la comprendre et répondre aux questions.

C'est là que les LLMs entrent en jeu, et les modèles d'embedding

## Conclusion

**Incohérences occasionnelles** : L'IA peut parfois fournir des réponses incohérentes ou trop courtes[](https://www.reddit.com/r/MachineLearning/comments/13jrwe0/perplexity_ai_strengths_limitations_discussion/?tl=fr).
**Limitations pour les sciences complexes** : En dehors des mathématiques, Perplexity AI peut avoir du mal avec des sujets scientifiques très complexes qui ne sont pas explicitement indiqués dans les résultats de recherche[](https://www.reddit.com/r/MachineLearning/comments/13jrwe0/perplexity_ai_strengths_limitations_discussion/?tl=fr).
**Mélange de sources** : L'IA peut combiner des informations provenant de différentes sources, ce qui peut créer de la confusion[](https://www.reddit.com/r/MachineLearning/comments/13jrwe0/perplexity_ai_strengths_limitations_discussion/?tl=fr).
**Biais potentiel** : Comme tout système d'IA, Perplexity AI peut présenter des biais en fonction des données utilisées pour l'entraîner[](https://www.funfun.tools/fr/comparer/ora-ai-vs-perplexity-ai).

# Ressources

## Using as a Search Engine

If you wish to use Perplexica as an alternative to traditional search engines like Google or Bing, or if you want to add a shortcut for quick access from your browser's search bar, follow these steps:

1. Open your browser's settings.
2. Navigate to the 'Search Engines' section.
3. Add a new site search with the following URL: `http://localhost:3000/?q=%s`. Replace `localhost` with your IP address or domain name, and `3000` with the port number if Perplexica is not hosted locally.
4. Click the add button. Now, you can use Perplexica directly from your browser's search bar.

## Using Perplexica's API

Perplexica also provides an API for developers looking to integrate its powerful search engine into their own applications. You can run searches, use multiple models and get answers to your queries.

For more details, check out the full documentation [here](https://github.com/ItzCrazyKns/Perplexica/tree/master/docs/API/SEARCH.md).

## Upcoming Features

- [x] Add settings page
- [x] Adding support for local LLMs
- [x] History Saving features
- [x] Introducing various Focus Modes
- [x] Adding API support
- [ ] Finalizing Copilot Mode
- [ ] Adding Discover

## Features

[](https://github.com/ItzCrazyKns/Perplexica#features)

* **Local LLMs** : Tu peux utiliser des LLM locaux tels que Llama3 et Mixtral en utilisant Ollama.
* **Deux modes principaux :**
	* Mode Copilote:** (En cours de développement) Booste la recherche en générant différentes requêtes pour trouver des sources Internet plus pertinentes. Comme pour une recherche normale, au lieu d'utiliser le contexte de SearxNG, il visite les meilleurs résultats et essaie de trouver des sources pertinentes pour la requête de l'utilisateur directement à partir de la page.
	* Mode normal:** Traite ta requête et effectue une recherche sur Internet.
* Modes spéciaux:** Modes spéciaux pour mieux répondre à des types de questions spécifiques. Perplexica dispose actuellement de 6 modes de focalisation :
	* **Mode Tout:** Effectue une recherche sur l'ensemble du Web pour trouver les meilleurs résultats.
	* Mode Assistant de rédaction:** Utile pour les tâches de rédaction qui ne nécessitent pas de recherche sur le Web.
	* **Mode de recherche académique:** Trouve des articles et des documents, idéal pour les recherches académiques.
	* Mode de recherche YouTube:** Trouve des vidéos YouTube en fonction de la requête de recherche.
	* Mode de recherche Wolfram Alpha:** Répond aux requêtes qui nécessitent des calculs ou des analyses de données à l'aide de Wolfram Alpha.
	* Mode de recherche Reddit:** Recherche sur Reddit des discussions et des opinions en rapport avec la requête.
* **Informations actuelles:** Certains outils de recherche peuvent te donner des informations obsolètes parce qu'ils utilisent des données provenant de robots d'exploration et les convertissent en embeddings et les stockent dans un index. Contrairement à eux, Perplexica utilise SearxNG, un métamoteur de recherche pour obtenir les résultats, les classer et en extraire la source la plus pertinente, ce qui te permet de toujours obtenir les informations les plus récentes sans les frais généraux liés à la mise à jour quotidienne des données.
* **API** : Intègre Perplexica dans tes applications existantes et utilise ses capacités.

### Avantages

* Source ouverte et privée
* Assure la protection de ta vie privée en étant entièrement open-source et en ne traçant pas l'historique de tes recherches.
* Capacités de recherche avancées
* Utilise des techniques d'IA sophistiquées telles que la recherche par similarité et les embeddings pour améliorer la précision et la pertinence des résultats de recherche.
* Informations en temps réel
* S'appuie sur SearxNG pour offrir les informations les plus récentes en reclassant les sources pour garantir la pertinence et l'actualité sans avoir besoin de mises à jour fréquentes.

### Caractéristiques

* Intégration des LLM locaux
* Prend en charge l'intégration des LLM locaux tels que Llama3 et Mixtral par l'intermédiaire d'Ollama, améliorant ainsi les capacités de recherche.
* Mode copilote
* Améliore l'efficacité de la recherche en générant diverses requêtes pour localiser des sources Internet plus pertinentes, en tirant activement les données des meilleures correspondances.
* Mode normal
* Traite les requêtes à l'aide d'une méthodologie de recherche traditionnelle sur le Web, ce qui garantit des résultats de recherche complets.
* Modes spécialisés
* Offre des modes spécialisés pour différents besoins, y compris les recherches générales sur le Web, les recherches universitaires, YouTube, les calculs Wolfram Alpha et les discussions sur Reddit.
* Informations actualisées
* Utilise une approche de métamoteur de recherche avec SearxNG pour extraire directement les résultats les plus récents, en évitant les informations périmées que l'on trouve souvent dans les moteurs de recherche traditionnels.

## Alternative

[LLocalSearch i.](https://github.com/nilsherzig/LLocalSearch)

est un agrégateur de recherche fonctionnant entièrement localement et utilisant des agents LLM. L'utilisateur peut poser une question et le système utilisera une chaîne d'agents LLM pour trouver la réponse. L'utilisateur peut voir la progression des agents et la réponse finale. Aucune clé OpenAI ou Google API n'est nécessaire
* 📚 Projet open-source : LlocalSearch permet de créer un clone local de Perplexity, un outil de recherche révolutionnaire basé sur des LLMs.
* 🚀 Tech innovante : Le projet utilise principalement le langage de programmation Go et fonctionne sans clé API d'OpenAI ou d'autres services.
* 🔗 Fonctionnement hybride : L'application cherche à la fois des informations locales et sur Internet, en les augmentant ensuite avec un LLM pour fournir des réponses.
* 🔧 Prérequis techniques : Pour faire fonctionner LlocalSearch, il faut deux modèles (Hermis 2 et all Mini LM), olLAMA, Docker, et cloner le dépôt GitHub du projet.
* 🛠️ Mise en œuvre : Après avoir téléchargé les modèles et configuré Docker, une simple commande 'Docker compose up' permet de lancer le clone local.
* ⭐ Soutien communautaire : Le projet est sous licence Apache 2.0, encourageant les utilisateurs à contribuer ou soutenir financièrement le développeur.
* 🌐 Capacité internet : Le modèle peut interroger internet pour obtenir des informations récentes, exemple donné avec des résultats de matchs de cricket.


### LM Studio

## Morphic
only support openAi API when installed locally

Morphic, une nouvelle alternative open source à Perplexity.  

🌟 Introduction à Morphic : Josh présente Morphic, une alternative open-source et gratuite à Perplexity, qui peut être hébergée sur le cloud ou localement sur un ordinateur.
🔄 Options de modèle : Morphic permet l'utilisation de divers modèles AI, comme GPT, Claude, Anthropic, et Llama, offrant une flexibilité d'utilisation.
🌐 Fonctionnalités de Morphic : L'outil propose des fonctionnalités telles que la recherche générative, l'historique des recherches, des résultats de recherche partageables, et l'intégration de API de recherche externes.
⚙️ Configuration de l'hébergement local : Josh explique comment configurer Morphic en auto-hébergement, y compris les étapes pour installer `bun`, configurer la base de données Upstash Redis, et obtenir les clés API nécessaires.
📊 Comparaison avec Perplexity : Morphic et Perplexity ont des interfaces similaires, mais avec certaines différences notables dans les fonctionnalités et les options de modèle.
🛠 Utilisation de Tavily et Upstash : Morphic utilise Tavily pour la recherche orientée IA et Upstash pour la gestion des bases de données, offrant une structure technique robuste.
🔄 Flexibilité open-source : L'auto-hébergement de Morphic offre une solution open-source flexible et potentiellement gratuite pour ceux qui souhaitent éviter des frais mensuels.
Avec l'émergence de plusieurs modèles open source, vous pouvez maintenant créer votre propre clone de Perplexity, bien que cela nécessite un bon GPU et des clés API pour être efficace. La mise en place locale nécessite un bon matériel informatique,
Morphic est une alternative, même si elle a quelques limitations comme le support uniquement de l’API Open AI. Il s'agit néanmoins d'une excellente option par rapport aux autres alternatives que j'ai testées.  
### Utilisation de Morphic sans Configuration Locale
Vous pouvez utiliser Morphic via leur site Web gratuitement sans configuration, simplifiant ainsi le processus pour ceux qui ne souhaitent pas s'engager dans une configuration locale.  

### Installation Locale de Morphic
Pour une installation locale avec une clé API Open AI, clonez le dépôt GitHub de Morphic et suivez le guide rapide fourni dans le dépôt. Il est conseillé d’avoir Bun installé pour les dépendances.  

### Configuration et Utilisation Finales
Configurez le fichier EnV local avec vos clés API, choisissez éventuellement un modèle différent pour réduire les coûts, et lancez l'application sur le port 3000 pour l'utiliser librement via votre navigateur.  

### Conclusion
Morphic se révèle être une alternative viable et gratuite à Perplexity, épargnant ainsi les coûts mensuels. Essayez Morphic et partagez votre avis dans les commentaires.

  **Présentation de Morphic** : Morphic est une alternative open source qui peut être installée localement. Cependant, elle présente des limitations, notamment la nécessité d'utiliser l'API d'OpenAI et l'impossibilité d'utiliser Ama ou Gro sans configuration spécifique.
  **Avantages de Morphic** : Pour ceux qui peuvent utiliser une API d’OpenAI, Morphic est présenté comme supérieur aux autres alternatives de Perplexity testées par l'auteur. De plus, il offre une utilisation gratuite via leur site sans avoir besoin de clés API personnelles.
  **Fonctionnalités de Morphic** : Sur le site de Morphic, l'utilisateur peut sélectionner parmi différents modèles selon ses besoins en termes de vitesse et de qualité de réponse, comme le GP4 turbo pour la rapidité ou le GPT 4 pour la qualité.

## Mise en place locale de Morphic

**Guide d'installation** : L'auteur propose un guide détaillé pour installer Morphic localement, utilisant son propre API d'OpenAI. Il décrit étape par étape comment cloner le dépôt GitHub, installer les dépendances nécessaires, et configurer les fichiers pour le lancement du service.
  
**Recommandation** : L'auteur encourage vivement l'utilisation de cette solution gratuite et open source par rapport à Perplexity, soulignant que le fait de payer pour Perplexity n'est pas nécessairement justifié.


L'auteur conclut en encourageant les spectateurs à essayer Morphic et à abandonner Perplexity, invitant à partager leurs expériences dans les commentaires de la vidéo. Il termine par une invitation à s'abonner à sa chaîne pour plus de contenu.