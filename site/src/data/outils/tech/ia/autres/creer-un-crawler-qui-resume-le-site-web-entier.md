---
section: apps
metadataEnrichedAt: null
title: Créer Un Crawler Qui Résume Le Site Web Entier D'Une Application
author: Diane
tags:
- Outils
description: 'Découvre Créer Un Crawler Qui Résume Le Site Web Entier D''Une Application
  : outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

# Gpt Crawler

## Info

it uses headless browser so it can read any markup even fully client-side rendered

## Lancer

[Create a custom GPT from a URL in 2 minutes - YouTube](https://www.youtube.com/watch?v=G3TZpA0Mi_A)
modifier in config.ts:

- url: provide the base url from where the link’s crawl will begin
- match: provide a matching pattern ex https://www.builder.io/c/docs/**
- selector: it’s recommended to provide a selector ex : ‘.docs-builder-container’ to not scrape the nav menu and footer etc
aller au dossier et utiliser npm start

when the crawl is done you'll have a new output .json file which includes the title URL and extracted text for all of the pages that were crawled
we can now::

- upload this direct to chat GPT by going over and creating a new GPT choosing create a GPT going to configure and then for knowledge we're going to upload the file that we just generated once uploaded this GPT assistant will know all the information from those docs and be able to answer unlimited questions about them
- or if you want to integrate this into your own products you can go to the openAI website go to assistance create a new assistance and similarly upload Lo the generated file here and now you can access this over an API to provide custom tailored assistance within your products that have knowledge about your product specifically right from your docs or any other website simply by providing a URL crawling the web you can learn more about how to generate your own custom gpts from a URL in my latest blog post on the builder. blog