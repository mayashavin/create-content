#!/usr/bin/env node

const chalk = require('chalk')
const { log, clear } = require('console')
const figlet = require('figlet')
const ContentInquirer = require('./inquirer')
const Generator = require('./generator')

clear()

console.log(chalk.green(
  figlet.textSync('Content', { horizontalLayout: 'full' })
))

const run = async () => {
  const args = process.argv.slice(2);

  if (!args || !args.length) {
    log(chalk.red('🛑\ You need to provide a file name!!! Try run again "create-content you-file-name"'))
    return
  }

  log(chalk.yellow(`Tell me your needs and I will create your content file accordingly\ 😉`))
  log('')

  const filename = args[0]

  //Prompt
  const inquirer = new ContentInquirer()
  const answers = await inquirer.prompt({ filename })

  //Generate
  const generator = new Generator()
  generator.create(filename, answers)
}

run()