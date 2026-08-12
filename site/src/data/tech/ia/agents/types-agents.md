---
section: blog
title: 'TYPES D''AGENTS IA : GUIDE COMPLET'
author: Diane
tags:
- Tech
description: 'Découvrez les différents types d''agents IA : de l''agent réactif simple
  aux systèmes multi-agents complexes'
pubDate: '2024-03-26'
imgUrl: ../../../../assets/astro.jpeg
---

# Types d'Agents IA : La Carte des Especes

Tous les agents IA ne se ressemblent pas. Certains reagissent au quart de tour sans reflechir. D'autres planifient pendant dix secondes avant de bouger. D'autres encore travaillent en equipe. Comprendre ces differences, c'est choisir le bon outil pour le bon probleme -- et eviter de deployer un missile pour tuer une mouche.

Ce guide te presente les cinq grandes familles d'agents, avec des analogies concretes, des exemples business et un tableau comparatif pour t'y retrouver.

---

## AGENTS REACTIFS : LE THERMOSTAT

### Le principe

Un agent reactif fonctionne sur une logique simple : **si condition, alors action**. Pas de memoire. Pas de plan. Il percoit un stimulus et reagit immediatement, comme un thermostat qui allume le chauffage quand la temperature descend sous 19 degres.

### Comment ca marche

```
SI email contient "urgent" → transferer au manager
SI stock < 10 unites       → envoyer alerte restock
SI note client < 2/5       → escalader au support senior
```

L'agent ne se demande pas *pourquoi* le stock est bas, ni si l'alerte a deja ete envoyee hier. Il execute sa regle, point final.

### Exemples concrets

- **Chatbot FAQ** : l'utilisateur tape "livraison", le bot repond le paragraphe sur les delais de livraison. Pas de comprehension profonde, juste du pattern matching.
- **Filtre anti-spam** : si l'email contient 3 mots-cles suspects + expediteur inconnu, il va dans les spams.
- **Alerte monitoring** : le serveur met plus de 3 secondes a repondre, on envoie un Slack au DevOps.
- **Auto-repondeur e-commerce** : commande expediee, email de confirmation envoye.

### Quand l'utiliser

Quand le probleme est bien defini, repetitif et ne necessite aucun jugement. Si tu peux ecrire la logique en une phrase "si X alors Y", un agent reactif suffit. Pas besoin d'un LLM a 0.03$ le token pour ca.

### Limites

Aucune adaptation. Si le monde change (nouveau type de spam, nouveau format de ticket), l'agent ne s'adapte pas seul. Il faut mettre a jour ses regles manuellement.

---

## AGENTS DELIBERATIFS : LE STRATEGE

### Le principe

