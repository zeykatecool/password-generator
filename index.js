const prompt = require('prompt-sync')({sigint: true});
var generator = require('generate-password');
const chalk = require("cli-color")
const db = require("quick.db")
let x = prompt(chalk.green("Type how many digits the password will be! || >"))
if(x === x){
db.set("qwe",x)
if(isNaN(x)) {
x = prompt(chalk.red("You must enter a number! || >"))
}
if(!isNaN(x))
if(x > 100) {
  return console.log(chalk.red("Number must be less than 100!"))
}
}
var password = generator.generate({
  length: db.fetch("qwe"),
  numbers: true
});
if(!isNaN(x)) {
  console.log(chalk.green(password))
}
