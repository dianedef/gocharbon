---
section: apps
metadataEnrichedAt: null
title: Evolution Des Techno Web
author: Diane
tags:
- Outils
description: 'Découvre Evolution Des Techno Web : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

# The current problem

To understand how we got here, we first need to understand the evolution of web development across the recent decades:

## **Early days**

Websites were simply a collection of static HTML documents, retrieving/posting data to and from the server was done using things like form actions, and would require a full page reload to fetch the modified HTML document from the server, this was less than ideal.

## **AJAX**

In 1999, Microsoft introduced XMLHTTP in IE5, giving rise to the concept of _AJAX_ (Asynchronous JavaScript and XML), and with its popularity rising in the early 2000s, allowing client-side to make asynchronous content fetching, and making JavaScript the primary way of content fetching for the first time.

## SPAs

After some time, web developers realized that native apps felt better than the websites they were building, and what was the problem? you ask…

_Page reloads_, native apps don’t have full page reloads, and instead seamlessly transition between different pages, and what’s the solution? you ask…

_Single-page applications_: the concept of using a single HTML document to render the whole web application, but that also had a problem, what now? you ask…

_Too much JavaScript._ It makes the bundle larger, causing slower web apps and complicated codebases, and while full-stack frameworks solve the problems with initial bundle size and SEO, the whole application being made with JavaScript can be _not ideal_ sometimes.

## HTMX

HTMX aims to make content fetching easier and more accessible directly from HTML, eliminating the need to use AJAX from JavaScript, resulting in simpler development, and faster websites.

# The new paradigm

The concept of HTMX is centered around rendering fetched content directly in the HTML.

Instead of the server responding with JSON which gets converted to UI elements in the client, the server responds with HTML which gets rendered directly in the page.

HTMX primarily uses a set of HTML attributes prefixed with _hx_ like _hx-target_, _hx-get_, _hx-swap,_ and so on, that are used to fetch content and render it to the page dynamically.

<!-- the button will make a POST request when  
clicked, then replace its outerHTML with the response -->  
<button hx-post="/clicked" hx-swap="outerHTML">  
  Click Me  
</button>

# Limitations

While HTMX can be a powerful tool, it’s not a replacement for modern web application frameworks and SPAs -_yet_-, it has some limitations that prevent that from happening:

- **Lack of client-side interactivity**: While HTMX can make interacting with the server very simple, it doesn’t support client-side interactivity. This isn’t an actual issue, since this wasn’t the purpose of HTMX to begin with.
- **Lack of reusable components**: HTMX doesn’t provide a way to reuse elements, a crucial part of modern web frameworks. Again, this isn’t an actual issue since reusable components aren’t an intended feature.
- **Splitting the UI between the client and the server**: Modern web applications and especially SPAs completely separate the client from the server, and limit all communication between them to JSON-based APIs, HTMX on the other hand relays on the server sending HTML directly instead of raw data represented, forcing the developer to split the UI between the client and server sides, causing the separation of frontend and backend to become impractical, and potentially enforcing the use of full-stack frameworks.

HTMX is described in the README file as:

> High power tools for HTML.

Considering all of that, while HTMX can replace SPAs in some cases, it doesn’t try to be a replacement in the first place, and it doesn’t fill the same niche, it’s a completely different web development paradigm that aims to make content fetching accessible directly from your markup files.

# Conclusion

While HTMX is an exciting new way of web development, and it can change how and when many frameworks are used, it still isn’t a complete replacement for the current set of technologies, maybe unless you use the BETH stack.

# Stackademic

_Thank you for reading until the end. Before you go:_

- _Please consider_ **_clapping_** _and_ **_following_** _the writer! 👏_
- _Follow us on_ [**_Twitter(X)_**](https://twitter.com/stackademichq)_,_ [**_LinkedIn_**](https://www.linkedin.com/company/stackademic)_, and_ [**_YouTube_**](https://www.youtube.com/c/stackademic)**_._**
- _Visit_ [**_Stackademic.com_**](http://stackademic.com/) _to find out more about how we are democratizing free programming education around the world._