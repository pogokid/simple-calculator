import React, { CSSProperties } from 'react'

const buttonStyle: CSSProperties = {}

export const Button = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button style={buttonStyle} {...props} />
}
