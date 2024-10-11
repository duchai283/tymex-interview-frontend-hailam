import { Button, ButtonProps, Input, InputProps } from 'antd'
import { FC } from 'react'

const CustomButton: FC<ButtonProps> = ({ children, style, ...rest }) => {
  return (
    <Button
      style={{
        ...style,
        fontFamily: 'Bebas Neue, sans-serif',
        background: 'linear-gradient(to right, #D94396, #D937CC)',
        color: 'white',
      }}
      {...rest}
    >
      {children}
    </Button>
  )
}

export default CustomButton
