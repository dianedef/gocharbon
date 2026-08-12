---
section: blog
title: 'Autogen : Les Agents Multi-Tâches De Microsoft'
author: Diane
tags:
- Tech
description: Guide complet sur Autogen, le framework de Microsoft pour créer des agents
  IA polyvalents
pubDate: '2024-03-26'
imgUrl: ../../../../../assets/astro.jpeg
---

# AutoGen et Microsoft Agent Framework

## MULTI-AGENTS : L'EQUIPE VIRTUELLE SORTIE DES LABOS DE MICROSOFT

### tl;dr

AutoGen, c'est le framework de Microsoft Research qui a popularise un concept puissant : au lieu d'un seul agent qui fait tout, tu crees une **equipe d'agents** qui discutent entre eux pour resoudre un probleme. Un agent code, un autre revise, un troisieme execute les tests, un quatrieme synthetise les resultats. Comme une equipe humaine, mais en automatique.

Lance fin 2023, AutoGen a rapidement depasse les 40 000 etoiles GitHub. Mais l'histoire est mouvementee : un fork communautaire (AG2), une refonte complete (v0.4), et finalement une fusion avec Semantic Kernel pour creer le **Microsoft Agent Framework**, annonce en Release Candidate en fevrier 2026.

Si tu t'interesses aux systemes multi-agents, c'est l'ecosysteme a comprendre -- meme s'il est en pleine transition.

---

## L'HISTOIRE : DES LABOS A L'ENTERPRISE

### La genese

AutoGen est ne dans les labos de Microsoft Research, developpe par une equipe dirigee par Chi Wang et d'autres chercheurs. Le papier de recherche original explorait une idee simple mais puissante : des agents IA qui collaborent via des conversations structurees, comme des humains dans une reunion.

### La chronologie

- **Septembre 2023** : publication du papier de recherche et sortie d'AutoGen v0.1. Le concept de "multi-agent conversation" explose sur GitHub
- **Fin 2023** : 25 000 etoiles en quelques mois. La communaute s'enflamme
- **Debut 2024** : lancement d'AutoGen Studio, une interface graphique pour creer des workflows multi-agents sans coder
- **Decembre 2024** : le fork AG2 (anciennement AutoGen Community) est cree par des contributeurs frustres par le rythme de developpement
- **Janvier 2025** : AutoGen v0.4, une refonte complete avec une architecture asynchrone, event-driven, et modulaire
- **Fevrier 2025** : Gagan Bansal (Microsoft Research) presente la vision v0.4 au Microsoft Research Forum
- **Aout 2025** : AutoGen est utilise en production dans des equipes enterprise pour de l'automatisation complexe
- **Fevrier 2026** : Microsoft annonce le **Microsoft Agent Framework** en Release Candidate, qui fusionne AutoGen et Semantic Kernel en un seul framework unifie

### La controverse du fork AG2

En 2024, une partie de la communaute a cree AG2, un fork d'AutoGen. Les raisons : frustration face aux breaking changes, manque de communication de Microsoft Research, et divergence sur la direction du projet. AG2 a developpe ses propres features, mais avec l'annonce du Microsoft Agent Framework, la question de la perennite du fork se pose.

---

## LE CONCEPT CLE : CONVERSATIONS ENTRE AGENTS

### La philosophie AutoGen

Alors que LangGraph pense en "graphes d'etats" et CrewAI en "equipes de travail", AutoGen pense en **conversations**. Chaque agent est un participant dans une discussion structuree. Un agent propose, un autre critique, un troisieme valide, et la conversation continue jusqu'a convergence.

C'est inspire de la facon dont les equipes humaines resolvent les problemes : par le dialogue, la contradiction, et l'iteration.

### Les types d'agents

**AssistantAgent** -- l'agent qui raisonne et genere du contenu. Il a acces a un LLM et peut appeler des outils. C'est le "cerveau" de l'equipe.

**UserProxyAgent** -- l'agent qui represente l'humain. Il peut executer du code, valider des resultats, et poser des questions. Il sert de pont entre le systeme et l'utilisateur.

