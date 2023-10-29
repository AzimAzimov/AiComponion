
'use client'
import React from 'react'
import scss from './Spinner.module.scss'


const Spinner = () => {
  return (
    <div className={scss.preloader_container}>
      <div className={scss.spinner__loading__container}>
        <div className={scss.spinner__loading}>
          <div className={`${scss.inner} ${scss.one}`}></div>
          <div className={`${scss.inner} ${scss.two}`}></div>
          <div className={`${scss.inner} ${scss.three}`}></div>
        </div>
      </div>
    </div>
  )
}

export default Spinner