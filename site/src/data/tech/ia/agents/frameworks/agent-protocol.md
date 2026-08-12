---
section: blog
title: 'Agent Protocol : Le Standard Des Agents IA'
author: Diane
tags:
- Tech
description: Comprendre et utiliser le protocole standard pour la communication entre
  agents IA
pubDate: '2024-03-26'
imgUrl: ../../../../../assets/astro.jpeg
---

# Agent Protocol, MCP et A2A

## PROTOCOLES AGENTS : LA GUERRE DES STANDARDS QUI VA DEFINIR LE FUTUR

### tl;dr

Imagine un monde ou chaque navigateur web parlerait un langage different. Tu ne pourrais pas ouvrir un site concu pour Chrome dans Firefox. C'etait le cas avant HTTP.

On est exactement la avec les agents IA en 2025. Chaque framework (LangChain, AutoGen, CrewAI, OpenAI) a sa propre facon de gerer les outils et la communication. Un agent construit avec LangGraph ne peut pas utiliser les outils d'un agent CrewAI. Impossible de les faire collaborer sans ecrire du code de "plomberie" custom.

Trois protocoles tentent de resoudre ce probleme :
- **MCP** (Model Context Protocol) par Anthropic -- comment un agent accede aux outils et aux donnees
- **A2A** (Agent-to-Agent) par Google -- comment les agents communiquent entre eux
- **Agent Protocol** -- la tentative originale de standardisation (avant MCP et A2A)

C'est une bataille qui va definir l'infrastructure de l'IA pour la prochaine decennie. Et ca te concerne directement, meme si tu n'ecris pas une ligne de code.

---

## LE PROBLEME : DES AGENTS EN SILOS

### Pourquoi la standardisation est critique

Aujourd'hui, brancher un agent sur un outil (Gmail, Slack, GitHub, une base de donnees), ca veut dire :

1. Trouver si une integration existe pour ton framework specifique
2. Si oui, l'installer et la configurer (souvent fragile)
3. Si non, ecrire un connecteur custom (des heures de travail)
4. Recommencer pour chaque nouvel outil
5. Recommencer si tu changes de framework

C'est comme l'ere pre-USB : chaque peripherique avait son propre connecteur. MCP, c'est le USB-C des agents IA.

### Le cout de la fragmentation

Pour un entrepreneur, la fragmentation signifie :
- **Lock-in framework** -- une fois que tu as investi dans LangChain, changer pour AutoGen coute cher
- **Integrations limitees** -- chaque framework ne couvre qu'une partie des outils existants
- **Maintenance lourde** -- les connecteurs customs cassent a chaque mise a jour
- **Pas de collaboration inter-agents** -- tes agents vivent dans des univers paralleles

---

## MCP : LE MODEL CONTEXT PROTOCOL D'ANTHROPIC

### Le standard qui s'impose

MCP (Model Context Protocol) est un protocole ouvert publie par Anthropic en novembre 2024. En quelques semaines, il a accumule des dizaines de milliers d'etoiles GitHub et est devenu le standard de facto pour connecter les agents aux outils.

### Comment ca marche

MCP suit une architecture **client-serveur** :

- **MCP Server** : un programme qui expose des outils (fonctions) via un protocole standardise. Par exemple, un serveur MCP pour GitHub expose les fonctions "creer une issue", "lister les PR", "merger une branche"
- **MCP Client** : l'agent (ou le framework) qui se connecte au serveur et appelle les outils
- **Transport** : la communication passe par stdin/stdout (local), HTTP/SSE (reseau), ou WebSocket

```
Agent (Client MCP)  <-->  Serveur MCP GitHub
                    <-->  Serveur MCP Slack
                    <-->  Serveur MCP PostgreSQL
                    <-->  Serveur MCP Google Drive
```

### Exemple concret : brancher un agent sur GitHub via MCP

```python
# Avec le Claude Agent SDK + MCP
from claude_agent_sdk import query, ClaudeAgentOptions

options = ClaudeAgentOptions(
    mcp_servers={
        "github": {
            "type": "http",
            "url": "https://mcp-github.example.com",
        }
    },
    allowed_tools=["mcp__github__*"],
)

# L'agent peut maintenant utiliser tous les outils GitHub
async for message in query(
    prompt="Cree une issue sur le repo gocharbon/site "
           "pour signaler le bug de pagination sur la page blog",
    options=options,
):
    if message.subtype == "success":
        print(message.result)
```

L'agent n'a pas besoin de savoir comment fonctionne l'API GitHub. Il voit juste une liste d'outils ("create_issue", "list_pull_requests", etc.) et les utilise naturellement.

### Pourquoi MCP a explose

