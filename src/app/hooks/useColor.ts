const useColor = () => {
  const randomInteger = () => Math.floor(Math.random() * 180)

  const generateColor = () => {
    const red = randomInteger()
    const green = randomInteger()
    const blue = randomInteger()
    const primary = `rgba(${red}, ${green}, ${blue}, 0.88)`
    const secondary = `rgba(${red}, ${green}, ${blue}, 0.48)`
    const bodyBackgroundColor = `rgba(${red}, ${green}, ${blue}, 0.58)`
    // TODO: remove it from color generator
    document.body.style.backgroundColor = bodyBackgroundColor
    return {
      frontWave: primary,
      backWave: secondary,
      backgroundColor: bodyBackgroundColor,
    }
  }

  return {
    generateColor,
  }
}

export default useColor
