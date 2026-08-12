---
section: apps
metadataEnrichedAt: null
title: Rss
author: Diane
tags:
- Outils
description: 'Découvre Rss : outil français pour entrepreneurs, fonctionnalités et
  avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

## as a developer, what is the best way/opensource software to handle my RSS feeds? I only want the best of the best in terms of features, speed, reliability, evolutivity. I currently use Reader but it's a big app, and not free, though I love the categorization and highlighting it provides
As a developer seeking the best open-source software to handle RSS feeds, there are several excellent options available that offer a combination of features, speed, reliability, and extensibility. Based on the search results and considering your requirements, here are some top recommendations:

## FreshRSS

FreshRSS is a powerful and customizable web-based RSS feed reader that stands out for its features and performance[1]:

- **Open-source and self-hostable**: You have full control over your data and can customize it to your needs.
- **Fast and lightweight**: Ideal for developers who value performance.
- **Multi-user support**: Useful if you want to set it up for a team or organization.
- **Terminal interface**: Perfect for developers who prefer command-line operations.
- **Extensibility**: Comes with various extensions to improve core functionality.
- **API support**: Allows integration with mobile clients and other applications.

## Miniflux

Miniflux is another excellent choice for developers, known for its simplicity and efficiency[4]:

- **Lightweight and fast**: Built with Go, it offers excellent performance.
- **Clean, minimalist interface**: Focuses on essential features without clutter.
- **Advanced features**: Supports multiple attachments, including podcasts and videos.
- **YouTube integration**: Play videos from YouTube channels directly within the application.
- **Third-party service integration**: Save articles to services like Pocket.
- **Dark theme**: Offers better readability for long coding sessions.

## Tiny Tiny RSS (TT-RSS)

TT-RSS is a robust, feature-rich option that many developers appreciate[1]:

- **Self-hosted**: Gives you complete control over your data and setup.
- **Customizable**: Offers a high degree of flexibility for developers.
- **Keyboard shortcuts**: Enhances efficiency for power users.
- **Feed aggregation/syndication**: Useful for managing multiple sources.
- **Plugin support**: Allows for further customization and feature extension.
- **Mobile apps available**: Ensures access to your feeds across devices.

## Considerations for Developers

When choosing an RSS reader as a developer, consider the following:

1. **Self-hosting**: All the recommended options are self-hostable, giving you full control over your data and the ability to customize the software.

2. **API and Extensibility**: Look for readers with good API support and plugin systems, allowing you to integrate them with your workflow or extend functionality.

3. **Performance**: As a developer, you likely value speed and efficiency. Both Miniflux and FreshRSS are known for their lightweight nature and fast performance.

4. **Language and Stack**: Consider the technology stack. If you're comfortable with Go, Miniflux might be a good fit. If you prefer PHP, FreshRSS could be your choice.

5. **Community and Updates**: All these options have active communities and regular updates, ensuring long-term support and evolution.

While these options may not provide the exact categorization and highlighting features you're used to in Reader, they offer robust platforms that you can potentially extend or customize to meet your specific needs. As a developer, you have the skills to contribute to these open-source projects or create plugins to add the features you miss from Reader.

Citations:
[1] https://www.tecmint.com/best-rss-feed-readers-for-linux/
[2] https://slashdot.org/software/rss-readers/
[3] https://www.virtualcuriosities.com/articles/2114/comparison-of-rss-readers
[4] https://theprivacydad.com/ten-open-source-rss-news-readers-for-smartphones/
[5] https://lukesingham.com/rss-feed-reader/
[6] https://medevel.com/10-self-hosted-rss-feed/


## I'm looking for a reader that lets me access the RSS articles as .md files, place them where I want and combine them

Based on your requirements, there are a few open-source solutions that allow you to convert RSS feeds into Markdown files, giving you the flexibility to access, place, and combine them as needed:

1. FeedMD: This CLI utility converts RSS and Atom feeds into Markdown files[2]. Key features include:
   - Ability to template and modify the Markdown output to fit your workflow
   - Specify date and timezone for generating daily digests
   - Customizable output location for the digest files

2. mdrss: This Go-based tool takes a folder of .md files and generates an RSS feed based on that[1][3]. While it's primarily designed to create RSS feeds from Markdown files, you could potentially modify it to work in reverse.

3. RSS Feed to Markdown GitHub Action: This tool converts RSS feed entries to Markdown files[4]. It offers:
   - Support for multiple feed URLs
   - Customizable template for Markdown output
   - Ability to specify the output directory for generated files

To use these tools effectively for your needs:

1. Set up a workflow that regularly fetches your desired RSS feeds and converts them to Markdown files.
2. Use a tool like FeedMD or the RSS Feed to Markdown GitHub Action to generate .md files from your feeds.
3. Configure the output directory to place the generated Markdown files where you want them.
4. Use standard file management tools or scripts to organize and combine the Markdown files as needed.

By leveraging these tools, you can create a system that automatically converts RSS feeds to Markdown files, allowing you to access, place, and combine them according to your preferences. This approach gives you the flexibility to integrate the RSS content into your existing workflow or documentation system.

