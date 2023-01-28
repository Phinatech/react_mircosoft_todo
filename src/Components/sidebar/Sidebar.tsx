import React from 'react'
import styled from "styled-components"
import { AiOutlineMenu, AiOutlineStar, AiOutlinePlus } from "react-icons/ai";
import {
  BsFillGrid3X3GapFill,
  BsSun,
  BsPerson,
  BsEnvelope,
} from "react-icons/bs";
 import { ImAttachment } from "react-icons/im";
 import { MdDoneOutline } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <Side2>
        <Side>
          <NavLink to="/home/important">
            <Plan>
              <Day>
                <Icons>
                  <BsSun />
                </Icons>
                <Task>My Day</Task>
              </Day>
              <Count>1</Count>
            </Plan>
          </NavLink>

          <Plan>
            <Day>
              <Icons>
                <AiOutlineStar />
              </Icons>
              <Task>Important</Task>
            </Day>
            <Count>5</Count>
          </Plan>

          <Plan>
            <Day>
              <Icons>
                <RxCalendar />
              </Icons>
              <Task>Planned</Task>
            </Day>
            <Count>6</Count>
          </Plan>

          <Plan>
            <Day>
              <Icons>
                <BsPerson />
              </Icons>
              <Task> Assigned to me</Task>
            </Day>
            <Count>7</Count>
          </Plan>

          <Plan>
            <Day>
              <Icons>
                <AiOutlineMenu />
              </Icons>
              <Task>Tasks</Task>
            </Day>
            <Count>8</Count>
          </Plan>

          <hr style={{ border: "0.5px solid lightgray", width: "90%" }} />

          <Plan style={{ color: "blue" }}>
            <Day>
              <Icons>
                <AiOutlinePlus />
              </Icons>
              <Task>Tasks</Task>
            </Day>
            <Count>8</Count>
          </Plan>
        </Side>

        <DownComp>
          <Icons2>
            <BsEnvelope />
          </Icons2>
          <Icons2>
            <RxCalendar />
          </Icons2>
          <Icons2>
            <BsPerson />
          </Icons2>
          <Icons2>
            <ImAttachment />
          </Icons2>
          <Icons2>
            <MdDoneOutline />
          </Icons2>
        </DownComp>
      </Side2>
    </div>
  );
}

export default Sidebar

const DownComp = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;


`;
const Icons2 = styled.div`
  width: 50px;
  height: 30px;
  /* background-color: red; */
  color: #5e2d28;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover{
    background-color: #e7e1e1;
  }
`;
const Icons = styled.div`
  margin-left: 15px;
  color: #5e2d28;
`;
const Task = styled.div`
  margin-left: 10px;
  color: #5e2d28;
`;
const Count = styled.div`
margin-right:15px;
/* background-color: red; */
`
const Day = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const Plan = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
:hover{
  background-color: lightgrey;
  cursor: pointer;
}

`
const Side = styled.div`
  width: 250px;
`;
const Side2 = styled.div`
  width: 250px;
  height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fffdfd;

  /* background-color: red; */
`;
