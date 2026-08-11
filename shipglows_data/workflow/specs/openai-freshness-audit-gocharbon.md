---
artifact: spec
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-04-26"
updated: "2026-04-27"
status: ready
source_skill: sf-spec
scope: "audit-fix"
owner: "Diane"
confidence: "high"
user_story: "En tant que lectrice ou lecteur GoCharbon qui s'appuie sur les contenus IA pour choisir des outils, comprendre les LLM ou construire une offre, je veux lire des informations actuelles, sourcées et clairement datées, afin de ne pas prendre de décision sur des claims OpenAI/ChatGPT obsolètes ou invérifiables."
risk_level: "high"
security_impact: "low, because this scope edits public Markdown content and local audit scripts only; it does not change auth, permissions, secrets, payments, or user-private data flows. Mitigation: use only public sources, never log keys or private captures, and never paste non-public data into articles or reports."
docs_impact: "yes"
linked_systems:
  - "site/src/data/**/*.md"
  - "site/src/content.config.ts"
  - "site/src/utils/build-posts.ts"
  - "site/src/pages/[...slug].astro"
  - "site/src/layouts/Post.astro"
  - "scripts/audit_outils_content.py"
depends_on:
  - artifact: "CLAUDE.md"
    artifact_version: "unknown"
    required_status: "active"
  - artifact: "AGENTS.md"
    artifact_version: "unknown"
    required_status: "active"
  - artifact: "site/src/data/_CONTENT_GUIDELINES.md"
    artifact_version: "unknown"
    required_status: "active"
  - artifact: "https://developers.openai.com/api/docs/guides/latest-model"
    artifact_version: "consulted-2026-04-26"
    required_status: "fresh-docs checked"
  - artifact: "https://developers.openai.com/api/docs/guides/code-generation"
    artifact_version: "consulted-2026-04-26"
    required_status: "fresh-docs checked"
  - artifact: "https://developers.openai.com/codex/cli"
    artifact_version: "consulted-2026-04-26"
    required_status: "fresh-docs checked"
  - artifact: "https://developers.openai.com/codex/pricing"
    artifact_version: "consulted-2026-04-26"
    required_status: "fresh-docs checked"
supersedes: []
evidence:
  - "https://developers.openai.com/api/docs/guides/latest-model#using-reasoning-models"
  - "https://developers.openai.com/codex/cli"
  - "https://developers.openai.com/api/docs/guides/code-generation#use-codex"
  - "https://developers.openai.com/codex/pricing"
next_step: "/sf-start OpenAI freshness audit GoCharbon"
---

# Title

OpenAI freshness audit GoCharbon

# Status

Ready. The scope, ordering, doc freshness evidence, SEO decision rules, and security posture are explicit enough for `/sf-start` without relying on hidden conversation context.

# User Story

En tant que lectrice ou lecteur GoCharbon qui s'appuie sur les contenus IA pour choisir des outils, comprendre les LLM ou construire une offre, je veux lire des informations actuelles, sourcées et clairement datées, afin de ne pas prendre de décision sur des claims OpenAI/ChatGPT obsolètes ou invérifiables.

# Minimal Behavior Contract

Quand un agent lance ce chantier, il doit produire deux résultats observables : d'abord mettre à jour les quatre contenus IA structurés à haute valeur avec des claims datés, sourcés et prudents ; ensuite classer les vieux articles IA marketing en `keep/enrich`, `merge`, `draft` ou `delete-candidate` sans les supprimer automatiquement. Si une source officielle ou académique manque pour un claim sensible, le contenu doit dire l'incertitude ou retirer le claim plutôt que le reformuler comme un fait. L'edge case facile à rater : `draft: true` sort déjà une page Markdown du build, mais le repo ne supporte pas encore un `noindex` par article de collection ; demander un `noindex` éditorial sans modifier le layout ne produit donc aucun effet.

# Success Behavior