**ConversableAgent** -- la classe de base dont heritent tous les agents. N'importe quel agent peut envoyer et recevoir des messages, appeler des outils, et executer du code.

### Les patterns de conversation

**Two-agent chat** -- le pattern le plus simple : deux agents qui dialoguent. L'un propose, l'autre critique ou execute.

**Sequential chat** -- une chaine de conversations. Agent A parle avec Agent B, le resultat passe a Agent C, etc.

**Group chat** -- plusieurs agents dans la meme conversation, avec un "manager" qui decide qui parle quand. Le manager peut utiliser un LLM pour choisir l'agent le plus pertinent a chaque tour.

**Nested chat** -- des conversations imbriquees. Un agent peut lancer une sous-conversation avec d'autres agents pour resoudre un sous-probleme avant de revenir a la conversation principale.

---

## CODE : DEUX AGENTS QUI COLLABORENT

### Exemple 1 : un assistant + un executeur de code

```python
from autogen import AssistantAgent, UserProxyAgent

# L'assistant qui raisonne et genere du code
assistant = AssistantAgent(
    name="assistant",
    llm_config={
        "model": "gpt-4o",
        "api_key": "ta-cle-api",
    },
    system_message="""Tu es un data analyst expert en Python.
    Quand on te pose une question, tu ecris du code Python
    pour y repondre. Sois precis et commente ton code.""",
)

# Le proxy qui execute le code et renvoie les resultats
executor = UserProxyAgent(
    name="executor",
    human_input_mode="NEVER",  # Pas d'intervention humaine
    code_execution_config={
        "work_dir": "output",
        "use_docker": True,  # Execution sandboxee dans Docker
    },
    max_consecutive_auto_reply=5,
)

# Lancer la conversation
executor.initiate_chat(
    assistant,
    message="Analyse ce dataset CSV et donne-moi les 5 produits "
            "les plus vendus avec un graphique matplotlib.",
)
```

Ce qui se passe :
1. L'executor envoie la demande a l'assistant
2. L'assistant ecrit du code Python
3. L'executor execute le code dans un container Docker
4. Si ca plante, l'assistant voit l'erreur et corrige
5. La boucle continue jusqu'a ce que le code fonctionne

### Exemple 2 : un GroupChat avec 3 agents specialises

```python
from autogen import AssistantAgent, UserProxyAgent, GroupChat, GroupChatManager

# Agent 1 : le redacteur
redacteur = AssistantAgent(
    name="redacteur",
    llm_config={"model": "gpt-4o"},
    system_message="""Tu es un redacteur de contenu web.
    Tu ecris des articles engageants et optimises SEO.
    Tu proposes un brouillon, puis tu integres les retours.""",
)

# Agent 2 : le reviseur SEO
reviseur_seo = AssistantAgent(
    name="reviseur_seo",
    llm_config={"model": "gpt-4o"},
    system_message="""Tu es un expert SEO. Tu analyses les textes
    et proposes des ameliorations : mots-cles, structure H1/H2,
    meta description, densite de mots-cles, liens internes.""",
)

# Agent 3 : le fact-checker
fact_checker = AssistantAgent(
    name="fact_checker",
    llm_config={"model": "gpt-4o"},
    system_message="""Tu es un fact-checker rigoureux. Tu verifies
    les affirmations factuelles, les chiffres, les dates.
    Si quelque chose est douteux, tu le signales.""",
)

# L'humain (validation finale)
humain = UserProxyAgent(
    name="humain",
    human_input_mode="TERMINATE",  # Intervient seulement a la fin
    code_execution_config=False,
)

# Creer le GroupChat
group_chat = GroupChat(
    agents=[humain, redacteur, reviseur_seo, fact_checker],
    messages=[],
    max_round=12,
    speaker_selection_method="auto",  # Le LLM choisit qui parle
)

manager = GroupChatManager(
    groupchat=group_chat,
    llm_config={"model": "gpt-4o"},
)

# Lancer
humain.initiate_chat(
    manager,
    message="Ecris un article de 800 mots sur les tendances SEO 2025. "
            "Le redacteur ecrit, le reviseur SEO optimise, "
            "le fact-checker verifie les chiffres.",
)
```