- **Simplicite** -- un serveur MCP, c'est quelques dizaines de lignes de code
- **Universel** -- fonctionne avec n'importe quel LLM et n'importe quel framework
- **Ecosysteme** -- des centaines de serveurs MCP publics en quelques mois (GitHub, Slack, PostgreSQL, Notion, Google Drive, Jira...)
- **Anthropic push** -- Claude Desktop, Claude Code, et le Claude Agent SDK supportent MCP nativement
- **Adoption large** -- OpenAI, Google, Microsoft, et tous les grands frameworks ont ajoute le support MCP

### Ce que MCP ne fait pas

MCP resout la connexion **agent -> outils**. Mais il ne resout pas la communication **agent -> agent**. C'est la que A2A entre en jeu.

---

## A2A : L'AGENT-TO-AGENT DE GOOGLE

### Le chaignon manquant

Google a lance le protocole A2A (Agent-to-Agent) en avril 2025. Si MCP est le "comment un agent utilise un outil", A2A est le "comment deux agents collaborent sur une tache".

### Le concept

A2A standardise la facon dont les agents se decouvrent et collaborent :

**Agent Cards** -- chaque agent publie une "carte de visite" en JSON qui decrit ses capacites, ses inputs attendus, et ses outputs. Un agent peut decouvrir les capacites d'un autre agent en lisant sa carte.

```json
{
  "name": "agent-traducteur",
  "description": "Traduit du texte entre 50+ langues",
  "capabilities": ["translation", "language_detection"],
  "input_schema": {
    "text": "string",
    "target_language": "string"
  },
  "output_schema": {
    "translated_text": "string",
    "detected_language": "string"
  }
}
```

**Task lifecycle** -- A2A definit un cycle de vie pour les taches inter-agents : soumission, acceptation, progression, completion, echec. Ca permet des workflows asynchrones et de longue duree.

**Communication** -- les agents echangent via des messages structures avec des "parts" (texte, fichiers, donnees structurees), pas juste du texte brut.

### MCP vs A2A : complementaires, pas concurrents

| Aspect | MCP | A2A |
|---|---|---|
| **Connexion** | Agent -> Outil | Agent -> Agent |
| **Analogie** | USB-C (brancher un peripherique) | HTTP (communication entre serveurs) |
| **Decouverte** | Le client connait le serveur | Les agents se decouvrent via Agent Cards |
| **Communication** | Synchrone (appel de fonction) | Asynchrone (taches longues possibles) |
| **Createur** | Anthropic | Google |
| **Maturite** | Standard de facto (2024-2025) | Adoption plus lente (2025) |

Comme l'explique bien Cisco dans leur analyse : MCP est le "southbound interface" (l'agent parle aux outils en dessous de lui), et A2A est le "northbound/east-west interface" (les agents parlent entre eux au meme niveau). Dans un systeme complet, tu utilises les deux.

---

## LES APPROCHES PROPRIETAIRES

### OpenAI Agents SDK

Lance en mars 2025, l'Agents SDK d'OpenAI prend une approche minimaliste et opinionnee :

**Les primitives :**
- **Agent** -- un LLM + des instructions + des outils
- **Handoffs** -- un agent peut passer le controle a un autre agent (le "transfert d'appel")
- **Guardrails** -- des validations qui verifient les inputs/outputs
- **Tracing** -- observabilite integree pour debugger

```python
from agents import Agent, Runner

# Definir un agent triage
triage_agent = Agent(
    name="Triage",
    instructions="Tu es un agent de triage. Redirige les questions "
                 "techniques vers tech_agent et les questions "
                 "commerciales vers sales_agent.",
    handoffs=[tech_agent, sales_agent],
)

# Definir un agent technique
tech_agent = Agent(
    name="Support Tech",
    instructions="Tu es un expert technique. Resous les problemes.",
    tools=[search_docs, check_status],
)

# Definir un agent commercial
sales_agent = Agent(
    name="Sales",
    instructions="Tu es un commercial. Reponds aux questions de prix.",
    tools=[get_pricing, schedule_demo],
)

# Lancer
result = await Runner.run(triage_agent, "Mon API renvoie une erreur 500")
print(result.final_output)
```

**Forces** : ultra-simple, integration native avec les modeles OpenAI (GPT-4o, o1, o3), outils built-in (web search, file search, code interpreter), tracing gratuit.

**Limites** : lie a l'ecosysteme OpenAI, moins flexible que LangGraph, pas de persistence d'etat native, pas de boucles complexes.

L'Agents SDK supporte desormais MCP pour les outils externes, ce qui est un signal fort de l'adoption du protocole.

### Claude Agent SDK (Anthropic)

Lance en septembre 2025, le Claude Agent SDK prend une approche radicalement differente : donner a l'agent les memes outils qu'un developpeur humain.

