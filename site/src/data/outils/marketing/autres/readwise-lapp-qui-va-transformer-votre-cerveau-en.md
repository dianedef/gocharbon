---
section: apps
metadataEnrichedAt: null
tags:
- Outils
imageNameKey: null
u_site: null
title: Readwise L'App Qui Va Transformer Votre Cerveau En Superordinateur
author: Diane
description: 'Découvre Readwise L''App Qui Va Transformer Votre Cerveau En Superordinateur
  : outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
---

Faire de la veille et de la curation délibérée grâce à Readwise
[Getting Started with Reader - YouTube](https://www.youtube.com/watch?v=KFRDPRTKbCA)

[How to Set Up Your Reader Feed - YouTube](https://www.youtube.com/watch?v=hekAMJsAy3s)

[Tristan Homsi sur Twitter : "Huge news: after 1.5 years of private beta, thousands of testers, and a looot of incredible work by the team… @ReadwiseReader is finally in public beta! Save everything to one place, highlight like a pro, and replace several apps with one.](https://twitter.com/homsiT/status/1603143634047705089) [https://t.co/xsbJnS0U5t](https://t.co/xsbJnS0U5t)" / Twitter

[Mati Tucci (@TucciMatias) / Twitter](https://twitter.com/TucciMatias)

# Private Beta Update #24 (Feed UX, Mobile Home, Daily Digest, and more)

## Metadata

- Author: Daniel Doyon
- Category: rss
- URL: [https://readwise-community.ghost.io/private-beta-update-24/](https://readwise-community.ghost.io/private-beta-update-24/)

## Highlights

Feed UX Enhancements 🔀

This update refers not so much to a single feature, but to a basket of enhancements to the existing Feed user experience. We hope the basic UX is now both smoother and more intuitive.

First, Feed and Library are now mutually exclusive. If you're relatively new to Reader, hopefully you have no idea what this means. But if you've been with us for a while, you might have noticed a confusing conceptual model where you could move an item from Feed to one of Inbox, Later, or Archive (collectively, the "Library") and still see that item in the Seen section of Feed. No more. Now when you move a document from Feed to Library, it's mutually exclusive.

Mark all as seen

You could always "Mark all as seen" using Bulk Actions (`Shift + B`). You could also as of late "Mark all above as seen" using added customizable swipe actions. But these generalized measures were ultimately too inconvenient for power users so we've caved on introducing a little entropy to the product by adding specialized user interface for Feed.


Keyboard shortcut is `Cmd/Ctrl + Shift + Space`

Now you quickly scroll through the new items in the Unseen tab of Feed, save those things that catch your attention, and mark everything as seen once finished rather than having to do so one-by-one.

Delete all

Delete all is the user interface analog of the Seen tab to "Mark all seen" on the Unseen tab.


The delete all UX flow here is quite conservative with guardrails to prevent you from unintentionally deleting documents with any trace of annotation be it a highlight, tag, or note so you can delete all with confidence.

**Pro tip:** Until we get a chance to do another round of performance optimizations, blowing out all the worthless documents in the Seen section of your Feed using this delete all button can offer immediate, significant speed enhancements.

Auto-advance

One of the funny things about working on an all-in-one product is how polarized feedback can be on the same exact feature. In the same hour, we'll receive feedback along the lines of:

> I'd much prefer if the button at the end of an article took me back to the list, rather than next article, i.e, just "Archive" rather then "Archive and next". I'd say few people read the articles they saved sequentially.

Followed by:

> In Readwise when I archive an article in the Feed section, it would be nice to move to the next item automatically instead of showing the overview.

(these are both real)

Contrary to Linear, we do see user settings as a failure of product (cf [Settings are not a design failure](https://linear.app/blog/settings-are-not-a-design-failure)) so we typically try to find better solutions before building a toggle. (Linear makes B2B software which is different from consumer where, trust us, 80% of users will never change a default setting.) But alas, we could not find one here.

You can now choose your preferred behavior after moving a document whilst reading: return to the list or advance to the next document.


Mark seen and next

The end of reading button in Feed was throwing off a confusing vibe to users. Rather than reading "Archive and next", it now reads "Mark seen and next".


Group feeds into quasi-folders

Finally, this is not a new feature, but it bears repeating for the folks who are just joining Reader (there's a lot of newcomers 👋). You _can_ group feeds into "folders" in Reader. To do so, you use our organizational primitive called filtered views.

- [Quick tutorial here.](https://www.loom.com/share/c0914d2e18c6483699945c3e873f68b3) • For a more advanced overview of the Feed section, watch [Erin's Reader 201 walkthrough](https://www.loom.com/share/e1cbf9eca7cc48c6b8a22ad614c9e353). • For a more advanced overview of Filtered Views, watch [Erin's Reader 202 walkthrough](https://www.loom.com/share/3ba95e9f9b214a95b33fa925bb85c443).

For ordinary users, this is more than sufficient. For extreme infovores coming from Feedly, Inoreader, Reeder, etc., the concept, although not a 1:1 mirror of folders, will scale – we just need to add more density to the navigation.

Props to [Mati](https://twitter.com/TucciMatias) for gracefully sequencing these changes without interrupting anyone's experience.

Mobile Home 🏠

The Home screen is finally available on mobile. The intent of this screen is both emotional (to delight the senses) and functional (to speed you into reading). It's been ready for a long time but was blocked by a performance refactor on filtered views (discussed below).


You'll notice that your default screen upon launching Reader is still the Inbox. The reason for this is that we want to ease into changing such a crucial UX tweak. Soon there will be a toggle (😑) enabling you to switch over to Home as the default screen.

Props to [Adam](https://twitter.com/lynchy010) for carrying Home through from web to mobile.

Daily Digest v1 📰

The Daily Digest is lowkey the most significant feature of this update. The Daily Digest is the "product hook" for those of you who want to build a habit of returning to Reader to stay on top of your Feed, whittle down your Later backlog, and, hopefully, read everyday.

Enable the Daily Digest on your Home screen or in the Settings page of the mobile app. Once opted-in, you'll start receiving an app notification everyday alerting you of a new Daily Digest containing up to 25 items from your Feed and Library.


Left: In-app affordance. Middle: New item surfaced from Feed. Right: Previously-saved item surfaced from Later. I saved that thing a year ago and, candidly, I no longer care. To Archive you go!

The first 20 are new items drawn from your Feed. If there are more than 20 new items in your Feed between yesterday and today, we use heuristics and light AI to skim off the 20 best, making sure you don't miss anything important. The objective of this section is read those things worth reading right now, save those things worth reading later, and discard those things not worth your attention at all.

The second 5 items are previously saved items drawn from your Later backlog. The objective of this section is kind of like the Readwise Daily Review: to make it easy to consistently review things that you saved for your future self. More specific to Reader, this facet of the ritual prevents your backlog from becoming overloaded. If an item is the "right document at the right time", you can read it on the spot or promote it to your Inbox/Shortlist. If an item no longer sparks joy, you can Marie Kondo it to the Archive (this is my primary action, by the way, and it's delightful). If you want to keep an item in Later, just swipe up.

The Daily Digest might appear simple, but it's actually the byproduct of months' of trial and error between myself, [Tristan](https://twitter.com/homsiT), [Jesse](https://twitter.com/jessebc), and [Artem](https://twitter.com/ArtemLitch). Turns out we couldn't just cargo cult the Readwise Daily Review (😅). We already have some promising next steps for a version 2.0.

If you need more content flowing into your Feed, I highly recommend yoloing into a bunch of high signal subscriptions in the [Suggested feeds section](https://read.readwise.io/feed/suggestions), which uses articles in your account plus a bunch of heuristics to recommend feeds you're likely to enjoy.

Props to [Artem](https://twitter.com/ArtemLitch), [Tristan](https://twitter.com/homsiT), and [Jesse](https://twitter.com/jessebc) for a lot of perseverance and patience here.

Infrastructure Improvements 🏗️

[Simon](https://twitter.com/Sirupsen), [Tadek](https://twitter.com/tdkte), and [Tristan](https://twitter.com/homsiT) have been hard at work preparing our backend for webscale. From a practical perspective, this mostly refers to beefing up the reliability of our database so it doesn't go down in flames during launch.

From a user-facing perspective, one improvement you should notice immediately is that we've accelerated the P90 parsing speed of extension- and share sheet-based saves below 2 seconds. It's now virtually instant.

In addition to these backend optimizations, [Tristan](https://twitter.com/homsiT) and [Adam](https://twitter.com/lynchy010) also pushed a series of filtered view upgrades to the frontend. Rendering filtered views is now dramatically faster, particularly on slow devices, on both web and mobile.

Some of these infrastructure improvements might be obscured by some new issues introduced in our latest mobile app version. We're working on these next.

Ghostreader v2 👻🤓

Ghostreader has been upgraded since our last private beta update. In particular, you can now use word, phrase, paragraph level prompts on mobile.


This was an encyclopedia lookup on David Brooks. Note that document-level prompts on mobile are blocked by reciprocating document-level notes (which is on our to do list).

We've also upgraded the document-level prompts on web. In particular the "Ask this document a question" flagship prompt is now more robust to reduce hallucinations and gently nudge you to use specific questions over generic questions. A specific question would be, for example, asking our Frequently Asked Questions document, "Is there a roadmap?" A generic prompt, on the other hand, would be asking "What are the top 5 takeaways of this article?" If you're interested in these kinds of manipulations, you should do so through the Custom prompt.

Wielded properly, this is by far the most powerful prompt in all of Ghostreader not yet replicated elsewhere on the internets.

Please note there's an issue with some PDFs right now where we're not getting the full document content for document-level prompts. Be careful with those PDFs until we push a fix.

Props to our newest full stack gaucho, [Simon](https://twitter.com/Sirupsen) 🤠

Creator Content 📼Justin DiRose


Sadly, most read-it-later apps become junk drawers of articles you never actually read (😔). In his latest video, [Justin DiRose](https://twitter.com/_ThinkEffective) dives into how he leverages Reader’s power user features to overcome this tendency, to become a more effective reader, and to keep his inbox zeroed! Take note of the two things he does every time an article lands in his library 👀✍.️

John Mavrick


If you’re building a second brain in Obsidian, checkout how [John Mavrick](https://twitter.com/johnmavrick_yt) uses Reader to consolidate his capture process and customizes his export templates. The atomic note script he offers at the end is 🤯🔥.

# Reader has officially entered public beta 💃

## Metadata

- Author: Daniel Doyon
- Category: rss
- URL: [https://readwise-community.ghost.io/reader-is-officially-public-beta/](https://readwise-community.ghost.io/reader-is-officially-public-beta/)

## Highlights

YouTube 🎥

We dropped the YouTube feature two days ago, but since then you all have found some minor bugs and usability issues which [Mati](https://twitter.com/TucciMatias) has mostly fixed. He also added a way to remember your position so you can watch long videos in multiple sessions.


Still so much we can do here, but it's an incredible v1.

Ad Hoc Export 📋

[Bruno](https://twitter.com/brvn0jm) fast followed his CSV export feature with a quick annotation export feature in the Notebook panel. It enables you to copy a single document's annotations to your clipboard or download them to a plain text Markdown file. Of course, you can tweak the formatting of this copy using a template 😎


Please note we're polishing this feature right now including fixing a couple UI glitches, adding the document-level note as a variable, adding keyboard shortcuts, and making the default template better. Should be shipped in the next day or two, but it's perfectly usable until then!

Default Side Panel Setting ☑️

Many of you have asked for a way to set the side panels to be closed by default. [Mati](https://twitter.com/TucciMatias) has just added a quality of life setting to the Command Palette enabling you toggle the default panel status upon entering reading view.


- Inoreader
    - There are tons of sources out there that can expand your knowledge, and we're sure you can bring all of them together in your Inoreader account. If you try and do so, you'll enjoy an endless source of inspiration, useful information, and news.Here's what we did in the latest update of Inoreader's mobile app:Completely new article search moduleImproved offline reading mode (with automatic full content fetching)Highlighters for easier and faster content discoveryImproved widgets on iOSAccessibility improvements
    - [Learn more about what's new](https://sendy.innologica.com/l/8FuB8t72s4BaQlYUZMKfUQ/3Ek9R8926vgG763ddrcRpiLRtg/dxhQdeGL8892qXlWJsJluR892g)

[Readwise Blog](https://blog.readwise.io/)

[(15) How to Organzie Your Reader Account with Filtered Views - YouTube](https://www.youtube.com/watch?v=siMoVvbZ8Zc)

[hello@readwise.io](mailto:hello@readwise.io)

- Email to send newsletter to RSS reader
- Ajouter plusieurs onglets en même temps
- Fix Loom pages and other video services so that they appear like Youtube and we can take notes on the side!

[Getting Started with Reader](https://www.loom.com/share/b1bdd09ce0b240f99a09154e315517b9)

[Readwise](https://readwise.io/)

[Summari for Chrome - Chrome Web Store](https://chrome.google.com/webstore/detail/summari-for-chrome/hfbolicepmhlpoiabgkpeojpagpcmccc/related)

[The Next Chapter of Reader: Public Beta](https://blog.readwise.io/the-next-chapter-of-reader-public-beta/)

Finally found the perfect reading bookmark tool to collect and grab anything from the web

[Getting Started with Reader | Readwise](https://read.readwise.io/new/read/01gmqrc83am40tvg57f4z20rrw)

Leur demander de s'intégrer avec bionic reader

Yes! We offer a 50% discount to students and other members of academia. Just sign up, shoot us a quick email at [hello@readwise.io](mailto:hello@readwise.io) letting us know you're a student before subscribing, and we'll apply the 50% discount to your account. When you do subscribe after receiving the discount, make sure to do it via the Readwise website

[The Next Chapter of Reader: Public Beta](https://blog.readwise.io/the-next-chapter-of-reader-public-beta/)

[Readwise Reader - The all-in-one reading app for power readers | Product Hunt](https://www.producthunt.com/posts/readwise-reader?utm_campaign=17187_2022-12-18&utm_medium=newsletter&utm_source=Daily+Digest&utm_term=featured)

# **Creator Content**


# **Jeremy Caplan**

[https://ci4.googleusercontent.com/proxy/83oYr9fbuG6IBDwv74cw4ugaQH8OBVlweAeW4uWSKkEuCZ7lOoLZDahOXq-ifAFWHa9RSaVMiIJycQf2BwQf2lqmeRTc3eEpdsxP4NrEGTQTz3Bqal8_j63R4hBChbYuIf1g8mI=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-11.png](https://ci4.googleusercontent.com/proxy/83oYr9fbuG6IBDwv74cw4ugaQH8OBVlweAeW4uWSKkEuCZ7lOoLZDahOXq-ifAFWHa9RSaVMiIJycQf2BwQf2lqmeRTc3eEpdsxP4NrEGTQTz3Bqal8_j63R4hBChbYuIf1g8mI=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-11.png)

I sat down with [Jeremy Caplan](https://wondertools.substack.com/) (educator, journalist, and author of Wondertools) for [an in-depth interview](https://www.youtube.com/watch?v=2aCfzLb3iiM&t=1s) about Reader: how it started, how it works, and my personal Reader workflow.

# **A Better Computer**

[https://ci6.googleusercontent.com/proxy/8O0zuZA_eZANchUYPAh-7WMb-mwBUM0Mm1udVOTlWU9UFyDpkgrSLdDmqzJ4UiKg_kr4lKurq0y9lOo1BVthVY7JeoQw5tDMCzEtNL32TOjlsVU0oRCc7C7Xlqay08zqq-xVUBc=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-12.png](https://ci6.googleusercontent.com/proxy/8O0zuZA_eZANchUYPAh-7WMb-mwBUM0Mm1udVOTlWU9UFyDpkgrSLdDmqzJ4UiKg_kr4lKurq0y9lOo1BVthVY7JeoQw5tDMCzEtNL32TOjlsVU0oRCc7C7Xlqay08zqq-xVUBc=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-12.png)

[Matt Birchler](https://twitter.com/mattbirchler)

has built an entire Youtube channel to teach people how to better use software they already own.

[In his recent video](https://www.youtube.com/watch?v=ZTYCA73I5uQ)

, you’ll learn the non-negotiable features he leverages in Reader

# **BearTalk**

[https://ci6.googleusercontent.com/proxy/CIjcU3dCSOYCiEAyQE5Aj2E-lz_Czl1Dies--T44XT45MGwlrjDYo0YYU4833JOGiy52bAPm65x4hhMmO6hgneYxdBvGnu56zlTLhAOOL6V-uAzUaSudQMl_XYagMprZmhnTkmw=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-13.png](https://ci6.googleusercontent.com/proxy/CIjcU3dCSOYCiEAyQE5Aj2E-lz_Czl1Dies--T44XT45MGwlrjDYo0YYU4833JOGiy52bAPm65x4hhMmO6hgneYxdBvGnu56zlTLhAOOL6V-uAzUaSudQMl_XYagMprZmhnTkmw=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-13.png)

[Here's what Bear thinks about Reader](https://www.youtube.com/watch?v=DoKs_euPyIA)

. Love that meme thumbnail

# **JimmyLv_吕立青**

[https://ci6.googleusercontent.com/proxy/3CKrEs3CnK9PB8sJuWA7lzzhUWOQ4TcF6KCvmpUqC_9UAkpxHyufYecoKp7xlHxPNCIQyhLLpG5svujXLgZLSO-jR8tJtsc1h37-M_BvSv3UgpI06lh53m5E_gruqaWDTf2p59g=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-14.png](https://ci6.googleusercontent.com/proxy/3CKrEs3CnK9PB8sJuWA7lzzhUWOQ4TcF6KCvmpUqC_9UAkpxHyufYecoKp7xlHxPNCIQyhLLpG5svujXLgZLSO-jR8tJtsc1h37-M_BvSv3UgpI06lh53m5E_gruqaWDTf2p59g=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-14.png)

For our Chinese-speaking friends, we hope you enjoy this [in-depth walkthrough from Jimmy LV](https://www.youtube.com/watch?v=I96J3vVVZGE).

# **Readwise Official**

[https://ci6.googleusercontent.com/proxy/SkjsBHIq6XORcLEVjiQKhNeVE9sf1CwMfxHMhgRInNNiS8fbY4PmKyJm9L5crpA9sd_zuq5SyFJtG1jT8Wl2EKSEcVLPP3NtlxVDO7O4tnKwc5o2kx4As5fVMJbeNfsMy1bupPuq-g=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/2023/01/library-customization.gif](https://ci6.googleusercontent.com/proxy/SkjsBHIq6XORcLEVjiQKhNeVE9sf1CwMfxHMhgRInNNiS8fbY4PmKyJm9L5crpA9sd_zuq5SyFJtG1jT8Wl2EKSEcVLPP3NtlxVDO7O4tnKwc5o2kx4As5fVMJbeNfsMy1bupPuq-g=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/2023/01/library-customization.gif)

Finally, [Erin](https://twitter.com/erinmuur) has glowed up our [Readwise Official YouTube channel](https://www.youtube.com/@readwise-official) and uploaded a new video on [how to find your ideal Library Configuration](https://www.youtube.com/watch?v=MX0XN_O89r0). If you're turned off by the default Inbox Zero workflow or want a more first-class Shortlist feature, we highly highly recommend you watch this brief video.

# **Other Resources**

Because Reader supports so many different media types, sources, and workflows, it can be somewhat more complex than a single-purpose application. We're still building out our library of resources, but here are some for ease of reference in case you missed them during the onboarding process:

- [Frequently Asked Questions](https://read.readwise.io/faq) (links to a document in your Reader account)
- [Reader 101: Getting Started with Reader](https://readwise.io/reader101) (video)
- [Reader 201: How to Set Up Your Reader Feed](https://readwise.io/reader201) (video)
- [Reader 202: How to Organzie Your Reader Account with Filtered Views](https://readwise.io/reader202) (video)
- [Readwise Community Discord Server](https://discord.gg/readwise)

# **Coming Up**

Our main priorities over the next few months are to fix all the bugs and edge cases discovered by our new public beta testers, to make sure the web & mobile apps are mostly in parity, to deepen v1 features such as text-to-speech, PDFs, and EPUBs, and finally to smooth out the many small UX wrinkles separating this beta app from a proper version 1.0. If you prefer a crude metaphor, Reader is like an awkward teenager who just went through a hormone-fueled growth spurt and now needs to "fill out" a little bit before resuming further maturation.

One project that's especially important to us in the near-term is optimizing performance. Particularly on mobile and particularly for accounts with a lot of content. We have a pretty clear idea of what we need to do to dramatically enhance interaction times. Now we just need to take the time to refactor A LOT of code.

# **Farewell**

We're excited and grateful to have you join us on this beta journey. Now that everyone on our team is back and recovered from winter holidays, we hope to share many more updates like this one soon!

Thank you again for your continued support and please reach out any time

– Dan, Tristan, & the Readwise team

# **Exporting Features**

As we enter public beta, it's important to us that everyone can export their data out of Reader if desired. Accordingly, we've added a bevy of exporting features with more on the roadmap.

# **CSV Export**

[https://ci3.googleusercontent.com/proxy/EtAyDpmQtnicQRtTTkDkxHdQVHwy_PPuBSrgf8sOjh-INDGaQdbKWhRIYl6wFGItGeeGp1kiJdydh2sCRKNc4dBsdUyMoDR7todKuA1tmF_hfuZU_Iq-NiEBaORCr4eal09sEg=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-1.png](https://ci3.googleusercontent.com/proxy/EtAyDpmQtnicQRtTTkDkxHdQVHwy_PPuBSrgf8sOjh-INDGaQdbKWhRIYl6wFGItGeeGp1kiJdydh2sCRKNc4dBsdUyMoDR7todKuA1tmF_hfuZU_Iq-NiEBaORCr4eal09sEg=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-1.png)

Generating a CSV file of all links saved to Reader.

First, you can export a list of all links saved to Reader to a CSV file. We're still adding this to the user interface, but in the meantime you can find the option in the Command Palette (`Cmd/Ctrl + K`).

# **OPML Export**

[https://ci3.googleusercontent.com/proxy/sERZXks4ZklZLRC39SrB7xr2Q5trdOJd81qkPIqdo07cJ0PLCFuGLRhoZ0j0GD6tg0UASVmNxWf20hE6spva-AX_kMaxh0Tks5Eg89j-E2RGK3_f-ykJ2EK7KDkXqWm-yvJAYA=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-2.png](https://ci3.googleusercontent.com/proxy/sERZXks4ZklZLRC39SrB7xr2Q5trdOJd81qkPIqdo07cJ0PLCFuGLRhoZ0j0GD6tg0UASVmNxWf20hE6spva-AX_kMaxh0Tks5Eg89j-E2RGK3_f-ykJ2EK7KDkXqWm-yvJAYA=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-2.png)

Generating an OPML file of all RSS feeds subscribed to in Reader.

Next, you can export a list of all RSS feeds subscribed to in Reader to an OPML file. As above, you'll currently find this option in the Command Palette (`Cmd/Ctrl + K`).

# **File Export**

[https://ci5.googleusercontent.com/proxy/WoXrKv7NQQ6nWYrqj6Z8Hc2SSHNEh3iwkynAdn7IyZB829yCNJVZ6F-1z9epA79v9pCG_wMeriWSppdyDm-7nFdhBWb9lxAOzhMqA5ux-fRx_jOPOhDZwsHOWu0blhscwJCOkw=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-3.png](https://ci5.googleusercontent.com/proxy/WoXrKv7NQQ6nWYrqj6Z8Hc2SSHNEh3iwkynAdn7IyZB829yCNJVZ6F-1z9epA79v9pCG_wMeriWSppdyDm-7nFdhBWb9lxAOzhMqA5ux-fRx_jOPOhDZwsHOWu0blhscwJCOkw=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-3.png)

Downloading a zip file of all PDFs and EPUBs uploaded to Reader.

Next, you can export all files uploaded to Reader (ie PDFs and EPUBs) to a zip file. As above, you'll currently find this option in the Command Palette (`Cmd/Ctrl + K`). Note: If you've uploaded a lot of files or some big files, this option might time out. We're working on a more robust method that will generate a downloadable link from the server.

# **Annotation Export**

[https://ci4.googleusercontent.com/proxy/64lgCegaOCaM0bXaROLk6xE_RVcus5yM51vTp6vUIRiuU9CZx8GCXZ17q1iS0-KpVgtr6aSOvr-pXBvrq_wh4G96IVQS1qxuzMPreVuCywOaXOBvQLWRLer_FPiuKK1zFZalaw=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-4.png](https://ci4.googleusercontent.com/proxy/64lgCegaOCaM0bXaROLk6xE_RVcus5yM51vTp6vUIRiuU9CZx8GCXZ17q1iS0-KpVgtr6aSOvr-pXBvrq_wh4G96IVQS1qxuzMPreVuCywOaXOBvQLWRLer_FPiuKK1zFZalaw=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-4.png)

Exporting annotations on a per-document basis.

Finally, you can export your annotations (ie your notes and highlights) for any given document using the export option shown in the screenshot above. You can quickly copy these annotations to the clipboard or download as a Markdown file. You can even customize the exact format of these annotations using a template. Right now this is only in the web app, but we'll be adding the mobile analog soon.

As a heads up to folks new to the Readwise ecosystem, every highlight you take in Reader instantly syncs to Readwise and from there you can configure [automated syncing with your note-taking apps](https://readwise.io/export) including Notion, Obsidian, Roam Research, Logseq, and Evernote.

Props to [Bruno](https://twitter.com/brvn0jm) for taking the lead here.

# **Document-Level Notes**

We shipped document notes in the web app back in November, but then had to shift attention to more urgent matters before implementing them in the mobile app, the mobile share sheet, and the browser extension. These are all now done!

[https://ci6.googleusercontent.com/proxy/_myR62DXxGd2Uksx8KGTRh8fQkiXcUgwfiPpvkL1l1aVuh13IhM_9FrxJWtshC6iT-U873RhjXpFPm6Drbd3qo_3gYuonu0R1JfyLKUmxJu4X4wC6XrhJ_tRZt5bSuNLdA2WLQ=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-6.png](https://ci6.googleusercontent.com/proxy/_myR62DXxGd2Uksx8KGTRh8fQkiXcUgwfiPpvkL1l1aVuh13IhM_9FrxJWtshC6iT-U873RhjXpFPm6Drbd3qo_3gYuonu0R1JfyLKUmxJu4X4wC6XrhJ_tRZt5bSuNLdA2WLQ=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-6.png)

Many different ways you can access document notes in the mobile apps.

[https://ci3.googleusercontent.com/proxy/wNrWl66jynOEpouAl3iusQWrB6kkvEHVdixu3s5Zu1EDqawxEar643iARHvq08oL1hnmQKK2DgTrmdEuyPGtBu7Sx6EWQwWSR1JgiRhcytqh5FLHYFiAdDwOXM9CwZJd90S53A=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-5.png](https://ci3.googleusercontent.com/proxy/wNrWl66jynOEpouAl3iusQWrB6kkvEHVdixu3s5Zu1EDqawxEar643iARHvq08oL1hnmQKK2DgTrmdEuyPGtBu7Sx6EWQwWSR1JgiRhcytqh5FLHYFiAdDwOXM9CwZJd90S53A=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-5.png)

The document note in the browser extension.

The use cases for document notes are many, but one common application is to jot down a short note upon saving a new document about why you saved it or who recommended it to you.

We're now adding document notes to the various note-taking exports so you can get these into Obsidian, Notion, et al. We're also hoping to add Ghostreader at the document-level on mobile soon now that we have a destination for Ghostreader's responses.

Props to [Jesse](https://twitter.com/jessebc) on design and [Mati](https://twitter.com/TucciMatias) on execution. Lots of surface area here.

# **Random Sort**

You can now randomly sort any View in Reader. This is great for when you're tired of seeing things in chronological order and want to spice things up a bit.

[https://ci4.googleusercontent.com/proxy/-J7xY0qO8fzc_kMtA-FVlFjFWf7JMRGOAmQjHlK_SLb9vP_3SCsxWIPMoMS57g--JyGMeU2-0Q6Ayxb9lyTT6OfaV5SnLHTVmZtVBsP2ndyoc8Vae5Oumi2CvU2ssrRrTv9kBg=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-7.png](https://ci4.googleusercontent.com/proxy/-J7xY0qO8fzc_kMtA-FVlFjFWf7JMRGOAmQjHlK_SLb9vP_3SCsxWIPMoMS57g--JyGMeU2-0Q6Ayxb9lyTT6OfaV5SnLHTVmZtVBsP2ndyoc8Vae5Oumi2CvU2ssrRrTv9kBg=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-7.png)

Every time you tap the Random sort or refresh, the list will randomly reorder.

Props to [Adam](https://twitter.com/lynchy010) again for adding this in on web and mobile.

# **YouTube on Mobile**

When we entered public beta in mid-December, YouTube transcript follow-along worked on only web. [Mati](https://twitter.com/TucciMatias) has since added full YouTube support on mobile!

[https://ci6.googleusercontent.com/proxy/JZf53XpCpKbHnukmtEDmhnpzAmHwTLHaLyQ0u4Be9HGKDOnH7qJ3vQFnF1ba06G65qivIQte3M0MZMS3Pe5hSx2-cA3o4B3yQPC7GtdXhN_bwuq50jGYfHQKp0f-t-l8RXYz=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/2023/01/youtube-on-mobile.gif](https://ci6.googleusercontent.com/proxy/JZf53XpCpKbHnukmtEDmhnpzAmHwTLHaLyQ0u4Be9HGKDOnH7qJ3vQFnF1ba06G65qivIQte3M0MZMS3Pe5hSx2-cA3o4B3yQPC7GtdXhN_bwuq50jGYfHQKp0f-t-l8RXYz=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/2023/01/youtube-on-mobile.gif)

As a reminder, Reader is pulling the transcript from YouTube. If the creator uploaded a subtitles file like [Erin](https://twitter.com/erinmuur) has above, the transcript will be nicely formatted with proper capitalization, punctuation, and so on. Otherwise, the transcript will be Google's speech-to-text rendition, which is serviceable but leaves some room for improvement as a standalone document.

# **Experimental: PDF to Text**

Problem:

[https://ci6.googleusercontent.com/proxy/6jqa3d4WmBMMTtWyxVo9OtfGvHP-wY0BGQB__RRHC_KfFnmIYBiMDeNwyhUMbUZSjA4kq2vRJyZvHdxkVh-EYpouK7-Jgu1uzzfoQ5Da-nspW6lVtdfilUv1Z0YinVwYhbc_1g=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-8.png](https://ci6.googleusercontent.com/proxy/6jqa3d4WmBMMTtWyxVo9OtfGvHP-wY0BGQB__RRHC_KfFnmIYBiMDeNwyhUMbUZSjA4kq2vRJyZvHdxkVh-EYpouK7-Jgu1uzzfoQ5Da-nspW6lVtdfilUv1Z0YinVwYhbc_1g=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-8.png)

The PDF file standard is basically as bad as the US healthcare system.

Solution:

[https://ci3.googleusercontent.com/proxy/SkZVHhWWtCSeyWVgU9iTTxRlDC9NDVakadyvHxLYvs2W7q5P5GKBRnnYT-Xe1KqvYf4nRQTIRgXXn8m_lH5IYBOci-Zjo1rUINaDAPxtrzYbiic5yXy2Su87rtrRX5LbkJGcRQ=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-9.png](https://ci3.googleusercontent.com/proxy/SkZVHhWWtCSeyWVgU9iTTxRlDC9NDVakadyvHxLYvs2W7q5P5GKBRnnYT-Xe1KqvYf4nRQTIRgXXn8m_lH5IYBOci-Zjo1rUINaDAPxtrzYbiic5yXy2Su87rtrRX5LbkJGcRQ=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-9.png)

Reflowable PDFs!

You can now read your **HIGH QUALITY TEXT-BASED** PDFs as if they were proper, reflowable hypertext documents.

While this is cool on web, it's absolutely game changing on mobile phones where letter-sized PDFs are effectively unreadable.

[https://ci6.googleusercontent.com/proxy/a655i3URa2z09_rzjWn-oMqLqgMRWfMgIeeloiNll3sjGqITnxqQfgFT-Thn3I2uH0a-QGINpr1gKRZ5U-mM8fuEVLAxPbK_EUunX9_-BYQXpzoWD-rtfasSko6g4IEAE86yggI=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-10.png](https://ci6.googleusercontent.com/proxy/a655i3URa2z09_rzjWn-oMqLqgMRWfMgIeeloiNll3sjGqITnxqQfgFT-Thn3I2uH0a-QGINpr1gKRZ5U-mM8fuEVLAxPbK_EUunX9_-BYQXpzoWD-rtfasSko6g4IEAE86yggI=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-10.png)

While this feature works well enough to justify shipping to early adopter testers of a beta product, I cannot stress enough that PDF to Text is still _experimental_ with many caveats:

- This feature will obviously not work well on PDFs with complex layouts such as pitch decks and infographics. It needs columns of text to work.
- Embedded images and tables are part and parcel of a complex layout. These elements will generally not parse to text well.
- Many PDFs were generated poorly causing the parsed text to be sprinkled with imperfections. It will take us a long time to improve the machine learning processes that make this whole feature possible so we really hope the improved experience of reading parsed HTML is vast enough to offset any annoyance caused by the tiny glitches in the text in the short-term.
- Highlights in one format will not translate to the other. In other words, if you highlight the text version of the PDF, you will not see those text highlights on the PDF version and vice versa. Candidly, the translation would be so hard to build that I doubt we'll ever prioritize it.
- If you can't find the `View as text` option on a PDF in your Library, it's because we're still running a migration to generate the text on previously uploaded PDFs. You should always find it on newly uploaded PDFs, however.

Aside from making PDFs legible on mobile phones, this feature will ultimately unlock so much additional functionality such as:

- Keyboard-based reading experience on PDFs
- Properly estimated reading lengths on PDFs
- Text-to-speech on PDFs
- Ghostreader on PDFs
- and more!

Again, the above will remain limited to high quality, text-based PDFs. We'll be continuing to refine and polish this feature over the next few weeks.

Props to [Bruno](https://twitter.com/brvn0jm) and [Artem](https://twitter.com/ArtemLitch) for leading this ambitious feature.

### Ghostreader

Ghostreader is our implementation of GPT-3 into Reader. As a reminder, you can invoke Ghostreader at various levels of hierarchy within a document:

- On the word- or phrase-level for prompts like _define_ and _encyclopedia lookup_.
- On the paragraph- or highlight-level for prompts like simplify or translate.
- On the section-level for prompts like summarize or tl;dr.
- And on the whole document-level for prompts like summarize and asking questions.

Until recently, document-level prompts were only available in the web app, but now you can use these in the mobile app too.

[https://ci4.googleusercontent.com/proxy/gp0tWxgrUANkVQsPNCA4O_zIkDJXHsvifWePDpo_EiV15r03U0IAlHO7bgN90rocOFqBPTmhaMwnwoalny6aDNKi4IFGTCVsL0oyE829XG9sG95QsONSfTEDGmMhTFvtE-aUKw=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/02/image-2.png](https://ci4.googleusercontent.com/proxy/gp0tWxgrUANkVQsPNCA4O_zIkDJXHsvifWePDpo_EiV15r03U0IAlHO7bgN90rocOFqBPTmhaMwnwoalny6aDNKi4IFGTCVsL0oyE829XG9sG95QsONSfTEDGmMhTFvtE-aUKw=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/02/image-2.png)

There are a couple different pathways to document-level Ghostreader on mobile.

# **Document notes to note-taking apps**

We added document notes to Reader incrementally. First, we added them to the web app. Then the mobile apps. Then the share sheets. Then the browser extensions. Finally, we've added document notes to note-taking exports and the Readwise 1.0 public API.

For template-driven exports like Obsidian and Roam Research, you can use the variable `document_note` to place the document note how and where you want.

For page-driven exports like Notion and Evernote, the document note should appear as the first element in the body.

# **Customizable keyboard shortcuts**

Attention all Europeans, Vim power users, and other opinionated folk:

**You can now modify the shortcuts of the web app to suit your keyboard layout and bespoke preferences.**

[https://ci3.googleusercontent.com/proxy/pbJ2KM1vcNVsDV-OjFsj0VxYGfVW-uWxLuSLTFpscUCgS8w8DBiy0-iOOtEHzkhANqg6XpoL1OWbrHEwCwOa9r47pJcYO42nb8Vs5umRTYmPYzDmbQ9lukrRzhEhjl_bs4U=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/02/image.png](https://ci3.googleusercontent.com/proxy/pbJ2KM1vcNVsDV-OjFsj0VxYGfVW-uWxLuSLTFpscUCgS8w8DBiy0-iOOtEHzkhANqg6XpoL1OWbrHEwCwOa9r47pJcYO42nb8Vs5umRTYmPYzDmbQ9lukrRzhEhjl_bs4U=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/02/image.png)

Click your profile button in bottom left to navigate to Preferences > [Keyboard Shortcuts](http://readwise.io/preferences/shortcuts)

If you've ever customized shortcuts in a videogame or productivity app like Obsidian, hopefully the flow here will be natural to you. You find the action with the shortcut you want to change, click the `+` button to begin recording, and press the new shortcut. If the pressed keys are already in use, you'll get an error instructing you to first unbind those keys from their current assignment.

We intend to make this process even easier over time with predefined layouts for common use cases (eg "North American Vim"), but we decided to begin with the most flexible version of this feature to be as inclusive as possible on day one.

Special thanks to Chris and Florian for helping us better understand the German and Swiss keyboard layouts.

Props to [Jesse](https://twitter.com/jessebc) on design and [Mati](https://twitter.com/TucciMatias) on execution. A feature like this might look simple, but it covers a lot of surface area.

# **Profile & Preferences Refactor**

Part and parcel with smoothing out the onboarding process, we've refactored the various supplemental pages to the Reader web app to make everything tidier and easier to find (we hope).

In particular, we've added a Preferences page to surface settings previously confined to the Command Palette to make those more discoverable and refreshed the help menu.

[https://ci4.googleusercontent.com/proxy/gi5IaqIBBkFt78wc4PKOLdNVPLX7HO2x4FXJ4LofnRQ-zv24f60eeQQsxcY-BwCPazyI_Rd_yuplOdXinR2It9wNVxSvho15iR0isI1JoOHJh7cUgAtlA5wmcyfhlp3kgvDahA=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/02/image-1.png](https://ci4.googleusercontent.com/proxy/gi5IaqIBBkFt78wc4PKOLdNVPLX7HO2x4FXJ4LofnRQ-zv24f60eeQQsxcY-BwCPazyI_Rd_yuplOdXinR2It9wNVxSvho15iR0isI1JoOHJh7cUgAtlA5wmcyfhlp3kgvDahA=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/02/image-1.png)

Did you know you can choose whether you want Reader to open to the Home screen or Library by default? Or whether to advance to the next document or return to the list? Or which side panels you want visible when opening a document?

Props to [Jesse](https://twitter.com/jessebc) on design and [Mati](https://twitter.com/TucciMatias) on execution again.

# **Readwise Discord Bot v3 Beta**

Last but not least, we've shipped a new version of the [Readwise Discord Bot](https://discord.com/oauth2/authorize?client_id=1070398190622351430&permissions=380104723664&scope=bot%20applications.commands) for beta testing and we'd love your feedback.

The Readwise Discord Bot does many things, but its main innovation is to help you stay on top of interesting links shared within your public communities. Here's how it works:

- Enables you to react to any message with :bookmark: to DM that message to yourself (like Bookmarker Bot) or with :floppy-disk: to save that message to your Readwise account as if it were a highlight or tweet.
- Automatically adds shared links to a Hacker News-like link aggregator (here's an [example of the aggregated links](https://rw-discord-bot-production.herokuapp.com/guilds/links/886992134505398314) from the Readwise Community Server).
- Automatically generates an RSS feed of shared links with an augmented header and footer to bring people back to your Discord server (here's the [RSS feed for the Readwise Community Server](https://rw-discord-bot-production.herokuapp.com/guilds/rss/886992134505398314)).

The main update in this version of the bot was to make moderation of which links are accepted and rejected far simpler. If you're a server admin/moderator, the bot will create two channels (#accepted-links and #rejected-links) which you can check once a day or so to quickly weed out false positives, false negatives, and set domain-based filtering rules going forward.

If you want to give the bot a whirl in your server, [use this link](https://discord.com/oauth2/authorize?client_id=1070398190622351430&permissions=380104723664&scope=bot%20applications.commands) to install. We'd love to know what you think!

# **Creator Content**

[Sergio](https://www.youtube.com/@FromSergio)’s latest [Reader tutorial](https://www.youtube.com/watch?v=Uipmb5F13Us) is about as comprehensive as it gets. If you’ve yet  to explore our YouTube feature, set up your Feed, or dive into Ghostreader, you’ll benefit from the workflows he shares in this video.

# **Readwise Official: Setting up your Daily Digest**

In our latest official tutorial vid, [Erin](https://twitter.com/erinmuur) will show you [how to use Daily Digest](https://www.youtube.com/watch?v=HdLc80t9AM8) and explain why it works. The Daily Digest is a daily habit of staying on top of your Feed, preventing your reading queue from overflowing, and, most importantly, becoming a consistent reader.

# **ProgressLeavesClues**

[ProgressLeavesClues](https://www.youtube.com/@ProgressLeavesClues) just shared the [most succinct Reader walkthrough to date](https://www.youtube.com/shorts/4K8nYlhAvyI) and still managed to hit all the essentials. Checkout his latest video to see why Reader is at the heart of his Second Brain.

Last but not least, I was interviewed in the [Rational Reminder Podcast](https://www.youtube.com/@rationalreminder) a few weeks ago. We mainly talked about Readwise 1.0. Maybe in a few years I'll get to talk about Reader on podcasts too

# **Other Resources**

For ease of reference in case you missed them during the onboarding process:

- [Frequently Asked Questions](https://read.readwise.io/faq) (links to a document in your Reader account)
- [Reader 101: Getting Started with Reader](https://readwise.io/reader101) (video)
- [Reader 201: How to Set Up Your Reader Feed](https://readwise.io/reader201) (video)
- [Reader 202: How to Organzie Your Reader Account with Filtered Views](https://readwise.io/reader202) (video)
- [Reader 203: Finding Your Ideal Library Configuration](https://www.youtube.com/watch?v=MX0XN_O89r0&t=1s) (video)
- [Reader 204: Setting up your Daily Digest](https://www.youtube.com/watch?v=HdLc80t9AM8) (video)
- [Readwise Community Discord Server](https://discord.gg/readwise)

As always, if you've had any issues onboarding, please feel free to reach out and we'll do our best to help you get set up!

Now that we've spent the past two months recovering from public beta launch, we're excited to sink our teeth into some big features again.

Thank you again for your continued support and please reach out any time

– Dan, Tristan, & the Readwise team

soon non-English TTS, automatic RTL detection, and more.

• Upgraded searches to use a URL parameter (such as [read.readwise.io/search?q=reading](https://read.readwise.io/search?q=reading)) so you can refresh and bookmark specific queries.

One of the most common questions we’re asked by users if how to keep a tidy Reader account and prevent the age-old overload problem so common to read-it-later apps. In her [in-depth tutorial](https://valchanova.me/power-reader/), Vassilena takes you through her daily Reader routine.

# **Emowe**

Emowe put together one of the [first Spanish video guides for Reader](https://www.youtube.com/watch?v=xW_jBrfvIZQ). You’ll learn (en español) how he uses Reader and Readwise together to build the ultimate PKM system.

# **Tomi Nuottamo**

If you’re still getting your bearings with Reader, [Tomi Nuottamo’s beginner walkthrough](https://www.youtube.com/watch?v=3tuV8FaIs4E) will take you through all the fundamentals, including our favorite way to subscribe to an author (2:48) and how he leverages Ghostreader for vetting articles before reading them (7:09).

# **Conrad Carriker**

Conrad put together this

[heartwarming (to us) overview](https://www.youtube.com/watch?v=uLUf39WpOwA)

of how he uses both Readwise and Reader as linchpins in his knowledge management workflow. Love this

# **Evan Rauner**

[https://ci6.googleusercontent.com/proxy/vH6m6I-bqsYoTvChlt4a8ztOQzRem1Vu9dcxjTa0MB2ZJu6myDrm1onJXdqi-9LiRJWsE8m2suXTguWlu7mMyTNuD8lL6jbVv4Eovm9L9XyNDVvcMS2NQ7TlucavQ9Z6WELEug=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/03/image-5.png](https://ci6.googleusercontent.com/proxy/vH6m6I-bqsYoTvChlt4a8ztOQzRem1Vu9dcxjTa0MB2ZJu6myDrm1onJXdqi-9LiRJWsE8m2suXTguWlu7mMyTNuD8lL6jbVv4Eovm9L9XyNDVvcMS2NQ7TlucavQ9Z6WELEug=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/03/image-5.png)

In the [Readwise Community Discord](https://discord.gg/readwise), Evan shares his "frictionless and efficient" workflow for extracting insights from YouTube videos [here](https://discord.com/channels/886992134505398314/1051538882019196958/1071107908001087549).

- **Download highlighted PDFs** – You can now download any PDF you upload and highlight in Reader with those highlights & notes embedded in the file. You can also print any parsed HTML document to PDF with your highlights overlaid.
- **Highlight management in Notebook** – You can now operate on highlights in the Notebook sidebar of the web app, the first step in migrating Readwise 1.0 functionality into Reader.
- **Multiselect of feeds, tags, and Views** – You can now operate on feed sources, tags, and Views in bulk, the first step in adding multiselect throughout Reader.
- **Image actions on mobile** – You can now note, tag, and – most importantly – copy & share images in the mobile app.
- **Profile & preferences refactor on mobile** – The information hierarchy of managing your account settings and app preferences has been significantly cleaned up on mobile.

After discussing these features, we'll go through all the small improvements, bug fixes, and features currently under development. Let's get into it!

# **Text-to-Speech**

You can seek and start text-to-speech anywhere in the document

Highlight using your AirPods, ability to customize your "headphone gestures" (aka AirPod taps) to control TTS. I personally use a double tap to highlight the current paragraph and triple tap to jump backwards, but the choice is yours!

[https://ci5.googleusercontent.com/proxy/pNmRIZf5zzNjn4TukjV2eqthdRNBT_9053W66AN2HIrgBwv549lPxJr4rRL_1QbVd9ese3Ned2166EtNz5byxh8ctcilrOEP1e90ZzGpZpiQczwWdoso8U2-VpfAiOz6677JAQ=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/03/image-7.png](https://ci5.googleusercontent.com/proxy/pNmRIZf5zzNjn4TukjV2eqthdRNBT_9053W66AN2HIrgBwv549lPxJr4rRL_1QbVd9ese3Ned2166EtNz5byxh8ctcilrOEP1e90ZzGpZpiQczwWdoso8U2-VpfAiOz6677JAQ=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/03/image-7.png)

Click the profile button in top right to get to Account Settings

we're close to having the infrastructure ready to enable non-English languages (document-level language detection), TTS on forwarded emails (better email parsing), and TTS in the web app.

# **Download highlighted PDFs**

ability to download any uploaded PDF with your notes & highlights contained therein.

[https://ci3.googleusercontent.com/proxy/cxxM3ZSghMdfXL6XjeKNMQ5ewdurh0C7CvugJgevmITFfx8bIYI3z57UvSKm8rbMrwkCleIYlNJDY5510TF9_ntbvQ3edlWrrk39O502NOl1xNbtSRy8xVNdaO8TyKXH14MHatw=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/03/image-10.png](https://ci3.googleusercontent.com/proxy/cxxM3ZSghMdfXL6XjeKNMQ5ewdurh0C7CvugJgevmITFfx8bIYI3z57UvSKm8rbMrwkCleIYlNJDY5510TF9_ntbvQ3edlWrrk39O502NOl1xNbtSRy8xVNdaO8TyKXH14MHatw=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/03/image-10.png)

In addition, you can also print any parsed HTML document (ie a saved web article) to PDF with your highlights as well.

[https://ci4.googleusercontent.com/proxy/NuR1K_yWLoeQxBbRzet0Xz5Y_jyyx1h7aGy544GSo2vvYHoAzBcEToU6CM8VxpDiuBBS-UulM3PbjwqONdXHoBHEvQNODiRIohOZ4QyFHUM_H6AQZhs4kGMc8PU0wI2dIe7Fh_M=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/03/image-11.png](https://ci4.googleusercontent.com/proxy/NuR1K_yWLoeQxBbRzet0Xz5Y_jyyx1h7aGy544GSo2vvYHoAzBcEToU6CM8VxpDiuBBS-UulM3PbjwqONdXHoBHEvQNODiRIohOZ4QyFHUM_H6AQZhs4kGMc8PU0wI2dIe7Fh_M=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/03/image-11.png)

zoom, rotation, and light/dark mode settings persist across sessions on a per-document level.

**Pro-tip: View as text.** As a pro-tip to those of you relatively new to Reader, one of the most powerful PDF features already in Reader is the `View as text` option on desktop and mobile. This is especially helpful when you have a simple text-heavy PDF on mobile that you just want to _read_ without pinching and repositioning all the time.

[https://ci6.googleusercontent.com/proxy/a655i3URa2z09_rzjWn-oMqLqgMRWfMgIeeloiNll3sjGqITnxqQfgFT-Thn3I2uH0a-QGINpr1gKRZ5U-mM8fuEVLAxPbK_EUunX9_-BYQXpzoWD-rtfasSko6g4IEAE86yggI=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-10.png](https://ci6.googleusercontent.com/proxy/a655i3URa2z09_rzjWn-oMqLqgMRWfMgIeeloiNll3sjGqITnxqQfgFT-Thn3I2uH0a-QGINpr1gKRZ5U-mM8fuEVLAxPbK_EUunX9_-BYQXpzoWD-rtfasSko6g4IEAE86yggI=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/01/image-10.png)

# **Highlight management in Notebook**

In addition to navigating to the highlight in the source document, you can also perform all kinds of highlight actions from tagging & annotating to deleting.

[https://ci3.googleusercontent.com/proxy/Yl3UJfeCgmo3nIRl9B-5pbpGtWJ_yZUckJ47ho6uUXcjSWXHo_QdIdNzQ5kEMWwDuSsM3DeVfRxSkbcGSHqubJpJC5nFAMPotw4krq474U0SLCcsi5JnAPV1bJoZRH0TKUFpdfQ=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/03/image-13.png](https://ci3.googleusercontent.com/proxy/Yl3UJfeCgmo3nIRl9B-5pbpGtWJ_yZUckJ47ho6uUXcjSWXHo_QdIdNzQ5kEMWwDuSsM3DeVfRxSkbcGSHqubJpJC5nFAMPotw4krq474U0SLCcsi5JnAPV1bJoZRH0TKUFpdfQ=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/03/image-13.png)

# **Multiselect on feeds, tags, and Views**

multiselect starting with the feeds, tags, and Views management pages. You can now do things like delete, merge, rename, and add to Views (ie folders) en masse.

[https://ci4.googleusercontent.com/proxy/xxIxvvD3QtQ5yQhsfd4VxpcN9osvHM0NP7A9GYTgQ52Oo3m2m0-yjTxVPb-w1C4Cxj0xJKmC19diOrdhpkf8NEx-X2pPLQAG9Das0ln6xYCNmSJugamlrxkOuAYmgtk0UG3N3dw=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/03/image-14.png](https://ci4.googleusercontent.com/proxy/xxIxvvD3QtQ5yQhsfd4VxpcN9osvHM0NP7A9GYTgQ52Oo3m2m0-yjTxVPb-w1C4Cxj0xJKmC19diOrdhpkf8NEx-X2pPLQAG9Das0ln6xYCNmSJugamlrxkOuAYmgtk0UG3N3dw=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/03/image-14.png)

You'll see this same multiselect component on the tags and Views management pages too.

# **Image actions on mobile**

On mobile, you can now perform some previously missing actions to images such as copying the image to clipboard or sharing it via the share sheet.

[https://ci6.googleusercontent.com/proxy/alsDLaNsQdX_3UhSEoCZVxDNuCPI3AkQGrYwSc8bpe-ayqfH2lxiazQfLWN94GmA0NPPlebRz6BDABmwCdcvSEVVOSKHvV_AezSTH_E9xTQabrnmvkmYYDx6ISLMqllJ5CUSIX8=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/03/image-15.png](https://ci6.googleusercontent.com/proxy/alsDLaNsQdX_3UhSEoCZVxDNuCPI3AkQGrYwSc8bpe-ayqfH2lxiazQfLWN94GmA0NPPlebRz6BDABmwCdcvSEVVOSKHvV_AezSTH_E9xTQabrnmvkmYYDx6ISLMqllJ5CUSIX8=s0-d-e1-ft#https://readwise-community.ghost.io/content/images/size/w1600/2023/03/image-15.png)

- **Performance** – App performance (i.e., speed of the user interface) remains our #1 priority
- **RSS server-side refactor** – Broadly speaking, there are two RSS use cases in Reader. The first, where we began, is the modern Substack email newsletter consumer who subscribes to a variety of low volume feeds. Feed is working pretty well for these folks. The second use case is OG RSS feed reader pro who subscribes to many high volume feeds. Feed is not working so well for these folks. To unlock this use case, there are several frontend updates we must make. But before those, we also need to refactor RSS on the server-side to make sure each RSS feed is updating even more quickly and accurately to get to parity with other infovore alternatives. [Tadek](https://twitter.com/tdkte) is well underway here.