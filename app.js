const path = require('path')
const electron = require('electron')
const { STATE } = require('./src/constants')
const MAIN = require('./src/utils/window-values')
const TaskyTray = require('./app/tasky-tray')
const MainWindow = require('./app/main-window')
const iconDirectPath = require('./src/routes/icon-path')

const { app } = electron

let mainWindow
let tray

app.on(STATE.READY, () => {
  app.dock.hide()
  mainWindow = new MainWindow()
  // mainWindow.on(STATE.CLOSE, () => (mainWindow = null))

  const iconName = process.platform === 'darwin' && 'tasky_icon.png'
  const iconPath = path.join(__dirname, `./src/assets/${iconName}`)

  tray = new TaskyTray(iconPath, mainWindow)
})
