---
section: apps
metadataEnrichedAt: null
type: Guide
statut: en-attente
_priorité: normal
tags:
- Outils
title: Server Side Cookie Traking
author: Diane
description: 'Découvre Server Side Cookie Traking : outil français pour entrepreneurs,
  fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

https://dub.co/blog/introducing-dub-conversions

tracking s2s

[Cookieless Tracking And Analytics: Have The Rules Changed Again?](https://salespanel.io/blog/marketing/cookieless-tracking-and-analytics/)

[Webinar - Du Cookieless aux cleanrooms : le Martech en ebullition - YouTube](https://www.youtube.com/watch?v=ZFQxcMYMFrM&list=WL&index=50)

[Vous devriez changer de navigateur internet - YouTube](https://youtu.be/5ImSqgvg9UU?t=374)

## [Introducing Shared Memory Versioning to improve slow interactions](https://blog.chromium.org/2024/06/introducing-shared-memory-versioning-to.html "Introducing Shared Memory Versioning to  improve slow interactions")


_On the Chrome team, we believe it’s not sufficient to be fast most of the time, we have to be fast all of the time. Today’s The Fast and the Curious post explores how we contributed to Core Web Vitals by surveying the field data of Chrome responding to user interactions across all websites, ultimately improving performance of the web._

As billions of people turn to the web to get things done every day, the browser becomes more responsible for hosting a multitude of apps at once, resource contention becomes a challenge. The multi-process Chrome browser contends for multiple resources: CPU and memory of course, but also its own queues of work between its internal services (in this article, the network service).

This is why we’ve been focused on identifying and fixing [slow interactions](https://web.dev/articles/inp) from Chrome users’ field data, which is the authoritative source when it comes to real user experiences. We gather this field data by recording anonymized Perfetto traces on Chrome Canary, and report them using a privacy-preserving filter.

When looking at field data of slow interactions, one particular cause caught our attention: recurring synchronous calls to fetch the current site’s cookies from the network service.

Let’s dive into some history.

### **Cookies under an evolving web**

Cookies have been part of the web platform since the very beginning. They are commonly created like this:

    document.cookie = "user=Alice;color=blue"

And later retrieved like this:  

    // Assuming a `getCookie` helper method:
    getCookie("user", document.cookie)

Its implementation was simple in single-process browsers, which kept the cookie jar in memory.

Over time, browsers became multi-process, and the process hosting the cookie jar became responsible for answering more and more queries. Because the Web Spec requires Javascript to fetch cookies synchronously, however, answering each `document.cookie` query is a blocking operation.

The operation itself is very fast, so this approach was generally fine, but under heavy load scenarios where multiple websites are requesting cookies (and other resources) from the network service, the queue of requests could get backed up.

We discovered through field traces of slow interactions that some websites were triggering inefficient scenarios with cookies being fetched multiple times in a row. We landed additional metrics to measure how often a `GetCookieString()` IPC was redundant (same value returned as last time) across all navigations. We were astonished to discover that **87% of cookie accesses were redundant** and that, in some cases, this could happen hundreds of times per second.

The simple design of `document.cookie` was backfiring as JavaScript on the web was using it like a local value when it was really a remote lookup. Was this a classic computer science case of caching?! Not so fast!

The web spec allows collaborating domains to modify each other’s cookies. Hence, a simple cache per renderer process didn’t work, as it would have prevented writes from propagating between such sites (causing stale cookies and, for example, unsynchronized carts in ecommerce applications).

### A new paradigm: Shared Memory Versioning

We solved this with a new paradigm which we called [Shared Memory Versioning](https://source.chromium.org/chromium/chromium/src/+/main:mojo/public/cpp/base/shared_memory_version.h). The idea is that each value of `document.cookie` is now paired with a monotonically increasing version. Each renderer caches its last read of `document.cookie` alongside that version. The network service hosts the version of each `document.cookie` in shared memory. Renderers can thus tell whether they have the latest version without having to send an inter-process query to the network service.

[](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhl8OJ82Etmnlpmr2nRzeWSmYBk-2yRPAaDSrftFMxYp-hRkb8ZIxYzIMLG09c9iqHB-dD8UrLj3GaXio7rHjOOpLGY6YBmVYQaex21mqaTGFLSHJVMrUywbU13bvgNeVC0PxiT9sV3Wj33H0Rtr0rzOdHCJBzjQe1IGBjC-8uftmM_D5XBL0CoVMUPZMuU/s7748/Fast%20&%20Curious%20In-Line_Reduce%20cookies%20IPC_V2_HighRes.png)

  

  

This reduced cookie-related inter-process messages by 80% and made `document.cookie` accesses 60% faster 🥳.

### Hypothesis testing

Improving an algorithm is nice, but what we ultimately care about is whether that improvement results in improving slow interactions for users. In other words, we need to test the hypothesis that stalled cookie queries were a significant cause of slow interactions.

To achieve this, we used Chrome’s A/B testing framework to study the effect and determined that it, combined with other improvements to reduce resource contention, improved the slowest interactions by approximately 5% on all platforms. This further resulted in more websites [passing Core Web Vitals](https://httparchive.org/reports/chrome-ux-report?start=2023_11_01&end=latest&view=list#cruxFastInp) 🥳. All of this adds up to a more seamless web for users.

[](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiGnZvKinh7TK5YiwNx1HC6vzv5CCyKPJoRGhfRzZA0MlBLl-8ho5ciLI8WyFka6QcqmcRSWgMIjz-vsfsiLBWu-dYaZ7Df1j5Ow2YRB3PkQ-k7fjxsCcZ2oJpbjYKxK92pELqHWpcXw9PwaVn4wGSzgkIRj7DLMLZAAeEYkd8mYC8F4OOcJFiePTmsQp_G/s1176/Screenshot%202024-05-30%20at%2010.19.00%E2%80%AFAM.png)

  

  

_Timeline of the weighted average of the slowest interactions across the web on Chrome as this was released to 1% (Nov), 50% (Dec), and then all users (Feb)._

Onward to a seamless web!

_By Gabriel Charette, Olivier Li Shing Tat-Dupuis, Carlos Caballero Grolimund, and François Doray, from the Chrome engineering team_

 

Labels: [the fast and the curious](https://blog.chromium.org/search/label/the%20fast%20and%20the%20curious)

## [Manifest V2 phase-out begins](https://blog.chromium.org/2024/05/manifest-v2-phase-out-begins.html "Manifest V2 phase-out begins")

Thursday, May 30, 2024

In November 2023, we [shared a timeline](https://developer.chrome.com/blog/resuming-the-transition-to-mv3) for the phasing out of Manifest V2 extensions in Chrome. Based on the progress and feedback we’ve seen from the community, we’re now ready to roll out these changes as scheduled.

We’ve always [been clear](https://security.googleblog.com/2019/06/improving-security-and-privacy-for.html) that the goal of Manifest V3 is to protect existing functionality while improving the security, privacy, performance and trustworthiness of the extension ecosystem as a whole. We appreciate the collaboration and feedback from the community that has allowed us - and continues to allow us - to constantly improve the extensions platform.

**Addressing community feedback**

We understand migrations of this magnitude can be challenging, which is why we’ve listened to developer feedback and spent years refining Manifest V3 to support the innovation happening across the extensions community. This included adding support for user scripts and introducing offscreen documents to allow extensions to use DOM APIs from a background context. Based on input from the extension community, we also increased the number of rulesets for declarativeNetRequest, allowing extensions to bundle up to 330,000 static rules and dynamically add a further 30,000. You can find more detail in our [content filtering guide](https://developer.chrome.com/docs/extensions/develop/concepts/content-filtering). 

This month, we made the transition even easier for extensions using declarativeNetRequest with the launch of [review skipping for safe rule updates](https://developer.chrome.com/blog/extensions-skip-review-eligible-changes). If the only changes are for safe modifications to an extension’s static rule list for declarativeNetRequest, Chrome will approve the update in minutes. Coupled with the [launch of version roll back](https://developer.chrome.com/blog/chrome-webstore-rollback) last month, developers now have greater control over how their updates are deployed.

**Ecosystem progress**

After we addressed the top issues and feature gaps blocking migration last year, we saw an acceleration of extensions migrating successfully to Manifest V3. Over the past year, we’ve even been able to invite some developers - such as Eyeo, the makers of Adblock Plus - and GDE members like Matt Frisbie to share their experiences and insights with the community through [guest posts](https://developer.chrome.com/blog/eyeos-journey-to-testing-mv3-service%20worker-suspension?hl=en) and [YouTube videos](https://www.youtube.com/watch?v=8P-Sc8ZaViY).

Now, over 85% of actively maintained extensions in the Chrome Web Store are running Manifest V3, and the top content filtering extensions all have Manifest V3 versions available - with options for users of AdBlock, Adblock Plus, uBlock Origin and AdGuard.

**What to expect next**

Starting on June 3 on the Chrome Beta, Dev and Canary channels, if users still have Manifest V2 extensions installed, some will start to see a warning banner when visiting their extension management page - chrome://extensions - informing them that some (Manifest V2) extensions they have installed will soon no longer be supported. At the same time, extensions with the Featured badge that are still using Manifest V2 will lose their badge.

This will be followed gradually in the coming months by the disabling of those extensions. Users will be directed to the Chrome Web Store, where they will be recommended Manifest V3 alternatives for their disabled extension. For a short time after the extensions are disabled, users will still be able to turn their Manifest V2 extensions back on, but over time, this toggle will go away as well.

Like any big launches, all these changes will begin in pre-stable channel builds of Chrome first – Chrome Beta, Dev, and Canary. The changes will be rolled out over the coming months to Chrome Stable, with the goal of completing the transition by the beginning of next year. Enterprises using the [ExtensionManifestV2Availability](https://chromeenterprise.google/policies/#ExtensionManifestV2Availability) policy will be exempt from any browser changes until June 2025.

We’ve shared more information about the process in our recent [Chrome extensions Google I/O talk](https://www.youtube.com/watch?v=hvxOW21na48). If you have any additional questions, don’t hesitate to reach out via the Chromium extensions mailing list.

Posted by David Li, Product Manager, Chrome Extensions

 

## [Multi-tasking with Minimized Custom Tabs](https://blog.chromium.org/2024/05/multi-tasking-with-minimized-custom-tabs.html "Multi-tasking with Minimized Custom Tabs")

Wednesday, May 29, 2024

In the latest release of Chrome, we're introducing [Minimized Custom Tabs](https://developer.chrome.com/docs/android/custom-tabs#:~:text=Users%20can%20minimize,Chrome%20122%20Beta.), a feature that allows users to effortlessly transition between native app and web content. With a simple tap on the down button in the Chrome Custom Tabs toolbar, users can minimize a Custom Tab into a compact, floating picture-in-picture window. This seamless integration enables multi-tasking across surfaces, enhancing the in-app web browsing experience. By tapping on the floating window, users can easily maximize the tab, restoring it to its original size.

[](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKB-vt3k1oWC8dnOgKzw3mthZikPMXJnYOwbL01KoivsRt69r98CeEjTv0TeAFjfCHdCx6WoOaoXiDECWg5EHgYoUjxQxQTm9aFaSK-AyUFb6w6EyASeQiM2RVfJgm5mgw6haiQYbspQuOQlcTlYcVFo709bmtC2skBgSA9XZJpvhoPDViNTxOkaDQ6IUD/s1228/Minimixed%20Custom%20Tabs.gif)

  

  

### How to get started

Because this change happens at the browser level, developers who use Chrome Custom Tabs will see this change automatically applied starting with Chrome version M124. End users will see the Minimize icon in the Chrome Custom Tab toolbar.

Please note that this is a change in Chrome, and we hope other browsers will adopt similar functionality.

_Posted by Victor Gallet, Senior Product Manager_

 

## [Advancing Our Amazing Bet on Asymmetric Cryptography](https://blog.chromium.org/2024/05/advancing-our-amazing-bet-on-asymmetric.html "Advancing Our Amazing Bet on Asymmetric Cryptography")

Thursday, May 23, 2024

  

Google and many other organizations, such as [NIST](https://csrc.nist.gov/projects/post-quantum-cryptography), [IETF](https://datatracker.ietf.org/group/tls/about/), and [NSA](https://www.nsa.gov/Press-Room/News-Highlights/Article/Article/3148990/nsa-releases-future-quantum-resistant-qr-algorithm-requirements-for-national-se/), believe that migrating to post-quantum cryptography is important due to the large risk posed by a [cryptographically-relevant quantum computer](https://media.defense.gov/2021/Aug/04/2002821837/-1/-1/1/Quantum_FAQs_20210804.PDF) (CRQC). In [August](https://blog.chromium.org/2023/08/protecting-chrome-traffic-with-hybrid.html), we posted about how Chrome Security is working to protect users from the risk of future quantum computers by leveraging a new form of [hybrid post-quantum cryptographic key](https://datatracker.ietf.org/doc/draft-tls-westerbaan-xyber768d00/) exchange, Kyber (ML-KEM)[1](https://blog.chromium.org/#fn1). We’re happy to announce that we have enabled the latest Kyber draft specification by default for TLS 1.3 and QUIC on all desktop Chrome platforms as of Chrome 124.[2](https://blog.chromium.org/#fn2) This rollout revealed a number of previously-existing bugs in several TLS middlebox products. To assist with the deployment of fixes, Chrome is offering a temporary [enterprise policy to opt-out](https://chromeenterprise.google/policies/#PostQuantumKeyAgreementEnabled).

Launching opportunistic quantum-resistant key exchange is part of [Google’s broader strategy](https://bughunters.google.com/blog/5108747984306176/google-s-threat-model-for-post-quantum-cryptography) to prioritize deploying post-quantum cryptography in systems _today_ that are at risk if an adversary has access to a quantum computer _in the future_. We believe that it’s important to inform standards with real-world experience, by implementing drafts and iterating based on feedback from implementers and early adopters. This iterative approach was a key part of developing QUIC and TLS 1.3. It’s part of why we’re launching this draft version of Kyber, and it informs our future plans for post-quantum cryptography.

Chrome’s post-quantum strategy prioritizes quantum-resistant key exchange in HTTPS, and increased [agility](https://www.chromium.org/Home/chromium-security/root-ca-policy/moving-forward-together/) in certificates from the Web PKI. While PKI agility may appear somewhat unrelated, its absence has contributed to significant delays in past cryptographic transitions and will continue to do so until we find a viable solution in this space. A more agile Web PKI is required to enable a secure and reliable transition to post-quantum cryptography on the web.

To understand this, let’s take a look at HTTPS and the current state of post-quantum cryptography. In the context of HTTPS, cryptography is primarily used in three different ways:

- **Symmetric Encryption/Decryption.** HTTP is transmitted as data inside a TLS connection using an authenticated cipher (AEAD) such as AES-GCM. These algorithms are [broadly considered safe](https://words.filippo.io/dispatches/post-quantum-age/) against quantum cryptanalysis and can remain in place.
- **Key Exchange.** Symmetric cryptography requires a secret key. Key exchange is a form of asymmetric cryptography in which two parties can mutually generate a shared secret key over a public channel. This secret key can then be used for symmetric encryption and decryption. All current forms of asymmetric key exchange standardized for use in TLS are vulnerable to quantum cryptanalysis.
- **Authentication**. In HTTPS, authentication is achieved primarily through the use of digital signatures, which are used to convey server identity, handshake authentication, and transparency for certificate issuance. All of the digital signature and public key algorithms standardized for authentication in TLS are vulnerable to quantum cryptanalysis.

This results in two separate quantum threats to HTTPS.

The first is the threat to traffic being generated _today_. An adversary could store encrypted traffic now, wait for a CRQC to be practical, and then use it to decrypt the traffic after the fact. This is commonly known as a [store-now-decrypt-later](https://en.wikipedia.org/wiki/Harvest_now,_decrypt_later) attack. This threat is relatively urgent, since it doesn’t matter when a CRQC is practical—the threat comes from storing encrypted data _now_. Defending against this attack requires the key exchange to be quantum resistant. Launching Kyber in Chrome enables servers to mitigate store-now-decrypt-later attacks.

The second threat is that _future_ traffic is vulnerable to impersonation by a quantum computer. Once a CRQC actually exists, it could be used to break the asymmetric cryptography used for authentication in HTTPS. To defend against impersonation from a CRQC, we need to migrate all of the asymmetric cryptography used for authentication to post-quantum variants. However, breaking authentication only affects traffic generated **after** the availability of CRQCs. This is because breaking authentication on a recorded transcript doesn’t help the attacker impersonate either party—the conversation has already finished.

In other words, there’s no store-now-decrypt-later equivalent for authentication, and so while migrating key exchange and authentication to post-quantum variants are both _important_, migrating authentication is less _urgent_ than key exchange. This is good, because there are a [variety of challenges](https://dadrian.io/blog/posts/pqc-signatures-2024/) for migrating to post-quantum authentication. Specifically, size.

Post-quantum cryptography is big compared to the pre-quantum cryptographic algorithms used in HTTPS. A Kyber key exchange is ~1KB transmitted per peer, whereas an X25519 key exchange is only 32 bytes per peer, an over 30x increase. The actual key exchange operation in Kyber is quite fast. Transmitting Kyber keys is quite slow. The extra size from Kyber causes the TLS ClientHello to be split into two packets, resulting in a 4% median latency increase to all TLS handshakes in Chrome on desktop. On desktop platforms, this, with HTTP/2 and HTTP/3 connection reuse, is not large enough to be noticeable in [Core Web Vitals](https://web.dev/articles/vitals). Unfortunately, it is noticeable on Android, where Internet connections are often lower bandwidth and higher latency, and so we have not yet launched on Android.

The size issues are even worse for authentication. ML-DSA (Dilithium) keys and signatures are ~40X the size of ECDSA keys and signatures. A typical TLS connection today uses two public keys and five signatures to fulfill all of the authentication requirements. A naive swap to ML-DSA would add ~14KB to the TLS handshake. [Cloudflare anticipates](https://blog.cloudflare.com/pq-2024) it would increase latency by 20-40%, and we’ve seen that a single kilobyte was already impactful. Instead, we need alternate approaches to authentication in HTTPS that provide the desired properties and transmit fewer signatures and public keys.

We think the important next step for quantum-resistant authentication in HTTPS is to focus on enabling _trust anchor agility_. Historically, the public Web PKI could not deploy new algorithms quickly. This is because most site operators typically provision a single certificate for all supported clients and browsers. This certificate must both be issued from a trust hierarchy that is trusted by every browser or client the site operator supports, and the certificate must be compatible with each of these clients.

The single certificate model makes it difficult for the Web PKI to evolve. As security requirements change, site operators may find that there is no longer an intersection between certificates trusted by deployed clients, certificates trusted by new clients, algorithms supported by deployed clients, and algorithms supported by new clients (all crossed with every separate browser and root store). These clients may range from different browsers, older versions of those browsers not receiving updates, all the way to applications on smart TVs or payment terminals. As requirements diverge, site operators have to choose between security for new clients, and compatibility with older clients.

This conflict, in turn, limits new clients making PKI changes to improve user security, such as transitioning to post-quantum. Under a single-certificate deployment model, the newest clients cannot diverge too far from the oldest clients, or server operators will be left with no way to maintain compatibility. We propose to solve this by moving to a _multi-certificate deployment model_, where servers may be provisioned with multiple certificates, and automatically send the correct one to each client. This enables trust anchor agility, and allows clients to evolve at different rates. Clients who are up to date and reliably receiving updates could access the authentication mechanisms best suited for the Internet as it evolves without being hamstrung by old clients no longer receiving updates. Certification authorities and trust stores could introduce new post-quantum trust anchors without needing to wait for the slowest actor to add support. This would drastically simplify the post-quantum transition since it also enables the seamless addition and removal of hierarchies using experimental post-quantum authentication methods.

At first glance, TLS may appear to have trust anchor agility by way of _cross-signatures_ and _signature algorithm negotiation_. However, neither of these mechanisms provide true trust anchor agility, nor were they intended to.

A cross-signature is when a CA creates two different certificates for a single subject and public key pair, but with different issuers and signatures. The first certificate is issued and signed as usual, by the CA itself. The second is issued and signed by a different trust hierarchy, often by a different organization. For example, the original Let’s Encrypt intermediate certificate [existed in two forms](https://letsencrypt.org/2023/07/10/cross-sign-expiration.html)[3](https://blog.chromium.org/#fn3). The “regular” intermediate was signed by the Let’s Encrypt root, whereas the “cross-signed” intermediate was signed by IdenTrust. This approach of cross-signing a new PKI hierarchy with an older, more broadly available PKI hierarchy allows a new CA to bootstrap its trust on old devices, so long as the older devices support the signing algorithm. Cross-signatures, however, rely on significant cooperation among often competing CAs, and may not be suitable for when different clients have different needs. This limits when site operators can use cross-signs. Additionally, devices that do not support a new algorithm will still need to be updated to be able to use the new signing algorithm in the newer certificate, regardless of whether or not it is cross-signed.

Signature algorithm negotiation allows TLS peers to agree on the algorithm to be used for the handshake signature. This algorithm needs to correspond with the key type used in the certificate. Endpoints can infer that if the peer supports an algorithm such as ECDSA for the handshake signature, it must also support ECDSA certificates. This value can be used to multiplex between an RSA-based chain and a smaller ECDSA-based chain. For example, Google’s RSA-based large compatibility chain is four certificates and ~4.1KB, whereas the shortest ECDSA-based chain is three certificates and only ~1.7KB[4](https://blog.chromium.org/#fn4).

Signature algorithm negotiation does not provide trust anchor agility. While the signature algorithm information implies algorithm support, it provides no information about what trust anchors a client actually trusts. A client can support ECDSA, but not have the latest ECDSA root certificate from a specific CA. Due to the wide variety of trust stores in use, many organizations may still often need to be conservative in when they serve ECDSA certificates and may need to provide a longer, cross-signed chain for maximum compatibility.

Neither cross-signatures nor signature algorithm negotiation are solutions to migrating to post-quantum cryptography for authentication. Cross-signatures do not help with new algorithms, and signature algorithm negotiation is solely about negotiating algorithms, not providing information about trust anchors. We expect a gradual transition to post-quantum cryptography. Inferring information about the contents of the trust store from the result of signature algorithm negotiation risks ossifying to a specific version of a specific trust store, rather than purely being used for algorithm negotiation.

Instead, to introduce agility to TLS we need an explicit mechanism for _trust anchor negotiation_, to allow the client and server to efficiently determine which certificate to use. At the November 2023 IETF meeting in Prague, Chrome proposed “[Trust Expressions](https://github.com/davidben/tls-trust-expressions)” as a mechanism for trust anchor negotiation in TLS. Chrome is currently seeking community input on Trust Expressions via the IETF process. We think the goal of being able to cleanly deploy multiple certificates to handle a range of clients is much more important than the specific mechanisms of the proposal.

From there, we can explore more efficient ways to authenticate servers, such as [Merkle Tree Certificates](https://github.com/davidben/merkle-tree-certs). We view introducing some mechanism for trust anchor agility as a necessity for efficient post-quantum authentication. Experimentation will be extremely important as proposals are developed. Agility also enables using different solutions in different contexts, rather than sending extra data for the lowest-common denominator— solutions like Merkle Tree Certificates and [intermediate elision](https://www.ietf.org/archive/id/draft-davidben-tls-trust-expr-02.html#name-intermediate-elision) require up-to-date clients.

Given these constraints, priorities, and [risks](https://dadrian.io/blog/posts/pqc-not-plaintext/), we think agility is more important than defining exactly what a post-quantum PKI will look like at this time. We recommend against _immediately_ standardizing ML-DSA in X.509 for use in the _public_ Web PKI via the [CA/Browser Forum](https://cabforum.org/). We expect that ML-DSA, once NIST completes standardization, will play a part in a post-quantum Web PKI, but we’re focusing on agility first. This does not preclude introducing ML-DSA in X.509 as an option for private PKIs, which may be operating on more strict post-quantum timelines and have fewer constraints around certificate size, handshake latency, issuance transparency, and unmanaged endpoints.

Ultimately, we think that any approach to post-quantum authentication has the same first requirement—a migration mechanism for clients to opt-in to post-quantum secure authentication mechanisms when servers support it. Post-quantum authentication presents significant challenges to the Web ecosystem, but we believe trust anchor agility will enable us to overcome them and lead to a more secure, robust, and performant post-quantum web.

## Notes

---

1. The draft is X25519Kyber768, which is a combination of the pre-quantum algorithm X25519, and the post-quantum algorithm Kyber 768. Kyber is being renamed to ML-KEM, however for the purposes of this post, we will use “Kyber” to refer to the hybrid algorithm defined for TLS. [↩](https://blog.chromium.org/#fnref1)
    
2. As the standards from NIST and IETF are not yet complete, this will be later removed and replaced with the final versions. At this stage of standardization, we expect only early adopters to use the primitives. [↩](https://blog.chromium.org/#fnref2)
    
3. It actually exists in considerably more than two forms, but from an organizational perspective, there are versions that signed by other Let’s Encrypt certificates, and a version that is signed by IdenTrust, which is a completely separate certification authority from Let’s Encrypt. [↩](https://blog.chromium.org/#fnref3)
    
4. The chain length includes the root certificate and leaf certificate. The byte numbers are what is transmitted over the wire, and so they include the leaf certificate but not the root certificate. [↩](https://blog.chromium.org/#fnref4)
    

_Posted by David Adrian, Bob Beck, David Benjamin and Devon O'Brien_

[The Google Analytics Cookie (Explained) - YouTube](https://www.youtube.com/watch?v=o1hw6LJWboE&list=PL8hhAZzwVh8CQyouqPjZENsvYD_RTDR60&index=70&t=18s)
["Comment Ontex s’est lancé dans un projet d’attribution pour optimiser son mix média" par Wizaly - YouTube](https://www.youtube.com/watch?v=ABF70wcJk8E)

Salespanel is a first-party intent data analytics and customer journey tracking software. In the current landscape of customer tracking, with Universal Analytics sunsetting and Google Analytics getting banned in several European countries, Salespanel serves as the perfect solution for B2B businesses who want to track first-party customer journey data and connect it to their sales and marketing systems. Identify, track, qualify, and analyze your leads with Salespanel.

[(1) Salespanel - YouTube](https://www.youtube.com/@salespanel9248/videos)

[Salespanel](https://support.salespanel.io/hc/en-us)

[(1) Multi-Touch Attribution - Salespanel - YouTube](https://www.youtube.com/watch?v=nLoPic-a0vA)

[Server-Side Tagging Made Easy For Everyone - Stape](https://stape.io/)

[Hawke AI](https://app.hawke.ai/login?redirect=/dashboard)

[https://www.youtube.com/watch?v=0MtP_xRJNdg](https://www.youtube.com/watch?v=0MtP_xRJNdg)

### Weberlo

[How Will Digital Marketing Change Without Browser Cookies?](https://www.thehoth.com/blog/browser-cookies-changes/?utm_campaign=Whats-New-In-June-2022-News-Updates&utm_medium=email&utm_source=email-broadcast&utm_content=button&utm_term=existing-list)

[Facebook Ads In A Post iOS14 World—Are They Worth It? - The HOTH](https://www.thehoth.com/blog/facebook-ads-ios14/?utm_campaign=Whats-New-In-June-2022-News-Updates&utm_medium=email&utm_source=email-broadcast&utm_content=button&utm_term=existing-list)

[Facebook Ads KPI — Jepto Help Center](https://www.jepto.com/help/facebook-ads-kpi?apcid=0062afb6414305ba9b57d200&utm_campaign=product-updates-se&utm_content=&utm_medium=email&utm_source=ortto)

[create fake linkedin account for automation (1)](https://www.notion.so/create-fake-linkedin-account-for-automation-1-8d7e3ecf19764cb48931f09e3a7c6c91?pvs=21)

- études
    
    # **Le métier de responsable marketing digital**
    
    **Le responsable marketing digital ou digital marketing manager gère les différents projets numériques en fonction de la stratégie d’entreprise. Il utilise tous les éléments du webmarketing pour développer et fidéliser la clientèle de l’entreprise pour laquelle il agit.**
    
    Son objectif principal est d’augmenter les revenus de la marque qu’il représente en améliorant sa notoriété ainsi que sa visibilité en ligne. Parfaitement au fait des dernières tendances du net et des nouvelles technologies, le responsable marketing digital va utiliser tous les outils digitaux en sa possession - tablettes, ordinateur, mobile - afin de développer sa stratégie marketing et d’optimiser le retour sur investissement de son entreprise (ROI). Le [**master Marketing & Stratégie**](https://dauphine.psl.eu/formations/masters/marketing-et-strategie) de l’Université Paris Dauphine-PSL permet aux étudiants d’acquérir toutes les connaissances nécessaires en matière de stratégie marketing appliquée dans le domaine du digital, pour devenir responsable marketing digital.
    
    # **Rôle et missions du responsable marketing digital3**
    
    Enseignement pluridisciplinaire permettant de s’orienter dans des organisations diverses : Entreprises, intérim, cabinets comptables, agences d’emploi
    
    Le responsable marketing digital joue un rôle central au niveau de la stratégie marketing. A la fois professionnel du marketing, spécialiste des réseaux sociaux et coordinateur des différentes équipes internes et externes à l’entreprise, le responsable marketing digital est amené à réaliser de nombreuses missions variées durant toute sa carrière, comme :
    
    **Missionsquotidiennes**
    
    - Effectuer une veille stratégique
    - Analyser le positionnement des produits et services sur le web ainsi que sur les marchés digitaux.
    - Mettre en place la stratégie digitale de l’entreprise et analyser sa cohérence par rapport aux besoins des internautes
    - Elaborer la conception et le lancement de nouveaux produits et services
    - Planifier et coordonner les différents projets marketing
    - Définir et assurer la gestion communautaire des réseaux sociaux.
    - Gérer les partenariats web et les différents événements de lancement
    - Définir et gérer le budget marketing
    - Encadrer les équipes marketing en charge des différents projets.
    - Effectuer le suivi des opérations de marketing
    - Evaluer l’efficacité des campagnes et les réadapter si besoin
    - Effectuer des reportings et analyser le retour sur investissement (ROI).
    - Transmettre les informations et résultats auprès des équipes ainsi que de la Direction Générale ou Financière
    
    # **Salaires et évolutions de carrière**
    
    Le responsable marketing digital évoluant dans le domaine recherché du numérique, bénéficie d’un profil très prisé par les entreprises et dispose d’un salaire intéressant dès le début de sa carrière. Ainsi, un profil débutant pourra prétendre à une rémunération comprise entre 35 000€ et 38 000€ brut annuel. Un profil confirmé bénéficiant de 5 années d’expérience ou plus pourra prétendre à un salaire de 50 000€ à 60 000€ brut par an.Spécialiste du marketing et du secteur du digital, le responsable marketing digital pourra se diriger durant sa carrière vers des fonctions de directeur marketing digital ou directeur stratégie digitale. S’il le souhaite, il pourra également évoluer en tant que directeur marketing de l’entreprise pour laquelle il travaille.
    
    **Compétencesrequises**
    
    
    
    - Curiosité et polyvalence
    - Créativité
    - Sens de l’écoute
    - Réactivité
    - Forte capacité d’adaptation
    - Force de proposition
    - Compétences managériales
    - Bonnes capacités relationnelles
    - Excellente maîtrise de l’anglais
    - Parfaite maîtrise des réseaux sociaux
    - Excellente maîtrise des outils digitaux (SEO, SEA, outils de retouche photo et création graphique, HTML)
    - Compétences en gestion de budget
    - Connaissances en sociologie afin de pouvoir cerner le comportement des internautes
    
    # **Quelles études pour devenir responsable marketing digital ?**
    
    Devenir responsable en marketing digital exige d’obtenir des compétences poussées en marketing et en digital. Ainsi, un diplôme universitaire de niveau BAC + 5 dans le domaine du marketing sera nécessaire, comme le master Marketing et stratégie proposé par l’Université Paris Dauphine- PSL. Cela permettra aux futurs diplômés d’acquérir les connaissances et compétences dans les domaines du marketing ainsi que de la stratégie, pour pouvoir les appliquer au secteur du digital.
    
    # **Formation pour devenir responsable marketing digital à l’Université Paris Dauphine – PSL**
    
    L’université Paris Dauphine-PSL propose un [**master Marketing et stratégie**](https://dauphine.psl.eu/formations/masters/marketing-et-strategie) d’excellence afin de former les étudiants souhaitant devenir responsable marketing digital. Cette formation permet d’acquérir une maîtrise du domaine du marketing afin de pouvoir en dégager des stratégies répondant aux exigences du secteur du [digital.La](http://digital.La) spécialisation [**communication marketing**](https://dauphine.psl.eu/formations/masters/marketing-et-strategie/m2-communication-marketing) permettra de développer plus en profondeur les aspects communication et stratégie média, afin d’apporter des connaissances complètes en communication digitale, indispensables pour devenir responsable en marketing digital.
    
- Competitors
    
    [RedTrack | Cookieless ad tracking solution for media-buyers](https://redtrack.io/?cmpid=61a60d43c056b300014a5c7c&sub1=%7Breplace%7D&utm_term=redtrack&match_type=p&sub4=135657431444&sub5=585557431901&sub6=16454750635&campaign_name=RedTrack_Europe&ad_position=&network=g&sub10=&ad_group_name=RedTrack_Europe&ref_id=CjwKCAjwjZmTBhB4EiwAynRmD2t1Y-Wmx3JYsok_n-CN2oArayiLe8fevkoo2WjXEjb2ESVSyJnMNhoCnBAQAvD_BwE&utm_campaign=RedTrack_Europe&utm_source=google&utm_medium=cpc&hsa_acc=5766798100&hsa_cam=16454750635&hsa_grp=135657431444&hsa_ad=585557431901&hsa_src=g&hsa_tgt=kwd-298273818384&hsa_kw=redtrack&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjwjZmTBhB4EiwAynRmD2t1Y-Wmx3JYsok_n-CN2oArayiLe8fevkoo2WjXEjb2ESVSyJnMNhoCnBAQAvD_BwE)
    
    [Get Clarity on Your True Lead Value - SegMetrics](https://segmetrics.io/)
    
    [segmetrics-sitemap.html](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e8b543cc-9e1f-4630-9174-575fee96cf05/segmetrics-sitemap.html)
    
    [AnyTrack | #1 Conversion Tracking Software](https://anytrack.io/)
    
    [Wicked Reports multi touch marketing attribution software for ecommerce](https://www.wickedreports.com/)
    
    [Pricing - HYROS](https://hyros.com/pricing.html?imt=1&utm_campaign=m&utm_source=m&utm_medium=m&utm_content=m)
    
    [HYROS Training Channel - YouTube](https://www.youtube.com/channel/UCuXubd9EpOEZlIdWQeCFbcw)
    
    [](https://app.weberlo.com/workspace/_Q_3WbvNSVKbQEDKvvBV-Q/stats?date_type=day&end_date=04-25-2022&start_date=04-18-2022)[https://app.weberlo.com/workspace/*Q*3WbvNSVKbQEDKvvBV-Q/stats?date*type=day&end*date=04-25-2022&start_date=04-18-2022](https://app.weberlo.com/workspace/*Q*3WbvNSVKbQEDKvvBV-Q/stats?date*type=day&end*date=04-25-2022&start_date=04-18-2022)
    
- LinkedIn Profiles [Fake LinkedIn Account: How To Create One Without Being Banned?](https://blog.waalaxy.com/en/how-to-create-a-fake-account-on-linkedin-without-being-banned/?waapiersinternational&fbclid=IwAR1UvR7lGXSwLkUGi4XIpiMX-neqW0LFneXmRzXCXiOxKoFU-0hsuGoF-Rg#step-2-create-an-email-accordingly)
    
    - LinkedIn asks me for my number when I sign up
        
        LinkedIn has detected that you are sharing an IP with other accounts and wants to make sure you are not a robot by asking you for a phone number. If you get to this stage, you need to change your IP. Follow this procedure:
        
        Close all open Linkedin tabs, including your regular account, Put your smartphone (I hope you have one!) in connection sharing: the IP of a 4G phone changes as soon as you activate and deactivate the airplane mode. So you can do this over and over again. Start a new blank Chrome session, Redo the account creation operation. Normally LinkedIn asks you to verify if you are a robot but no more phone number. Be careful you have to stay in connection share until the end of the creation process without reconnecting on another account. Wait at least 24 hours then to reconnect with this new account on your main IP.
        
    - Formation à mla gestion des ressources humaines
        
    - Enseignement pluridisciplinaire permettant de s’orienter dans des organisations diverses : Entreprises, intérim, cabinets comptables, agences d’emploi
        
    
    Then he will ask you for your position. Give **your persona**  an experience, if he is a student, put him in a big and famous school. If he is working, put him in a permanent job or in a work-study program in a big company. Be careful, if there are not many employees in your company, I advise you not to put your fake account on your real company right away (or don’t click on the proposal to choose the company page, keep only the name).If **your account is ever banned**  (you are never safe) it will no longer be visible in searches but will still appear in the number of employees. This is not great for your image if you have to create several.
    
    This is a crucial step in **creating a fake LinkedIn account** : your first connections. A low **acceptance rate**  because no one knows you are likely to alert LinkedIn’s AI. Send a connection request to the people LinkedIn suggests early on. If you can, use a .csv file with your close contacts, who you’ll ask to accept you, or use our [file of accounts](https://docs.google.com/spreadsheets/d/1vn-3q4tdq52dQofFX2tnD8UYlmIphbpL6w_Dj5HDHzk/edit?usp=sharing)  that will accept you, in any case, to get started. You can also add yours via [this form](https://docs.google.com/forms/d/e/1FAIpQLSdLgavWKfxFU9ikBv-yznghi46ETtBBdEr0B9sqMGw6fhy_Eg/viewform?usp=sf_link)  to receive invitations and grow your network organically.
    
    Once the account is created, the first **invitations sent**  and the photo set up, complete your persona’s profile. The goal is to make it at least intermediate. You can make him follow hashtags or add skills. LinkedIn will have less of an impression that it is a fake account, just like the users of the **social network.**
    
    From the moment someone accepts you, you have access to their connections (if no one has accepted you in the proposed people, you can send **invitations to Premium members** , they tend to accept much more easily). Once you have reached 100 connections and your account has at least 1 week of life, you can download Waalaxy. Export as many people as possible from this search, 1000, into Waalaxy. I recommend you simply use the “Person” and “2nd connection” filters.
    
    You will then just have to [make connexion requests](https://www.youtube.com/watch?v=L2hFlOcrO-k&list=PLD7QMPI8zqoHHy1tfj8MAMDhModkqNugb&index=3) (I advise you to leave the notes blank) on these people. Since you will only be second-degree connections, they will tend to accept you much more easily.
    
    Remember to set **Waalaxy** to make your hours look normal and not 24/7 with your account still fresh.
    
    Once the profile has more than 250 connections, you can consider it ready for real life. You can change its profile picture or its first or last name (it is not recommended to change all 3, your account could be banned very easily).
    
    Here is a list of good practices and cases to avoid for your account to survive.
    
    Each time you log in, [improve the profile a bit](https://blog.waalaxy.com/en/optimize-linkedin-profile/). A previous position, a bio, a university… We advise you to add a past with a big account. It seems that it is more complicated for LinkedIn to verify and gives you the benefit of the doubt (thanks to [Guillaume Albisetti](https://www.linkedin.com/in/guillaumealbisetti/)). Do yourself a favor! An executive at Total or Sales at Orange?For each position or school, add a complete description. LinkedIn doesn’t like empty job descriptions.
    
    Once it’s ready:
    
    Aim for Relationships 2 as a first step. If you have a low acceptance rate at once, LinkedIn may ban you.
    
- Prospection LinkedIn - Le guide concis et droit au but
    
    - **Comment prospecter avec LinkedIn de façon efficace !**
        
        1. **transformer votre compte en une vitrine alléchante**
            
            1. Comment bien paramétrer votre compte [LinkedIn](https://blog.waalaxy.com/linkedin-lead-generation-trouver-clients/) pour en faire une machine à vendre.
            
            [r](https://www.notion.so/r-9f3266de52124eb4bca38af7227085a6?pvs=21)
            
        
        Publié par [**Amandine**](https://blog.waalaxy.com/comment-prospecter-avec-linkedin-de-facon-efficace/) le avril 13, 20225/5 (121 votes)
        
        6 min
        
        LinkedIn fait partie des réseaux sociaux à vocation professionnelle. Longtemps considéré comme un annuaire, cette plateforme permet de générer du trafic qualifié vers votre site et contribue à votre branding en montrant votre expertise. Nous vous expliquons comment **prospecter au mieux sur LinkedIn** !
        
        **Récap 👇**
        
        # [Maitrisez Linkedin pour booster votre démarchage](https://blog.waalaxy.com/comment-prospecter-avec-linkedin-de-facon-efficace/#maitrisez-linkedin-pour-booster-votre-demarchage)[Soyez efficace, pensez stratégie pour prospecter sur LinkedIn !](https://blog.waalaxy.com/comment-prospecter-avec-linkedin-de-facon-efficace/#soyez-efficace-pensez-strategie-pour-prospecter-sur-linkedin)[Gagnez du temps grâce à la puissance de Waalaxy](https://blog.waalaxy.com/comment-prospecter-avec-linkedin-de-facon-efficace/#gagnez-du-temps-grace-a-la-puissance-de-waalaxy)
        
        # **Maitrisez Linkedin pour booster votre démarchage**
        
        LinkedIn est l’endroit idéal pour la **prospection**. Pour commencer, il est primordial de [créer un profil optimisé](https://blog.waalaxy.com/comment-optimiser-son-profil-linkedin/) en détaillant votre activité, votre expertise, votre domaine. Plus vous donnerez d’informations, plus vous susciterez l’envie de vous connaitre. Imaginez votre profil comme votre vitrine !
        
        L’idée de LinkedIn est également de créer de l’interaction puisqu’il est possible de publier des articles, des posts, de commenter, de partager. En diffusant des contenus de qualité, vous vous positionnez en tant qu’expert dans votre domaine. En étant actif sur les publications des autres, vous leur montrez un intérêt, vous pouvez d’ailleurs apporter un complément d’informations ou simplement échanger autour d’une thématique.
        
        Enfin, créer l’interaction passe aussi par **le réseautage** et c’est tout le principe de LinkedIn : faire grandir vos contacts, générer des leads, attirer de nouveaux prospects. C’est un réseau sur lequel il faut être proactif. Si vous n’avez pas le temps de publier des contenus de façon quotidienne ou si vous n’osez pas, vous pouvez participer dans des groupes dédiés à vos intérêts ou également via la messagerie privée. LinkedIn est un puissant outil qui s’adapte à votre personnalité, vos objectifs à condition d’être régulier et de savoir tirer profit de ses nombreuses caractéristiques. En restant caché, il va être difficile de vous démarquer et vos prospects ne vous connaîtront pas ! **Prospecter sur LinkedIn**, c’est aussi se montrer !
        
        Savoir comment votre cible aime interagir, où la trouver vous fera par ailleurs gagner un temps considérable. Prenez le temps d’observer ses habitudes, d’analyser ses comportements pour adapter votre communication.
        
        # **Soyez efficace, pensez stratégie pour prospecter sur LinkedIn !**
        
        Avant de vous lancer et de **prospecter sur LinkedIn**, pensez à votre stratégie. Cela passe par différentes étapes comme :
        
        - Identifier vos objectifs : augmenter votre mailing list, développer le trafic vers votre site internet, cultiver votre branding…
        - Définir clairement votre offre : qu’avez-vous à vendre ? Quelle est la [valeur ajoutée](https://blog.waalaxy.com/valeur-ajoutee/) de vos produits ou services ?
        - Identifier votre cible : auprès de qui souhaitez-vous vous démarquer et qu’avez-vous à leur apporter ?
        - Mettre en place une stratégie de contenus à diffuser pour être plus visible
        - Comment entrer en contact et comment obtenir les coordonnées de votre cible notamment via la demande de connexion et la messagerie privée.
        
        En sachant répondre à ces interrogations, vous allez déterminer au mieux **vos actions sur LinkedIn** et gagnerez en efficacité. Cela revient à développer une stratégie de communication, en l’adaptant à ce réseau.
        
        Pour entrer en contact, il existe deux méthodes :
        
        - Le principe de la question ouverte permet de montrer un réel intérêt à votre audience tout en engageant rapidement la discussion. Cette méthode d’**approche qualitative** est excellente pour obtenir plus d’engagements, de réactions mais peut s’avérer longue puisqu’il est indispensable d’entretenir les discussions. Cette méthode est cependant bonne pour vendre une activité de services par exemple. Cette méthode est d’ailleurs excellente pour cultiver votre personal branding !
        - La **méthode quantitative** : l’idée est de générer un maximum de connexions sans pour autant tomber dans le spamming. Si le gain de temps et l’optimisation sont les principales motivations de cette méthode, elle peut représenter une perte de qualité. Elle peut convenir si votre site convertit facilement, si vous voulez multiplier votre prospection. C’est la méthode la moins utilisée sur LinkedIn et que nous vous déconseillons.
        
        # **Gagnez du temps grâce à la puissance de Waalaxy**
        
        Waalaxy est l’outil idéal pour **votre démarchage** puisqu’il vous permet d’accéder à **toutes les fonctionnalités LinkedIn**, de façon automatisée. Cette extension Chrome fonctionne en laissant votre onglet LinkedIn ouvert sur votre navigateur mais vous êtes libre d’utiliser votre ordinateur comme bon vous semble pendant ce temps.
        
        Dès la version gratuite, vous pouvez automatiser :
        
        - La visite de profils
        - Leur suivi,
        - Les demandes de connexion
        - Les messages
        
        Vous pouvez générer jusqu’à 15 actions par jour pour chacune des activités citées. La version payante est un complément de qualité puisque vous pouvez créer des scénarios pour chaque action. Idéal pour cibler chacun de vos actions. Elle permet de générer des actions plus ciblées et d’**affiner votre prospection**.
        
        Waalaxy présente l’avantage de simuler le comportement humain. Le but est de protéger votre compte des restrictions LinkedIn et génère de façon aléatoire :
        
        - Entre 80 et 100 demandes de connexions, visites et suivis
        - 120 et 150 messages
        
        Si le seuil de ces actions est atteint, Waalaxy stoppe son activité pour la journée et reprend le lendemain pour ne pas vous pénaliser par rapport aux règles de LinkedIn. L’avantage de Waalaxy est que l’automatisation des tâches de base vous permet de gagner du temps. Vos **campagnes de prospection** sont optimisées, rentabilisées.
        
        Waalaxy ne s’arrête pas là puisque vous pouvez créer des « [sequences](https://blog.waalaxy.com/sequence-waalaxy/) » afin d’**automatiser votre marketing**. Vous ciblez donc vos actions selon vos objectifs, votre offre, vos prospects en personnalisant les contenus. A titre d’exemple vous pouvez :
        
        - Cibler les personnes à qui vous voulez envoyer une demande de connexion
        - Personnaliser les notes afin de ne pas passer pour un robot
        - Relancer une personne qui n’a pas lu votre message
        
        Pas moins de 14 modèles sont disponibles pour débuter avec cette option tout en ayant la possibilité de personnaliser les actions pour une communication qui vous ressemble.
        
        Il existe bien sûr d’autres fonctionnalités qui vont devenir indispensables pour faciliter au mieux votre **démarche de prospection.** Vous pouvez ensuite en mesurer l’impact depuis le tableau de bord de Waalaxy. Vous y retrouvez toutes les statistiques liées à votre activité LinkedIn : nombre de visites sur votre profil, le nombre d’actions générées par type d’action, campagne ou autres… Tout est centralisé pour mesurer **le résultat de votre prospection** en un coup d’œil et ajuster vos futures actions en conséquence. Vous l’aurez compris, Waalaxy va vite devenir votre meilleur allié pour **prospecter sur [LinkedIn](https://www.linkedin.com/feed/)** !
        
    - **Comment trouver des prospects sur LinkedIn ?**
        
        Publié par [**Guillaume Portalier**](https://blog.waalaxy.com/comment-trouver-des-prospects-sur-linkedin/) le février 2, 20225/5 (289 votes)
        
        4 min
        
        La prospection, vaste sujet ! En 2021, La prospection LinkedIn à été jugé comme la plus efficace pour générer des leads Btob. Maintenant, découvrez **comment trouver des prospects sur LinkedIn !**
        
        **Récap 👇**
        
        # [LinkedIn : la base de donnée qualifiée à ciel ouvert](https://blog.waalaxy.com/comment-trouver-des-prospects-sur-linkedin/#linkedin-la-base-de-donnee-qualifiee-a-ciel-ouvert)[LinkedIn : par où commencer ?](https://blog.waalaxy.com/comment-trouver-des-prospects-sur-linkedin/#linkedin-par-ou-commencer)[Comment trouver des prospects sur LinkedIn ?](https://blog.waalaxy.com/comment-trouver-des-prospects-sur-linkedin/#comment-trouver-des-prospects-sur-linkedin)[Automatiser sa prospection avec ProspectIn](https://blog.waalaxy.com/comment-trouver-des-prospects-sur-linkedin/#automatiser-sa-prospection-avec-prospectin)
        
        Bon, soyons sérieux 5 minutes, le porte à porte, c’était plutôt les années 70, et les appels à froid, à moins d’être un opérateur téléphonique, cela relève aussi du passé.
        
        
        
        Il nous reste donc **l’emailing**, et **la prospection LinkedIn**. L’E-mailing peut être automatisé mais requiert l’achat de large et couteuses bases de données. Or, LinkedIn EST une base de donnée,  gratuite qui plus est. Mais saviez-vous que la prospection LinkedIn pouvait aussi être automatisée ? 😜
        
        Dans cet article, je vous montre comment faire du **LinkedIn automation**, étape par étape.
        
        # **LinkedIn : la base de donnée qualifiée à ciel ouvert**
        
        En général lorsque l’on veut prospecter, la première étape consiste à se constituer un fichier prospects contenant **les adresses emails des prospects**, ainsi qu’un certain nombre d’informations permettant de les qualifier : région, industry, âge, etc.Pour se constituer ce fichier il existe un nombre incalculable de méthodes : récolte d’information pour inscription sur une newsletter, scrapping de donnée, achat de bases de données… Dans tous les cas, cela vous demandera un temps considérable, ou une grosse somme d’argent.
        
        Avec **LinkedIn**, c’est simple, vous avez accès à une base de plus de 600 millions d’utilisateurs qui renseignent gratuitement et publiquement un nombre incalculable d’informations sur eux (prénom, nom, poste, ancienneté dans le poste, industrie, école, entreprise, centre d’intérêt…) et interagissent avec les autres utilisateurs, laissant des traces de leur centres d’intérêts et motivations. Ce qui en fait la plus grosse base de données qualifiée au monde.
        
        Il ne tient qu’à vous de l’exploiter pour trouver des nouveaux clients.
        
        # **LinkedIn : par où commencer ?**
        
        Si vous démarrez sur LinkedIn, vous pouvez déjà consulter [notre article pour optimiser votre profil](https://blog.waalaxy.com/comment-optimiser-son-profil-linkedin-2/).
        
        Une fois que votre profil est performant, vous pouvez commencer à paramétrer votre **prospection B2B**. Commencez par vous vos poser les bonnes questions :
        
        - [Quel est mon persona ?](https://blog.waalaxy.com/comment-trouver-sa-cible-sur-linkedin-definir-son-persona-et-les-criteres-de-choix/)
        - [Quels filtres utiliser pour rechercher mes prospects ?](https://blog.waalaxy.com/comment-utiliser-les-filtres-linkedin/)
        
        # **Comment trouver des prospects sur LinkedIn ?**
        
        Maintenant que vous savez les définir, vous devez les trouver.
        
        Pour ça, suivez le guide de [la segmentation sur LinkedIn](https://blog.waalaxy.com/comment-faire-une-bonne-recherche-sur-linkedin/) ou sur [LinkedIn Sales Navigator](https://blog.waalaxy.com/comment-effectuer-une-bonne-recherche-avec-le-sales-navigator/) (selon ce que vous utilisez).
        
        Une fois que vous avez la réponse à ces questions, vous pouvez passer à la suite : l’automatisation de votre prospection grâce à [ProspectIn.](https://www.prospectin.fr/)
        
        # **Automatiser sa prospection avec ProspectIn**
        
        ProspectIn est l’outil n°1 qui vous permet de passer **votre prospection LinkedIn** en mode autopilote. En seulement 10 minutes par jour, vous pourrez générer des dizaines de leads par semaine. Suivez le guide. 😉
        
        # **Etape 1 : l’export de prospect**
        
        Avec ProspectIn, la première étape consiste à exporter des prospects depuis une **page de recherche LinkedIn**. Nous vous recommandons d’utiliser l’option premium « Sales Navigator » de LinkedIn qui permet d’obtenir des résultats de recherche infiniment plus précis.
        
        Si vous n’avez pas les moyens de vous payer un abonnement au Sales Navigator, pas de soucis, nous avons écrit un article sur [comment utiliser le Sales Navigator sans le payer. 🔥](https://blog.waalaxy.com/comment-utiliser-le-sales-navigator-sans-le-payer/)
        
        Pour exporter des prospects depuis une page de recherche, il vous suffit de :
        
        - Cliquer sur l’icône de l’extension en haut à droite de votre écran,
        - Cliquer sur « créer campagne »,
        - Sélectionner le nombre de prospects que vous voulez exporter,
        - Puis de cliquer sur « valider ».
        
        
        
        # **Etape 2 : choix du scénario de prospection**
        
        Une fois que vos **prospects ont été exportés dans ProspectIn**, il va vous falloir choisir le scénario de prospection que vous voulez mettre en place.
        
        Pas de panique : nous vous avons préparé des modèles. 👆
        
        - Accédez à l’interface CRM de ProspectIn en cliquant sur « CRM » dans la petite fenêtre ProspectIn.
        - Cliquez sur « campagne », sélectionnez la campagne que vous avez crée précédemment, puis cliquez sur l’onglet « scénario ».
        
        
        
        Parfait, vous allez maintenant pouvoir choisir votre scénario. Nous allons partir sur un scénario « classique » avec envoi d’une **demande de connexion**, puis d’un premier message, suivi d’un message de relance.
        
        - Cliquez sur « nouveau scénario » puis sélectionnez le scénario « Sherlock »;
        
        
        
        # **Etape 3 : Paramétrage des messages et envoi de la campagne**
        
        Troisième et dernière étape : Saisissez le contenu de la **note d’invitation** à envoyer (*vous pouvez aussi laisser le champ vide, auquel cas aucune note ne sera envoyée, [voir notre étude de cas)](https://blog.waalaxy.com/faut-il-contacter-ses-prospects-avec-ou-sans-note-dinvitation/).*Ainsi que le contenu de votre premier message et le contenu de votre deuxième message.
        
        Sélectionnez les prospects à contacter, et cliquez sur « sauvegarder et lancer ».
        
        Les actions s’enverront automatiquement et progressivement, en respectant des délais (afin de simuler le comportement humain). [En savoir plus sur la sécurité de l’outil.](https://blog.waalaxy.com/securite-prospectin-%e2%94%82-comment-nous-securisons-votre-compte/)
        
        
        
        Et voilà, vous venez de lancer votre premier scénario d’automatisation de prospection LinkedIn. 🚀
        
        Vous savez **comment trouver des prospects sur LinkedIn** et comment les contacter, vous êtes prêts !
        
    
    ## Ajouter un message de connexion ?
    
    Ce n’estg pas nécessaire, on peut obtenir d’aussi bons résultats sans ça. L’intitulé de votre poste joue le rôle d’intéresser et convertir les clients. [Message de connexion LinkedIn : Top 3 meilleurs modèles [Étude de cas]](https://blog.waalaxy.com/message-de-connexion-linkedin/)
    
    ### A ne jamais faire
    
    Vous n’avez pas le temps, et vos prospects non plus
    
    - Avoir une intention commerciale évidente : Oui vous voulez vendre, mais sans être transparent sur vos intentions car vous vous imposez à votre interlocuteur, il n’a pas demandé à acheter ou connaître votre produit. Prenez le temps de vous intéresser à lui et à la valeur que vous pourrez lui amener, pour qu’il s’intéresse à vous en retour
        
    - **Envoyer un pavé illisible de 1000 mots :** Un **message de prospection**  de 1000 mots ne sera jamais lu donc inutile de passer du temps à décrire votre activité ou votre produit en long en large et en travers : cela ne sert à rien !!! Les gens s’en foutent de vous ils ne vous connaissent pas !
        
        En moyenne, un message de 1 000 caractères et plus reçoit deux fois moins de réponse qu’un message de 300 caractères ([consultez notre étude sur le sujet](https://blog.waalaxy.com/prospection-linkedin/))
        
    - **Ecrire en majuscules :** Cela donne un ton extrêmement agressif à votre message. PAS BESOIN D’AGRESSER QUICONQUE !!
        
    - **Utiliser plusieurs polices d’écritures différentes au sein de votre message :** Au même titre, cela donne l’impression de travail bâclé, même si c’est le contraire qui est voulu, ça sonne non professionnel, gadget, automatisé, trop préparé... Le but est de paraître naturel pour créer des relations humaines qui vont créer du business, pas d’attirer un brochet avec un appât luminescent !
        
    - **Faire des fautes d’orthographe :** Ca paraît être du bon sens, et pourtant. Je ne calcule plus le nombre de **message de prospection** remplis de fautes d’orthographe.Encore une fois, la forme est aussi importante que le fond. Faire 10 fautes d’orthographe dans votre message de **prospection LinkedIn** vous décrédibilise totalement.
        
    - **Parler de soi, être trop vague, ne pas utiliser d’appel à l’action :** Votre prospect ne vous connait pas. Il ne connait pas votre activité. Il ne veut pas savoir ce que vous faîtes. Il veut comprendre comment vous allez l’aider à répondre à ses problèmes. Vous ne pouvez pas vous permettre de rester vague dans votre approche, sans **appel à l’action**, et espérer que cela morde :
        
    
    # **Comment rédiger un message qui vend sur LinkedIn**
    
    Bien, maintenant que l’on a vu les écueils à éviter, on va pouvoir se pencher sur les grands principes et techniques qui vous permettront d’**optimiser votre message de prospection sur LinkedIn.**
    
    - Soigner la forme : En prospection, la forme est aussi importante que le fond, votre message doit être soigné. 👌🏻 DES CODES SOCIAUX
    - **La structure de votre message :** Vous devez envisager votre [message sur LinkedIn](https://blog.waalaxy.com/quelle-est-la-difference-entre-message-et-connexion-sur-linkedin/) avec une structure fixe, chaque partie étant régie par des codes spécifiques.
    - **L’accroche :** L’accroche est la première phrase que vous allez utiliser dans votre message ou **note LinkedIn**. Elle doit être courte, mais surtout, elle doit amener le destinataire du message à continuer la lecture de ce dernier. L’accroche est primordiale : si vous perdez votre interlocuteur à ce stade, peu importe que vous ayez soigné au maximum la suite de votre message, cela sera vain.
    
    L’accroche sous forme de question fonctionne en général assez bien. Vous ne parlez pas de vous directement, vous vous intéressez à la problématique de votre prospect et cherchez à comprendre ses enjeux. L’accroche doit ainsi soulever une « pain », un problème rencontré par votre prospect.N’oubliez pas que s »il n’y a pas de problème, il n’y a pas de solution. 😉
    
    ProspectIn permet d’**automatiser l’envoi de message sur LinkedIn**, nous vous recommandons de prendre un peu du temps ainsi économisé pour peaufiner vos approches.
    
    N’hésitez pas à [faire des tests A/B](https://blog.waalaxy.com/pourquoi-et-comment-faire-de-la-b-testing-avec-prospectin/) sur vos messages pour trouver l’approche qui transforme le mieux.
    
    # **Votre proposition de valeur**
    
    La proposition de valeur vient juste après l’accroche. Si vous utilisez une question dans l’accroche, la proposition de valeur vient donner des éléments de réponse à cette question.
    
    En une ou deux phrases maximum, vous devez énoncer le plus clairement possible ce que vous proposez dans votre activité (B2B, solution, service, SaaS?…) et comment ce que vous proposez est cohérent par rapport au problème rencontré par votre cible.
    
    Vous devez en dire suffisamment pour que votre prospect ait envie d’en savoir plus après avoir lu votre proposition de valeur, en visitant votre site web par exemple.
    
    # **L’appel à l’action**
    
    Maintenant que vous avez expliqué en quoi vous proposiez un produit/service X qui répondait au problème Y, il faut que vous indiquiez à votre prospect les prochaines étapes.
    
    Vous pouvez par exemple envoyer un lien d’inscription, indiquer un lien vers votre site web ou bien encore proposer à votre cible de revenir vers vous.
    
    De manière générale, il est préférable de ne jamais dépasser les 500 caractères dans votre message. Rappellez-vous que vous n’avez que quelques secondes pour capter l’attention de votre prospect, le cerveau humain est ainsi fait qu’il se fait une idée sur l’intérêt potentiel d’un message en moins de 2 secondes. Il y’a fort à parier que votre message ne sera même pas lu si votre message est trop long à lire à première vue.
    
    # **Analyse d’un message LinkedIn**
    
    En reprenant la structure ci-dessus, voici ce que cela donnerait pour un message de prospection envoyé pour faire la promotion de [Piwaa](https://fr.piwaa.com/), le dernier outil de la famille Waapi.
    
    - L’accroche :
    
    
    
    L’accroche est simple et efficace, vous aurez [l’attention de tous les prospects](https://blog.waalaxy.com/comment-attirer-lattention-de-mes-prospects-sur-linkedin/) qui utilisent massivement la messagerie LinkedIn (les gros utilisateurs de la messagerie savent à quel point c’est une PAIN 😜)
    
    - La proposition de valeur :
    
    
    
    La proposition de valeur permet de donner des informations sur la nature du produit et ce que l’on peut en attendre.
    
    - L’appel à l’action :
    
    
    
    L’appel à l’action permet à la fois d’indiquer les prochaines étapes pour votre prospect, et de proposer des informations supplémentaires si nécessaire (grâce au lien vers le site web).
    
    En quelques secondes vous indiquez clairement à quel problème vous vous attaquez, ce que vous proposez, et ce que cela implique pour votre **cible**.
    
    # **Conclusion :**
    
    Pour optimiser l’efficacité de votre **message de prospection sur LinkedIn**, il faut respecter quelques règles de bon sens et appliquer une structure précise répondant à certains critères.
    
    Si vous voulez aller encore plus loin dans l’optimisation, il faudra effectuer des test A/B.
    
    ### Utiliser des outils ?
    
    L’outil vous permet de gagner un temps précieux et peut permettre d’obtenir des résultats largement supérieurs aux **campagnes emailing classique** , encore faut-il que vos approches et messages de prospection soient optimisés.
    
- Let me tell you why you’re not ready for tracking in the cookieless era and what you can do about it ?
    
    Hyros is the market leader. More and more competitors are coming in this market
    
    - First you need to know how these tools are different from Google Analytics or other analytics tools, What makes em so expensive & special
        - you own the data
        - in real time
    - what is the benefit of server side and why is that a good thing
    
    Most of the clients don't know all the technical details... They just know the word cookieless and server side and associate that with accurate tracking
    
    Server side means what it means you have browser-side tracking that uses browser cookies and server side tracking that doesn't require browser cookies to work. Apple launched an iOS update that specifically restricts the lifetime of a cookie to 7 days which made cookie based tracking really innacurate. So the industry trend is now cookieless server side tracking
    
    The way to go around the 7 day limit is to use server side cookies vs browser cookies
    
    [](https://tinuiti.com/blog/data-privacy/server-to-server-tracking/?fbclid=IwAR28yH8QuJs_rayRmPFD-xw7i-io8_zY6EDvJuaudyU95sHRWoin99fUomk)[https://tinuiti.com/blog/data-privacy/server-to-server-tracking/](https://tinuiti.com/blog/data-privacy/server-to-server-tracking/)
    
- What is server-side tracking and why you need it ?
    
    
    
- How to track all of your channels in one place and skyrocket your ROI ?
    
    1. Define from where you traffic comes from
        
        
        
    2. Add the domain of your website and add the tracking code in its header (or use WordPress extension)
        
        
        
    3. Choose the payment processor you use for billing your customers
        
        
        
    4. Click “Next - Build “
        
        
        
    5. Enjoy your fresh analytics and all-in-one dashboard
        
        
        
        
        
        
        
- How to get better reporting and How to win at ads in the cookieless era ?
    
    out there before the iOS changes and now we can see that there are more people that they are actually using it because of the problem that we have with reporting. So we know that we have a problem with the attribution model and the attributed sales or leads to our funnels. Now it's 7 days.
    
    It used to be in 2020 28 days. With Hyros even when it used to be 28 days you could go up to one year, two years and see the whole journey of one of your clients, what they did, when they bought and actually also understand the lifetime value of each one of your clients, how much they're spending, how good clients they are, the frequency that they buy. All of that. It's very good at tracking.
    
    It's tracking the whole journey of each one of your clients.
    
    And it's having many good data points that is going to gather all of this information, like IP addresses. Even if somebody changed the email, it can actually track it and report all of this data back to your Facebook pixel. It's working with its own pixel. It's working with server to server integration. It doesn't work with browser to browser like we used to have with pixel.
    
    This is why it was better. Now we have the Conversion API on Facebook. They actually try to do something like this. But let me tell you my honest opinion. My honest opinion is that Facebook is a platform that is a plug-in platform that you want everybody to use.
    
    So it has to be a little bit of a dummy platform. Now, if Facebook is making everything super complicated, it's up to them. They have a super complicated software, but other than that, they try to make things very simple. You take it, you put the pixel, you advertise. With the iOS changes, this has changed.
    
    Now we have the API integration and more settings that people have to do and it's becoming more and more difficult.
    
    Hyros, on the other hand, is having a very good team, which is going to help you to integrate it. I have used it with some of my clients. It's very good at reporting and it's giving you so many good data on how to actually track everything that is happening and actually have a very good idea of the actual results that you are getting from your ads, because right now on the Facebook platform, the ads that we are getting reported back, they are not the actual results.
    
    And we need to go to Google Analytics or other places in order to find what is the reality.
    
    and if we're profiting from our ads. So far so good. The reporting is very good. I totally recommend Hyros for that. Now I have one small issue.
    
    First of all, Hyros says that they are reporting the data back to Facebook. I can believe that it can be Facebook server to server integration, and I believe that the results go straight away to your pixel and they are helping to improve the pixel, season it more.
    
    I believe them totally in that. But after using Hyros with some of my clients, talking also with the team, which again the Customer Support is amazing. I haven't found a lot of information about the ads themselves.
    
    If the data that is being reported back to Facebook, if it's helping towards the optimization of the ads. How does Facebook work? As we said in this channel, it's working like this. Facebook is finding one sale Konstantinos. Then it says "Okay, let's target another person like Kostantinos and another similar person, another similar person, another similar person.
    
    And then Facebook says, "Okay, let's find a similar person to that and it gets another sale and another lead. And then it says...
    
    And then it says "Okay, let's find another similar person based on the previous 32.
    
    " And then it dies. What is this, a crossover episode? What is happening right now? Out of the eleven sales that are happening Facebook reports back the five so our ad is optimizing with these five sales. What is the big benefit of Hyros?
    
    If it can bring the extra six that are actually being reported, we can see on the Hyros that it shows these six extra sales for example, it's just an example. Then if it brings this data of the six sales and we can actually identify the people that have done the sales then Facebook can use these data and have instead of five people eleven people as a database to optimize and find the next sale and the next sale.
    
    Now Hyros is saying that this is happening. I don't believe that this is happening. What?
    
    Not because I don't want to believe them, and also they don't have a lot of information about it because I totally get it. Even this video that I make here, I make it just to be okay with myself. I don't think that a lot of people can understand this technical information and they don't really care also about learning this technical information. So Alex and his team, they're putting a great effort to show as much as they can about the app. But at the end of the day, it's very difficult to explain to people all of these technical information.
    
    So in my opinion, what is happening is that Hyros is reporting back to the pixel only, but it's not reporting on the actual ad set, it's not reporting on the actual ad set the data so that I can use them to optimize.
    
    Can I prove it based on what their team say? They say that they do it. Can I prove that they don't do it? No, I'm just going to say my honest opinion, which is this: by using Hyros in some of my big clients, I can tell you that when this was happening and I was watching, because they have their own dashboard and they also have an extension, that you can use and you can see actually two columns with the actual results.
    
    And I was seeing these results and I was trying to optimize towards these results. For example, when one of my ad sets had 1.5 ROAS and Hyros was reporting 2.5, I knew that I was going to scale or keep it for a longer period, not even scale. And that brought me to a point that I was actually gambling with my ads, which is proving that the ads were not optimizing based on the Hyros events, but they were optimizing based on what they were watching on Facebook.
    
    Wow! This is my only problem with Hyros. I don't think that it's optimizing the campaigns and I think that it's leading you to gambling. Should you use it? Of course, it's an amazing tool for reporting, a tool that you cannot find anywhere else, and it's a very good tool because you can actually use all of these data to understand the journey and the lifetime value of your customers and actually understand your actual results.
    
    But if you want to use it for optimization, in my honest and humble opinion, it's not working and it's leading you in gambling with your ads again and again and again without taking the returns that you should take.
    
    This is my honest opinion about Hyros. I think that it's a great program, but I don't think that what they say about optimization is actually true. I'm not saying that they are lying purposely. I'm saying that even if they think that they are optimizing the ads, they don't.
    
    At the end of the day, if this was happening, I don't think that the platform wouldn't have the actual results because if they are uploading the results, as they say, why they are not visible in my ads manager, and I have to use the extension in order to see the actual results? And also something else that I really want to say is that... about pricing.
    
    I hear a lot of people talking about pricing of Hyros being super expensive. For the people out there that have big account spending 20K, 30K, 40K, 50K I must say that their pricing is totally reasonable and they have a 90-days guarantee return of your money if you don't like the program.
    
    So this video is not about hating Hyros. It's about saying my honest and humble opinion about optimization, in which I don't think that Hyros is helping, but other than that, you can use it in so many other ways, and it is not expensive for someone who is spending 20K, 30K, 40K, 50K per month or more on Facebook ads. This is my honest opinion.
    
    I know it's a little bit of a technical video and I hope to see you in a future video. .
    
- What is the most important asset for a marketer ?
    
    Traffic ?
    
    To know your audience ?
    
    !! ALL WRONG !!
    
    It’s the ability to mesure performance. Without it, none of the above is even relevant and profitability and scaling will be incredibly hard Analyzing performance is opening the door to finding out what failing and what’s working, fin0ding good paths, and optimizing them to maximize the spending/revenue ratio
    
    And what’s the greatest way to analyze performance ? It’s watching closely how your visitors are reacting to your content and what they’re doing on your site
    
    We had Google Analytics for that, but they’re moving toward less and less sharing information with us
    
    But how can you know your audience with all those legal and cultural browser cookies restrictions ?
    
    It might me the perfect time to make the rules ourselves, to own our data and to have the whole view
    
- What is Hyros ?
    
    Hyros is the leader of the sales attribution tools industry, which are platforms that tracks all events from visitors and prospects accross marketing channels, to guess which content consumption lead to the conversion !
    
    They can be use to consolidate all media buying activities in one place and track, manage, optimize across all devices, channels, and platforms
    
    The are also use to bypass more and more restrictive sales attribution usual systems. Facebook went from a 30 days windows of tracking to a 7 days one, which considerably lower the amount of data we get from our visitors. And that only the beginning !
    
    iOS 14 and cookielesss browser are the marketer’s dystopian future, happening right in front of our eyes
    

### Cold email Guidelines

- Write a short e-mail, not too much information. (Your goal should be a appointment, not a pitch). Nobody wants to read long text
- Speak the language of your target group. (It's very important that your e-mail doesnt look like a standardized approach)
- Generate a PDF about your service, so potential clients can read some stuff if they are interested.

**1. Include an unsubscribe link.** Seriously. If you have an unsubscribe link, I'll nicely peruse your pitch. If you DON'T have an unsub link, I will go out of my way to mark you as spam a thousand times over. All the lemwarm in the world won't save you if everyone on the other end is marking you as spam.

**2. Keep it short.** 2-3 years ago, cold emails were a novelty. Now, every one and their auntie is cold emailing. And everyone is the same. Super long emails.

**3. Your personalization isn't personal at all.** Personalization isn't my name or my company's name. That's laziness. If you can't pay someone a few bucks to write something manually for all your contacts and insert them as a variable in your spreadsheet, then you're wasting your first impression.

**4. No one cares about you,** your product or your service. You have 2-3 sentences to immediately tell me you know my business, what my pain points are, and to provide me _real_ value. About 95% of all cold outreach is about you. No one cares about you. When I teach my copywriting course, that's the #1 Copywriting Commandment.

**5. Create value for ME!** Guess what? You're the 8th person this week -- and it's only Tuesday! -- that can bring me more leads. You're the 3rd person this hour that will do commission-only sales. I don't want to jump on a call with you. A zoom to synergize sounds terrible. That's value for you. Do you have a free ebook that gives in-depth insights into my specific industry? That's value for me.

**6. Garbage In, Garbage Out**. You can be successful with lazy cold email. Chances are, though, your results will reflect the effort you put in. The problem with cold outreach is how easy it is to mass spam 10,000 people. And you'll get a handful of sales, because even a broken clock is right twice a day. So, you think you have it figured out. You don't. If you put more effort in, you'll get actual results out.

- Write an email like you write it to a normal person. Shouldnt be too much like you wanna sale or advertise something
- Framework 1
    - I hope you are doing good or so
    - 1 sentence who you are and what you are doing
    - Write about problem & solution. keep it short
    - If you have testimonials, it would be perfect
    - CTA—-> call

## What is Weberlo ?

Weberlo is an intelligent sales attribution platform that helps you monetise traffic.

It allows you to:-> Track conversions from your Woocommerce shop-> Attribute sales to traffic sources-> Track performance of your lead magnets-> Attribute lead generation to traffic sources-> Track real people, not just page views-> Study user behaviour, learn how visitors turn into leads and customers-> See the entire customer journey (all touch points)-> Find out your average customer lifetime value (LTV)-> Calculate Return On Ad Spend (ROAS) of paid ads campaigns-> Calculate the ROI of any marketing activity-> Avoid iOS tracking issues using server-side cookieless tracking

No technical skills required, designed by marketers for marketers.


- weberlo colors
    
    ecf2f7
    
    
    
    161c2d
    
    
    
    de6a72
    
    
    
    fafafa
    
    
    
    ec5467
    
    
    
    e7213b
    
    
    
    f9ecef
    
    
    
    
    
    The industry-leading ad tracking and conversion attribution solution trusted by media buyers and affiliate marketers to increase efficiency and revenue. Analyze perfomance
    
- Social posts
    
    - Is Facebook Ads dead ?

ad tracking and conversions attribution platform for affiliates and media buyers providing real-time data and insights

An All-in-one ad tracker helps you to improve the performance of your affiliate campaigns and find insights to improve your ROI.

real time conversion data platform connects your marketing and sales channels, with your customer data, so you can automate your growth, with 100% of your data, in real time. AnyTrack leverages all data signals from your marketing funnels and sends it back to Facebook Conversion API, Google Ads API so you can track more conversions, lower CPA, and increase ROAS. AUTOMATICALLY.

## Buyer personas

- Media Buyers
    
    **Media Buyers**
    
    RedTrack provides an ad tracking and conversions attribution platform for affiliates and media buyers. Robust SaaS solution handles billions of events per month, providing real-time data and insights to affiliates worldwide at a low cost of ownership. An All-in-one ad tracker helps you to improve the performance of your affiliate campaigns and find insights to improve your ROI.
    
    ### **Problems**
    
    - Check dozen of accounts across different sources?
    - Find winning combinations in XLS?
    - Block placements manually every morning?
    - Check stats every hour, even at night?
    - Need granular reports & raw data in logs?
    
    ### **Solutions**
    
    - 150+ one-click integrations
    - Auto-optimization. Real-time alerts. Mobile Apps.
    - 20+ API integrated traffic sources
    - Real-time reports based on raw data, API
    - Tools for team work
- Ad Agencies
    
    RedTrack has built proprietary high-load big-data-ready technology that handles raw digital advertising data at speed, volume and cost. Our turnkey solution helps agencies, who are struggling to consolidate relevant real-time data and make quality data-driven decisions.
    
    ### **Problems**
    
    - Need to confirm your TOF results?
    - Tired of cut`n`paste to prepare reports?
    - 100 different accounts across 5 media buyers?
    - Concerned about demise of 3rd party cookies?
    
    ### **Solutions**
    
    - Cross-campaign multi-touch attribution
    - Privacy-friendly tracking
    - Permission-based access
    - White-label reporting portal
- Publishers
    
    RedTrack is "stitching the funnel" for publishers connecting inbound clicks to outbound conversions. You don’t need to change the way you generate traffic, as RedTrack seamlessly ads parallel to your existing process. All-in-one tracking and analytics help you to save time, improve attribution, and drive better ROI and EPC.
    
    ### **Problems**
    
    - Trying to connect the dots between inbound and outbound?
    - Want to work with customers based on performance?
    - Need privacy friendly tracking?
    - One code for all affiliate links?
    
    ### **Solutions**
    
    - Privacy-friendly tracking
    - Stitching the funnel between inbound and outbound
    - Help with customer S2S implementation
    - White-label reporting portal
- Advertisers
    
    With RedTrack, get actionable insights about which marketing programs, banners, or landers are working and where you need to invest. Track customer journey with 11 custom conversion events. Consolidate paid, organic, and partner traffic in one centralized view. With an all-in-one ad tracking and reporting solution, know what campaigns and partners produce the highest ROI.
    
    ### **Problems**
    
    - Tracking without tracking links?
    - Three affiliate programms in one UI?
    - Google and Facebook fight for attribution?
    - Checking data every hour, even at night?
    
    ### **Solutions**
    
    - Tracking without redirects and 3rd party cookies
    - Mobile app to check data on the go
    - Accurate attribution based on raw data, no sampling
    - Media buying and partner marketing in one UI

## Benefits (&& features)

- Save hours of manual work on attribution
    
    - Attribute all conversion events
    - Collaborate & share results Connect your team within one platform, and save hours with shared views and reports for peers, partners, and customers. Set access right to different sections of the account and show only the data you want to share.
    - "So I was totally confused, lost, & overwhelmed with how to implement the Facebook conversion API. But with RedTrack's Facebook conversion API solution, my business now has the the FB conversion API successfully setup & working!! THANK YOU RedTrack!"
    - "RedTrack is a great pick for those who run Facebook, Google Ads, and Bing Ads campaigns because of a direct API integration that uploads conversions to these ad sources."
    - "RedTrack tracking and automation features along with convenient reports made it much easier for us to make things done and gain valuable insights and trends with less effort."
- Trust your data
    
    - Get accurate data for each impression, click, and conversion in real-time.
- Be faxt and reactive
    
    - Analyze & optimize real-time
    - "Our traffic sources are now organized, we're able to track and see how they are all performing in one place. I'm saving quite a bit of time by having everything consolidated in one place (RedTrack)."
- Improve conversion rates : Optimize different conversion points and funnel stages to drive the highest return on ad spend
    
    - Full transparency into when conversion happens for each and every customer
    - Turn insights into actions with campaign automation rules and alerts
- encore des benefits
    
    **Serious Analytics Without the Boredom**
    
    Our 1-Click setup gets you up and running in a mere minute. Really! Presenting you with super user-friendly data and gorgeous charts. Suddenly, you’re seeing your website visitors like never before. Look at our remarkable feature list.
    
    **Social Media Stats**
    
    Want to know the effectiveness of your social media efforts? Get easy to understand reports inside your WordPress dashboard.
    
    **RealTime Stats**
    
    Who is online? And what are they doing? RealTime stats keep you in the know in the now.
    
    **Universal Tracking**
    
    Simplify the management of your (PPC? SEO? ?) marketing campaigns. All without leaving WordPress.
    
    **Enhanced Ecommerce Tracking**
    
    Setting up e-commerce tracking in WordPress is easy with Analytify, compared to the headaches of doing it on your own.
    
    **Custom Post Types**
    
    You have portfolio, gallery, testimonials and other custom post types. We track them nicely and provide detailed stats.
    
    **Page Level Analytics**
    
    Every post and page has its own metrics, that can be organized under each post/page.
    
    **Stats that makes sense**
    
    Have you always wondered why Google Analytics is so hard to understand? With so many options and reports, it’s now cleaner and inside your WordPress dashboard.
    
- 4 Tools to Use Now That Facebook Analytics is Gone
    
    Facebook discontinued the Facebook Analytics tool on [June 30, 2021](https://www.facebook.com/business/help/966883707418907).
    
    The change, announced in April, shocked social media advertisers around the globe, as Facebook Analytics has been helping businesses improve their social media advertising for the past few years.
    
    you’ll need to find another analytics platform, fast.
    
    Monitoring your analytics is crucial no matter what type of advertising you invest in. Analytics help marketers and advertisers increase their Return on Investment (ROI) by providing detailed insights on how audiences interact with Facebook ads.
    
    which Facebook advertising metrics you’ll want to track moving forward (and why).
    
    manage their presence across Facebook from a central place
    
    a dedicated space that shows you metrics relating to your audience, your posts and your Facebook Page(s).
    
    ### **Facebook pixel and Facebook conversions API**
    
    Although [Facebook pixel](https://blog.hootsuite.com/facebook-pixel/) and conversions API are slightly different tools, they go hand-in-hand.
    
    Both of these analytics tools track what people do on your website after they click on your ad. This allows you to analyze your advertising’s success through your audience’s :
    
    - Purchases
    - Browsing history
    - Shopping cart behavior
    - Email subscription choices
    - Check out process
    
    The key difference between the pixel and the Facebook conversions API lies in their data collection practices.
    
    Pixel collects data from your audience’s browser (i.e., browser-side tracking), while conversions API collects data from your website’s server (i.e., server-side tracking). Ideally, you should use the two tools together.
    
    For more information, read this [complete guide to the Facebook conversions API](https://blog.hootsuite.com/facebook-conversion-api/).
    
    If you’re looking for a comprehensive social media dashboard that will include
    
    - Campaign #1
        
        Why should you track your analytics anyway?
        
        It’s all about long-term performance (a.k.a. the long-term success of your organic strategies and Facebook advertising).
        
        It’s easy to see the small picture when you monitor your campaigns on a day-by-day basis. But monitoring analytics is crucial for seeing the bigger picture, as it will help you understand, compare and report your performance long-term.
        
        Let’s talk about that in more detail.
        
        - Resources
    
    Why should you track your analytics anyway?
    
    It’s all about long-term performance (a.k.a. the long-term success of your organic strategies and Facebook advertising).
    
    It’s easy to see the small picture when you monitor your campaigns on a day-by-day basis. But monitoring analytics is crucial for seeing the bigger picture, as it will help you understand, compare and report your performance long-term.
    
    Let’s talk about that in more detail.
    
    ### **Understand your advertising performance**
    
    Understanding how your audience reacts to your posts and ads is everything in social media marketing. As marketers, we _have to_ know when customers like something, when they feel neutral about it and when they hate it.
    
    The more you know what your audience wants, the better you will give it to them.
    
    That’s why analytics are important. Analytics (especially engagement and audience stats) tell you how your audience engages with your advertising without asking.
    
    For example, you can use analytics to highlight your top-performing ads or the ads with the lowest engagement. This will help you understand which ads work on your audience, giving you the insights you need to make your marketing more effective and profitable in the long term.
    
    ### **Pin down the best campaigns**
    
    While you might believe that your summer sale advertising campaign was more profitable than your winter one, how do you know that for sure? That’s where analytics comes in.
    
    As analytics tools report metrics with a standardized definition, you can use them to compare your advertising campaigns to each other.
    
    For example, you could look at your total profit for both your summer and winter advertising. This metric would tell you which campaign was more profitable in an objective and quantifiable way.
    
    **Note**: _This article will cover several critical metrics in more detail in the ‘Important Facebook analytics metrics’ section._
    
    [Newsletters spam test by mail-tester.com](https://www.mail-tester.com/)
    
    Are analytics complicated ?😀
    
    Df
    
    ### **Create comprehensive reports**
    
    It can be difficult to explain the intricacies of social media management to people without a digital advertising background. But sometimes, you just have to make it work (e.g. when an important stakeholder comes from a different background). That’s where metrics like ROI come in.
    
    With analytics, you can report your performance to people who don’t practice social media marketing themselves.
    
- What will be the evolution of ad tracking in the next years to come ?
    
- The only way to keep your ads profitable in the cookieless era
    
    There’s been a lot of fuss about these facebook and Apple issues and what they're trying to do makes sense from their point of view
    
    It's not specifically about Apple or Facebook, it's more specific to all app developers now all app developers that have their app on the app store they have to get consent from the users to to be tracked not necessarily about advertising but as a general concept like tracking the location of the user, tracking the user data or journey...
    
    obviously that impacts directly the advertising ecosystem and in particular facebook because facebook is an app developer and an ad network and facebook is also an audience network
    
    it means that publishers (so app that do not belong to facebook) are basically adding the ads of facebook on their apps
    
    lacking tracking and audience data will obviously lower the value of the traffic and the app developers whatever apps
    
    any app that runs facebook ads as a publisher will see lower revenues and obviously facebook is going to be hit by this and that's one of the big challenges that we're trying to overcome
    
    right now facebook as an advertising network where people like you and us go and buy traffic will also suffer because the ad targeting will be poorer than it is right now, we as advertisers will have less data to play with, less conversion types, i mean now they've limited to about eight which is a lot most people don't even track one conversion so eight is more than enough for most advertisers um
    
    facebook because of the lack of data they're gonna get out of apps installed through the app store they are reducing the number of conversion types or event types that you're gonna be able to track so they will be doing some aggregation of conversion, they will have more data per type of conversion to play with in order to attribute the conversion so the big issue here is obviously tracking and attribution and one of the reason facebook is pushing to use the conversion api is because of their new measurement aggregation type of track because when the conversion will descend somehow out of the app but when those conversion will be sent without the click id and without the parameters that you used to pinpoint on a specific user they will process the data and up after 24 hours 48 hours up to three days and then only they will fire the conversion
    
    obviously when they process the data it's in their server and once they finish with the processing of the of the data they fire that conversion that conversion is being sent from a server so it's server side tracking and they call it the conversion api and that's why essentially they are pushing towards the conversion api
    
    now if i may add every actor in that ecosystem will work server-side now just uh as a matter of fact you know javascript you know cookies pixels don't really work on on on mobile and it's mostly sized on mobile but then what's gonna happen is also on the web you know cookies will start being erased tracking pixel will start to be blocked and that's why they are pushing toward that conversion api
    
    What is the solution ?
    
    The solution can be to turn to very special tracking platform that doesn't really follow the rules that you can you see on the traditional tracking spot
    
- Interesting youtube video to sum up
    
    if you haven't yet thought about adding the conversion api to your stack it's time to think about it
    
    for us affiliates we need the conversion in real time and super important that we can be like hey we spent five dollars and we got a 7.50 conversion we profited 2.50 right in real time and the data held before they actually fired can be up to seven day. attribution window it means that you know from the day from the moment the user clicks on an ad you know until the moment you know it it actually converts okay they allow up to seven days so if beyond seven days there is a conversion it's not going to be tied to an ad and that's for like the click attribution the view attribution is normally the setting that you put on your on your account is one day attribution but the processing time for uh facebook to actually display the conversion in your ad account is going to be up to three days so it's uh you know when it was like the javascript pixel you know the standard facebook pixel uh was uh showing the you know the conversions or the events in like near real time but the conversion api is is longer that's uh well that's the that's unfortunate i mean like the conversion can be sent you know in real time by you know by your server by your affiliate system uh by any track but at the end uh facebook will process the data aggregate the data and then uh display it in the in your system sometimes it's gonna be faster and sometimes it's gonna it's gonna take longer it just depends the data set that you have um and that's why the you know it's like it's a very complex uh uh system the the api because um it uses uh not just a click id it uses uh the plenty of other data points that uh facebook drops uh you know with the standard facebook pixel uh and you have to instrument all those parameters uh to actually um get a match rate uh you know to actually to attribute the conversion properly within within facebook yeah i mean it's pretty interesting that facebook because to my understanding since i know a lot of affiliates they actually don't use like a tracking platform for facebook because they don't want to do any cost uh domain contamination how their facebook or business account uh misused so in that aspect i look to it as like okay that means i have delayed data you know but you're saying that the data does not have to be delayed uh based on say from the affiliate network it's long to find a pixel to your on domain uh this traffic you're saying that it's real time or uh three days i'm sorry when you see the conversion in the facebook event manager you can you you can actually see uh at what time it's it's actually sent uh and uh and when it's actually showing up so you can see conversion that you know uh from your system uh because in your tracking server you're gonna know that you know that's the conversion that was triggered you know uh 24 hours ago and you're gonna see that conversion in facebook only uh uh 24 hours later that's the time they take to or to process the the data i mean you know i mean there must be some reasons but um anyway what you were saying about the domain uh contamination and the fact that okay what i understand and i was very uh very surprised to hear that is that some affiliate program we're happy to actually take the the affiliate pixels and add them to the office now obviously when uh when you mix uh you know everyone's pixels on the same domains uh at some point there's gonna be like some damages uh because not everywhere not everyone plays by the rule so some guys do well some guys you know do blackout and eventually what happens is that uh when someone does some something really nasty then you know the domain is blacklisted and uh and and all the pixels that we're running or tied to that that domain might uh might be uh uh you know closed and penalized uh the version api is a different story uh obviously you need to have and verify your domain where your standard facebook pixel is gonna load and the domain is your landing page your website not the affiliate offer your free lender funnel whatever that you know warms up the the you know the visitor to actually uh go later to the uh to the affidavit offer so over there you can put your standard facebook pixel you can verify your domain and everybody's going to be you know happy with that and there's not going to be any mix up of pixel on that on that domain the facebook conversion api what it gives is the ability to send a conversion from a non-domain from an app and therefore you don't have to verify uh anything or you know what yes you verify but the verification is done through the api through the token that you actually generate from your business account and because you have a business account that is verified you know you can use the token and the conversion api so you can do cross domain tracking and you don't need to get your facebook pixels somewhere in uh in you know on an offer page on an offer thank you page um and run the re to lose your business account because some other guys are doing something nasty yeah that's true so i mean she's like i don't have anything against yeah right uh everybody like you know goes by does his business the way he wants i'm just saying you know when you you know when you go uh you know when you go to sleep with the dogs you know you might wake up like you can [ __ ] yeah i agree i agree now the biggest question i know from uh a lot of affiliates that i've i've been asked personally it's what do you think the opt-in rate for apple to uh or facebook to up know what does it be an opt-in rate for it um allowing users to allow their data to be passed through i don't know i think it's gonna be very i think so yeah yeah so you you do not think you're gonna mess around with like people's data like i know when i see a couple drop off a two percent drop off doesn't really bother me that much but i i think it's gonna be pretty big especially for maybe gen generation z maybe or even like some millennials i think no it's gonna be over fifty percent oh uh interesting why i'm following a few guys that are like you know masters um actual real masters of facebook ads running large agencies e-commerce staff and yeah they see a massive massive drop it doesn't mean that the you know you contract it just means that you know you're gonna have less less data yeah correct um so in general when you have offers that are uh that the conversion triggers you know within 24 hours you should be pretty uh you know fine um but if you have like long conversion cycles then that's where facebook is going to have like a problem doing the i mean first of all like you know seven day attribution that's it you know so you can't really uh uh make up for uh for that so if you have a conversion cycle that is longer than seven days that's uh that's a problem um you know having said that uh you know having the indications within facebook is one thing the conversion within facebook is one thing um making sure that you have the ability to keep tracking those conversions i mean if you run a campaign with facebook uh the fact that you don't fire the conversion or even if you fire they don't show up in facebook uh because of the seven day attribution uh i mean it's not that it doesn't matter it does matter obviously but if you have a system that allows you to keep tracking those uh you know conversion that come after the seven days then uh you still have a good indication of how profitable might be your uh your campaigns i mean it's like specifically to the you know offers that have recurring uh revenues um you know in the gaming sector or in the financial sector exactly or sas even like you know uh startup like like us i mean we we have like uh 14 days uh you know free trial so uh you know how do we go about the the seven day uh attribution um so yeah having systems in place that allow you to uh you know to keep track of the lifetime value of your campaigns is uh is is key um and uh and a mix of different uh analytics is uh is key in that uh in that regard uh that's why we uh we push on our on our side uh to get acquainted with the google analytics even though uh it's uh it's not uh a very popular platform in in the affiliate industry uh but uh google analytics is a treasure of data for uh for marketers uh so if you try your conversion that uh your sales data with uh you know in google analytics on top of what you're doing with facebook then you have a data set that is very uh very rich and from which you can uh you can learn a lot interesting yeah no i i totally agree with it i mean i use analytics for a lot of stuff specifically but um do you think people that use like uh facebook events for like page views impressions like for just organic stuff to grow their llas do you think that will affect a lot of this stuff with the event events you can only have eight uh eight at eight events and i've obviously could only hold a date over seven days you know so how does that affect lla the attribution is uh is is done based on the ad clicks okay from the ads now organic traffic that generates you know page view on on your website they don't have you know uh it's there is no uh there is no attribution uh issues in in that case because we're talking about uh we're not talking about ads okay now forget about the apps for for a second you know there is like the events data and the and then the ads attributed conversion data so the events that i mean the you know the fact that you have uh you know a conversion is gonna fire within facebook and you're gonna see that conversion in the event manager the the attribution is where the problem is so you won't be able after seven days you won't be able to set to you know to see that conversion tied to an actual campaign or ad set or or ad and that's where the problem is but still the event will be sent will be will show up in facebook uh event manager or india in their facebook analytics so you'll still be able to learn from you know what's going on but you won't be able to optimize uh you know let's say according to you know roi uh from conversions that were actually um generated after the seven days uh and an interesting an interesting thing about uh about uh about this is because of that uh seven-day attribution uh you facebook had added some some new parameters in their in their api uh for uh subscription uh for subscriptions so uh you can send the expected lifetime value of a customer okay so when someone signs up or starts a free trial you can already set the expected lifetime value of that customer and you can so you actually give the fake value or the indicated value of the of that conversion that will happen you know over the next 12 months because it's like a monthly subscription and they have different type of events that you can use for uh for my everybody's like actually preparing for that uh for what's uh what's coming up yeah and facebook has been doing a lot of work on that they've made a lot of changes on their on their business manager uh so yeah it's very important to get very very familiar with all those uh those changes on facebook i mean if you rely on facebook it's uh this is only gonna be for uh ios 14 and anybody to upgrade their devices correct it's an ios 14 issue yes it's ios uh i mean the attribution windows and everything this is like you know all across the board correct correct yeah but the ios yeah yeah the ios uh 14 is for the opt-in the consent of the the tracking but it's like it's a big chunk i think it's over fifty percent of uh mobile users in the us yeah and and so you might just hit auto update and the phone just updates overnight while you're sleeping so a lot of majority people will just happen don't don't don't fool yourself i mean it's gonna be a disaster um but at the same time apple is you know you know unleashing their like you know their own ad network okay so that's where you're gonna be able to yeah so that's where you're gonna be able to buy traffic and have like a better attribution than that uh than facebook um i mean if you follow the you know the the battle it's like very in this in the semantic battle it's it's funny you see the warning for like you know uh you know trent you know any app okay uh the warning is like you know are you allowing this uh you know app developer to follow across many websites etc etc and then like you know if you uh if you want to opt in or opt out of the apple uh ad tracking i mean it's a very very gentle message i mean you have to i shall send you to i mean you can you can have a look on the iphone man just now and put a screenshot i'll do it a bit actually it's like it's quite funny but you know it's going to obviously end up in a uh in a in a in a lawsuit or something and an apple but you know by the time there is a i mean by the time the court rules against apple you know apple ad network will be like you know massive so yeah exactly yeah everybody's everybody technically is an ad network nowadays you know from like snapchat to tick-tock to because yeah when when i did this stuff it was only literally google facebook msn you know that was pretty much yeah that's uh that's uh that's what i mean like you have like the volume of traffic you can work with the i mean snapchat could be working with with facebook and maybe maybe make more money uh from there from their ads you don't know uh but you know when you have enough volume of traffic i mean why um why you know working with the others but if you go on reddit you know you see you know adsense already so i guess i do i mean i advertise on reddit at times too specifically you know so i mean you have quora and pinterest and all this other stuff but now in any case like how should one prepare because there's really no solid structure or foundation currently that's pretty pretty solid on what's happening right unless until it actually comes out right and we don't even have a release date right of this uh i i think it's been rolling out already some in some areas yeah yeah not every not everyone that's why like you know i got some feedback from some guys but uh but yeah anytime i mean it's uh it's uh it's it's coming it's coming up the storm is coming um how to prepare uh you know you can follow our blog because we're gonna be posting a lot of uh i mean we're posting on a regular basis uh stuff there i think it's it would be worth it to uh to follow uh facebook uh uh releases um you know on their blog because you know they also publish quite uh quite a lot of stuff you know log into your business manager and and see all the changes and make the adjustments in in your account make sure you verify your domains um you know all your pixels make sure i mean just like make make things clear for yourself and and for facebook so you don't you know you don't get smashed um the facebook api obviously that's uh something i you know uh i recommend i mean i'm gays because my solution you know uh does uh or specifically does it does it for you uh you know just like him you know just just watch um but yeah it's uh it's uh it's you know slowly the the facebook pixel will you know be deprecated the standard pixel and uh most of the track most of the conversion will uh will be re reported by the by the api yeah um so uh but there are other providers i mean if you work on you know if you run on shopify uh shopify does have uh you know has a you know uh facebook conversion api integration built-in so that's uh that's that's a relief for those uh running on the uh shopify uh websites um i think that um square i mean there are quite a few uh you know cms that that do have that uh that api uh there are some more sophisticated platforms uh more like for developers uh like segments and you have zap here but it's zapier but you know zapier you have to instrument the website data before you can actually use the zapier integration with the facebook so it's like it's it's it's actually it's nice to have but it's i mean it's it's i mean if you can gonna get pretty expensive too especially if you're throwing so many uh events from zapping yeah like it's it's very very very expensive you can get to like you know a 400 deal yeah uh you know in no time um tiny little thing that you know i don't want to have like you know a developer doing that and i can you know feel like i'm very smart and like you know playing with apis that's true i mean i've been i've been learning a little bit javascript myself because i've been using uh uh appify to scrape some stuff off websites and then i use zapier to send me back the information okay so yeah and it's pretty cool i mean so there's a lot of stuff that i think that's going to be changing like i still don't know like impacts and like audiences how long the learning phase is because sometimes there's a like currently right now the learning phase on facebook is roughly three days to almost uh roughly about three days to five days no a learning phase because the attribution now is going to be so little right is it are they gonna compact everything in one hour gonna be cut back 24.
    
    facebook has uh up to seven day attribution window it means that you know from the day from the moment the user clicks on an ad you know until the moment you know it it actually converts okay they allow up to seven days so if beyond seven days there is a conversion it's not going to be tied to an ad and that's for like the click attribution the view attribution is normally the setting that you put on your on your account is one day attribution but the processing time for uh facebook to actually display the conversion in your ad account is going to be up to three days so it's uh you know when it was like the javascript pixel you know the standard facebook pixel uh was uh showing the you know the conversions or the events in like near real time but the conversion api is is longer that's uh well that's the that's unfortunate i mean like the conversion can be sent you know in real time by you know by your server by your affiliate system uh by any track but at the end uh facebook will process the data aggregate the data and then uh display it in the in your system sometimes it's gonna be faster and sometimes it's gonna it's gonna take longer it just depends the data set that you have um and that's why the you know it's like it's a very complex uh uh system the the api because um it uses uh not just a click id it uses uh the plenty of other data points that uh facebook drops uh you know with the standard facebook pixel uh and you have to instrument all those parameters uh to actually um get a match rate uh you know to actually to attribute the conversion properly within within facebook yeah i mean it's pretty interesting that facebook because to my understanding since i know a lot of affiliates they actually don't use like a tracking platform for facebook because they don't want to do any cost uh domain contamination how their facebook or business account uh misused so in that aspect i look to it as like okay that means i have delayed data you know but you're saying that the data does not have to be delayed uh based on say from the affiliate network it's long to find a pixel to your on domain uh this traffic you're saying that it's real time or uh three days i'm sorry when you see the conversion in the facebook event manager you can you you can actually see uh at what time it's it's actually sent uh and uh and when it's actually showing up so you can see conversion that you know uh from your system uh because in your tracking server you're gonna know that you know that's the conversion that was triggered you know uh 24 hours ago and you're gonna see that conversion in facebook only uh uh 24 hours later that's the time they take to or to process the the data i mean you know i mean there must be some reasons but um anyway what you were saying about the domain uh contamination and the fact that okay what i understand and i was very uh very surprised to hear that is that some affiliate program we're happy to actually take the the affiliate pixels and add them to the office now obviously when uh when you mix uh you know everyone's pixels on the same domains uh at some point there's gonna be like some damages uh because not everywhere not everyone plays by the rule so some guys do well some guys you know do blackout and eventually what happens is that uh when someone does some something really nasty then you know the domain is blacklisted and uh and and all the pixels that we're running or tied to that that domain might uh might be uh uh you know closed and penalized uh the version api is a different story uh obviously you need to have and verify your domain where your standard facebook pixel is gonna load and the domain is your landing page your website not the affiliate offer your free lender funnel whatever that you know warms up the the you know the visitor to actually uh go later to the uh to the affidavit offer so over there you can put your standard facebook pixel you can verify your domain and everybody's going to be you know happy with that and there's not going to be any mix up of pixel on that on that domain the facebook conversion api what it gives is the ability to send a conversion from a non-domain from an app and therefore you don't have to verify uh anything or you know what yes you verify but the verification is done through the api through the token that you actually generate from your business account and because you have a business account that is verified you know you can use the token and the conversion api so you can do cross domain tracking and you don't need to get your facebook pixels somewhere in uh in you know on an offer page on an offer thank you page um and run the re to lose your business account because some other guys are doing something nasty yeah that's true so i mean she's like i don't have anything against yeah right uh everybody like you know goes by does his business the way he wants i'm just saying you know when you you know when you go uh you know when you go to sleep with the dogs you know you might wake up like you can [ __ ] yeah i agree i agree now the biggest question i know from uh a lot of affiliates that i've i've been asked personally it's what do you think the opt-in rate for apple to uh or facebook to up know what does it be an opt-in rate for it um allowing users to allow their data to be passed through i don't know i think it's gonna be very i think so yeah yeah so you you do not think you're gonna mess around with like people's data like i know when i see a couple drop off a two percent drop off doesn't really bother me that much but i i think it's gonna be pretty big especially for maybe gen generation z maybe or even like some millennials i think no it's gonna be over fifty percent oh uh interesting why i'm following a few guys that are like you know masters um actual real masters of facebook ads running large agencies e-commerce staff and yeah they see a massive massive drop it doesn't mean that the you know you contract it just means that you know you're gonna have less less data yeah correct um so in general when you have offers that are uh that the conversion triggers you know within 24 hours you should be pretty uh you know fine um but if you have like long conversion cycles then that's where facebook is going to have like a problem doing the i mean first of all like you know seven day attribution that's it you know so you can't really uh uh make up for uh for that so if you have a conversion cycle that is longer than seven days that's uh that's a problem um you know having said that uh you know having the indications within facebook is one thing the conversion within facebook is one thing um making sure that you have the ability to keep tracking those conversions i mean if you run a campaign with facebook uh the fact that you don't fire the conversion or even if you fire they don't show up in facebook uh because of the seven day attribution uh i mean it's not that it doesn't matter it does matter obviously but if you have a system that allows you to keep tracking those uh you know conversion that come after the seven days then uh you still have a good indication of how profitable might be your uh your campaigns i mean it's like specifically to the you know offers that have recurring uh revenues um you know in the gaming sector or in the financial sector exactly or sas even like you know uh startup like like us i mean we we have like uh 14 days uh you know free trial so uh you know how do we go about the the seven day uh attribution um so yeah having systems in place that allow you to uh you know to keep track of the lifetime value of your campaigns is uh is is key um and uh and a mix of different uh analytics is uh is key in that uh in that regard uh that's why we uh we push on our on our side uh to get acquainted with the google analytics even though uh it's uh it's not uh a very popular platform in in the affiliate industry uh but uh google analytics is a treasure of data for uh for marketers uh so if you try your conversion that uh your sales data with uh you know in google analytics on top of what you're doing with facebook then you have a data set that is very uh very rich and from which you can uh you can learn a lot interesting yeah no i i totally agree with it i mean i use analytics for a lot of stuff specifically but um do you think people that use like uh facebook events for like page views impressions like for just organic stuff to grow their llas do you think that will affect a lot of this stuff with the event events you can only have eight uh eight at eight events and i've obviously could only hold a date over seven days you know so how does that affect lla the attribution is uh is is done based on the ad clicks okay from the ads now organic traffic that generates you know page view on on your website they don't have you know uh it's there is no uh there is no attribution uh issues in in that case because we're talking about uh we're not talking about ads okay now forget about the apps for for a second you know there is like the events data and the and then the ads attributed conversion data so the events that i mean the you know the fact that you have uh you know a conversion is gonna fire within facebook and you're gonna see that conversion in the event manager the the attribution is where the problem is so you won't be able after seven days you won't be able to set to you know to see that conversion tied to an actual campaign or ad set or or ad and that's where the problem is but still the event will be sent will be will show up in facebook uh event manager or india in their facebook analytics so you'll still be able to learn from you know what's going on but you won't be able to optimize uh you know let's say according to you know roi uh from conversions that were actually um generated after the seven days uh and an interesting an interesting thing about uh about uh about this is because of that uh seven-day attribution uh you facebook had added some some new parameters in their in their api uh for uh subscription uh for subscriptions so uh you can send the expected lifetime value of a customer okay so when someone signs up or starts a free trial you can already set the expected lifetime value of that customer and you can so you actually give the fake value or the indicated value of the of that conversion that will happen you know over the next 12 months because it's like a monthly subscription and they have different type of events that you can use for uh for my everybody's like actually preparing for that uh for what's uh what's coming up yeah and facebook has been doing a lot of work on that they've made a lot of changes on their on their business manager uh so yeah it's very important to get very very familiar with all those uh those changes on facebook i mean if you rely on facebook it's uh this is only gonna be for uh ios 14 and anybody to upgrade their devices correct it's an ios 14 issue yes it's ios uh i mean the attribution windows and everything this is like you know all across the board correct correct yeah but the ios yeah yeah the ios uh 14 is for the opt-in the consent of the the tracking but it's like it's a big chunk i think it's over fifty percent of uh mobile users in the us yeah and and so you might just hit auto update and the phone just updates overnight while you're sleeping so a lot of majority people will just happen don't don't don't fool yourself i mean it's gonna be a disaster um but at the same time apple is you know you know unleashing their like you know their own ad network okay so that's where you're gonna be able to yeah so that's where you're gonna be able to buy traffic and have like a better attribution than that uh than facebook um i mean if you follow the you know the the battle it's like very in this in the semantic battle it's it's funny you see the warning for like you know uh you know trent you know any app okay uh the warning is like you know are you allowing this uh you know app developer to follow across many websites etc etc and then like you know if you uh if you want to opt in or opt out of the apple uh ad tracking i mean it's a very very gentle message i mean you have to i shall send you to i mean you can you can have a look on the iphone man just now and put a screenshot i'll do it a bit actually it's like it's quite funny but you know it's going to obviously end up in a uh in a in a in a lawsuit or something and an apple but you know by the time there is a i mean by the time the court rules against apple you know apple ad network will be like you know massive so yeah exactly yeah everybody's everybody technically is an ad network nowadays you know from like snapchat to tick-tock to because yeah when when i did this stuff it was only literally google facebook msn you know that was pretty much yeah that's uh that's uh that's what i mean like you have like the volume of traffic you can work with the i mean snapchat could be working with with facebook and maybe maybe make more money uh from there from their ads you don't know uh but you know when you have enough volume of traffic i mean why um why you know working with the others but if you go on reddit you know you see you know adsense already so i guess i do i mean i advertise on reddit at times too specifically you know so i mean you have quora and pinterest and all this other stuff but now in any case like how should one prepare because there's really no solid structure or foundation currently that's pretty pretty solid on what's happening right unless until it actually comes out right and we don't even have a release date right of this uh i i think it's been rolling out already some in some areas yeah yeah not every not everyone that's why like you know i got some feedback from some guys but uh but yeah anytime i mean it's uh it's uh it's it's coming it's coming up the storm is coming um how to prepare uh you know you can follow our blog because we're gonna be posting a lot of uh i mean we're posting on a regular basis uh stuff there i think it's it would be worth it to uh to follow uh facebook uh uh releases um you know on their blog because you know they also publish quite uh quite a lot of stuff you know log into your business manager and and see all the changes and make the adjustments in in your account make sure you verify your domains um you know all your pixels make sure i mean just like make make things clear for yourself and and for facebook so you don't you know you don't get smashed um the facebook api obviously that's uh something i you know uh i recommend i mean i'm gays because my solution you know uh does uh or specifically does it does it for you uh you know just like him you know just just watch um but yeah it's uh it's uh it's you know slowly the the facebook pixel will you know be deprecated the standard pixel and uh most of the track most of the conversion will uh will be re reported by the by the api yeah um so uh but there are other providers i mean if you work on you know if you run on shopify uh shopify does have uh you know has a you know uh facebook conversion api integration built-in so that's uh that's that's a relief for those uh running on the uh shopify uh websites um i think that um square i mean there are quite a few uh you know cms that that do have that uh that api uh there are some more sophisticated platforms uh more like for developers uh like segments and you have zap here but it's zapier but you know zapier you have to instrument the website data before you can actually use the zapier integration with the facebook so it's like it's it's it's actually it's nice to have but it's i mean it's it's i mean if you can gonna get pretty expensive too especially if you're throwing so many uh events from zapping yeah like it's it's very very very expensive you can get to like you know a 400 deal yeah uh you know in no time um tiny little thing that you know i don't want to have like you know a developer doing that and i can you know feel like i'm very smart and like you know playing with apis that's true i mean i've been i've been learning a little bit javascript myself because i've been using uh uh appify to scrape some stuff off websites and then i use zapier to send me back the information okay so yeah and it's pretty cool i mean so there's a lot of stuff that i think that's going to be changing like i still don't know like impacts and like audiences how long the learning phase is because sometimes there's a like currently right now the learning phase on facebook is roughly three days to almost uh roughly about three days to five days no a learning phase because the attribution now is going to be so little right is it are they gonna compact everything in one hour gonna be cut back 24.
    
    You know okay now you're getting into the you know the very inner details of you know running the ad campaigns and uh and i think there are like people much more qualified than me to uh uh to give you those uh those insights i can tell you about the technical aspect of the you know attribution and the tracking but how the learning phase of the campaigns will actually uh be rolled out how it's going to be changed i mean i mean check out the blog uh you know facebook blog i mean seriously the you know sometimes the the source of truth is really there and it's not uh you know some some blogger or guru that that you know something hey what are you trying to say about me brother are you asking sometimes they're like you know there are places where where you can get like you know the real uh the real data the real information uh and uh and i think uh facebook in that case is is where you should also source uh your information you know i mean just uh you know i was answering some questions on the stm the other day and uh and someone was uh was saying oh well you know but the facebook conversion api you know you know just it was either only for the ads on only for the you know uh the audience and uh i mean if you look in you just type in facebook conversion api and you find the you know the the the docs from uh from facebook you read the first two lines is like the facebook conversion api works alongside the facebook pixels so it does exactly the same thing but people don't get they just don't bother uh you know reading what's uh what's uh what's there and they get confused and scared and they you know and they think that you know the world is gonna you know fall apart uh but you know sometimes the information is just right under your nose some people just want to ask questions and get an answer whether two hours 24 hours later right i mean i i'm googling all the time you know i mean it's like i mean really the same time it's very important to go and find the that information um so um so yeah but um but yeah so we'll keep publishing stuff on our twitter and uh our blog and uh and yeah and obviously questions on the on on slack i'll be happy to answer and uh yeah that's great i mean i definitely appreciate you i know we've been talking back and forth uh on it a little bit an
    

# **Tips for creating a fake account**

# **Create people over 40 or female personas**

We noticed that profiles that were a little older or female (on the advice of [Benoît Dubos](https://www.linkedin.com/in/benoitdubos/)) transformed better in prospecting. Ideal for a fake account, right?

# **A grandparent, a cousin, or a little sister who does not use LinkedIn? Create an account for them!**


We tend to abuse this technique a bit at Waalaxy.

Find people you know who **don’t need LinkedIn** right now and ask them if you can borrow their identity to create a LinkedIn account.

This technique will allow you to market your accounts much faster: if LinkedIn blocks you, you can provide a valid ID.

# **Duplicate your existing accounts**

Is your **LinkedIn account** old and you’ve never been asked for your ID? Create a second one. Make a mistake in the name or capitalize it. Here’s a technique that offers twice the reach with your identity and an account that can go to market quickly.

# **LinkedIn asks me for my number when I sign up**

**LinkedIn has detected that you are sharing an IP** with other accounts and wants to make sure you are not a robot by asking you for a phone number. If you get to this stage, you need to change your IP. Follow this procedure:

- Close all open Linkedin tabs, including your regular account,
- Put your smartphone (I hope you have one!) in connection sharing: the IP of a 4G phone changes as soon as you activate and deactivate the airplane mode. So you can do this over and over again.
- Start a new blank Chrome session,
- Redo the account creation operation.

Normally **LinkedIn asks you to verify** if you are a robot but no more phone number. Be careful you have to stay in connection share until the end of the creation process without reconnecting on another account. Wait at least 24 hours then to reconnect with this new account on your main IP.

On our side, we continue to experiment and take feedback from the best growth hackers to

**beat LinkedIn’s AI.**

If you have any suggestions, don’t hesitate to send them to us, we’ll be happy to update this article.

# **How to create a fake account on LinkedIn without getting banned.**

# **Step 0: Create a new Chrome session**

First, if you want your account to live, don’t share cookies with other accounts. LinkedIn also considers disconnections and reconnections as a multi-account alert. To avoid this, two possibilities: [create several Chrome sessions](https://blog.waalaxy.com/en/google-chrome-multi-account-how-it-works/) (simple and free version but not infinite: you will not be able to create 15 accounts per day) or use a proxy/VPN service as there are many.

In the same way, you will have to change your IP every time you change your account, always staying on the same IP for one account.

At [Waalaxy](https://www.waalaxy.com/) we use the first way and we go through this method if it doesn’t work. If you don’t use one of these two solutions, say goodbye to your **new account** and maybe even to your main account.

# **Step 1: Find a name for your persona**

For your **fake LinkedIn accoun**t, you can be inspired, in that case, have fun. But avoid John Doe and other names that are too classic, it’s not very credible when you add them. Also, avoid a first or last name that is too improbable: if your prospect searches for you on **Google**, he must find people with the same names and not be able to say that you don’t exist.

If you are not inspired, fortunately, the internet is there for you! [Here is a site](https://fakenamegenerator.com/) that allows you to generate a false identity based on age, gender, region. They even tell you what car he drives!

A little advice: give strong preference to **student profiles**. Innocent in the professional environment, they tend to be accepted more easily. You can always modify the profile little by little once it gains connections 😉

# **Step 2: Create an email accordingly**

Where to create your mail? There are many **email services**. Be careful, most of them require a phone number but accept up to 4-5 accounts per number. It all depends on your ambitions!

Avoid temporary emails. We haven’t tested this, but intuitively, **LinkedIn** should consider this an indicator of a fake account. Combining Gmail, Outlook, and Yahoo, you already have 10 to 15 accounts ahead of you. That’s not bad!

Also, you can try to **create a Gmail account** through the “guest” chrome session, there is directly more chance to create the email address without a phone number being asked.

When creating your email, remember that your 1st level contacts will be able to see it. So make it credible to your persona.

# **Step 3: Find a credible profile picture**

Some say that AI-generated photos work well. Personally, all fake accounts created with AI photos got banned pretty quickly. Correlation or not, I prefer to avoid it. To choose a photo, you have several options:

- Use a royalty-free images bank: ([Unsplash](https://unsplash.com/), [Exactitudes](https://exactitudes.com/), …) we like to do this but the risk that your image is known or too classic “free of right” is risky.
- Using a Google image: the problem with this method is that you don’t have the rights to the image. It would be a shame to have rights problems, but it offers you an infinite catalog of pictures.

In both cases, I advise you to modify the image. A small Photoshop touch-up well done to change the background put the photo in black and white and invert it so as not to go out in Google Reverse Image, it works very well for the fake LinkedIn account system. I advise you to [search it on Google](https://www.google.fr/imghp?hl=en&tab=ri&ogbl) beforehand to see if it comes up.

# **Step 4: Create a LinkedIn account**

You have opened a new chrome session or use a VPN without sharing your cookies with your first account. You are ready to create your fake LinkedIn account. Go to LinkedIn through Google: I noticed that by going directly through the URL, LinkedIn offers me a little different onboarding. It may be safe, but I prefer to stay in the most classical way.

- Enter the information and validate,
- I enter my information and LinkedIn asks me to verify that I am not a robot by entering my phone number.
- You arrive in the LinkedIn onboarding.He will first ask you for your position. Choose what you want.Then he will ask you for your position. Give **your persona** an experience, if he is a student, put him in a big and famous school. If he is working, put him in a permanent job or in a work-study program in a big company. Be careful, if there are not many employees in your company, I advise you not to put your fake account on your real company right away (or don’t click on the proposal to choose the company page, keep only the name).If **your account is ever banned** (you are never safe) it will no longer be visible in searches but will still appear in the number of employees. This is not great for your image if you have to create several.

# **Step 5: Add your first contacts**

This is a crucial step in **creating a fake LinkedIn account**: your first connections. A low **acceptance rate** because no one knows you are likely to alert LinkedIn’s AI. Send a connection request to the people LinkedIn suggests early on. If you can, use a .csv file with your close contacts, who you’ll ask to accept you, or use our [file of accounts](https://docs.google.com/spreadsheets/d/1vn-3q4tdq52dQofFX2tnD8UYlmIphbpL6w_Dj5HDHzk/edit?usp=sharing) that will accept you, in any case, to get started. You can also add yours via [this form](https://docs.google.com/forms/d/e/1FAIpQLSdLgavWKfxFU9ikBv-yznghi46ETtBBdEr0B9sqMGw6fhy_Eg/viewform?usp=sf_link) to receive invitations and grow your network organically.


[How to import a csv file on LinkedIn.](https://www.linkedin.com/help/linkedin/answer/1918/synchroniser-des-contacts-a-partir-d-autres-sources-et-carnets-d-adresses?lang=en)

# **Step 6: Make it human**

Once the account is created, the first

**invitations sent**

and the photo set up, complete your persona’s profile. The goal is to make it at least intermediate. You can make him follow hashtags or add skills. LinkedIn will have less of an impression that it is a fake account, just like the users of the

**social network.**

# **Step 7: Grow the account**

You’ve done a big part of the work. Your **LinkedIn account** needs to grow now. The solution to keeping it human without you having to do anything? Our **automation tools!**

# **Waalaxy**

From the moment someone accepts you, you have access to their connections (if no one has accepted you in the proposed people, you can send **invitations to Premium members**, they tend to accept much more easily). Once you have reached 100 connections and your account has at least 1 week of life, you can download Waalaxy. Export as many people as possible from this search, 1000, into Waalaxy. I recommend you simply use the “Person” and “2nd connection” filters.


You will then just have to [make connexion requests](https://www.youtube.com/watch?v=L2hFlOcrO-k&list=PLD7QMPI8zqoHHy1tfj8MAMDhModkqNugb&index=3) (I advise you to leave the notes blank) on these people. Since you will only be second-degree connections, they will tend to accept you much more easily.

Remember to set **Waalaxy** to make your hours look normal and not 24/7 with your account still fresh.

# **Podawaa**

Join [pods](https://blog.waalaxy.com/quest-ce-qu-un-pod-dengagement-linkedin/) with lots of people in them to be **active on LinkedIn**. If you have activity not only on leads but also on **posts, LinkedIn** will think less of a fake account if you are active on all channels.

Once the profile has more than 250 connections, you can consider it ready for real life. You can change its profile picture or its first or last name (it is not recommended to change all 3, your account could be banned very easily).

Here is a list of good practices and cases to avoid for your account to survive.

# **Good practices**

The first few weeks:

Each time you log in, [improve the profile a bit](https://blog.waalaxy.com/en/optimize-linkedin-profile/). A previous position, a bio, a university… We advise you to add a past with a big account. It seems that it is more complicated for LinkedIn to verify and gives you the benefit of the doubt (thanks to [Guillaume Albisetti](https://www.linkedin.com/in/guillaumealbisetti/)). Do yourself a favor! An executive at Total or Sales at Orange?For each position or school, add a complete description. LinkedIn doesn’t like empty job descriptions.

Once it’s ready:

Aim for Relationships 2 as a first step. If you have a low acceptance rate at once, LinkedIn may ban you.

# **Bad practices**

- Using Artificial Intelligence photos,
    
- Making too many applications in the first few weeks,
    
- Completing your entire profile on the first day.
    
- Weberlo
    
    [Weberlo](https://www.notion.so/bb3a97c84eb741ae84e18d887f50ca2e?pvs=21)
    
    [https://www.strerr.com/fr/md5_hash_chanager.html](https://www.strerr.com/fr/md5_hash_chanager.html)
    
    [AnyTrack | #1 Conversion Tracking Software](https://anytrack.io/)
    
    [meus amigos - Google Sheets](https://docs.google.com/spreadsheets/d/1vn-3q4tdq52dQofFX2tnD8UYlmIphbpL6w_Dj5HDHzk/edit#gid=104036244)
    
    [Facebook Conversions API: Everything Marketers Need to Know](https://blog.hootsuite.com/facebook-conversion-api/)
    
    [(2) HYROS Training Channel - YouTube](https://www.youtube.com/channel/UCuXubd9EpOEZlIdWQeCFbcw/playlists)
    
    [HYROS Training Channel - YouTube](https://www.youtube.com/channel/UCuXubd9EpOEZlIdWQeCFbcw/videos)
    
    [An Honest Opinion about HYROS! - YouTube](https://www.youtube.com/watch?v=bBetiVoAOIE)
    
    [What is Server to Server Tracking?](https://tinuiti.com/blog/data-privacy/server-to-server-tracking/?fbclid=IwAR28yH8QuJs_rayRmPFD-xw7i-io8_zY6EDvJuaudyU95sHRWoin99fUomk)
    
    [New Agency campaign template - Google Docs](https://docs.google.com/document/d/1TZkmCFpKtWdY-5Inu0ouHrt8SpgiC4xA_lKhYBDyYkw/edit?fbclid=IwAR0ZD3Vd_N7DcROeSipGShYTHHUg9g2L397OCMhMtTcBNRhX9Gp8V344Xgs)
    
    [Vidyard Recording](https://share.vidyard.com/watch/TY39kchoGyraMu3HK1KZ64?fbclid=IwAR3CbW1l0R-DKNqdSUTpCTXqLmYa41MsAh1SLV7bZ1Ut4GKQh8E9egXHVPw)
    
    [CrawlQ.ai](https://app.crawlq.ai/)
    
    [redtrack - YouTube](https://www.youtube.com/results?search_query=redtrack)
    
    [How AnyTrack improves Facebook Ad Performance in the Midst of the iOS14 Chaos - w/ Laurent Malka - YouTube](https://www.youtube.com/watch?v=ikEOF9EMH-s&list=PLJZPe9gkZ0VR9pAgkv0IugmTvnsWit4V7&index=7)
    
    [Content Gorilla - Your Personal Content Writer!](https://app.contentgorilla.co/create_post/oWQBFVkesAk)
    
    [Wicked Reports multi touch marketing attribution software for ecommerce](https://www.wickedreports.com/)
    
    [Pricing - HYROS](https://hyros.com/pricing.html?imt=1&utm_campaign=m&utm_source=m&utm_medium=m&utm_content=m)
    
    [Weberlo vs. Hyros - Analogy of Two Advertising Optimization Softwares - SaaS Battles](https://www.saasbattles.com/weberlo-vs-hyros-analogy-of-two-advertising-optimization-softwares/)
    
    [(11) Guillaume Albisetti | LinkedIn](https://www.linkedin.com/in/guillaumealbisetti/)
    
    [Free Profile Picture Maker - Create an awesome profile pic from any photo](https://pfpmaker.com/)
    
    [Weberlo vs Segmetrics. Best Traffic & Sales Attribution Platform](https://www.saasbattles.com/weberlo-vs-segmetrics-best-traffic-and-sales-attribution-platform/)
    
    [Messenger](https://www.facebook.com/messages/t/1360520254)
    
    [cover1_shadow_windows.png](https://www.dropbox.com/sh/5glu5bl07ri4ffs/AAAHMF5z3lK4c2nqNS06SVgKa/Linkedin/Final?dl=0&preview=cover1_shadow_windows.png&subfolder_nav_tracking=1)
    
    [App Tracking Transparency sur iOS 14.5 : l’impact sur les utilisateurs, développeurs et annonceurs](https://www.blogdumoderateur.com/app-tracking-transparency-ios-14-5/amp/)
    
    [Tracking Server-Side, une solution déjà incontournable](https://www.optimize-matter.com/blog/tracking-server-side)
    
    [Berrycast](https://www.berrycast.com/conversations/6fe6d73a-e327-5999-92ca-03fd8bcbaff7?fbclid=IwAR2sLIKYaELJJLXI5e9BDsYy_AZvUVYxKFeW-NydJOhyqT1sBV0WhFpyM3Y)
    
    [S'identifier | Fastmail](https://www.fastmail.com/mail/Inbox/?u=91144000)
    
    [Support | Texau](https://texau.app/help)
    
    [New Agency campaign template - Google Docs](https://docs.google.com/document/d/1TZkmCFpKtWdY-5Inu0ouHrt8SpgiC4xA_lKhYBDyYkw/edit?fbclid=IwAR1kHHjbs9pK1MvIqlWgKKeFlmv1HIEMFdun0cfrwvZrHaZnUgpb_ZiP9OU)
    

[Weberlo vs. Hyros - Analogy of Two Advertising Optimization Softwares - SaaS Battles](https://www.saasbattles.com/weberlo-vs-hyros-analogy-of-two-advertising-optimization-softwares/)

[(1) Revenue Attribution - Salespanel - YouTube](https://www.youtube.com/watch?v=QN7znYhQkXM)
[Will Cookie Alternatives Truly Satisfy? | CMI News - YouTube](https://www.youtube.com/watch?v=RcSeODrhWts)