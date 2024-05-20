export const meetup = (year, month, description, day) => {
  const DAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const DESC = ['first', 'second', 'third', 'fourth', 'teenth']

  const dayIndex = DAY.indexOf(day)
  const des = DESC.indexOf(description)
  const d = new Date(year, month - 1)
  const candidates = []

  while (true) {
    if (d.getDay() === dayIndex) {
      break
    }
    d.setDate(d.getDate() + 1)
  }

  while (d.getMonth() === (month - 1)) {
    candidates.push(new Date(d))
    d.setDate(d.getDate() + 7)
  }

  if (des < 4) {
    return candidates.at(des)
  }

  for (let c of candidates) {
    if (c.getDate() > 12) {
      return c
    }
  }
};
