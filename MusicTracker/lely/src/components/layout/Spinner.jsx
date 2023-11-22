import React from 'react'
import spinner from './spinner.gif';
export default() => {
  return (
    <div>
      <img 
      src={spinner}
      alt="loading"
      style={{width:'70px',margin:'70px auto 70px auto',display:'block'}}
      ></img>
    </div>
  )
}


