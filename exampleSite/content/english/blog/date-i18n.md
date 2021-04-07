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


To write out an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp in the current language, you can use the `date_i18n` shortcode:

Writing

```
{{%/* date_i18n "2020-10-20" */%}}
```

will result in

```
{{% date_i18n "2020-10-20" %}}
```
