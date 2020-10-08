const excludePath = path => ['node_modules', '.git', '.nuxt', '.vercel'].reduce((isExclude, folder) => isExclude || path.startsWith(folder), false)

module.exports = [
  {
    name: 'directory',
    type: 'fuzzypath',
    message: 'Save to directory:',
    excludePath,
    itemType: 'directory',
    default: '',
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
    {
      name: 'Manual',
      value: 'manual'
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