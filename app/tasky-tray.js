const electron = require('electron')
const { Tray } = electron
const setBounds = require('../src/utils/set-bounds')

class TaskyTray extends Tray {
  constructor(iconPath, mainWindow) {
    super(iconPath)

    this.mainWindow = mainWindow
    this.on('click', this.onClick)
  }

  onClick(event, bounds) {
    const { x, y } = bounds

    this.mainWindow.isVisible()
      ? this.mainWindow.hide()
      : setBounds(this.mainWindow, x, y)
  }
}

module.exports = TaskyTray
