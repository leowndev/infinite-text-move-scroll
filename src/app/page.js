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
    </main>
  )
}
