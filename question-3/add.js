const fs = require('fs');
const path = require('path');

// Build the directory path
const logDirectory = path.join(__dirname, 'Logs');

// Create a Logs directory if it does not exist
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory);
}

// Change the current process to the new Logs directory
process.chdir(logDirectory);

// Create 10 log files and write text into them
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file number ${i}`);
    console.log(fileName);
}