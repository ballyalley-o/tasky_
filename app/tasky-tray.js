const electron = require('electron')
const path = require('path')
const { app, Tray, Menu } = electron
const setBounds = require('../src/utils/set-bounds')
//routes
const ROUTE = require('../src/routes/route')
// constants
const { BRAND, EVENTS } = require('../src/constants')
const { QUIT } = require('../src/utils/labels-values')
// utils
const views = require('../src/utils/views')

class TaskyTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath)
    this.mainWindow = mainWindow
    this.setToolTip(BRAND.APP_NAME)
    this.on(EVENTS.CLICK, this.onClick.bind(this))
    this.on(EVENTS.RIGHT_CLICK, this.onRightClick.bind(this))
  }

  onClick(event, bounds) {
    const { x, y } = bounds

    this.mainWindow.isVisible()
      ? this.mainWindow.hide()
      : setBounds(this.mainWindow, x, y)
  }

  onRightClick() {
    const menuConfig = Menu.buildFromTemplate([QUIT(app)])
    this.popUpContextMenu(menuConfig)
  }
}

module.exports = TaskyTray
