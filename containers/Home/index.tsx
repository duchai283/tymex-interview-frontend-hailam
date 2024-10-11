import localFont from 'next/font/local'
import styles from './Home.module.css'
import HeroBackground from 'components/HeroBackground'
import dynamic from 'next/dynamic'

const CharacterContainer = dynamic(() => import('containers/Home/Character'), {
  ssr: false,
})

const geistBebasNeue = localFont({
  src: './fonts/BebasNeue-Regular.ttf',
  variable: '--font-geist-bebasneue',
  weight: '400',
})

export default function Home() {
  return (
    <div
      className={`${geistBebasNeue.variable} font-[family-name:var(--font-geist-bebasneue)]`}
    >
      <HeroBackground />
      <div className={`${styles.background} py-[40px] md:py-14 lg:py-[120px]`}>
        <CharacterContainer />
      </div>
    </div>
  )
}
