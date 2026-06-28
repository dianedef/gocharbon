---
artifact: gtm_context
metadata_schema_version: "1.0"
artifact_version: "1.0.0"
project: "gocharbon"
created: "2026-04-26"
updated: "2026-04-27"
status: reviewed
source_skill: sf-docs
scope: gtm
owner: "Diane"
confidence: medium
risk_level: medium
target_segment: "solopreneurs et indépendants francophones, freelances à budget maîtrisé, créatifs et commerçants qui veulent un premier revenu en ligne sans complexe technique"
offer: "un écosystème éditorial de démarrage en ligne avec parcours courts, quiz de qualification, comparatifs d'outils et recommandations transparentes adaptées au contexte francophone"
channels: "SEO, page d'accueil GoCharbon, publications tactiques, email newsletter, tutoriaux, comparatifs d'outils"
proof_points: "contenu anti-bullshit documenté, parcours structurés pour profils métiers, quiz d'orientation présent dans le repo, comparatifs d'outils orientés usage réel"
security_impact: unknown
docs_impact: yes
evidence:
  - "L'architecture `site/src/pages/parcours.astro` et `site/src/content/parcours` supporte un parcours de conversion"
  - "Le projet expose des pages quiz et progression dans `site/src/pages`"
  - "La documentation de marque et business fixe déjà les limites de promesse et le positionnement"
linked_artifacts:
  - "shipflow_data/business/business.md"
  - "shipflow_data/branding/branding.md"
  - "shipflow_data/product/site/product.md"
depends_on:
  - artifact: "shipflow_data/business/business.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
  - artifact: "shipflow_data/product/site/product.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
  - artifact: "shipflow_data/branding/branding.md"
    artifact_version: "1.0.0"
    required_status: "reviewed"
supersedes: []
next_review: "2026-05-26"
next_step: "/sf-docs verify shipflow_data/gtm/site/gtm.md"
---

# GTM Context

## Segment cible

- Solopreneurs francophones qui cherchent un point de départ clair.
- Freelances qui veulent réduire les erreurs de choix d'outils.
- Créatifs et commerçants locaux qui veulent digitaliser sans jargon.

## Proposition

GoCharbon se positionne comme un accélérateur d'exécution : moins d'infos inutiles, plus de décisions actionnables, et une recommandation d'outils contextualisée.

## Positionnement

- Une voix anti-bullshit, en français, orientée pragmatisme.
- Un cadre d'entrée en business en ligne basé sur l'ordre des actions et le coût réel.
- Une alternative à la formation longue ou aux promesses automatisées de revenus rapides.

## Canaux

- **Référencement naturel** via articles, guides, comparatifs et pages métiers.
- **Méthode de qualification** via quiz et parcours pour capter le bon lead.
- **Email** pour maintenir la progression après la première visite.
- **Parcours communautaires** (futur) et réutilisation de contenus repurposés en canaux externes.

## Parcours de conversion

1. Captation d'intention via article de découverte ou comparatif.
2. Qualification claire via profil/quizz et diagnostic de priorité.
3. Activation courte dans un parcours adapté à la situation.
4. Passage à une recommandation concrète (outil, guide, orientation).
5. Capture continue via contenus récurrents (newsletter, pages de progression).

## Preuves

- Produit éditorial déjà dense : `site/src/pages/parcours.astro` + nombreuses pages métier.
- Parcours d'activation structurés, quiz et logique de progression en place.
- Alignement de marque sur la voix anti-bullshit deja documente dans `shipflow_data/branding/branding.md`.

## Objections courantes

- "C'est encore un site de plus qui vend du rêve" → répondre par preuve concrète + transparence.
- "Je n'ai pas de temps" → insister sur parcours courts et actions de 1h.
- "Je ne veux pas investir" → afficher coût + alternatives réalistes.
- "C'est trop technique" → maintenir une pédagogie simple et progressive.

## KPIs

- Taux de complétion des parcours d'activation.
- Taux de qualification via quiz/retour utilisateur.
- Engagement post-parcours (newsletter/progression).
- Taux de clics vers contenus/actionnables par segment.
- Taux de conversion vers orientations partenaires (sur base de volume + qualité).

## Risques commerciaux

- Croissance plus lente si la preuve utilisateur est insuffisamment visible.
- Tension entre promesse et preuve si le contenu éditorial n'est pas régulièrement audité.
- Écart de conversion si les parcours deviennent trop volumineux sans progression visible.
