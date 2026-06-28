---
section: blog
title: 'Langchain : Le Framework Des Agents Conversationnels'
author: Diane
tags:
- Tech
description: 'Tout sur Langchain : le framework de référence pour créer des agents
  IA conversationnels'
pubDate: '2024-03-26'
imgUrl: ../../../../../assets/astro.jpeg
---

# LangChain et LangGraph

## FRAMEWORK AGENTIQUE : LE MASTODONTE QUI A DEFINI L'ÉCOSYSTÈME

### tl;dr

LangChain, c'est le framework qui a demarre la revolution agentique. Lance fin 2022 par Harrison Chase, il est passe de projet experimental a standard de facto en moins de deux ans. Plus de 47 millions de telechargements sur PyPI. Utilise en production par Uber, LinkedIn, Klarna, JP Morgan. En octobre 2025, LangChain 1.0 et LangGraph 1.0 ont atteint la stabilite -- plus de breaking changes toutes les semaines, enfin du solide pour la production.

Mais voila : LangChain original (les "chains") est en train de ceder la place a LangGraph, la nouvelle generation basee sur des graphes d'etats. Si tu debutes aujourd'hui, c'est LangGraph que tu dois apprendre.

---

## L'HISTOIRE : D'UN SIDE PROJECT A UN EMPIRE

### La genese

Harrison Chase, ingenieur chez Robust Intelligence, lance LangChain en octobre 2022 comme un simple projet open-source pour chainer des appels LLM. Le timing est parfait : ChatGPT vient d'exploser, et tout le monde cherche a construire par-dessus.

### La montee en puissance

- **Octobre 2022** : première version Python, concept de "chains" (chainer des operations LLM)
- **Janvier 2023** : explosion de popularite, des milliers d'étoiles GitHub en quelques semaines
- **Mars 2023** : levee de fonds de 10M$ auprès de Benchmark
- **Avril 2023** : version JavaScript/TypeScript lancee
- **Juillet 2023** : seconde levee, 25M$ -- valorisation de 200M$
- **Janvier 2024** : lancement de LangGraph pour les workflows agentiques avances
- **2024** : lancement de LangSmith (observabilite) et LangGraph Cloud
- **Octobre 2025** : LangChain 1.0 et LangGraph 1.0 -- la stabilite enfin

### Le pivot strategique

LangChain Inc. a compris que le futur n'est pas dans les chains lineaires mais dans les graphes d'agents. L'entreprise a progressivement deplace son focus vers LangGraph (orchestration) et LangSmith (monitoring), tout en simplifiant le package LangChain core.

---

## ARCHITECTURE : COMPRENDRE LES CONCEPTS

### LangChain (le package original)

LangChain repose sur quelques abstractions fondamentales :

**Models** -- l'interface unifiee pour appeler n'importe quel LLM (OpenAI, Anthropic, Mistral, Ollama, etc.). Tu ecris le même code, tu changes juste le provider.

**Prompts** -- les templates de prompts avec des variables. Tu definis une structure, tu injectes le contexte dynamique.

**Chains** -- la brique de base historique. Une chain, c'est une sequence d'operations : prendre un prompt, l'envoyer au LLM, traiter la réponse, la passer a l'étape suivante.

**Retrievers** -- la couche RAG. Tu connectes des bases vectorielles (Pinecone, Chroma, Weaviate, pgvector...) et tu recuperes les documents pertinents pour enrichir le contexte.

**Memory** -- la gestion de l'historique de conversation. Plusieurs stratégies : buffer (tout garder), summary (resumer), window (garder les N derniers messages).

**Tools** -- les fonctions que l'agent peut appeler : recherche web, calculatrice, execution de code, appels API.

**Agents** -- l'orchestrateur qui decide quel outil utiliser, quand, et dans quel ordre. C'est la couche "raisonnement" qui transforme un LLM passif en système actif.

### Exemple concret : un agent simple avec LangChain

```python
from langchain_openai import ChatOpenAI
from langchain.agents import create_tool_calling_agent, AgentExecutor
from langchain.tools import tool
from langchain_core.prompts import ChatPromptTemplate

# Definir un outil personnalise
@tool
def rechercher_prix(produit: str) -> str:
    """Recherche le prix d'un produit dans notre base."""
    # Simule une recherche en base de donnees
    prix_db = {
        "macbook pro": "2 499 EUR",
        "iphone 16": "1 229 EUR",
        "airpods pro": "279 EUR",
    }
    return prix_db.get(produit.lower(), "Produit non trouve")

@tool
def calculer_remise(prix: str, pourcentage: int) -> str:
    """Calcule une remise sur un prix donne."""
    montant = float(prix.replace(" EUR", "").replace(" ", ""))
    remise = montant * (1 - pourcentage / 100)
    return f"{remise:.2f} EUR"

# Configurer le LLM
llm = ChatOpenAI(model="gpt-4o", temperature=0)

# Creer le prompt
prompt = ChatPromptTemplate.from_messages([
    ("system", "Tu es un assistant commercial. Utilise les outils disponibles."),
    ("human", "{input}"),
    ("placeholder", "{agent_scratchpad}"),
])

# Assembler l'agent
agent = create_tool_calling_agent(llm, [rechercher_prix, calculer_remise], prompt)
executor = AgentExecutor(agent=agent, tools=[rechercher_prix, calculer_remise])

# Lancer
result = executor.invoke({
    "input": "Quel est le prix du MacBook Pro avec 15% de remise ?"
})
print(result["output"])
# -> L'agent appelle rechercher_prix, puis calculer_remise, et donne la reponse
```

