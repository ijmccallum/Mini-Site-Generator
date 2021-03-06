# Mini Site Generator

>Because I just wanted a really simple static site generator.

```
npm install mini-site-generator -D
```

or if you want to run it in your command line

```
npm i mini-site-generator -g
```

Make a file, `index.page.js`:

```js
module.exports = function(){
    return '<p>tada!</p>';
}
```

Now run the build, `msg`:

`index.html`:
```html
<p>tada!</p>
```

Simple! The page.js file exports a function that returns a string. That string is then saved into a .html file of the same name. Because the page file is just JavaScript, you can do pretty much anything you want in there!

## Defining src & dist folders

Pass in the relative paths of your source and distribution folders with the `-io` flag, "in" first "out" second:

```
msg -io ./src/ ./dist/
```

Before: 

```
./dist/
./src/
├──index.page.js
├──about.page.js
├──/funFolder/
|  ├──fun.page.js
```

After:

```
./dist/
├──index.html
├──about.html
├──/funFolder/
|  ├──fun.html
./src/
├──index.page.js
├──about.page.js
├──/funFolder/
|  ├──fun.page.js
```

Alternativly you may wish to keep your source and distribution files together. Just pass the same value twice: 

```
msg -io ./docs/ ./docs/
```

Before:

```
./docs/
├──index.page.js
├──about.page.js
├──/funFolder/
|  ├──fun.page.js
```

After:

```
./docs/
├──index.html  - Hello!
├──index.page.js
├──about.html  - hello
├──about.page.js
├──/funFolder/
|  ├──fun.html  - HELLO!!
|  ├──fun.page.js
```

You can even run both if you want to watch the world burn: `msg -io ./src/ ./dist/ -io ./docs/ ./docs/`

---

## Syntax Highlighting
Different editors do this in different ways. VS Code requires [a plugin](https://marketplace.visualstudio.com/items?itemName=bierner.lit-html), Atom does not (according to a quick google). However it happens, in most cases you will need to add the `html` tag:

```js
module.exports = function(){
    return html`
        <p>Me Syntax be Higlighted!</p>
    `; 
}
```

_Note that tags have to be defined functions. To make life a little easier I've added a global defenition for html so it won't throw undefined errors at you._

---

## How does it work?

I'm glad you asked! Time for sudocode.

```js
//pass it a directory
goIntoFolder(folder){

    //get all the .page.js files in this directory
    pages = getAllPagesFrom(folder)
    
    pages.forEach(page){
        //run the "page"
        markup = page()
        //save the result
        saveToDist(markup)
    }

    //now get all the folders in this folder
    folderChildren = getAllFoldersFrom(folder)

    folderChildren.forEach(childFolder){
        //go into each of them and do the same thing
        goIntoFolder(childFolder)
    }
}
```

_The real code is a little different, but that's the essence of it. [Have a read if you wish!](https://github.com/ijmccallum/Mini-Site-Generator/blob/master/build.js)_

---
