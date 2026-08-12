---
section: blog
title: 'ARCHITECTURE DES AGENTS IA : LES ROUAGES INTERNES'
author: Diane
tags:
- Tech
description: 'Plongée technique dans l''architecture des agents IA : comment ils sont
  construits et comment ils fonctionnent'
pubDate: '2024-03-26'
imgUrl: ../../../../assets/astro.jpeg
---

# Architecture des Agents IA : Anatomie d'une Intelligence Artificielle

Comprendre comment un agent IA est construit, c'est comme ouvrir le capot d'une voiture. Tu n'as pas besoin de devenir mecanicien pour conduire, mais savoir ce qui se passe sous le capot t'aide a choisir le bon vehicule, a detecter les pannes et a ne pas te faire arnaquer par le garagiste.

Ce guide decompose l'architecture d'un agent IA en ses composants fondamentaux. Pas de jargon inutile. Des schemas, du pseudo-code et des analogies concretes.

---

## ARCHITECTURE DE BASE : LES QUATRE PILIERS

Tout agent IA, du plus simple chatbot au systeme multi-agents le plus complexe, repose sur quatre composants fondamentaux :

```
┌─────────────────────────────────────────────┐
│                  AGENT IA                    │
│                                             │
│  ┌───────────┐   ┌──────────────────────┐  │
│  │ PERCEPTION│──→│    RAISONNEMENT      │  │
│  │ (Input)   │   │    (LLM / Logique)   │  │
│  └───────────┘   └──────────┬───────────┘  │
│                              │              │
│  ┌───────────┐   ┌──────────▼───────────┐  │
│  │ MEMOIRE   │◄─→│      ACTION          │  │
│  │ (Contexte)│   │  (Outils / Output)   │  │
│  └───────────┘   └──────────────────────┘  │
│                                             │
└─────────────────────────────────────────────┘
```

### 1. Perception -- Les Yeux et les Oreilles

La perception, c'est tout ce que l'agent "voit" de son environnement. Contrairement a un humain, un agent IA n'a pas de sens physiques. Ses capteurs sont numeriques :

- **Input utilisateur** : le prompt, la question, l'instruction
- **APIs** : donnees en temps reel (CRM, Google Analytics, base de donnees)
- **Fichiers** : documents, images, code source, spreadsheets
- **Evenements** : webhooks, notifications, alertes systeme
- **Resultats de recherche** : web search, base de connaissances interne

L'enjeu critique : la qualite de la perception determine la qualite de tout le reste. Un agent qui recoit des donnees incompletes ou erronees prendra de mauvaises decisions -- meme avec le meilleur LLM du monde.

### 2. Raisonnement -- Le Cerveau

Le raisonnement, c'est la ou le LLM entre en jeu. C'est le composant qui prend les inputs, les croise avec la memoire et decide quoi faire.

Mais attention : le LLM n'est pas le seul moyen de raisonner. Selon la complexite du probleme :

| Methode de raisonnement | Description | Quand l'utiliser |
|------------------------|-------------|-----------------|
| **Regles codees en dur** | if/else classique | Taches simples et previsibles |
| **LLM simple** | un seul appel au modele | Questions directes |
| **Chain-of-Thought** | le modele raisonne etape par etape | Problemes multi-etapes |
| **Tree-of-Thought** | explore plusieurs pistes en parallele | Problemes ambigus |
| **Multi-agents** | plusieurs LLMs qui debattent | Decisions critiques |

### 3. Action -- Les Mains

L'action, c'est la capacite de l'agent a **modifier le monde**. C'est ce qui differencie un agent d'un simple chatbot. Un chatbot genere du texte. Un agent *fait des choses* :

- Envoyer un email
- Modifier un fichier
- Appeler une API
- Executer du code
- Creer une tache dans un outil de gestion
- Publier un post sur les reseaux

Chaque action est implementee comme un **outil** (tool) que l'agent peut appeler. C'est un concept cle qu'on va detailler plus bas.

### 4. Memoire -- Le Disque Dur

