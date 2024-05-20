export class Scale {
  constructor(tonic) {
    this.tonic = tonic
  }

  chromatic() {
    const SHARP = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    const FLAT = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']
    const toSharp = ['C', 'a', 'G', 'D', 'A', 'E', 'B', 'F#', 'e', 'b', 'f#', 'c#', 'g#', 'd#']
    const useSharp = toSharp.includes(this.tonic)
    const scale = useSharp ? [...SHARP] : [...FLAT]
    const ind = scale.indexOf([this.tonic[0].toUpperCase(), this.tonic.length > 1 ? this.tonic[1] : ''].join(''))
    return [...scale.slice(ind), ...scale.slice(0, ind)]
  }

  interval(intervals) {
    const scale = this.chromatic()
    const STEP = {
      m: 1,
      M: 2,
      A: 3
    }

    const res = [...intervals].reduce((acc, cur) => {
      const newStep = (acc.step + STEP[cur]) % scale.length
      acc.step = newStep
      acc.dia.push(scale[newStep])
      return acc
    }, { step: 0, dia: [scale[0]] })
    return res.dia
  }
}
