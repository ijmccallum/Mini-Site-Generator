let data = require('./index.data.js');
//index file in the root for github pages
module.exports = function(){
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${data.head.title}</title>
        </head>
        <body>
            ${data.body}
        </body>
        </html>
    `;
}