// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
      },

    {
        type:  "input",
        message: "Description?",
        name:   "description"
      },

    {
        type:  "input",
        message: "Table of Contents:",
        name:   "table"
      },

    {
        type:  "input",
        message: "Installation Requirements",
        name:   "installation"
      },

    {
        type: "list",
        message: "Choose a license",
        name: "license",
        choices: [
            "MIT License",
            "Apache License 2.0",
            "Mozilla Public License 2.0",
            "none"    
        ],
      },

      {
        type:  "input",
        message: "Test",
        name:   "test"
      },

      {
        type:  "input",
        message: "Usage?",
        name:   "usage"
      },

    {
        type:  "input",
        message: "What's your Github username?",
        name:   "github"
      },

    {
        type:  "input",
        message: "What's your E-mail address?",
        name:   "email"
      },
];


   






// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() { 
  inquirer.prompt(questions).then((answers) => {
  
fs.writeFile("README.md", generateMarkdown(answers), (error) =>
// IF error exists conosole error. IF it does Not exist console log success 
error ? console.error(error) : console.log("File Written Succesfully"));
})}

// Function call to initialize app
init();
