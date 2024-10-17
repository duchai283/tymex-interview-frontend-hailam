import React, { useEffect, useState } from 'react'
import { Button, Image, Space } from 'antd'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NAVBAR_ROUTES } from 'utils/routeUtils'

interface IProps {}

const Navbar: React.FC<IProps> = ({}) => {
  const router = useRouter()
  const [open, setOpen] = useState<boolean>(false)
  const [scrollY, setScrollY] = useState<number>(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-black bg-opacity-40 z-[10000]"
      style={{
        transition: 'all 0.5s ease, padding 0.5s ease',
        backgroundColor:
          scrollY > 0 || open ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:py-6 md:flex-col lg:flex-row lg:justify-between">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            open ? 'block' : 'hidden'
          } w-full md:block md:w-auto md:pb-4 lg:pb-0`}
          id="navbar-default"
        >
          <ul className="font-semibold flex flex-col py-4 md:p-0  md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0 md:pl-0 lg:pl-24">
            {NAVBAR_ROUTES.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.route}
                  className={classNames(
                    'block py-2 px-3  rounded md:bg-transparent md:p-0  hover:text-primary  ease-in pr-[60px]',
                    {
                      'text-primary': router.pathname === item.route,
                    }
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {!open ? (
          <Space className=" self-end md:pr-[12%] lg:pr-0">
            <Button type="primary" className="font-semibold">
              Connect Wallet
            </Button>
            <div className="flex pl-5 items-center cursor-pointer">
              <div className="pr-1">
                <Image src="/icons/world.svg" preview={false} />
              </div>
              <div>
                <Image src="/icons/chevron-down.svg" preview={false} />
              </div>
            </div>
          </Space>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar
