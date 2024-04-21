// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input

inquirer
.prompt([
    { type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:',
  },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'GNU GPLv3', 'Apache 2.0', 'ISC'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
    },
])
// TODO: Create a function to write README file
.then((data) => {
    const README = 'README.md';
    writeToFile(README, data);
});
function writeToFile(README, data) {
    const content = generateMarkdown(data);

    fs.writeFile(README, content, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md file has been successfully created!');
        }
    });
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
    });
}

// Function call to initialize app
init();