La memoire permet a l'agent de retenir des informations entre les interactions. Sans memoire, chaque echange repart de zero.

---

## LE LLM COMME CERVEAU : COMMENT CA MARCHE VRAIMENT

Le Large Language Model est le moteur central de la plupart des agents modernes. Mais il ne faut pas le mythifier. Un LLM, c'est un **moteur de prediction de texte extremement puissant** qui :

1. Recoit un texte d'entree (prompt + contexte + historique)
2. Genere un texte de sortie (reponse, plan d'action, appel d'outil)

### Le prompt systeme : l'ADN de l'agent

C'est le prompt systeme qui transforme un LLM generique en agent specialise. Il definit :

```python
system_prompt = """
Tu es un agent commercial specialise en SaaS B2B.

ROLE : Analyser les leads entrants et qualifier leur potentiel.

REGLES :
- Classe chaque lead en Hot / Warm / Cold
- Pour les leads Hot, redige un email de prise de contact
- Pour les leads Cold, ajoute-les a la sequence nurturing
- Ne contacte jamais un lead deja en discussion avec un commercial

OUTILS DISPONIBLES :
- search_crm(nom) : cherche un lead dans le CRM
- send_email(to, subject, body) : envoie un email
- add_to_sequence(lead_id, sequence_name) : ajoute a une sequence
- create_task(assignee, description) : cree une tache pour un commercial

FORMAT DE REPONSE :
Reflechis etape par etape avant d'agir. Explique ton raisonnement.
"""
```

### Le choix du modele

Tous les LLM ne se valent pas pour le role de "cerveau" :

- **GPT-4o, Claude Sonnet** : bon rapport qualite/prix pour la plupart des agents
- **Claude Opus, GPT-4** : raisonnement superieur pour les taches complexes
- **Modeles open source (Llama, Mistral)** : quand tu veux heberger toi-meme ou reduire les couts
- **Modeles legers (GPT-4o-mini, Haiku)** : pour les taches simples a haut volume

Regle de base : utilise le **modele le moins cher qui fait le travail correctement**. Ne mets pas Claude Opus sur un tri de spam.

---

## OUTILS ET ACTIONS : L'INTERFACE AVEC LE MONDE REEL

Les outils sont ce qui donne a l'agent ses "mains". Sans outils, un agent n'est qu'un chatbot eloquent.

### Anatomie d'un outil

Chaque outil est defini par trois elements :

```python
outil = {
    "nom": "recherche_web",
    "description": "Effectue une recherche sur Internet et retourne
                    les 5 premiers resultats avec titre et resume.",
    "parametres": {
        "requete": "string - la requete de recherche",
        "langue": "string - fr ou en (defaut: fr)"
    }
}
```

Le LLM lit la description de l'outil et decide quand l'utiliser. C'est pourquoi **la qualite de la description est cruciale**. Une description vague = un outil mal utilise.

### Categories d'outils courants

**Recherche d'information** :
- Recherche web (Google, Bing, Exa)
- Recherche dans une base de donnees
- Lecture de fichiers ou documents
- Appel d'APIs externes

**Actions sur le monde** :
- Envoi d'emails, messages Slack
- Creation/modification de fichiers
- Appels API (CRM, ERP, outils de gestion)
- Execution de code

