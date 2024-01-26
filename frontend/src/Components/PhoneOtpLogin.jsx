import React, { useState } from 'react'
import OtpInput from './OtpInput';

const PhoneOtpLogin = () => {
    const [email,setemail]=useState("");
    const [showOtpInput,setshowOtpInput]=useState(false);

    const handleEmail = (event) =>{
        setemail(event.target.value);
    }
    const handlesubmit =(event)=>{
        event.preventDefault();   //prevent page refresh

        //email validations
        const regex=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;  //this is in regex form we get it on internet easily
        //check email
        if(!regex.test(email)){
            alter("Invaid email address");
            return;
        }
        
        //call backend api

        //show otp field
        setshowOtpInput(true);
    };

    //submit the otp when 
    const onOtpSubmit=(otp)=>{
        console.log("Login Successfully",otp);
    }
  return (
    <div>
      {!showOtpInput ? <form  onSubmit={handlesubmit}>
        <input type="text" placeholder='Enter your email'
        value={email}
        onChange={handleEmail} 
        />
        <button type="submit">Submit</button>
      </form> : <div>
         <p>Enter otp send to {email}</p>
         <OtpInput length={4} onOtpSubmit={onOtpSubmit}/>
         </div>}
    </div>
  )
}

export default PhoneOtpLogin
