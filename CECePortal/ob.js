const fs = require('fs');
const path = require('path');
const htmlMinifier = require('html-minifier-terser').minify;
const CleanCSS = require('clean-css');
const javascriptObfuscator = require('javascript-obfuscator');

// Set your custom file paths
const filepathHTML = path.join(__dirname, 'CECePortal');
const filepathCSS = path.join(__dirname, 'CECePortal', 'assets', 'styles');
const filepathJS = path.join(__dirname, 'CECePortal', 'assets', 'scripts');
// const filepathHTML = 'C:\Users\ogwog\Source\Repos\Project\Web Applications\gpsmartapps.github.io\gpsmartapps.github.io\CECePortal'
// const filepathCSS='C:\Users\ogwog\Source\Repos\Project\Web Applications\gpsmartapps.github.io\gpsmartapps.github.io\CECePortal\assets\styles'
// const filepathJS='C:\Users\ogwog\Source\Repos\Project\Web Applications\gpsmartapps.github.io\gpsmartapps.github.io\CECePortal\assets\scripts'

// Optionally, set an output directory
const outputDir = path.join(__dirname, 'ProcessedFiles');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Function to obfuscate JavaScript files
const obfuscateJS = (filePath) => {
    try {
        const js = fs.readFileSync(filePath, 'utf8');
        const obfuscatedJS = javascriptObfuscator.obfuscate(js).getObfuscatedCode();
        fs.writeFileSync(path.join(outputDir, path.basename(filePath).replace('.js', '.js')), obfuscatedJS);
        console.log(`Obfuscated JS: ${filePath}`);
    } catch (err) {
        console.error(`Error processing JavaScript file (${filePath}):`, err);
    }
};

// Function to minify CSS files
const minifyCSS = (filePath) => {
    try {
        const css = fs.readFileSync(filePath, 'utf8');
        const minifiedCSS = new CleanCSS().minify(css).styles;
        fs.writeFileSync(path.join(outputDir, path.basename(filePath).replace('.css', '.css')), minifiedCSS);
        console.log(`Minified CSS: ${filePath}`);
    } catch (err) {
        console.error(`Error processing CSS file (${filePath}):`, err);
    }
};

// Function to minify HTML files
const minifyHTML = (filePath) => {
    try {
        const html = fs.readFileSync(filePath, 'utf8');
        const minifiedHTML = htmlMinifier(html, {
            collapseWhitespace: true,
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
        });
        fs.writeFileSync(path.join(outputDir, path.basename(filePath).replace('.html', '.html')), minifiedHTML);
        console.log(`Minified HTML: ${filePath}`);
    } catch (err) {
        console.error(`Error processing HTML file (${filePath}):`, err);
    }
};

// Main function to process the files
const processFiles = (srcDir, processor) => {
    fs.readdirSync(srcDir).forEach((file) => {
        const filePath = path.join(srcDir, file);
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
            processor(filePath);
        } else if (stats.isDirectory()) {
            processFiles(filePath, processor); // Recursively process subdirectories
        }
    });
};


console.log('HTML Path:', filepathHTML);
console.log('CSS Path:', filepathCSS);
console.log('JS Path:', filepathJS);

if (!fs.existsSync(filepathHTML)) {
    console.error('HTML directory does not exist.');
}
if (!fs.existsSync(filepathCSS)) {
    console.error('CSS directory does not exist.');
}
if (!fs.existsSync(filepathJS)) {
    console.error('JS directory does not exist.');
}


// //Execute the tool on the specified directories
// processFiles(filepathHTML, minifyHTML);
// processFiles(filepathCSS, minifyCSS);
// processFiles(filepathJS, obfuscateJS);