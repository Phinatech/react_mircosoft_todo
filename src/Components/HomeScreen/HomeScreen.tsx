import React from 'react'
import Header from '../Header/Header'
import styled from "styled-components"
import Sidebar from "./Sidebar"

const HomeScreen = () => {
  return (
    <Page>
      <Head>
        <Header />
      </Head>

      <Bottom>
        <SideBar2>
            <Sidebar/>
        </SideBar2>

        <TasksPage></TasksPage>
      </Bottom>
    </Page>
  );
}

export default HomeScreen

const Head = styled.div`
  width: 100%;
  height: 60px;
`;

const Bottom = styled.div`
width: 100%;
height: calc(100vh - 60px);
background-color: #c2c2c2;
display: flex;
`;

const SideBar2 = styled.div`
width: 230px;
height: 100%;
background-color: white;
box-shadow: 0 0 3px gray;
`;

const TasksPage = styled.div``;

const Page = styled.div`
width: 100%;
height: 100vh;
`;

// const Head = styled.div``;
