'use client'
import Image from 'next/image'
import styles from './page.module.css'

import gasp from 'gsap'
import { useEffect, useRef } from 'react'

export default function Home() {
  // get text elements
  const firstText = useRef(null)
  const secondText = useRef(null)

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
          <p ref={firstText}>Infinite Text -</p>
          <p ref={secondText}>Infinite Text -</p>
        </div>
      </div>
    </main>
  )
}
