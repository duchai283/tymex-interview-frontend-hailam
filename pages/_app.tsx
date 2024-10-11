import 'antd/dist/reset.css'
import '/styles/globals.css'

import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'

const AppLayout = dynamic(() => import('/components/Layout'), {
  ssr: false,
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
