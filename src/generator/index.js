const fs = require('fs')
const chalk = require('chalk')
const { log } = require('console')
const { join } = require('path')
const { Spinner } = require('clui')
const ejs = require('ejs')
// const ContentInquirer = require('../inquirer')

class Generator {
  constructor(){}
  async create(file, options) {
    if (!file) return;

    const isDirExist = fs.existsSync(join(process.cwd(), options.directory))

    // if (isDirExist) {
    //   const inquirer = new ContentInquirer()
    //   const response = await inquirer.prompt({
    //     type: 'confirm',
    //     default: true,
    //     name: 'overwrite',
    //     message: 'A file with same name exists. Do you want to overwrite it?',
    //   })
  
    //   if (!response.overwrite) {
    //     console.log('👋\ Aborted! Bye bye!')
    //     console.log('')
    //     return;
    //   }
    // }
      
    const spinner = new Spinner(`${isDirExist ? 'Merging' : 'Creating'} content file...`, ['⣾','⣽','⣻','⢿','⡿','⣟','⣯','⣷'])

    spinner.start()

    const template = fs.readFileSync(join(process.cwd(), 'src/templates', options.template), 'utf8')
    const extension = options.template.substring(options.template.lastIndexOf('.'))
    const dirPath = join(process.cwd(), options.directory)
    const contents = ejs.render(template, {
      options
    })

    if (!isDirExist) {
      fs.mkdirSync(dirPath, { recursive: true })
    }

    fs.writeFileSync(join(dirPath, `${file}${extension}`), contents)

    spinner.stop()

    log('')
    log(chalk.yellow(`🚀\ File "${file}" created successfully! Enjoy\ ❤️\!`))
    log('')
  }
  template(options) {}
}

module.exports = Generator