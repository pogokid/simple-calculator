import { calculate, isOperand, splitIntoCalculationParts } from '../calculate'
import { split } from 'ts-node'

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
  describe('Single operator calculations', () => {
    it.each([
      ['2 + 2', 4],
      ['2+2', 4],
      ['2+ 2', 4],
      ['2 +2', 4],
      ['2 - 2', 0],
      ['2 * 2', 4],
      ['2 / 2', 1],
    ])('should calculate %s to equal %s', function(calculation, expected) {
      expect(calculate(calculation)).toEqual(expected)
    })
  })
})
