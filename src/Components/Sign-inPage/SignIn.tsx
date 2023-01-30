import React, { useContext, useState } from "react";
import styled from "styled-components";
import pics from "../images/micrologo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../Global/Global";
import axios from "axios";
import Swal from "sweetalert2";

const SignInPage = () => {
  const[email, setEmail] = useState("")
  const navigate = useNavigate();
  const {setcurrentUser} = useContext(GlobalContext)

  const LoginUser =async (e:any) => {
    e.preventDefault();
    await axios.post("http://localhost:2001/api/login",{
      email,
    })
    .then((res:any)=>{
      console.log(res);
      window.localStorage.setItem("userData", JSON.stringify(res.data.data));
      Swal.fire({
        icon: "success",
        title: "Successfully Sign In",
        // text: res!.response!.data!.message,
        timer: 3000,
      });
      navigate("/myday");
      window.location.reload();
    })
    .catch((res)=>{
        Swal.fire({
          icon: "success",
          title: "Successfully Sign In",
          text: res!.response!.data!.message,
          timer: 3000,
        });
    })
  }

  return (
    <Container>
      <Card onSubmit={LoginUser}>
        <img src={pics} alt="" />
        <h4>Welcome back</h4>

        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          placeholder="Enter your email"
        />

        <Div>
          Already have an account?
          <Link to="/">Sign in</Link>
        </Div>

        <Hold>
          <button type="submit">Sign Up</button>
        </Hold>
        {/* <Box>Please enter the required</Box> */}
      </Card>
    </Container>
  );
};

export default SignInPage;
const Box = styled.button`
  width: 130px;
  height: 30px;
  background-color: red;
  border: 0;
  position: relative;

  ::after {
    background-color: red;
    left: 4%;
    width: 15px;
    height: 15px;
    transform: rotate(45deg);
  }
`;

const Div = styled.div`
  display: flex;
`;

const Hold = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  button {
    width: 80px;
    height: 30px;
    border: 0;
    background-color: grey;
    border-radius: 3px;
  }
`;
const Span = styled.div`
  margin-left: 10px;
`;
const Card = styled.form`
  width: 300px;
  height: 270px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: white;
  padding: 30px;

  img {
    height: 25px;
    width: 100px;
    object-fit: cover;
  }
  h4 {
    margin: 0;
    margin-top: 15px;
    margin-bottom: 15px;
  }
  input {
    width: 100%;
    height: 20px;
    border: 0;
    outline: 0;
    border-bottom: 1px solid grey;
    margin-bottom: 15px;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #bad8e4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
