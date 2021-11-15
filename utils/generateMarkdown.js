// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache":
      return "https://img.shields.io/badge/license-Apache-blue";
    case "GNU":
      return "https://img.shields.io/badge/license-GNU-blue";
    case "MIT":
      return "https://img.shields.io/badge/license-MIT-blue";
    case undefined:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache":
      return "https://choosealicense.com/licenses/apache-2.0/";
    case "GNU":
      return "https://choosealicense.com/licenses/gpl-3.0/";
    case "MIT":
      return "https://choosealicense.com/licenses/mit/";
    case undefined:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
module.exports = (data) => {
  const {
    name,
    github,
    email,
    title,
    description,
    install,
    usage,
    license,
    contribute,
    test,
  } = data;
  console.log(license);
  return `# ${title} 
  ![badge](${renderLicenseBadge(license)})

  ## Description:
  * ${description}
  
  ## Table of Contents:
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation:
  
  * ${install}
  
  ## Usage:
  
  * ${usage}
  * Screenshot
  
  ## Credits:
  
  * Made by: ${name}
  
  ## License:
  
  ![badge](${renderLicenseBadge(license)})
  * [${license} Licensing Info](${renderLicenseLink(license)})
  
  ## How to Contribute to the project:

  * ${contribute}

  ## Tests:

  * ${test}

  ## Questions:

  * [My GitHub](https://github.com/${github})
  * Reach out to me via email for more questions at (${email})

`;
};
