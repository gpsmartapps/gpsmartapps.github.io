const fs = require('fs');
const path = require('path');
const htmlMinifier = require('html-minifier-terser').minify;
const CleanCSS = require('clean-css');
const javascriptObfuscator = require('javascript-obfuscator');

// Set your custom file paths
const filepathHTML = path.join(__dirname, 'CECePortal');
const filepathCSS = path.join(__dirname, 'CECePortal', 'assets', 'styles');
const filepathJS = path.join(__dirname, 'CECePortal', 'assets', 'scripts');

// Create the directories if they don't exist
const createDirectoryIfNotExists = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
        console.log(`Directory created: ${dirPath}`);
    }
};

// createDirectoryIfNotExists(filepathHTML);
// createDirectoryIfNotExists(filepathCSS);
// createDirectoryIfNotExists(filepathJS);

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
        fs.writeFileSync(path.join(outputDir, path.basename(filePath).replace('.js', '.obf.js')), obfuscatedJS);
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
        fs.writeFileSync(path.join(outputDir, path.basename(filePath).replace('.css', '.min.css')), minifiedCSS);
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
        fs.writeFileSync(path.join(outputDir, path.basename(filePath).replace('.html', '.min.html')), minifiedHTML);
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

// Execute the tool on the specified directories
processFiles(filepathHTML, minifyHTML);
processFiles(filepathCSS, minifyCSS);
processFiles(filepathJS, obfuscateJS);
