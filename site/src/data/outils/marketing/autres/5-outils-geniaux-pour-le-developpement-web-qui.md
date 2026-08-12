---
section: apps
metadataEnrichedAt: null
tags:
- Outils
imageNameKey: null
u_site: null
title: 5 Outils Géniaux Pour Le Développement Web Qui Vont Changer Ta Vie
author: Diane
description: 'Découvre 5 Outils Géniaux Pour Le Développement Web Qui Vont Changer
  Ta Vie : outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
---

# Rustpad - L'éditeur de code collaboratif léger et performant


Ah, la joie du code collaboratif !! Vous savez, ces moments particulièrement savoureux où vous essayez désespérément de partager votre code avec un collègue en copiant-collant des bouts dans un chat, ou pire, en envoyant des captures d’écran ?

Eh bien, permettez-moi de vous présenter **Rustpad**, une solution élégante qui va enfin vous permettre de coder à plusieurs sans avoir l’air de gros ploucs.

Développé par Eric Zhang (déjà connu pour ses excellents projets sshx et bore dont j’ai parlé hier et avant hier), **Rustpad** est un éditeur de texte collaboratif qui se distingue par sa simplicité et ses performances remarquables.


Mais ne vous fiez pas à son interface minimaliste - sous le capot se cache une petite merveille d’ingénierie car contrairement à d’autres solutions qui s’appuient sur des bases de données complexes, **Rustpad** adopte une approche radicalement différente. Tout le système repose sur une architecture légère et efficace :

- Le serveur, écrit en **Rust**, gère les connexions et la synchronisation via l’algorithme de transformation opérationnelle
- Le frontend utilise **React** et l’éditeur **Monaco** (le même que VS Code)
- La logique de transformation des opérations est compilée en **WebAssembly**
- Les communications passent par **WebSocket** pour une réactivité optimale

Cette architecture permet ainsi d’obtenir un éditeur collaboratif ultra-rapide qui tient dans une image Docker de seulement 6 Mo. De plus, les données sont stockées en mémoire, ce qui évite la complexité d’une base de données tout en garantissant des performances maximales.


Ce qui rend **Rustpad** vraiment intéressant, c’est sa philosophie “moins c’est plus” car au lieu de vous noyer sous une avalanche de fonctionnalités, il se concentre sur l’essentiel tel quel l’**édition en temps réel**, le **support multi-utilisateurs**, une **interface familière** car si vous connaissez VS Code, vous êtes déjà chez vous, une **persistance légère** ce qui vous permet de conserver les documents en mémoire pendant 24h par défaut et surtout un **déploiement simple** via un bête conteneur Docker !

Pour démarrer votre propre instance, vous aurez besoin de Rust, wasm-pack et Node.js. Le processus se déroule en quelques étapes :

`wasm-pack build rustpad-wasmnpm installcargo runnpm run dev`

L’image Docker multi-architecture (AMD64/ARM64) rend également le déploiement extrêmement simple :

`docker pull ekzhang/rustpaddocker run --rm -dp 3030:3030 ekzhang/rustpad`

Et pour une configuration plus avancée avec persistance :

`docker run -d \-e EXPIRY_DAYS=7 \-e SQLITE_URI=/data/rustpad.db \-v /local/path:/data \-p 3030:3030 \ekzhang/rustpad`

Bref, c’est l’outil idéal pour les sessions de pair programming, les revues de code en direct, ou même pour l’enseignement de la programmation à distance.

