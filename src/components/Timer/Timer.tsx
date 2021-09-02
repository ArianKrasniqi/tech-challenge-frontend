import React, { useState, useEffect, SetStateAction } from 'react'
import styles from './Timer.module.scss'
import { intervalToDuration } from 'date-fns'

export interface TimerProps {
  start: Date
  color?: 'primary' | 'secondary'
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Timer = ({
  start,
  color = 'primary',
  size = 'medium',
  className = '',
  backgroundColor,
  children,
  ...props
}: TimerProps) => {
  const [hours, setHours] = useState<SetStateAction<number | undefined>>(0)
  const [minutes, setMinutes] = useState<SetStateAction<number | undefined>>(0)
  const [seconds, setSeconds] = useState<SetStateAction<number | undefined>>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const { hours, minutes, seconds } = intervalToDuration({ start: start, end: new Date() })
      setHours(hours)
      setMinutes(minutes)
      setSeconds(seconds)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const classes = [styles.wrapper, styles[color], className].join(' ').trim()
  return (
    <div className={classes} style={{ backgroundColor }} {...props}>
      <div className={styles.timer}>
        <div className={styles.unit}>
          {hours}
          <span>Hours</span>
        </div>
        <span>:</span>
        <div className={styles.unit}>
          {minutes}
          <span>Minutes</span>
        </div>
        <span>:</span>
        <div className={styles.unit}>
          {seconds}
          <span>Seconds</span>
        </div>
      </div>
    </div>
  )
}

export default Timer
