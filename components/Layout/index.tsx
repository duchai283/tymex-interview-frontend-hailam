import { ConfigProvider, FloatButton, Layout } from 'antd'
import Footer from 'components/Footer'
import Navbar from 'components/NavBar'
import React from 'react'

const { Content } = Layout

const contentStyle: React.CSSProperties = {
  color: '#fff',
  minHeight: '100vh',
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
          Button: {
            colorBgContainerDisabled: '#5C2159',
            colorTextDisabled: '#FFFFFF',
          },
          Slider: {
            railBg: '#3A3841',
            railHoverBg: '#3A3841',
            railSize: 8,
            dotBorderColor: 'red',
            dotSize: 100,
            handleSize: 20,
            handleSizeHover: 20,
            trackBg: '#ff99cc',
            handleLineWidth: 1,
          },
        },
      }}
    >
      <Layout className="w-full font-[family-name:var(--font-geist-bebasneue)]">
        <Navbar />
        <Content style={contentStyle}>{children}</Content>
        <Footer />
      </Layout>
      <FloatButton.BackTop />
    </ConfigProvider>
  )
}

export default AppLayout
