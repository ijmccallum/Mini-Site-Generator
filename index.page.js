import data from './index.data.js';

export default function(){
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