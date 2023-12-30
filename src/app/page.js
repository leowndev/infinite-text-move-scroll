'use client'
import Image from 'next/image'
import styles from './page.module.css'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export default function Home() {
  // get text elements
  const firstText = useRef(null)
  const secondText = useRef(null)

  let direction = -1 // negative = left, positive = right
  let xPercentage = 0

  useEffect(() => {
    requestAnimationFrame(animation)
  }, [])

  const animation = () => {
    if(xPercentage <= -100) {
      xPercentage = 0
    }


    gsap.set(firstText.current, { xPercent: xPercentage}),
    gsap.set(secondText.current, { xPercent: xPercentage })
    xPercentage += 0.1 * direction
    requestAnimationFrame(animation)
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
