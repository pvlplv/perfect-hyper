const perfectLightColor = "#998FAA"
const perfectDarkColor = "#25252E"

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: perfectLightColor,
    cursorAccentColor: perfectDarkColor,
    cursorBlink: true,
    foregroundColor: perfectLightColor,
    backgroundColor: perfectDarkColor,
    selectionColor: perfectLightColor,
  })
}
