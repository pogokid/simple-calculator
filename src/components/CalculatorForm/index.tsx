import * as React from 'react'
import {
  FormEvent,
  MouseEventHandler,
  RefObject,
  useMemo,
  useRef,
  useState,
} from 'react'
import { calculate, isOperand } from '../../calculate'
import { Button } from '../Button/index'
import {
  buttonGridStyle,
  calculationStyle,
  formStyle,
  inputErrorStyle,
  inputStyle,
  labelStyle,
  operatorsGridStyle,
  resultStyle,
} from './styles'

export const CalculatorForm = () => {
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const [calculation, setCalculation] = useState<string>('')
  const { result, error } = useMemo(() => calculate(calculation), [calculation])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const onButtonClick: MouseEventHandler<HTMLButtonElement> = e => {
    const button = e.target as HTMLButtonElement
    const value = button.innerText
    if (value === 'C') {
      setCalculation('')
    } else if (isOperand(value)) {
      setCalculation(`${calculation} ${value} `.trimLeft())
    } else {
      setCalculation(calculation + value)
    }
  }
  return (
    <form style={formStyle} onSubmit={onSubmit} autoComplete="off">
      <div style={calculationStyle}>
        <label style={labelStyle} htmlFor="calculation">
          Expression:
        </label>
        <input
          style={error && calculation !== '' ? inputErrorStyle : inputStyle}
          ref={inputRef}
          id="calculation"
          name="calculation"
          type="text"
          value={calculation}
          onChange={e => {
            setCalculation(e.target.value)
          }}
        />
      </div>
      <div style={resultStyle}>
        <label style={labelStyle} htmlFor="calculation">
          = {result}
        </label>
      </div>
      <div style={buttonGridStyle}>
        <Button onClick={onButtonClick}>7</Button>
        <Button onClick={onButtonClick}>8</Button>
        <Button onClick={onButtonClick}>9</Button>
        <Button onClick={onButtonClick}>4</Button>
        <Button onClick={onButtonClick}>5</Button>
        <Button onClick={onButtonClick}>6</Button>
        <Button onClick={onButtonClick}>1</Button>
        <Button onClick={onButtonClick}>2</Button>
        <Button onClick={onButtonClick}>3</Button>
        <Button onClick={onButtonClick}>0</Button>
      </div>
      <div style={operatorsGridStyle}>
        <Button onClick={onButtonClick}>C</Button>
        <Button onClick={onButtonClick}>/</Button>
        <Button onClick={onButtonClick}>*</Button>
        <Button onClick={onButtonClick}>-</Button>
        <Button onClick={onButtonClick}>+</Button>
      </div>
    </form>
  )
}
