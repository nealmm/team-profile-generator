const Manager = require('../lib/manager.js')

describe('Manager', () => {
    test('should instantiate Manager object with specified name, id, email, and office number', () => {
        var x = new Manager('Alan Kay', 3, 'alan.kay@snailmail.com', 256)

        expect(x.getName()).toBe('Alan Kay')
        expect(x.getId()).toBe(3)
        expect(x.getEmail()).toBe('alan.kay@snailmail.com')
        expect(x.getOfficeNumber()).toBe(256)
    })
})