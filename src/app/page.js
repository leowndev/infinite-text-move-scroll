import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image 
        fill={true}
        src="/images/background.jpg"
        alt="image"
      />

      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <p>Infinite Text -</p>
          <p>Infinite Text -</p>
        </div>
      </div>
    </main>
  )
}