**La philosophie :**
- Acces au terminal (commandes bash, git, npm...)
- Acces au systeme de fichiers (lire, ecrire, chercher)
- Connexion reseau (API calls, web browsing)
- MCP natif (brancher n'importe quel serveur MCP)
- Sous-agents pour la parallelisation

```typescript
import { query, tool, createSdkMcpServer } from "@anthropic-ai/claude-agent-sdk";
import { z } from "zod";

// Creer un outil custom
const customServer = createSdkMcpServer({
  name: "mes-outils",
  version: "1.0.0",
  tools: [
    tool(
      "analyser_concurrent",
      "Analyse le site web d'un concurrent et extrait les infos cles",
      { url: z.string().describe("URL du site concurrent") },
      async (args) => {
        // Logique d'analyse...
        return {
          content: [{ type: "text", text: `Analyse de ${args.url}...` }]
        };
      }
    )
  ]
});

// Lancer l'agent
for await (const message of query({
  prompt: "Analyse les 3 principaux concurrents de GoCharbon "
         "et fais un rapport comparatif",
  options: {
    mcpServers: { "custom": customServer },
    allowedTools: ["mcp__custom__*"],
  }
})) {
  if (message.type === "result" && message.subtype === "success") {
    console.log(message.result);
  }
}
```

**Forces** : agent vraiment autonome (terminal + fichiers + reseau), MCP natif, sous-agents, verification hierarchique des resultats.

**Limites** : lie a Claude, plus complexe a securiser (acces terminal), plus cher en tokens (l'agent est verbeux car il "pense a voix haute").

### Google ADK (Agent Development Kit)

Google a lance son ADK pour s'integrer nativement avec Vertex AI et Google Cloud :

- Support natif de A2A et MCP
- Bidirectional streaming
- Integration Google Workspace (Gmail, Docs, Calendar...)
- Deploiement sur Agentspace (la plateforme d'agents de Google)

C'est le choix logique si tu es dans l'ecosysteme Google Cloud, mais l'adoption est encore limitee par rapport aux autres.

---

## L'ENJEU : QUI DEFINIRA LE "HTTP DES AGENTS" ?

### La comparaison avec le web

Dans les annees 90, plusieurs protocoles rivalisaient pour devenir le standard du web : Gopher, WAIS, HTTP. HTTP a gagne grace a sa simplicite et son ouverture. On assiste au meme phenomene avec les agents.

### Les 3 scenarios possibles

**Scenario 1 : MCP + A2A deviennent les standards**
MCP pour agent-outil, A2A pour agent-agent. Les deux sont ouverts, transferes a la Linux Foundation. C'est le scenario le plus probable a date.

**Scenario 2 : un geant impose son protocole**
OpenAI ou Google pousse assez fort pour que son approche proprietaire devienne le standard de facto, comme Google l'a fait avec Android.

**Scenario 3 : fragmentation durable**
Comme les ecosystemes mobiles (iOS vs Android), plusieurs protocoles coexistent et les developpeurs doivent supporter plusieurs standards.

### La situation en 2025-2026

MCP a clairement pris l'avantage pour la connexion agent-outil. Son adoption est massive : Anthropic, OpenAI, Microsoft, Google, et des centaines de startups le supportent. C'est devenu le "USB-C des agents".

A2A avance plus lentement. La communication agent-agent est un probleme plus complexe (decouverte, confiance, gestion d'etat longue duree), et les use cases sont moins immediats pour la plupart des developpeurs.

Le Microsoft Agent Framework, en integrant MCP, A2A, et AG-UI (agent-UI), est le premier a tenter d'unifier les trois couches : agent-outil, agent-agent, et agent-humain.

---

## IMPACT POUR LES ENTREPRENEURS

### Pourquoi la standardisation te concerne

Meme si tu ne codes pas, ces protocoles vont impacter ta facon de travailler :

**Interoperabilite des outils** -- tes agents pourront se brancher sur n'importe quel service via MCP. Plus besoin de chercher si ton framework supporte Notion, Slack, ou ton CRM. Si un serveur MCP existe, ca marche.

**Pas de lock-in** -- tu peux changer de framework (LangGraph -> CrewAI) sans reecrire tes integrations. Les serveurs MCP sont framework-agnostiques.

**Marketplace d'agents** -- A2A va permettre de publier tes agents comme des services que d'autres agents peuvent utiliser. Imagine : tu crees un agent expert en SEO, et d'autres entreprises paient pour que leurs agents collaborent avec le tien.

**Cout reduit** -- les integrations standardisees coutent moins cher a maintenir que les connecteurs customs. Un serveur MCP communautaire est gratuit.

**Securite** -- les protocoles standard incluent des mecanismes d'authentification et d'autorisation. C'est plus sur que des hacks maison.

### Cas d'usage concret : ton ecosysteme d'agents

Imagine que tu geres un e-commerce. Avec MCP + A2A, tu pourrais avoir :

```
Agent SEO (CrewAI)
  |-- MCP --> Google Search Console
  |-- MCP --> Semrush API
  |-- A2A --> Agent Redacteur

Agent Redacteur (LangGraph)
  |-- MCP --> WordPress API
  |-- MCP --> Base de donnees produits
  |-- A2A --> Agent SEO (pour les mots-cles)

Agent Support (OpenAI Agents SDK)
  |-- MCP --> CRM (HubSpot)
  |-- MCP --> Base de connaissances
  |-- A2A --> Agent Redacteur (pour les FAQ)

Agent Analytics (Claude Agent SDK)
  |-- MCP --> Google Analytics
  |-- MCP --> Stripe
  |-- A2A --> Tous les autres (rapports)
```

Chaque agent utilise le framework le plus adapte a sa tache. MCP les connecte aux outils. A2A leur permet de collaborer. C'est le futur de l'automatisation.

---

## L'AGENT PROTOCOL ORIGINAL

Avant MCP et A2A, il y avait l'Agent Protocol original -- une tentative de standardiser une API REST pour communiquer avec n'importe quel agent. Le projet definissait des endpoints simples :

- `POST /agent/tasks` -- creer une tache
- `GET /agent/tasks/{id}` -- suivre l'avancement
- `POST /agent/tasks/{id}/steps` -- executer l'etape suivante
- `GET /agent/tasks/{id}/artifacts` -- recuperer les resultats

L'idee etait bonne mais l'adoption a ete limitee. MCP l'a largement depasse en termes d'adoption car il resout un probleme plus immediat (connecter un agent a des outils) avec une implementation plus simple.

L'Agent Protocol reste une reference historique interessante et certains de ses concepts (comme le cycle de vie des taches) se retrouvent dans A2A.

---

## POUR COMMENCER AVEC MCP

### Installer un serveur MCP existant

Des centaines de serveurs MCP sont disponibles. Voici les plus utiles :

```bash
# Serveur MCP pour les fichiers locaux
npx @anthropic-ai/mcp-server-filesystem /chemin/vers/dossier

# Serveur MCP pour GitHub
npx @anthropic-ai/mcp-server-github

# Serveur MCP pour PostgreSQL
npx @anthropic-ai/mcp-server-postgres "postgresql://user:pass@host/db"

# Serveur MCP pour Slack
npx @anthropic-ai/mcp-server-slack
```

### Creer ton propre serveur MCP

```python
from mcp.server import Server
from mcp.types import Tool, TextContent
import mcp.server.stdio

server = Server("mon-serveur")

@server.list_tools()
async def list_tools():
    return [
        Tool(
            name="rechercher_client",
            description="Recherche un client par nom ou email",
            inputSchema={
                "type": "object",
                "properties": {
                    "query": {"type": "string", "description": "Nom ou email"}
                },
                "required": ["query"]
            }
        )
    ]

@server.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "rechercher_client":
        # Ta logique de recherche ici
        client = rechercher_dans_crm(arguments["query"])
        return [TextContent(type="text", text=f"Client trouve : {client}")]

async def main():
    async with mcp.server.stdio.stdio_server() as (read, write):
        await server.run(read, write)

if __name__ == "__main__":
    import asyncio
    asyncio.run(main())
```

En 50 lignes de Python, tu as un serveur MCP fonctionnel que n'importe quel agent compatible peut utiliser.

---

## Ressources

- MCP Specification : [modelcontextprotocol.io](https://modelcontextprotocol.io)
- A2A Specification : [google.github.io/A2A](https://google.github.io/A2A)
- MCP Servers : [github.com/modelcontextprotocol/servers](https://github.com/modelcontextprotocol/servers)
- Claude Agent SDK : [platform.claude.com/docs/agent-sdk](https://platform.claude.com/docs/en/agent-sdk)
- OpenAI Agents SDK : [github.com/openai/openai-agents-python](https://github.com/openai/openai-agents-python)

---

## Le mot de la fin

Si tu retiens une seule chose de cet article : **MCP est le protocole a adopter maintenant**. Il est deja le standard de facto, supporte par tous les grands acteurs, et il te protege du lock-in framework.

A2A viendra ensuite, quand tes agents auront besoin de collaborer entre eux. Mais pour l'instant, la priorite est de connecter tes agents aux bons outils via MCP.

Et garde un oeil sur le Microsoft Agent Framework qui tente d'unifier les trois couches (MCP + A2A + AG-UI). Si ca marche, ca pourrait devenir la reference enterprise pour l'orchestration d'agents.