- Les quatre pages prioritaires sont relues et soit réécrites, soit marquées comme nécessitant une source externe avant publication : `site/src/data/tech/ia/llm/choisir-llm.md`, `site/src/data/tech/ia/llm/introduction-llm.md`, `site/src/data/tech/ia/llm/llm-hallucinations.md`, `site/src/data/biz/profils/prompt-engineer.md`.
- Les claims OpenAI/Codex utilisent les docs OpenAI actuelles via MCP : latest model guidance, Responses API, structured outputs, Codex CLI, Codex pricing ou docs spécifiques consultées au moment de l'implémentation.
- Les claims Anthropic/Claude, Google/Gemini, Mistral, DeepSeek, benchmarks et revenus métier sont vérifiés via sources officielles, benchmarks primaires ou sources business fiables ; les claims non vérifiables sont supprimés ou qualifiés.
- Le lot B produit un inventaire des vieux articles IA marketing repérés dans `site/src/data/outils/marketing/autres/**` avec une décision par fichier : `keep/enrich`, `merge`, `draft`, ou `delete-candidate`.
- Aucun outil n'est renommé ou requalifié comme français/européen dans ce chantier, sauf si une tâche séparée applique le protocole de qualification locale.
- Les validations montrent que le frontmatter reste compatible avec `site/src/content.config.ts` et que le build complet ne casse pas.

# Error Behavior

- Si les docs OpenAI MCP ne répondent pas, l'agent doit utiliser uniquement les sites officiels OpenAI en fallback et noter `fresh-docs gap` dans son rapport si la vérification reste incomplète.
- Si un claim chiffré sensible n'a pas de source primaire récente, il doit être retiré, remplacé par une formulation qualitative, ou explicitement présenté comme exemple historique daté.
- Si deux vieux articles couvrent le même intent avec contenu très similaire, ne pas conserver deux pages self-canonical par inertie ; proposer une fusion ou un passage en draft selon la valeur SEO et éditoriale.
- Si une page doit rester accessible mais non indexée, ne pas seulement ajouter un champ frontmatter inventé : il faut soit passer par `draft: true`, soit ajouter une vraie prise en charge technique du meta robots par article.
- Ne jamais logguer ou intégrer de clés API, comptes personnels, captures privées ou données non publiques pendant la recherche.

# Problem

Le corpus GoCharbon contient une surface OpenAI/ChatGPT ancienne et large. Les fichiers à risque mêlent exemples API obsolètes, modèles et prix datés, benchmarks, revenus métier, promesses d'agents, hallucination rates et conseils de prompting. Ce contenu peut dégrader la confiance éditoriale, induire des décisions business ou techniques erronées, et créer un risque SEO si des pages faibles ou dupliquées restent publiées.

# Solution

Conduire un mini-audit "OpenAI freshness" en deux lots. Lot A : réécrire ou mettre à jour quatre pages structurées à haute valeur avec sources actuelles et prudence éditoriale. Lot B : scanner les vieux articles IA marketing, puis décider pour chacun s'il faut enrichir, fusionner, passer en draft, ou signaler comme candidat suppression.

# Scope In

- Mettre à jour les contenus OpenAI/ChatGPT/Codex des quatre pages prioritaires.
- Moderniser les exemples API OpenAI, notamment en privilégiant les patterns actuels documentés au moment de l'implémentation.
- Vérifier les claims Codex avec les docs OpenAI officielles, y compris disponibilité CLI, modèles, usage et pricing.
- Vérifier ou retirer les claims chiffrés sur hallucinations, benchmarks, prix, context windows, revenus et abonnements.
- Créer un inventaire Lot B des vieux articles IA marketing contenant `chatgpt`, `openai` ou `gpt` dans le slug ou les claims.
- Appliquer les décisions éditoriales sans supprimer automatiquement de contenu : enrichissement ciblé, fusion documentée, `draft: true`, ou liste `delete-candidate`.
- Préserver la voix Diane : humaine, claire, directe, anti-bullshit, sans storytelling IA générique.

# Scope Out

- Refonte globale de la taxonomie GoCharbon.
- Réécriture massive de tous les 2 279 fichiers scannés.
- Qualification locale des outils et badge `Engagement français`, sauf si un fichier outil touché demande explicitement les champs de qualification.
- Suppression physique de fichiers sans validation explicite.
- Ajout d'une nouvelle section ou route `apps`.
- Migration technique complète du système SEO si `draft: true` suffit pour les pages à sortir du build.
- Comparatif exhaustif de tous les fournisseurs IA du marché.

# Constraints

