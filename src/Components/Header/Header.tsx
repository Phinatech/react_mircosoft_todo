import React from 'react'
import styled from 'styled-components'
import { BsFillGrid3X3GapFill, } from "react-icons/bs";
import { AiOutlineSearch, AiOutlineNotification } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { BiQuestionMark } from "react-icons/bi";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <First>
          <BsFillGrid3X3GapFill />
          <span>To Do</span>
        </First>
        <Middle>
          <Search>
            <AiOutlineSearch />
          </Search>
          <input placeholder='Search' type="text" />
        </Middle>
        <Last>
          <Icons>
            <FiSettings />
          </Icons>
          <Icons>
            <BiQuestionMark />
          </Icons>
          <Icons>
            <AiOutlineNotification />
          </Icons>
          <Circle>Ju</Circle>
        </Last>
      </Wrapper>
    </Container>
  );
}

export default Header;

const Circle = styled.button`
width: 40px;
background-color: transparent;

border: 1px solid white ;
border-radius: 50%;
font-size: 15px;
color: #fff;
/* margin-left: 5px; */
`
const Icons = styled.div`
  width: 45px;
  font-size: 20px;
  color: #fff;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  :hover {
    cursor: pointer;
    background-color: rgba(3, 37, 102, 0.897);
    transition: all 350ms;
  }
`;
const Last = styled.div`
  display: flex;
  height: 100%;

  
`;
const Search  = styled.div`
width: 50px;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
color: #4e4ef1;

`
const Middle = styled.div`
  height: 100%;
  width: 400px;
  display: flex;
  background-color: #fff;
  border-radius: 5px;

  input {
    outline: none;
    border: none;
    flex: 1;
    border-radius: 5px;
    font-size: 16px;
  
  }
`;
const First = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
font-size: large;
color: #fff;
span{
    margin-left: 10px;
    font-weight: bold;
}

`
const Wrapper = styled.div`
width: 95%;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Container = styled.div`
    width: 100%;
    height: 60px;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`