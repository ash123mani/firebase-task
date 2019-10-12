import React from 'react'
import BaseInput from './styles'


const Input = ({ name, type, value, onChange, ...rest }) => (
  <BaseInput name={name} value={value} type={type} onChange={onChange} {...rest} />
)

export default Input