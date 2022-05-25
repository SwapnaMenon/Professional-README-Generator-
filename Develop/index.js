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
        message: "Provide a Short Description of your project",
    },
    {
        type: "input",
        name: "motivation",
        message:"What was your motivation",
    },
    {
        type: "input",
        name: "reason",
        message: "Reason behind building this project",
    },
    {
        type: "input",
        name: "Problem",
        message: "Did thsi application solve any issue/problem?",
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
        type: "choice",
        name: "confirmContact",
        message: "What is the best way to contact you?",
        choice: ["email, phone"]
    },
    {
        type: "input",
        name: "userphone",
        message: "Enter your Contact number.",
        when: ({confirmContact}) =>confirmContact==="phone"

    },
    {
        type: "input",
        name: "useremail",
        message: "Enter your Email Address.",
        when: ({confirmContact}) =>confirmContact==="email"
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
