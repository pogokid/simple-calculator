import React, { CSSProperties, FormEvent, RefObject, useRef, useState } from 'react'
import { PROXIMITY_1 } from '../../tokens'
import { calculate, ICalculateResult } from '../../calculate'
import { Button } from '../Button/index'

const formStyle: CSSProperties = {
  padding: PROXIMITY_1,
  display: 'flex',
  flexDirection: 'column',
}

const labelStyle: CSSProperties = {
  padding: `${PROXIMITY_1} 0 ${PROXIMITY_1} 0`,
}

const inputStyle: CSSProperties = {
  display: 'block',
}

const errorStyle: CSSProperties = {
  color: '#900',
}

let buttonGridStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
}

export const CalculatorForm = () => {
  const inputRef: RefObject<HTMLInputElement> = useRef<HTMLInputElement>(null)
  const [{ result, error }, setResult] = useState<ICalculateResult>({})
  const onSubmit = (e: FormEvent) => {
    const calc = inputRef.current ? inputRef.current.value : ''
    setResult(calculate(calc))
    e.preventDefault()
  }
  const onButtonClick = (e: MouseEvent) => {}
  return (
    <form style={formStyle} onSubmit={onSubmit}>
      <label style={labelStyle} htmlFor="calculation">
        Expression:
      </label>
      <input style={inputStyle} ref={inputRef} id="calculation" name="calculation" type="text" />
      {error && (
        <label style={{ ...labelStyle, ...errorStyle }} htmlFor="calculation">
          {error}
        </label>
      )}
      {result && (
        <label style={labelStyle} htmlFor="calculation">
          `The result is: ${result}`
        </label>
      )}
      <div style={buttonGridStyle}>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>0</Button>
      </div>
      <div style={buttonGridStyle}>
        <Button>/</Button>
        <Button>x</Button>
        <Button>-</Button>
        <Button>+</Button>
      </div>
    </form>
  )
}
