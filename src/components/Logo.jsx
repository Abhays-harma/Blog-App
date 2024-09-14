import React from 'react'

import googlephotos from '../assets/googlephotos.png'

function Logo({width = '100px'}) {
  return (
    <img src={googlephotos} className='w-10' alt="" />
  )
}

export default Logo