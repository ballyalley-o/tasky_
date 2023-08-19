const path = require('path')
const electron = require('electron')
const { STATE } = require('./src/constants')
const MAIN = require('./src/utils/window-values')
const TaskyTray = require('./app/tasky-tray')
const setBounds = require('./src/utils/set-bounds')

const { app, BrowserWindow } = electron

let mainWindow
let tray

app.on(STATE.READY, () => {
  mainWindow = new BrowserWindow(MAIN)
  mainWindow.loadURL(`file://${__dirname}/src/index.html`)

  const iconName = process.platform === 'darwin' && 'tasky_icon.png'
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`)

  tray = new TaskyTray(iconPath, mainWindow)
})
