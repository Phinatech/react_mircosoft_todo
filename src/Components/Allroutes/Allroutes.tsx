import React from 'react'
import { useRoutes } from 'react-router-dom'
import HomeScreen from '../HomeScreen/HomeScreen'
import SignInPage from '../Sign-inPage/SignIn'
import SignUpPage from '../Sign-up-page/SignUpPage'

const Allroutes = () => {

let elements =useRoutes([
    {
        path: "/",
        element:<SignUpPage/>
    },
    {
        path:"/SignIn",
       element:<SignInPage/>
    },
    {
        path:"/home",
     element:<HomeScreen/>
    }



    ])

  return (
 elements
  )
}

export default Allroutes