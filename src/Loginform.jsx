import React from 'react'
import './Loginform.css'
function Loginform() {
  return (
    <div class="backg">
    <div>
      <form action="https://formsubmit.co/79895b84cf92c2d791bef478a32c2780" method="post">

        <label>Name : <br/>
          <input type='text' name='name' id='name' placeholder='Enter your name'/>
        </label><br/><br/>

        <label>EmailId : <br/>
          <input type='email' name='emailid' id='emailid' placeholder='xyz@gmail.com'/>
        </label><br/><br/>

        <label>Mobile : <br/>
          <input type='number' name='mobile' id='mobile' placeholder='123456789'/>
        </label><br/><br/>

        <input type='submit'></input>
      </form>
    </div>
    </div>
  )
}

export default Loginform
