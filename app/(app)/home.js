import { View, Text, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/authContext'
import { StatusBar } from 'expo-status-bar';
import ChatList from '../../components/ChatList';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { getDocs, query, where } from 'firebase/firestore';
import { userRef } from '../../firebaseConfig';

const Home = () => {
  const {user} = useAuth();
  const [users, setUsers] = useState([])

  useEffect(()=>{
    if(user?.uid) getUsers();
  },[])

  const getUsers=async()=>{
    //fetch Users
    const q = query(userRef, where('userId', '!=', user?.uid))

    const querySnapShot = await getDocs(q);
    let data = [];

    querySnapShot.forEach(doc=>{
      data.push({...doc.data()});
    })
    setUsers(data)
    // console.log('got Users:', data);
  }

  return (
    <View className="flex-1 bg-white">
      <StatusBar style='light'/>
      {users.length>0?(
        <ChatList users={users}/>
      ):(
        <View className="flex items-center" style={{top:hp(30)}}>
          <ActivityIndicator size='large'/>
        </View>
      )}
    </View>
  )
}

export default Home