import { ConfigProvider, Layout } from 'antd'
import Footer from 'components/Footer'
import Navbar from 'components/NavBar'
import React from 'react'

const { Content } = Layout

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
}

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#DA4399',
          borderRadius: 2,
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
