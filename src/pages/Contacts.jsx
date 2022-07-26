import { Icon } from '@iconify/react'
import React from 'react'
import Header from '../components/Header'

const Contacts = () => {
  return (
    <>
      <div className='bg-image-contacts bg-red-head'></div>
      <Header/>
      <div className="container-90 text-light">
        <h2 className='fs-max my-3 my-md-5'>Контакты</h2>
        <div className='fs-regular wadik mt-3 mt-md-5 pt-0 pb-3 pt-lg-5'>
          <div className='d-flex gap-3 gap-md-5'>
            <p>Телефон:</p>
            <p>+7 911 242-76-73</p>
          </div>
          <div className='d-flex gap-3 gap-md-5'>
            <p>Телефон:</p>
            <p>+7 961 800-41-36</p>
          </div>
          <div className='my-2 my-md-5'>
            <p>Социальные сети:</p>
            <div className='d-flex py-3 gap-3 gap-md-5 social-media-icon'>
              <a 
                href='https://vk.com/art_structura'
                style={{color: "white"}}>
                <Icon icon="el:vkontakte"/>
              </a>
              <a 
                href='https://www.instagram.com/art_structura/'
                style={{color: "white"}}>
                <Icon icon="akar-icons:instagram-fill"/>
              </a>
              <a 
                href='https://www.youtube.com/channel/UCEOKXEd7Kr4lSYkOkjq70aw'
                style={{color: "white"}}>
                <Icon icon="akar-icons:youtube-fill"/>
              </a>
              <a 
                href='https://t.me/art_structura1'
                style={{color: "white"}}>
                <Icon icon="akar-icons:telegram-fill"/>
              </a>
            </div>
          </div>
          <p className='my-3 my-md-5'>Адреса:</p>
          <p>113, пр-т. Энгельса, корп. 1, г. Санкт-Петербург, 194354</p>
        </div>
      </div>
    </>
  )
}

export default Contacts