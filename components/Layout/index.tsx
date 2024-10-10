import { ConfigProvider, Layout } from 'antd'
import Footer from 'components/Footer'
import Navbar from 'components/NavBar'
import React from 'react'

const { Content } = Layout

const contentStyle: React.CSSProperties = {
  color: '#fff',
}

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#DA4399',
          borderRadius: 2,
          colorBorder: '#3A3841',
        },
        components: {
          Select: {
            activeBorderColor: '#DA4399',
            activeOutlineColor: '#DA4399',
            selectorBg: 'transparent',
          },
          Form: {
            labelColor: '#89888B',
          },
        },
      }}
    >
      <Layout className="w-full font-semibold">
        <Navbar />

        <Content style={contentStyle}>{children}</Content>

        <Footer />
      </Layout>
    </ConfigProvider>
  )
}

export default AppLayout
