import {
  Button,
  FormProps,
  Form,
  Space,
  Image,
  Slider,
  SliderSingleProps,
} from 'antd'
import CommonSelect from 'components/CommonSelect'
import CustomButton from 'components/CustomButton'
import Input from 'components/CustomInput'
import { ICharacterFilters } from 'interface/character'
import { useRouter } from 'next/router'
import { stringify } from 'qs'
import { useEffect, useRef, useState } from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import {
  SELECT_PRICE_ORDER_OPTIONS,
  SELECT_THEME_OPTIONS,
  SELECT_TIER_OPTIONS,
} from 'utils/characterUtils'
import { defaultStringifyOption } from 'utils/commonUtils'
import { FaFilter, FaFilterCircleXmark } from 'react-icons/fa6'
import useDebounce from 'hooks/useDebounce'
import { isEmpty } from 'lodash'

type FieldType = {
  name?: string
  tier?: string
  priceOrder?: number[]
  priceRange?: string
  theme?: string
}

interface IProps {
  filters: ICharacterFilters
}
const CharacterFilters: React.FC<IProps> = ({ filters }) => {
  const [form] = Form.useForm()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [search, setSearch] = useState<string>('')
  const debouncedSearch = useDebounce<string>(search, 1500)

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    const isFilterEmpty = Object.values(values).every((value) => !value)
    if (!isFilterEmpty) {
      const params = stringify(
        { ...router.query, ...values },
        defaultStringifyOption
      )
      router.push(`${router.pathname}?${params}`, undefined, { scroll: false })
    }
  }

  useEffect(() => {
    if (filters) {
      setSearch(filters.name as string)
      form.setFieldsValue({
        tier: filters.tier,
        priceOrder: filters.priceOrder,
        theme: filters.theme,
        priceRange: filters.priceRange,
      })
    }
  }, [filters])

  useEffect(() => {
    if (debouncedSearch) {
      onFinish({ name: debouncedSearch })
    }
  }, [debouncedSearch])

  const handleReset = () => {
    setSearch('')
    router.push(`${router.pathname}`, undefined, { scroll: false })
  }

  const middlewareFilters = () => {
    console.log('router.query', router.query)
    const isFilterEmpty = Object.values(router.query).every((value) =>
      isEmpty(value)
    )

    console.log('isFilterEmpty', isFilterEmpty)
    if (!isFilterEmpty) {
      form.submit()
    }
  }

  return (
    <div className="w-full mx-auto max-w-[320px] md:mb-0">
      <div className="flex flex-grow items-center mb-10 cursor-pointer">
        <div className="w-full mb-0 mr-4 md:mb-8 md:mr-0">
          <Input
            placeholder="Quick Search"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            prefix={<RiSearch2Line color="#89888B" />}
          />
        </div>
        <span
          className="md:hidden inline-block border p-2 rounded border-[#89888B]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaFilterCircleXmark /> : <FaFilter />}
        </span>
      </div>
      <div
        className={`transform transition-transform ease-out ${
          isOpen
            ? 'max-h-[500px] opacity-100 translate-y-0'
            : 'max-h-0 opacity-0 -translate-y-10 md:max-h-[500px] md:opacity-100'
        }  mt-4`}
        style={{ transitionProperty: 'transform, opacity, max-height' }}
      >
        <Form
          name="basic"
          className={`w-full`}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          form={form}
        >
          <div ref={contentRef}>
            <Form.Item
              name="priceRange"
              label="PRICE"
              className="w-full mb-0"
              getValueFromEvent={(value) => {
                middlewareFilters()
                return value
              }}
            >
              <Slider range max={200} />
            </Form.Item>
            <div className="flex justify-between text-[#D6D6D6] mb-10">
              <div>0.01 ETH</div>
              <div>200 ETH</div>
            </div>
            <Form.Item
              name="tier"
              label="TIER"
              className="w-full"
              getValueFromEvent={(value) => {
                middlewareFilters()
                return value
              }}
            >
              <CommonSelect
                dataSource={SELECT_TIER_OPTIONS}
                placeholder={`Select Tier`}
              />
            </Form.Item>
            <Form.Item
              name="theme"
              label="THEME"
              className="w-full"
              getValueFromEvent={(value) => {
                middlewareFilters()
                return value
              }}
            >
              <CommonSelect
                dataSource={SELECT_THEME_OPTIONS}
                placeholder={`Select Theme`}
              />
            </Form.Item>
            <Form.Item
              name="priceOrder"
              label="PRICE"
              className="w-full"
              getValueFromEvent={(value) => {
                middlewareFilters()
                return value
              }}
            >
              <CommonSelect
                dataSource={SELECT_PRICE_ORDER_OPTIONS}
                placeholder={`Select price`}
              />
            </Form.Item>
            <Space size="large">
              <Button
                icon={<Image src="/icons/clear.svg" preview={false} />}
                type="text"
                size="large"
                style={{ color: 'white' }}
                onClick={handleReset}
              >
                Reset filter
              </Button>
              <CustomButton
                type="primary"
                size="large"
                className="font-bold px-10"
                htmlType="submit"
              >
                Search
              </CustomButton>
            </Space>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default CharacterFilters
