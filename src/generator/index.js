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

    const dirPath = join(process.cwd(), options.directory)    

    if (!isDirExist) {
      fs.mkdirSync(dirPath, { recursive: true })
    }

    const extension = options.template === 'manual' ? options.type : options.template.substring(options.template.lastIndexOf('.'))
    let contents = ''

    if (options.template !== 'manual') {
      const template = fs.readFileSync(join(__dirname, 'templates', options.template), 'utf8')
      contents = ejs.render(template, {
        options
      })
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