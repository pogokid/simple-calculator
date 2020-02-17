import { CSSProperties } from 'react'
import { PROXIMITY_1 } from '../../tokens'

export const formStyle: CSSProperties = {
  padding: PROXIMITY_1,
  display: 'grid',
  gridGap: PROXIMITY_1,
  gridTemplateColumns: '2fr 1fr',
  gridTemplateAreas: `
    "calculation calculation"
    "result result"
    "numbers operators"
  `,
}
export const labelStyle: CSSProperties = {
  padding: `${PROXIMITY_1} 0 ${PROXIMITY_1} 0`,
}
export const inputStyle: CSSProperties = {
  display: 'flex',
  padding: PROXIMITY_1,
  fontSize: '1.5rem',
  border: 'solid 1px #eee',
  borderRadius: '5px',
  boxSizing: 'border-box',
  width: '100%',
}
export const inputErrorStyle: CSSProperties = {
  ...inputStyle,
  borderColor: '#900',
}
const errorStyle: CSSProperties = {
  color: '#900',
}
export const calculationStyle: CSSProperties = {
  gridArea: 'calculation',
  display: 'flex',
  flexDirection: 'column',
}
export const resultStyle: CSSProperties = {
  gridArea: 'result',
}
export const buttonGridStyle: CSSProperties = {
  gridArea: 'numbers',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
}
export const operatorsGridStyle: CSSProperties = {
  gridArea: 'operators',
  display: 'grid',
  gridTemplateColumns: '1fr',
}