- Préserver les sections autorisées : `blog`, `outils`, `tutos`, `parcours`.
- Ne pas réintroduire `apps`.
- Ne pas inventer de claims sur OpenAI, Anthropic, Google, Mistral, DeepSeek, benchmarks ou revenus.
- Ne pas publier de prix ou limites comme faits intemporels ; toujours dater ou sourcer les valeurs instables.
- Garder `section: outils` et `type: outil` quand le fichier est une fiche outil existante.
- Les contenus GoCharbon sont en français, avec tutoiement, ton direct et pragmatique.
- Les changements doivent rester compatibles avec `site/src/content.config.ts`, qui accepte `draft` mais ne déclare pas de champ `noindex`.
- Le build visible utilise `filterBuildVisiblePosts`, qui exclut `draft: true`, les dates futures, et éventuellement tous les outils via `EXCLUDE_OUTILS_FROM_BUILD`.
- Sécurité proportionnée : impact faible, parce que le chantier ne modifie que du contenu public et des scripts d'audit locaux. Il est interdit d'utiliser des clés réelles, des comptes personnels, des captures privées, des exports analytics privés, ou toute donnée non publique pendant la recherche, la rédaction ou les rapports.
- Règle SEO par défaut : tant qu'aucune exigence explicite "accessible mais non indexée" n'est prouvée pour une page donnée, la sortie du build via `draft: true` est la voie par défaut. Tâche 8 est interdite par défaut et ne devient autorisée qu'après le rapport Lot B si une page doit rester accessible publiquement tout en étant `noindex`.

# Dependencies

- Astro 5 content collections via `site/src/content.config.ts`.
- Markdown content under `site/src/data/**`.
- `filterBuildVisiblePosts` in `site/src/utils/build-posts.ts`.
- Existing editorial guidelines in `CLAUDE.md`, `AGENTS.md`, and `site/src/data/_CONTENT_GUIDELINES.md`.
- Existing scripts: `site/scripts/audit_outils_content.py`, `site/scripts/audit_outils_duplicate_mirrors.py`, and optionally a new focused script for AI freshness scanning.
- OpenAI official docs checked via MCP on 2026-04-26:
  - `fresh-docs checked`: latest model guidance says GPT-5.5 works best in Responses API and calls out Responses API, reasoning controls, verbosity, structured outputs, prompt caching, tools, hosted tools, state management, and Agents SDK.
  - `fresh-docs checked`: Codex CLI docs state Codex CLI runs locally from the terminal, can read/change/run code in the selected directory, is open source, and is included in ChatGPT Free/Go/Plus/Pro/Business/Edu/Enterprise plans according to current docs.
  - `fresh-docs checked`: code generation docs describe Codex as OpenAI's coding agent and recommend current GPT-5-family models for most code generation tasks.
  - `fresh-docs checked`: Codex pricing docs contain plan, usage-limit and credit details that are volatile and must be rechecked before publishing exact numbers.
- Anthropic, Google, Mistral, DeepSeek, benchmark and revenue claims: `fresh-docs gap` at spec time; implementation must consult official/current sources before writing exact facts.

# Invariants

- A dated claim must either name its date/source or be expressed as a time-bound snapshot.
- Sensitive claims about hallucination rates, model superiority, earnings, pricing and subscriptions must not be asserted without source.
- Historical context can remain, but must be labelled as historical and not mixed with current recommendations.
- A low-confidence source should weaken the wording, not strengthen the conclusion.
- Drafting a file is reversible and acceptable; deleting a file is not part of this spec without a follow-up decision.
- Editorial categorization, local qualification and responsibility rating remain separate concerns.

# Links & Consequences

- `site/src/pages/[...slug].astro` renders all build-visible posts through `Post.astro`; article-level robots support is not currently passed from Markdown frontmatter.
- `site/src/utils/indexation.ts` noindexes non-launch paths in some page contexts, but that does not equal per-article noindex support for the content collection route.
- `site/src/pages/outils/[category]/[subcategory].astro` already uses `noindex, follow` for sparse outil category pages; this is separate from individual old outil articles.
- `site/src/content.config.ts` uses `.passthrough()`, so extra frontmatter may not fail validation, but unused metadata can create false confidence. Do not rely on unused fields for SEO behavior.
- `pnpm build` is parcours-only by default; `pnpm build:full` is required to catch full content collection problems.
- Existing `site/scripts/audit_outils_content.py` writes reports under `site/scripts/`; extending it or adding a focused script will create new generated audit artifacts if implemented.
- `site/src/layouts/Default.astro` accepte déjà `metaRobots`, mais la route de contenu `[...slug]` et `Post.astro` ne transmettent pas aujourd'hui une valeur issue du frontmatter ; le gap est donc de câblage et de validation, pas de base layout.

