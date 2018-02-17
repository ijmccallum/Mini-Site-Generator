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
            <title>Mini Site Generator</title>
            <link rel="icon" type="image/png" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAFF0lEQVR42mVVXW8TRxQdm9/AT0CoDyjYFAiEBJKQD4KEUNMfALKEIpr+gEgGgYBA+0AA0TxA4vSpCAECBPEDCqASIfFSIZDIgxEFQoiTxpQUAvbuzJ3Tcze7LinHPpqRPXPOvXfvzBoFvP+CkgJgyFXe24z3khfx4+KkZG34AYCyVKvVxmtBLe/hM7qWNOJ9SkRMwggutMbZiCmBpD1gyHUUHnPOVZwInHX09lDMzs5iYmIC9+/fw/zcnP5e4boxjusAb2iYdk5STrxxamLDwIizqd/fzWsGaS7MkbMkrLWeFMXHjx/9L8PD2Lt3L4aHh325XJZqtSpe9CsQ7nFecqghPYlPxjqXChm4CQJvACjVfYBjoOKkIyQIAhAqitWrV0ejQkUVuoZBOEL3cK8MJHpaJp2kI3Fnc5S1IDwRZ4DE4OnTp+js7MS+ffuwsLCQiCvVTEfPL+feOnE5QIxnyQ0D0Fo1ML0yliEqrpvUIDYES4InT56gv78fe/bsqZvoOqX3Sgip8zJ1G0hjpsxfxnlfsFxAWMRIIlPhoaEhjI6OIgxD3Lx5Ez09PZifn08M6kEASlide5HC0TSMoU6WThVmphHop26guH79OjKZDKanp6MOKhQKePPmzX9rvoaPDSvWuqwRQT5y9E50TAy0PJ8/f9aoo+gPHjyImZmZSJRnAEtLS/XIv0a9zHnDSZFz3ciWrD8wNain//r1a4yMjIBtiQTJOhWKxVZmQU0rUjScP4+D8CqqmzRqxdu3b/HgwQNcuXIFxWIRt27dwp07dzA5OanlUmE11WB0z5fZqK2m8dzo0Y//WCF+9+5dnDhxApcvX8bt27cj3rhxI3rIly5dwvHjx/Hw4cMkG923IovY4INmoAYrSqMYGBiI+OzZMy2RdpN2DrOaidr12LFj2L9/Py5cuKBZJtHrGBPLBpw8F/EgvZroXHHo0CGsXfsNmpu3o7W1jYesC11d3Whra8fWrduwaVMjduxoRXv7TmSzG2h0sV4FT1AOVqyWyBfjDHzirjh8+DC+/XYTBTvQ1NSCbduaOTZzbKFhOzZubGQQRygoOH16iIabUSqVkg70zjsauKIRcfnYQP5vkMlsQEdHF6PsWMGdOzv1Px7As1C8fPkKW7Y04erVqyD0ehHtSErljXVBltoVkeQOSkoUGaggS9GmUSt1zqy0LBtx6tTPULx48SfL1oRr166B8HpO9PBSKmt+O2MMDQqsGiyRdEI+n48NOrXWKqysG6xfn8XZs+egGBv7lSXbjKmpKRA2DC0cNd0BGENJoxeTiC1rq6kHiCNHjqpIkoGynkFLy46oJAcO9LGVB9HQkMHJkz+BkOU7zJetBA2kRq8vGXB0OUuoCeHZopoBu6f7C/FWjT56Bm2t7TTaju7uHpw/P8y6h9o7WhrrQsnZQIwNXNoEQbX+wqH4QECAGBwcdGvWrJXGxq0arbZr1EVN7CJtUW3hM2fOwertT2hpOQu8W37hCGltTW/TkNHb1KNHizRxaedsDsBsZaGCixdHfV9fn/T29squnh6/e9du9H73Pfp/+NGPjhRkcXFRNFtGz8K7Wbrklv75Ow1EFUkxI6Pixnu3/IPzaWFq5Dp4jAGo1GpVzM2VeZpfYZoneq48hzhJrbUKV7zIGCz3ODGghg1tijRhEBqFite59GkpNXHvnvnj8eNV796/zzjv8wDGyRL5QSkipWotGA9D4RlCJpTaKkHVOAZJmoSKfwHmDEZaVNa/DQAAAABJRU5ErkJggg==">
            <link href="https://fonts.googleapis.com/css?family=Bungee" rel="stylesheet">
            <link href="main.css" rel="stylesheet">
        </head>
        <body class="text-center">

            <section class="screen-height clr-white bg-black center-section position-relative z-2">
                <h1>Mini Site Generator</h1>
                <p><em>It's Just <span class="clr-yellow">JavaScript</span></em></p>
            </section>

            <section class="screen-height center-section bg-white position-relative z-2">
                <p class="no-wrap">
                    <span class="v-center"><span class="hide-small">____</span>.page.js</span>
                    <svg class="svg-icon fill-yellow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 493.356 493.356">
                        <title>is transformed into</title>
                        <path d="M490.498,239.278l-109.632-99.929c-3.046-2.474-6.376-2.95-9.993-1.427c-3.613,1.525-5.427,4.283-5.427,8.282v63.954H9.136   c-2.666,0-4.856,0.855-6.567,2.568C0.859,214.438,0,216.628,0,219.292v54.816c0,2.663,0.855,4.853,2.568,6.563   c1.715,1.712,3.905,2.567,6.567,2.567h356.313v63.953c0,3.812,1.817,6.57,5.428,8.278c3.62,1.529,6.95,0.951,9.996-1.708   l109.632-101.077c1.903-1.902,2.852-4.182,2.852-6.849C493.356,243.367,492.401,241.181,490.498,239.278z"></path>
                    </svg class="v-center">
                    <span><span class="hide-small">____</span>.html</span>
                </p>
            </section>

            <section class="screen-height clr-white bg-blue position-relative z-2 center-section text-left">
