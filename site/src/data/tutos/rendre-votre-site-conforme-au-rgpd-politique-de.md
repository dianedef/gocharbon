---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Rendre Votre Site Conforme Au Rgpd Politique De Cookie
author: Diane
description: 'Découvre Rendre Votre Site Conforme Au Rgpd Politique De Cookie : outil
  français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

[https://www.axeptio.eu/en/home](https://www.axeptio.eu/en/home)

- axeptio
    
    # Conformité rgpd : utilisation d’Axeptio
    
    Êtes-vous basé dans l’UE ou servez-vous des clients dans l’UE? Cet article explique comment rendre votre site Web conforme au RGPD avec Funnelll et Axeptio
    
    Écrit par Sherif AliMis à jour il y a plus d’une semaine
    
    ### **Qu’est-ce qu’Axeptio et quand devriez-vous l’utiliser?**
    
    Si votre site Web sert des clients de l’UE, vous devez utiliser Axeptio pour recueillir le consentement du client avant d’ajouter un logiciel de suivi ou d’analyse sur votre site Web afin de garantir la conformité au RGPD.
    
    Axeptio simplifie la collecte des consentements sur votre site Web. Lorsque vous utilisez Axeptio sur un site Web qui exécute Funnelll, Funnelll détecte automatiquement les consentements fournis par vos clients et s’assure que seuls les services consentis sont ajoutés à votre site Web.
    
    _Vous pouvez en savoir plus sur le RGPD et la prise en compte de la conformité sur notre [article de blog ici](https://blog.funnelll.com/2022/02/gdpr-compliance-what-you-need-to-know.html)_
    
    ### **Pour quels services dois-je recueillir mon consentement?**
    
    Tout logiciel de suivi ou d’analyse, comme Funnelll, Google Analytics, Facebook Pixel, etc. nécessite que vous recueilliez votre consentement.
    
    ### **Attends un peu! Nous avons donc besoin d’un consentement pour Funnelll lui-même?**
    
    Oui et non. Funnelll peut être considéré comme deux parties; un gestionnaire de balises - qui ne nécessite pas de consentement, et une solution de suivi/analyse - qui nécessite le consentement
    
    Lorsque vous installez Axeptio, Funnelll détecte les consentements fournis par vos clients. Si le client consent à Funnelll, la partie suivi de Funnelll est également ajoutée à votre site Web (ce qui permet des fonctionnalités telles que le suivi automatique inter-domaines, la gestion iOS14, etc.)
    
    Si Funnelll n’est pas consenti par le client, seule la partie gestion des balises sera ajoutée à votre site Web et Funnelll procédera à l’ajout du code de suivi pour les services que vous avez activés à partir de notre catalogue **Applications et intégrations** comme Google Analytics et Facebook Pixel, à condition qu’ils soient consentis par le client.
    
    ### **À quoi dois-je recueillir mon consentement?**
    
    Ça dépend...
    
    Si vous utilisez l’option de **suivi backend** de Funnelll, qui ne nécessite pas l’ajout de Google Analytics, de code Pixel, etc. sur votre site Web, il vous suffit d’ajouter Funnelll à Axeptio et de recueillir votre consentement. Si le client ne donne pas son consentement à Funnelll, aucun des codes de suivi ne sera ajouté à votre site Web.
    
    Si vous utilisez Funnelll avec un suivi frontal, où Funnelll injecte du code Google Analytics, Facebook Pixel, etc., vous devrez ajouter une option de consentement à Axeptio pour **chaque** intégration que vous ajoutez dans Funnelll, par exemple Google Analytics ou Facebook Pixel, en plus de Funnelll lui-même.
    
    _Veuillez noter que si le client décide, plus tard, de supprimer l’un de ses consentements précédemment donnés, par exemple si le consentement a été donné à Google Analytics mais a ensuite été révoqué en aval, Google Analytics sera supprimé lorsque le client actualisera la page. Les cookies utilisés par Analytics ne seront supprimés que si le client efface explicitement son cache._
    
    ### **Création d’un compte Axeptio**
    
    Axeptio propose un niveau gratuit qui vous permet de recueillir le consentement pour 2 services. Leurs forfaits payants commencent à 15 **€** par domaine et par mois, en fonction du nombre de services / fournisseurs gérés et de la quantité de trafic que vous servez.
    
    1. Sur la [page d’accueil d’Axeptio](https://www.axeptio.eu/en/home), cliquez sur Se connecter ou essayez gratuitement de créer un compte
    
    
    
    2. Cliquez sur **Créer un nouveau projet** pour créer un profil pour votre site Web ou sélectionnez votre site existant dans l’écran projets
    
    
    
    3. Parcourez l’assistant. À **l’étape Intégration**, copiez le code fourni et ajoutez-le à votre site Web dans la section **<head>** (option préférée) ou avant la fermeture de la balise **<body>**
    
    
    
    Une fois que le code Axeptio est ajouté sur votre site Web qui exécute Funnelll, Funneill cessera d’injecter du code de suivi pour les intégrations, par exemple Google Analytics, Facebook Pixel, jusqu’à ce que le client y consente.
    
    Ensuite, nous ajouterons les services à consentir à Axeptio
    
    4. Dans votre projet, sélectionnez **Cooke Management Platform**
    
    
    
    5. Créer une configuration
    
    
    
    **L’écran de** bienvenue est utilisé pour définir les messages que vos clients voient sur la fenêtre contextuelle de consentement sur votre site Web. La section **Voici nos cookies** est utilisée pour ajouter les services/fournisseurs pour lesquels vous souhaitez collecter le consentement aux cookies
    
    ### **Ajout de Funnelll à l’écran de consentement Axeptio**
    
    1. Cliquez **ici sont nos cookies**
    
    
    
    2. Cliquez sur **Ajouter un nouveau cookie**
    
    _**Remarque importante :** Facebook Pixel et Google Analytics sont pré-ajoutés. Il est conseillé de conserver ces configurations telles quelles. Si vous décidez de modifier les détails pour Facebook Pixel ou Google Analytics, assurez-vous de laisser le champ **Nom** avec les valeurs par défaut, par exemple google_analytics ou facebook_pixel (en minuscules)_
    
    3. Cliquez sur **Créer un service**
    
    
    
    4. Ajoutez les détails suivants
    
    - **Titre:** Entonnoirll
    - **Nom:** funnelll (**important:** assurez-vous d’ajouter ce champ tel quel en minuscules)
    - **Brève description:** Nous permet d’analyser les statistiques de votre parcours sur notre site Web et comment l’améliorer
    - **Description longue :** Nous permet d’analyser les statistiques de votre parcours sur notre site Web, d’apprendre comment améliorer votre expérience et de savoir quelles publicités et quel contenu créer pour vous offrir la meilleure expérience sur notre site Web
    - **Nom de domaine:** [](https://www.funnelll.com/)[https://www.funnelll.com](https://www.funnelll.com)
    - **Catégorie:** Marketing
    - **URL de la politique de confidentialité:** [https://www.funnelll.com/privacy.html](https://www.funnelll.com/privacy.html)
    
    
    
    5. Cliquez sur **Confirmer**
        
    6. Cliquez sur le bouton **Publier** en haut à droite de votre page
        
    
    
    
    Voilà! Votre site Web est désormais conforme au RGPD du point de vue de la gestion du consentement aux cookies
    

cookies

[Les murs porteurs ...](https://www.axeptio.eu/post/les-murs-porteurs)

**»**

Dit autrement :  l’internaute est-il en droit de ne pas répondre à la sempiternelle question **« acceptez-vous nos cookies ? » ? Devoir choisir entre « j’accepte » et « je refuse » est-ce toujours bénéficier de la notion de consentement libre imposé par le RGPD ?**

Soyons francs, la question est loin d’être simple en réalité et ne pourra être tranchée que par la succession des contentieux qui seront éventuellement tranchés par les juridictions nationales et européennes… On attend le positionnement d’une jurisprudence durable. C’est d’ailleurs son rôle : affiner l’analyse juridique des articles des textes existants.

> Le futur règlement EPrivacy apportera-t-il une réponse plus évidente ? Difficile à dire tant que le texte définitif n’est pas voté.

Mais on peut quand même en douter tant les références à la notion de consentement présente dans le RGPD sont nombreuses. Et elles sont reprises dans le projet de rédaction actuelle du règlement Eprivacy.

### Risquons-nous à une analyse…

L’article 4.11 du RGPD définit ainsi le consentement : «consentement» de la personne : **_« toute manifestation de volonté, libre, spécifique, éclairée et univoque par laquelle la personne concernée accepte, par une déclaration ou par un acte positif clair, que des données à caractère personnel la concernant fassent l'objet d'un traitement »_.**

### Intéressons-nous à la notion de liberté.

> Un choix est-il libre quand on impose une alternative limitée ? A « oui » ou « non », ne manque-t-il pas toute une série de réponses possibles ? Et notamment le « oui mais ». « Oui, mais plus tard », « oui mais pas sur tout », « oui mais pas aujourd’hui ».

Pour analyser un tel dispositif, il nous faut remonter aux sources du droit et ressortir nos cours de première année de Fac… Comment qualifier, juridiquement parlant, le dépôt d’un cookie  ou pour être plus précis, le consentement donné au dépôt d’un cookie ?

### **Se présentent à nous deux options : le fait juridique ou l’acte juridique.**

Il est acquis que la différence entre ces deux notions tient aux effets de droit qui y sont attachés. Dans l’hypothèse d’un fait juridique, les effets de droits ne sont pas produits par la volonté du sujet de droit, mais par la règle de droit elle-même (règlement, loi, traité international…) : le licenciement d’un salarié lui ouvre des droits : c’est un fait juridique. Ce fait juridique peut être volontaire ou involontaire. Mais le sujet de droit ne recherchait pas forcément à produire les effets de droit attachés au fait par la règle de droit.

> La situation est tout autre avec l’acte juridique : les effets de droit induits par un acte juridique découlent pleinement de la volonté du sujet de droit : je signe un contrat. On retrouve dans cette hypothèse la notion de volonté (de consentement…).

Alors quid de ce dépôt de fichier (le cookie) ? Nous nous plaçons dans l’hypothèse ou un consentement est requis. Qui dit consentement, dit forcément « acte juridique ». **Le dépôt de cookie dans une telle hypothèse serait donc un acte juridique auquel j’ai consenti.**

Or, si le dépôt du cookie est un acte juridique, mon consentement doit également être analysé à l’aune du consentement aux actes juridiques. Voilà ce que nous dit l’article 1100-1 du code civil : _**« Les actes juridiques sont des manifestations de volonté destinées à produire des effets de droit. Ils peuvent être conventionnels ou unilatéraux. Ils obéissent, en tant que de raison, pour leur validité et leurs effets, aux règles qui gouvernent les contrats. »**_

> On est donc sur le terrain Ô combien important de la théorie de l’autonomie de la volonté dont Rousseau a su nous expliquer l’étendue et qui peuple les toutes premières heures de cours des étudiants en droit de première et deuxième année.

La jurisprudence qui est venue façonner cette notion depuis 1804 n’admet pas la moindre notion de contrainte, quelle qu’elle soit, lorsqu’il s’agit de **considérer un consentement comme « libre ».**

### Revenons maintenant à l’hypothèse d’une navigation sur un site e-commerce par exemple.

Une navigation sans contrainte consisterait à pouvoir consulter le site web, sans obstacle. On peut donc s’interroger sur l’interdiction de pouvoir consulter le site web en question sans au préalable avoir du – donc être contraint – formaliser un choix entre des options imposées par l’éditeur dudit site web.

> C’est en effet l’éditeur qui choisit, seul, les options qui s’offrent à vous. Si celles-ci ne vous conviennent pas, vous devez quitter le site web.

La combinaison du considérant n°42 et de L’article 7.4 du RGPD fournit une grille de lecture pour évaluer la «qualité » du consentement fourni :

‍

_Considérant n°42 : Le consentement ne devrait pas être considéré comme ayant été donné librement si la personne concernée ne dispose pas d'une véritable liberté de choix ou n'est pas en mesure de refuser ou de retirer son consentement sans subir de préjudice._

‍

_Article 7.4 : « Au moment de déterminer si le consentement est donné librement, il y a lieu de tenir le plus grand compte de la question de savoir, entre autres, si l'exécution d'un contrat, y compris la fourniture d'un service, est subordonnée au consentement au traitement de données à caractère personnel qui n'est pas nécessaire à l'exécution dudit contrat. »._

Cet article 7.4 évoque la notion de contrat. On a vu plus haut que le dépôt d’un fichier sur votre matériel (le cookie) est susceptible de relever de la qualification d’acte juridique. Il y aurait donc une cohérence juridique entre le consentement contractuel et le consentement au cookie évoqué par le RGPD.

> Après avoir lu ces textes, sans doute faut-il alors se poser la question suivante pour tenter d’obtenir un début de réponse sur la conformité d’un choix imposé au dépôt de cookie : le dépôt de cookie est-il nécessaire à la fourniture du service (la consultation libre et sans contrainte du site web) ?

‍

### Si la réponse est oui, la contrainte de choix peut apparaître légitime.

Dans le cas contraire, la contrainte de choix semble imposée en violation de l’article 7.4 du RGPD, ce d’autant plus que le considérant n°32 ne laisse pas sans réponse l’acteur économique dès lors que l’absence de réponse de l’internaute équivaut à un refus (Considérant n°32 : _«  (…) Il ne saurait (…) y avoir de consentement en cas de silence (…) ou d'inactivité́ »_).

Invoquer le silence ou l’inactivité, n’est-ce pas lui donner corps juridiquement ? Le législateur européen a en tout cas, c’est une certitude, envisagé ce cas de figure. **Il répond donc à l’argument qui consisterait pour le site e-commerce à dire : « je veux un choix ! ». Laissez passer sans contrainte l’internaute – la « véritable liberté de choix » - et vous aurez votre réponse : elle sera négative car la règlementation vous autorise à formaliser cette déduction.**‍

> Être libre dans cette analyse juridique c’est avoir la possibilité d’agir sans être contraint. Du tout. **Or, imposer un choix, devoir choisir, c’est imposer une contrainte.**

Ce faisant, on peut considérer qu’on interdit à l’internaute d’avoir recours à l’un des choix que lui offre le règlement : celui, justement, de ne pas choisir (pas de consentement en cas de silence).

### Mais poussons un peu plus le raisonnement ...

Autorisons-nous à penser que le consentement au cookie est bien un acte juridique (postulat important vous l’avez compris). **Si tel est bien le cas, quid d’un consentement obtenu par dépit, par fatigue, par envie de poursuivre sa navigation ? Le droit considère-t-il les situations dans lesquelles une personne a consenti pour des raisons qu’elle pensait bonne ou par erreur… par contrainte ?**

Réponse oui et cela donne lieu – en tout cas en droit français – à une très large littérature : celle se référant à la théorie des vices du consentement. **Attention, on doit, pour accepter d’envisager de piocher dans les arguments de cette théorie, accepter de considérer qu’un consentement est un acte juridique (débat lui aussi ouvert, restons prudents).**

‍

Mais si on accepte ce postulat, que nous apprend la théorie des vices du consentement ? D’abord qu’elle est posée de longue date par le Code civil : l’article 1130 dit ceci : _**« L'erreur, le dol et la violence vicient le consentement lorsqu'ils sont de telle nature que, sans eux, l'une des parties n'aurait pas contracté ou aurait contracté à des conditions substantiellement différentes.**_

_Leur caractère déterminant s'apprécie eu égard aux personnes et aux circonstances dans lesquelles le consentement a été donné. »._

### **Mettons de côté la violence. Il nous reste l’erreur et le dol.**

Le dol, c’est la volonté de tromper. Et c’est l’article 1137 du code civil qui en traite : _« Le dol est le fait pour un contractant d'obtenir le consentement de l'autre par des manœuvres ou des mensonges »_.

On distingue habituellement en jurisprudence, le « bon dol » (l’habileté d’un vendeur à mettre en avant ses produits par exemple) du « mauvais dol » (le mensonge, la tromperie volontaire).

Et l’erreur correspond (en simplifiant) à une vision erronée de la réalité pour celui qui consent. L’erreur pour être valablement retenue devra porter sur les qualités essentielles et déterminantes du contenu de l’acte juridique. On dit aussi qu’on doit pouvoir prouver que la personne ne pouvait éviter l’erreur (en raison de ses compétences professionnelles par exemple) et qu’il n’y avait aucun aléa dans le contrat. **L’erreur, dit-on en jurisprudence, doit-être « excusable ».**

Or lorsque le quidam de base consent à un cookie, sait-il seulement ce qu’est… un cookie ? Il en connaît ce qu’il a vaguement pu en entendre au 13h de TF1 entre le reportage sur la préservation de la recette centenaire de la Garbure dans les Pyrénées-Orientales et celui sur la pêche à pieds le long de la côte d’Opale…

> **Soyons sérieux, rares sont les gens qui seraient en mesure d’expliquer de manière sérieuse le principe de fonctionnement d’un cookie.**

‍

**Est-il illusoire alors de considérer que l’on fait consentir l’internaute à un acte juridique dont   il n’est pas en mesure de comprendre la portée, puisqu’il n’est justement pas suffisamment expliqué ?** La voie est ainsi ouverte à la caractérisation de l’erreur excusable et donc au vice du consentement.

Il faut se rappeler à ce stade que l’article 1100-1 du code civil édicte dans son second alinéa que les actes juridiques _« (…) obéissent (…) pour leur validité et leurs effets, aux règles qui gouvernent les contrats. »._

> A chacun donc de s’interroger sur ces notions et la volonté délibérée de certains éditeurs d’y avoir recours pour capter de précieuses données personnelles.

La notion de consentement peut-elle aller puiser des réponses sur la validité de sa récolte dans le droit des contrats et son abondante jurisprudence ? C’est en tout cas le sens de cette analyse.

> La question est très intéressante et pas seulement sur le plan juridique. Soyons suffisamment lucide pour énoncer qu’elle supporterait, pour être creusée, des arguments contraires comme dans tout bon débat juridique qui se respecte.

Les réponses viendront très probablement de la jurisprudence. La matière de la protection des données doit encore se façonner au fil du temps et mûrir pour trouver le juste équilibre entre contraintes économiques, techniques et protection des données personnelles.

### Mais ce débat pourra se nourrir d’autres éléments, il est vaste !

Et on ne saurait d’ailleurs achever un argumentaire juridique sur l’analyse de la mise en place d’une pratique qui demeure avant toute autre considération, une pratique informatique, sans citer le fabuleux article premier de la loi fondatrice du 6 janvier 1978 : _**« L'informatique doit être au service de chaque citoyen. (…)Elle ne doit porter atteinte ni à l'identité humaine, ni aux droits de l'homme, ni à la vie privée, ni aux libertés individuelles ou publiques. ».**_

On se détachera quelques instants de la mathématique du droit pour s’interroger de manière plus aérienne et philosophique sur le fait de savoir si la pratique du cookiewall s’inscrit ou non dans l’esprit de ce texte.

**De la réponse à cette seule question devrait découler une prise de position assez nette.**

Depuis 1957 et le Traité de Rome, l’Europe envisage son avenir autour de la notion de communauté, laquelle impose de faire cohabiter en bonne intelligence, impératifs économiques et respect des libertés individuelles. Ces deux notions s’entrechoquent régulièrement. C’est bien le cas avec la protection des données personnelles et on ne peut pas balayer d’un revers de main l’impérieuse nécessité des entreprises de continuer à exploiter celles-ci pour pérenniser parfois leur modèle économique.

### Deux grands principes constituent des « murs porteurs » de l’Union Européenne :

la libre circulation des personnes et la libre circulation des marchandises. Le RGPD est venu – contrairement à ce que beaucoup trop de monde pense – créer un troisième axe : celui de la libre circulation de la donnée personnelle.

Oui, le RGPD est un texte libéral et dès le considérant n°4, le législateur européen le rappelle : _« Le droit à la protection des données à caractère personnel n'est pas un droit absolu; il doit être considéré par rapport à sa fonction dans la société et être mis en balance avec d'autres droits fondamentaux, conformément au principe de proportion­nalité. »._

> L’objectif ? C’est le considérant n°7 qui le rappelle : « (…) susciter la confiance qui permettra à l'économie numérique de se développer dans l'ensemble du marché intérieur ».

La lecture attentive de ce texte, la maîtrise de ses concepts révèle un mode d’emploi, le postulat de l’acceptation d’un changement de logiciel pour utiliser les données personnelles à des fins économiques : on peut à peu près tout faire pourvu qu’on ne laisse pas le citoyen être un simple spectateur de la vie de ses propres données. Il doit en toute circonstances, tenir le rôle principal. Ou plus exactement : on doit le mettre en position d’être cet acteur. A lui ensuite de savoir s’il veut être dans un rôle actif ou passif.

> Or, **la pratique du cookiewall à l’évidence ne s’inscrit pas dans cette démarche de compromis** entre principe de libre entreprise et protection des droits fondamentaux de la personne humaine.

L’inventeur du web, Tim Berners-Lee qui a refusé de breveter sa création, a écrit en 1999 dans son ouvrage _, « Weaving the Web » :_

_« The Web is more a social creation than a technical one. I designed it for a social effect—to help people work together—and not as a technical toy. The ultimate goal of the Web is to support and improve our weblike existence in the world. We clump into families, associations, and companies. We develop trust across the miles and distrust around the corner. What we believe, endorse, agree with, and depend on is representable and, increasingly, represented on the Web. We all have to ensure that the society we build with the Web is of the sort we intend._ _»_

> **Le cookiewall ne s’inscrit pas dans cette logique. Il défigure le web et dessert ceux qui le mette en pratique.**

Loin d’être un mur porteur, il est une simple cloison fragile donnant sur la plus vilaine pièce de la maison, celle qu’on cache généralement aux invités quand on a refait tout le reste.

Ceux qui, parmi les décideurs, feront les premiers le pari d’abattre ces cloisons fragiles pour s’orienter avec détermination vers une logique d’inclusion de l’internaute dans une collaboration commerciale ouvertement revendiquée et assumée (« nous souhaiterions avoir vos données et voilà pourquoi, qu’en dites-vous ? ») **poseront assurément les jalons de cette nouvelle économie numérique qui bâtit actuellement ses fondations sur les murs porteurs de la protection des données personnelles.**

‍

[Comment appliquer des durées de conservation à vos données personnelles ?](https://www.axeptio.eu/post/comment-appliquer-des-durees-de-conservation-a-vos-donnees-personnelles)

.

Muni d’un exemplaire du guide de la [CNIL de juillet 2020 sur les durées de conservation](https://www.cnil.fr/sites/default/files/atoms/files/guide_durees_de_conservation.pdf), notre DPO a quant à lui souhaité **mettre en place un cycle de vie de la donnée**. C’est nécessaire pour être en [conformité RGPD](https://www.axeptio.eu/post/confinement-8-raisons-de-soccuper-de-sa-mise-en-conformite-rgpd-e-privacy).

...

Il a demandé à chaque service interne et chaque prestataire de tout documenter : **quels sont les services utilisateurs ? Quelles sont les grandes finalités d’utilisation des données ? Quelles données sont utilisées ?**

Puis il a pris chaque donnée dans le détail et interrogé les collaborateurs de chaque service. Il voulait tout savoir : telle donnée est-elle utilisée ? Pourquoi ? En quoi est-elle nécessaire ? Combien de temps est-elle conservée ?

.

Une fois passée les durées de conservation correspondant aux besoins métiers et la période d’archivage des données pendant un délai légal, les données seront supprimées ou [anonymisées](https://www.axeptio.eu/post/ces-10-erreurs-qui-font-echouer-lanonymisation-des-donnees-personnelles).

**Quelles durées de conservation appliquer ?**

---

Construire une politique de durée de conservation signifie **tenir à jour un référentiel**.

Pour déterminer des durées pertinentes, vous pourrez vous appuyer notamment sur :

Les référentiels élaborés par la CNIL. Il en existe déjà plusieurs : [gestion des ressources humaines](https://www.cnil.fr/fr/publication-du-referentiel-relatif-la-gestion-des-ressources-humaines), secteur de la santé, [relation clients](https://www.cnil.fr/sites/default/files/atoms/files/referentiel-gestion-commerciale.pdf), [gestion des cookies](https://www.cnil.fr/fr/cookies-et-autres-traceurs-la-cnil-publie-de-nouvelles-lignes-directrices)…

Vos obligations légales (par exemple concernant la gestion des ressources humaines ou le paiement de cotisations sociales).

En matière commerciale, votre référentiel inclura les durées suivantes :

[Le droit à l’effacement : supprimer vos données en ligne | CNIL](https://www.cnil.fr/fr/le-droit-leffacement-supprimer-vos-donnees-en-ligne)

Le droit à l’effacement : supprimer vos données en ligne

============

- **

Vous avez le droit de demander à un organisme l'effacement de données à caractère personnel vous concernant.


A quoi ça sert ?

---

Qu’il s’agisse d’une photo gênante sur un site internet ou d’une information collectée par un organisme que vous jugez inutile, vous pouvez obtenir son effacement si au moins une de ces situations correspond à votre cas :

vos données sont utilisées à des fins de prospection ;

les données ne sont pas ou plus nécessaires au regard des objectifs pour lesquelles elles ont été initialement collectées ou traitées ;

vous retirez votre consentement à l’utilisation de vos données ;

vos données font l’objet d’un traitement illicite (par exemple, publication de données  piratées) ;

vos données ont été collectées lorsque vous étiez mineur dans le cadre de la société de l’information (blog, forum, réseau social, site web…) ;

vos données doivent être effacées pour respecter une obligation légale ;

vous vous êtes opposé au traitement de vos données et le responsable du fichier n’a pas de motif légitime ou impérieux de ne pas donner suite à cette demande.

Ces situations qui concernent l’exercice du droit d’effacement

---


Vous ne souhaitez plus bénéficier des services de ce site de commerce en ligne

---

et demandez la fermeture de votre compte et l’effacement des données qui y sont associées.


Un contenu gênant vous concernant est visible sur un réseau social

---

Vous pouvez demander la suppression de ce contenu directement auprès du site.


Vous souhaitez qu’un lien vers un contenu gênant ne soit plus référencé à votre nom-prénom ?

---

Suivez la procédure en contactant directement le moteur de recherche.

Comment faire concrètement ?

---

### Identifier l’organisme à contacter

Identifiez l’organisme puis rendez vous sur la page d’information réservée à l’exercice de vos droits sur le site internet de l’organisme (« politique confidentialité », « politique vie privée », « mention légales », etc). Si vous rencontrez des difficultés pour obtenir les coordonnées du délégué à la protection des données ou du responsable, consultez [notre fiche pratique](/fr/retrouver-les-coordonnees-dun-organisme-pour-exercer-vos-droits "Retrouver les coordonnées d'un organisme pour exercer vos droits - Nouvelle fenêtre").

### Exercer votre droit d’effacement auprès de l’organisme

Vous pouvez exercer votre demande de droit d’effacement par divers moyens : par voie électronique (formulaire, adresse mail, bouton de téléchargement etc.) ou par courrier, par exemple.

Il est très important d’indiquer précisément quelles sont les données que vous souhaitez effacer. En effet, l’exercice de ce droit n’entraine pas la suppression simple et définitive de toutes les données vous concernant qui sont détenues par l’organisme. Par exemple, une demande d’effacement de votre photo sur un site n’aboutira pas à la suppression de votre compte. De même, une demande de suppression de votre compte n’entrainera pas la suppression des factures et autres documents comptables relatifs à vos achats, pour lesquels une obligation légale de conservation existe.

Si et seulement si, l’organisme à des doutes raisonnables sur votre identité, il peut vous demander de joindre tout document permettant de prouver votre identité, par exemple pour éviter les usurpations d’identité. En revanche, il ne peut pas vous demander des pièces justificatives qui seraient abusives, non pertinente et disproportionnées par rapport à votre demande.

### Conserver une copie de vos démarches

Cette étape est primordiale si vous souhaitez saisir la CNIL en cas de réponse insatisfaisante ou d’absence de réponse.  Réalisez une capture d’écran de votre demande ou de la réponse à l’aide de la touche « impr écran » en haut à droit de votre clavier (PC) ou grâce au raccourci clavier cmd + MAJUSCULE + 4 si vous disposez d’un Mac. Vous exercez cette démarche par courrier ? Demandez un accusé réception qui prouvera la date de votre démarche.  De même, n’oubliez pas de conserver une copie du courriel ou de votre demande formulée par voie électronique.

Que faire en cas de refus ou d'absence de réponse ?

---

Le responsable du fichier droit procéder à l’effacement dans les meilleurs délais et au plus tard dans un délai d’un mois, qui peut être porté à trois compte tenu de la complexité de la demande. Dans ce dernier cas, l’organisme doit vous informer des raisons de cette prolongation. En cas de réponse insatisfaisante ou d’absence de réponse sous un mois, [vous pouvez saisir la CNIL](/fr/plaintes "Plaintes en ligne - nouvelle fenêtre").

### Quelles sont les limites du droit ?

Le droit à l’effacement est écarté dans un nombre de cas limité. Il ne doit pas aller à l’encontre:

de l’exercice du droit à la liberté d’expression et d’information ;

du respect d’une obligation légale (ex. délai de conservation d’une facture = 10 ans) ;

de l’utilisation de vos données si elles concernent un intérêt public dans le domaine de la santé ;

de leur utilisation à des fins archivistiques dans l’intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques ;

de la constatation, de l’exercice ou de la défense de droits en justice.

### Que disent les textes ?

[L’article 17 du règlement général sur la protection des données](https://www.notion.so/fr/reglement-europeen-protection-donnees/chapitre3#Article17)

[RGPD : Quelles évolutions pour votre base de données (CRM ou marketing) ?](https://net-helium.fr/blog/rgpd-quelles-evolutions-pour-votre-base-de-donnees-crm-ou-marketing/52)

Vous pouvez personnaliser vos préférences en matière de cookies à l'aide des boutons ci-dessous.

Vous pourrez à tout moment modifier vos préférences en vous rendant sur le lien « Modifier mes préférences sur les cookies » en bas de chaque page du site.

Pour plus d’informations, consultez notre [politique en matière de cookies](https://net-helium.fr/mentions-legales).

[En savoir plus](https://www.notion.so/mentions-legales)

- **

Cookies requis pour le bon fonctionnement du site

Ces cookies sont nécessaires pour assurer le fonctionnement optimal du site et sont donc activés en permanence.

Ils comprennent des cookies permettant de se souvenir de votre passage sur le site au cours d'une session, et les cookies qui enregistrent votre préférence en matière de cookies durant 13 mois maximum.

Aucune donnée à caractère personnel n'est collectée, les données sont anonymes.

Cookies d'analyse des performances du site

Ces cookies nous permettent d'améliorer l'ergonomie du site grâce à l'analyse de la navigation des visiteurs via l'outil Google Analytics.

Aucune donnée à caractère personnel n'est collectée, les données sont anonymes.

Cookies de navigation pour des communications personnalisées

Ces cookies suivent votre navigation en ligne pour nous aider à vous proposer des contenus personnalisés et entretenir une relation de qualité avec vous.
## [Analyse comparative des sanctions prononcées par la CNIL 2022/2023 - Scraping - Growthhacking.fr | Communauté française de growth hacking](https://www.growthhacking.fr/t/analyse-comparative-des-sanctions-prononcees-par-la-cnil-2022-2023/33388)


Le _Mise à jour de la configuration (CU)_ est une «sous-fonction» de _Provisoire_.

La fourniture permet aux utilisateurs de créer une configuration en incorporant les cookies du site à l'aide des données collectées _Secouer_ - notre scanner de cookies. Une fois la configuration initiale configurée à l'aide du _Provisoire_ fonctionnalité, il peut être mis à jour une semaine, un mois, un an plus tard… Ce rafraîchissement est rendu possible grâce au _Mise à jour de la configuration (CU)_.

Voici un exemple pour mieux le comprendre :

Disons qu'une configuration de widget est effectuée le 1er janvier 2023. Cette configuration contient un certain nombre de cookies présents sur le site à ce moment.

Avance rapide jusqu'au 1er septembre 2023, une nouvelle analyse est en cours et il y a 17 nouveaux cookies sur le site (en raison de modifications, d'ajouts d'éléments, etc. sur le site en question).

L'utilisation de la fonction de mise à jour de la configuration (CU) permet d'ajouter et de rendre visible ces 17 nouveaux cookies dans la configuration du CMP, en s'assurant qu'ils sont à jour en termes d'informations et donc conformes.

**Quels sont les avantages?**

✅ **Automatisation** - plus de mises à jour manuelles requises.

✅ **Gain de temps et autonomie accrue** - sa tâche est maintenant plus rapide et plus facile à faire seul.

✅ **Fiabilité améliorée** - avec cette nouvelle fonctionnalité, l'utilisateur peut être sûr de ne manquer aucun cookie.

  
**Comment fonctionne ce nouveau bijou?**

Cette nouvelle fonctionnalité est mise à disposition directement **au back office** accessible aux utilisateurs, sous le `Tracker Audit` tab.  


Lors de la planification d'une nouvelle analyse, un nouveau champ intitulé «Configuration à mettre à jour» est disponible **dans les options.**


Une fois la configuration à mettre à jour choisie, **deux options sont disponibles pour les utilisateurs**.

1️ ⁇ **Ajoutez une étape supplémentaire contenant tous les services tiers manquants**


Cette option permet la création d'un **nouvel écran** sur le widget où tout le **de nouveaux cookies ajoutés seront affichés**.

L'utilisateur peut décider de le faire **laissez le nouvel écran tel quel**, mais peut aussi (ce qui est le plus souvent fait) **réaffecter les cookies aux différentes catégories** ils ont créé dans leur widget **manuellement**.

**2️ ⁇ À l'aide de notre outil, gérez votre configuration**


Cette option est beaucoup **plus automatisé** que le précédent. Ça donne **libre cours à** _**Secouer**_, qui sera **analyser automatiquement les écrans** et les différentes catégories déjà mises en place sur le widget vers **y inclure directement les nouveaux cookies**.

Cette option peut également **automatically create a new category** previously absent in the widget, to display the **de nouveaux cookies y sont liés**.

Pour les cookies non classés par _Secouer_ (inconnu), l'outil les laissera dans "**mode non publié "** (c.-à-d., non visible sur le CMP) afin que le client puisse **les affecter manuellement à leurs catégories**.

**J'ai des questions? Nous avons des réponses!**

**1️ ⁇ Combien de temps la mise à jour de la configuration prend-elle pour actualiser votre widget?**

À propos **5 minutes**!

Le _Mise à jour de la configuration_ (CU) est **lié à la durée d'un scan**. Cela signifie que lorsque vous lancez une analyse, il vous suffit de vérifier l'option CU pour qu'elle soit effectuée simultanément avec l'analyse. 

**Une fois que vous obtenez les résultats de l'analyse**, vous pouvez ensuite mettre à jour votre configuration grâce au CU .

**2️ ⁇ Cette fonctionnalité prend-elle complètement en charge les paramètres de mon CMP?**

Tout dépend de l'option choisie :