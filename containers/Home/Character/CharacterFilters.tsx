import { Button, FormProps, Form, Space } from 'antd'
import CommonSelect from 'components/CommonSelect'
import Input from 'components/Input'
import { RiSearch2Line } from 'react-icons/ri'

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const CharacterFilters = () => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values)
  }

  const handleReset = () => {}
  return (
    <div className="w-full max-w-[372px]">
      <Form
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        className="w-full"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item name="search" className="w-full">
          <Input
            placeholder="Quick Search"
            prefix={<RiSearch2Line color="#89888B" />}
          />
        </Form.Item>
        <Form.Item name="tier" label="TIER" className="w-full">
          <CommonSelect dataSource={{ a: '123' }} placeholder={`Select Tier`} />
        </Form.Item>
        <Form.Item name="tier" label="THEME" className="w-full">
          <CommonSelect dataSource={{}} placeholder={`Select Theme`} />
        </Form.Item>
        <Form.Item name="tier" label="TIME" className="w-full">
          <CommonSelect dataSource={{}} placeholder={`Select Time`} />
        </Form.Item>
        <Form.Item name="tier" label="PRICE" className="w-full">
          <CommonSelect dataSource={{}} placeholder={`Select price`} />
        </Form.Item>
        <Space size="large">
          <Button type="text" className="text-white" onClick={handleReset}>
            Reset filter
          </Button>
          <Button type="primary" htmlType="submit">
            Search
          </Button>
        </Space>
      </Form>
    </div>
  )
}

export default CharacterFilters
