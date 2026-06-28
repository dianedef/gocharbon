---
section: blog
title: 'Web Scraping pour LLM : Créer ta Base de Connaissances en 1 Heure'
author: Diane
tags:
- Tech
description: Transforme n'importe quel site web en données exploitables par les LLMs
  avec ce guide pratique et des outils no-code.
pubDate: '2024-03-26'
imgUrl: ../../../assets/astro.jpeg
---

Tu as un ChatGPT personnalisé ou un assistant IA, mais il manque de contexte pertinent ? Le web scraping pour LLM est la solution. J'ai transformé des sites web entiers en bases de connaissances en quelques heures, et ça a totalement changé l'utilité de mes assistants IA.

![|200](scraping-llm-concept.webp]

## Pourquoi Créer une Base de Connaissances LLM-Ready ?

Les LLMs comme GPT-4 sont puissants, mais ils ont une limite : ils ne connaissent que ce qui est dans leurs données d'entraînement. Pour créer un assistant vraiment utile, tu dois lui donner accès à des informations spécifiques à ton domaine ou ton entreprise.

**Les bénéfices sont immédiats :**

- Réponses plus pertinentes et contextualisées
- Connaissance actualisée de ton secteur
- Capacité à citer tes sources
- Assistant vraiment utile pour tes clients ou ton équipe

## Ce Que Signifie "LLM-Ready"

Extraire du contenu web pour un LLM n'est pas du scraping classique. Tu dois :

1. **Garder la structure hiérarchique** (H1, H2, H3)
2. **Préserver le contexte** et les relations entre les sections
3. **Nettoyer le bruit** (menus, pieds de page, publicités)
4. **Découper en chunks** de taille adaptée (généralement 500-1000 mots)

Un mauvais scraping pour LLM = des réponses incohérentes. Un bon scraping = un assistant intelligent.

## Outils No-Code pour Commencer

Tu n'as pas besoin de coder pour commencer. Voici les options les plus simples :

### Browse.ai : Le Plus Simple

Browse.ai est parfait pour les sites web avec une structure claire.

**Comment faire :**

1. Crée un robot sur Browse.ai
2. Sélectionne les éléments à extraire (titre, contenu, auteur)
3. Exporte en CSV ou utilise l'API
4. Importe dans ton système LLM (OpenAI Assistants, LangChain, etc.)

![|150](browseai-interface.webp]

**Avantages** : Zéro code, interface intuitive, automatique

**Limites** : Moins flexible pour les sites très complexes

### Firecrawl : Spécialisé LLM

Firecrawl est conçu spécifiquement pour transformer des sites en données LLM-ready.

**Fonctionnalités clés :**

- Nettoyage automatique du contenu
- Respect de la structure markdown
- Extraction des métadonnées
- Gestion du rate limiting

**Pour l'utiliser :**

```bash
npm install -g @mendable/firecrawl-py
```

Puis dans ton code :

```python
from firecrawl import FirecrawlApp

app = FirecrawlApp(api_key="ta_cle")
scrape_result = app.scrape_url("https://ton-site.com")

# Le résultat est déjà formaté pour les LLMs
markdown_content = scrape_result['markdown']
```

### Trafilatura : L'Option Open Source

Trafilatura est une bibliothèque Python qui extrait automatiquement le contenu principal d'une page.

```bash
pip install trafilatura
```

```python
from trafilatura import fetch_url, extract

# Récupération du contenu
url = "https://example.com"
downloaded = fetch_url(url)
text = extract(downloaded, output_format='markdown')
```

**Pourquoi je l'aime** : C'est gratuit, open-source, et incroyablement fiable pour l'extraction de texte de qualité.

## Pour les Développeurs : Stack Python Complète

Si tu veux plus de contrôle, voici ma stack recommandée :

### Installation

```bash
pip install beautifulsoup4 requests trafilatura newspaper3k
```

### Script Complet

```python
import requests
from bs4 import BeautifulSoup
from trafilatura import extract
import re

def scrape_for_llm(url):
    # Récupération de la page
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')

    # Extraction du titre
    title = soup.find('h1')
    title_text = title.get_text() if title else "Sans titre"

    # Extraction du contenu principal avec Trafilatura
    downloaded = fetch_url(url)
    content = extract(downloaded, output_format='markdown')

    # Nettoyage
    content = re.sub(r'\n\n\n+', '\n\n', content)
    content = content.strip()

    return {
        'title': title_text,
        'content': content,
        'url': url
    }

# Utilisation
result = scrape_for_llm("https://ton-site.com/article")
```

## Chunking Intelligent

Le chunking est crucial : des chunks trop petits perdent le contexte, des chunks trop grands dépassent les limites des LLMs.

### Chunking Simple (Paragraphes)