# Documentation Coherence

- Update or add an internal audit note if Lot B produces durable decisions. Recommended target: `site/scripts/openai_freshness_audit.md` or `docs/openai-freshness-audit.md` if a `docs/` directory is later created.
- Do not update public methodology for local qualification, because this is not a local-responsibility metadata task.
- If article-level noindex support is implemented, document the new frontmatter field in `site/src/content.config.ts` adjacent documentation or README content notes.
- If examples move from Chat Completions to Responses API, the article body must explain the distinction enough for non-expert readers.

# Edge Cases

- A page can be high-value but too volatile for exact pricing tables; in that case prefer decision frameworks over hardcoded prices.
- "OpenAI recommends" claims must be backed by official docs or rewritten as "dans la doc actuelle, OpenAI met en avant...".
- Hallucination rates vary wildly by task, model, benchmark and methodology; avoid a single universal percentage.
- Codex plan limits and pricing are especially volatile; exact tables should be avoided unless rechecked immediately before publication.
- Old articles in `site/src/data/outils/marketing/autres/**` may be editorial articles filed under outils, not true tool fiches. Do not apply tool qualification metadata unless the page is actually a tool page.
- Duplicate grep results can appear because glob patterns overlap; deduplicate paths before building Lot B.
- `delete-candidate` is a recommendation state, not deletion.

# Implementation Tasks

- [ ] Tâche 1 : Créer un inventaire source des contenus IA/OpenAI à traiter
  - Fichier : `site/scripts/audit_openai_freshness.py`
  - Action : Ajouter un script qui scanne `site/src/data/**/*.md`, détecte les slugs et claims `openai|chatgpt|gpt|codex|llm|claude`, déduplique les chemins, extrait frontmatter, compte les signaux datés, et sort JSON + Markdown.
  - User story link : Permet de voir toute la surface risquée avant de modifier.
  - Depends on : None.
  - Validate with : `python3 scripts/audit_openai_freshness.py` puis inspection des sorties.
  - Notes : Ne pas modifier les contenus depuis ce script.

- [ ] Tâche 2 : Mettre à jour le comparatif LLM prioritaire
  - Fichier : `site/src/data/tech/ia/llm/choisir-llm.md`
  - Action : Réécrire les sections modèles, agents CLI, benchmarks, prix et recommandations avec sources actuelles ; retirer les claims invérifiables comme scores non sourcés, contextes ou abonnements périmés.
  - User story link : Donne une recommandation fiable pour choisir un LLM ou un agent.
  - Depends on : Tâche 1 et vérification docs OpenAI/Anthropic/benchmarks.
  - Validate with : Relecture factuelle + `rg -n "Claude 3\\.5|GPT-4 Turbo|Terminal-Bench|SWE-bench|\\$20-200|2026" site/src/data/tech/ia/llm/choisir-llm.md`.
  - Notes : Préférer un cadre de choix par usage à un tableau de prix très fragile.

- [ ] Tâche 3 : Moderniser l'introduction aux LLM
  - Fichier : `site/src/data/tech/ia/llm/introduction-llm.md`
  - Action : Remplacer l'exemple `client.chat.completions.create(model="gpt-4")` par un exemple actuel fondé sur les docs OpenAI ; mettre à jour la section coûts/modèles ou la rendre volontairement qualitative et datée.
  - User story link : Evite d'apprendre une API ou des prix obsolètes à un lecteur débutant.
  - Depends on : Tâche 1 et docs OpenAI actuelles.
  - Validate with : `rg -n "chat\\.completions|gpt-4|GPT-3\\.5|\\$0\\.03|Claude 3\\.5" site/src/data/tech/ia/llm/introduction-llm.md`.
  - Notes : Si un exemple API est gardé, il doit être minimal, explicable et compatible avec la doc officielle du jour.

- [ ] Tâche 4 : Auditer et réécrire la page hallucinations
  - Fichier : `site/src/data/tech/ia/llm/llm-hallucinations.md`
  - Action : Supprimer ou sourcer les pourcentages et attributions douteuses, restructurer autour des causes, signaux, mitigation, RAG, citations, évaluations et limites.
  - User story link : Réduit le risque de transmettre de faux chiffres sur un sujet sensible.
  - Depends on : Tâche 1 et recherche académique/web primaire.
  - Validate with : `rg -n "%|OpenAI recommande|Anthropic a découvert|Stanford AI Lab|DeepMind|Microsoft Research|Google AI" site/src/data/tech/ia/llm/llm-hallucinations.md`.
  - Notes : Tout taux global doit être évité sauf s'il est explicitement borné par benchmark, date, modèle et méthode.

