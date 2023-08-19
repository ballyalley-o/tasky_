const QUIT = (app) => {
  return {
    label: 'Quit',
    click: () => app.quit(),
  }
}

module.exports = { QUIT }
