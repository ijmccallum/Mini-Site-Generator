
//1.
// - get a tree of the pages, this is the key bit 
// - start in the given directory, 
// - for all .page.js files

// - run the function the page.js file exports
// - render the return value into an html file 


const fs = require('fs');
const minify = require('html-minifier').minify;
const minOps = {collapseWhitespace: true};
const entry = './docs/'; //end in a slash

const enterDirectory = function(dir){
    fs.readdir(dir, (err, files) => {
        files.forEach((file) => {
            if (isDirectory(dir + file)) {
                if (file == 'node_modules' || 
                    file == '.git') { return; }
                enterDirectory(dir + file + '/');
            }

            if (file.indexOf('.page.js') !== -1) {
                buildFile(dir, file);
            }
        });
    });
}

const buildFile = function(dir, file){
    let page = require(dir + file);
    let markup = minify(page(), minOps);
    let filename = file.replace('.page.js', '.html');
    fs.writeFile(dir + filename, markup, function(err) {
        if(err) { return console.log(err); }
    }); 
}

const isDirectory = function(source){
    return fs.lstatSync(source).isDirectory();
}

enterDirectory(entry);