export const encode = (str) => str.replace(/(.)\1+/g, (match, p1) => match.length + p1)

export const decode = (str) => str.replace(/(\d+)(.)/g, (match, p1, p2) => p2.repeat(p1))
