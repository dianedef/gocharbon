---
section: apps
metadataEnrichedAt: null
title: Yazi
author: Diane
tags:
- Outils
description: 'Découvre Yazi : outil français pour entrepreneurs, fonctionnalités et
  avis.'
pubDate: '2024-03-25'
imgUrl: ../../../../../assets/astro.jpeg
---

repo officiel [sxyazi/yazi at shipped](https://github.com/sxyazi/yazi/tree/shipped)

Yazi (means "duck") is a ⚡️ Blazing Fast Terminal file manager, written in Rust, based on non-blocking async I/O. It aims to provide an efficient, user-friendly, and customizable file management experience.

##  installer un theme

[yazi-rs/flavors: Some Yazi flavors maintained by community.](https://github.com/yazi-rs/flavors)

## avoir les bonnes icones
installer nerd font et utiliser wezterm

## preview de files

Utiliser mime-ext.yazi [plugins/mime-ext.yazi at main · yazi-rs/plugins](https://github.com/yazi-rs/plugins/tree/main/mime-ext.yazi)
Lancer :
```shell
ya pack -a yazi-rs/plugins:mime-ext
```

Add this to your `~/.config/yazi/yazi.toml`:

```toml
[[plugin.prepend_fetchers]]
id   = "mime"
name = "*"
run  = "mime-ext"
prio = "high"
```

## plugins

[yazi-rs/plugins: Place code snippets from docs into this monorepo, so that users can update more easily via package manager.](https://github.com/yazi-rs/plugins/tree/main)

[dawsers/dual-pane.yazi: Yazi plugin: dual pane navigation](https://github.com/dawsers/dual-pane.yazi)


## tips
[AnirudhG07/awesome-yazi: A collection of Yazi's Plugins, flavours and more resources.](https://github.com/AnirudhG07/awesome-yazi)