---
artifact: competitive_intelligence
metadata_schema_version: "1.0"
artifact_version: "0.3.0"
project: "gocharbon_quiz"
created: "2026-08-10"
updated: "2026-08-20"
status: draft
source_skill: sg-marketing
scope: project-competitors-and-inspirations
owner: "dianedef"
confidence: medium
risk_level: medium
security_impact: none
docs_impact: yes
reference_categories:
  - competitors
  - inspirations
  - customer-feedback
  - product-opportunities
source_policy: "Registre interne fondé sur les fiches Google Play et les avis visibles le 2026-08-10. Revérifier les données volatiles avant toute affirmation publique."
target_projects:
  - gocharbon_quiz
depends_on:
  - artifact: "shipglows_data/product/app_quiz/product.md"
    artifact_version: "1.3.0"
    required_status: reviewed
  - artifact: "shipglows_data/gtm/app_quiz/gtm.md"
    artifact_version: "1.2.0"
    required_status: reviewed
supersedes: []
evidence:
  - "Google Play product pages and visible verified-review samples collected on 2026-08-10"
next_review: "2026-11-10"
next_step: "Transformer les opportunités P0 retenues en une spec produit mesurable avant implémentation."
---

# Concurrents et inspirations - GoCharbon Quiz

## Décision produit à préserver

GoCharbon Quiz n'a pas vocation à devenir un jeu de culture générale indépendant. Sa fonction est de tester rapidement la maîtrise de notions business, donner un retour crédible par catégorie et envoyer le joueur vers le prochain contenu GoCharbon pertinent. L'orientation vers un modèle d'activité reste la responsabilité du site.

Les mécaniques concurrentes ne sont donc utiles que si elles améliorent au moins un de ces indicateurs :

- taux de complétion du quiz ;
- compréhension et mémorisation des réponses ;
- pertinence perçue du retour par compétence ;
- retour volontaire à court terme ;
- clic qualifié vers `gocharbon.fr`.

## Sources étudiées

Les notes, volumes d'avis, téléchargements, fonctionnalités et avis sont des observations datées du 10 août 2026. Ils peuvent évoluer. Les avis visibles constituent un échantillon qualitatif, pas une mesure statistique représentative.

