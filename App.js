var chalk = require('chalk'),
log = require('log-update');
module.exports = text => {
var frames = [chalk.red(text),chalk.green(text),chalk.blue(text),chalk.magenta(text)]
setInterval(() =>{
log(`\n ${frames[Math.floor(Math.random() * frames.length)] } \n`)
},100);

}