- [ ] Tâche 5 : Mettre à jour le profil "Consultant IA et prompting"
  - Fichier : `site/src/data/biz/profils/prompt-engineer.md`
  - Action : Réviser les sections services, prérequis, abonnements, API, revenus et positionnement métier ; remplacer "prompt engineer" mode par un angle consultant IA/workflows plus robuste.
  - User story link : Donne une trajectoire métier réaliste et actuelle.
  - Depends on : Tâche 1, docs OpenAI pour API/prompting, et sources business actuelles pour revenus/marché.
  - Validate with : `rg -n "ChatGPT API|API ChatGPT|2000€|10000€|ChatGPT Plus|GPTs personnalisés|prompt engineer" site/src/data/biz/profils/prompt-engineer.md`.
  - Notes : Les revenus doivent rester des fourchettes prudentes ou des exemples conditionnels, pas une promesse.

- [ ] Tâche 6 : Classer les vieux articles IA marketing du lot B
  - Fichier : `site/scripts/openai_freshness_audit.md`
  - Action : Documenter pour chaque vieux article IA marketing une décision `keep/enrich`, `merge`, `draft`, ou `delete-candidate`, avec raison courte et cible canonique si fusion.
  - User story link : Evite de laisser des pages faibles ou trompeuses publiées par inertie.
  - Depends on : Tâche 1.
  - Validate with : Le rapport contient au minimum les fichiers repérés dans `site/src/data/outils/marketing/autres/*chatgpt*.md`, `*openai*.md`, `*gpt*.md`.
  - Notes : Candidats initiaux observés : `12-astuces-chatgpt-qui-vont-vous-faire-passer.md`, `autogpt-lia-qui-va-remplacer-votre-equipe-web.md`, `gpt-5-et-lagi-le-futur-terrifiant-qui-nous-attend.md`, `gpt-et-lia-expliques-ce-que-vous-devez-savoir.md`, `hugging-chat-lalternative-a-chatgpt-qui-va.md`, `le-jailbreak-chatgpt-qui-va-rendre-cette-ia.md`, `les-prompts-chatgpt-qui-vont-revolutionner-votre.md`, `openai-partout-comment-cette-ia-va-changer-votre.md`. `delete-candidate` reste un état de rapport uniquement et n'autorise aucune suppression physique dans ce chantier.

- [ ] Tâche 7 : Appliquer les décisions Lot B sans suppression automatique
  - Fichier : `site/src/data/outils/marketing/autres/*.md`
  - Action : Pour les pages `draft`, ajouter `draft: true`; pour `merge`, ajouter un court état documentaire dans le rapport et modifier seulement la page canonique si une fusion éditoriale est décidée ; pour `keep/enrich`, réécrire selon les mêmes règles de fraîcheur.
  - User story link : Rend le corpus publié plus fiable sans perdre l'historique.
  - Depends on : Tâche 6.
  - Validate with : `pnpm build:full` et inspection des fichiers modifiés.
  - Notes : `delete-candidate` ne produit aucune modification de contenu à lui seul ; c'est un signal de backlog éditorial. Ne pas utiliser un champ `noindex` inventé.

- [ ] Tâche 8 : Ajouter le support technique du noindex par article seulement si nécessaire
  - Fichier : `site/src/content.config.ts`, `site/src/pages/[...slug].astro`, `site/src/layouts/Post.astro`
  - Action : Seulement si le rapport Lot B prouve qu'une page précise doit rester accessible mais non indexée, ajouter un champ frontmatter explicite comme `metaRobots`, le valider dans `site/src/content.config.ts`, transmettre `post.data.metaRobots` depuis `site/src/pages/[...slug].astro`, puis forwarder la prop de `Post.astro` vers `Default.astro` pour vérifier le rendu `<meta name="robots">`.
  - User story link : Permet une décision SEO fine quand `draft` est trop fort.
  - Depends on : Tâche 6.
  - Validate with : `pnpm build:full` et inspection d'une page générée.
  - Notes : Cette tâche est conditionnelle. Si aucune page n'a besoin d'être accessible tout en étant non indexée, elle doit être explicitement sautée et Tâche 9 ne doit pas en dépendre.

