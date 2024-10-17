import { Button, Image, Space } from 'antd'
import Input from 'components/CustomInput'
import InnerLayout from 'components/InnerLayout'
import Link from 'next/link'
import { useState } from 'react'
import {
  ABOUT_US,
  COMMUNITY,
  FAQS,
  HOME,
  LEGAL,
  MARKETPLACE_ROADMAP,
  NEWS,
  OUR_TEAMS,
  PRIVACY,
  SECURITY,
  WHITEPAPER,
} from 'utils/routeUtils'

const Footer = () => {
  const [email, setEmail] = useState<string>('')
  const onSubscribe = () => {
    // Handle subscribe email
    console.log('email', email)
  }
  return (
    <div className="w-full bg-[#17161A] h-[550px] text-white">
      <InnerLayout className="p-4 md:pt-[60px]">
        <div className="flex flex-wrap justify-between mb-[60px]">
          <div className="mb-6">
            <div className="text-xl pb-4 md:pb-9 md:uppercase">Navigation</div>
            <div className="grid grid-cols-3 gap-x-6 gap-y-4">
              <Link href={HOME}>Home</Link>
              <Link href={WHITEPAPER}>Whitepaper</Link>
              <Link href={FAQS}>FAQs</Link>
              <Link href={ABOUT_US}>About us</Link>
              <Link href={MARKETPLACE_ROADMAP}>Marketplace</Link>
              <Link href={NEWS}>News</Link>
              <Link href={OUR_TEAMS}>Our teams</Link>
              <Link href={MARKETPLACE_ROADMAP}>Roadmap</Link>
              <Link href={COMMUNITY}>Community</Link>
            </div>
          </div>
          <div className="mb-6">
            <div className="text-xl pb-4 md:pb-9 md:uppercase">Contact us</div>
            <Space direction="vertical" size="large">
              <div className="flex items-center">
                <Image
                  src="/icons/phone.svg"
                  className="pr-2"
                  preview={false}
                />
                <Link href="tel:+01234568910">01234568910</Link>
              </div>
              <div className="flex items-center">
                <Image
                  src="/icons/comment.svg"
                  className="pr-2"
                  preview={false}
                />
                <Link href="mailto:tymex-talent@tyme.com">
                  tymex-talent@tyme.com
                </Link>
              </div>
            </Space>
          </div>
          <div className="">
            <div className="text-xl pb-4 md:pb-9 md:uppercase">
              Subscribe to receive our latest update
            </div>
            <div className="flex">
              <Input
                onChange={(e) => setEmail(e?.currentTarget?.value)}
                placeholder="Your email address"
                className="w-full mr-5"
              />
              <Button
                type="primary"
                size="large"
                className="font-bold px-4 md:px-10"
                onClick={onSubscribe}
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div></div>
        </div>
        <div className=" w-full h-[1px] bg-[#3A3841]" />
        <div className="mt-6 md:mt-[40px] flex flex-wrap justify-between">
          <div className="order-2 md:order-1">
            ©2023 Tyme - Edit. All Rights reserved.
          </div>
          <Space size="large" className="flex pb-2 md:pb-0">
            <Link href={SECURITY}>Security</Link>
            <Link href={LEGAL}>Legal</Link>
            <Link href={PRIVACY}>Privacy</Link>
          </Space>
        </div>
      </InnerLayout>
    </div>
  )
}

export default Footer
