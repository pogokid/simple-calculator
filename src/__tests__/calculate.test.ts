import { calculate, isOperand, replacePartsWithResult, splitIntoCalculationParts } from '../calculate'

describe('calculate', () => {
  describe('isOperand', () => {
    it.each(['/', '*', '+', '-'])('should see %s as a valid operand', (operand: string) => {
      expect(isOperand(operand)).toEqual(true)
    })
    it.each(['a', '"', '_', 'x'])('should see %s as an invalid operand', (operand: string) => {
      expect(isOperand(operand)).toEqual(false)
    })
  })

  describe('splitIntoCalculationParts', () => {
    it('should split the calculation into numer and operand parts', function() {
      expect(splitIntoCalculationParts('2 / 2 * 2 + 2 - 2')).toEqual([2, '/', 2, '*', 2, '+', 2, '-', 2])
    })
    it('should not be affected by whitespace', function() {
      expect(splitIntoCalculationParts('2*2-1')).toEqual([2, '*', 2, '-', 1])
    })
  })

  describe('replaceWithResult', () => {
    it('should replace the calculation at the beginning of the parts with the result', function() {
      expect(replacePartsWithResult([2, '*', 3, '-', 1], 1, 6)).toEqual([6, '-', 1])
    })
    it('should replace the calculation at the end of the parts with the result', function() {
      expect(replacePartsWithResult([2, '+', 2, '*', 3], 3, 6)).toEqual([2, '+', 6])
    })
    it('should replace the calculation in the middle of the parts with the result', function() {
      expect(replacePartsWithResult([2, '+', 2, '*', 3, '-', 1], 3, 6)).toEqual([2, '+', 6, '-', 1])
    })
  })

  describe('Given a calculation', () => {
    describe('with a single operator', () => {
      it.each([
        ['2 + 2', 4],
        ['2+2', 4],
        ['2+ 2', 4],
        ['2 +2', 4],
        ['2 - 2', 0],
        ['2 * 2', 4],
        ['2 / 2', 1],
      ])('%s should equal %s', function(calculation, expected) {
        expect(calculate(calculation).result).toEqual(expected)
      })
    })
    describe('with multiple operators', () => {
      it.each([
        ['2 + 2 * 3', 8],
        ['2 + 2 * 2 * 2', 10],
        ['2 - 2 + 2 * 2 / 2', 2],
        ['2 - 2 + 2 / 0.5 * 2', 8],
        ['8 * 2 - 1 * 8 / 2 + 4 * 8', 44],
      ])('%s should equal %s', function(calculation, expected) {
        expect(calculate(calculation).result).toEqual(expected)
      })
    })
  })
})
