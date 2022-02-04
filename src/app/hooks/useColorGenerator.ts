const useColorGenerator = () => {
  const randomInteger = () => Math.floor(Math.random() * 180)

  const generateColor = () => {
    const red = randomInteger()
    const green = randomInteger()
    const blue = randomInteger()
    return {
      frontWave: `rgba(${red}, ${green}, ${blue}, 0.88)`,
      backWave: `rgba(${red}, ${green}, ${blue}, 0.48)`,
    }
  }

  return {
    generateColor,
  }
}

export default useColorGenerator
