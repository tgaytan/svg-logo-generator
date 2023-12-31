const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const { writeFile } = require('fs/promises');
const generateSvg = require('./lib/generateSVG');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

inquirer
    .prompt([
        {
            type: 'maxlength-input',
            message: 'What text do you want on the logo?',
            name: 'text',
            maxLength: 3
        },
        {
            type: 'input',
            message: 'What color do you want the text to be?',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'What shape do you want the logo to be?',
            choices: ['triangle', 'circle', 'rectangle'],
            name: 'shape'
        },
        {
            type: 'input',
            message: 'What color do you want the shape to be?',
            name: 'shapeColor'
        }
    ])
    .then(res => {
        writeFile('./examples/logo.svg', generateSvg(res)).then(() => console.log("Genereated logo.svg"));
    });