Citations:
[1] https://stackoverflow.com/questions/43864052/how-to-convert-markdown-files-into-an-rss-feed
[2] https://github.com/myquay/feedmd
[3] https://www.reddit.com/r/SideProject/comments/1etqqo9/generate_rss_feed_from_markdown_files/
[4] https://github.com/keiranlovett/rss-feed-to-markdown
[5] https://www.tecmint.com/best-rss-feed-readers-for-linux/
[6] https://www.smashingmagazine.com/2024/10/build-static-rss-reader-fight-fomo/
[7] https://billyle.dev/posts/adding-rss-feed-content-and-fixing-markdown-image-paths-in-astro
[8] https://news.ycombinator.com/item?id=41282157

## what are the most popular/maintained open source repos to deal with RSS feed reading ?
Based on your requirements, there are a few open-source solutions that allow you to convert RSS feeds into Markdown files, giving you the flexibility to access, place, and combine them as needed:

1. FeedMD: This CLI utility converts RSS and Atom feeds into Markdown files[2]. Key features include:
   - Ability to template and modify the Markdown output to fit your workflow
   - Specify date and timezone for generating daily digests
   - Customizable output location for the digest files

2. mdrss: This Go-based tool takes a folder of .md files and generates an RSS feed based on that[1][3]. While it's primarily designed to create RSS feeds from Markdown files, you could potentially modify it to work in reverse.

3. RSS Feed to Markdown GitHub Action: This tool converts RSS feed entries to Markdown files[4]. It offers:
   - Support for multiple feed URLs
   - Customizable template for Markdown output
   - Ability to specify the output directory for generated files

To use these tools effectively for your needs:

1. Set up a workflow that regularly fetches your desired RSS feeds and converts them to Markdown files.
2. Use a tool like FeedMD or the RSS Feed to Markdown GitHub Action to generate .md files from your feeds.
3. Configure the output directory to place the generated Markdown files where you want them.
4. Use standard file management tools or scripts to organize and combine the Markdown files as needed.

By leveraging these tools, you can create a system that automatically converts RSS feeds to Markdown files, allowing you to access, place, and combine them according to your preferences. This approach gives you the flexibility to integrate the RSS content into your existing workflow or documentation system.

Citations:
[1] https://stackoverflow.com/questions/43864052/how-to-convert-markdown-files-into-an-rss-feed
[2] https://github.com/myquay/feedmd
[3] https://www.reddit.com/r/SideProject/comments/1etqqo9/generate_rss_feed_from_markdown_files/
[4] https://github.com/keiranlovett/rss-feed-to-markdown
[5] https://www.tecmint.com/best-rss-feed-readers-for-linux/
[6] https://www.smashingmagazine.com/2024/10/build-static-rss-reader-fight-fomo/
[7] https://billyle.dev/posts/adding-rss-feed-content-and-fixing-markdown-image-paths-in-astro
[8] https://news.ycombinator.com/item?id=41282157


Based on the search results and considering popularity and maintenance, here are the most notable open-source repositories for RSS feed reading:

1. FreshRSS: A powerful, customizable, and actively maintained web-based RSS feed reader[1][4]. It offers:
   - Multi-user support
   - Fast performance, capable of managing over 100,000 articles
   - Responsive design and multiple themes
   - API support for mobile clients
   - Regular updates and an active community

2. Tiny Tiny RSS (TT-RSS): A robust, feature-rich web-based RSS/Atom reader and aggregator[1][3][4]. Key features include:
   - Feed aggregation and syndication
   - Plugin support for customization
   - JSON API for third-party integrations
   - Active development with continuous updates
   - Android client available

3. Miniflux: A minimalist and efficient RSS reader written in Go[4]. It stands out for its:
   - Simplicity and lightweight nature
   - Focus on performance and speed
   - Modern vanilla JavaScript usage
   - Single binary compilation without dependencies

4. Fluent Reader: A cross-platform RSS reader available for desktop and mobile devices[2]. Notable aspects:
   - Open-source and free for desktop platforms
   - Supports various themes and dark mode
   - Offers text-to-speech functionality

5. Feeder: An open-source RSS feed reader for Android[2][5]. Highlights include:
   - Support for all common feed formats, including JSONFeed
   - Privacy-focused with no tracking or account requirements
   - Regular updates and maintenance

These projects are all actively maintained, have strong community support, and offer a range of features to cater to different user needs. FreshRSS and Tiny Tiny RSS are particularly popular for self-hosted solutions, while Feeder is a strong contender for Android users looking for a mobile-specific option.

Citations:
[1] https://www.tecmint.com/best-rss-feed-readers-for-linux/
[2] https://alternativeto.net/category/books--news/rss-feed-reader/
[3] https://tt-rss.org
[4] https://medevel.com/10-self-hosted-rss-feed/
[5] https://news.itsfoss.com/feeder-rss-reader/
[6] https://www.reddit.com/r/androidapps/comments/1bqs9x5/what_is_the_best_open_source_rss_reader_for/
[7] https://www.theverge.com/24036427/rss-feed-reader-best
[8] https://www.virtualcuriosities.com/articles/2114/comparison-of-rss-readers