- [ ] Tâche 9 : Valider le corpus et le build
  - Fichier : `site/package.json`
  - Action : Lancer les checks adaptés : audit fraîcheur, audit outils si des pages outils sont touchées, puis build complet.
  - User story link : Prouve que les contenus corrigés ne cassent pas le site.
  - Depends on : Tâches 2 à 7, puis Tâche 8 seulement si elle a été explicitement déclenchée par la décision Lot B.
  - Validate with : `python3 scripts/audit_openai_freshness.py`, `pnpm build:full`, et `pnpm audit:outils` si le lot B modifie des pages sous `site/src/data/outils/**`.
  - Notes : `pnpm build` seul est insuffisant parce qu'il est parcours-only.

- [ ] Tâche 10 : Produire un résumé éditorial de clôture
  - Fichier : `site/scripts/openai_freshness_audit.md`
  - Action : Ajouter une section finale listant pages mises à jour, pages passées en draft, fusions recommandées, sources utilisées, risques restants et prochaines vagues possibles.
  - User story link : Rend le chantier auditable et reprenable.
  - Depends on : Tâche 9.
  - Validate with : Le rapport permet à un agent frais de comprendre ce qui a changé sans lire toute la diff.
  - Notes : Mentionner explicitement les claims non vérifiés restants.

# Acceptance Criteria

- [ ] CA 1 : Given les quatre pages prioritaires, when l'audit est terminé, then chacune a soit un contenu actuel et sourcé, soit une note de risque/action claire dans le rapport.
- [ ] CA 2 : Given un claim OpenAI/Codex dans une page modifiée, when on vérifie le contenu, then il est appuyé par docs OpenAI actuelles ou formulé comme incertain/historique.
- [ ] CA 3 : Given un exemple API OpenAI dans `introduction-llm.md`, when on lit le code, then il ne repose plus sur un exemple legacy non contextualisé `chat.completions` + `gpt-4`.
- [ ] CA 4 : Given une phrase avec prix, limites, modèle "latest" ou abonnement, when elle reste dans un article, then elle inclut une source/date ou elle est reformulée pour éviter une vérité intemporelle.
- [ ] CA 5 : Given la page hallucinations, when on cherche des pourcentages, then aucun taux global n'est présenté sans modèle, date, benchmark et source.
- [ ] CA 6 : Given les vieux articles IA marketing du lot B, when on lit le rapport, then chaque fichier a exactement une décision `keep/enrich`, `merge`, `draft`, ou `delete-candidate`.
- [ ] CA 7 : Given une page classée `draft`, when `pnpm build:full` tourne, then elle est exclue par `filterBuildVisiblePosts` sans casser la collection.
- [ ] CA 8 : Given une page classée `noindex` souhaité, when aucun support technique n'a été ajouté, then l'agent ne prétend pas que le noindex existe et reroute vers la tâche 8 ou vers `draft`.
- [ ] CA 9 : Given le chantier terminé, when `pnpm build:full` est lancé, then le build Astro complet réussit.
- [ ] CA 10 : Given un lecteur non technique, when il lit les pages mises à jour, then il comprend ce qui est actuel, ce qui est historique, et ce qui demande vérification avant achat ou implémentation.

# Test Strategy

- Script audit : exécuter `python3 scripts/audit_openai_freshness.py` et vérifier que les fichiers prioritaires et les anciens articles IA marketing ressortent.
- Recherche ciblée : utiliser `rg` pour les termes obsolètes ou sensibles (`chat.completions`, `gpt-4`, `GPT-3.5`, `Web Browsing`, `Claude 3.5`, prix fixes, pourcentages).
- Validation Astro : lancer `pnpm build:full` pour couvrir tout le corpus, pas seulement le périmètre parcours.
- Validation outils : lancer `pnpm audit:outils` si des fichiers sous `site/src/data/outils/**` sont modifiés.
- Relecture éditoriale : vérifier manuellement que les sections modifiées gardent la voix GoCharbon et ne sonnent pas comme une note de documentation vendor.

# Risks

