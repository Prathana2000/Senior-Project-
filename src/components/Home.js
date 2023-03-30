import React from 'react'
import Header from './Header'
import Banner from './Banner'
import FromComponent from './FormComponent'

function Home() {
  return (
    <div className="page">
      <div className="loading" id="loading">
        <div className="loading-layout">
        <div className="loader"></div>
        </div>
      </div>
      <Header />
      <Banner />
      <div className="main-page">
        <FromComponent />
      </div>
    </div>
  )
}

export default Home
