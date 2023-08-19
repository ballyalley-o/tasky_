const electron = require('electron')
const path = require('path')
// constants and values
const { BRAND, EVENTS } = require('../src/constants')
const MAIN = require('../src/utils/window-values')
// utils
const views = require('../src/utils/views')

const { app, BrowserWindow } = electron

class MainWindow extends BrowserWindow {
  constructor() {
    super(MAIN)
    this.on(EVENTS.BLUR, this.onBlur.bind(this))
    this.loadURL(this.onDirectPath())
  }
  onBlur() {
    this.hide()
  }

  onDirectPath() {
    const _directPath = path.join(__dirname, '..')
    console.log(_directPath)
    return views(_directPath)
  }
}

module.exports = MainWindow
