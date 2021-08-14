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

Per scrivere un timestamp [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) nella lingua corrente, puoi usare lo shortcode `date_l10n` :

Scrivendo

```
{{%/* date_l10n "2020-10-20" */%}}
```

si ottiene

```
{{% date_l10n "2020-10-20" %}}
```

Puoi opzionalmente specificare un diverso [layout di formattazione](https://gohugo.io/functions/dateformat/#datetime-formatting-layouts):

Per esempio, il seguente

```
{{%/* date_l10n "2020-10-20" ":date_short" */%}}
```

risultato sarà

```
{{% date_l10n "2020-10-20" ":date_short" %}}
```
