import { Input, InputProps } from 'antd'
import { FC } from 'react'

const InputWrapper: FC<InputProps> = ({ ...rest }) => {
  return (
    <Input
      style={{
        backgroundColor: 'transparent',
        border: '1px solid #89888B',
        color: 'white',
        outline: 'none',
        boxShadow: 'none',
        padding: '8px 0 8px 14px',
      }}
      {...rest}
    />
  )
}

export default InputWrapper
