const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const { writeFile } = require('fs/promises');
const { Circle, Triangle, Rectangle } = require('');

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
            choices: ['triangle', 'circle', 'square'],
            name: 'shape'
        },
        {
            type: 'input',
            message: 'What color do you want the shape to be?',
            name: 'shapeColor'
        }
    ])
    .then(res => {
        // console.log(JSON.stringify(res));
        // console.log(typeof JSON.stringify(res));
        writeFile('./examples/test.svg', JSON.stringify(res)).then(() => console.log("File created successfully"));
    });
