// TODO: Create a function that returns a license badge based on which license is passed in
 // If there is no license, return an empty string
 
function renderLicenseBadge(license) {
    if (license == 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (license == 'Apache 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (license == 'GPL 3.0') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license == 'BSD 3') {
        return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    } else {
        return ''
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license == 'MIT') {
        return `[MIT License](https://opensource.org/licenses/MIT)`
    } else if (license == 'Apache 2.0') {
        return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
    } else if (license == 'GPL 3.0') {
        return `[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license == 'BSD 3') {
        return `[BSD 3 License](https://opensource.org/licenses/BSD-3-Clause)`
    } else {
        return ''
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return `This project is licensed under the ${license} license.`
    } else {
        return ''
    }
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
Write your installation instructions here.

## Usage
Write usage information here.

## License
[![License](https://img.shields.io/badge/license-${data.license}-blue.svg)](LICENSE)
This application is covered under the ${data.license} license.

## Contributing
Write contribution guidelines here.

## Questions
For additional questions, please contact ${data.email}.
GitHub: [${data.github}](https://github.com/${data.github})
`;
}



module.exports = generateMarkdown;
