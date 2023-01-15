import React from 'react'
import styled from "styled-components"
import { AiOutlineMenu, AiOutlineStar } from "react-icons/ai";
import { BsFillGrid3X3GapFill, BsSun, BsPerson } from "react-icons/bs";
import { RxCalendar } from "react-icons/rx";

const Sidebar = () => {
  return (
    <div>
      <Side>
        <ToggleButton>
          <AiOutlineMenu />
        </ToggleButton>
        <Myday>
          <Icons>
            <BsSun />
          </Icons>
          My day
        </Myday>

        <Important>
          <Icons>
            <AiOutlineStar />
          </Icons>
          Important
        </Important>

        <Planned>
          <Icons>
            <RxCalendar />
          </Icons>
          Planned
        </Planned>

        <Assigned>
          <Icons>
            <BsPerson />
          </Icons>
          Assigned to me
        </Assigned>

        <Task>
          <Icons>
            <BsFillGrid3X3GapFill />
          </Icons>
          Tasks
        </Task>
      </Side>
    </div>
  );
}

export default Sidebar

const Icons = styled.div`
margin-right: 10px;
margin-top: 7px;
`
const Task = styled.div`
  background-color: #9dccdf;
  display: flex;
  padding: 10px;
  align-items: center;
`;

const Assigned = styled.div`
  background-color: #9dccdf;
  display: flex;
  padding: 10px;
  align-items: center;
`;

const Planned = styled.div`
  background-color: #9dccdf;
  display: flex;
  padding: 10px;
  align-items: center;
`;

const Important = styled.div`
  background-color: azure;
  display: flex;
  padding: 10px;
  align-items: center;
`;

const Myday = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  background-color: lightgray;

  :hover {
    cursor: pointer;
    background-color: #9dccdf;
  }
`;

const ToggleButton = styled.div`
padding: 10px;
`;

const Side = styled.div`
  width: 230px;
  height: calc(100vh - 60px);
  background-color: #f3f0f0;
  box-shadow: 0 0 3px gray;
  display: flex;
  flex-direction: column;
  
`;
