let data = require('./index.data.js');
//index file in the root for github pages

module.exports = function(){
    return html`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>${data.head.title}</title>
            <link href="https://fonts.googleapis.com/css?family=Bungee" rel="stylesheet">
            <link href="/main.css" rel="stylesheet">
        </head>
        <body>
            <section class="screen-height text-center">
                <h1>Mini Site Generator</h1>
                <p><em>It's Just JavaScript</em></p>
            </section>

            <section class="screen-height">
            </section>
        </body>
        </html>
    `;
}