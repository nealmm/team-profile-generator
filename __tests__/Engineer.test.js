const Engineer = require('../lib/engineer.js')

describe('Engineer', () => {
    test('should instantiate Engineer object with specified name, id, email, and GitHub username', () => {
        var x = new Engineer('Charles Babbage', 1, 'charles.babbage@snailmail.com', 'chuckage')

        expect(x.getName()).toBe('Charles Babbage')
        expect(x.getId()).toBe(1)
        expect(x.getEmail()).toBe('charles.babbage@snailmail.com')
        expect(x.getGithub()).toBe('chuckage')
    })
})