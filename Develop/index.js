// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const generateMarkdown= require("./utils/generateMarkdown")
const fs = require("fs") //fs is a buitin sys that has multiple functions in js//

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username", 
        message: "Enter your name",

    },

    {
        type: "input",
        name: "title", 
        message: "whats the title of the project",

    },
    {
        type: "input",
        name: "description",
        message: "describe your project",
    },
    {
        type: "input",
        name: "installation",
        message: "whats the installation process/Instructions?",
    },
    {
        type: "input",
        name: "usage",
        message: "what's your application used for?", 
    },
    {
        type: "list",
        name: "license",
        message: "choose your license.",
        choices: ["MIT","ISC","BOOST"], 
    },
    {
        type: "confirm",
        name: "confirmContact",
        message: "What is the best way to contact you?",
        choice: ["email, phone"]
    },
    {
        type: "input",
        name: "userphone",
        message: "Enter your Contact number.",
        when: ({confirmContact}) =>confirmContact
    },
    {
        type: "input",
        name: "useremail",
        message: "Enter your Email Address.",
        when: ({confirmContact}) =>confirmContact
    },
    {
        type: "input",
        name: "githubusername",
        message: "Enter your Github Username .",
    },
    {
        type: "input",
        name: "githubrepo",
        message: "Enter your Github repo.",
    },
// possible questions: test. contribution//
// note for further understanding:browse sheilds.io//

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data) // file name would be the destination//

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(info=>{
        console.log(info) 
        writeToFile("./Dest/readme.md", generateMarkdown(info))
    })
}


// Function call to initialize app
init();
