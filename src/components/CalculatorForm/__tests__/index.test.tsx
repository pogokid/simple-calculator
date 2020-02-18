import * as React from 'react'
import {
  create,
  act,
  ReactTestInstance,
  ReactTestRenderer,
} from 'react-test-renderer'
import { CalculatorForm } from '../index'

describe('CalculatorForm', () => {
  let result: ReactTestRenderer
  let input: ReactTestInstance

  beforeEach(() => {
    result = create(<CalculatorForm />)
    input = result.root.findByProps({ id: 'calculation' })
  })

  const clickButton = (value: string) => {
    act(() => {
      const button = result.root.findByProps({ children: value })
      const e = { target: { innerText: value } }
      button.props.onClick(e)
    })
  }

  it('should find the CalculatorForm', function() {
    expect(CalculatorForm).toBeDefined()
  })
  it('should render ok', function() {
    expect(result.root).toBeDefined()
  })
  it('should add a number to the input when a button is pressed', function() {
    clickButton('7')
    expect(input.props.value).toEqual('7')
  })
  it('should space out operators with numbers', function() {
    clickButton('7')
    clickButton('+')
    clickButton('2')
    expect(input.props.value).toEqual('7 + 2')
  })
  it('should clear the calculation if C is pressed', function() {
    clickButton('7')
    expect(input.props.value).toEqual('7')
    clickButton('C')
    expect(input.props.value).toEqual('')
  })
  it('should update the calculation if the user types in the input', function() {
    act(() => {
      input.props.onChange({ target: { value: '7' } })
    })
    expect(input.props.value).toEqual('7')
  })
  it('should prevent the default submit behaviour', function() {
    const form = result.root.findByType('form')
    const preventDefault = jest.fn()
    act(() => {
      form.props.onSubmit({ preventDefault })
    })
    expect(preventDefault).toHaveBeenCalled()
  })
})
