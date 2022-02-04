class WaveEntity {
  private waveLength: number[]
  private color: string

  constructor(waveLength: number[], color: string) {
    this.waveLength = waveLength
    this.color = color
  }

  public set waveColor(color: string) {
    this.color = color
  }

  public draw = (
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    frequency: number
  ): void => {
    context.beginPath()
    context.moveTo(0, height)
    if (this.waveLength.length < 3) {
      return
    }
    for (let i = 0; i < width; i++) {
      let wave1 = Math.sin(i * this.waveLength[0] - frequency)
      let wave2 = Math.sin(i * this.waveLength[1] - frequency)
      let wave3 = Math.sin(i * this.waveLength[2] - frequency)

      context.lineTo(i * 2.5, height - 400 + wave1 * wave2 * wave3 * 200)
    }
    context.lineTo(width, height)
    context.fillStyle = this.color
    context.fill()
    context.closePath()
  }
}

export default WaveEntity
