import React from 'react'

import "./input.css";

export default function Input({type='text', placeholder='', onChange = (e) => {}, fs=''}) {
  return (
    <input className={`form-control fs-${fs}`} type={type} placeholder={placeholder} onChange={(e) => onChange(e)}/>
  )
}
