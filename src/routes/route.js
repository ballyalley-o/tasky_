const path = require('path')

const ROOT = 'src'
const SUBPATH = {
  INDEX: 'index.html',
  ICON: (iconName) => `assets/${iconName}`,
}

const Path = (root, subpath) => {
  return `${root}/${subpath}`
}

const ROUTE = {
  INDEX: Path(ROOT, SUBPATH.INDEX),
  ICON: (iconName) => Path(ROOT, SUBPATH.ICON(iconName)),
}

module.exports = ROUTE
