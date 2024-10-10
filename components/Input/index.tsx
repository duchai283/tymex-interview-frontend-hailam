import { Input, InputProps } from 'antd'
import { FC } from 'react'

const InputWrapper: FC<InputProps> = ({ ...rest }) => {
  return (
    <Input
      style={{
        backgroundColor: 'transparent',
        border: '1px solid #89888B', // Optional: add bottom border for visibility
        color: 'white', // Set text color
        outline: 'none',
        boxShadow: 'none',
      }}
      {...rest}
    />
  )
}

export default InputWrapper
