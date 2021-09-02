import React from 'react'
import styles from './GlobalLoading.module.scss'

export interface GlobalLoadingProps {
  color?: 'primary' | 'secondary'
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  className?: string,
  children?: React.ReactChild,
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const GlobalLoading = ({
  color = 'primary',
  size = 'medium',
  className = '',
  backgroundColor,
  children,
  ...props
}: GlobalLoadingProps) => {
  const classes = [styles.wrapper, styles[color], className].join(' ').trim()
  return (
    <div className={classes} style={{ backgroundColor }} {...props}>
      <div className={styles.dotFlashing}></div>
    </div>
  )
}

export default GlobalLoading
