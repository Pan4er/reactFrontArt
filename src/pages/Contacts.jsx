import React from 'react'
import Header from '../components/Header'

const Contacts = () => {
  return (
    <>
      <div className='bg-image bg-red-head'></div>
      <Header/>
      <div className="container-90 text-light">
        <h2 className='fs-max my-3 my-md-5'>Контакты</h2>
        <div className='fs-regular wadik my-3 my-md-5 py-0 py-lg-5'>
          <div className='d-flex gap-3 gap-md-5'>
            <p>Телефон:</p>
            <p>+7 544 323 21 21</p>
          </div>
          <div className='d-flex gap-3 gap-md-5'>
            <p>Телефон:</p>
            <p>+7 544 323 21 21</p>
          </div>
          <div className='d-flex gap-3 gap-md-5'>
            <p>Телефон:</p>
            <p>+7 544 323 21 21</p>
          </div>
          <p className='my-3 my-md-5'>Адреса:</p>
        </div>
      </div>
    </>
  )
}

export default Contacts