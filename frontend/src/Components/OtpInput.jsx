import React, { useState } from 'react'

const OtpInput = ({length=4,onOtpSubmit=()=>{}}) => {
    //for storing the otp
    const [otp,setOtp]=useState(new Array(length).fill(""));
    console.log(otp)
  return (

    <div>
      {otp.map((value,index)=>{
        return <input
        key={index}
        type='text'
        value={value}
        />
      })}

    </div>
  )
}

export default OtpInput
