import React, { CSSProperties } from 'react'
import { Header } from '../Header/index'
import { CalculatorForm } from '../CalculatorForm/index'
import { EQUAL_EXPERTS_BLUE } from '../../tokens'

const appStyle: CSSProperties = {
  maxWidth: '300px',
  margin: '0 auto',
  border: `solid 1px ${EQUAL_EXPERTS_BLUE}`,
}

export const CalculatorApp = () => {
  return (
    <div style={appStyle}>
      <Header />
      <CalculatorForm />
    </div>
  )
}
