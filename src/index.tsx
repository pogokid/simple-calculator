import React from 'react'
import ReactDOM from 'react-dom'
import { CalculatorApp } from './components/CalculatorApp'

const reactElement = document.createElement('div')
document.body.appendChild(reactElement)
ReactDOM.render(<CalculatorApp />, reactElement)
