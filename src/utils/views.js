const ROUTE = require('../routes/route')

const views = (PATH, route = ROUTE.INDEX) => {
  return `file://${PATH}/${route}`
}

module.exports = views
