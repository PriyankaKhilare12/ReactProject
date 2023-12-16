import React from 'react'
import './Loginform.css'
function Loginform() {
  return (
    <div>
      <form>
        <label>Name : <input type='text'/></label><br/>
        <label>EmailId : <input type='email'/></label><br/>
        <label>Mobile : <input type='number'/></label><br/>
        <input type='submit'></input>
      </form>
    </div>
  )
}

export default Loginform
