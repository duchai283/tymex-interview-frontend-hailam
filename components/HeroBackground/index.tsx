import styles from './HeroBackground.module.css' // Import CSS module for styling

const Background = () => {
  return (
    <div
      className={`${styles.background} min-h-64 md:min-h-96 xl:min-h-[580px]`}
    />
  )
}

export default Background
