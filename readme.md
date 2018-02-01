# Marvelously Minimal Static Site Generator

Give it a starting point, eg `./docs`. It'll look for any file with `<filename>.page.js`, run it, and save the returned value to `<filename>.html`

---

## High level example

/docs
 - index.page.js
 - about.page.js

would turn into

/docs
 - index.html
 - index.page.js
 - about.html
 - about.page.js

---

## Low level example

inside a `<filename>.page.js` file
```
module.exports = function(){
    return html`
        <p>Anything goes!</p>
        <p>It's just JavaScript so you can do whatever you want.</p>
        <p>Like import data from another file, or even an API!</p>
        <p>Go on. Live your dreams. You're in Neverland now.</p>
    `; 
}
```

_Note the html tag isn't doing anything fancy for the code, it's just there to give the editor a heads up to use html syntax highlighting. Speaking of which..._

---

## syntax highlighting
the `html` tag allows editors to apply html syntax highlighting. Different editors will need different things to get this going:

 - VS Code requires a plugin: https://marketplace.visualstudio.com/items?itemName=bierner.lit-html
 - Atom does it automatically?
 - Sublime???
 - Another editor???

---

## TODOs

 - [ ] a11y linting... pa11y?
 - [ ] get entry from command line
 - [ ] multiple entry points... is it needed? Many microsites... yeah, go for it!
 - [ ] default "inline" files, or give a dist folder to render to (keep in mind multiple entries)