import { redirect, warning } from '@remix-run/router';
import React, { useState } from 'react'
import styled from 'styled-components'

const Popup = () => {
const [name,setName]=useState('');
const [phone_number,setPhone_number]=useState('');
const [email,setEmail]= useState("")
const [message,setMessage]= useState("")
  return (
    <>
    <PopUp>
<div className='App'>
    <main>
        <h3> Get Free Advice</h3>
        <div className='contact-form'>
            <div className='row'>
                <div className='col-md-12 contact_block'>
                    <div className='in'>
                        <span className='your-name'>
                            <input type="text" name='your-name' value={name} size="40"  placeholder="Name"  aria-required="true" area-invalid="false" 
                                onChange={(e)=>{
                                    setName(e.target.value)
                                }}
                            />
                        </span>
                    </div>
                    <div className='in'>
                        <span className='your-phone'>
                        <input type="tel" name="your-phone" value={phone_number} size="40" aria-required="true" area-invalid="false" placeholder="Phone"
                        
                                onChange={(e)=>{
                                    setPhone_number(e.target.value)
                                }}
                        />
                        </span>
                    </div>
                
                    <div className='in'>
                        <span className='your-phone'>
                        <input type="email" name="email" value={email} size="40" aria-required="true" area-invalid="false" placeholder="e-mail"
                        
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}
                        />
                        </span>
                    </div>
                </div>
                
                <div className='col-md-12 contact-block'>
                    <span>
                        <textarea name="your-message" value={message} cols="40" rows="10" aria-invalid="false" placeholder="Message"
                        onChange={(e)=>{
                            setMessage(e.target.value)
                        }}

                        />
                    </span>
                </div>

                <a>
                    <input type='submit' value="Send Now" ></input>
                </a>
            </div>
        </div>
    </main>
    </div>


        <div className="App" >
            <table>
            <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Message</th>
            </tr>
            <tr>
            <td>{name}</td>
            <td>{phone_number}</td>
            <td>{email}</td>
            <td>{message}</td>
            </tr>
        </table>
        </div>
</PopUp>

</>
)
}

 const PopUp = styled.body`

  @media (max-width: 767px)

.contact-form {
  margin: 0px;
  padding: 0px;
  border-radius: 0px;
  max-width: 1170px;
  margin: auto;
  width: 96%;
  position: relative;

  .row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-md-12{
    position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;/
}
.button{
    color:"red"
}

.App {
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

}

table {
9px solid forestgreen;
  width: 800px;
  height: 200px;
}
  
th {
  border-bottom: 1px solid black;
  text-align: center;
}
  
td {
  text-align: center;
}

 `

export default Popup;