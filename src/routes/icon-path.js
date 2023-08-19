const path = require('path')
const ROUTE = require('./route')
const views = require('../utils/views')

const iconDirectPath = (dir = __dirname) => {
  const iconName = process.platform === 'darwin' && 'tasky_icon.png'
  const _directPath = path.join(dir, '..')
  const IconPath = views(dir, ROUTE.ICON(iconName))

  return IconPath
}

module.exports = iconDirectPath
