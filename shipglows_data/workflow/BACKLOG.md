# Backlog produit - GoCharbon Quiz

Ce backlog conserve les opportunités différées issues du benchmark concurrentiel du 10 août 2026. Aucun élément ci-dessous n'est une fonctionnalité engagée : une spécification, des critères de succès et une preuve d'impact sont requis avant promotion vers le travail actif.

## Fondations pédagogiques

🔴 [gocharbon_quiz] task: Migrer le runtime de GoCharbon Quiz de Supabase/FastAPI/Mongo vers Firebase Auth + Convex HTTP, avec bascule réversible et sans importer les profils historiques non vérifiables | status: deferred | area: auth-backend-migration | id: gocharbon-quiz-firebase-convex-migration | spec: shipglows_data/workflow/specs/gocharbon-quiz-firebase-auth-convex-migration.md | source: decision-tech-2026-08-11 | trigger: autorité Firebase et Convex accordée, projets créés sur les plans gratuits

🟠 [gocharbon_quiz] task: Mettre en place un contrat de qualité des questions avec source, date de vérification, propriétaire éditorial, détection des doublons et signalement utilisateur | status: deferred | area: question-quality | source: competitor-benchmark-2026-08-10 | trigger: spécification approuvée et métriques de qualité définies
🟠 [gocharbon_quiz] task: Rendre la correction immédiatement utile avec explication courte, bonne réponse et ressource GoCharbon facultative | status: deferred | area: answer-feedback | source: competitor-benchmark-2026-08-10 | trigger: audit de visibilité des explications existantes et mesure du clic ressource
🟠 [gocharbon_quiz] task: Ajouter un historique des erreurs et un mini-quiz ciblé sans étendre le produit en LMS | status: deferred | area: learning-loop | source: competitor-benchmark-2026-08-10 | trigger: schéma de conservation et hypothèse de rétention validés
🟡 [gocharbon_quiz] task: Expérimenter une difficulté adaptative bornée et une répétition espacée des notions faibles | status: deferred | area: adaptive-learning | source: competitor-benchmark-2026-08-10 | trigger: banque de questions qualifiée et règles de score explicables

## Progression et engagement

🟡 [gocharbon_quiz] task: Rendre visible la maîtrise par catégorie à partir des performances et badges existants | status: deferred | area: category-mastery | source: competitor-benchmark-2026-08-10 | trigger: définition d'une mesure compréhensible qui n'encourage pas la compétition vide
🟡 [gocharbon_quiz] task: Tester une progression hebdomadaire légère autour du défi quotidien sans monnaie virtuelle additionnelle | status: deferred | area: retention | source: competitor-benchmark-2026-08-10 | trigger: rétention du défi quotidien mesurée sur une cohorte suffisante
🟢 [gocharbon_quiz] task: Explorer un duel asynchrone partageable entre proches | status: deferred | area: social-experiment | source: competitor-benchmark-2026-08-10 | trigger: contenu stabilisé et hypothèse d'impact sur activation ou retour validée
🟢 [gocharbon_quiz] task: Explorer des ligues hebdomadaires opt-in sans avantage payant | status: deferred | area: competition-experiment | source: competitor-benchmark-2026-08-10 | trigger: preuve que la compétition améliore le retour sans dégrader le clic qualifié

## Signaux clients à traiter

🟠 [gocharbon_quiz] task: Mesurer les questions répétées, ambiguës ou signalées et fixer un délai de correction éditoriale | status: deferred | area: customer-feedback | source: avis Google Play concurrents 2026-08-10 | trigger: mécanisme de signalement et tableau de suivi définis
🟡 [gocharbon_quiz] task: Mesurer ouverture des explications, relance après erreur, complétion et clic vers la recommandation | status: deferred | area: product-analytics | source: competitor-benchmark-2026-08-10 | trigger: plan de mesure respectueux de la vie privée approuvé

## Risques et garde-fous

🔴 [gocharbon_quiz] task: Préserver une expérience sans publicité intrusive, pay-to-win ou abonnement opaque | status: deferred | area: monetization-guardrail | source: avis DuelQuiz Mukiz QuizzMax QuizAx 2026-08-10 | trigger: toute décision de monétisation future exige une revue produit explicite
🔴 [gocharbon_quiz] task: Interdire la publication automatique de questions, réponses, traductions ou images générées par IA sans validation éditoriale | status: deferred | area: content-integrity | source: avis Quiz Culture Générale et de QI QuizAx QuizzMax 2026-08-10 | trigger: toute fonctionnalité IA exige provenance, revue humaine et mécanisme de correction
🔴 [gocharbon_quiz] task: Éviter chat, clans et multijoueur temps réel tant que coût, modération, confidentialité et valeur produit ne sont pas démontrés | status: deferred | area: scope-guardrail | source: competitor-benchmark-2026-08-10 | trigger: décision produit documentée avec plan de modération et preuve de valeur
🟠 [gocharbon_quiz] task: Préserver l'entrée anonyme et ne proposer le compte que pour sauvegarder une valeur claire | status: deferred | area: onboarding-guardrail | source: competitor-benchmark-2026-08-10 | trigger: toute modification d'authentification exige comparaison de friction et bénéfice utilisateur
