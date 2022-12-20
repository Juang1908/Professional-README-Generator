// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "Title",
      },

    {
        type:  "input",
        message: "What is your motivation? What problem does it solve?",
        name:   "Description"
      },

    {
        type:  "input",
        message: "Table of Contents:",
        name:   "Table of Contents"
      },

    {
        type:  "input",
        message: "What are the steps required to install your project? Provide a step-by-step description.",
        name:   "Installation"
      },

    {
        type: "list",
        message: "Choose a license",
        name: "licenses",
        choices: [
            "MIT License",
            "Apache License 2.0",
            "Mozilla Public License 2.0",    
        ],
      },

    {
        type:  "input",
        message: "What's your Github username?",
        name:   "Username"
      },

    {
        type:  "input",
        message: "What's your E-mail address?",
        name:   "E-mail"
      },
];


    inquirer.prompt(questions).then((answers) => {
    fs.writeFile("README.json", JSON.stringify(answers), (error) =>
    error ? console.error(error) : console.log("File Written Succesfully"));
});





// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
