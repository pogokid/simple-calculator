import React, { CSSProperties } from 'react'

import EqualExpertsLogo from './logo.svg'
import { EQUAL_EXPERTS_BLUE, PROXIMITY_1 } from '../../tokens'

const headerStyle: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '100px auto',
  gridGap: PROXIMITY_1,
  alignItems: 'center',
  backgroundColor: EQUAL_EXPERTS_BLUE,
  padding: PROXIMITY_1,
  color: 'white',
}

const h1Style: CSSProperties = {
  fontSize: '16px',
  margin: '0',
  padding: '0',
}

export const Header = () => (
  <header style={headerStyle}>
    <EqualExpertsLogo />
    <h1 style={h1Style}>Calculator</h1>
  </header>
)
