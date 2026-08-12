---
section: apps
metadataEnrichedAt: null
tags:
- Outils
imageNameKey: null
title: Les Dorks Google Secrets Qui Vont Révolutionner Vos Recherches
author: Diane
description: 'Découvre Les Dorks Google Secrets Qui Vont Révolutionner Vos Recherches
  : outil français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../assets/astro.jpeg
---

site:*.getrewardful.com "40%"
🔹✅💡🥊🛡️🔇🧠📣🎁🏆📚🛠💥🙌😱❌✂️
# Top 20 Google Hacking Techniques

Reading time: 15 minutes

[Facebook](https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsecuritytrails.com%2Fblog%2Fgoogle-hacking-techniques)[Twitter](https://twitter.com/intent/tweet?url=https://securitytrails.com/blog/google-hacking-techniques&text=Share%20this%20blog%20post%20on%20Twitter:)[LinkedIn](https://www.linkedin.com/shareArticle?mini=true&url=https://securitytrails.com/blog/google-hacking-techniques&title=Top%2020%20Google%20Hacking%20Techniquessummary=&source=SecurityTrails)

Some time ago we wrote an interesting post about the [OSINT](https://securitytrails.com/blog/what-is-osint-how-can-i-make-use-of-it "What is OSINT? How can I make use of it?") concept and its importance in the security researching world, showing how easy it is to get information from publicly available sources on the Internet.

Last week one of our developers shared an interesting link he found — one that was exposing many supposedly "private" resources from different websites.

That's when someone from our team suggested a post about this kind of data exposure issue. We've mentioned this type of security problem in previous posts, as it's a common source for security researchers to find valuable private information about any website.

Today we are going to dig into Google hacking techniques, also known as Google Dorks.

- [What is a Google Dork?](https://securitytrails.com/blog/google-hacking-techniques#content-what-is-a-google-dork)
- [Popular Google Dork operators](https://securitytrails.com/blog/google-hacking-techniques#content-popular-google-dork-operators)
- [Google Dork examples](https://securitytrails.com/blog/google-hacking-techniques#content-google-dork-examples)
    - [Log files](https://securitytrails.com/blog/google-hacking-techniques#content-log-files)
    - [Vulnerable web servers](https://securitytrails.com/blog/google-hacking-techniques#content-vulnerable-web-servers)
    - [Open FTP servers](https://securitytrails.com/blog/google-hacking-techniques#content-open-ftp-servers)
    - [ENV files](https://securitytrails.com/blog/google-hacking-techniques#content-env-files)
    - [SSH private keys](https://securitytrails.com/blog/google-hacking-techniques#content-ssh-private-keys)
    - [Email lists](https://securitytrails.com/blog/google-hacking-techniques#content-email-lists)
    - [Live cameras](https://securitytrails.com/blog/google-hacking-techniques#content-live-cameras)
    - [MP3, Movie, and PDF files](https://securitytrails.com/blog/google-hacking-techniques#content-mp3-movie-and-pdf-files)
    - [Weather](https://securitytrails.com/blog/google-hacking-techniques#content-weather)
    - [Zoom videos](https://securitytrails.com/blog/google-hacking-techniques#content-zoom-videos)
    - [SQL dumps](https://securitytrails.com/blog/google-hacking-techniques#content-sql-dumps)
    - [WordPress Admin](https://securitytrails.com/blog/google-hacking-techniques#content-wordpress-admin)
    - [Apache2](https://securitytrails.com/blog/google-hacking-techniques#content-apache2)
    - [phpMyAdmin](https://securitytrails.com/blog/google-hacking-techniques#content-phpmyadmin)
    - [JIRA/Kibana](https://securitytrails.com/blog/google-hacking-techniques#content-jirakibana)
    - [cPanel password reset](https://securitytrails.com/blog/google-hacking-techniques#content-cpanel-password-reset)
    - [Government documents](https://securitytrails.com/blog/google-hacking-techniques#content-government-documents)
- [Preventing Google Dorks](https://securitytrails.com/blog/google-hacking-techniques#content-preventing-google-dorks)
    - [Using robots.txt configurations to prevent Google Dorking](https://securitytrails.com/blog/google-hacking-techniques#content-using-robotstxt-configurations-to-prevent-google-dorking)
- [Final thoughts](https://securitytrails.com/blog/google-hacking-techniques#content-final-thoughts)

## [¶](https://securitytrails.com/blog/google-hacking-techniques#content-what-is-a-google-dork "Permalink")What is a Google Dork?

A Google Dork, also known as Google Dorking or Google hacking, is a valuable resource for security researchers. For the average person, Google is just a search engine used to find text, images, videos, and news. However, in the infosec world, Google is a useful hacking tool.

How would anyone use Google to hack websites?

Well, you can't hack sites directly using Google, but as it has tremendous web-crawling capabilities, it can index almost anything within your website, including sensitive information. This means you could be exposing too much information about your web technologies, usernames, passwords, and general vulnerabilities without even knowing it.

In other words: Google "Dorking" is the practice of using Google to find vulnerable web applications and servers by using native Google search engine capabilities.

Unless you block specific resources from your website using a robots.txt file, Google indexes all the information that is present on any website. Logically, after some time any person in the world can access that information if they know what to search for. You can also access the Google Hacking Database (GHDB) which is the full Google dork list containing all Google dorking commands.

Important note: while this information is publicly available on the Internet, and it is provided and [encouraged](https://support.google.com/websearch/answer/2466433?hl%3Den&rel=nofollow,noopener,noreferrer&target=_blank) to be used by Google on a legal basis, people with the wrong intentions could use this information to harm your online presence.

Be aware that Google also knows who you are when you perform this kind of query. For this reason and many others, it's advised to use it only with good intentions, whether for your own research or while looking for ways to defend your website against this kind of vulnerability.

While some webmasters expose sensitive information on their own, this doesn't mean it's legal to take advantage of or exploit that information. If you do so you'll be marked as a cybercriminal. It's pretty easy to track your browsing IP, even if you're using a VPN service. It's not as anonymous as you think.

Before reading any further, be aware that Google will start blocking your connection if you connect from a single static IP. It will ask for captcha challenges to prevent automated queries.


## [¶](https://securitytrails.com/blog/google-hacking-techniques#content-popular-google-dork-operators "Permalink")Popular Google Dork operators

Google's search engine has its own built-in query language. The following list of queries can be run to find a list of files, find information about your competition, track people, get information about SEO backlinks, build email lists, and of course, discover web vulnerabilities.

Let's look at the most popular Google Dorks and what they do.

- `cache`: this dork will show you the cached version of any website, e.g. `cache:securitytrails.com`
- `allintext`: searches for specific text contained on any web page, e.g. `allintext: hacking tools`
- `allintitle`: exactly the same as allintext, but will show pages that contain titles with X characters, e.g. `allintitle:"Security Companies"`
- `allinurl`: it can be used to fetch results whose URL contains all the specified characters, e.g: `allinurl:clientarea`
- `filetype`: used to search for any kind of file extensions, for example, if you want to search for pdf files you can use: `email security filetype: pdf`
- `inurl`: this is exactly the same as `allinurl`, but it is only useful for one single keyword, e.g. `inurl:admin`
- `intitle`: used to search for various keywords inside the title, for example, `intitle:security tools` will search for titles beginning with "security" but "tools" can be somewhere else in the page.
- `inanchor`: this is useful when you need to search for an exact anchor text used on any links, e.g. `inanchor:"cyber security"`
- `intext`: useful to locate pages that contain certain characters or strings inside their text, e.g. `intext:"safe internet"`
- `site`: will show you the full list of all indexed URLs for the specified domain and subdomain, e.g. `site:securitytrails.com`
- `*`: wildcard used to search pages that contain "anything" before your word, e.g. `how to * a website`, will return "how to…" design/create/hack, etc… "a website".
- `|`: this is a logical operator, e.g. `"security" "tips"` will show all the sites which contain "security" or "tips," or both words.
- `+`: used to concatenate words, useful to detect pages that use more than one specific key, e.g. `security + trails`
- `–`: minus operator is used to avoiding showing results that contain certain words, e.g. `security -trails` will show pages that use "security" in their text, but not those that have the word "trails."

If you're looking for the complete set of Google operators, you can follow this [SEJ post](https://www.searchenginejournal.com/google-search-operators-commands/215331/) which covers almost every known dork available today.

## [¶](https://securitytrails.com/blog/google-hacking-techniques#content-google-dork-examples "Permalink")Google Dork examples

Let’s take a look at some practical examples of the best Google hacks. You'll be surprised how easy is to extract private information from any source just by using Google hacking techniques.

### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-log-files "Permalink")Log files

Log files are the perfect example of how sensitive information can be found within any website. Error logs, access logs and other types of application logs are often discovered inside the public HTTP space of websites. This can help attackers find the PHP version you're running, as well as the critical system path of your CMS or frameworks.

For this kind of dork we can combine two Google operators, allintext and filetype, for example:

`allintext:username filetype:log`

This will show a lot of results that include username inside all *.log files.

In the results we discovered one particular website showing an SQL error log from a database server that included critical information:

```sql
MyBB SQL Error
SQL Error: 1062 - Duplicate entry 'XXX' for key 'username'
Query:
INSERT
INTO XXX (`username`,`password`,`salt`,`loginkey`,`email`,`postnum`,`avatar`,`avatartype`,`usergroup`,`additionalgroups`,`displaygroup`,`usertitle`,`regdate`,`lastactive`,`lastvisit`,`website`,`icq`,`aim`,`yahoo`,`msn`,`birthday`,`signature`,`allownotices`,`hideemail`,`subscriptionmethod`,`receivepms`,`receivefrombuddy`,`pmnotice`,`pmnotify`,`showsigs`,`showavatars`,`showquickreply`,`showredirect`,`tpp`,`ppp`,`invisible`,`style`,`timezone`,`dstcorrection`,`threadmode`,`daysprune`,`dateformat`,`timeformat`,`regip`,`longregip`,`language`,`showcodebuttons`,`away`,`awaydate`,`returndate`,`awayreason`,`notepad`,`referrer`,`referrals`,`buddylist`,`ignorelist`,`pmfolders`,`warningpoints`,`moderateposts`,`moderationtime`,`suspendposting`,`suspensiontime`,`coppauser`,`classicpostbit`,`usernotes`)
VALUES ('XXX','XXX','XXX','XXX','XXX','0','','','5','','0','','1389074395','1389074395','1389074395','','0','','','','','','1','1','0','1','0','1','1','1','1','1','1','0','0','0','0','5.5','2','linear','0','','','XXX','-655077638','','1','0','0','0','','','0','0','','','','0','0','0','0','0','0','0','')
```

This Google hack example exposed the current database name, user login, password and email values to the Internet. We've replaced the original values with "XXX".

### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-vulnerable-web-servers "Permalink")Vulnerable web servers

The following Google Dork can be used to detect vulnerable or hacked servers that allow appending "/proc/self/cwd/" directly to the URL of your website.

`inurl:/proc/self/cwd`

As you can see in the following screenshot, vulnerable server results will appear, along with their exposed directories that can be surfed from your own browser.


### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-open-ftp-servers "Permalink")Open FTP servers

Google does not only index HTTP-based servers, it also indexes open FTP servers.

With the following dork, you'll be able to explore public FTP servers, which can often reveal interesting things.

`intitle:"index of" inurl:ftp`

In this example, we found an important government server with their FTP space open. Chances are that this was on purpose — but it could also be a security issue.


### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-env-files "Permalink")ENV files

.env files are the ones used by popular web development frameworks to declare general variables and configurations for local and online dev environments.

One of the recommended practices is to move these .env files to somewhere that isn't publicly accessible. However, as you will see, there are a lot of devs who don't care about this and insert their .env file in the main public website directory.

As this is a critical dork we will not show you how do it; instead, we will only show you the critical results:


You'll notice that unencrypted usernames, passwords and IPs are directly exposed in the search results. You don't even need to click the links to get the database login details.

### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-ssh-private-keys "Permalink")SSH private keys

SSH private keys are used to decrypt information that is exchanged in the SSH protocol. As a general security rule, private keys must always remain on the system being used to access the remote SSH server, and shouldn't be shared with anyone.

With the following dork, you'll be able to find SSH private keys that were indexed by uncle Google.

intitle:index.of id_rsa -id_rsa.pub

Let's move on to another interesting SSH Dork.

If this isn't your lucky day, and you're using a Windows operating system with PUTTY SSH client, remember that this program always logs the usernames of your SSH connections.

In this case, we can use a simple dork to fetch SSH usernames from PUTTY logs:

`filetype:log username putty`

Here's the expected output:


### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-email-lists "Permalink")Email lists

It's pretty easy to find email lists using Google Dorks. In the following example, we are going to fetch excel files which may contain a lot of email addresses.

`filetype:xls inurl:"email.xls"`


We filtered to check out only the .edu domain names and found a popular university with around 1800 emails from students and teachers.

`site:.edu filetype:xls inurl:"email.xls"`

Remember that the real power of Google Dorks comes from the unlimited combinations you can use. Spammers know this trick too, and use it on a daily basis to build and grow their spamming email lists.

### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-live-cameras "Permalink")Live cameras

Have you ever wondered if your private live camera could be watched not only by you but also by anyone on the Internet?

The following Google hacking techniques can help you fetch live camera web pages that are not restricted by IP.

Here's the dork to fetch various IP based cameras:

`inurl:top.htm inurl:currenttime`

To find WebcamXP-based transmissions:

`intitle:"webcamXP 5"`

And another one for general live cameras:

`inurl:"lvappl.htm"`

There are a lot of live camera dorks that can let you watch any part of the world, live. You can find education, government, and even military cameras without IP restrictions.

If you get creative you can even do some white hat penetration testing on these cameras; you'll be surprised at how you're able to take control of the full admin panel remotely, and even re-configure the cameras as you like.


### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-mp3-movie-and-pdf-files "Permalink")MP3, Movie, and PDF files

Nowadays almost no one downloads music after Spotify and Apple Music appeared on the market. However, if you're one of those classic individuals who still download legal music, you can use this dork to find mp3 files:

`intitle: index of mp3`

The same applies to legal free media files or PDF documents you may need:

`intitle: index of pdf` `intext: .mp4`

### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-weather "Permalink")Weather

Google hacking techniques can be used to fetch any kind of information, and that includes many different types of electronic devices connected to the Internet.

In this case, we ran a dork that lets you fetch Weather Wing device transmissions. If you're involved in meteorology stuff or merely curious, check this out:

`intitle:"Weather Wing WS-2"`

The output will show you several devices connected around the world, which share weather details such as wind direction, temperature, humidity and more.


### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-zoom-videos "Permalink")Zoom videos

"Zoom-bombing" became a popular means of disrupting online meetings in 2020 during the initial lockdown. The company has since placed some restrictions to make it harder to find/disrupt Zoom meetings, but long as a URL is shared, a Zoom meeting can still be found:

`inurl:zoom.us/j and intext:scheduled for`

The only drawback to this is the speed at which Google indexes a website. By the time a site is indexed, the Zoom meeting might already be over.


### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-sql-dumps "Permalink")SQL dumps

Misconfigured databases are one way of finding exposed data. Another way is to look for SQL dumps that are stored on servers and accessible via a domain/IP.

Sometimes, these dumps appear on sites through incorrect backup mechanisms used by site admins who store backups on web servers (assuming that they aren't indexed by Google). To find a zipped SQL file, we use:

`"index of" "database.sql.zip"`

We've omitted screenshots to avoid exposing any possible data breaches.

### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-wordpress-admin "Permalink")WordPress Admin

The view on whether to obfuscate your WordPress login page has arguments on both sides. Some researchers say it's unnecessary and using tools like a web application firewall (WAF) can prevent attacks much better than obfuscation would.

Finding WP Admin login pages is not too difficult with a dork:

`intitle:"Index of" wp-admin`


### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-apache2 "Permalink")Apache2

This can be considered a subset of "vulnerable web servers" mentioned above, but we're discussing Apache2 specifically because:

- LAMP (Linux, Apache, MySQL, PHP) is a popular stack for hosted apps/websites
- These Apache servers could be misconfigured/forgotten or in some stage of being setup, making them great targets for botnets

Find Apache2 web pages with the following dork:

`intitle:"Apache2 Ubuntu Default Page: It works"`


### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-phpmyadmin "Permalink")phpMyAdmin

Another risky yet frequently discovered tool on LAMP servers is phpMyAdmin software. This tool is another method of compromising data, as phpMyAdmin is used for the administration of MySQL over the web. The dork to use is:

`"Index of" inurl:phpmyadmin`

### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-jirakibana "Permalink")JIRA/Kibana

Google dorks can also be used to find web applications hosting important enterprise data (via JIRA or Kibana).

`inurl:Dashboard.jspa intext:"Atlassian Jira Project Management Software"`  
`inurl:app/kibana intext:Loading Kibana`


An easier way to find JIRA instances is to use a tool like SurfaceBrowser™, which can identify subdomains as well as the applications on those subdomains (besides JIRA, there are many other applications).

### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-cpanel-password-reset "Permalink")cPanel password reset

Another dork that can be used as the first step in reconnaissance is to hosted cPanels and then exploit various weaknesses in password resets to take over the cPanel (along with all the websites hosted on it). The dork for this purpose is:

`inurl:_cpanel/forgotpwd`


### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-government-documents "Permalink")Government documents

Sensitive government documents are the last thing that should be exposed on the internet, but with dorks they aren't too hard to find, as shown below:

`allintitle: restricted filetype:doc site:gov`


## [¶](https://securitytrails.com/blog/google-hacking-techniques#content-preventing-google-dorks "Permalink")Preventing Google Dorks

There are a lot of ways to avoid falling into the hands of a Google Dork.

These measures are suggested to prevent your sensitive information from being indexed by search engines.

- Protect private areas with a user and password authentication and also by using IP-based restrictions.
- Encrypt your sensitive information (user, passwords, credit cards, emails, addresses, IP addresses, phone numbers, etc).
- Run regular vulnerability scans against your site, these usually already use popular Google Dorks queries and can be pretty effective in detecting the most common ones.
- Run regular dork queries against your own website to see if you can find any important information before the bad guys do. You can find a great list of popular dorks at the [Exploit DB Dorks database](https://www.exploit-db.com/google-hacking-database/).
- If you find sensitive content exposed, request its removal by using [Google Search Console](https://support.google.com/webmasters/answer/1663419?hl%3Den&rel=nofollow,noopener,noreferrer&target=_blank).
- Block sensitive content by using a robots.txt file located in your root-level website directory.

### [¶](https://securitytrails.com/blog/google-hacking-techniques#content-using-robotstxt-configurations-to-prevent-google-dorking "Permalink")Using robots.txt configurations to prevent Google Dorking

One of the best ways to prevent Google dorks is by using a [robots.txt](https://support.google.com/webmasters/answer/6062596?hl%3Den&rel=nofollow,noopener,noreferrer&target=_blank) file. Let's see some practical examples.

The following configuration will deny all crawling from any directory within your website, which is pretty useful for private access websites that don't rely on publicly-indexable Internet content.

```http
User-agent: *
Disallow: /
```

You can also block specific directories to be excepted from web crawling. If you have an /admin area and you need to protect it, just place this code inside:

```http
User-agent: *
Disallow: /admin/
```

This will also protect all the subdirectories inside.

Restrict access to specific files:

```http
User-agent: *
Disallow: /privatearea/file.htm
```

Restrict access to dynamic URLs that contain '?' symbol

```http
User-agent: *
Disallow: /*?
```

To restrict access to specific file extensions you can use:

```http
User-agent: *
Disallow: /*.php$/
```

In this case, all access to .php files will be denied.

## [¶](https://securitytrails.com/blog/google-hacking-techniques#content-final-thoughts "Permalink")Final thoughts

Google is one of the most important search engines in the world. As we all know, it has the ability to index everything unless we explicitly deny it.

Today we learned that Google can be also used as a hacking tool, but you can stay one step ahead of the bad guys and use it regularly to find vulnerabilities in your own websites. You can even integrate this and run automated scans by using custom third-party Google SERPs APIs.

If you're a security researcher it can be a practical tool for your cybersecurity duties when used responsibly.

While Google Dorking can be used to reveal sensitive information about your website that is located and indexable via HTTP protocol, you can also perform a full DNS audit by using the [SecurityTrails](https://securitytrails.com/corp/pricing "SecurityTrails Pricing | Find the right product for your OSINT needs") toolkit.

---

If you're looking for a way to do it all from a single interface—analyze your DNS records, zones, server IP map, related domains, subdomains as well as SSL Certificates—take a look into your [SurfaceBrowser](https://securitytrails.com/corp/surfacebrowser "SurfaceBrowser™: Explore the Internet Surface Area of Any company") tool, request a demo with us today, or sign up for a [free API account](https://securitytrails.com/corp/surfacebrowser "SurfaceBrowser™: Explore the Internet Surface Area of Any company").


# Top GitHub Dorks and Tools Used to Scan GitHub Repositories for Sensitive Data

Reading time: 13 minutes

[Facebook](https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsecuritytrails.com%2Fblog%2Fgithub-dorks)[Twitter](https://twitter.com/intent/tweet?url=https://securitytrails.com/blog/github-dorks&text=Share%20this%20blog%20post%20on%20Twitter:)[LinkedIn](https://www.linkedin.com/shareArticle?mini=true&url=https://securitytrails.com/blog/github-dorks&title=Top%20GitHub%20Dorks%20and%20Tools%20Used%20to%20Scan%20GitHub%20Repositories%20for%20Sensitive%20Datasummary=&source=SecurityTrails)

For years, using Github as your main repository for application development version control has been the industry standard. Even in the presence of many competitors, Github still stands as the number one option.

Millions of developers push code changes to [GitHub](https://github.com/?rel=nofollow,noopener,noreferrer&target=_blank) several times in a single day, and those changes can be overwhelming when you're working simultaneously with distributed dev teams 'round the clock. Troubles arise when developers accidentally include password credentials, usernames or cloud-based keys in their public and private repos.

Unfortunately, remote attackers are aware of this. They've identified GitHub as an easy place to find exposed sensitive information. We've seen this happen to many companies — notably in the [Uber GitHub data-leak](https://www.theregister.co.uk/2018/02/07/uber_quit_github_for_custom_code_after_2016_data_breach/) case, when [AWS](https://www.itnews.com.au/news/aws-urges-developers-to-scrub-github-of-secret-keys-375785) [notified customers](https://www.itnews.com.au/news/aws-urges-developers-to-scrub-github-of-secret-keys-375785) to review their repos for exposed data, as well as in the [Slack tokens exposure](https://labs.detectify.com/2016/04/28/slack-bot-token-leakage-exposing-business-critical-information/) incident.

In the same way that [Google dorks](https://securitytrails.com/blog/google-hacking-techniques "Most popular Google Hacking Techniques - Top Google Dorks and Hacks") can be used to scan websites for sensitive data, we will now explore the top ways to scan GitHub for critical data such as usernames and passwords, database credentials, API data, cryptographic keys, etc., so you can detect these security issues before the bad guys do.

- [Latest academic studies](https://securitytrails.com/blog/github-dorks#content-latest-academic-studies)
- [Top 4 ways to scan GitHub repos for credentials](https://securitytrails.com/blog/github-dorks#content-top-4-ways-to-scan-github-repos-for-credentials)
    - [GitHub dorks](https://securitytrails.com/blog/github-dorks#content-github-dorks)
    - [Gitrob](https://securitytrails.com/blog/github-dorks#content-gitrob)
    - [Repo security scanner](https://securitytrails.com/blog/github-dorks#content-repo-security-scanner)
    - [TruffleHog](https://securitytrails.com/blog/github-dorks#content-trufflehog)
- [How can I prevent my sensitive information from being exposed in GitHub?](https://securitytrails.com/blog/github-dorks#content-how-can-i-prevent-my-sensitive-information-from-being-exposed-in-github)
    - [Git-secrets](https://securitytrails.com/blog/github-dorks#content-git-secrets)
    - [Git-Hound](https://securitytrails.com/blog/github-dorks#content-git-hound)
    - [GitHub security best practices](https://securitytrails.com/blog/github-dorks#content-github-security-best-practices)
- [Final thoughts](https://securitytrails.com/blog/github-dorks#content-final-thoughts)

## [¶](https://securitytrails.com/blog/github-dorks#content-latest-academic-studies "Permalink")Latest academic studies

Earlier this year, researchers Michael Meli, Matthew R. McNiece and Bradley Reaves from North Carolina State University [released](https://www.ndss-symposium.org/wp-content/uploads/2019/02/ndss2019_04B-3_Meli_paper.pdf) a white-paper containing the results of their massive, full GitHub scan of the critical files contained in around 100k GitHub accounts.

After scanning millions of GitHub accounts in a six-month period, they began analyzing the results — and found a lot more exposed data than they ever imagined.

Text strings containing usernames, passwords, API tokens, configuration files, database snapshots and cryptographic keys were publicly accessible over GitHub.


Fig. 01 courtesy of Michael Meli, Matthew R. McNiece, and Bradley Reaves. North Carolina State University.

The results are stunning and include a full in-depth investigation, which is a must-read for all who want to protect any access data in pushed code.

Now that we've read their study, we're going to reproduce a small part of their reconnaissance work, to show our readers just how easy it is for anyone to access information seemingly concealed in GitHub.

## [¶](https://securitytrails.com/blog/github-dorks#content-top-4-ways-to-scan-github-repos-for-credentials "Permalink")Top 4 ways to scan GitHub repos for credentials

To protect your critical credentials, you first need to understand how remote attackers can access your data. Let's look at the most popular methods of scanning public GitHub repositories for credentials, tokens and keys.

### [¶](https://securitytrails.com/blog/github-dorks#content-github-dorks "Permalink")GitHub dorks

This is the oldest and most traditional way to access sensitive data from public repositories, and because it's a part of public sources, it can be included in any [OSINT](https://securitytrails.com/blog/what-is-osint-how-can-i-make-use-of-it "What is OSINT? How can I make use of it?") research.

What's needed? Only GitHub account and some basic knowledge about programming variables; in other words, the things you'll be looking for, such as database user and password, secret access keys, tokens, etc.

Here at SecurityTrails, we wanted to see how much time an average user takes to locate sensitive data from public repositories, so we tested a few random sensitive keywords such as:

- password
- dbpassword
- dbuser
- access_key
- secret_access_key
- bucket_password
- redis_password
- root_password

It took less than 60 seconds to find the first results of GitHub repositories leaking data about database connections — including usernames and passwords — as you can see below:


There's an even more effective approach to take, by searching for specific credentials strings in configuration files, such as this example: `filename:sftp-config.json password`.


As shown, we were able to obtain the IP address, root password and SSH port credentials.

Another tip that may increase your success in finding leaked data is ordering the results, by setting the GitHub filter to 'Recently indexed', as you see below:


What about smtp login credentials? It's easy by searching for strings like: `filename:.env MAIL_HOST=smtp.gmail.com`. Output example:


How about SQL dumps? Simply use `extension:sql mysql dump`, and the results will appear before your very eyes:


There are numerous GitHub dorks that can be used to scan GitHub repositories, including:

- `filename:.npmrc _auth`
- `filename:.dockercfg auth`
- `extension:pem private`
- `extension:ppk private`
- `filename:id_rsa or filename:id_dsa`
- `extension:sql mysql dump`
- `extension:sql mysql dump password`
- `filename:credentials aws_access_key_id`
- `filename:.s3cfg`
- `filename:wp-config.php`
- `filename:.htpasswd`
- `filename:.env DB_USERNAME NOT homestead`
- `filename:.env MAIL_HOST=smtp.gmail.com`
- `filename:.git-credentials`

And the list goes on. A [Google search](https://www.google.com/search?q%3Dgithub%2Bdork%2Blist&rel=nofollow,noopener,noreferrer&target=_blank) will show you even more results.

As we are not legally allowed to connect to these servers, we didn't tried to access any of these remote systems or services. However, we certainly believe most of the critical information seen in the results to be accurate, as the information was recently indexed by GitHub. We believe that if a real attacker can access this, he can definitely connect to most of these systems.

Is there any way to automate the GitHub dork exploration process? There are tools available that may help you automate Github dorks queries, such as [github-dork.py,](https://github.com/techgaun/github-dorks) a basic python tool that can search through your entire GitHub repo and test against dorks specified in a text file.

### [¶](https://securitytrails.com/blog/github-dorks#content-gitrob "Permalink")Gitrob

[Gitrob](https://github.com/michenriksen/gitrob/) is very useful for collecting information during a security audit or reconnaissance task. This OSINT tool works by scanning the public repos hosted at GitHub. Once you've configured your GitHub API (which requires activation of a valid account), it can be used to get information such as user names, passwords, keys and other critical data from an organization.

It works by cloning any user repo, exploring the commit history, and reporting files with certain known signatures that may match with potentially sensitive content.

**Installing Gitrob**

Installing Gitrob isn't that complex if you follow the [official documentation](https://github.com/michenriksen/gitrob%23installation).

First, make sure you have Go 1.8 or newer installed, and that you have created your own [GitHub personal token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line).

Then, grab the source, and install all its dependencies and the core by running:

`go get github.com/michenriksen/gitrob`

Once that's done, export your GitHub access token by running:

`export GITROB_ACCESS_TOKEN=your.token.here`

Alternatively, you can download the [pre-compiled binaries](https://github.com/michenriksen/gitrob/releases) that work really well on most scenarios. Once you extract the .zip or .tar.gz file, merely execute the binary file and you are ready to play!

Define your target, as in this example:


This might take a few seconds, depending on how much information is found. Once it's finished, you'll be able to browse the results from the web interface:


Just as when you run a manual GitHub dork query, it will yield some false positives. Our best advice< grab a coffee and start exploring the results, one by one.

There are several other Gitrob options to explore, by using the `--help` option:


### [¶](https://securitytrails.com/blog/github-dorks#content-repo-security-scanner "Permalink")Repo security scanner

[Repo security scanner](https://github.com/UKHomeOffice/repo-security-scanner) is a command line-based tool that was written with a single goal: to help you discover GitHub secrets that developers accidentally made by pushing sensitive data. And like the others, it will help you find passwords, private keys, usernames, tokens and more.

To test it, you'll need to [download](https://github.com/UKHomeOffice/repo-security-scanner/releases) the latest release from here. Extract the compressed file, and move the binary to any bin directory inside your OS, such as /usr/bin or /usr/local/bin.

Run it against any repo's history and wait for the results.

The syntax is simple:

`git log -p | scanrepo`

This tool's only requirement is that you need to download any repos you want to investigate first. Once that's done, it will scan your repos easily and within seconds, as you'll see in the following video:

[video /]

### [¶](https://securitytrails.com/blog/github-dorks#content-trufflehog "Permalink")TruffleHog

[TruffleHog](https://github.com/dxa4481/truffleHog) searches through GitHub repositories and digs through the commit history and branches, looking for accidentally committed secrets.

Installation is fairly easy. Its only requirement is to have pip previously installed. Then, you can run:

`pip install truffleHog`

Expected output:

```elixir
[20:41]root@securitytrails(2):sectrails[0]# pip install truffleHog
Collecting truffleHog
Using cached https://files.pythonhosted.org/packages/a3/6d/a251a89aae727260c32491a52ff01fcb2002141f455e9e9fd9c794824b5c/truffleHog-2.0.99-py2.py3-none-any.whl
Requirement already satisfied: truffleHogRegexes==0.0.7 in /usr/lib/python2.7/site-packages (from truffleHog) (0.0.7)
Requirement already satisfied: GitPython==2.1.1 in /usr/lib/python2.7/site-packages (from truffleHog) (2.1.1)
Requirement already satisfied: gitdb2>=2.0.0 in /usr/lib/python2.7/site-packages (from Git Python==2.1.1->truffleHog) (2.0.5)
Requirement already satisfied: smmap2>=2.0.0 in /usr/lib/python2.7/site-packages (from gitdb2>=2.0.0->GitPython==2.1.1->truffleHog) (2.0.5)
Installing collected packages: truffleHog
Successfully installed truffleHog-2.0.99
[20:41]root@securitytrails(2):sectrails[0]#
```

Once that's completed, you can start playing with this tool by using this syntax:

`trufflehog --regex --entropy=False [https://github.com/user/repo][18]`

As an example, we'll now explore trufflehog default repo, which already contains "secrets" that have been exposed for testing purposes:

`truffleHog --regex --entropy=False https://github.com/dxa4481/truffleHog.git`

In the following test, we ran this tool against a real repository. This time it was EVCache, a memcached system for AWS EC2 services:

`trufflehog --regex --entropy=False https://github.com/Netflix/EVCache`

Now you'll see some interesting stuff, like 'Generic Secrets', as well as items related to AWS keys:


## [¶](https://securitytrails.com/blog/github-dorks#content-how-can-i-prevent-my-sensitive-information-from-being-exposed-in-github "Permalink")How can I prevent my sensitive information from being exposed in GitHub?

Any Cloud services (AWS, Google Cloud, Microsoft Azure, DigitalOcean, etc) that access keys and password credentials are like treasure troves for the bad guys.

Once they get hold of your access data, they can use it to access private information about your company, clients and app source code; they can shut down part of your infrastructure and use your cloud resources. As you can see, it's the worst-case scenario.

Is there any way to prevent this from happening? While there's no way to control 100% of the human errors made by development teams (such as pushing code with hardcoded passwords or keys), there are manual methods (GitHub dorks) and tools to help you detect these types of accidents.

There are also tools created specifically to help developers. Let's take a look at a few of them.

### [¶](https://securitytrails.com/blog/github-dorks#content-git-secrets "Permalink")Git-secrets

[Git-secrets](https://github.com/awslabs/git-secrets/blob/master/README.rst) is a handy tool written by the AWS team to prevent developers from sharing confidential keys publicly. This utility will help you approve or deny changes before pushing them to your repo.

**Installing Git-secrets** is different with each operating system. You'll always do best to follow the [official documentation](https://github.com/awslabs/git-secrets/blob/master/README.rst%23installing-git-secrets).

Once you have Git-secrets installed, you'll need to add the AWS rules for auditing secret keys:

`git secrets --register-aws`

Move to the git-secrets directory and run scan:

`git secrets --scan`

This will help you identify any private keys exposed in your repo.

### [¶](https://securitytrails.com/blog/github-dorks#content-git-hound "Permalink")Git-Hound

[Git-Hound](https://github.com/ezekg/git-hound) is a great alternative to Git-secrets. This cli-based utility is basically a Git plugin written in Go, one that helps developers prevent secrets from being committed into their repositories. For this, Git-Hound uses sniffing technology against certain commits using regular expressions.

This plugin will try to find matches for regular expressions specified in a separate file called .githound.yml. Once it does find something, it will show a warning before allowing the commit, or execute a fail command and stop the commit right away.

Git-Hound can detect sensitive information such as user credentials, access tokens, and even configuration files and system file names.

**Installing Git-Hound**

The easiest way to install Git-Hound is by using a pre-compiled binary that can be downloaded from [here](https://github.com/ezekg/git-hound/releases) and requires no dependencies at all.

Next, the typical way to run Git-Hound is by sniffing changes since the last commit, and passing to git commit once you're sure it's clean.

`git hound commit`

Alternatively, you can also sniff your entire repo history by running:

`git log -p | git hound sniff`

You can run git-hound in many other ways, take a few minutes to explore other options:

```sql
[10:44]root@securitytrails(2):Downloads[0]# ./git-hound_linux_amd64 --help
Usage of ./git-hound_linux_amd64:
-bin string
Executable binary to use for git command (default "git")
-config string
Hound config file (default ".githound.yml")
-no-color
Disable color output
-v Show version
```

All the tools we've explored can work for both sides; for blue and read teams, to prevent or to attack targets by discovering secrets. So if you're on a blue team, keep that in mind and start using these tools to scan your own repos from a defensive point of view.

Apart from using manual and automated scans against your repos, the best prevention comes from following recommended security practices.

### [¶](https://securitytrails.com/blog/github-dorks#content-github-security-best-practices "Permalink")GitHub security best practices

A few key practices can definitely help you avoid security issues, or if it's too late for that, they can quickly resolve issues and prevent them in the future. Take note and be prepared:

- Review your code, always: this will help you identify bad security practices by any of your employees.
- Clear your GitHub history, to safeguard you most sensitive information.
- Use ENV variables to store critical information in CI/CD. Tools like Vault are one of the top suggestions for these cases.
- If you're certain you've already exposed data, make sure to invalidate tokens and passwords.
- Configure a 2FA for all your GitHub accounts, as this type of data-leak can not only affect public repositories, but private ones too, if attackers gain access by brute forcing or through other aggressive methods.
- Write and publish a disclosure policy in your SECURITY.md file.
- Never allow your company devs to share GitHub credentials with anyone.
- As soon as employees no longer work for your company, be sure to revoke all their accesses.

You should also take a look at GitHub's advice about [removing sensitive data from a repository](https://help.github.com/en/articles/removing-sensitive-data-from-a-repository), and check out this interesting research by IBM: [Detecting and Mitigating Secret-Key Leaks in Source Code Repositories](https://people.eecs.berkeley.edu/~rohanpadhye/files/key_leaks-msr15.pdf).

## [¶](https://securitytrails.com/blog/github-dorks#content-final-thoughts "Permalink")Final thoughts

While [GitHub has been working hard](https://github.blog/2018-10-17-behind-the-scenes-of-github-token-scanning/) to prevent data leaks from their repositories (lately including the capability to detect tokens from Cloud providers as well as SSH credentials, and more), after reading this post it's clear that there's a lot more to be done to offer real protection against human factors.

We really hope this information gives you a better idea about how easy it is to extract sensitive data from GitHub repositories, while encouraging DevOps teams to follow GitHub best security practices. It takes a concerted effort to avoid exposing sensitive information that may lead to massive data leaks or remote intrusions into databases or systems.

The reality is you can't blame GitHub if any of your employees — or yourself — expose critical information to the public. It's your organization's responsibility to make sure your DevOps and engineering teams take the necessary steps to make sure sensitive data remains protected while working with any version control systems.

Are you concerned about exposing sensitive data from your online apps?

---

There is much more to explore by using [SurfaceBrowser™](https://securitytrails.com/corp/surfacebrowser "SurfaceBrowser™: Explore the Internet Surface Area of Any company"), our all-in-one enterprise-security product designed to help you discover unseen sensitive exposed data about your domain names, SSL certificates, IP addresses, DNS records and open ports in your server infrastructure. [Book a demo](https://bit.ly/3Rv9SAP) with our Sales team today!