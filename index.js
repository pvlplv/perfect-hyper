const perfectCursorColor = "rgba(153,143,170,0.8)"
const perfectForegoundColor = "#998FAA"
const perfectBackgroundColor = "#25252E"
const perfectSelectionColor = "rgba(37,37,46,0.8)"

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    cursorColor: perfectCursorColor,
    cursorAccentColor: perfectBackgroundColor,
    cursorShape: "BEAM",
    cursorBlink: "true",
    foregroundColor: perfectForegoundColor,
    backgroundColor: perfectBackgroundColor,
    selectionColor: perfectSelectionColor,
    showWindowControls: "left",
  })
}
