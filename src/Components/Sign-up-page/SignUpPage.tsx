import React,{useContext, useState} from 'react'
import styled from "styled-components"
import pics from "../images/micrologo.jpg"
import { NavLink } from 'react-router-dom'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { Accessing } from '../Global/Global'

const SignUpPage = () => {
const SinginContent = useContext(Accessing)

  const [name, setName] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")

  const navigate = useNavigate()
  const RegisterUser =  async (e: any)=>{
    e.preventDefault()
 await axios
   .post("http://localhost:2001/api/register", {
     name,
     email,
     password,
   })
   .then((res) => {
     console.log(res.data)
     SinginContent?.setUserData(res.data.data)
navigate("/SignIn");
    
   })
   .catch((err: any) => {
     console.log(err.message);
   });
     
  }

 
  return (
    <Container>
      <Card onSubmit={RegisterUser}>
        <img src={pics} alt="" />
        <h4>Create Account</h4>
        <input
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value) 
          }}
          type="text"
          placeholder="Enter name"
          />
        <input
          required
          value={email}
          onChange={(e) => {
          
            setEmail(e.target.value);
          }}
          type="email"
          placeholder="Enter email"
          />
        <input
          required
          value={password}
          onChange={(e) => {
        
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="Password"
        />

        <Div>
          Already have an account?
          <Span>Sign in</Span>
        </Div>

        <Hold>
          <button type="submit">Next</button>
        </Hold>
        {/* <Box>Please enter the required</Box> */}
      </Card>
    </Container>
  );
}

export default SignUpPage

const Box = styled.button`
width: 130px;
height: 30px;
background-color: red;
border: 0;
position: relative;

::after{
  background-color: red;
  left:4%;
  width: 15px;
  height: 15px;
  transform: rotate(45deg);
}

`

const Div = styled.div`
display: flex;
`

const Hold = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 20px;

button{
  width: 80px;
  height: 30px;
  border: 0;
  background-color: grey;
  border-radius: 3px;
}
`
const Span = styled.div`
margin-left:10px;
`
const Card = styled.form`
width: 300px;
height: 270px;
box-shadow: rgba(0,0,0,0.24) 0px 3px 8px;
background-color: white;
padding: 30px;

img{
  height: 25px;
  width: 100px;
  object-fit: cover;
}
h4{
  margin: 0;
  margin-top: 15px;
  margin-bottom: 15px;
}
input{
  width: 100%;
  height: 20px;
  border: 0;
  outline: 0;
  border-bottom: 1px solid grey;
  margin-bottom: 15px;
}
`
const Container = styled.div`
width: 100%;
height: calc(100vh - 60px);
background-color: skyblue;
display: flex;
align-items: center;
justify-content: center;
`
