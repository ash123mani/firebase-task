import { css } from 'styled-components'

export const noBorder = props => 
    css`
      border: none !important;
    `
export const borderBottom = props => 
    css`
      border-bottom:  1px solid ${({ theme }) => theme.colors.normal} !important;
    `
