export const clean = (str) => {
  if (/[a-z]/gi.test(str)) {
    throw new Error('Letters not permitted')
  }
  if (/:/gi.test(str)) {
    throw new Error('Punctuations not permitted')
  }
  let cln = str.match(/[0-9]/g)

  if (cln.length === 11 && cln[0] === '1') {
    cln = cln.slice(1)
  }
      if (cln.length === 10 && cln[0] === '0') {
    throw new Error('Area code cannot start with zero')
  }
      if (cln.length === 10 && cln[0] === '1') {
    throw new Error('Area code cannot start with one')
  }
        if (cln.length === 10 && cln[3] === '0') {
    throw new Error('Exchange code cannot start with zero')
  }
          if (cln.length === 10 && cln[3] === '1') {
    throw new Error('Exchange code cannot start with one')
  }
    if (cln.length === 11) {
    throw new Error('11 digits must start with 1')
  }
      if (cln.length > 11) {
    throw new Error('More than 11 digits')
  }
  if (cln.length !== 10) {
    throw new Error('Incorrect number of digits')
  }
  return cln.join('')
};
