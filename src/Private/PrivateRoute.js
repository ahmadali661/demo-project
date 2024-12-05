import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import Login from '../pages/Auth/Login'

export default function PrivateRoute(props) {
    const {isAuth} = useAuthContext()

    const {Component} = props

    if(!isAuth)
        return <Login/>

  return (
    <Component/>
  )
}
