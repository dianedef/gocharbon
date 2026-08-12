---
section: apps
metadataEnrichedAt: null
title: Stop Bots
author: Diane
tags:
- Outils
description: 'Découvre Stop Bots : outil français pour entrepreneurs, fonctionnalités
  et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

Eliminate the frustrating experience of CAPTCHAs with a simple snippet of free code. Cloudflare Turnstile confirms web visitors are real and blocks unwanted bots without slowing down web experiences for real users.


[Cloudflare bot solutions](https://developers.cloudflare.com/bots/)


# Turnstile
Turnstile can be embedded into any website without sending traffic through Cloudflare and works without showing visitors a CAPTCHA.


Cloudflare issues challenges through the [Challenge Platform](https://developers.cloudflare.com/waf/reference/cloudflare-challenges/), which is the same underlying technology powering [Turnstile](https://developers.cloudflare.com/turnstile/).

In contrast to our Challenge page offerings, Turnstile allows you to run challenges anywhere on your site in a less-intrusive way without requiring the use of Cloudflare’s CDN.

Rather than try to unilaterally deprecate and replace CAPTCHA with a single alternative, we built a platform to test many alternatives and rotate new challenges in and out as they become more or less effective.

With Turnstile, we adapt the actual challenge outcome to the individual visitor or browser. First, we run a series of small non-interactive JavaScript challenges gathering more signals about the visitor/browser environment. Those challenges include, proof-of-work, proof-of-space, probing for web APIs, and various other challenges for detecting browser-quirks and human behavior. As a result, we can fine-tune the difficulty of the challenge to the specific request and avoid ever showing a visual puzzle to a user.

Turnstile also includes machine learning models that detect common features of end visitors who were able to pass a challenge before. The computational hardness of those initial challenges may vary by visitor, but is targeted to run fast.

Turnstile [widget types](https://developers.cloudflare.com/turnstile/concepts/widget/) include:

- A non-interactive challenge.
- A non-intrusive interactive challenge (such as checking a box), if the visitor is a suspected bot.
- An invisible challenge to the browser.


Get started

](https://developers.cloudflare.com/turnstile/get-started/) [

Dashboard

](https://dash.cloudflare.com/?to=/:account/turnstile)

## Features

### Turnstile analytics

Assess the number of challenges issued, evaluate the challenge solve rate, and view the metrics of issued challenges.

[Use Turnstile analytics](https://developers.cloudflare.com/turnstile/turnstile-analytics/)

### Pre-Clearance

Integrate Cloudflare challenges on single-page applications (SPAs) by allowing Turnstile to issue a Pre-Clearance cookie.

[Use Pre-Clearance](https://developers.cloudflare.com/turnstile/concepts/pre-clearance-support/)


# Get started with Turnstile

To start using the Turnstile widget, you will need to obtain a sitekey and a secret key. The sitekey and secret key are always associated with one widget and cannot be reused for other widgets.

The sitekey is public and used to invoke the Turnstile widget on your site. The sitekey and secret key are generated upon the creation of a widget, allowing communication between your site and Cloudflare to verify responses for a solved challenge from Turnstile. Make sure you keep the secret key safe for security reasons.

1. Log in to the [Cloudflare dashboard ↗](https://dash.cloudflare.com/?to=/:account/turnstile) and select your account.
2. Go to **Turnstile**.
3. Select **Add widget** and fill out the site name and your website’s hostname or select from your existing websites on Cloudflare.
4. Select the widget mode.
5. (Optional) Opt in for [pre-clearance support](https://developers.cloudflare.com/turnstile/concepts/pre-clearance-support/).
6. Copy your sitekey and secret key.

## Add the Turnstile widget to your site

1. Insert the Turnstile script snippet in your HTML’s `<head>` element:

```
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
```

2. [Render the client-side integration](https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/)
    - [Explicit rendering](https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/#explicitly-render-the-turnstile-widget)
    - [Implicit rendering](https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/#implicitly-render-the-turnstile-widget)

## Validate the server-side response
Warning

It is critical to enforce Turnstile tokens with the siteverify API. The Turnstile token could be invalid, expired, or already redeemed. Not verifying the token will leave major vulnerabilities in your implementation.

After you have installed the Turnstile widget on your site, you must configure your server to validate the Turnstile response. Refer to [Server-side validation](https://developers.cloudflare.com/turnstile/get-started/server-side-validation/).

Note

Rendering the client-side integration & validating the server-side response are both necessary to allow Turnstile to function properly.

[Edit page](https://github.com/cloudflare/cloudflare-docs/edit/production/src/content/docs/turnstile/get-started/index.mdx)

## Story of captchas


Long before reCAPTCHA, there was the original CAPTCHA (Completely Automated Public Turing test to tell Computers and Humans Apart), a captcha challenge with the sole purpose of differentiating human users from bots. Over time, however, traditional CAPTCHAs became less effective as bots began utilizing machine learning to recognize patterns and decipher distorted text.

Enter reCAPTCHA – an enhanced version of CAPTCHA that provides more complex tests, making it challenging for bots to circumvent while preserving an improved user experience and protecting web traffic.

The development of reCAPTCHA dates back to 2000, when it was initially created at Carnegie Mellon University. The goal was to improve upon traditional CAPTCHA tests by utilizing machine learning and sophisticated risk analysis to better identify human behavior and provide distinct tests to differentiate between humans and bots.

Their innovation caught the attention of Google, which acquired reCAPTCHA in 2009 to further develop and improve the technology.

Since then, reCAPTCHA has evolved into a powerful tool that helps security teams filter out fake users and protect their web traffic while offering a more user-friendly experience for recaptcha users compared to traditional CAPTCHAs.

One of the key differences between reCAPTCHA and traditional CAPTCHA is the complexity of the tests. reCAPTCHA utilizes text from real-world images, making it more difficult for bots to bypass while still providing a better user experience.

In addition, reCAPTCHA employs artificial intelligence to identify human behavior and offers a variety of tests, such as image recognition and checkbox tests, to further differentiate between humans and bots. This enhanced approach to CAPTCHA has led security teams to move away from CAPTCHAs and has driven the mass adoption of reCAPTCHA.

## **Types of reCAPTCHA Tests**

reCAPTCHA tests come in various forms, designed to cater to different user experiences while maintaining their primary function of detecting bots. The most common types of reCAPTCHA tests include image recognition, checkbox, and invisible tests. Each test type has its own method of detecting bots, ranging from analyzing cursor movements and browser cookies to monitoring user behavior and history.

We will now delve into the specifics of each reCAPTCHA test and their role in safeguarding websites from harmful bots.

### **Image Recognition reCAPTCHA Test**

The image recognition reCAPTCHA test presents users with a grid of either nine or 16 low-resolution images, accompanied by instructions indicating which image sections should be selected. Upon selection, a computer program compares the user’s response with other responses. If the user’s response aligns with that of the majority of other users, the test is passed.

The image recognition test is fairly easy for modern bots to bypass. Modern AI integrated with bots allows malicious automation to recognize images and pass the test as a human would.

### **Checkbox reCAPTCHA Test**

The checkbox reCAPTCHA test is another common test utilized by security teams to distinguish between humans and bots. This test requires users to verify that they are not a robot by checking a box. The simplicity of this test is deceiving, as reCAPTCHA’s underlying technology evaluates cursor movements to determine the legitimacy of the user.

However, modern bots look and act like humans more than ever before. Behavioral based detection no longer works as bot operators feed haverested digital fingerprints from real users into their automation. Allowing bad bots to interact with a website or application in the same way a human would.

In cases where the checkbox test is unable to determine whether the user is a human or a bot, an additional challenge, such as the image recognition test, may be presented. This fall back only delays the inevitable as modern bots can easily bypass image recognition tests as stated above.

### **Invisible reCAPTCHA Test**


The invisible reCAPTCHA test is an advanced version of the checkbox test, designed to detect bots without requiring any user interaction. This test works in the background, monitoring user behavior and history to identify potential bots. By analyzing patterns that may signify a user is a bot, such as rapid clicking or typing, the invisible reCAPTCHA test can take necessary steps to prevent automated software from engaging in malicious activities on websites.

While the invisible reCAPTCHA test offers a frictionless option, by not presenting real users with a challenge to solve. It still relies on the same outdated detection method of behavioral analysis, which as stated in the previous section can be easily evaded by modern bots.

The flaws present in the various forms of reCAPTCHA highlight the need for a new approach to detecting and stopping automated threats.

## **Advantages and Disadvantages of Using reCAPTCHA**

In the following sections, we’ll explore the advantages and disadvantages of using reCAPTCHA in more detail to help you make an informed decision about whether this is the right solution for your website.

### **Benefits of reCAPTCHA**

While reCAPTCHA offers many benefits, such as stopping simple and unsophisticated bots, providing a base level of protection, reduction of spam, and the ability to block simple bots, it’s essential to consider the potential drawbacks of relying on this technology.

### **Drawbacks of reCAPTCHA**

While the security that reCAPTCHA looks to offer is one that online businesses need, reCAPTCHA itself falls short in offering protection against bad bots.

Modern bots can easily evade reCAPTCHA in a few ways:

1. **Modern AI**: Bot operators are constantly evolving their tactics and leveraging the latest technology. Modern AI offers attackers a way to quickly solve CAPTCHAs for their malicious bots.
2. **Click Farms**: For pennies per solve attackers can leverage digital sweatshops a.k.a click farms to have a real human solve a CAPTCHA on behalf of bots.
3. **Look Human**: reCAPTCHAs are typically presented when a request can’t be confirmed human, in order to limit the number of real users being forced to solve CAPTCHAs. This approach fails, as automation is able to look and act more human.

Another drawback of reCAPTCHA is user friction. The fact of the matter is humans don’t want to solve CAPTCHAs. Some users like those who are visually impaired may not even be able to solve a CAPTCHA. Presenting your real customers with challenges to prove their legitimacy can hurt brand loyalty, conversion rates, and impact revenue.

Given these issues, considering other anti-bot solutions that might offer superior protection against bots without hindering the user experience could be beneficial.

## **Types of Threats reCAPTCHA Fails to Prevent**

AlthoughreCAPTCHA is designed to protect against the most common types of automated attacks it fails to defend against modern bots looking to:

- **Spam forms:** Automated software that fills out and submits forms on websites. Form spam can be used to collect sensitive information or engage in fraudulent activities like credit card fraud.
- **Hoard Inventory:** Automated bots buy up large quantities of in-demand items like, limited edition goods, holiday gifts, or tickets for events. Attackers then sell the items at a higher price, forcing real users to have to pay over the original value or miss out.
- **Spam comment sections:** Spammy comments that are posted on blog posts to get traffic to a particular website.
- **Takeover accounts**: Bots takeover accounts through credential stuffing attacks by testing stolen username and passwords. Or through brute force attacks where bots attempt to guess a user’s password.
- **Conduct a Denial of Service (DoS) attacks:** When automated software overloads a website with traffic, causing it to crash and become unavailable.
- **Scrape content:** When attackers use an automated solution to copy content from websites. This can be used to create duplicate content or steal information.

Despite its best intentions, reCAPTCHA cannot prevent automated attacks conducted by motivated attackers.

## **Why is reCAPTCHA Ineffective?**

ReCAPTCHA has become increasingly futile when faced with bots that use advanced techniques to bypass CAPTCHA tests.

Here are a few reasons why you cannot continue to rely on reCAPTCHA to protect your website from cyber threats:

### **Automated Form Filling is Abundant**

Bots can automate the process of filling out forms on your website. Without human intervention, they can submit fake sign-ups, spam comments, and other malicious content. Automated form-filling is one of the most common ways bad bots abuse websites.

### **reCAPTCHA Does Not Offer Visibility Into Its Impact on Users**

You cannot know how many human users are impacted by reCAPTCHA. The tool lacks visibility into its effectiveness in stopping bad bots.

### **IP Masking Hides Bot Locations**

Bots can use proxy servers and VPNs to mask their IP address and make it appear as if they’re coming from a different location. This makes it difficult for reCAPTCHA to determine whether the request comes from a human or a bot.

### **Bots Leverage Advanced Machine Learning**

Bots use advanced machine learning techniques to bypass CAPTCHA tests. These bots can be trained to recognize common CAPTCHA patterns and respond accordingly.

What’s more, bots are becoming more sophisticated every day. As bot developers find new ways to bypass CAPTCHA, Google is constantly playing catch-up, trying to update reCAPTCHA with new tests that are more difficult for bots to solve.

This arms race between bot developers and Google is neverending, and it’s one that you cannot win as a website owner.

### **reCAPTCHA is a Target for Cybercriminals**

While reCAPTCHA may stop some bots, it’s also a target for cybercriminals. Several cybercriminals have used reCAPTCHA to launch distributed denial of service (DDoS) attacks.

In a DDoS attack, the attacker uses a botnet to flood the target website with requests. This overloads the server and causes the website to crash.

By setting up a reCAPTCHA on their website, the attacker can use the CAPTCHA test to filter out human users and direct the botnet attacks at the website’s server. This makes it much easier for the attacker to take the website offline.

ReCAPTCHA can also be used to launch phishing attacks. In a phishing attack, the attacker uses a fake website that looks identical to the actual website. When the user tries to solve the CAPTCHA, they’re actually sending their personal information (like their login credentials) to the attacker.

### **Cyber Threats Are Constantly Evolving**

ReCAPTCHA is ineffective because it needs to keep up with the constantly evolving ways bad bots bypass CAPTCHA tests. ReCAPTCHA lacks long-term efficacy.

As we’ve seen, bots use advanced strategies to bypass CAPTCHA tests. But which ones should you pay the most attention to as you protect your own website?

## **How Can Bots Bypass reCAPTCHA?**

Despite its complexity and widespread use, reCAPTCHA is not entirely foolproof, and some bots have developed ways to bypass this security measure. Methods used by bots to bypass reCAPTCHA include:

- Advanced machine learning techniques
- CAPTCHA breaking services
- CAPTCHA skipper bots
- Rotating proxies
- Avoiding hidden traps
- Using real headers

These methods exploit weaknesses in reCAPTCHA’s algorithms or leverage human assistance to solve the challenges, allowing bots to gain access to protected websites.

The fact that bots can bypass reCAPTCHA highlights the limitations of this security measure and underscores the need for security teams to explore alternative solutions that offer more comprehensive protection against bot attacks.

The upcoming section will focus on some alternatives to reCAPTCHA that can bolster security and improve the user experience on your website.

## **Alternatives to reCAPTCHA**

While reCAPTCHA has been a popular choice for security teams seeking to protect their sites from bots, there are alternative solutions available that offer different approaches to bot detection and mitigation. One particularly promising alternative to reCAPTCHA is Kasada Bot Management Solutions, which provides a more advanced and secure method of protecting websites from bots. We will now delve into the details of Kasada and explore why it might be a superior choice to reCAPTCHA for your website.

### **Kasada Bot Management Solutions Knows All The Tricks**

Kasada was designed to counter the mindset of attackers. Leveraging dynamic detection and highly obfuscated defenses that make reverse engineering attempts too costly and time consuming to be profitable for attackers. Kasada’s agile platform allows the solution to evolve as quickly as attackers, enabling defense improvements to be rolled out in hours rather than months.

In addition to its advanced bot detection capabilities, Kasada also offers insights into underground botting communities, real-time analytics, and seamless integration with various platforms and services. Kasada’s sophisticated technology and adaptability to emerging threats make it a compelling choice for enterprise businesses seeking more robust protection against advanced automated threats.

Kasada is a bot mitigation platform that takes a proactive approach to stop malicious automation.

Kasada’s technology is constantly learning and evolving, so it can effectively stop sophisticated AI-powered bad bots that can bypass reCAPTCHA.

Bot operators often use DevTools, stealth plugins, solver services, anti-detect browsers, and proxy networks to evade detection. Kasada’s technology can detect and block all of these strategies.

Our solution offers actionable insights that distinguish good bots, bad bots, and humans so you can understand your website traffic and block automated threats. Better yet, our software does not require each user to prove that they are “human” like reCAPTCHA does, improving user experience and enhancing overall security.

## **Why Choose Kasada?**

Our platform has been battle-tested by some of the world’s largest organizations, and we’re constantly improving our technology to stay ahead of the latest threats.

If you’re looking for a proactive, effective, and easy-to-use solution to stop malicious bots, Kasada is the right choice for you.

Ready to stop bad bots for good? [Request a demo](https://www.kasada.io/get-started/) of Kasada today.Frequently Asked Questions

### **What is reCAPTCHA and how it works?**

reCAPTCHA is a free service from Google that helps protect websites from fraud, abuse, spam and malicious software by using an advanced risk analysis engine and adaptive challenges. It is easy for humans to solve, but hard for bots and other malicious software to figure out.

### **Why is CAPTCHA blocking me?**

CAPTCHAs are not foolproof, in addition to failing to detect bad bots, the solution also fails to properly identify real users. There are a number of reasons CAPTCHA may be blocking you, the most likely one is there are a high number of requests from your network. This could happen if you are using a public network or VPN.

### **What triggers reCAPTCHA?**

ReCAPTCHA v3 uses a concept called “actions” to differentiate between real and bot traffic. These actions are tags that define key steps in the user journey, so reCAPTCHA can learn what normal users do compared to bots.

### **What is the main difference between reCAPTCHA and traditional CAPTCHA?**

The main difference between reCAPTCHA and traditional CAPTCHA is that reCAPTCHA provides more complex tests to challenge bots, while attempting to preserve an improved user experience.


# How Fraudsters Use Bots to Bypass CAPTCHAs
For attackers looking to access your website, a basic security test called CAPTCHA has been the first line of defense since its creation in 2000. In the decades since its inception, CAPTCHA has been the go-to method for stopping bots and keeping websites safe.

But all those years of service on bots and hackers means that bad actors have had a lot of practice getting past these challenges. As a result, CAPTCHAs are now both less effective at [blocking bots](https://cheq.ai/blog/block-bots-secure-site-data/) and more difficult for actual humans to complete.

Now, according to [research](https://www.wired.co.uk/article/google-captcha-recaptcha), half of all CAPTCHAs passed are completed by bots, not real users. That means the attackers controlling the bots can do everything from leaving spam comments and submitting invalid forms to abusing other services that your website provides.

In light of this, now’s a good time to understand how CAPTCHA works, how a CAPTCHA solver can bypass it so easily, and what it means for your website.

Table of Contents

[](https://cheq.ai/blog/how-fraudsters-bypass-captchas/#)

- [What exactly is CAPTCHA?](https://cheq.ai/blog/how-fraudsters-bypass-captchas/# "What exactly is CAPTCHA?")
- [Why is CAPTCHA used?](https://cheq.ai/blog/how-fraudsters-bypass-captchas/# "Why is CAPTCHA used?")
- [Types of CAPTCHA](https://cheq.ai/blog/how-fraudsters-bypass-captchas/# "Types of CAPTCHA")
- [Behavior-based CAPTCHA: reCAPTCHA and hCAPTCHA](https://cheq.ai/blog/how-fraudsters-bypass-captchas/# "Behavior-based CAPTCHA: reCAPTCHA and hCAPTCHA")
- [How do CAPTCHAs affect user experience?](https://cheq.ai/blog/how-fraudsters-bypass-captchas/# "How do CAPTCHAs affect user experience?")
- [How do hackers bypass CAPTCHA?](https://cheq.ai/blog/how-fraudsters-bypass-captchas/# "How do hackers bypass CAPTCHA?")
- [What happens when hackers crack your CAPTCHA?](https://cheq.ai/blog/how-fraudsters-bypass-captchas/# "What happens when hackers crack your CAPTCHA?")
- [What can you do about CAPTCHA bypassing bots?](https://cheq.ai/blog/how-fraudsters-bypass-captchas/# "What can you do about CAPTCHA bypassing bots?")
- [The bottom line](https://cheq.ai/blog/how-fraudsters-bypass-captchas/# "The bottom line")

## What exactly is CAPTCHA?

CAPTCHA is a descriptive acronym, and it stands for Completely Automated Public Turing test to tell Computers and Humans Apart. The goal of the CAPTCHA test is to allow human users to access a website while keeping bots out. CAPTCHA guards everything, from spammy blog comments to even unauthorized downloads.

CAPTCHA tests take many forms, but the most popular kind will typically show the users images that are supposedly unreadable by bots. For example, a CAPTCHA may display a series of misshapen or washed-out letters and ask the user to write down the displayed code or may ask the user to identify a set of images that have been distorted in a manner that makes it harder for bots to use OCR.

Users need to input what they see into the provided field, and if they answer correctly, they are granted access to the protected web area. The more simple bots will return irregular and incomprehensible letters or click the wrong images, making it obvious that they are not human.

Advanced bots, on the other hand, can use a variety of strategies to read these distorted images and bypass the test easily. As a result, more sophisticated CAPTCHAs, like reCAPTCHA and hCAPTCHA, have been developed with even more complex puzzles to fight growing bot capabilities.

## Why is CAPTCHA used?

CAPTCHA is used by any website that wants to restrict access from bots. The use of CAPTCHAs is widespread–over 30 million websites use reCAPTCHA alone–and the tests are typically placed at gate points in the user experience, such as a download or account creation form, a ticketing system, or a comments section.

CAPTCHAs help businesses filter out potential spam comments, ticket inflation, or even account takeover attacks from malicious bots.

## Types of CAPTCHA

CAPTCHA is either text-based, picture-based, or sound-based, and the odds are that you’ve encountered all three.

### Text CAPTCHAs


These are the most common, and they require you to look at the distorted text to identify the real message. Sometimes they are actual words, and other times, they are plain gibberish distorted by shape, size, capitalization, or orientation.

The idea behind these wavy text images is to disrupt the way that computers ‘read’ images by breaking up any patterns that programs may have been trained to recognize as text. Think of it as camouflage for words.

If you fail enough text CAPTCHAs, you’ll usually get a prompt to attempt a different method of verification, like a CAPTCHA image.

### Picture CAPTCHAs


Image recognition-based CAPTCHA is another commonly used test that prompts the user to prove their humanity by correctly identifying sets of images or portions of a single image. ‘Click every tile with a crosswalk’ or ‘click every image containing a school bus’ are examples. Computers have great difficulty detecting objects in images, and that kind of capability is hard to build and usually out-of-reach for botnets, so image CAPTCHAs are usually effective at keeping out bots. But while they do their job well, they’re also cumbersome and annoying for real users and can cause friction and even abandonment in the customer journey.

A CAPTCHA image can be quite troublesome when it doesn’t look like there’s a clear answer. A great example is a picture where you have to select all the grids with traffic lights, even though the light is split between two grids.

Luckily, you can always hit the refresh button to get another image with zero consequences. Or, you could try the audio CAPTCHA.

### Audio CAPTCHA


With audio CAPTCHAs, users can listen to a short recording and type the word they hear. These are effective because bots can’t use speech recognition to differentiate the pronounced characters from the background noise in the recording. This can be time-consuming, especially compared to a text-based CAPTCHA, and can negatively affect both user experience and page-load times but audio CAPTCHAs are quite effective.

## Behavior-based CAPTCHA: reCAPTCHA and hCAPTCHA

As bots have become more advanced, CAPTCHA has needed to add more complex functionality than simple tests and puzzles Enter behavior-based CAPTCHAs,  such as Google reCAPTCHA and its primary competitor, hCAPTCHA.

These behavior-based CAPTCHA tools examine identifiers and behavioral data– i.e. how a user interacts with a webpage– to make a decision on their humanity. The classic example is reCAPTCHA’s “I’m not a robot” check box, which tracks mouse movements and other patterns to evaluate users. If reCAPTCHA believes a user is human, they are presented with the simple checkbox test, but if they are believed to be a bot they may be presented with a more difficult image-based test.

By providing different tests based on contextual clues, these tools aim to reduce the friction CAPTCHA places on user experience while still providing tough verification for suspicious users.

However, these tools are still susceptible to advanced bots, or CAPTCHA-solving services, and they come with their own set of difficulties.

Google’s offering, for example, can cause privacy headaches. ReCAPTCHA gathers _a lot_ of device, software, and behavioral data, some of which may be used for purposes beyond security. After all, Google is an advertising company.  To drive that point home, earlier this year the French Privacy Commission (CNIL) [ruled](https://www.huntonprivacyblog.com/2023/03/30/cnil-issues-e125000-fine-against-e-scooter-rental-company/) that reCAPTCHA does not automatically comply with data sharing rules of the [GDPR](https://cheq.ai/blog/gdpr-cookie-compliance-101/) and that user consent must be granted before loading the tool.

For its part, hCAPTCHA does not rely so much on user data, but as a result, it is more likely to present human users with complex challenges which can be quite frustrating, adding an undesirable amount of friction to a landing page.

## How do CAPTCHAs affect user experience?

The clear benefit of CAPTCHA is that it is an effective technique to keep common, simple bots off of websites, but there are some major drawbacks to CAPTCHA use, particularly in how they affect real human users.

CAPTCHAs–especially difficult CAPTCHAs–can be very disruptive to user experience and may be difficult for certain audiences to use or understand, resulting in a high rate of false positives and page abandonment.

CAPTCHAs are particularly disruptive for mobile users, who are much more likely to leave a website when challenged than a desktop user.

## How do hackers bypass CAPTCHA?

Hackers now have an easier time bypassing normal CAPTCHA challenges, and here are some of the strategies they use.

### AI

In his book, Deep Learning for Computer Vision with Python, Adrain Rosebrock lays out his strategy for bypassing CAPTCHA on the E-ZPass New York website. His approach included downloading hundreds of example images to train his system because he didn’t have access to the source code and then releasing the learned AI on the system.

CAPTCHAs with an open source code are, in theory, easier to crack because hackers can use the source to train their machine learning system to bypass CAPTCHA tests, regardless of the difficulty. Anybody can pass the exam if you know all the possible questions.

### CAPTCHA hacking strategies

[Hack Tricks](https://book.hacktricks.xyz/pentesting-web/captcha-bypass) lists some of the ways that hackers get around CAPTCHA easily. Some of them include checking your page’s source code for CAPTCHA solutions (in case it’s text) or using an old CAPTCHA value in case they get the same challenge twice.

Other CAPTCHA bypass strategies include:

- Using optical character recognition (OCR) to read the characters on the screen
- Checking how many images are being used and detecting them with MD5
- Sending the CAPTCHA parameter empty and seeing if that does the trick.

### Browser Extensions and APIs

Browser extensions such as Buster are marketed as tools to help human users solve annoying or difficult CAPTCHA verification challenges, but they can easily be leveraged by bots. Even innocuous APIs can be used, for example, Google’s reCAPTCHA allows users to download audio files, which can then be solved with [Google’s own Speech Recognition API](https://threatpost.com/google-recaptcha-bypass-technique-uses-googles-own-tools/124006/)!

### CAPTCHA solving services and click farms

For hackers who don’t want to develop their own solutions for CAPTCHA challenges, there are a plethora of solutions available that will help them bypass checks for astonishingly low costs. These CAPTCHA services range from APIs leveraging sophisticated AI tools, such as Death By Captcha, which charges $1,39 per 1000 solved CAPTCHA, to [click farms](https://cheq.ai/blog/8-bizarre-click-farms-discovered-and-how-they-worked/) that hire large numbers of human workers to manually solve CAPTCHA challenges. These ‘CAPTCHA Farms’ leverage simple APIs that allow a client bot to call the service when it encounters a CAPTCHA, and the workers then solve the CAPTCHA and deliver the response token back to the bot, which enters it and continues its attack.

Pricing for leading vendors such as 2Captcha is around $0.77 per 1,000 Captchas, and the services offer 24/7 availability with thousands of workers available at any time.

These services offer the added benefit of cutting costs for hackers by reducing the infrastructure costs related to spinning up computational resources for complex bots; instead, attackers can leverage simple, lightweight bots and call in help as needed.

### Security Bugs

In 2018, a security researcher found a bug that allowed him to bypass Google’s reCAPTCHA. The basic gist is that web apps using reCAPTCHA have to create the request in a specific way, and sometimes, the request is insecure. When this happened, attackers could bypass the reCAPTCHA every single time. ([Andres Riancho](https://andresriancho.com/recaptcha-bypass-via-http-parameter-pollution/))

The bug has since been patched, and it’s no longer possible to recreate the reCAPTCHA bypass. However, this is a prime example of how attackers can exploit bugs and weaknesses to bypass your site’s CAPTCHA.

## What happens when hackers crack your CAPTCHA?

Any independent hacker can get past your CAPTCHA by simply filling it as a human would. The danger rises when they are able to bypass your CAPTCHA with bots. That means they can bombard your server with many requests, overload your resources, or possibly, steal your data.

### Increased spam

Without an effective CAPTCHA “gatekeeper,” you can expect spam comments that advertise everything from malicious services to other websites. If your website is set to approve comments first, they won’t appear to the general public. However, you’ll be drowned by dozens or even hundreds of irrelevant comments on the backend.

### Invalid analytics data

Bots will skew the traffic on your web page and render your analytic data useless. If hackers figure out a way to get past your CAPTCHA, you may notice a spike in traffic with zero conversions or find that users are abandoning their carts, and you won’t be able to figure out why.

### Insecure shopping checkout

If you own an eCommerce website, a bypassed CAPTCHA means that hackers can now access user accounts, make purchases with stolen cards, and even access other sensitive areas of your website.

### Database access

If you don’t have CAPTCHA set up for your website login, then you might want to consider adding it. Bots can be used to access poorly secured user accounts and perform account takeovers. They can also access your online databases and even perform other forms of content-based fraud on your site.

### Fewer web resources

With access to your website, bots will bombard your website, submitting connection requests and taking up finite resources. That means that legitimate users will have slowed or even nonexistent access to your website, which can be damaging to your business. Statistics show that 53% of people will go to a competitor if your website takes longer than 3 seconds to load ([Digital](https://docs.google.com/document/d/1Zai4dvEKZwV38bG3yCKQeNcPB75K6BwDBr8WVLobikI/edit#)).

## What can you do about CAPTCHA bypassing bots?

### Bot Mitigation by CHEQ Essentials

[CHEQ Essentials’ bot mitigation](https://essentials.cheq.ai/products/bot-mitigation/) adds an additional layer of security to your website, stopping the most common forms of automated traffic from accessing your site. The service scans your visitor activity for telltale signs of bot presence and blocks them from interacting with your website.

That means even if they get through your CAPTCHA, a bot mitigation solution will identify and purge them from your website, allowing only genuine customers to get through.

## The bottom line

Hacker tactics are becoming more sophisticated as they get better at bypassing simple defense systems like CAPTCHA, but luckily, you also have access to advanced measures.

CHEQ Essentials will make sure those automated programs don’t bypass CAPTCHAs or mess with your marketing channels or forms. Currently, Bot Zapping works with WordPress sites only.