```python
def create_chunks(text, max_length=800):
    paragraphs = text.split('\n\n')
    chunks = []
    current_chunk = ""

    for para in paragraphs:
        if len(current_chunk) + len(para) < max_length:
            current_chunk += para + "\n\n"
        else:
            chunks.append(current_chunk.strip())
            current_chunk = para + "\n\n"

    if current_chunk:
        chunks.append(current_chunk.strip())

    return chunks
```

### Chunking Sémantique (Recommandé)

```python
def semantic_chunks(text, max_sentences=10):
    sentences = text.split('. ')
    chunks = []
    current_chunk = []

    for sentence in sentences:
        current_chunk.append(sentence)
        if len(current_chunk) >= max_sentences:
            chunks.append('. '.join(current_chunk) + '.')
            current_chunk = []

    if current_chunk:
        chunks.append('. '.join(current_chunk) + '.')

    return chunks
```

## Métadonnées Essentielles

Les métadonnées aident le LLM à comprendre le contexte et à citer ses sources.

```python
def extract_metadata(soup):
    metadata = {
        'title': soup.find('meta', property='og:title'),
        'description': soup.find('meta', name='description'),
        'author': soup.find('meta', name='author'),
        'date': soup.find('meta', property='article:published_time'),
        'url': soup.find('meta', property='og:url')
    }

    # Nettoyage des valeurs
    return {k: v['content'] if v else None for k, v in metadata.items()}
```

## Intégration avec les LLMs

### OpenAI Assistants API

```python
from openai import OpenAI

client = OpenAI(api_key="ta_cle")

# Création d'un assistant avec tes données
assistant = client.beta.assistants.create(
    name="Assistant Charbon",
    instructions="Tu réponds aux questions en utilisant les documents fournis.",
    model="gpt-4-turbo-preview",
    tools=[{"type": "file_search"}]
)

# Upload de tes fichiers scraping
message_file = client.files.create(
    file=open("scraped_data.json", "rb"),
    purpose="assistants"
)

# Création d'un thread avec contexte
thread = client.beta.threads.create(
    messages=[
        {
            "role": "user",
            "content": "Réponds en utilisant les documents uploadés",
            "attachments": [
                {"file_id": message_file.id, "tools": [{"type": "file_search"}]}
            ]
        }
    ]
)
```

### LangChain Document Loader

```python
from langchain.document_loaders import JSONLoader

loader = JSONLoader(
    file_path="scraped_data.json",
    jq_schema=".[]",
    text_content=False
)

documents = loader.load()
```

## Cas d'Usage Réels

### 1. Documentation Technique

J'ai créé un assistant de documentation pour une SaaS en scrapant leur doc complète. Résultat : support ticket -40% et clients plus satisfaits.

**Approche** : Focus sur les guides de démarrage et les FAQ, pas la doc API complète.

### 2. Blog d'Expertise

Un client voulait un assistant qui réponde aux questions sur son secteur. J'ai scrapé les 50 meilleurs articles de blog du domaine.

**Approche** : Chunking sémantique, préservation des liens et références.

### 3. Base de Connaissance Interne

Pour une PME, j'ai scrapé leurs docs internes (Google Drive, Confluence) pour créer un assistant pour les nouveaux employés.

**Approche** : Attention aux données sensibles, utilisation d'embeddings privés.

## Bonnes Pratiques Indispensables

### Respect et Éthique

- Vérifie les robots.txt de chaque site
- Respecte les conditions d'utilisation
- Identifie ton bot via User-Agent
- N'extrais pas de données personnelles sensibles

### Qualité des Données

- Nettoie systématiquement le contenu
- Vérifie la structure avant chunking
- Teste avec quelques pages avant de scaler
- Documente tes sources pour les citations

### Performance

- Utilise le rate limiting pour éviter d'être bloqué
- Cache les résultats pour éviter de re-scraper
- Privilégie les APIs officielles quand disponibles

## Commence Aujourd'hui

Tu n'as pas besoin de tout scraper. Commence petit :

1. **Choisis un site pertinent** (ton blog, une doc technique, etc.)
2. **Teste avec Browse.ai** (essai gratuit disponible)
3. **Exporte en markdown** et nettoie le contenu
4. **Teste avec un LLM** (GPT-4, Claude, etc.)
5. **Mesure la qualité** des réponses obtenues

Une fois que ça marche, scale progressivement.

## Conclusion

Créer une base de connaissances LLM-ready est plus simple que tu ne le penses. Avec les bons outils et une méthodologie claire, tu peux transformer n'importe quel site web en source de connaissances pour ton assistant IA.

Les résultats sont immédiats : réponses plus pertinentes, citations possibles, et un assistant vraiment utile. Commence aujourd'hui avec un cas d'usage simple.

## Pour Aller Plus Loin

- [Documentation Trafilatura](https://trafilatura.readthedocs.io/) - Extraction de texte
- [Firecrawl](https://firecrawl.dev) - Scraping spécialisé LLM
- [LangChain Docs](https://python.langchain.com) - Intégration LLM
- [Browse.ai](https://browse.ai) - Solution no-code
