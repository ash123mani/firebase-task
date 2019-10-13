import React from 'react'

import { BaseButton } from './styles'

const Button = ({children, onClick, ...rest}) => (
  <React.Fragment>
      <BaseButton onClick={onClick} {...rest}>
        {children}
      </BaseButton>
  </React.Fragment>
)

export default Button;