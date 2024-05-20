//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.grades = []
  }

  roster() {
    let result = this.grades.reduce((all, grade, index) => {
      all[index] = grade.slice()
      return all
    },{})
    return result
  }

  add(name, grade) {
    this.alreadyAdded(name)

    if (this.grades[grade] === undefined) {
      this.grades[grade] = [name]
    } else {
      this.grades[grade].push(name)
      this.grades[grade].sort()
    }
  }

  alreadyAdded(name) {
    let found = this.grades.some(grade => grade.find(el => el === name))
    if (found) {
      this.grades.forEach(grade => {
        let item = grade.indexOf(name)
        if (item !== -1) {
          grade.splice(item, 1)
        }
      })
    }
    
  }

  grade(num) {
    const list = this.grades[num]
    if (list === undefined) {
      return []
    }
    return list.slice().sort()
  }
}
