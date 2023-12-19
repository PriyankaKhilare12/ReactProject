import React from 'react'
import './Loginform.css'
// import { IconName } from "react-icons/";
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'


function Loginform() {
  
  return (
    <div className='body'>
    <div>
      <form action="https://formsubmit.co/79895b84cf92c2d791bef478a32c2780" method="post">

        <br/><br/>
        <label for="firstName" className='label' ><b>First Name </b></label><br/>
        <input type='text' className='input-field' name='firstName' id='firstNname' placeholder='Enter your First Name' required/><br/><br/>

        <label for="lastName" className='label'><b>Last Name </b></label><br/>
        <input type='text' className='input-field' name='lastName' id='lastNname' placeholder='Enter your Last Name' required/><br/><br/>
        
        <label for="emailid" className='label'><b>Email </b></label> <br/>
        <input type='email' className='input-field'  name='emailid' id='emailid' placeholder='xyz@gmail.com' required/> <br/><br/>
       
        <label for='mobile' className='label'><b>Mobile </b></label> <br/>
        <input type='number' className='input-field' name='mobile' id='mobile' placeholder='123456789' required/><br/><br/>
        
        <label for='dob' className='label'><b>Date of Birth </b></label><br/>
        <input type='date' className='input-field' name='birthdate' id='birthdate' placeholder=' / /  ' required /><br/><br/>

        <label for='address' className='label'><b>Address </b></label><br/>
        <input type='text' className='input-field' name='address' id='address' placeholder='Enter your address' required></input><br/><br/>

        <label for='gender' className='label'><b>Gender </b></label><br/>
        <input type='radio'  name='male' id='male'/>
        <label for='male'>Male</label>
        <input type='radio' name='female' id='female' />
        <label for='female'>Female</label><br/><br/>

        <label  className='label'><b>Languages Known </b></label><br/>
        <input type='radio' name='english' id='english'/>
        <label>English</label>
        <input type='radio' name='hindi' id='hindi'></input>
        <labrl>Hindi</labrl>
        <input type='radio' name='marathi' id='marathi'></input>
        <label>Marathi</label><br/><br/>

        <label className='label'><b>Password</b></label><br></br>
        <input type='text' className='input-field'  name='password' id='psw' value='' placeholder='12@DH' required></input><br/><br/>

        <label className='label'><b>Reapit-Password</b></label><br></br>
        <input type='text' className='input-field'  name='re-password' id='repsw' value='' placeholder='12@DH' required></input><br/><br/>


        <button type='submit' className='btn'><b>Submit</b></button><br/><br/>
        
       
    
    
    
    
    
        </form>
    </div>
    </div>
  )
}

export default Loginform
