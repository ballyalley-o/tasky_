const setBounds = (main, x, y) => {
  const { height, width } = main.getBounds()
  return (
    main.setBounds({
      x: x - width / 2,
      y,
      height,
      width,
    }),
    main.show()
  )
}

module.exports = setBounds
