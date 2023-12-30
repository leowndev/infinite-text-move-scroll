'use client'
import Image from 'next/image'
import styles from './page.module.css'

import gasp from 'gsap'
import { useEffect } from 'react'

export default function Home() {

  useEffect(() => {
    requestAnimationFrame(animation)
  }, [])

  const animation = () => {
    console.log('animation')
  }

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
