import React from 'react'
import loading from './Settings.gif';

const Loading = () => {
  return (
    <div className='text-center'>
      <img className='my-3' src={loading} alt="loading" />
    </div>
  )
}

export default Loading;