const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    console.log(`Your name is ${name}`);
    rl.question('What is your hobby? ', (hobby) => {
        console.log(`Your hobby is ${hobby}`);
        rl.question('What is your age? ', (age) => {
            console.log(`Your age is ${age}`);
            console.log('Thank you!');
            rl.close();
        });
    });
});