import { Button, FormProps, Form, Space } from 'antd'
import CommonSelect from 'components/CommonSelect'
import Input from 'components/Input'

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
    <div className=" mr-10">
      <Form
        name="basic"
        // labelCol={{ span: 8 }}
        // wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item name="search" className="mr-4 w-full">
          <Input placeholder="Quick Search" />
        </Form.Item>
        <Form.Item
          name="tier"
          label="TIER"
          className="max-w-[230px] w-full mr-4"
        >
          <CommonSelect dataSource={{}} placeholder={`Select Tier`} />
        </Form.Item>
        <Form.Item
          name="tier"
          label="THEME"
          className="max-w-[230px] w-full mr-4"
        >
          <CommonSelect dataSource={{}} placeholder={`Select Theme`} />
        </Form.Item>
        <Form.Item
          name="tier"
          label="TIME"
          className="max-w-[230px] w-full mr-4"
        >
          <CommonSelect dataSource={{}} placeholder={`Select Time`} />
        </Form.Item>
        <Form.Item
          name="tier"
          label="PRICE"
          className="max-w-[230px] w-full mr-4"
        >
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
