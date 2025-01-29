const os = require('os');
const saudacao = require('./util')
const chalk = require('chalk')

console.log(chalk.white('Sistema operacional:', os.platform()));
console.log(chalk.red('Tempo ligado: ', os.uptime()));
console.log(chalk.green('Versão: ', os.release()));
console.log(chalk.yellow('Memoria Livre', os.freemem()));

const nome = saudacao('Edson Santana');
    console.log(chalk.blue(nome));

