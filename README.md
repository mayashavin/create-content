# create-content
<!-- badge -->
[![npm version](https://img.shields.io/npm/v/create-content.svg)](https://www.npmjs.com/package/create-content)
[![npm download](https://img.shields.io/npm/dt/create-content.svg)](https://www.npmjs.com/package/create-content)
[![npm license](https://img.shields.io/npm/l/create-content.svg)](https://www.npmjs.com/package/create-content)
<!-- endbadge -->

![Create a content file automatically](https://res.cloudinary.com/mayashavin/image/upload/v1602193382/create-content.jpg)

A CLI tool to auto generate a content file (Markdown, CSV, YAML) based on available templates or customized templates. 

> Designed especially for working with [Nuxtjs](https://nuxtjs.org) and [Content module](https://content.nuxtjs.org).

## Features

* Create a content file based on an **existing** templates:
  
  * Blog post in [Markdown format](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) (.md), with YAML formatter blocks to indicate some basic information about the post

    * `title`
    * `description`
    * `image`
    * `tags`
    * `category`
    * `publishedAt`
  
  Inspired by [Nuxt Content's layout](https://content.nuxtjs.org/writing#front-matter)

  * Documentation page followed [Theme Docs standards](https://content.nuxtjs.org/themes/docs) in [Markdown format](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) (.md), with YAML formatter blocks consisting the following fields:
    * `title`
    * `description`
    * `position`
    * `version`
    * `category`
    * `fullscreen`
    * `menuTitle`
    * `subtitle`
    * `badge`
  
  * Product info in [Markdown format](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) (.md), with YAML formatter blocks to indicate some basic information about the product:

    * `title`
    * `description`
    * `image`
    * `price`
    * `tags`
    * `category`

* Create new content file manually with the following format:
  * `.md` - Markdown
  * `.csv` - CSV
  * `.yaml` - YAML

## Coming soon

1. Create and save new template per project (or globally)
2. Create new content file based on the new template.

## Contributing

1. Clone this repository
2. Install dependencies `npm install`
3. Develop
4. Test in local project using `npm link`

    * Run `npm link`
    * Go to the target project, run `npm link create-content`
    * You now can test if the tool works locally

Maintained by [Maya Shavin](https://twitter.com/MayaShavin)
