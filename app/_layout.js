import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Slot, router, useSegments } from 'expo-router'
import { AuthContextProvider, useAuth } from '../context/authContext'
import { MenuProvider } from 'react-native-popup-menu'

const MainLayout = ()=>{
  const {isAuthenticated} = useAuth();
  const segments = useSegments();

  useEffect(()=>{
    //check if user is authenticated or not
    if(typeof isAuthenticated=='undefined') return;
    const inApp = segments[0]=='(app)';
    if(isAuthenticated && !inApp){
      // redirect to home
      router.replace('home')
    }else if(isAuthenticated==false){
      // redirect to signIn
      router.replace('signIn')
    }
  },[isAuthenticated])

  return <Slot/>
}

const RootLayout = () => {
  return (
    <MenuProvider>
        <AuthContextProvider>
          <MainLayout/>
        </AuthContextProvider>
    </MenuProvider>
  )
}

export default RootLayout