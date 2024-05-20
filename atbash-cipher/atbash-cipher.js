export const encode = (txt) => {
  return decode(txt)
    .replaceAll(/(.{5})/g, '$1 ')
    .trim()
};

export const decode = (txt) => {
  const AZ = 'abcdefghijklmnopqrstuvwxyz'

  return txt
    .toLowerCase()
    .replaceAll(/[\s,.]/g, '')
    .split('')
    .map(item => {
      if (/\d/.test(item)) {
        return item
      }
      return AZ.at(-(AZ.indexOf(item) + 1))
    })
    .join('')
};
