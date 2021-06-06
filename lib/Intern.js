const Employee= require('./Employee')

class Intern extends Employee {
    constructor(id, name, email, school) {
      super(id, name, email)
      this.school = school
    }
    getName(){
        return super.getName()
    }
    getId() {
        return super.getId()
    }
    getEmail(){
        return super.getEmail()
    }
    getSchool() {
        return this.school
    }
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;