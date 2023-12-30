'use client'
import Image from 'next/image'
import styles from './page.module.css'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Home() {
  // get text elements
  const firstText = useRef(null)
  const secondText = useRef(null)
  // get slider
  const slider = useRef(null)

  let direction = 1 // negative = left, positive = right
  let xPercentage = 0

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    requestAnimationFrame(animation)

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: true,
        onUpdate: event => direction = event.direction * -1
      },
      x: "-=300px"
    })
  }, [])

  const animation = () => {
    // move to left
    if(xPercentage <= -100) {
      xPercentage = 0
    }

    // move to the right
    if(xPercentage > 0) {
      xPercentage = -100
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
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Infinite Text -</p>
          <p ref={secondText}>Infinite Text -</p>
        </div>
      </div>

      <div className={styles.emptySpace}></div>
    </main>
  )
}
