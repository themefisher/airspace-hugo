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

Pour écrire un horodatage [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) dans la langue courante, vous pouvez utiliser le shortcode `date_l10n` :

L'écriture de

```
{{%/* date_l10n "2020-10-20" */%}}
```

donne

```
{{% date_l10n "2020-10-20" %}}
```

Vous pouvez facultativement spécifier une autre [mise en forme](https://gohugo.io/functions/dateformat/#datetime-formatting-layouts):

Par exemple, le résultat suivant

```
{{%/* date_l10n "2020-10-20" ":date_short" */%}}
```

est

```
{{% date_l10n "2020-10-20" ":date_short" %}}
```
