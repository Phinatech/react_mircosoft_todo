import React, { useContext } from 'react'

import Allroutes from './Components/Allroutes/Allroutes'
import styled from "styled-components";
import Header from './Components/Header/Header'
import RegisterRoutes from './Components/Allroutes/RegisterRoutes';



const App = () => {


  
  return (
    <div>
<Header/>
    <Container>
      <RegisterRoutes/>
      <Allroutes/>
    </Container>
    </div>
  )
}

export default App

const Container = styled.div`
display: flex;
justify-content: flex-end;
`
