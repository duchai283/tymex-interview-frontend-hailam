import { Select } from 'antd'
import React from 'react'

interface IProps {
  disabled?: boolean
  value?: string
  onChange?: (id: string) => void
  multiple?: boolean
  placeholder?: string
  dataSource: Record<any, string>
  size?: 'large' | 'middle' | 'small'
  className?: string
}

const CommonSelect: React.FC<IProps> = ({
  disabled,
  value,
  onChange,
  multiple = false,
  dataSource,
  placeholder,
  size,
  className = "w'full",
}) => {
  return (
    <Select
      mode={multiple ? 'multiple' : undefined}
      value={value}
      disabled={disabled}
      filterOption={false}
      className={className}
      onChange={onChange}
      size={size}
      placeholder={placeholder}
      popupClassName="min-w-fit"
      allowClear
    >
      {Object.entries(dataSource).map(([value, text]) => (
        <Select.Option key={value} value={value}>
          {text}
        </Select.Option>
      ))}
    </Select>
  )
}

export default React.memo(CommonSelect)
