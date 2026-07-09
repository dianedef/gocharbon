# Sources de Veille SaaS — GoCharbon

Sources extraites des bookmarks Web'Indé Apps pour la veille concurrentielle,
le scraping de nouveaux outils, et l'enrichissement du catalogue GoCharbon.

---

## 1. Annuaires & Comparateurs SaaS (PRIORITÉ HAUTE — à scraper régulièrement)

Ces sites listent et catégorisent des centaines de SaaS. Idéal pour découvrir de nouveaux outils.

| Source | URL | Intérêt |
|--------|-----|---------|
| Capterra FR | https://www.capterra.fr | Annuaire SaaS #1, catégories FR, avis, comparatifs |
| TrustRadius | https://www.trustradius.com | Reviews SaaS détaillées, comparatifs |
| Appvizer FR | https://www.appvizer.fr | Comparateur SaaS français, fiches détaillées |
| Tool Advisor | https://tool-advisor.fr | Recommandation d'outils par besoin métier |
| J'aime les Startups | https://www.jaimelesstartups.fr | Annuaire startups françaises, fiches outils |
| My French Startup | https://www.myfrenchstartup.com | Annuaire startups françaises |
| Start Catalog | https://www.startcatalog.com | Catalogue de startups/SaaS |
| Les Pépites Tech | https://lespepitestech.com | Annuaire tech françaises |
| Noël de la French Tech | https://noeldelafrenchtech.com | Découverte startups FR (saisonnier) |
| Hub France IA | https://www.hub-franceia.fr | Annuaire IA françaises |
| AI Tools Directory | https://aitoolsdirectory.com | Annuaire outils IA |
| Outils Collaboratifs | https://outilscollaboratifs.com | Blog/annuaire outils collab FR |
| Blog du Modérateur | https://www.blogdumoderateur.com | Actualités outils numériques FR |
| Independant.io | https://independant.io | Comparatifs outils pour indépendants |
| Transfo Digitale RH | https://transfo-digitale-rh.fr | Annuaire logiciels RH |

### Catégories Capterra déjà bookmarkées (à monitorer)

- [Sales Engagement](https://www.capterra.fr/directory/32195/sales-engagement-platform/software)
- [Employee Engagement](https://www.capterra.fr/directory/30817/employee-engagement/software)
- [Lead Capture](https://www.capterra.fr/directory/31017/lead-capture/software)
- [Portails](https://www.capterra.fr/directory/14/portal/software)
- [Personnalisation](https://www.capterra.fr/directory/30965/personalization/software)
- [Product Data Management](https://www.capterra.fr/directory/30599/product-data-management/software)
- [Customer Journey Mapping](https://www.capterra.fr/directory/31537/customer-journey-mapping-tools/software)
- [Screen Sharing](https://www.capterra.fr/directory/31738/screen-sharing/software)
- [Packaging](https://www.capterra.fr/directory/31520/packaging/software)
- [NPS](https://www.capterra.fr/directory/32075/nps/software)

---

## 2. Médias Business & French Tech (actualités, tendances)

| Source | URL | Intérêt |
|--------|-----|---------|
| BPI France Le Hub | https://lehub.web.bpifrance.fr | Actu startups, financement, écosystème |
| Brief.eco | https://www.brief.eco | Newsletter économie accessible |
| L'ADN Data | https://data.ladn.eu | Tendances innovation/business |
| Growth Hacking FR | https://www.growthhacking.fr | Stratégies growth, outils marketing |
| Marketing Flow | https://www.marketingflow.fr | Communauté marketing, outils |
| Je booste ma boîte | https://www.jeboostemaboite.com | Conseils entrepreneurs, outils |
| Je pilote mon entreprise | https://www.jepilotemonentreprise.com | Gestion PME, outils |
| Réussir.fr | https://réussir-en-b.fr | Conseils business FR |
| Blog Expert | http://www.blog-expert.fr | Comptabilité, gestion |

---

## 3. Données entreprises & Vérification (enrichissement, validation)

| Source | URL | Intérêt |
|--------|-----|---------|
| Societe.com | https://www.societe.com | Données légales entreprises FR |
| Verif.com | https://www.verif.com | Infos financières entreprises |
| Nomination | https://www.nomination.fr | Contacts décideurs, organigrammes |
| Mixdata | https://www.mixdata.com | Data B2B, prospection |
| Marques de France | https://www.marques-de-france.fr | Annuaire marques françaises |

---

## 4. Sources de Scraping Recommandées (par priorité)

### Tier 1 — Scraper en priorité (catalogues structurés, fort volume)
1. **Capterra FR** — Toutes les catégories `/directory/*/software` → structure uniforme, facile à scraper
2. **Appvizer FR** — Fiches SaaS avec prix, avis, alternatives
3. **Tool Advisor** — Recommandations par besoin, données structurées
4. **J'aime les Startups** — Fiches startups françaises

### Tier 2 — Veille régulière (nouveautés, tendances)
5. **Product Hunt** (pas dans ce fichier mais lié) — Lancements quotidiens
6. **Les Pépites Tech** — Startups FR émergentes
7. **BPI Le Hub** — Écosystème French Tech
8. **Blog du Modérateur** — Tests et présentations d'outils

### Tier 3 — Enrichissement (données complémentaires)
9. **TrustRadius** — Reviews détaillées anglophones
10. **Societe.com / Verif.com** — Données légales pour valider que l'outil est FR
11. **Marques de France** — Label "made in France"
12. **Hub France IA** — Spécifique verticale IA

---

## 5. Domaines à surveiller pour les expirations

| Source | URL | Intérêt |
|--------|-----|---------|
| WebExpire | https://www.webexpire.fr | Noms de domaine expirés de qualité |
| DomMarket | https://dommarket.fr | Marketplace domaines FR |

---

## Notes

- **Total URLs extraites** : 1 233 liens depuis les bookmarks Web'Indé Apps
- **Domaines uniques** : ~690
- Les outils individuels ont été déplacés dans `outils_candidats_webinde.md`
