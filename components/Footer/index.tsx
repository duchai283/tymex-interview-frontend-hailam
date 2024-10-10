import { Button, Input, Space } from 'antd'
import InnerLayout from 'components/InnerLayout'

const Footer = () => {
  return (
    <div className="w-full bg-[#17161A] h-[550px]">
      <InnerLayout className="pt-[60px]">
        <div className="flex justify-between mb-[60px]">
          <div>
            <div className="text-xl pb-9">NAVIGATION</div>
            <div className="grid grid-cols-3 gap-x-6 gap-y-4">
              <div>Home</div>
              <div>Whitepaper</div>
              <div>FAQs</div>
              <div>About us</div>
              <div>Marketplace</div>
              <div>News</div>
              <div>Our teams</div>
              <div>Roadmap</div>
              <div>Community</div>
            </div>
          </div>
          <div>
            <div className="text-xl pb-9">CONTACT US</div>
            <Space direction="vertical" size="large">
              <div>01234568910</div>
              <div>tymex-talent@tyme.com</div>
            </Space>
          </div>
          <div className="">
            <div className="text-xl pb-9">
              SUBSCRIBE TO RECEIVE OUR LATEST UPDATE
            </div>
            <Space size="large" className="flex">
              <Input placeholder="Your email address" />
              <Button type="primary">Subscribe</Button>
            </Space>
          </div>
          <div></div>
        </div>
        <div className=" w-full h-[1px] bg-[#3A3841]" />
        <div className="mt-[40px] flex justify-between">
          <div>©2023 Tyme - Edit. All Rights reserved.</div>
          <Space size="large" className="flex">
            <div>Security</div>
            <div>Legal</div>
            <div>Privacy</div>
          </Space>
        </div>
      </InnerLayout>
    </div>
  )
}

export default Footer
