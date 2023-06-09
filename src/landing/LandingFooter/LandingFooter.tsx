import React from 'react'
import styles from './LandingFooter.module.scss'
import Logo from '@/components/_icons/logo/Logo'
export const LandingFooter = () => {
  return (
    <div className={styles.container} data-testid='test-LandingFooter'>
      <Logo color={'white'} />
      <span>Сделано с ♥️ командой DST</span>
    </div>
  )
}

LandingFooter.displayName = 'LandingFooter'

export default LandingFooter
