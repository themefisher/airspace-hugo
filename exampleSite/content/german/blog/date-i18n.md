---
title: "Pretty-print dates"
date: 2021-04-01T00:00:00+01:00
author: John Doe
image : "images/blog/blog-post-1.jpg"
bg_image: "images/feature-bg.jpg"
categories: ["Technical Assistance"]
tags: ["How to", "Technology"]
draft: false
type: "post"
---


Um einen [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601)-Zeitstempel in der aktuellen Sprache auszuschreiben, kann der Shortcode `date_i18n` verwendet werden:

Wenn

```
{{%/* date_i18n "2020-10-20" */%}}
```

geschrieben wird, resultiert

```
{{% date_i18n "2020-10-20" %}}
```
