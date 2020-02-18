export interface ICalculateResult {
  result?: number
  error?: string
}

export type TOperand = '/' | '*' | '+' | '-'
export type TCalculationPart = number | TOperand

export const isOperand = (char: string | TCalculationPart): char is TOperand =>
  /^[\/*+\-]$/.test(String(char))
export const isNumber = (potentialNumber: any): potentialNumber is number =>
  typeof potentialNumber === 'number'

/**
 * Is this calculation valid and only including the
 * functionality we are implementing
 */
const isValid = (calculation: string) =>
  /^[0-9][0-9\s\/\-+*.]*[0-9]$/g.test(calculation)

/**
 * Extract and parse a number from a particular part
 * of a string
 */
const getNumber = (withoutSpaces: string) => (
  lastOperandIndex: number,
  currentIndex?: number
) => {
  const lastNumberString = withoutSpaces.substring(
    lastOperandIndex + 1,
    currentIndex
  )
  return parseFloat(lastNumberString)
}

/**
 * Split the calculation into it's number and operator parts
 * so that it is easier to work with
 */
export const splitIntoCalculationParts = (calculation: string): any[] => {
  const withoutSpaces = calculation.replace(/\s/g, '')
  const getLastNumber = getNumber(withoutSpaces)
  const parts: TCalculationPart[] = []
  let lastOperandIndex = -1
  for (let i = 0; i < withoutSpaces.length; i += 1) {
    const char = withoutSpaces[i]
    if (isOperand(char)) {
      parts.push(getLastNumber(lastOperandIndex, i))
      parts.push(char)
      lastOperandIndex = i
    }
  }
  if (lastOperandIndex < withoutSpaces.length) {
    parts.push(getLastNumber(lastOperandIndex))
  }
  return parts
}

/**
 * Replace the parts around the operand with the result
 */
export const replacePartsWithResult = (
  parts: TCalculationPart[],
  operandIndex: number,
  result: number
): TCalculationPart[] => {
  const before = operandIndex > 0 ? parts.slice(0, operandIndex - 1) : []
  const after =
    operandIndex + 2 < parts.length ? parts.slice(operandIndex + 2) : []
  return [...before, result, ...after]
}

/**
 * Find the operand and do the calculation, repeating the process until
 * there are none left
 */
const findAndCalculate = (
  parts: TCalculationPart[],
  operands: TOperand[]
): TCalculationPart[] => {
  const findOperand = (part: TCalculationPart) =>
    isOperand(part) && operands.includes(part)
  const operandIndex = parts.findIndex(findOperand)
  if (operandIndex > -1) {
    const operand = parts[operandIndex] as TOperand
    const left = parts[operandIndex - 1]
    const right = parts[operandIndex + 1]
    let result: number | undefined
    if (isNumber(left) && isNumber(right)) {
      switch (operand) {
        case '/':
          result = left / right
          break
        case '*':
          result = left * right
          break
        case '+':
          result = left + right
          break
        case '-':
          result = left - right
          break
      }
    }
    if (isNumber(result))
      parts = replacePartsWithResult(parts, operandIndex, result)
    if (parts.find(findOperand)) {
      return findAndCalculate(parts, operands)
    }
  }
  return parts
}

/**
 * Implementing DMAS of the BODMAS
 */
export const calculate = (calculation: string) => {
  if (isValid(calculation)) {
    let parts = splitIntoCalculationParts(calculation)
    parts = findAndCalculate(parts, ['/', '*'])
    parts = findAndCalculate(parts, ['+', '-'])
    return { result: parts[0] }
  } else {
    return {
      error: 'Only supports simple calculation, numbers and /, *, + and -',
    }
  }
}