**Outils internes** :
- Calculatrice (pour les calculs precis)
- Generateur de code
- Outil de reflexion (l'agent se parle a lui-meme pour mieux raisonner)

### Securite des outils

C'est le point critique. Un outil mal securise, c'est un agent qui peut :
- Supprimer des fichiers importants
- Envoyer des emails a des clients avec du contenu hallucinant
- Modifier des donnees de production

**Regles de base** :
- Principe du moindre privilege : ne donne que les permissions necessaires
- Validation des parametres avant execution
- Logs de chaque appel d'outil
- Mode dry-run pour tester sans consequences

---

## MEMOIRE : CE QUE L'AGENT RETIENT

### Memoire court terme -- La fenetre de contexte

C'est la "memoire de travail" de l'agent : tout ce qui tient dans le contexte du LLM lors d'un echange. Elle inclut le prompt systeme, l'historique de conversation et les resultats des outils.

**Limites** :
- Taillee fixe (128K tokens pour GPT-4o, 200K pour Claude)
- Plus le contexte est long, plus c'est couteux
- Le LLM peut "oublier" des informations au milieu d'un long contexte (le probleme du "lost in the middle")

### Memoire long terme -- La base de connaissances

Pour retenir des informations entre les sessions, l'agent a besoin d'un stockage externe :

**Vector Database (Pinecone, Weaviate, ChromaDB)** :
- Stocke des informations sous forme de vecteurs
- Permet la recherche semantique ("trouve-moi les infos similaires a cette question")
- C'est le coeur de l'architecture RAG (Retrieval-Augmented Generation)

**Base relationnelle (PostgreSQL, SQLite)** :
- Pour les donnees structurees : historique des actions, preferences utilisateur, metriques
- Requetable de facon precise

**Fichiers** :
- Markdown, JSON, YAML pour les notes, les plans, les configurations
- Simple mais efficace pour les petits volumes

### L'architecture RAG en 30 secondes

RAG = l'agent cherche l'information pertinente AVANT de repondre.

```
Question utilisateur
       │
       ▼
┌─────────────────┐     ┌──────────────────┐
│ Recherche dans   │────→│ Documents trouves │
│ la base vectorielle│    │ (top 5 resultats) │
└─────────────────┘     └────────┬─────────┘
                                 │
                                 ▼
                    ┌────────────────────┐
                    │ LLM genere une     │
                    │ reponse basee sur  │
                    │ les documents      │
                    └────────────────────┘
```

C'est ce qui permet a un agent de repondre sur **tes donnees** (documentation interne, historique client, base produit) au lieu d'inventer des reponses.

---

## PLANNING : DECOMPOSER POUR MIEUX REGNER

Le planning, c'est la capacite de l'agent a transformer un objectif vague en une sequence d'actions concretes.

### Chain-of-Thought (CoT) -- Penser a voix haute

Le LLM verbalise son raisonnement etape par etape :

```
Objectif : "Prepare un rapport des ventes du mois"

Pensee 1 : Je dois d'abord recuperer les donnees de vente du CRM.
Pensee 2 : Ensuite je calcule les totaux par produit et par region.
Pensee 3 : Je compare avec le mois precedent pour identifier les tendances.
Pensee 4 : Je redige le rapport avec les chiffres et les insights.
Pensee 5 : Je mets en forme et je genere le PDF.
```

### Tree-of-Thought (ToT) -- Explorer plusieurs pistes

Au lieu d'un chemin lineaire, l'agent explore plusieurs approches en parallele et choisit la meilleure :

```
Objectif : "Augmente le taux de conversion de la landing page"

Piste A : Modifier le titre (test A/B)
  → Cout : faible | Impact estime : moyen
Piste B : Ajouter des temoignages clients
  → Cout : moyen | Impact estime : fort
Piste C : Simplifier le formulaire
  → Cout : faible | Impact estime : fort

Decision : Commencer par C (meilleur ratio impact/cout)
```

### Task Decomposition -- Diviser pour regner

Pour les projets complexes, l'agent decompose en sous-taches independantes :

```python
def planifier_campagne_email(brief):
    sous_taches = [
        "1. Analyser le segment cible dans le CRM",
        "2. Rediger l'objet et le corps de l'email",
        "3. Creer les variantes A/B",
        "4. Configurer l'envoi dans l'outil emailing",
        "5. Definir les metriques de succes",
        "6. Planifier le rapport de performance a J+7"
    ]
    return sous_taches
```

---

## LA BOUCLE AGENT : LE COEUR DU SYSTEME

Tout converge dans la **boucle agent** (agent loop). C'est le cycle que l'agent repete jusqu'a atteindre son objectif :

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ┌─────────┐    ┌──────────┐    ┌────────────┐    │
│   │  PENSER │───→│ DECIDER  │───→│   AGIR     │    │
│   │ (reason)│    │ (plan)   │    │ (tool call)│    │
│   └─────────┘    └──────────┘    └─────┬──────┘    │
│        ▲                               │           │
│        │         ┌──────────┐          │           │
│        └─────────│ OBSERVER │◄─────────┘           │
│                  │ (result) │                       │
│                  └──────────┘                       │
│                                                      │
│   Condition d'arret : objectif atteint OU            │
│   nombre max d'iterations OU erreur critique         │
│                                                      │
└──────────────────────────────────────────────────────┘
```

### Exemple concret d'une boucle

```
Iteration 1:
  Penser  : "L'utilisateur veut les KPIs de la semaine. Je dois
             interroger Google Analytics."
  Decider : Appeler l'outil google_analytics_get_report
  Agir    : google_analytics_get_report(period="last_7_days")
  Observer: Sessions: 12 340, Taux rebond: 42%, Conversions: 87

Iteration 2:
  Penser  : "J'ai les chiffres GA. Je dois aussi les donnees de vente
             du CRM pour un rapport complet."
  Decider : Appeler l'outil crm_get_sales
  Agir    : crm_get_sales(period="last_7_days")
  Observer: 23 ventes, CA: 45 600 EUR, Panier moyen: 1 982 EUR

Iteration 3:
  Penser  : "J'ai toutes les donnees. Je peux synthetiser le rapport."
  Decider : Generer le rapport final
  Agir    : Formater et presenter les KPIs
  Observer: Rapport genere avec succes

→ Objectif atteint. Fin de la boucle.
```

### Les conditions d'arret

Un agent sans condition d'arret, c'est une boucle infinie qui brule ton budget API. Trois mecanismes de securite :

1. **Objectif atteint** : l'agent juge qu'il a termine
2. **Nombre max d'iterations** : generalement 5-15 etapes
3. **Budget tokens atteint** : limite financiere sur l'appel

---

## ORCHESTRATION : UN AGENT OU PLUSIEURS

### Agent unique

Un seul agent gere tout. Simple a deployer, facile a debugger.

```
Utilisateur → Agent (LLM + outils) → Resultat
```

Suffisant pour 80% des cas d'usage. Commence toujours par la.

### Multi-agents orchestre

Plusieurs agents specialises, coordonnes par un orchestrateur. Pour en savoir plus, consulte notre guide sur les [agents collaboratifs](/tech/ia/agents/agents-collaboratifs).

```
Utilisateur → Orchestrateur → Agent Recherche
                            → Agent Analyse
                            → Agent Redaction
                            ← Synthese → Resultat
```

### Quand passer au multi-agents

- Quand un seul agent ne peut pas tout faire (trop d'outils, contexte trop large)
- Quand des specialites differentes sont requises
- Quand tu veux de la redondance (un agent verifie le travail d'un autre)

---

## GARDE-FOUS : LA SECURITE D'ABORD

Un agent mal securise peut faire des degats reels. Voici les garde-fous essentiels.

### Human-in-the-loop

L'agent demande confirmation avant les actions irreversibles :

```python
def executer_action(action, parametres):
    if action.est_irreversible():
        confirmation = demander_a_humain(
            f"L'agent veut executer : {action.description}\n"
            f"Parametres : {parametres}\n"
            f"Confirmer ? (oui/non)"
        )
        if not confirmation:
            return "Action annulee par l'utilisateur"
    return action.executer(parametres)
```

### Sandboxing

L'agent s'execute dans un environnement isole. Il ne peut pas acceder a tout le systeme, seulement aux ressources autorisees.

### Limites de tokens et de cout

```python
config_agent = {
    "max_iterations": 10,
    "max_tokens_par_iteration": 4000,
    "budget_total_tokens": 50000,     # ~0.50$ par execution
    "timeout_secondes": 120
}
```

### Logs et auditabilite

Chaque action de l'agent est loguee : ce qu'il a pense, ce qu'il a decide, ce qu'il a fait, ce qu'il a observe. Tu dois pouvoir rejouer n'importe quelle execution pour comprendre ce qui s'est passe.

---

## ARCHITECTURE DE REFERENCE : TOUT ASSEMBLER

Voici a quoi ressemble une architecture complete d'agent IA pour un cas d'usage business :

```
┌──────────────────────────────────────────────────────────────┐
│                     APPLICATION                              │
│                                                              │
│  ┌────────────┐  ┌──────────────────────────────────────┐   │
│  │ Interface   │  │           AGENT CORE                 │   │
│  │ (chat, API, │─→│                                      │   │
│  │  webhook)   │  │  ┌──────────┐  ┌────────────────┐   │   │
│  └────────────┘  │  │ Prompt    │  │  Boucle Agent   │   │   │
│                  │  │ Systeme   │  │  (ReAct loop)   │   │   │
│                  │  └──────────┘  └───────┬──────────┘   │   │
│                  │                        │              │   │
│                  │  ┌─────────────────────▼──────────┐   │   │
│                  │  │           LLM                   │   │   │
│                  │  │  (GPT-4o / Claude / Mistral)    │   │   │
│                  │  └────────────────────────────────┘   │   │
│                  └──────────────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────┐  ┌────────────────────────────┐   │
│  │     OUTILS            │  │        MEMOIRE              │   │
│  │                       │  │                             │   │
│  │  - Recherche web      │  │  - Court terme (contexte)   │   │
│  │  - CRM API            │  │  - Long terme (vector DB)   │   │
│  │  - Email              │  │  - Historique (PostgreSQL)   │   │
│  │  - Code execution     │  │                             │   │
│  │  - File operations    │  │                             │   │
│  └──────────────────────┘  └────────────────────────────┘   │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐   │
│  │                GARDE-FOUS                             │   │
│  │  - Human-in-the-loop  - Token limits  - Sandboxing   │   │
│  │  - Logs/Audit         - Rate limiting  - Rollback    │   │
│  └──────────────────────────────────────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## CODE MINIMAL : UN AGENT EN 20 LIGNES

Pour rendre tout ca concret, voici un agent minimal en Python avec LangChain :

```python
from langchain.agents import AgentExecutor, create_react_agent
from langchain_openai import ChatOpenAI
from langchain.tools import Tool

# 1. Le cerveau (LLM)
llm = ChatOpenAI(model="gpt-4o", temperature=0)

# 2. Les outils (actions)
tools = [
    Tool(
        name="recherche_web",
        func=search_web,
        description="Cherche des informations sur Internet"
    ),
    Tool(
        name="envoyer_email",
        func=send_email,
        description="Envoie un email. Params: to, subject, body"
    )
]

# 3. Le prompt systeme (identite)
prompt = "Tu es un assistant commercial. Aide l'utilisateur
          a qualifier ses leads et a les contacter."

# 4. Assembler et executer
agent = create_react_agent(llm, tools, prompt)
executor = AgentExecutor(
    agent=agent,
    tools=tools,
    max_iterations=10,   # Garde-fou
    verbose=True         # Logs
)

# 5. Lancer
resultat = executor.invoke({
    "input": "Trouve les infos sur l'entreprise Acme Corp
              et envoie un email de prospection a leur CTO"
})
```

Ce code minimal contient deja les quatre piliers : perception (input utilisateur), raisonnement (LLM), action (outils), et un garde-fou (max_iterations).

---

## En Savoir Plus

- [Introduction aux agents IA](/tech/ia/agents/introduction-agents) -- vue d'ensemble
- [Types d'agents](/tech/ia/agents/types-agents) -- reactifs, deliberatifs, hybrides
- [Agents autonomes](/tech/ia/agents/agents-autonomes) -- l'autonomie en detail
- [Frameworks](/tech/ia/agents/frameworks) -- LangChain, CrewAI, AutoGen, LangGraph

---

L'architecture d'un agent IA n'est pas un mystere reservé aux chercheurs. C'est une combinaison de composants que tu peux assembler, tester et ameliorer incrementalement. Commence par un agent simple (un LLM, deux outils, une boucle). Ajoute de la memoire quand tu en as besoin. Passe au multi-agents quand un seul ne suffit plus. Et n'oublie jamais les garde-fous.
