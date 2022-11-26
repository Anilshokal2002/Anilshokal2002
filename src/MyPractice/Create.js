// import { redirect, warning } from '@remix-run/router';
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Form } from 'semantic-ui-react'
import { useForm } from 'react-hook-form';
import axios from 'axios';
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
// import{useHistory} from 'react'

const Create = () => {
// let history=useHistory();

const [name,setName]=useState('');
const [phone_number,setPhone_number]=useState('');
const [email,setEmail]= useState("")
const [message,setMessage]= useState("");

// console.log(name);
// console.log(phone_number);
// console.log(email);
// console.log(message);

// console.log("Create");

const { register ,handleSubmit, formState:{errors} } = useForm();

  const onSubmit = (data) => {
    axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
        name,
        phone_number,
        email,
        message
    })
    
    // .then(()=>{
    //     history.push('/Read')
    // })
   
}


// handleSubmit = event =>{
//     event.preventDefault();
// }

  return (
    <>
    <PopUp>
<div className='App'>
        <h1> Get Free Advice</h1>
        <form className='create-form' onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
                
                <Form.Field>
                        <label>Name</label><br/>
                            <input type="text" name='your-name' value={name} size="40"  placeholder="Name"  aria-required="true" area-invalid="false" 
                            {...register("name", {required: true ,minLength:2, maxLength: 20       })}
                                onChange={(e)=>{
                                    setName(e.target.value)
                                }}
                            />      {errors.name && <p style={{color:"red"}}>Your name must be at least 2 characters</p>}
            </Form.Field>
            <Form.Field>
                    <label>number</label><br/>
                        <input type="tel" name="your-phone" value={phone_number} size="40"  placeholder="Phone" aria-required="true" area-invalid="false"
                                {...register("phone_number", {required: true, minLength: 8, maxLength: 14 })} 
                                onChange={(e)=>{
                                    setPhone_number(e.target.value)
                                }}
                        /> {errors.phone_number && <p style={{color:"red"}}>Please enter your number</p>}
                        </Form.Field> 
                    <Form.Field>
                    <label>email</label><br/>
                        <input type="email" name="email" value={email} size="40" aria-required="true" placeholder="e-mail" 
                        {...register("email", {required: "Email is required", pattern: /^\S+@\S+$/i})}
                        area-invalid={errors.email?"true":"false"}
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}
                        /> {errors.email && <p role="alert" style={{color:"red"}}>{errors.email?.message}</p>}
                        {/* //another way// */}
                    </Form.Field>
                    
                
                <div className='col-md-12 contact-block'>
                <Form.Field>
                <label>Text Some  message</label><br/>
                        <textarea name="your-message" value={message} cols="40" rows="10" aria-required='true' aria-invalid="false" placeholder="Message"
                        {...register("message", {required: true, minLength:10, })}
                        onChange={(e)=>{
                            setMessage(e.target.value)
                        }}
                        /> {errors.message && <p style={{color:"red"}}>message should be at lest 10 characters</p>}
                        </Form.Field>
                </div>
                <div>
                <Button  onClick={handleSubmit} type='submit'>send </Button>
                    </div>
            </div>


<h3 style={{color:"red"}}>Name : {name} , phone number : {phone_number}, email: {email},  message: {message} </h3>
        
        </form>
    </div>
</PopUp>

 
</>
)
}

 const PopUp = styled.body`

  @media (max-width: 767px)
${'' /* 
.create-form {
  margin: 0px;
  padding: 0px;
  border-radius: 0px;
  max-width: 1170px;a
  margin: auto;
  width: 96%;
  position: relative;
   */}

  ${'' /* .row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
} */}
${'' /* .col-md-12{
    position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;/
} */}
Button{
    background-color:"red"
}
input{
    
   
   color: #000;
 font-size: 17px;
 font-weight: 400;
 line-height: 1.8;
}

label{
   
   color: #027d71;
 font-size: 17px;
 font-weight: 400;
 line-height: 1.8;
}
textarea{
    line-width: 6rem;
    font-size: 17px;
 font-weight: 400;
} 
.box {
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

}
@import url('https://fonts.googleapis.com/css2?family=Rubik+Microbe&display=swap');
h1{
    font-family: 'Montserrat', sans-serif;
    color:#5900b3;
}

 `

export default Create;


















// ********************************************************














// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// // import { Form } from 'react-router-dom';
// import styled from 'styled-components';

// export default function App() {
//     const array=[];
//     const [data,setData]=useState();
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => setData(data)
//   return (
//     <PopUp>
    
//     <div className='App'>
    
//     <h3> Get Free Advice</h3>
//     <div className='contact-form'>
//     <div className='row'>
//     <form onSubmit={handleSubmit(onSubmit)}>
//     <div className='col-md-12 contact_block'>
//       <input type="text" placeholder=" name"  {...register("name", {required: true, maxLength: 30})} /> {errors.name && <p>Please check the Password</p>}
//       <input type="email" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
//       <input type="tel" placeholder="phone number" {...register("number", {required: true, minLength: 10, maxLength: 10})} />
//       </div>
//       <div className='col-md-12 contact-block'>
//       <textarea type="text" placeholder='Message'{...register("message")} cols="40" rows="10"></textarea>
//       </div>
// <div>
// <tr>
//     <td>{data?.name}</td>
//      <td>{data?.Email}</td>
//      <td>{data?.number}</td>
//      <td>{data?.message}</td>
//      </tr>
// </div>

  
//      {/* */}
//       <input type="submit" />
      
//     </form>
    
//     </div>
//     </div>

//         </div>
// <h1>{onSubmit} </h1>       
//     </PopUp>
//   );
// }
// const PopUp = styled.body`
// @media (max-width: 767px)
// .row {
// display: -ms-flexbox;
// display: flex;
// -ms-flex-wrap: wrap;
// flex-wrap: wrap;
// margin-right: -15px;
// margin-left: -15px;
// ${'' /* padding-top:2rem; */}
// }
// .col-md-12{
// padding-top: 2rem;
// position: relative;
// width: 100%;
// padding-right: 15px;
// padding-left: 15px;
// display:grid;
// }
// .contact-form {
// margin: 0px;
// padding: 0px;
// border-radius: 0px;
// max-width: 1170px;
// margin: auto;
// width: 45%;
// position: relative;
// display:grid;
// }

// ${'' /* .App {
// width: 100%;
// height: 100vh;
// justify-content: center;
// align-items: center;

// } */}
    
//     `