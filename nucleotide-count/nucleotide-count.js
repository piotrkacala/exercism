export function countNucleotides(strand) {
  const count = [...strand].reduce((acc, cur) => {
    acc[cur]++
    return acc
  }, {
    A: 0,
    C: 0,
    G: 0,
    T: 0
  })
  
  if (Object.keys(count).length > 4) {
    throw new Error('Invalid nucleotide in strand')
  }
  
  return `${count['A']} ${count['C']} ${count['G']} ${count['T']}`
}
