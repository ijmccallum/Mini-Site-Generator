
//1.
// - get a tree of the pages, this is the key bit 
// - start in the given directory, 
// - for all .page.js files

// - run the function the page.js file exports
// - render the return value into an html file 


const fs = require('fs');

fs.readdir('./', (err, files) => {
  files.forEach(file => {
    if (file.indexOf('.page.js') !== -1) {
        console.log(file);
        let page = require('./' + file);
        let markup = page();
        console.log('markup: ', markup);
    }
  });
})