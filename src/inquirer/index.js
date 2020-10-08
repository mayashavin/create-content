const inquirer = require('inquirer')
const chalk = require('chalk')
const { log, clear } = require('console')
const templateDatas = require('../generator/templates/list')
const basics = require('../generator/templates/basics')

inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))
inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))

class ContentInquirer {
  constructor() {}
  /**
   * Inquire questions for setting up the file
   * @param {Object} options - contains filename given from the console 
   * @returns {Object}
   */
  async prompt({ filename }) {
    const starters = await inquirer.prompt(basics)

    if (starters.template === 'manual') return starters

    const next = templateDatas.find(sect => sect.type === starters.template)

    clear()
    log(chalk.yellow(`🗒️\ Setup basic content for ${next.title.toLowerCase()} "${filename}":`))
    const answers = await inquirer.prompt(next.fields)

    return {
      ...starters,
      ...answers,
      template: next.template
    }
  }
}

module.exports = ContentInquirer