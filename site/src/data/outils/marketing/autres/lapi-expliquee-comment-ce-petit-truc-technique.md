---
section: apps
metadataEnrichedAt: null
tags:
- Outils
imageNameKey: null
u_site: null
title: L'Api Expliquée Comment Ce Petit Truc Technique Peut Vous Rendre Millionnaire
author: Diane
description: 'Découvre L''Api Expliquée Comment Ce Petit Truc Technique Peut Vous
  Rendre Millionnaire : outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
---

- Utilisez des API REST dans vos projets web
    
    - Les méthodes - Utilisez des API REST dans vos projets web - OpenClassrooms
        
        [https://openclassrooms.com/fr/courses/3449001-utilisez-des-api-rest-dans-vos-projets-web/3501926-les-methodes](https://openclassrooms.com/fr/courses/3449001-utilisez-des-api-rest-dans-vos-projets-web/3501926-les-methodes)
        
        [3449001_teaser_picture_1571668144.jpg%3Fr%3Dpad](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87284e24-39fe-4ac1-bdd6-2bb473c1e3a0/3449001_teaser_picture_1571668144.jpg3fr3dpad)
        
        Les méthodes HTTP sont toujours des verbes en **majuscules**. Apprenons-les !
        
        ### GET
        
        GET est la méthode la **plus utilisée** pour les requêtes HTTP. Comme le suggère le mot “GET” en anglais, cette méthode existe pour récupérer des données d'une ressource. Ce type de requête comporte la première ligne importante que vous avez vue dans le chapitre précédent et les en-têtes pour communiquer les infos du client mais n’a pas de corps, car elle ne fait que chercher des informations externes (rien à envoyer avec). Par contre, vous pouvez envoyer des paramètres à l’URI en forme d’un query string pour pouvoir recevoir les données spécifiques que vous cherchez.
        
        ```
        GET <http://site.com/users?parametre=exemple&amp;autre_parametre=exemple2>
        ```
        
        Une requête GET peut aussi être conditionnelle, par exemple GET la ressource si une condition est vraie (sinon laisse tomber).
        
        On utilise POST pour envoyer des données dans une requête et souvent pour l’ajouter à la ressource précisée dans la partie URI de la première ligne de la requête. Le type de contenu dans le corps de la requête peut être défini avec un en-tête `Content-type` pour que le serveur sache comment traiter les données dans la requête. Par exemple si vous utilisez une API pour laisser un commentaire sur un article sur un autre site la requête POST peut ressembler à la suivante :
        
        ```
        POST /page.php HTTP/1.1
        
        Host: site.com
        
        Content-Type: application/x-www-form-urlencoded
        
        Content-Length: 36
        
        titre=titreici&corps=icimoncommentaire
        ```
        
        Dans cette requête vous voyez deux nouveaux en-têtes. `Content-type` définit le type d’encodage utilisé pour les informations. `Content-length` définit le nombre des caractères dans le contenu : avec cette information le serveur sera certain d’accepter tout ce que vous avez envoyé.
        
        ### PUT
        
        Vous utiliserez PUT beaucoup moins souvent que POST mais regardons tout de même cette méthode. POST, comme vous avez pu le constater, envoie des données au serveur et le serveur lance une action après la requête même si cette action ne se passe pas forcément au niveau de l’URI précisé par le client : c’est le serveur qui interprète la requête et qui décide la suite. Contrairement à POST, PUT indique que seul l’URI précisé par le client doit être affecté, point final.
        
        Par exemple, disons que vous voulez créer un nouvel utilisateur qui n’existe pas dans une base de données d’un site. Normalement vous le feriez avec POST :
        
        ```
        POST /users HTTP/1.1
        name=jessica
        ```
        
        Cette requête permettrait au serveur de décider de créer un nouvel utilisateur et de lui donner un ID correct. Avec PUT, cela ressemblerait à la requête suivante :
        
        ```
        PUT /users/10 HTTP.1.1
        name=jessica
        ```
        
        Cette requête dit deux choses : elle demande de créer un nouvel utilisateur à l’ID 10 s’il n’y en a pas ou de remplacer l’utilisateur à cet ID ! Ce n'est pas une bonne idée. Il vaut mieux en général laisser le serveur décider quel ID il faut donner à un nouvel objet et quoi faire avec. Comme vous êtes le client dans ce cas, ce n'est pas vraiment vous qui savez mieux, surtout si vous travaillez avec une API REST externe.
        
        Cette méthode est assez claire ! En utilisant DELETE vous dites que vous voulez supprimer la ressource donnée dans l’URI. Par contre, vous ne pourrez pas être sûr que l’action s’est vraiment passée, car la réponse du serveur, quelle qu'elle soit, n'est pas une véritable confirmation de suppression.
        
        
        
        Format d'une réponse HTTP
        
        ```
        HTTP/1.1 200 OK
        Content-Language: en
        X-Ratelimit-Limit: 5000
        Vary: Cookie, Accept-Language
        Date: Thu, 21 Jan 2016 14:19:31 GMT
        Content-Length: 67
        Expires: Sat, 01 Jan 2000 00:00:00 GMT
        X-Ratelimit-Remaining: 4998
        Connection: keep-alive
        Content-Type: application/json; charset=utf-8
        Cache-Control: private, no-cache, no-store, must-revalidate
        Pragma: no-cache
        {
        
          "nom" : "Fluffy",
          "animal" : "chat",
          "couleur" : "noir",
          "goûts" : {
             "jouets" : [
                {
                   "nom" : "balle",
                }
             ]
          }
        }
        ```
        
    - Les réponses - Utilisez des API REST dans vos projets web - OpenClassrooms
        
        [https://openclassrooms.com/fr/courses/3449001-utilisez-des-api-rest-dans-vos-projets-web/3501941-les-reponses](https://openclassrooms.com/fr/courses/3449001-utilisez-des-api-rest-dans-vos-projets-web/3501941-les-reponses)
        
        [https://vimeo.com/154620924](https://vimeo.com/154620924)
        
        La communication HTTP ne se déroule pas que dans un seul sens ! Les réponses d’une API sont d'ailleurs la principale raison qui vous pousse à utiliser une API. Les réponses HTTP sont au format suivant :
        
        
        
        Format d'une réponse HTTP
        
        Vous remarquez peut-être des **similarités** entre ce format de réponse HTTP et le format de requête HTTP vu dans le chapitre Les requêtes. Bien joué ! Il y a des éléments spécifiques pour ces deux éléments de communication HTTP, mais les deux formats ne sont pas très différents.
        
        ### La version HTTP
        
        Indique la version d'HTTP utilisée.
        
        ### Le code réponse HTTP
        
        Indique l'état de la réponse. La ressource a-t-elle bien été trouvée ? Si non, pourquoi ? Ce code de 3 chiffres vous dira tout ce qu’il faut savoir. Il y a à peu près 30 codes possibles qui couvrent plein de situations de “Tout va bien !” à “Mince, y’a un truc qui va pas !” Dans le prochain chapitre, vous allez apprendre les codes que vous verrez le plus souvent, mais pour l’instant gardez simplement en tête que vous en connaissez déjà quelques-uns (comme la fameuse erreur “404 page non trouvée”).
        
        ### Les en-têtes
        
        Ici vous trouverez des infos classiques (la date, etc.) comme vous l'avez vu dans le chapitre sur les requêtes. Dans les en-têtes réponses spécifiquement, vous trouverez aussi les infos sur le serveur lui-même comme son type ou sa localisation !
        
        ### Le corps
        
        Le corps de la réponse contient des données cruciales pour les utilisateurs des API REST. Quand vous regardez un site web sur votre ordinateur, le corps d’une réponse est normalement en HTML pour que vous puissiez voir le site mis en forme. Par contre, dans une situation API, quand deux applications communiquent entre elles, le corps de la réponse est souvent en forme de JSON avec des paires key:value. Eh oui, les applications n’ont pas besoin de la représentation visuelle ! Du c oup, l’application client peut récupérer les paires key:value et décider quoi faire avec : soit les assigner aux variables, soit les traiter d’une autre manière.
        
        Ici un exemple de réponse HTTP. Prenez quelques minutes pour comprendre chaque ligne en considérant les explications dans ce chapitre !
        
        ```
        HTTP/1.1 200 OK
        Content-Language: en
        X-Ratelimit-Limit: 5000
        Vary: Cookie, Accept-Language
        Date: Thu, 21 Jan 2016 14:19:31 GMT
        Content-Length: 67
        Expires: Sat, 01 Jan 2000 00:00:00 GMT
        X-Ratelimit-Remaining: 4998
        Connection: keep-alive
        Content-Type: application/json; charset=utf-8
        Cache-Control: private, no-cache, no-store, must-revalidate
        Pragma: no-cache
        {
        
          "nom" : "Fluffy",
          "animal" : "chat",
          "couleur" : "noir",
          "goûts" : {
             "jouets" : [
                {
                   "nom" : "balle",
                }
             ]
          }
        }
        ```
        
    - Les codes HTTP - Utilisez des API REST dans vos projets web - OpenClassrooms
        
        [https://openclassrooms.com/fr/courses/3449001-utilisez-des-api-rest-dans-vos-projets-web/3501946-les-codes-http](https://openclassrooms.com/fr/courses/3449001-utilisez-des-api-rest-dans-vos-projets-web/3501946-les-codes-http)
        
        [3449001_teaser_picture_1571668144.jpg%3Fr%3Dpad](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2aee3d08-2861-483c-b0ea-836425a67782/3449001_teaser_picture_1571668144.jpg3fr3dpad)
        
        [https://vimeo.com/154622268](https://vimeo.com/154622268)
        
        La ressource n’a pas été trouvée. Vous verrez cette page dans votre navigateur quand vous tentez d'aller sur une page web qui n’existe pas. Une application reçoit le même code réponse quand elle visite une ressource qui n’existe pas (et ça reste aussi frustrant).
        
        ### 500 Internal Server Error
        
        Il y a un problème avec le serveur et la requête a planté. Zut ! :(
        
        Selon le code HTTP reçu, l’application client peut décider quoi faire après. Par exemple si un serveur répond avec un code 500, le client pourra pas assigner les données anticipées à une variable. Par contre avec un code 200, le client saura que la réponse était bonne et qu’il pourra procéder à l’interprétation des informations reçues !
        
        Vous pouvez en apprendre plus sur le site de [W3C](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
        
- [C'est quoi une API](https://mail.google.com/mail/u/0/#inbox)
    
    - Apipheny.**Here are the most important API terms you need to know:**[GET Requests](https://click.mlflow.com/link/c/YT0xNjg5Mjg0NDAzMTYwNjg0MzcyJmM9bzN1MCZlPTAmYj01NzUxMjM1ODEmZD1kOGU5Zzhv.6alS69GlrvbDB20XagamZVwkV_gfwUIBBywZ67I1DdI) – Grabbing data from a source using that source’s API (i.e. “GETting data from somewhere”)[POST Requests](https://click.mlflow.com/link/c/YT0xNjg5Mjg0NDAzMTYwNjg0MzcyJmM9bzN1MCZlPTAmYj01NzUxMjM1ODQmZD16M2EzYTZx.8PhAXB_E8EW7A5FXr_ZGjHdkhdzZDSCYklS3rhSO2w8) – Sending data to a destination using that destination’s API (i.e. “POSTing data somewhere else”)[API URL Paths](https://click.mlflow.com/link/c/YT0xNjg5Mjg0NDAzMTYwNjg0MzcyJmM9bzN1MCZlPTAmYj01NzUxMjM1ODcmZD1iN28zajhq.c9rB257uewnF5LUD6efhVvUUycgxzNUcE8rDzocbERI) – An address that allows you to access an API and its various features[Endpoints](https://click.mlflow.com/link/c/YT0xNjg5Mjg0NDAzMTYwNjg0MzcyJmM9bzN1MCZlPTAmYj01NzUxMjM1OTAmZD1uMGUweTly.nwrOhhncteJYh3L1kK-mrf6N-19oA57lLM1ovGlrs1c) –A specific “point of entry” in an API[Parameters](https://click.mlflow.com/link/c/YT0xNjg5Mjg0NDAzMTYwNjg0MzcyJmM9bzN1MCZlPTAmYj01NzUxMjM1OTMmZD1uNmk5Yzh1.7viC6XYj5J5XZjeS2xWFAX5R4e421KScihCT8UW3EGg) – Strings you can add to your URLs to get more relevant and manageable results[Headers](https://click.mlflow.com/link/c/YT0xNjg5Mjg0NDAzMTYwNjg0MzcyJmM9bzN1MCZlPTAmYj01NzUxMjM1OTYmZD13OGQzaTV4.AEowMaeUFB51_luDOyawcXlgGbrdCtDPOFCs8uYC2hI) – An extra source of information for each API call you makeOnce you get a good grasp of these API terms, you’ll be able to understand almost any API documentation — and, as a result, more easily use an API with
    - Learn about Apipheny's features:[Using the =APIPHENY() Custom Function](https://click.mlflow.com/link/c/YT0xNjg5Mjg0NDAzMTYwNjg0MzcyJmM9bzN1MCZlPTAmYj01NzUxMjM2MDImZD1lOGY0eTVn.ZbQYslGjqWrShtvjgwfEm_mvfarxIp14OCIucII9Omc)[Scheduling API Requests](https://click.mlflow.com/link/c/YT0xNjg5Mjg0NDAzMTYwNjg0MzcyJmM9bzN1MCZlPTAmYj01NzUxMjM2MDUmZD1rNWE4dTh3.PcONXlGmc3gTvXE-Nv8_RXC3xlxIGEVubUamDsltUvY)Additional resources from our blog:[Making POST Requests from Google Sheets](https://click.mlflow.com/link/c/YT0xNjg5Mjg0NDAzMTYwNjg0MzcyJmM9bzN1MCZlPTAmYj01NzUxMjM2MDgmZD1xMXo0cjNs.oL4gBLnSJeDOkhY9mzluQeVSoLtIhIlLSmVB1IniV2I)[Importing JSON data into Google Sheets](https://click.mlflow.com/link/c/YT0xNjg5Mjg0NDAzMTYwNjg0MzcyJmM9bzN1MCZlPTAmYj01NzUxMjM2MTEmZD1yMXI0dzds.MPCe6lW9XcwLQemn4PNbx2icM1QPdgqiH0gM4GGZ5GI)[Connecting a REST API to Goog](https://click.mlflow.com/link/c/YT0xNjg5Mjg0NDAzMTYwNjg0MzcyJmM9bzN1MCZlPTAmYj01NzUxMjM2MTQmZD1iMXgxeTVu.aodtmjEP9f9veE0oe6hfEKnPYrEs04NjrCbez5ygZJ0)
    - api publiques pour construire des apps cools
        - [Enrichissez vos services avec les données de Pôle emploi](https://pole-emploi.io/data)