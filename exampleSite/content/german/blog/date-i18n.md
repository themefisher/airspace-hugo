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

Um einen [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601)-Zeitstempel in der aktuellen Sprache auszuschreiben, kann der Shortcode `date_l10n` verwendet werden:

Wenn

```
{{%/* date_l10n "2020-10-20" */%}}
```

geschrieben wird, resultiert

```
{{% date_l10n "2020-10-20" %}}
```

Optional kann ein anderes [Format-Layout](https://gohugo.io/functions/dateformat/#datetime-formatting-layouts) spezifiert werden:

Beispielsweise resultiert folgendes

```
{{%/* date_l10n "2020-10-20" ":date_short" */%}}
```

in

```
{{% date_l10n "2020-10-20" ":date_short" %}}
```
