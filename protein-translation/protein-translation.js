export const translate = (input) => {
  if (input === undefined) {
    return []
  }

  const STOP = ['UAA', 'UAG', 'UGA']
  const NAME = [
    [['AUG'], 'Methionine'],
    [['UUU', 'UUC'], 'Phenylalanine'],
    [['UUA', 'UUG'], 'Leucine'],
    [['UCU', 'UCC', 'UCA', 'UCG'], 'Serine'],
    [['UAU', 'UAC'], 'Tyrosine'],
    [['UGU', 'UGC'], 'Cysteine'],
    [['UGG'], 'Tryptophan']
  ]

  let arr = input.replaceAll(/(.{3})/g, '$1 ').trimEnd().split(' ')
  const stopIndex = arr.findIndex(item => STOP.includes(item))

  if (stopIndex !== -1) {
    arr = arr.slice(0, stopIndex)
  }

  const res = arr.map(item => {
    if (item.length < 3) {
      throw new Error('Invalid codon')
    }
    return NAME.find(row => row[0].includes(item))?.[1]
  })

  if (res.includes(undefined)) {
    throw new Error('Invalid codon')
  }

  return res
};
