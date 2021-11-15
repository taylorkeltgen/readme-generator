// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a name!");
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a username!");
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter an email address!");
      }
    },
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a Title!");
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "What is a description of your project?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a Title!");
      }
    },
  },
  {
    type: "input",
    name: "install",
    message: "What are the steps required to install your project?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter add instructions!");
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide instructions and examples for using the project.",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter add instructions!");
      }
    },
  },
  {
    type: "confirm",
    name: "confirmLicense",
    message: "Do you have a license for the project?",
    default: true,
  },
  {
    type: "list",
    name: "license",
    message: "What type of license do you have?",
    choices: ["Apache", "GNU", "MIT"],
    when: ({ confirmLicense }) => confirmLicense,
  },
  {
    type: "input",
    name: "contribute",
    message: "How can someone contribute to the project?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter add instructions!");
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "How do you test the application?",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter add instructions!");
      }
    },
  },
  //   console.log(questions),
];

// TODO: Create a function to write README file
function writeToFile(data) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", data, (err) => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }
      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
}

// TODO: Create a function to initialize app
function init() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      return generateMarkdown(answers);
    })
    .then((pageMD) => {
      console.log(pageMD);
      return writeToFile(pageMD);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Function call to initialize app
init();
