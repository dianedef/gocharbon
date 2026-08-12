---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Ajouter Google Analytics Sur Son Site
author: Diane
description: 'Découvre Comment Ajouter Google Analytics Sur Son Site : outil français
  pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

**Table des matières :**

[https://emoteev.io/](https://emoteev.io/)

[https://stape.io/gtm-server-blog/](https://stape.io/gtm-server-blog/)

- milesmcc/shynet: Modern, privacy-friendly, and detailed web analytics that works without cookies or JS.
    
    [https://github.com/milesmcc/shynet](https://github.com/milesmcc/shynet)
    
    
    
    Modern, privacy-friendly, and cookie-free web analytics. [**Getting started »**](https://github.com/milesmcc/shynet)
    
    [Screenshots](https://github.com/milesmcc/shynet) • [Features](https://github.com/milesmcc/shynet) • [Design](https://github.com/milesmcc/a17t)
    
    ## Motivation
    
    There are a _lot_ of web analytics tools. Unfortunately, most of them come with the following caveats:
    
    - They require handing all of your visitors' info to a third-party company
    - They use cookies to track visitors across sessions, so you need to have those annoying cookie notices
    - They collect so much personal data that even the NSA is jealous
    - They are closed source and/or expensive, often with limited data portability
    - They are hard to use
    
    Shynet has **none** of these caveats. You host it yourself, so the data is _yours_. It works without cookies, so you don't need any intrusive cookie notices. It collects just enough data to be useful, but not enough to be creepy. It's open source and _intended_ to be self-hosted. And you may even find the interface easy to use.
    
    > **Shynet** is a portmanteau of "Skynet" and "shy." The idea is that it gives you loads of useful information (Skynet) while also respecting your visitors' privacy (shy).
    
    ## Screenshots
    
    _Note: These screenshots have been edited to hide sensitive data. The "real" Shynet has a lot more pages and information available, but hopefully this gives you an idea of the general look and feel of the tool._
    
    Shynet's homepage, where you can see all of your services at a glance.
    
    
    
    A real service page, where you can see higher-level details about a site.
    
    
    
    Not shown: management view, session view, full service view. (You'll need to install Shynet for yourself to see those!)
    
    > **Shynet is built using [a17t](https://github.com/milesmcc/a17t),** an atomic design library. Customization and extension is simple; [learn more about a17t](https://github.com/milesmcc/a17t).
    
    ## Features
    
    ### Architecture
    
    - **Runs on a single machine** — Because it's so small, Shynet can easily run as a single docker container on a single small VPS
    - **...or across a giant Kubernetes cluster** — For higher traffic installations, Shynet can be deployed with as many parallelized ingress nodes as needed, with Redis caching and separate backend workers for database IO
    - **Built using Django** — Shynet is built using Django, so deploying, updating, and migrating can be done without headaches
    - **Multiple users and sites** — A single Shynet instance can support multiple users, each tracking multiple different sites
    
    ### Tracking
    
    - **JavaScript not required** — It will fallback to using a 1x1 transparent tracking pixel if JavaScript isn't available
    - **Lightweight** — The [tracking script](https://github.com/milesmcc/shynet/blob/master/shynet/analytics/templates/analytics/scripts/page.js) weighs less than a kilobyte (and doesn't look like your typical tracking script)
    - **Generally not blocked** — Because you host Shynet yourself, it tends not to be on ad block lists
    - **Primary-key integration** — You can easily associate visitors in Shynet with their user accounts on your site (if that's something you want)
    
    ### Metrics
    
    Here's the information Shynet can give you about your visitors:
    
    - **Hits** — how many pages on your site were opened/viewed
    - **Sessions** — how many times your site was visited (essentially a collection of hits)
    - **Page load time** — how long the pages on your site look to load
    - **Bounce rate** — the percentage of visitors who left after just one page
    - **Duration** — how long visitors stayed on the site
    - **Referrers** — the links visitors followed to get to your site
    - **Locations** — the relative popularity of all the pages on your site
    - **Operating system** — your visitors' OS (from user agent)
    - **Browser** — your visitors' browser (from user agent)
    - **Geographic location & network** — general location of your visitors (from IP)
    - **Device type** — whether your visitors are using a desktop, tablet, or phone (from user agent)
    
    ### Workflow
    
    - **Collaboration built-in** — Administrators can easily share services with other users, as well
    - **Accounts (or not)** — Shynet has a fully featured account management workflow (powered by [Django Allauth](https://github.com/pennersr/django-allauth/))
    
    ## Recommendations
    
    Shynet isn't for everyone. It's great for personal projects and small to medium size websites, but hasn't been tested with ultra-high traffic sites. It also requires a fair amount of technical know-how to deploy and maintain, so if you need a one-click solution, you're best served with other tools.
    
    ## Concepts
    
    Shynet is pretty simple, but there are a few key terms you need to know in order to use it effectively:
    
    **Services** are the properties on the web you'd like to track. These generally correspond to websites or single top-level domains. Shynet generates one tracking embed per service.
    
    **Hits** are a single page-load on one of your services.
    
    **Sessions** are a collection of hits (or just one) that are made by the same browser in a short period of time.
    
    ## Installation
    
    You can find intructions on getting started and usage in the [Usage Guide](https://github.com/milesmcc/shynet/blob/master/GUIDE.md). Out of the box, we support deploying via a simple Docker container, docker-compose, Heroku, or Kubernetes (see [kubernetes](https://github.com/milesmcc/shynet/blob/master/kubernetes)).
    
    ## FAQ
    
    **Does Shynet respond to Do Not Track (DNT) signals?** Yes. While there isn't any standardized way to handle DNT requests, Shynet allows you to specify whether you want to collect any data from users with DNT enabled on a per-service basis. (By default, Shynet will _not_ collect any data from users who specify DNT.)
    
    **Is this GDPR compliant?** It depends on how you use it. If you're worried about GDPR, you should talk to a lawyer about your particular data collection practices. I'm not a lawyer. (And this isn't legal advice.)
    
    ## Troubleshooting
    
    Having trouble with Shynet? Check out the [troubleshooting guide](https://github.com/milesmcc/shynet/blob/master/GUIDE.md), or [create an issue](https://github.com/milesmcc/shynet/issues/new) if you think you found a bug in Shynet itself (or have a feature suggestion).
    
    ## Roadmap
    
    To see the upcoming planned features, check out the repository's [roadmap project](https://github.com/milesmcc/shynet/projects/1). Upcoming features include data aggregation through rollups, anomaly detection, detailed data exports, two-factor authentication, and a data deletion tool.
    
    ## In the Wild
    
    These sites use Shynet to monitor usage without violating visitors' privacy: [PolitiTweet](https://polititweet.org/), [Miles' personal site](https://miles.land/), [a17t](https://a17t.miles.land/), [Lensant](https://lensant.com/), [WhoAreMyRepresentatives.org](https://whoaremyrepresentatives.org/), and more. (Want to add your site to this list? Send a PR.)
    
    ## Contributing
    
    Are you interested in contributing to Shynet? Just send a pull request! Maybe once the project matures there will be more detailed contribution guidelines, but for now just send the code this way and we'll make sure it meets our standards together. Just know that by contributing, you agree to share all of your contributions under the same license as the project (see [LICENSE](https://github.com/milesmcc/shynet/blob/master/LICENSE)). And always be sure to follow the [Code of Conduct](https://github.com/milesmcc/shynet/blob/master/CODE_OF_CONDUCT.md).
    
    ## License
    
    Shynet is made available under the [Apache License, version 2.0](https://github.com/milesmcc/shynet/blob/master/LICENSE).
    
    Shynet was created by [Miles McCain](https://miles.land/) ([@MilesMcCain](https://twitter.com/MilesMcCain)) at the [Recurse Center](https://recurse.com/) using [a17t](https://a17t.miles.land/).
    
- Affiliate Marketing Dashboard | All Your Affiliate Data In One Dashboard | Affluent
    
    [https://www.affluent.io/?utm_term=affiliate aggregator&utm_campaign=Brand Terms&utm_source=adwords&utm_medium=ppc&hsa_acc=6324856933&hsa_cam=881007755&hsa_grp=46719280240&hsa_ad=368101544534&hsa_src=g&hsa_tgt=kwd-323890588008&hsa_kw=affiliate aggregator&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwk6-LBhBZEiwAOUUDpxoqYvXLkwEWvZV2PbCKZ1kUoE9Ktsau9k5I-93wz7SHKEXaZgCQqxoCEV4QAvD_BwE](https://www.affluent.io/?utm_term=affiliate%20aggregator&utm_campaign=Brand%20Terms&utm_source=adwords&utm_medium=ppc&hsa_acc=6324856933&hsa_cam=881007755&hsa_grp=46719280240&hsa_ad=368101544534&hsa_src=g&hsa_tgt=kwd-323890588008&hsa_kw=affiliate%20aggregator&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwk6-LBhBZEiwAOUUDpxoqYvXLkwEWvZV2PbCKZ1kUoE9Ktsau9k5I-93wz7SHKEXaZgCQqxoCEV4QAvD_BwE)
    
    
    
    Affluent tracks over **$10 billion** in annual affiliate revenue to help publishers, agencies, and advertisers grow their businesses.
    
    ## Integrations With Over 500 Networks
    
    Affluent is integrated with over **500** affiliate platforms with new networks added regularly. Have a network we haven’t covered yet? Let us know and we’ll build it for you – _the development is on us!_
    
    ## An Affluent Approach
    
    Affluent is a technology company modernizing the affiliate marketing industry by delivering powerful tools to underserved companies. We believe in the power of data and we believe that data should be accessible and insightful, no matter who you are. Those beliefs power who we are, and what we do.
    
    ## Events
    
    We get around, from town to town. Come say hi at the next conference!
    
    - [](https://www.affluent.io/affiliate-marketing-blog/press-release-impact-acquires-affluent/)
        
        
        
    - [](https://www.affluent.io/affiliate-marketing-blog/updated-refersion-integration/)
        
        
        
- m
    
    [https://www.figpii.com/dashboard/domains/315510/recordings](https://www.figpii.com/dashboard/domains/315510/recordings)
    
    [End-to-End SaaS Analytics | HockeyStack](https://hockeystack.com/dashboard/)
    
    [Froged](https://app.froged.com/ws/1uiow4/dashboard)
    
    [Plerdy | Login Form](https://a.plerdy.com/admin/dashboard/14979?id=14979)
    
- Slimstat Analytics – The leading statistics plugin for WordPress – Discover Meaningful Patterns
    
    [https://www.wp-slimstat.com/](https://www.wp-slimstat.com/)
    
    Slimstat transforms your most complex data into actionable insights to help you find answers fast—and make decisions even faster—with live data that connects you directly to the pulse of your business
    
    Our optimized codebase delivers great performance and scalability. Because we believe that one size doesn’t always fit all.
    
    Trusted by more than 100,000 websites all over the world for twelve years and counting. That’s a lot of exciting love!
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    Our add-ons will enhance your Slimstat environment by enabling features like exporting your data to Excel, connecting to the MaxMind geolocation service, giving you in-depth data on what your registered users do on your website and much more. Affordable software for small bloggers and big Fortune 500 companies alike!
    
    Get our most popular add-ons at a discounted price: for just **$70** you will receive a total of **$125** worth of premium extensions. A small token of appreciation from our team to you for supporting our work. Please keep in mind that with this bundled license, you can use these add-ons on an unlimited number of sites that you manage. No strings attached.
    
    Would you like to save even more? With this package, for just $125 you receive $350 worth of add-ons! It’s like getting an instantaneous 70% discount without having to wonder if that is a price mistake (don’t worry, we’ve been there too). So, go ahead and unleash the full power of Slimstat to enhance your business goals on all your web properties.
    
- Install & Setup Google Analytics in WordPress (3 easy methods) - YouTube
    
    [https://www.youtube.com/watch?v=6XTcPCJEO6U](https://www.youtube.com/watch?v=6XTcPCJEO6U)
    
    [https://www.youtube.com/watch?v=6XTcPCJEO6U](https://www.youtube.com/watch?v=6XTcPCJEO6U)
    

[Website Visitor Tracking Tool [Weekly Reports] | Clearbit](https://clearbit.com/resources/tools/visitor-report)

Grâce à son modèle de données flexible basé sur les événements,Google Analytics 4vous permet de bénéficier d'une vision unifiée des parcours utilisateur sur votre site Web et dans vos applications. Il utilise le machine learning (apprentissage automatique) de Google pour combler les lacunes dans vos données à l'aide de statistiques modélisées et de fonctionnalités prédictives qui vous permettent d'obtenir de meilleurs résultats et de développer votre entreprise. Cet outil est conçu pour s'adapter à l'évolution de l'écosystème car il ne repose pas exclusivement sur les cookies. Vous pouvez donc en apprendre davantage sur vos clients, même si vos données comportentdes lacunes.

[Passer à Google Analytics 4 - Aide Google Analytics](https://support.google.com/analytics/answer/10759417?utm_campaign=2022-q4-gbl-all-gafree&utm_source=google-growth&utm_medium=email&utm_content=ga-sunset-msa-reminder-read)

Définissez les conversions dans votrenouvelle propriété

---

---

Les actions des utilisateurs et les événements les plus importants sur votre site Web sont appelés des "conversions". Lorsque vous les définissez dansGoogle Analytics

---

|Dans votre configuration Universal Analytics actuelle, vous mesurez les interactions clés à l'aide d'objectifs. Dans votre nouvelle propriétéGoogle Analytics 4  L'outil de migration des objectifs vous permet de transférer facilement les conversions vers votre nouvellepropriété Google Analytics 4. [https://notifications.google.com/g/p/ACnX6LYQtakR7U0LgxUFvNh6FDw97sfPI00XbfFkB5_s6htHF-CeQ9IT547RKbCVZi8PUlSDFzSErIoSTABWcOHOcmPiqe4r9Bnibs-qJNoihFl5zqFWu7ntFCj_wqQC0AMRG53V8lx1nql7xman47z-G5sRYWXkqJ3eUFDMFuTH68oFkeazITW2uemxo9Xs50PbAinxzdd39lujErV8u5GmT13kKuHIxNlRaDMGaHLnA7TSvqMjZciUCiBZMqkLaPThsxlAqN9oi8tfN__4n_1pYYFbpLY5cuf2xkLpOlVVCflFXMiB7IcircrpTQvuBPTuNTyuqyXz1x0B3X9yuXMahPxXxolcUJaeijqsXObO1KXZE8b7vBiffORg14mo5XQuHhQwTgHhd9FDfhnku3ZxPdQZNJ0gKcIOP9HzyWpkuYpuSOGEJ16_kk2bHX2WO7VbS7n-fEe8fjO38ga-4fwY](https://notifications.google.com/g/p/ACnX6LYQtakR7U0LgxUFvNh6FDw97sfPI00XbfFkB5_s6htHF-CeQ9IT547RKbCVZi8PUlSDFzSErIoSTABWcOHOcmPiqe4r9Bnibs-qJNoihFl5zqFWu7ntFCj_wqQC0AMRG53V8lx1nql7xman47z-G5sRYWXkqJ3eUFDMFuTH68oFkeazITW2uemxo9Xs50PbAinxzdd39lujErV8u5GmT13kKuHIxNlRaDMGaHLnA7TSvqMjZciUCiBZMqkLaPThsxlAqN9oi8tfN__4n_1pYYFbpLY5cuf2xkLpOlVVCflFXMiB7IcircrpTQvuBPTuNTyuqyXz1x0B3X9yuXMahPxXxolcUJaeijqsXObO1KXZE8b7vBiffORg14mo5XQuHhQwTgHhd9FDfhnku3ZxPdQZNJ0gKcIOP9HzyWpkuYpuSOGEJ16_kk2bHX2WO7VbS7n-fEe8fjO38ga-4fwY) Une fois cette étape effectuée, des données commenceront à être ajoutées aux rapports sur les conversions dans la nouvelleversion d'Analytics. [https://notifications.google.com/g/p/ACnX6LZxHgQSIqIXcyxYdopAwWshYw3BWdCVyKZOfQEfauijNMJLDDJ2eCiWB0fVQZZOJLLnp2uhsVvuS0jsgR-pc4t6UPyViiuxIT5OMydC0UDIoekkd98E_FnXkbzwiirJeRiJoVILRdCBo_MBVAxddb-4hEdiQQrNR5Yo-JMuPs0YD0YAweE3JZdKSenjPJuCaisBfpmWLQJakHRoOdyHiK5a4DLthl4K4bHrAnwx0tnlTwP2696efqTdxdBcY-skGVUvJXXebCrfyGzyF-0fNWaPGL6kNGWx75cu2f9j5w_jHjCflBDWeLh1rA](https://notifications.google.com/g/p/ACnX6LZxHgQSIqIXcyxYdopAwWshYw3BWdCVyKZOfQEfauijNMJLDDJ2eCiWB0fVQZZOJLLnp2uhsVvuS0jsgR-pc4t6UPyViiuxIT5OMydC0UDIoekkd98E_FnXkbzwiirJeRiJoVILRdCBo_MBVAxddb-4hEdiQQrNR5Yo-JMuPs0YD0YAweE3JZdKSenjPJuCaisBfpmWLQJakHRoOdyHiK5a4DLthl4K4bHrAnwx0tnlTwP2696efqTdxdBcY-skGVUvJXXebCrfyGzyF-0fNWaPGL6kNGWx75cu2f9j5w_jHjCflBDWeLh1rA)|
|---|

À bientôt sur le Web,

---

L'équipeGoogle Analytics

---

**Table des matières :**

[**Prepare to move to Google Analytics 4**](https://www.notion.so/Prepare-to-move-to-Google-Analytics-4-ded06070fbbb47deb5618d023ee7d03e?pvs=21)