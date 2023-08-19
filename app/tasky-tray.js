const electron = require('electron')
const { app, Tray, Menu } = electron
const setBounds = require('../src/utils/set-bounds')
// constants
const { BRAND } = require('../src/constants')
const { QUIT } = require('../src/utils/labels-values')

class TaskyTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath)

    this.mainWindow = mainWindow
    this.setToolTip(BRAND.APP_NAME)
    this.on('click', this.onClick.bind(this))
    this.on('right-click', this.onRightClick.bind(this))
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
