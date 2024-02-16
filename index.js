const fs = require("fs");
const path = require('path'); //# optional, can be useful, don't really need it.
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'pikachu',
            message: 'what is your name?'
        },
        {
            type: 'input',
            name: 'food',
            message: 'what is your favorite food?'
        }
    ])
    .then((answers) => {
        console.log(answers);
        console.log(answers.pikachu);
        const potentialFile = `<div>${answers.pikachu}</div> <div>${answers.food}</div>`;
        fs.writeFile('log.html' , potentialFile, (err) => {
            console.log(err);
        })
    });

}

// function call to initialize program
init();
