import React from 'react'

import './home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className='home__navigator'>
        <div className='home__navigator__title'>
          <p>CHECK YOU MONEY</p>
          <p>ALL BUDGET <span>$325</span></p>
        </div>
        <div className='home__navigator__btns'>
          <button className='home__navigator__btn__new'>NEW EXPENSES</button>
          <button className='home__navigator__btn__logout'>LOGOUT</button>
        </div>
      </div>

      <div className='home__wrapper'>
        <div className='home__graph'></div>
        <div className='home__table'></div>
      </div>
    </div>
  )
}

export default Home;