# Dopamine
Npm driven, **lightweight** boilerplate to bootstrap frontend projects.
Packed with all the things you need, so that you can focus on what matters: **writing HTML, CSS & JavaScript**!

Dopamine speeds up your workflow by provinding you with a pre-configured templating engine (helps you be smart, [DRY](https://encyclopedia.thefreedictionary.com/Don%27t+Repeat+Yourself)), sane linting for scripts and styles, a local development server and loads of performance optimisations to make your site lightning fast.

## What's included
* [EJS](https://ejs.co/), a pure JavaScript templating engine
* build styles from CSS or Less files and automatically add prefixes to CSS properties that need to be
* manage assets versioning through native npm version (just use `npm version [major|minor|pacth]` as you normally would)
* bundle & compile ES6+ JS into browser compatible JS (you can `import` or `require` modules straight from npm)
* export a JS module for modern browsers and a classical script for legacy ones
* minify HTML, CSS and JS
* pre-compress HTML, CSS, JS & SVG files in Gzip and Brotli
* optimise images and create WebP versions for compatible browsers
* local developement server

In addition, I also added a very convenient [Git commit template](https://github.com/Buzut/git-emojis-hook) that should help a lot.

## How to use?
Given the following file structure:

```
/
  templates/ --> *.ejs (can be raw html)
    partials/ --> partial templates (won't be rendered directly)
  styles/ --> *.less (with `main.less` being the entry point, can be raw CSS)
  scripts/ --> *.js (with `main.js` being the entry point)
```

Compiled templates are rendered in the `public/` directory. `index.ejs` would then end up in `public/index.html`. Directory structure is preserved. For instance, you could have a structure with a `fr/` subdirectory for a french version of the website accessible via `my-site.com/fr/`.

```
/
  templates/ --> *.ejs (can be raw html)
    partials/ --> partial templates (won't be rendered directly)
    fr/ --> directory for a french version of the site, would be accessible through my-site.com/fr/
      partials/ --> can contain partials specific to this directory (won't be directly rendered)
      index.ejs
      a-propos.ejs
```

Processed CSS will be outputed to `public/styles/main-1.0.0.min.css` and processed JavaScript to `public/scripts/main-1.0.0.esm.min.js` & `public/scripts/main-1.0.0.iife.min.js`.

Note that styles, scripts and images contained in subdirectories won't be copied.

* `npm run build` to build the site
* `npm run watch` to start the dev server and re-build on file update
* `npm run serve` to start the integrated server on the built files

### SASS
There is currently no SASS version, but it's just a few settings to modify. If you create a SASS fork, let me know, I'll be happy to link to it.

### Apache _.htaccess_
There is a "sample-htaccess" file. It contains Apache boilerplate mainly to improve performance:

* take advantage of H2 Server Push
* serve pre-compressed Gzip or Brotli files
* serve WebP images when supported

It will also rewrite urls for pretty urls without extension.

### Requirements
Node.js >= 12 is required for the compression module.

## Contributing
There's sure room for improvement, so feel free to hack around and submit PRs!

That would be cool for instance if we could have proper HTML emails. So if you have the skills to code HTML emails, don't hesitate to give me a helping hand!

Please just follow the style of the existing code, which is [Airbnb's style](http://airbnb.io/javascript/) with [minor modifications](.eslintrc).

To maintain things clear and visual, please follow the [Git commit template](https://github.com/Buzut/git-emojis-hook).
