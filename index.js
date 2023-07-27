const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter up to (3) Characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "input",
        name: "shape",
        message: "Enter a color keyword (OR a hexadecimal number):",
    },
    {
        type: "list",
        name: "image",
        message: "Choose which Pixel Image you would like?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

async function init() {
    const answers = await inquirer.prompt(questions)
    console.log("starting async")


}