Ce code fait tourner un agent capable de raisonner : il comprend qu'il doit d'abord chercher le prix, puis calculer la remise, et il chaîne les deux outils automatiquement.

---

## LANGGRAPH : LA NOUVELLE GENERATION

### Pourquoi LangGraph ?

LangChain original a un problème : les chains sont lineaires. Tu definis A -> B -> C, et ca s'execute dans l'ordre. Mais un vrai agent a besoin de **boucles** (essayer, echouer, reessayer), de **branches** (si condition X, faire Y, sinon Z), et d'**etat persistant** (reprendre ou il s'est arrete).

LangGraph resout ca avec une abstraction de **graphe d'etats** :

- **Nodes** (noeuds) : chaque étape est une fonction Python. Appeler le LLM, executer un outil, verifier un resultat
- **Edges** (aretes) : les transitions entre les noeuds, qui peuvent être conditionnelles
- **State** (etat) : un objet partage entre tous les noeuds, qui persiste et evolue a chaque étape

### Ce que LangGraph apporte de plus

- **Boucles agentiques** : l'agent peut iterer autant de fois que nécessaire, pas juste un aller-retour
- **Human-in-the-loop** : pause automatique pour demander validation a un humain avant de continuer
- **Persistence** : sauvegarde de l'etat en base de donnees, reprise après un crash
- **Streaming** : envoi des resultats au fur et a mesure, pas juste à la fin
- **Sous-graphes** : decomposer un workflow complexe en sous-graphes reutilisables
- **Time-travel debugging** : remonter dans le temps pour inspecter l'etat a chaque étape

### Exemple : un agent de recherche avec LangGraph

```python
from langgraph.graph import StateGraph, START, END
from langgraph.prebuilt import ToolNode
from langchain_openai import ChatOpenAI
from langchain_core.messages import HumanMessage
from typing import TypedDict, Annotated
from langgraph.graph.message import add_messages

# Definir l'etat du graphe
class AgentState(TypedDict):
    messages: Annotated[list, add_messages]

# Configurer le LLM avec les outils
llm = ChatOpenAI(model="gpt-4o")
llm_with_tools = llm.bind_tools([rechercher_prix, calculer_remise])

# Noeud : appeler le LLM
def call_model(state: AgentState):
    response = llm_with_tools.invoke(state["messages"])
    return {"messages": [response]}

# Condition : continuer ou terminer ?
def should_continue(state: AgentState):
    last_message = state["messages"][-1]
    if last_message.tool_calls:
        return "tools"   # L'agent veut utiliser un outil
    return END           # L'agent a termine

# Construire le graphe
graph = StateGraph(AgentState)
graph.add_node("agent", call_model)
graph.add_node("tools", ToolNode([rechercher_prix, calculer_remise]))

graph.add_edge(START, "agent")
graph.add_conditional_edges("agent", should_continue, {"tools": "tools", END: END})
graph.add_edge("tools", "agent")  # Apres l'outil, retour a l'agent

# Compiler
app = graph.compile()

# Executer
result = app.invoke({
    "messages": [HumanMessage("Prix du MacBook Pro avec 15% de remise ?")]
})
print(result["messages"][-1].content)
```

La difference avec l'exemple precedent : ici, tu vois et controles chaque étape. Tu decides quand l'agent boucle, quand il s'arrete, quand il attend un humain. C'est plus de code, mais c'est toi le pilote.

---

## LANGSMITH : L'OBSERVABILITE

LangSmith est la plateforme de monitoring de LangChain Inc. Elle te permet de :

- **Tracer** chaque appel LLM, chaque invocation d'outil, chaque étape du graphe
- **Debugger** en remontant dans le temps pour voir exactement ce qui s'est passe
- **Evaluer** la qualité des reponses avec des datasets de test
- **Monitorer** les coûts, la latence, les taux d'erreur en production
- **Collaborer** en équipe avec des annotations et des commentaires sur les traces

Prix : plan gratuit genereux (5 000 traces/mois), puis a partir de 39$/mois pour les équipes.

C'est l'equivalent de Datadog ou Sentry, mais specialise pour les applications LLM. Si tu deploies LangGraph en production, LangSmith est quasi indispensable pour comprendre ce que fait ton agent.

---

## AVANTAGES

- **Écosystème massif** -- 700+ integrations, 47M+ telechargements, la plus grande communauté du secteur
- **Documentation riche** -- des centaines de tutoriels, cookbook, templates, exemples
- **LangGraph 1.0 stable** -- plus de breaking changes, API figee, prêt pour la production
- **Flexibilite** -- fonctionne avec tous les providers LLM (OpenAI, Anthropic, Mistral, Ollama, Groq...)
- **LangSmith integre** -- observabilite de classe enterprise, time-travel debugging
- **Open-source** -- MIT license, pas de lock-in
- **Utilise en production** -- Uber, LinkedIn, Klarna, JP Morgan, Elastic, Replit

