const Intern = require('../lib/intern.js')

describe('Intern', () => {
    test('should instantiate Intern object with specified name, id, email, and school name', () => {
        var x = new Intern('Alan Turing', 2, 'alan.turing@snailmail.com', 'University of Cambridge')

        expect(x.getName()).toBe('Alan Turing')
        expect(x.getId()).toBe(2)
        expect(x.getEmail()).toBe('alan.turing@snailmail.com')
        expect(x.getSchool()).toBe('University of Cambridge')
    })
})