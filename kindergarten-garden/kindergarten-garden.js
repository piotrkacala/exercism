const DEFAULT_STUDENTS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry',
];

const PLANT_CODES = {
  G: 'grass',
  V: 'violets',
  R: 'radishes',
  C: 'clover',
};

export class Garden {
  constructor(diagram, students = DEFAULT_STUDENTS) {
    this.d = diagram.split('\n')
    this.s = students.sort()
  }

  plants(student) {
    const studentIndex = this.s.indexOf(student)
    return this.d
      .map(row => row.slice(studentIndex * 2, studentIndex * 2 + 2))
      .join('')
      .split('')
      .map(letter => PLANT_CODES[letter])
  }
}
