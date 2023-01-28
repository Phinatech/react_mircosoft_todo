import React from 'react'

const HomeScreen = () => {
  return (
    <div>
      homescreen
    </div>
  )
}

export default HomeScreen

// import React from "react";
// import Header from "../Header/Header";
// import styled from "styled-components";
// import Sidebar from "../sidebar/Sidebar";
// import Taskpage2 from "../Task/Taskpage2";
// import {AiOutlineMenu} from "react-icons/ai"

// const HomeScreen = () => {
// const [show, setShow] = React.useState(true)

// const Toggle = ()=>{
//   setShow(!show)
// }

//   return (
//     <Page>
//       <Head>
//         <Header />
//       </Head>

//       <Bottom>
//         <SideBar2>
//           <Icons onClick={Toggle}>
//             <AiOutlineMenu />
//           </Icons>
//          {show? ( <Sidebar />): null}
//         </SideBar2>

//         <TasksPage>
//           <Taskpage2 />
//         </TasksPage>
//       </Bottom>
//     </Page>
//   );
// };

// export default HomeScreen;

// const Icons = styled.div`
// width: 50px;
// height: 30px;
// display: flex;
// justify-content: center;
// align-items: center;
//   /* background-color: #f3f0f0; */
//   cursor: pointer;
// `;
// const Head = styled.div`
//   width: 100%;
//   height: 60px;
// `;

// const Bottom = styled.div`
//   width: 100%;
//   height: calc(100vh - 60px);
//   background-color: #c2c2c2;
//   display: flex;
// `;

// const SideBar2 = styled.div`
//   width: 250px;
//   height: 100%;
//   background-color: white;
//   /* box-shadow: 0 0 3px gray; */
// `;

// const TasksPage = styled.div``;

// const Page = styled.div`
//   width: 100%;
//   height: 100vh;
// `;

// // const Head = styled.div``;
