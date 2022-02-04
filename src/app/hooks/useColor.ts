const useColor = () => {
  const randomInteger = () => Math.floor(Math.random() * 180)

  const generateColor = () => {
    const red = randomInteger()
    const green = randomInteger()
    const blue = randomInteger()
    const primary = `rgba(${red}, ${green}, ${blue}, 0.88)`
    const secondary = `rgba(${red}, ${green}, ${blue}, 0.48)`
    return {
      frontWave: primary,
      backWave: secondary,
    }
  }

  return {
    generateColor,
  }
}

export default useColor
