import { Button, Image, Space } from 'antd'
import InnerLayout from 'components/InnerLayout'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface IProps {}

const Navbar: React.FC<IProps> = ({}) => {
  const [scrollY, setScrollY] = useState<number>(0)
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

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-black bg-opacity-40 py-5 z-10"
      style={{
        transition: 'background-color 0.5s ease, padding 0.5s ease',
        backgroundColor:
          scrollY > 0 ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.4)',
      }}
    >
      <InnerLayout>
        <div className="container mx-auto flex justify-between items-center font-bold">
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
            <Button type="primary" className="font-medium">
              Connect Wallet
            </Button>
            <div className="flex pl-5 items-center">
              <div className="pr-2">
                <Image src="/icons/world.svg" />
              </div>
              <div>
                <Image src="/icons/chevron-down.svg" />
              </div>
            </div>
          </Space>
        </div>
      </InnerLayout>
    </nav>
  )
}

export default Navbar
