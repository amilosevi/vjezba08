const prosjek = require('../utils/za_test').prosjek

describe('prosjek', () => {
    test('samo jedna vrijednost', () => {
        expect(prosjek([1])).toBe(1)
    })
    test('tri decimalna', () => {  
        expect(prosjek([0.1, 0.1, 0.1])).toBeCloseTo(0.1)
    })
    test('od praznog niza je 0', () => {
        expect(prosjek([])).toBe(0)
    })
})