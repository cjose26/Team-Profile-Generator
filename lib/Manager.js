const Employee = require('./Employee')

class Manager extends Employee {
    constructor(id, name, email, officeNumber) {
      super(id, name, email)
      this.officeNumber = officeNumber
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
    getOfficeNumber() {
      return this.officeNumber
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;