- High SEO risk : passer trop de pages en draft peut retirer du contenu long-tail ; le rapport doit justifier chaque décision.
- High trust risk : garder des claims faux ou invérifiables sur IA, hallucinations, prix ou revenus dégrade la crédibilité.
- Medium implementation risk : ajouter un champ `noindex` sans le relier au layout ne produit aucun effet.
- Medium freshness risk : les docs OpenAI/Codex et pricing changent vite ; revalider au moment exact de la réécriture.
- Medium editorial risk : transformer les pages en documentation froide au lieu de garder la voix Diane.
- Low security risk : aucun secret attendu, mais les exemples API ne doivent jamais contenir de clé réelle.
- Security impact: faible, parce que le chantier reste sur du contenu public et des scripts d'audit locaux. Les seuls risques réalistes sont l'exfiltration accidentelle d'une clé, l'usage d'une capture privée comme source, ou la publication d'un exemple API contenant un secret ; la mitigation est d'interdire ces entrées et de s'en tenir aux docs publiques.

# Execution Notes

- Lire d'abord : `site/src/content.config.ts`, `site/src/utils/build-posts.ts`, `site/src/pages/[...slug].astro`, `site/src/layouts/Post.astro`, puis les quatre pages prioritaires.
- Pour OpenAI, utiliser `openai-docs` et le MCP officiel avant toute source web. Sources déjà consultées pour cadrer la spec : latest model guidance, Codex CLI, code generation/Codex, Codex pricing.
- Pour Anthropic, Google, Mistral, DeepSeek et benchmarks, consulter les docs officielles et sources primaires au moment de l'implémentation ; ne pas extrapoler depuis mémoire modèle.
- Pour les revenus métier, utiliser une veille business prudente et éviter toute promesse de résultat.
- Commencer par l'inventaire scripté, puis Lot A, puis Lot B. Ne pas faire Lot B au fil de l'eau sans rapport, sinon les décisions deviennent impossibles à auditer.
- Stop condition : si plus de 20 pages critiques ressortent avec risque élevé hors liste initiale, arrêter après le rapport et demander une priorisation avant réécriture massive.
- Stop condition : si le rapport Lot B conclut qu'une page doit rester accessible publiquement tout en étant non indexée, déclencher Tâche 8 avant toute prétention de support `noindex`; sinon forcer `draft: true` ou laisser la page publiée et enrichie.

# Open Questions

None.

# Adversarial Review

- La user story est précise : elle nomme l'acteur, le besoin, la raison et le résultat observable.
- Le contrat minimal couvre déclencheur, production attendue, échec et edge case `draft` versus `noindex`.
- Le point le plus fragile est le lot B : sans limite, il peut devenir une refonte de corpus. La spec limite donc le premier lot aux slugs `chatgpt/openai/gpt` repérés et impose un rapport avant modifications.
- Les tâches sont ordonnées : inventaire, quatre pages prioritaires, classification Lot B, application, support SEO éventuel, validation.
- Les consommateurs impactés sont nommés : content collection, route catch-all, layout post, build filtering, scripts d'audit.
- Les cas de bypass sont explicités : `delete-candidate` ne supprime rien, `draft` est la voie par défaut pour retirer une page du build, et `noindex` ne peut pas être revendiqué sans le câblage technique conditionnel de la Tâche 8.
- L'hypothèse dangereuse "un champ frontmatter unused suffit pour le SEO" est explicitement interdite.
- Un agent frais peut implémenter sans l'historique de conversation, à condition de refaire les vérifications docs externes au moment de l'écriture.

## Skill Run History

| Date UTC | Skill | Model | Action | Result | Next step |
|----------|-------|-------|--------|--------|-----------|
| 2026-04-27 | sf-start | unknown | Exécution du chantier OpenAI freshness + validations (`audit_openai_freshness`, `build:full`, `audit:outils`) + traçabilité | implemented | /sf-verify OpenAI freshness audit GoCharbon |
| 2026-04-27 | sf-verify | unknown | Vérification contrat/user story + re-run des audits ciblés (`audit_openai_freshness`, `audit:outils`) + contrôle risques/metadata/docs | verified | /sf-end OpenAI freshness audit GoCharbon |
| 2026-04-27 | sf-end | unknown | Clôture du chantier (TASKS local+master, CHANGELOG, statut de livraison) | closed | /sf-ship OpenAI freshness audit GoCharbon |
| 2026-04-27 | sf-ship | unknown | Commit + push `cb61788` sur `main` (lot OpenAI freshness + dépendances associées) | shipped | None |

## Current Chantier Flow

- sf-spec: done
- sf-ready: ready
- sf-start: implemented
- sf-verify: verified
- sf-end: closed
- sf-ship: shipped
