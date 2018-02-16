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
            <link href="main.css" rel="stylesheet">
        </head>
        <body>
            <section class="screen-height clr-white bg-black center-section">
                <h1>Mini Site Generator</h1>
                <p><em>It's Just <span class="clr-yellow">JavaScript</span></em></p>
            </section>

            <section class="screen-height center-section">
                <p>
                    <span class="v-center">home<span class="clr-yellow">.page.js</span></span>
                    <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 493.356 493.356">
                        <path d="M490.498,239.278l-109.632-99.929c-3.046-2.474-6.376-2.95-9.993-1.427c-3.613,1.525-5.427,4.283-5.427,8.282v63.954H9.136   c-2.666,0-4.856,0.855-6.567,2.568C0.859,214.438,0,216.628,0,219.292v54.816c0,2.663,0.855,4.853,2.568,6.563   c1.715,1.712,3.905,2.567,6.567,2.567h356.313v63.953c0,3.812,1.817,6.57,5.428,8.278c3.62,1.529,6.95,0.951,9.996-1.708   l109.632-101.077c1.903-1.902,2.852-4.182,2.852-6.849C493.356,243.367,492.401,241.181,490.498,239.278z"></path>
                    </svg class="v-center">
                    <span>home<span class="clr-yellow">.html</span></span>
                </p>
            </section>

            <section class="screen-height clr-white bg-blue dotted-bg center-section">
<pre><code>
module.exports = function(){
    return html&#96;
        &lt;p&gt;Just a <span class="clr-yellow">JavaScript</span> template literal!&lt/p&gt
    &#96;
}
</code></pre>
            </section>
        </body>
        </html>
    `;
}