<pre><code>
module.exports = function(){
    return html&#96;
        &lt;p&gt;It's just <span class="clr-yellow">JavaScript</span>!&lt/p&gt
    &#96;
}
</code></pre>
            </section>

            <section class="screen-height center-section">
                <code class="inline-code">npm install mini-site-generator</code>
            </section>

            <footer>
                <div class="fixed-top-right z-1">
                    <a href="https://www.npmjs.com/package/mini-site-generator" alt="link to npm" class="dev-icon">
                        <svg viewBox="0 0 18 7">
                            <title>npm</title>
                            <path fill="#CB3837" d="M0,0v6h5v1h4v-1h9v-6"></path>
                            <path fill="#FFF" d="M1,1v4h2v-3h1v3h1v-4h1v5h2v-4h1v2h-1v1h2v-4h1v4h2v-3h1v3h1v-3h1v3h1v-4"></path>
                        </svg>
                    </a>
                    <a href="https://github.com/ijmccallum/Mini-Site-Generator" class="dev-icon">
                        <svg viewBox="0 0 74 20">
                            <title>gh-logo-white</title>
                            <g fill-rule="nonzero">
                                <path d="M14.22 8.508H8.017a.29.29 0 0 0-.289.288v3.02c0 .16.13.289.289.29h2.419v3.753s-.543.184-2.05.184c-1.773 0-4.25-.645-4.25-6.065S6.72 3.84 9.14 3.84c2.095 0 3 .367 3.573.545a.292.292 0 0 0 .347-.284l.693-2.918a.269.269 0 0 0-.111-.225C13.408.792 11.986 0 8.39 0 4.25 0 0 1.755 0 10.188c0 8.432 4.864 9.692 8.964 9.692 3.395 0 5.453-1.445 5.453-1.445a.248.248 0 0 0 .094-.219V8.798a.287.287 0 0 0-.291-.29zM46.196 1.02a.287.287 0 0 0-.28-.3h-3.484a.292.292 0 0 0-.307.3v6.713H36.68V1.02a.287.287 0 0 0-.289-.29h-3.485a.292.292 0 0 0-.297.29v18.19a.29.29 0 0 0 .29.292h3.484a.292.292 0 0 0 .289-.292V11.43h5.453v7.783a.29.29 0 0 0 .289.292h3.5a.292.292 0 0 0 .29-.292L46.196 1.02z"></path><ellipse cx="18.559" cy="3.4" rx="2.253" ry="2.265"></ellipse><path d="M20.562 15.371V6.97a.29.29 0 0 0-.289-.29h-3.485a.333.333 0 0 0-.303.325v12.04c0 .354.221.46.508.46h3.14c.345 0 .43-.167.43-.465V15.37zM59.47 6.708h-3.466a.292.292 0 0 0-.289.292v8.918a3.93 3.93 0 0 1-2.13.641c-1.25 0-1.582-.565-1.582-1.783V6.998a.29.29 0 0 0-.29-.292h-3.517a.292.292 0 0 0-.289.292v8.367c0 3.619 2.026 4.504 4.813 4.504 2.286 0 4.13-1.257 4.13-1.257.03.25.073.496.128.741a.306.306 0 0 0 .254.157h2.239a.29.29 0 0 0 .289-.29V6.998a.29.29 0 0 0-.29-.29zM68.947 6.298a6.54 6.54 0 0 0-3.308.875V1.02a.287.287 0 0 0-.29-.29h-3.503a.29.29 0 0 0-.289.29v18.19a.29.29 0 0 0 .29.292h2.43a.29.29 0 0 0 .255-.155c.07-.276.12-.556.147-.839 0 0 1.435 1.351 4.145 1.351 3.184 0 5.01-1.608 5.01-7.218 0-5.61-2.909-6.343-4.887-6.343zM67.58 16.551a4.17 4.17 0 0 1-2.017-.58v-5.767c.55-.314 1.16-.51 1.791-.58 1.249-.112 2.46.264 2.46 3.23-.01 3.132-.553 3.75-2.234 3.7v-.003zM30.602 6.678h-2.62V3.23c0-.131-.067-.204-.219-.204h-3.575c-.139 0-.205.06-.205.193v3.572s-1.79.43-1.91.465a.29.29 0 0 0-.205.278V9.78a.29.29 0 0 0 .27.283h1.845v5.384c0 4 2.819 4.392 4.715 4.392a8.004 8.004 0 0 0 2.08-.341.27.27 0 0 0 .165-.261v-2.461a.295.295 0 0 0-.29-.29c-.151 0-.543.06-.944.06-1.288 0-1.724-.595-1.724-1.366v-5.117h2.62a.29.29 0 0 0 .288-.29V6.97a.287.287 0 0 0-.29-.291z"></path>
                            </g>
                        </svg>
                    </a>
                </div>
            </footer>
        </body>
        </html>
    `;
}