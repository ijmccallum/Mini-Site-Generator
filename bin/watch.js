const fs = require('fs'),
    spawn = require('child_process').spawn,
    debounceMs = 100;

//Takes the name of an npm script, and runs it
function npmRun(script){
    console.log('run ', script);
    
    //Defining the npm command - depends on the platform you're on (https://nodejs.org/api/process.html#process_process_platform)
    var cmd = 'npm';
    if (process.platform === 'win32') {
        cmd = 'npm.cmd';
    }

    const p = spawn('npm.cmd', ['run', script], {
        stdio: 'inherit' // pipe output to the console
    });

    // Print something when the process completes
    p.on('close', code => {
        if (code === 1) {
            console.error(`✖ "npm run ${script}" failed.`);
        } else {
            console.log(`✔ "npm run ${script}" finished, watching for changes...`);
        }
    });
}

//the davidwalsh debounce https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

//debounced version of npmRun
var npmRunD = debounce(npmRun, debounceMs);

//watches the given dir and runs the given script
fs.watch('docsrc', {
    recursive: true // watch everything in the directory
}, (e, filename) => {
    // Use the extension of the file as the npm script name
    const fileExt = filename.split('.').pop();
    switch (fileExt) {
        case 'js':
            npmRunD('build:markup');
            break;
        case 'css':
            npmRunD('build:css');
            break;
        default:
            console.log(`No watch commands written for .${fileExt} files`);
    }
});

console.log('watching for changes...');