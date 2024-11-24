import React, { useState } from 'react';
import './InfoForm.css';

const InfoForm = () => {
  const [Name,setName] = useState("");
  const [Email,setEmail] = useState("");
  const [Message,setMessage] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('submitted');
  }

  // const handleChange = (e) =>{
  //   setName(e.target.value);
  //   setEmail(e.target.value);
  //   setMessage(e.target.value);
  // }

  return <form onSubmit={handleSubmit}>
    <div className="form-input">
        <input type="text" placeholder='Your Name' value={Name} onChange={(e) => setName(e.target.value)}/>
    </div>
    <div className="form-input">
        <input type="text" placeholder='Your Email' value={Email} onChange={(e) => setEmail(e.target.value)}/>
    </div>
    <div className="form-input">
        <textarea  rows="10" placeholder='Write Message' value={Message} onChange={(e) => setMessage(e.target.value)}></textarea>
    </div>
    <button className='submit-btn' type='submit'>Submit</button>
  </form>
}

export default InfoForm