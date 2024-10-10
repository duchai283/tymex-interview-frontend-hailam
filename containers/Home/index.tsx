import localFont from 'next/font/local'
import styles from './Home.module.css'
import Background from 'components/Background'
import dynamic from 'next/dynamic'

const CharacterContainer = dynamic(() => import('containers/Home/Character'), {
  ssr: false,
})

const geistRoboto = localFont({
  src: './fonts/Roboto.woff',
  variable: '--font-geist-roboto',
  weight: '100 900',
})

export default function Home() {
  return (
    <div
      className={`${geistRoboto.variable} font-[family-name:var(--font-geist-roboto)]`}
    >
      <Background />
      <div className={`${styles.background}`}>
        <CharacterContainer />
      </div>
    </div>
  )
}