Le GroupChatManager orchestre la conversation. A chaque tour, il decide quel agent doit parler en fonction du contexte. Le redacteur ecrit, le reviseur SEO critique et propose des ameliorations, le fact-checker verifie, et la boucle continue jusqu'a ce que tout le monde soit satisfait.

---

## AUTOGEN v0.4 : LA REFONTE

La version 0.4 est une reecriture complete avec une architecture event-driven :

### Nouvelles features

- **Architecture asynchrone** -- tout est base sur des evenements asynchrones, plus scalable
- **Type safety** -- interfaces fortement typees, fini les bugs silencieux
- **Streaming natif** -- resultats en temps reel, pas seulement a la fin
- **Serialisation d'etat** -- sauvegarder et reprendre une conversation multi-agents
- **Memoire d'agent** -- chaque agent peut avoir une memoire persistante
- **Observabilite** -- integration avec OpenTelemetry pour le tracing distribue
- **Execution de code sandboxee** -- Docker natif pour l'execution securisee

### AgentChat : la couche haut niveau

AutoGen v0.4 introduit une distinction entre le "core" (bas niveau, event-driven) et "AgentChat" (haut niveau, les abstractions familières). AgentChat conserve la simplicite d'utilisation d'AutoGen original tout en beneficiant du moteur v0.4 en dessous.

---

## AUTOGEN STUDIO : LE NO-CODE

AutoGen Studio est une interface web qui te permet de creer des workflows multi-agents visuellement :

- **Drag and drop** -- glisse des agents sur un canvas, connecte-les
- **Templates** -- des workflows preconstruits pour demarrer vite
- **Test interactif** -- teste tes agents directement dans l'interface
- **Export** -- genere le code Python correspondant

C'est l'equivalent du CrewAI Studio mais cote Microsoft. Ideal si tu veux prototyper avant de coder.

---

## MICROSOFT AGENT FRAMEWORK : LE FUTUR

En fevrier 2026, Microsoft a annonce le **Microsoft Agent Framework** en Release Candidate. C'est la fusion d'AutoGen et de Semantic Kernel en un seul framework :

### Ce qui change

