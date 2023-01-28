import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
    <div className='loader'>
      <div className='loaderTitle'>b</div>
      <div className="progress-bar">
        <span className="bar">
          <span className="progress"></span>
        </span>
      </div>
    </div>
  )
}

export default Loader