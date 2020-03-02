const inquirer = require("inquirer");
const axios = require("axios");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Enter your GitHub Username",
        }
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "text",
            name: "description",
            message: "Describe the project."
        },
        {
            type: "input",
            name: "installation",
            message: "?"
        },
        {
            type: "input",
            name: "usage",
            message: "What is your project going to be used for?"
        }
        {
            type: "input",
            name: "license",
            choices: "What license is your project under?"
        },
        {
            type: "input",
            name: "contributing",
            message: "Enter your LinkedIn URL."
        },
        {
            type: "input",
            name: "tests",
            message: "Enter your LinkedIn URL."
        }
    ]);
}

function generateREADME(answers) {
    return ``
#Project Name
{answers.name}

#Description 
${answers.description}

##Table of contents
* [Installation] (#installation)
* [Usage] (#usage)
* [License] (#license)
* [Contributing] (#contributing)
* [Tests] (#tests)
* [Questions] [#questions]

#Installation
$(answers.installation)

##License
$(answers.license)

##Contributing
$(answers.contributing)

##Tests
$(answers.tests)

##Questions
* My Email: ${response.data.email}
![Profile Image](${response.data.avatar_url})

}

promptUser()
    .then(function (answers) {
        const readME = generateREADME(answers);

        return writeFileAsync("README.md", md);
    })
    .then(function () {
        console.log("Successfully wrote your README!");
    })
    .catch(function (err) {
        console.log(err);
    });

