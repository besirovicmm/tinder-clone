import React from 'react'
import Nav from '../components/Nav'

const Home = () => {
  const authToken = false

  const HandleClick = () => {
    console.log('clicked')
  }
  return (
    <>
      <Nav />
      <div className="home">
        <h1>Swipe Right</h1>
        <button className="primary-button" onClick={HandleClick}>
          {authToken ? 'sign out' : 'Create account'}
        </button>
      </div>
    </>
  )
}

export default Home