---

## INCONVENIENTS

- **Abstractions lourdes** -- beaucoup de couches d'abstraction, le code peut devenir opaque
- **Courbe d'apprentissage** -- la documentation est vaste mais fragmentee entre LangChain, LangGraph, LangSmith
- **Historique de breaking changes** -- avant la 1.0, une mise a jour tous les 3 jours cassait le code existant. C'est fini, mais la reputation persiste
- **Bloat** -- beaucoup de packages, beaucoup de dependances, des imports qui font 5 lignes
- **Sur-ingenierie possible** -- on peut vite se perdre dans les abstractions alors qu'un appel API direct suffirait
- **Documentation dispersee** -- le passage de LangChain a LangGraph a cree une double documentation parfois confuse

---

## LANGCHAIN vs LANGGRAPH : QUAND UTILISER QUOI

| Critere | LangChain (chains) | LangGraph |
|---|---|---|
| **Workflow** | Lineaire, simple | Complexe, avec boucles et branches |
| **Contrôle** | Le framework decide | Tu decides chaque transition |
| **Etat** | Memoire de conversation basique | Etat structure, persistant, versionne |
| **Human-in-the-loop** | Difficile a implementer | Natif, avec points de pause |
| **Debugging** | Logs classiques | Time-travel, replay d'execution |
| **Cas d'usage** | Chatbot RAG simple, pipeline lineaire | Agent autonome, workflow multi-etapes |
| **Recommandation 2025** | Pour les cas simples uniquement | Pour tout nouveau projet agentique |

La recommandation officielle de LangChain Inc. est claire : **utilise LangGraph pour tout nouveau projet**. Les chains classiques restent pour les cas ultra-simples (chatbot RAG basique, pipeline de traduction).

---

## ALTERNATIVES A CONSIDERER

### LlamaIndex

Plus specialise dans le RAG que dans les agents. Si ton use case principal est "brancher un LLM sur des documents", LlamaIndex est plus simple et plus performant que LangChain pour ca. Mais il est moins adapte pour les workflows agentiques complexes.

### Haystack (deepset)

Framework open-source europeen, pipeline-based. Moins d'abstractions que LangChain, plus proche du code. Bonne alternative si tu trouves LangChain trop complexe et que tu veux rester en Python pur.

### PydanticAI

Framework minimaliste de l'équipe Pydantic. Tout est type-safe, validation stricte des inputs/outputs. Si tu es allergique aux abstractions de LangChain et que tu veux du code Python propre et previsible.

### DSPy (Stanford)

Approche radicalement differente : au lieu d'ecrire des prompts, tu definis des modules declaratifs et DSPy optimise automatiquement les prompts. Ideal pour la recherche et les cas ou tu veux optimiser systematiquement la qualité des reponses.

---

## CAS D'USAGE CONCRETS

### Chatbot RAG pour documentation interne

Le use case classique. Tu indexes les documents de ton entreprise dans une base vectorielle, et l'agent repond aux questions des employes en citant les sources. LangChain excelle ici avec ses 30+ integrations de bases vectorielles.

### Agent de recherche web

Un agent qui recoit une question, cherche sur le web, synthetise les resultats, verifie les faits, et produit un rapport structure. LangGraph est ideal : le graphe permet les boucles de verification et la persistence de l'etat de recherche.

### Pipeline de contenu automatise

Générer des articles de blog optimises SEO : recherche de mots-clés, analyse de la concurrence, redaction, optimisation, relecture. Chaque étape est un noeud LangGraph avec son propre prompt et ses propres outils.

### Assistant de code

Un agent qui lit ton codebase, comprend l'architecture, génère du code, l'execute dans un sandbox, et itere jusqu'a ce que les tests passent. LangGraph avec son execution de code sandboxed et ses boucles conditionnelles est fait pour ca.

### Agent commercial

Un agent qui qualifie les leads entrants : analyse l'email, recherche l'entreprise, enrichit le CRM, et propose une réponse personnalisee. LangGraph avec human-in-the-loop pour valider avant envoi.

---

## POUR COMMENCER

### Installation

```bash
pip install langchain langchain-openai langgraph
```

### Ressources

- Documentation officielle : [python.langchain.com](https://python.langchain.com)
- LangGraph : [langchain-ai.github.io/langgraph](https://langchain-ai.github.io/langgraph/)
- LangSmith : [smith.langchain.com](https://smith.langchain.com)
- GitHub : [github.com/langchain-ai/langchain](https://github.com/langchain-ai/langchain)
- Templates : [github.com/langchain-ai/langchain/templates](https://github.com/langchain-ai/langchain/tree/master/templates)

### Conseil pragmatique

Ne tombe pas dans le piege de vouloir utiliser toutes les abstractions. Commence par un agent LangGraph simple avec 2-3 outils. Ajoute de la complexite uniquement quand tu en as besoin. 80% des use cases se resolvent avec un graphe de 3-5 noeuds.
