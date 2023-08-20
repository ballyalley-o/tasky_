const path = require('path')
const electron = require('electron')
const MAIN = require('./src/utils/window-values')
const TaskyTray = require('./app/tasky-tray')
const MainWindow = require('./app/main-window')
// coonstants
const { STATE, CHANNELS } = require('./src/constants')

const { app, ipcMain } = electron

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

ipcMain.on(CHANNELS.UPDATE_TIMER, (event, timeLeft) => {
  tray.setTitle(timeLeft)
})
