export interface ICalculateResult {
  result?: number
  error?: string
}

export type TOperand = '/' | '*' | '+' | '-'
export type TCalculationPart = number | TOperand

export const isOperand = (char: string): char is TOperand => /^[\/*+\-]$/.test(char)
const isValid = (calculation: string) => /^[0-9\s\/\-+*]+[0-9]$/g.test(calculation)

const getNumber = (withoutSpaces: string) => (lastOperandIndex: number, currentIndex?: number) => {
  const lastNumberString = withoutSpaces.substring(lastOperandIndex + 1, currentIndex)
  return parseFloat(lastNumberString)
}

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

const findAndCalculate = (parts: TCalculationPart[], operand: TOperand): TCalculationPart[] => {}

export const calculate = (calculation: string) => {
  if (isValid(calculation)) {
    const parts = splitIntoCalculationParts(calculation)
    // find first operator and replace numbers with result
    const div = findAndCalculate(parts, '/')
    return { result: 10 }
  } else {
    return { error: 'Only supports simple calculation' }
  }
}
