import React, { useContext } from 'react'

import Allroutes from './Components/Allroutes/Allroutes'
import styled from "styled-components";
import Header from './Components/Header/Header'
import RegisterRoutes from './Components/Allroutes/RegisterRoutes';
import { GlobalContext } from './Components/Global/Global';
import DetailsComp from './Components/DetailsComp/DetailsComp';



const App = () => {

  const {currentUser, showDetails} = useContext(GlobalContext)
  return (
    <div>
      {currentUser?.name ? <Header /> : null}
      <RegisterRoutes />
      <Container>
        <Allroutes/>
   {showDetails ? <DetailsComp/>: null}
      </Container>
    </div>
  );
}

export default App

const Container = styled.div`
display: flex;
justify-content: flex-end;
`
