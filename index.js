const prompt = require('prompt-sync')({sigint: true});
var generator = require('generate-password');
const chalk = require("cli-color")
const db = require("quick.db")
let x = prompt(chalk.green("Şifrenin kaç basamaklı olacağını seçin! || >"))
if(x === x){
db.set("qwe",x)
if(isNaN(x)) {
x = prompt(chalk.red("Bir sayı girmeniz gerek! || >"))
}
if(!isNaN(x))
if(x > 100) {
  return console.log(chalk.red("Gireceğiniz sayı 100'den küçük olmalıdır!"))
}
}
var password = generator.generate({
  length: db.fetch("qwe"),
  numbers: true
});
if(!isNaN(x)) {
  console.log(chalk.green(password))
}
