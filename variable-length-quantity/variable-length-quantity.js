export const encode = (input) => {
  return input.map(item => item.toString(2)).map(encodeOne).flat()
};

function encodeOne(binary) {
  const chunks = []

  while (binary.length > 7) {
    const part = binary.slice(-7)
    const rest = binary.slice(0, -7)
    chunks.unshift(part)
    binary = rest
  }
  chunks.unshift(binary)

  const addedBit = chunks.map((item, index) => (index === chunks.length - 1 ? '0' : '1') + item.padStart(7, '0'))
  const asNumbers = addedBit.map(item => Number.parseInt(item, 2))

  return asNumbers
}

export const decode = (input) => {
  const res = input.reduce((acc, element) => {
    const byte = element.toString(2).padStart(8, '0')
    const willContinue = byte.at(0)
    const seven = byte.slice(1)

    if (acc.continue) {
      acc.data[acc.data.length - 1] += seven
    } else {
      acc.data.push(seven)
    }

    acc.continue = willContinue === '1'

    return acc

  }, { data: [], continue: false })

  if (res.continue) {
    throw new Error('Incomplete sequence')
  }

  return res.data.map(item => Number.parseInt(item, 2))
};
