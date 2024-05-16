class User {
  name = ''
  age = ''

  constructor(name, age) {
    this.name = name
    this.age = age
  }

  toString () {
    return `USER ~ name: ${this.name}` + ' ' + `USER ~ age: ${this.age}`
  }
}

class Developer extends User {
  langs = []

  constructor(name, age, langs) {
    super(name, age)
    this.langs = langs
  }

  toString () {
    return super.toString() + ' ' + `USER ~ DEV ~ langs: ${this.langs}`
  }
}

const dev1 = new Developer('Edgar', 12, ['js', 'py'])
console.log('🚀 ~ dev1.toString():', dev1.toString())
