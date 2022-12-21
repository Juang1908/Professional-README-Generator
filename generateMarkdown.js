// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT License"){
    return "![mit](https://img.shields.io/badge/license-MIT-blue)"
  }else if(license === "Apache License 2.0"){
    return "![apache](https://img.shields.io/badge/license-Apache%202.0-green)"
  }else if (license === "Mozilla Public License 2.0"){
    return "![mozilla](https://img.shields.io/badge/license-Mozilla%20Public%20License%202.0-red)"
  }else {return " "}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "none"){
    return " "
  } else { return "[License](#license)"}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "none"){
    return " "
  } else { 
    return`
    ### License 
    For more information about this license please visit
    [${license}](https://opensource.org/)
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
[Description](#description)
[Installation](#installation)
[Test](#test)
[Usage](#usage)
[E-mail](#email)
[Github](#github)
${renderLicenseLink(data.license)}

### Description
${data.description}

### Installation
${data.installation}

### Test
${data.test}

### Usage
${data.usage}

### E-mail
${data.email}

### Github
${data.github}

${renderLicenseSection(data.license)}


`;
}

module.exports = generateMarkdown;
