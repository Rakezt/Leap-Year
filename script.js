var readlineSync = require('readline-sync')
var chalk = require("chalk");
var userName = readlineSync.question("Naam dedo bhaiya.....")
var potato = "potato"

console.log("Welcome " + (userName) + ", to the bandhar club");

var userDOB = readlineSync.question("please input year of birth plaese.....")

if ((userDOB % 4 === 0) && (userDOB % 100 === !0) || (userDOB % 400 === 0)) {
  console.log(chalk.greenBright("You are born on a leap year"));
} else if (userDOB === "potato") {
  console.log(chalk.redBright("You are Fake"))
} else {

  console.log(chalk.bgBlueBright("You are not born on a leap year"))
}

