import React from 'react'
import Header from '../components/Header'
import AppPreview from '../components/MainPage/AppPreview'
import BlogPreview from '../components/MainPage/BlogPreview'
import Hero from '../components/MainPage/Hero'
import Info from '../components/MainPage/Info'
import Resume from '../components/MainPage/Resume'

const MainPage = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Info/>
      <Resume/>
      <BlogPreview/>
      <AppPreview/>
    </>
  )
}

export default MainPage