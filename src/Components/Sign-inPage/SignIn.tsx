import React from "react";
import styled from "styled-components";
import pics from "../images/micrologo.jpg";
import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  return (
    <Container>
      <Wrapper>
        <Layer>
          <Logo>
            <img src={pics} alt="" />
          </Logo>
          <h3>Sign In</h3>
          <Form>
            <input placeholder="Email,phone or skype" type="email" />
          </Form>
          <Account>
            No Account? <NavLink to="/"><span>Sign Up</span></NavLink>
          </Account>
          <Buttons>
            <Button bg="grey" col="#000">
              Back
            </Button>
            <Button bg="blue" col="#fff">
              Next
            </Button>
          </Buttons>
        </Layer>
      </Wrapper>
    </Container>
  );
};

export default SignUpPage;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Button = styled.button<{ bg: string; col: string }>`
  height: 45px;
  width: 100px;
  border: none;

  background-color: ${(props) => props.bg};
  margin-top: 50px;
  margin-left: 10px;
  color: ${(props) => props.col};
`;
const Account = styled.div`
  margin-top: 10px;

  span {
    color: blue;
  }
`;
const Layer = styled.div`
  height: 300px;
  width: 400px;

  h3 {
    color: grey;
  }
`;
const Wrapper = styled.div`
  height: 400px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;

  input {
    border: none;
    border-bottom: 1px solid grey;
    margin-top: 20px;
    padding-bottom: 8px;
  }
`;
const Logo = styled.div`
  width: 200px;
  height: 40px;
  background-color: #ffff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;
