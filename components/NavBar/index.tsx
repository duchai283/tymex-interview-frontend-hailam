import { DownOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import InnerLayout from 'components/InnerLayout'
import Link from 'next/link'

const Navbar = () => {
  const router = [
    {
      name: 'HOME',
      route: '/',
    },
    {
      name: 'ABOUT US',
      route: '/about-us',
    },
    {
      name: 'OUR TEAMS',
      route: '/our-teams',
    },
    {
      name: 'MARKETPLACE ROADMAP',
      route: '/market-place',
    },
    {
      name: 'WHITEPAPER',
      route: '/white-paper',
    },
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-40 py-5 z-10">
      <InnerLayout>
        <div className="container mx-auto flex justify-between items-center">
          <ul className="flex space-x-4 first:pl-24">
            {router.map((item) => (
              <li>
                <Link
                  className="text-white hover:text-gray-300 pr-[60px]"
                  key={item.name}
                  href={item.route}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <Space>
            <Button type="primary">Connect Wallet</Button>
            <div>
              <DownOutlined />
            </div>
          </Space>
        </div>
      </InnerLayout>
    </nav>
  )
}

export default Navbar
