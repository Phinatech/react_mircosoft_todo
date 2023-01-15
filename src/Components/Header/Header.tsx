import React from 'react'
import styled from 'styled-components'
import { BsFillGrid3X3GapFill, } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <First>
          <BsFillGrid3X3GapFill />
          <span>To Do</span>
        </First>
        <Middle>
          <Search><AiOutlineSearch/></Search>
         <input type="text" />
        </Middle>
        <Last></Last>
      </Wrapper>
    </Container>
  );
}

export default Header;

const Last = styled.div``
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
width: 95vw;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
`
const Container = styled.div`
    width: 100vw;
    height: 60px;
    background-color: blue;
    display: flex;
    justify-content: center;
    align-items: center;
`