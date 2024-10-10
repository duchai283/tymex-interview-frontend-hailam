import { Input } from 'antd'

const InputWrapper = ({ ...rest }) => {
  return (
    <Input
      className="placeholder:text-gray-500 "
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
