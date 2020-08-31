# Easy Setup (Hugo + Netlify + Forestry)
Build your website with airspace hugo theme by following this easy steps (No Coding Required)

<a href="http://bit.ly/meghna-hugo-installation" target="_blank" title="meghna hugo installation" rel="nofollow"><img width="100%" src="https://user-images.githubusercontent.com/37659754/70844354-4028be00-1e6a-11ea-8d84-02e9a25e7db8.png"></a>

In this tutorial we will show you to make your website live without buying any hosting and touching a single line of code. We made this tutorial based on [meghna hugo](https://github.com/themefisher/meghna-hugo) but you can setup everithing like this.

### What you need !!

1. Git acccount (Ex: Github, Gitlab etc ) . In our case we use github.
2. [Netlify](https://bit.ly/netlify-account) account to host files and add custom domain .
3. [Forestry](https://bit.ly/forestry-account) account to maintain whole project without code.


### Step 1 : Fork or Clone repository

First we will fork this [airspace hugo](https://github.com/themefisher/airspace-hugo) template.

### Step 2 : Add your repository in Forestry

Go to your [forestry](https://bit.ly/forestry-account)  account and click on `import your site now`. declare your config.toml file [`exampleSite`] and fill up basic settings .

**Or just click this button for one click installation** [![import to forestry](https://assets.forestry.io/import-to-forestryK.svg)](https://app.forestry.io/quick-start?repo=themefisher/airspace-hugo&engine=hugo&version=0.60.1&config=exampleSite)

Now mark everything as done, then go to configuration to change the base url . You can put any url but this have to similar as netlify . So for now put a name which you are going to put in netlify as netlify subdomain.

### Step 3 : Setup and host website with Netlify

Here comes the last step . Go to your [netlify](https://bit.ly/netlify-account) account and click add new site . Choose your git repository to import your website in netlify .  And now you can see the forked `airspace hugo` theme. select it and follow the steps. Then go to `site settings` for change the site name and put your subdoamin name here what you puted on forestry as base url. save it and go to `deploy` from top menu, Wait a while and click on `site preview` or just simply go to the subdomain you puted as base url. **BOOM! Your site is live.** Now you can go to forestry and add, remove or customize every setting and content.

> If you face any issue regarding the installation feel free to onen [open a new issue](https://github.com/themefisher/airspace-hugo/issues)

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Main Features](#main-features)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions)
- [Licensing](#licensing)
- [More Hugo Themes](https://themefisher.com/hugo-themes/)

## Demo

| Portfolio  | Service  | Blog  | Contact  |
|---|---|---|---|
| ![Portfolio page](https://user-images.githubusercontent.com/37659754/53851035-78e85c80-3fe7-11e9-8589-8a0524071d60.png)  | ![Service page](https://user-images.githubusercontent.com/37659754/53851287-789c9100-3fe8-11e9-9eab-6f1df32d521b.png) | ![Blog page](https://user-images.githubusercontent.com/37659754/53851263-66baee00-3fe8-11e9-974c-fea4d5dabd95.png) | ![Contact page](https://user-images.githubusercontent.com/37659754/53851317-8f42e800-3fe8-11e9-8ba5-8a5a58b4ec1e.png)

**The images are only for demonstration purpose, Please don't use those images.**

[Live Demo](http://demo.themefisher.com/airspace-hugo/).

## Installation
At the top we have shown an easy hugo installation. but still if you think you want to go with the traditional way then use the following commands:

```
$ git clone git@github.com:themefisher/airspace-hugo.git
$ cd airspace-hugo/exampleSite/
$ hugo server --themesDir ../..
```

[Full Documentation](https://documentation.themefisher.com/docs/airspace-hugo/).

## Main features

* **SEO Friendly** All codes are seo friendly. There is fields to put meta data and other seo parameters in every pages.
* **Multi Language** We have multi language support in premium version . Right now there is two language include in the theme , those are French and English. If you need more we can help you out.
* **Google insights score 90** To rank higher in google you have score your webpage above 90 . Our template meets that requirments [Google score](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fdemo.themefisher.com%2Fairspace-hugo%2F)

* **Google Analytics** You can add you google analytics code in theme config file to connect with your google anlytics account .

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Airspace Template. Please Search [existing issues](https://github.com/themefisher/airspace-hugo/issues). It’s possible someone has already reported the same problem.
If your problem or idea is not addressed yet, [open a new issue](https://github.com/themefisher/airspace-hugo/issues)

## Technical Support or Questions

If you have questions or need help integrating the product please [contact us](mailto:themefisher@gmail.com) instead of opening an issue.  

## Licensing

This Theme is released under [Creative Commons Attribution 3.0 (CC-BY-3.0) License](https://creativecommons.org/licenses/by/3.0/)
If you want to remove the credit simply make a [donation](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GSG5G2YL3E5V4), so that we can run our contribution to hugo community.

## Hire Us
We are available for Hiring of your next HUGO project. Drop Us a mail [themefisher@gmail.com](mailto:themefisher@gmail.com)


| [![Mega-Bundle-HUGO](https://gethugothemes.com/wp-content/uploads/edd/2019/09/Mega-Bundle-HUGO.png)](https://themefisher.com/products/hugo-mega-bundle/) | [![agen](https://gethugothemes.com/wp-content/uploads/edd/2019/09/agen-hugo-theme.jpg)](https://gethugothemes.com/products/agen-hugo/) | [![redlab](https://gethugothemes.com/wp-content/uploads/edd/2019/09/redlab-hugo-thumbnail.jpg)](https://gethugothemes.com/products/redlab-hugo/) |
|:---:|:---:|:---:|
| **Hugo Mega Bundle**  | **Agen**  | **Red Lab**  |
| [![Airspace](https://gethugothemes.com/wp-content/uploads/2019/06/hugo-theme-Airspace.jpg)](https://gethugothemes.com/products/airspace-hugo-theme/) | [![Biztrox](https://gethugothemes.com/wp-content/uploads/2019/12/Biztrox.png)](https://gethugothemes.com/products/hugo-business-theme/) | [![Bexer](https://gethugothemes.com/wp-content/uploads/2019/06/hugo-theme-bexer.jpg)](https://gethugothemes.com/products/bexer-hugo-theme/) |
| **Airspace** | **Biztrox** | **Bexer** |
| [![Timer](https://gethugothemes.com/wp-content/uploads/edd/2019/07/Timer.jpg)](https://gethugothemes.com/products/timer-hugo-theme/) | [![Enov](https://gethugothemes.com/wp-content/uploads/2019/09/enov-business-template.jpg)](https://gethugothemes.com/products/enov-hugo/) | [![all](https://gethugothemes.com/wp-content/uploads/2019/12/get-more-hugo-themes.png)](https://gethugothemes.com/shop/) |
| **Timer** | **Enov** | **More Hugo Themes** |