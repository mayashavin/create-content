const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')
const yaml = require('js-yaml')
const { join } = require('path')
const { log, clear } = require('console')

const excludePath = path => ['node_modules', '.git', '.nuxt', '.vercel'].reduce((isExclude, folder) => isExclude || path.startsWith(folder), false)

inquirer.registerPrompt('datetime', require('inquirer-datepicker-prompt'))
inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))

class ContentInquirer {
  constructor() {}
  get questions() {
    return [
      {
        name: 'directory',
        type: 'fuzzypath',
        message: 'Save to directory:',
        excludePath,
        itemType: 'directory',
        default: 'src/',
        suggestOnly: true,
      },
      {
        name: 'template',
        type: 'list',
        message: 'Please pick from a template:',
        default: 'post',
        choices: [{
          name: 'Blog post/article',
          value: 'post'
        }, {
          name: 'Product page',
          value: 'product'
        }, {
          name: 'Documentation page',
          value: 'doc'
        }, 
        new inquirer.Separator(),
        {
          name: 'Manual',
          value: 'custom'
        }],
      },
      {
        name: 'type',
        type: 'list',
        message: 'Choose the file type:',
        choices: [{
          name: 'Markdown',
          value: '.md'
        }, {
          name: 'CSV',
          value: '.csv'
        }, {
          name: 'YAML',
          value: '.yaml'
        }],
        default: '.md',
        when: (response) => response.template === 'manual'
      },
    ]
  }
  async prompt({ filename }) {
    const content = fs.readFileSync(join(process.cwd(),'src', 'templates', 'index.yaml'), 'utf8')
    const data = yaml.safeLoadAll(content)

    const starters = await inquirer.prompt(this.questions)

    if (starters.template === 'manual') return starters

    const next = data.find(sect => sect.type === starters.template)

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