| Produit | Positionnement observé | Mécaniques intéressantes | Signaux des avis visibles | Usage pour GoCharbon |
|---|---|---|---|---|
| [Quizlet](https://play.google.com/store/apps/details?id=com.quizlet.quizletandroid) | Apprentissage assisté, flashcards et tests | répétition espacée, modes Apprendre/Test, génération depuis des notes, progression personnalisée | valeur du gratuit et des outils d'étude appréciée ; demandes de navigation plus claire, tri persistant, recherche dans les listes et transparence tarifaire | Forte inspiration pédagogique ; éviter la complexité d'un LMS et la génération non vérifiée |
| [Mukiz](https://play.google.com/store/apps/details?id=fr.gbouxin.mukizblindtest) | Blind test solo et multijoueur | sessions rapides, plusieurs modes, score lié à la vitesse, playlists, direct, trophées et personnalisation | concept apprécié ; rejet des pubs, de l'abonnement hebdomadaire, des contenus recyclés et des changements qui retirent une mécanique centrale | Préserver les règles appréciées et la fluidité ; ne pas reprendre l'économie publicitaire agressive |
| [Quiz sans fin](https://play.google.com/store/apps/details?id=com.timleg.quizPro) | Culture générale premium sans publicité | flux continu, modes variés, difficulté élevée, statistiques, Elo, liens pédagogiques après réponse, hors ligne | variété, niveau exigeant et statistiques appréciés ; critiques sur le multijoueur imprévisible et la perte d'historique | Inspirer la profondeur des statistiques, l'historique et les sources explicatives |
| [Quiz Culture Générale et de QI](https://play.google.com/store/apps/details?id=trivia.game.question.answer.iq.quiz.test.free) | Campagne solo et progression adaptative | campagne, objets, difficulté progressive, statistiques, images et localisation | plaisir d'apprendre apprécié ; demandes d'explications après erreur ; critiques sur répétition, questions trop faciles, pubs et illustrations IA | Priorité forte aux explications, à la difficulté calibrée, à la déduplication et aux visuels crédibles |
| [Quizy / Quizville](https://play.google.com/store/apps/details?id=com.quizville.trivia) | Quiz gamifié à ligues | ligues hebdomadaires, aides, XP, récompenses, tâches quotidiennes, mini-jeux et série | aucun échantillon d'avis exploitable visible lors de la collecte | Inspirer une progression hebdomadaire légère, sans empiler monnaies et mini-jeux hors sujet |
| [DuelQuiz](https://play.google.com/store/apps/details?id=se.maginteractive.quizduel2) | Référence grand public du duel de quiz | solo par chapitres, boss, arène, duels, catégories renouvelées, quiz spéciaux et badges | rejet massif des pubs intrusives, de la repaye après ancien premium et d'un abonnement perçu comme abusif | Inspiration de variété éditoriale ; contre-exemple majeur de monétisation et de rupture de confiance |
| [QuizApp](https://play.google.com/store/apps/details?id=app.cranberry.quizapp) | Réseau social de duels | amis, duels, statistiques, classement et chat | l'absence de français est un frein explicite | Confirme l'avantage d'une expérience francophone native ; chat et réseau social non prioritaires |
| [QuizzMax](https://play.google.com/store/apps/details?id=com.quizzmax) | Duels, équipes et clans | temps réel, 2 contre 2, clans, classement et explications détaillées | intérêt pour le concept sans publicité ; inquiétudes sur répétition, équité du premium et origine IA des explications | Retenir explications et transparence ; éviter pay-to-win et banque de questions opaque |
| [Duelo](https://play.google.com/store/apps/details?id=com.louispag.duelo) | Duel court en temps réel ou différé | huit questions, bonus de vitesse, dernière question décisive, quêtes, ligues et personnalisation | base d'avis insuffisante lors de la collecte | Le duel différé est une piste plus réaliste que le temps réel, mais seulement après preuve de rétention |
| [QuizAx](https://play.google.com/store/apps/details?id=com.quizax.app) | Duels, tournois et quiz visuels | jeu immédiat sans inscription, solo, tournois, images, profils et statistiques | variété appréciée ; critiques sur mauvaises traductions, réponses fausses ou ambiguës, pubs, prix et attente multijoueur | Priorité absolue au démarrage sans friction et à la qualité éditoriale ; éviter traduction automatique non relue |
| [QuizBeast](https://play.google.com/store/apps/details?id=com.ayyaseme.bilgi_yarismasi) | Duels 1v1 internationaux en temps réel | score en direct, revanche instantanée, classements hebdomadaire/mensuel/global, maîtrise par catégorie, défis quotidiens, amis et réactions légères | aucun avis client exploitable visible lors de la collecte ; base déclarée de `1 k+` téléchargements | Confirme la piste du duel et d'une progression par catégorie, mais reste une inspiration P2 sans preuve suffisante d'adoption |

## Enseignements transversaux

### Ce que les utilisateurs valorisent

- commencer immédiatement, idéalement sans inscription obligatoire ;
- comprendre pourquoi une réponse est correcte ou incorrecte ;
- voir une progression concrète par thème plutôt qu'un score isolé ;
- disposer de questions suffisamment variées, bien calibrées et renouvelées ;
- jouer des sessions courtes avec des règles simples et stables ;
- retrouver un historique, ses erreurs et ses points faibles ;
- bénéficier d'une expérience francophone naturelle et cohérente ;
- savoir clairement ce qui est gratuit, payant ou généré par IA.

### Ce qui détruit la confiance

- publicité après chaque partie ou publicité persistante malgré un paiement ;
- abonnement hebdomadaire cher ou tarif présenté tardivement ;
- avantages premium qui modifient l'équité du classement ;
- questions répétées, fausses, ambiguës, mal traduites ou trop faciles ;
- explications et images IA non vérifiées ;
- suppression d'une mécanique appréciée lors d'une refonte ;
- attente multijoueur, matchmaking imprévisible et démarrage sans confirmation ;
- accumulation de monnaies, mini-jeux et récompenses sans valeur pédagogique.

## État GoCharbon à conserver

Le produit possède déjà des fondations cohérentes avec ce benchmark : défi quotidien, XP, badges, classement, explications de réponses, catégories business et recommandations basées sur les performances. L'objectif n'est pas de les dupliquer, mais de les rendre plus fiables et plus directement liées au prochain pas GoCharbon.

## Opportunités priorisées

### P0 - confiance pédagogique et activation

1. **Contrat de qualité des questions.** Ajouter à chaque question une source, une date de vérification, un niveau, un propriétaire éditorial et un mécanisme de signalement. Détecter doublons, réponses ambiguës et explications manquantes avant publication.
2. **Correction utile après chaque réponse.** Afficher immédiatement la bonne réponse, une explication courte et une ressource GoCharbon facultative. Mesurer ouverture de l'explication et clic vers la ressource sans interrompre les sept questions.
3. **Retour par compétence.** Restituer forces, lacunes et prochain pas par catégorie business, avec une justification compréhensible de la recommandation, sans inférer un profil métier.
4. **Entrée anonyme réellement fluide.** Maintenir le quiz accessible sans compte et proposer l'inscription seulement pour conserver progression, historique ou série.
5. **Historique des erreurs.** Permettre de revoir les réponses incorrectes et de relancer un mini-quiz ciblé, sans construire un LMS complet.

### P1 - rétention utile

1. **Difficulté adaptative bornée.** Ajuster les prochaines sessions au niveau observé, sans rendre le score ou le classement incompréhensible.
2. **Répétition espacée des erreurs.** Réintroduire les notions faibles à intervalles raisonnables, avec priorité aux compétences business actionnables.
3. **Progression hebdomadaire légère.** Utiliser les défis et badges existants pour montrer un objectif clair, sans monnaie virtuelle supplémentaire ni pression punitive.
4. **Formats de question enrichis.** Tester ponctuellement visuels, classement d'étapes ou mini-cas business lorsque le format améliore réellement la compréhension.
5. **Transparence produit.** Expliquer clairement l'origine des questions, l'usage éventuel de l'IA, la politique de correction et les avantages liés à un compte.

### P2 - expérimentation sous preuve

1. **Duel asynchrone entre proches.** Tester un lien de défi partageable basé sur le même lot de questions. N'investir dans le temps réel qu'après preuve d'impact sur activation ou rétention.
2. **Ligues hebdomadaires opt-in.** Expérimenter une compétition limitée, équitable et sans avantage payant.
3. **Création communautaire contrôlée.** N'accepter des suggestions de questions que via modération et validation éditoriale ; ne jamais publier automatiquement.

## Non-priorités explicites

- chat, clans et réseau social complet ;
- tournois temps réel et infrastructure de matchmaking ;
- génération automatique massive de questions ou d'illustrations ;
- monnaies virtuelles multiples, coffres et mini-jeux génériques ;
- abonnement hebdomadaire, publicité interstitielle agressive ou avantage compétitif payant ;
- catalogue généraliste qui dilue les quatre catégories business ;
- promesse de devenir un LMS ou une marque de trivia indépendante.

## Ordre recommandé

1. Auditer la banque actuelle avec le contrat de qualité P0.
2. Prouver que la correction et le retour par compétence augmentent compréhension, complétion et clic qualifié.
3. Ajouter historique et répétition ciblée.
4. Tester la progression adaptative sur un petit segment.
5. N'envisager le duel asynchrone qu'après stabilisation des contenus et mesure de la rétention.

## Mesures de décision

- complétion d'une session de sept questions ;
- taux d'ouverture des explications ;
- taux de relance d'un quiz ciblé après erreur ;
- retour à 7 jours après un défi quotidien ;
- taux de clic vers la recommandation GoCharbon ;
- taux de signalement et de correction des questions ;
- part de questions vues en doublon sur les trente derniers jours.

## Limites de preuve

- Les descriptions Google Play sont déclaratives et ne prouvent pas la qualité réelle ou la rétention.
- Les avis visibles sont un échantillon sélectionné par Google Play ; ils indiquent des motifs qualitatifs, pas leur fréquence dans toute la base.
- Quizy, Duelo et QuizBeast disposent de trop peu d'avis visibles pour soutenir une conclusion client solide.
- Les données chiffrées des fiches doivent être revérifiées avant publication ou décision financière.
