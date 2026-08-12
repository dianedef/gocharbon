---
section: tutos
type: Blog
statut:
- backlog
_priorité: normal
tags:
- Tutoriels
title: Comment Gérer Les Liens D'Affiliation Au Niveau Seo
author: Diane
description: 'Découvre Comment Gérer Les Liens D''Affiliation Au Niveau Seo : outil
  français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

ninjalinking [RÉUSSIR son SEO, avec 0€, en 2024. - YouTube](https://youtu.be/lVnuyGZmp_A?t=820)


One of the primary concerns of most Affiliate marketers is dealing with **affiliate links from the SEO perspective**.

One way to make sure your affiliate site grows and doesn’t get penalized due to affiliate links is by making sure you are adding value to your layer of content. An affiliate site should also be promoted and maintained like any other high-quality site.


## Matt Cutts statement on Affiliate links and SEO:

Now, those who keep an eye on SEO and Google search update must be knowing Google’s engineer:  Matt Cutts.

At a recent, [SEM Expo conference](https://marketinglandevents.com/smx/), Matt Cutts talked about **how Google handles affiliate links** and what should we do if we are worried about such affiliate Links.

Though this video is short, after the video read my technique to avoid any SEO penalty due to affiliate links.


As mentioned by Matt in this video, in most cases, Google handles affiliate links without any issue, as they know about the majority of [affiliate network](https://www.shoutmeloud.com/top-affiliate-networks.html)s, but if you are still worried, you can add a nofollow link or sponsored link to such money links.

Now, if you are new to the nofollow term, you can refer to our earlier guide on [How to add nofollow tag to a link](https://www.shoutmeloud.com/how-to-add-nofollow-link-attribute-to-any-link-seo.html "How to aff nofollow tag to a link"). For adding rel=sponsored link, read on…

### How to deal with Affiliate links, SEO in WordPress:

In the past 13+ years, I have tried many best [WordPress affiliate plugins](https://www.shoutmeloud.com/best-wordpress-affiliate-plugins.html), and I have found the one that works best in all situations, including handling SEO. There are many paid and available free Affiliate plugins, and one of them is [ThirstyAffiliates](https://www.shoutmeloud.com/visit/thirsty-affiliates/). You can get detailed information about this plugin in one of my earlier posts:

-   [Thirsty Affiliates Affiliate link Cloaker for WordPress](https://www.shoutmeloud.com/thirstyaffiliates-review.html "Gocodes plugin: Affiliate link cloaker for WordPress")

In the plugin settings, you can add a no-follow attribute to all links cloaked using this plugin, which will help you to stop passing link juice to affiliate links.

20**21 update:**

In a recent update, the [Google search central team has made it clear](https://developers.google.com/search/blog/2021/07/link-tagging-and-link-spam-update) that “We ask sites participating in affiliate programs to qualify these links with rel=” sponsored”, regardless of whether these links were created manually or dynamically.”

If you are not adding rel= “sponsored” then “our systems might also take algorithmic actions. Both manual and algorithmic actions may affect how we see a site in Search, so it’s good to avoid things that may cause actions, where possible.”

You can [read the guidelines here](https://developers.google.com/search/blog/2021/07/link-tagging-and-link-spam-update) and more about rel=sponsored [here](https://developers.google.com/search/docs/advanced/guidelines/qualify-outbound-links).

### How to add rel=sponsored to all your affiliate links?

The steps vary based on the different solutions you are using to mask your affiliate links. Here I’m sharing settings for the two most popular affiliate plugins:

-   [Thirsty Affiliates](https://www.shoutmeloud.com/visit/thirsty-affiliates/)
-   Pretty links

Thirsty Affiliates: Adding Rel=sponsored to all links

Head over to Thirsty Affiliates > Settings > Link appearances and search for “Additional rel attribute tags”

Here simply add “sponsored” which will add rel=sponsored to all the affiliate links cloaked using the Thirsty affiliates plugin.


Pretty links:

If you are using Pretty links, head over to Pretty links > Options and enable sponsored.


Using the above method, you will be able to add rel=sponsored to all your old affiliate links and make your blog compliant with the new Google outbound links rule.

Anyhow, I suggest you use any plugin like [Thirsty Affiliates](https://www.shoutmeloud.com/thirstyaffiliates-review.html) or any other to mask your affiliate links, as default links look ugly and might lower down CTR

# How to Add Nofollow To A Link For SEO

Nofollow & Dofollow are the two most commonly spoken words in the field of SEO.

Any blogger or webmaster who understands the importance of search engine optimization should know the [basics about Nofollow and Dofollow](https://www.shoutmeloud.com/understand-dofollow-nofollow-link-seo-basics.html "Understand Nofollow and dofollow") along with when to use the Nofollow tag attribute.

Today, I will tell you how to **add Nofollow** to any link. In this tutorial, you will learn when, why & how should you use [Nofollow](https://en.wikipedia.org/wiki/Nofollow) tag and Dofollow tag.

One of the biggest misconceptions that I want you to get out of your head is, lots of Dofollow links are bad. On the contrary, Dofollow links are great. It helps in improving your website trust score as long as you are linking to authoritative websites.

In fact, when I was learning about [On-page SEO optimization](https://www.shoutmeloud.com/on-page-seo.html), one thing that I learned is linking to a reliable and trustable source will help you to boost your ranking. Now, let’s look into some aspect of nofollow links.

## Why do you need to add Nofollow Tag to any link?

One of the basic rules of SEO is giving more importance to important posts by keeping it Dofollow and keeping other links as nofollow. Now, the most basic question is what is Dofollow.

Dofollow links are links which we want Google to follow from our page, and nofollow links are those links that we don’t want Google bot (Or any other search engine bots) to follow. Usually, whenever we have to link to any bad domain, we use nofollow link attributes.

By default, any WordPress blog or BlogSpot blog adds Dofollow attribute whenever we add any link. Now, when we are linking to any site, and we don’t want to pass the link juice, we use the Nofollow link attribute. This will help to transfer the link juice to correct domain.

Moreover, when you are linking to affiliate products, any spam site for any reasons, make sure to use Nofollow tag attributes. Though, some time back Google specified that Google has started ignoring Nofollow tags, but still SEO guru believes, it’s a good practice to use Nofollow link attributes for such domains when it’s not a quality source. For the info, many search engine bots started following nofollow links, but they don’t use such links for ranking.

### How to add Nofollow Attributes to a link?

By default your link look like this

<a href="https://www.shoutmeloud.com">How to Blog</a>

To make it nofollow, simply add an attribute Nofollow to the link

<a href="https://www.shoutmeloud.com" rel="nofollow">How to blog</a>

When writing in WordPress or Blogger, you can go to Edit HTML mode and **add rel=” nofollow”** in front of links to make it nofollow.

## WordPress Plugin To Add No-Follow Tag Attribute

One good thing about WordPress is that [you can find a plugin for everything](https://www.shoutmeloud.com/wordpress-plugins-that-power-shoutmeloud.html). There are a few plugins which will let you make all of your external links no-follow, but I oppose that practice.

It’s a good idea to **_selectively_** no-follow links rather than no-following all of your external links. Don’t forget about the [benefits of external links in SEO](https://www.shoutmeloud.com/seo-benefits-and-tips-for-outbound-links.html "benefits of external links in SEO").

The [Ultimate Nofollow WordPress plugin](https://wordpress.org/plugins/nofollow/) is one handy plugin for bloggers, to quickly add a no-follow tag to any link from the WordPress post editor. Also, this plugin will let you add no-follow link attributes to all links in the comments.

This is a plug and play plugin. All you need to do is [download and install the Ultimate Nofollow plugin](https://wordpress.org/plugins/nofollow/), and after activation, it will add a no-follow option box in the WordPress post editor.

Here is a screenshot:


You can also go to **Settings > Nofollow** and uncheck the option to make your comment links no-follow.

If you are looking for a quick option to add the no-follow tag attribute to any link in WordPress, this is a good plugin.

Usually to maintain the link juice, we keep our blog comments and external ad links as Nofollow. You can use any of the WordPress SEO Plugins to keep comments and ads link as nofollow. Usually, links in WordPress comment section are nofollow.

For internal links, I would suggest you keep them as Dofollow (which stays by default) and also open in a new tab for users experience. Keeping your internal link do-follow it will help search engine bots to crawl more pages on your site.

If you have lots of outbound link from a single page, I will suggest keeping at least those links Nofollow that doesn’t add value to the search engine. So that you will not pass your link juice to all of the links especially your advertisement links and affiliate links.

This is the same thing I have implemented in my previous post on [The list of dofollow forum to increase your backlinks](https://www.shoutmeloud.com/the-list-of-dofollow-forums-for-bloggers-to-increase-backlinks.html).

_Do let us know if this tutorial helped you to learn about Nofollow and how you can add Nofollow to any links. If you have any queries, feel free to let us know._

# Understand DoFollow & Nofollow Link: SEO Basics
Whenever we talk about search engine optimization, some of the common words are noindex, doindex, nofollow, dofollow, meta robots and so on. All the words hold equal importance in the book of SEO. In this post I will be explaining about Nofollow and Dofollow. Especially for newbies who are new to SEO or people who are still not clear about Nofollow or dofollow, this post will be useful.

**Nofollow** is an HTML attribute value used to instruct search engines bots that a hyperlink should not influence the link target’s ranking in the search engine’s index. It is intended to reduce the effectiveness of certain types of search engine spam, thereby improving the quality of search engine results and preventing spamdexing from occurring in the first place. This is a concept introduced by Matt Cutts and Jason Shellen in the year 2005.

## **What Is The Difference between NoFollow & Dofollow**

**Nofollow** links attributes do not allow search engine bots to follow link.That means if the website owner is linking back to you with nofollow attributes, it does not pass on link juice. Only Humans will be able to follow the links. Though some time back Google made it clear that they don’t consider nofollow link attributes but weightage of such links are really less. Even though, it’s a good practice to use Nofollow link attribute to those link, where you don’t want to pass link-juice.

An example of **Nofollow** Link:

<a href=”http://www.google.com/” rel=”nofollow”>Google</a>

-   [How to add Nofollow tag to a link](https://www.shoutmeloud.com/how-to-add-nofollow-link-attribute-to-any-link-seo.html)

Dofollow links allow google (all search engines) to follow them and reach our website. Giving us link juice and a backlink. If a webmaster is linking back to you with this link both Search Engine and Humans will be able to follow you. The best way to give someone dofollow love is allowing keyword in the [anchor text](https://www.shoutmeloud.com/anchor-text-seo.html "anchor text"). This means when you are linking to any website or page, use the targeted keyword as anchor text.

### An example of **Dofollow** Link:

<a href=”http://www.google.com/”>Google</a>

Note: By default all the hyperlinks are dofollow. So, you don’t need to do anything to make a link do-follow.

**_Important Notice:-_**

Recently Google has said that they will still count the [nofollow link](https://www.shoutmeloud.com/how-to-add-nofollow-link-attribute-to-any-link-seo.html "nofollow link") as an outgoing link in terms of the distribution of page rank from your page. Though again it also depends on where that nofollow link is placed. Placing a nofollow link at the bottom of the page has the least impact, and when placed at the top of the page, it carries some impact.

## **Types Of No-Follow**

-   **Robots Meta Tag** : <meta name=”robots” content=”nofollow” />

This tells bots/crawlers/spiders not to follow links on the full page.

-   **Link Attribute** : <a href=”http://www.google.com” rel=”nofollow”>

This tells search engines not to count the link in terms of ranking pages.

[


](https://www.shoutmeloud.com/wp-content/uploads/2011/02/robots-meta.png)

_Quick Tip: Try to keep noindex attribute for pages like contact and nofollow attribute for affiliate links on your blog posts._ If you are linking to any spam website for any reason, use the nofollow link attribute.