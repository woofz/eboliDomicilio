# Domicilio Boilerplate
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Netlify Status](https://api.netlify.com/api/v1/badges/928e6869-c807-4fae-9168-9e556e67bf00/deploy-status)](https://app.netlify.com/sites/ferraradomicilio/deploys)

> If you want to make the same proj for your city, the only thing I ask is to fork the [main repo](https://github.com/tomma5o/ferraraDomicilio) to make it yours.
> Thanks!

## Quick Start

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# test the production build locally
npm run serve
```

## How to

1. Change the specific label related to me and my city are inside the `.env` file, if you change that the js will be clean ;)
2. Change the city in the `template.html` file
3. Change the **name** and **short_name** inside `manifest.json`
4. Change the **name** inside `package.json`

## Data source

All the data are fetched from this gist:
https://gist.githubusercontent.com/woofz/1c2b3d96dea6eeefb1607b0c0246e00c/raw/EboliDomicilio.json

When you add your gist url remember to delete the last hash because points directly to a specific commit, otherwise you would get an outdated version, so for example:

```
remove the second hash ------------------------------------┐
                                                         
https://gist.githubusercontent.com/woofz/<hash>/raw/<removeThisHash>/EboliDomicilio.json
```

## Netlify deploy & configuration

> The site is developed with some specific https://netlify.com APIs.

### Deploy configuration steps

1. Connect your GitHub account to Netlify
3. Select the project
2. In Settings → Build & Deploy → Set **Build command** to : **_npm run build_**
3. In Settings → Build & Deploy → Set **Publish directory** to : **_build_**

### Google analytics setup

In **Settings** → Build & Deploy → Post processing → Snippet injection: you can add here your GAnalytics snippet

### Contact Form

In **Form** you can find all the submissions.<br>There are two type of submission: **Verified Submission** and **Spam Submission** sometimes they end up in spam
