//core modules
//file system
const fs = require('fs');

//menuliskan string ke file (Synchronous)
// fs.writeFileSync('test.txt', 'Hello World synchronous!');
fs.readFile('test.txt', 'utf-8', (err,data) => {
    if (err) throw err;
    fs.writeFileSync('test.txt', data+('\nHello World synchronous!'));
})