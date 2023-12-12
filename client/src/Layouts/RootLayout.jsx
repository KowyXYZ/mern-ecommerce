import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import TopBar from '../Components/TopBar'

function RootLayout() {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default RootLayout