Un agent deliberatif possede un **modele interne du monde**. Il ne reagit pas immediatement : il reflechit. Il decompose le probleme, evalue les options, planifie une sequence d'actions, puis execute. C'est la difference entre un joueur d'echecs debutant (qui bouge le premier pion qu'il voit) et un grand maitre (qui calcule 5 coups a l'avance).

### Comment ca marche

L'agent utilise des techniques de raisonnement :

- **Chain-of-Thought (CoT)** : il verbalise son raisonnement etape par etape. "D'abord je dois trouver les donnees, ensuite je les analyse, puis je redige le rapport."
- **Task decomposition** : il casse un objectif complexe en sous-taches executables.
- **Evaluation** : il pese le pour et le contre de chaque option avant de choisir.

```python
# Pseudo-code d'un agent deliberatif
def agent_deliberatif(objectif):
    # 1. Comprendre le contexte
    contexte = analyser_environnement()

    # 2. Decomposer en sous-taches
    plan = decomposer(objectif, contexte)
    # Ex: ["chercher donnees", "analyser tendances", "rediger rapport"]

    # 3. Evaluer chaque etape
    for etape in plan:
        options = generer_options(etape)
        meilleure = evaluer_et_choisir(options)
        executer(meilleure)

    # 4. Verifier le resultat
    return verifier_objectif_atteint(objectif)
```

### Exemples concrets

- **Agent de recherche** : tu lui demandes "Analyse le marche des SaaS B2B en France". Il planifie : chercher les rapports recents, extraire les chiffres cles, croiser les sources, rediger une synthese structuree.
- **Agent de code** : tu lui dis "Ajoute un systeme d'authentification". Il analyse l'architecture existante, choisit la librairie adaptee, planifie les modifications fichier par fichier, puis code.
- **Agent de planification projet** : il recoit un brief, identifie les dependances entre taches, propose un retroplanning et ajuste si une contrainte change.

### Quand l'utiliser

Quand le probleme est complexe, ambigu ou necessite plusieurs etapes. Quand la reponse n'est pas un simple "si/alors" mais demande de la reflexion.

### Limites

Plus lent et plus couteux. Chaque etape de raisonnement consomme des tokens. Et si le modele interne est faux (hallucination sur l'etat du monde), le plan entier deraille.

---

## AGENTS HYBRIDES : LE MEILLEUR DES DEUX MONDES

### Le principe

Un agent hybride combine la **reactivite** (reponse rapide aux cas simples) et la **deliberation** (reflexion profonde pour les cas complexes). C'est le modele dominant aujourd'hui, et il porte un nom que tu croiseras partout : **ReAct** (Reasoning + Acting).

### Le pattern ReAct

L'agent alterne entre la reflexion et l'action dans une boucle :

```
Pensee : "L'utilisateur veut les chiffres de vente Q3. Je dois d'abord
          verifier dans le CRM, puis calculer les totaux."
Action  : appel API CRM → recuperer les donnees Q3
Observation : 147 ventes, CA total 234 000 EUR
Pensee : "J'ai les donnees. Maintenant je dois les formater et
          comparer avec Q2 pour donner du contexte."
Action  : calcul comparatif Q2 vs Q3
Observation : +23% de croissance
Pensee : "J'ai tout. Je peux repondre."
Reponse : "Les ventes Q3 sont de 147 unites pour 234K EUR,
           soit +23% vs Q2."
```

### Pourquoi c'est puissant

L'agent decide **dynamiquement** s'il doit reflechir plus ou agir tout de suite. Une question simple ("Quel est mon CA du mois ?") declenche une action directe. Une question complexe ("Pourquoi mes ventes baissent depuis mars ?") active le mode deliberatif.

### Exemples concrets

- **Assistant commercial** : questions simples (prix d'un produit) → reponse instantanee. Questions complexes (analyse de churn) → decomposition et recherche multi-sources.
- **Agent DevOps** : alerte simple (disque plein) → action immediate (nettoyage). Incident complexe (latence en cascade) → diagnostic multi-etapes.
- **Claude, ChatGPT avec outils** : quand tu donnes a un LLM l'acces a des outils (recherche web, calcul, code), il fonctionne en mode ReAct.

### Quand l'utiliser

C'est le choix par defaut pour la plupart des cas d'usage business. Si tu ne sais pas quel type d'agent deployer, commence par un hybride.

---

## AGENTS MULTI-AGENTS : L'EQUIPE

### Le principe

Pourquoi se limiter a un seul agent quand on peut en deployer toute une equipe ? Un systeme multi-agents fait collaborer **plusieurs agents specialises**, chacun avec son role, ses outils et ses competences. Exactement comme une equipe humaine.

### Les modeles de collaboration

**Hierarchique** : un agent "chef de projet" distribue les taches aux agents specialises et synthetise les resultats.

```
         Chef de projet
        /      |       \
  Redacteur  Analyste  Developpeur
```

**Peer-to-peer** : les agents communiquent entre eux sans hierarchie, par echange de messages.

**Debat** : deux agents argumentent pour et contre une decision, un troisieme tranche.

**Pipeline** : chaque agent traite sa partie et passe le resultat au suivant, comme une chaine de montage.

### Exemples concrets

- **Equipe de content marketing** : Agent recherchiste (trouve les sources) → Agent redacteur (ecrit l'article) → Agent SEO (optimise les mots-cles) → Agent editeur (verifie la qualite).
- **Pipeline de developpement** : Agent architecte → Agent developpeur → Agent testeur → Agent reviewer.
- **Analyse concurrentielle** : un agent par concurrent, chacun scrape et analyse sa cible, puis un agent synthetise.

### Frameworks cles

- **CrewAI** : le plus accessible. Tu definis des "agents" avec des roles et des "tasks", et CrewAI orchestre la collaboration.
- **AutoGen (Microsoft)** : agents qui dialoguent entre eux pour resoudre des problemes.
- **LangGraph** : graphes d'agents avec des etats et des transitions.

En savoir plus dans notre [guide des frameworks](/tech/ia/agents/frameworks).

### Quand l'utiliser

Quand la tache est trop complexe pour un seul agent, ou quand la specialisation apporte un gain de qualite. Attention au cout : 4 agents = 4x les appels API.

---

## AUTONOMES VS SEMI-AUTONOMES : LE CURSEUR DE CONTROLE

Au-dela du *type* d'agent, il y a la question du **niveau d'autonomie**. C'est un curseur, pas un interrupteur.

### Agent semi-autonome (humain dans la boucle)

L'agent propose, l'humain dispose. Avant chaque action importante (envoyer un email, modifier un fichier, passer une commande), l'agent demande confirmation.

```
Agent : "Je vais envoyer cet email de relance au client X.
         Voici le brouillon. Tu confirmes ?"
Toi   : "Oui" / "Non, modifie le ton"
```

C'est le mode le plus sur pour commencer. Tu gardes le controle tout en automatisant le travail de preparation.

### Agent autonome (supervisé a posteriori)

L'agent agit sans demander, mais tu peux verifier apres coup. Il envoie les emails, cree les rapports, met a jour les bases de donnees. Tu consultes les logs et tu interviens si necessaire.

C'est le Graal de la productivite -- mais ca demande une confiance solide dans l'agent et des garde-fous techniques (limites de tokens, sandboxing, rollback possible).

Pour aller plus loin, consulte notre article dedie sur les [agents autonomes](/tech/ia/agents/agents-autonomes).

---

## TABLEAU COMPARATIF : QUEL AGENT POUR QUEL BESOIN

| Type | Complexite | Cout | Vitesse | Fiabilite | Cas d'usage type |
|------|-----------|------|---------|-----------|-----------------|
| **Reactif** | Faible | Tres bas | Instantane | Tres haute (previsible) | Alertes, FAQ, filtrage |
| **Deliberatif** | Haute | Moyen-eleve | Lent (secondes) | Moyenne (depend du LLM) | Recherche, analyse, planning |
| **Hybride (ReAct)** | Variable | Moyen | Adaptatif | Bonne | Assistant general, DevOps |
| **Multi-agents** | Tres haute | Eleve (multiplicatif) | Variable | Bonne (si bien orchestre) | Content pipeline, dev team |
| **Autonome** | Variable | Variable | Rapide (pas d'attente humaine) | Risquee sans garde-fous | Monitoring, reporting, scraping |

---

## ARBRE DE DECISION : QUEL TYPE CHOISIR

Pose-toi ces questions dans l'ordre :

**1. La tache est-elle simple et repetitive ?**
→ Oui : agent **reactif**. Pas besoin de plus.

**2. La tache necessite-t-elle de la reflexion ou plusieurs etapes ?**
→ Oui : agent **deliberatif** ou **hybride**.

**3. La tache implique-t-elle plusieurs specialites differentes ?**
→ Oui : systeme **multi-agents**.

**4. Quel niveau de supervision peux-tu assurer ?**
→ Supervision active : semi-autonome (human-in-the-loop).
→ Supervision passive : autonome avec logs et alertes.
→ Pas de supervision : ne deploie pas encore.

**5. Quel est ton budget tokens ?**
→ Serre : reactif ou deliberatif simple.
→ Confortable : hybride ou multi-agents.

---

## EXEMPLES PAR PROFIL D'ENTREPRENEUR

### Le freelance solo

Tu geres tout seul. Un agent hybride qui t'aide a trier tes emails, preparer tes devis et relancer les clients en retard de paiement. Semi-autonome : il prepare, tu valides.

### La petite equipe (2-10 personnes)

Un systeme multi-agents pour automatiser le pipeline de contenu : un agent qui genere les briefs a partir des tendances SEO, un qui redige les premiers jets, un qui optimise. Un humain valide chaque etape.

### Le e-commercant

Un agent reactif pour les alertes stock et les reponses automatiques aux questions frequentes. Un agent deliberatif pour analyser les tendances de vente et suggerer des ajustements de prix.

### L'agence

Un systeme multi-agents complet : un agent par client pour le reporting, un agent central pour la synthese, des agents specialises pour chaque canal (SEO, ads, social). Le tout orchestre par un framework comme [CrewAI](/tech/ia/agents/frameworks/index).

---

## En Savoir Plus

- [Introduction aux agents IA](/tech/ia/agents/introduction-agents) -- les fondamentaux
- [Architecture des agents](/tech/ia/agents/architecture-agents) -- comment ils sont construits
- [Agents autonomes](/tech/ia/agents/agents-autonomes) -- le curseur d'autonomie en detail
- [Agents collaboratifs](/tech/ia/agents/agents-collaboratifs) -- quand les agents travaillent en equipe
- [Frameworks](/tech/ia/agents/frameworks) -- LangChain, CrewAI, AutoGen

---

Le choix du type d'agent n'est pas une decision technique abstraite. C'est une decision business : quel probleme tu resous, quel niveau de risque tu acceptes, et combien tu es pret a investir. Commence toujours par le type le plus simple qui resout ton probleme. Tu pourras complexifier plus tard.