Alors, si vous êtes prêt à transformer vos sessions de codage en véritable travail collaboratif, rendez-vous sur [Rustpad](https://rustpad.io/#g85X86) pour tester par vous-même !

[Source](https://rustpad.io/#g85X86)

[CodeTogether: Move beyond the metrics with Workflow AI](https://www.codetogether.com/)
[JSON CRACK : LE PETIT OUTIL QUE TU DEVRAIS CONNAÎTRE - YouTube](https://www.youtube.com/watch?v=IqbQXQmRqjA)

[AI Data Sidekick - Write SQL 10x faster for free | Product Hunt](https://www.producthunt.com/posts/ai-data-sidekick?utm_campaign=17121_2022-12-15&utm_medium=newsletter&utm_source=Daily+Digest&utm_term=editorial)

The new tool helps you write SQL faster, through natural language prompts. You can ask it _“Which campaigns had the biggest drop in impressions in January of 2021”_  and it will write the code that gets you the answer. It also lets you generate Python code, as well as fix any broken SQL queries.

[Polyflow - Translate your Webflow site in minutes and enhance SEO | Product Hunt](https://www.producthunt.com/posts/polyflow?utm_campaign=17121_2022-12-15&utm_medium=newsletter&utm_source=Daily+Digest&utm_term=featured)

[Share Logins - Synchronize User Activity Across Multiple WordPress Sites](https://codexpert.io/plugin/share-logins-pro/?ref=daveswift)

- [Sizzy Lifetime Deal | The Browser Powerhouse for Developers & Designers](https://www.dealify.com/sizzy/)
- You're a developper ? [Sizzy](https://sizzy.co/?ref=producthunt) will be your best companion. [Responsively App](https://responsively.app/) is free alternative.

[FUNCTION12 - Design-to-code automation tool | Product Hunt](https://www.producthunt.com/posts/function12?utm_campaign=16263_2022-11-14&utm_medium=newsletter&utm_source=Daily+Digest&utm_term=editorial)

[Fiberplane - Figma for DevOps | Product Hunt](https://www.producthunt.com/posts/fiberplane)

[Introducing Overflow Stories | Overflow](https://overflow.io/stories/?ref=producthunt)

- ## [React Bricks](https://appsumo.com/products/react-bricks/) Le CMS collaboratif du futur
    
    - surely, you can host your website on Netlify, or Vercel or any other provider which runs Node.js for the build process.
    - As for Flotiq, really I think you should choose which platform you prefer to create content. It's true that you can also get data from any headless CMS and use it in React Bricks, but for a new project it's much better to choose just one CMS not to add too much complexity.
    
    - With React Bricks, your developers can **build a point-and-click editing interface that lets content creators edit pages** without any coding.**Work directly from visual content blocks** to create a site that fits your company’s unique design system.
    - , you don’t have to waste time toggling between your headless CMS and your code.
    - .This platform **optimizes images for responsive view after upload** and serves them from a global CDN, so you don’t have to mess with any external services.Built-in support for multiple languages allows you to **reach users across the globe and translate pages with just one click**.
    - the first CMS great for both Content editors and Developers.
    - end of 2019 to have the CMS we needed ourselves, as a React-skilled web agency willing to abandon WordPress and looking for a great solution for both us and our [customers.At](http://customers.At) that time developers were super-hyped with the rise of headless CMSs, but I could feel the pain of our customers, because the authoring experience of a headless CMS is very poor, as it is based on gray forms.👉 I wanted something easy as Wix, but with total control for developers. 👈can we host this on a normal shared hosting providing.you need a NodeJs capable hosting, like Vercel, or a simple static hosting which can run a Node.js build like Netlify. I suggest one of these two services, because:\- they integrate with GitHub or BitBucket to rebuild as you push code on the repository\- they provide build hook to rebuild from React Bricks when your editors click the "Deploy" button\- usually you can stay in the free tier
    - You said we can host the website and the admin interface wherever we [want.Is](http://want.Is) this for real? 100% hosted or are there some for of backdoors in the system where you still have access to our system?Or are we in some way still dependent on you even after doing this?
    - the APIs are hosted by us, but the front-end website is hosted by you wherever you want. We don't have any "backdoor" in your frontend, but of course you need our APIs to save the content. It's like any other headless CMS. The data are saved on our backend >> the static build on your hosting provider uses the data from our APIs >> the static website is hosted on your hosting provider.
    - is it possible to have more explanations on what exactly are these points
    - 40,000 API calls means that the number of calls to our HTTP REST APIs during one month must be below 40,000. Every time you GET the content of a page or SAVE a page you trigger an API call. If you use Static Site Generation you will trigger API calls just at build time (1 for each page every time you rebuild) and when you edit content, so it is very difficult to reach that limit.500 MB of disc space is the space you have to save images (we count the space on our backend server, not the space on the CDN - which means you have 500 MB on our server + 500 MB on the global CDN).50 GB of bandwidth means that the CDN bandwidth you have in one month must be less than 50 GB. For example, if you have 100 images of 50 KB each (5 MB total) you can have them downloaded 10.000 times each.On the lifetime deals the limits are hard limits, so when you reach them you should upgrade to another plan. Really I think it's very unlikely that you will reach them unless you have a very high traffic website.
    - compare ReactBricks with TeleportHQ
        - From what I can see on TeleportHQ websites, it seems more a tool like WebFlow: in particular, I think your editors will be able to change margins, paddings, text size etc. using the sidebar menus.With React Bricks the sidebar controls are just the ones that you define in code, so, if font size for a content block should not be changed by content editors (because it's part of the design system), they will not have the possibility to change it.Another difference is that they host the website and set limits on bandwidth, so that, if you site has success, you need to pay more.With React Bricks you host the website yourself wherever you like, while we just host the content data and the images (on a global CDN).
    - .React Bricks works with any CSS framework.
    - The code for the bricks is on your side, we never see it. We save on our APIs the JSON content for the pages. The React Bricks library uses the JSON content and the set of your bricks to match them and show the page, either in read-only front-end mode or editing mode.
    
    - Yes, the limits are for the data stored on our side. It's a simple heuristic to distinguish small websites, corporate and enterprise websites. More pages mean longer build time for SSG (see the next question)
    - 4. When I deploy the page to netlify or vercel, will there be an api call whenever I browse a page over and over again? Or it will call the api once only for each page to build a static page, so we only call it when we build it, so we don't won't use much api call except when we build it?
    - It's up to you: if you choose SSG (static site generation) with Next.js or Gatsby you will call our APIs in bursts every time you re-build the static website, but not on each page visit.
    - If you use SSR (server-side rendering) with Next.js or Remix, then you will call our APIs on each page view (unless you use a caching layer, which I strongly recommend).
    
    - You host the frontend website wherever you like, so for example in Vercel.
    - We host the APIs where the content is persisted. So, you always host the website somewhere else, but this has nothing to do with the page limit that you have on our APIs' database.
    
    - The website is served from Vercel (or whatever hosting provider you choose), but the images as served from our CDN ([images.reactbricks.com](http://images.reactbricks.com)). That is the space you see. We are thinking of incrementing the disk space for the first tier.
    
    - Hi! We have agencies using React Bricks for their customers' websites, like the German Neoskop.
    - The plan is for just 1 app, so 1 website.
    - You can host the website wherever you prefer, with one or more domains attached to it. React Bricks just host the APIs where the content is stored, but you host your Next.js, Gatsby or Remix project where you desire, like Vercel, Netlify, AWS...
    - As for the WebFlow comparison, some days ago I wrote an article about it:
    - [https://reactbricks.com/comparisons/react-bricks-vs-webflow](https://reactbricks.com/comparisons/react-bricks-vs-webflow)
    
    - you host the website wherever you want, together with the Admin interface.
    - If you use static site generation (with Gatsby or Next.js) you can use a simple static host like Netligy or a CDN; if you use server-side rendering (with Next.js or Remix) you will need a Node.js-capable host like Vercel.
    - So you can add any domain that you want. We just host the APIs where the content is persisted.
    
    - 1. What do you mean by stories, please give some examples?
    - A story on a brick is like a cookie-cutter of that brick with that props applied. So, think you have a "hero-unit" brick with a text and a sidebar control to set the green or white background. Your editors can write "Hello", set the background to green and save a "Green hello" story. In any other page they can reuse that content block with its props.
    
    - We are based in Italy, 5 developers at the moment, in business since 2004 with the current company (a web dev agency), but I am creating web apps since 1997 when I was 18 :)
    - Now we are shifting from the agency work to React Bricks, which is becoming our core business.
    - Helpful 1
    - Reply
    
    - As for Figma, yes, we have a plan to create a Figma plugin for React Bricks, so that you could export content blocks "bricks" directly from Figma. These will be 80% ready blocks that should anyway be finished by a developer (for example to conditionally render based on sidebar controls values).
    - As for the "full-fledged web apps", I think that this space is really very interesting and we'll see a big advance in low-code app creation in the coming years. I think React Bricks won't become a tool to create apps, but will stay a tool for content management. We have some other ideas in the "app creation" space, but for now we want to keep our efforts focused on React Bricks.
    
    - if you buy several licenses I think you should provide different emails for activation (AppSumo requires it). So you will have more than one account created on React Bricks, but you can then ask us to put all the apps under one account, so that you will have a unique login to manage all.of your apps.
    - As for the limits, you know we have monthly costs for disk space, bandwidth and server resources in general. We want to be sure that we can honor the lifetime deal in the future.
    - We have received no external funding. We prefer to be able to choose about the direction we want to take without someone else telling us what to do. Until we can, we stay bootstrapped. BTW, we have many new ideas for the future and we want to be free to invent.
    
    - React Bricks is much better for Content editors than WebFlow, because you can define exactly what your editors will be able to change in the design.
    - WebFlow is complex and, once editors understand how it works, they can change the design!
    - React Bricks has a very easy interface: you define in the JSX code what is directly editable and what is editable using the sidebar controls, which map the values to your React component props, so that you can conditionally render.
    - You have easy of use for Content editors and good constraints (so they cannot break the design system) and total flexibility for developers.
    
    - with React Bricks you host the frontend project wherever you like and, using Next.js or Gatsby you can leverage Static Site Generation (SSG) to create a static website that can be hosted on a simple CDN.
    - React Bricks hosts just the APIs where the content is stored, but than pages are generated by Gatsby or Next.js (if you use getStaticProps).
    - The Next.js or Gatsby site, together with the admin interface, can be hosted by you on a simple web server, a CDN, or a host like Netlify or Vercel.
    
    - no, I mean that a React Bricks project really is a Gatsby, Remix or Next.js project, using the React Bricks library.
    - Gatsby, Remix and Next.js are React Framework to create websites, either using Static site generation (like Gatsby and Next.js) or Server-side rendering (like Remix and Next.js which can do both).
    - So, if you use SSG with Gatsby or Next.js you are generating a static site, but the generation process calls the React Bricks APIs to generate all the pages. So you need React Bricks to edit the content and generate the static site. Anyway, this has nothing to do with limits: you have limits on React Bricks CMS APIs. If you have 300 pages, you can just create 300 pages.
    - I suggest you to purchase the deal, start the CLI (npx create-reactbricks-app) and see how it works: you have 30 days to request a refund if it's not what you need.
    - In this way you will see that when you scaffold a project with the CLI you will choose the React framework and you will have a complete project set up for you, ready with static site generation.
    
    - please consider that Bricks and Oxygen are just WordPress plugins, they don't have any running cost for the hosting platform: you host the WP backend, so it's just a software license.
    - With React Bricks you get also the use of our APIs where the content is stored, image processing for optimization (responsive, blur-up, webp, etc) and image serving from a global CDN.

[Mirrorful - Generate a preview of any website in any environment | Product Hunt](https://www.producthunt.com/posts/mirrorful)

[(10) Meet the new Framer - YouTube](https://www.youtube.com/watch?v=smPos0mJvh8)

[Ship Websites with Figma | Figside](https://figside.com/?ref=whatdevsneed)