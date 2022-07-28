const Employee = require('../lib/employee.js')

describe('Employee', () => {
    test('should instantiate Employee object with specified name, id, and email', () => {
        var x = new Employee('Ada Lovelace', 0, 'ada.lovelace@snailmail.com')

        expect(x.getName()).toBe('Ada Lovelace')
        expect(x.getId()).toBe(0)
        expect(x.getEmail()).toBe('ada.lovelace@snailmail.com')
    })
})