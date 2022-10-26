import React from 'react'

export default function Text({text, textColor = '', fs = '6', fw = '' }) {
  return (
    <p className={`text-${textColor} fs-${fs} fw-${fw}`} >{text}</p>
  )
}
