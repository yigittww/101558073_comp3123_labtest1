const fs = require('fs');
const path = require('path');

const logDirectory = path.join(__dirname, 'Logs');

// Check if the directory exists before attempting to remove files
if (fs.existsSync(logDirectory)) {
    const files = fs.readdirSync(logDirectory);

    // Output the file names to delete and remove them
    files.forEach(file => {
        console.log(`delete files...${file}`);
        fs.unlinkSync(path.join(logDirectory, file));
    });

    // Remove the Logs directory itself
    fs.rmdirSync(logDirectory);
}