- **API unifiee** -- un seul modele de programmation pour Python et .NET
- **Interoperabilite** -- support natif de MCP, A2A, et AG-UI (le nouveau protocole d'interface agent-UI)
- **Multi-provider** -- Azure OpenAI, OpenAI, Anthropic Claude, AWS Bedrock, Ollama, GitHub Copilot
- **Workflows graph-based** -- orchestration sequentielle, concurrente, et conditionnelle
- **Checkpointing** -- sauvegarder et reprendre des workflows complexes
- **Observabilite** -- integration native avec Azure Monitor et OpenTelemetry

### Migration

Microsoft fournit un guide de migration detaille d'AutoGen vers Agent Framework. Les concepts sont similaires, mais l'API a change. Si tu as un projet AutoGen existant, la migration est documenter pas a pas.

---

## AVANTAGES

- **Multi-agents natif** -- c'est l'ADN du framework, pas un ajout apres-coup
- **Patterns de conversation riches** -- two-agent, group chat, nested chat, sequential
- **Execution de code sandboxee** -- Docker natif, securite par defaut
- **Microsoft backing** -- equipe de recherche solide, ressources importantes
- **AutoGen Studio** -- interface no-code pour le prototypage
- **Open-source** -- MIT license
- **Interoperabilite 2026** -- MCP + A2A + AG-UI dans le Microsoft Agent Framework

---

## INCONVENIENTS

- **Ecosysteme fragmente** -- AutoGen v0.2, v0.4, AG2, Microsoft Agent Framework : 4 versions qui coexistent, c'est confus
- **Documentation en transition** -- une partie de la doc est obsolete, une autre est pour le nouveau framework
- **Debugging multi-agents difficile** -- quand 4 agents conversent et que ca deraille, retrouver la cause est penible
- **Configuration complexe** -- plus de parametres a regler que les frameworks minimalistes comme OpenAI Agents SDK
- **Moins d'integrations** -- l'ecosysteme de connecteurs est moins riche que LangChain
- **Breaking changes en cours** -- la transition vers Microsoft Agent Framework implique encore des changements d'API

---

## AUTOGEN vs CREWAI : QUAND CHOISIR L'UN OU L'AUTRE

| Critere | AutoGen | CrewAI |
|---|---|---|
| **Philosophie** | Conversations entre agents | Equipe avec roles et taches |
| **Configuration** | Plus de code, plus de controle | Moins de code, plus declaratif |
| **Execution de code** | Docker sandbox natif | Via outils externes |
| **No-code** | AutoGen Studio | CrewAI Studio |
| **Ecosysteme** | Microsoft, enterprise | Startup, plus agile |
| **Multi-agents** | Tres flexible (group chat, nested) | Role-based, plus structure |
| **Production** | En transition vers Agent Framework | CrewAI AMP Enterprise |
| **Choix si** | Tu veux du controle fin sur les conversations | Tu veux assembler vite une equipe d'agents |

### En resume

**Choisis AutoGen/Microsoft Agent Framework** si tu as besoin de patterns de conversation complexes (debats, revisions iteratives, code execution), si tu es dans l'ecosysteme Microsoft/Azure, ou si tu veux le support enterprise a long terme.

**Choisis CrewAI** si tu veux monter une equipe d'agents rapidement, si tu preferes une approche declarative (definir des roles et des taches plutot que des patterns de conversation), ou si tu veux un framework plus stable maintenant.

---

## CAS D'USAGE CONCRETS

### Equipe de developpement virtuelle

L'architecte conçoit la solution, le developpeur code, le testeur ecrit et execute les tests, le reviseur fait la code review. Le GroupChat orchestre les echanges. AutoGen est ne pour ce type de workflow.

### Equipe de recherche

Un agent cherche des papiers academiques, un autre les synthetise, un troisieme critique la methodologie, un quatrieme redige le rapport final. Les nested chats permettent a chaque agent de faire ses propres sous-recherches.

### Pipeline de contenu editoriel

Le redacteur produit, le SEO optimise, le fact-checker verifie, l'editeur valide. La conversation continue jusqu'a ce que l'article passe tous les controles qualite.

### Automatisation d'analyse de donnees

L'analyste recoit une question business, ecrit du code Python pour interroger la base, execute le code dans Docker, interprete les resultats, et genere un rapport visuel. L'execution sandboxee est critique ici.

### Support client niveau 2

Un agent triage la demande, un agent technique diagnostique le probleme, un agent redige la reponse, et un agent qualite verifie avant envoi. Le human-in-the-loop intervient pour les cas sensibles.

---

## POUR COMMENCER

### Installation

```bash
# AutoGen v0.4
pip install autogen-agentchat autogen-ext

# Ou le nouveau Microsoft Agent Framework (RC)
pip install microsoft-agent-framework
```

### Ressources

- AutoGen : [microsoft.github.io/autogen](https://microsoft.github.io/autogen/)
- Microsoft Agent Framework : [learn.microsoft.com/agent-framework](https://learn.microsoft.com/en-us/agent-framework/)
- AutoGen Studio : [autogenstudio.ai](https://autogenstudio.ai)
- AG2 (fork) : [ag2.ai](https://ag2.ai)
- GitHub : [github.com/microsoft/autogen](https://github.com/microsoft/autogen)

### Conseil pragmatique

Si tu commences aujourd'hui, pars directement sur le **Microsoft Agent Framework** (Release Candidate). Il integre le meilleur d'AutoGen et de Semantic Kernel, et c'est la ou Microsoft concentre ses efforts. AutoGen v0.2 est en fin de vie, v0.4 est une etape intermediaire, et AG2 risque de perdre en pertinence face au framework unifie.
