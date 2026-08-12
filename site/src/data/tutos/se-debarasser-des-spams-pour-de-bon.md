---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Se Débarasser Des Spams Pour De Bon !
author: Diane
description: 'Découvre Se Débarasser Des Spams Pour De Bon ! : outil français pour
  entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

Trying to stop WordPress registration spam on your site? Because of WordPress's immense popularity, it is a juicy target for spammers around the world. They might just be trying to exploit your site and gain access, or they might want to spam your community, like filling up your forum with spam topics. If you allow public registration on your WordPress site you're almost certainly going to run into problems with spam registrations in some form or another. In this video, you're going to learn how to cut down on spam registrations using a mixture of built-in WordPress features and free plugins.

the default WordPress registration process. If you allow public registration at your site the default WordPress registration page is located at this URL. As you can see, there's not much stopping malicious actors or bots from creating spam registrations. Bots can go straight to your registration page by appending the same formula to every WordPress domain. And there's nothing to stop them from filling out the form fields. There are a number of different strategies that you can use to stop WordPress registration spam. Depending on your site's needs and the severity of your problem, you might need to implement just one of these strategies or you might need to try multiple tactics to stop the spam.

If you need to allow public registration on your WordPress site, registration spam can be a frustrating issue. You can reduce or even completely eliminate registration spam combining different tactics.

The simplest most lightweight option is to add a noCaptcha reCaptcha to the default WordPress registration form.

If you want a complete overhaul, you can also use a dedicated WordPress registration plugin to create a custom registration form that includes its own anti-spam properties, as well as features like admin approval for new users.

### disable WordPress registration completely

if you don't need public registration on your WordPress site, it's better to just disable registration altogether rather than trying to fight spam registrations. Even if you need to give others user accounts at your site that doesn't necessarily mean you need to enable a public registration. For example, if you only need a small number of people to have their own accounts you could manually create accounts for them rather than letting them register themselves. To completely disable user registration on WordPress, go to Settings and then General and make sure that the anyone can register box is unchecked. Once you disabled registration, anyone trying to visit your default registration page will see this message.

### add Captcha to your registration form

Another way to fend off user registration spam is to add a Captcha to the default WordPress registration form. There are various types of Captchas that you can use, but most people find Google's reCaptcha service to be the most user-friendly one, which is also known as noCaptcha reCaptcha. It aims to be invisible to most legitimate human visitors while still displaying a Captcha test to visitors that it determines are likely to be bots. To add noCaptcha reCaptcha to your WordPress registration form, you can use the free advanced noCaptcha and invisible Captcha version two and version three plugin. To set up the plugin, you'll first need to generate a free reCaptcha API key from Google, which just involves entering your website and choosing which type of reCaptcha to use. Then you can go to Settings and then advanced noCaptcha and invisible Captcha to set up the plugin. Choose the version and make sure this matches what you selected when you created your API key. Add your site key and secret key. Google gives you these after you submit the form from the previous screenshot. Choose where to enable your Captcha. Beyond your registration form, you can also enable it for other parts of your site, like your login form. Once you save your changes, you should see your Captcha form on your registration page unless you choose an invisible method, in which case it would only be visible for suspected bots.

### use a dedicated WordPress registration spam plugin

Unfortunately, the popular Akismet comment spam plugin from Automatic doesn't work for registration spam. But some other popular options that do block registration spam include: Stop Spammers, CleanTalk, WPBruiser, WordPress Zero Spam. Again, these plugins are not limited to just registration spam but they do help you block spam registration as part of their general anti-spam efforts.

### require admin approval for new users

If beyond the spam accounts themselves you're also worried about what people do after registering, another good strategy is to require admin approval for new users. For example, if you're worried about people spamming your bbPress forum or BuddyPress community, requiring admin approvals lets you avoid the situation. This is a good one to combine with a Captcha or another strategy. The Captcha will filter out low level automated spam and you can use manual approval to catch everything else. However, if you have tons of spam registrations and try to implement this strategy by itself you might find yourself overwhelmed, trying to sort through all of the registrations. To require admin approval for new users, you can use the free WP Approve User plugin. Once you install and activate the plugin it starts working right away. All your existing users will be already approved to avoid issues. New users, however, will require manual approval which you can do from the existing users area in your WordPress dashboard. You also have the option to both send and customize emails for when a user is approved or unapproved. You can enable these emails and customize their content by visiting the Settings and then Approve User.

### block malicious IP addresses

If the bulk of your registration spam is coming from the same IP addresses, you can cut down on the problem by blocking those IP addresses from accessing your site in the first place.

Most cPanel hosts should give you an IP blocking tool.

### change the WordPress registration URL

If you want to add some security by obscurity to your registration page and cut down on low level bot traffic, you can change the URL of your registration page away from the default that all WordPress sites use. The registration page is actually part of the WordPress login page. So you can accomplish this with any plugin that lets you change the WordPress login URL. A good option is the free WPS Hide Login plugin. Once you install the plugin, go to Settings and then WPS Hide Login to enter your new URL. You can also redirect the default URL to another page, like your 404 page. For example, if you change your login URL to [yoursite.com/sneakylogin](http://yoursite.com/sneakylogin), then the default registration page will no longer function. Your new registration page would be this.

### use a custom WordPress registration form plugin

Another good alternative to stop WordPress registration spam is to use a custom WordPress registration form plugin. These plugins let you bypass the normal WordPress registration process and also implement a number of useful anti-spam tactics, like custom registration URL, email confirmation, admin approval for new users, spam prevention. Custom registration URL. Changing your registration URL away from the default can cut down on some low level spam. Though, it's unlikely to stop user registration spam by itself. Email confirmation. This prevents spam users with fake emails by requiring new users to confirm their email. If a user doesn't confirm their email, the plugin will automatically discard that registration.

Admin approval for new users. These plugins can usually help you implement the admin approval feature. Spam prevention. These plugins can also help you add Captcha or Honeypot fields to your custom registration form. Many all-purpose WordPress form plugins also include the ability to create custom registration forms with anti-spam features. However, the downside here is that you'll usually only get the registration features in the premium version. If you're willing to pay, some good options are: Gravity Forms with the user registration add-on, available with the elite license, Formidable Forms with the user registration add-on, available with a business license.

Let's have a closer look on how to use two free solutions provided by the user registration and Profile Builder plugins. When you install the free user registration plugin, it will give you an option to automatically create your custom registration page located at [yoursite.com/registration](http://yoursite.com/registration). You can always change this URL. You have a few other options for reducing spam during the registration process. First, in the General Options tab of the plugin settings, you can use the user login option dropdown to require admin approval after a user registers. You can also go to the integration tab to set up Google reCaptcha. Remember, you'll need your API keys. You can follow the same steps from earlier in this video. To enable Captcha on a specific registration form, you'd also need to edit that form and enable it there. When you edit a form, you can also add additional profile information fields, if desired.

The free Profile Builder plugin allows the same basic approach. To customize your registration form fields, you can go to Profile Builder and then form fields. To add a Captcha to your form, you can include a reCaptcha field in which you'll need to add your API keys. Then, to display your custom registration form, you can add the wppb-register shortcode anywhere on your site. Profile Builder also includes a feature to require admin approval for new registrations, but it's only available in the premium version.
[Say Goodbye to Spam Forever: Proven Techniques to Shield Your Privacy - YouTube](https://youtu.be/tnB0wM3b47o)