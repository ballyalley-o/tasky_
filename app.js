const path = require('path')
const electron = require('electron')
const { STATE } = require('./src/constants')
const TaskyTray = require('./app/tasky-tray')
const setBounds = require('./src/utils/set-bounds')

const { app, BrowserWindow } = electron

let mainWindow

app.on(STATE.READY, () => {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 300,
    frame: false,
    resizable: false,
    show: false,
  })
  mainWindow.loadURL(`file://${__dirname}/src/index.html`)

  const iconName = process.platform === 'darwin' && 'tasky_icon.png'
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`)

  new TaskyTray(iconPath, mainWindow)
})
