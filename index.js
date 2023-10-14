const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');

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
    ]);
