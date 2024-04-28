import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView';
import { useAuth } from '../context/authContext';

const SignIn = () => {
  const {login} = useAuth();
  const [isLoading, setIsLoading] = useState(false)
  
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = async()=>{
    if(!emailRef.current || !passwordRef.current){
      Alert.alert('Sign In', 'Please fill all the fields')
      return;
    }
    setIsLoading(true)
    // login process
    const response = await login(emailRef.current, passwordRef.current)
    setIsLoading(false)

    if(!response.success){
      Alert.alert('Sign In', response.msg)
    }
  }

  return (
    <CustomKeyboardView>
      <StatusBar style='dark'/>
      <View style={{paddingHorizontal:wp(5), paddingVertical:hp(10)}} className="flex-1 gap-5 justify-center">
        <View className="items-center">
          <Ionicons name="chatbubble-ellipses-outline" size={hp(15)} color="black"/>
          <Text style={{color: "gray", fontSize:hp(2)}} className="font-bold">Chat Buddy</Text>
        </View>
        <View>
          <Text style={{fontSize:hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign In</Text>

          <View style={{height:hp(7)}} className="flex-row gap-2 px-1 mx-1 my-5 items-center bg-neutral-100 rounded-xl">
            <Octicons name='mail' size={hp(3)} color="gray"/>
            <TextInput
              onChangeText={value=>emailRef.current=value}
              style={{fontSize: hp(2)}}
              className="flex-1 font-semibold text-neutral-700"
              placeholder='Email Address'
              placeholderTextColor={'gray'}
            />
          </View>

          <View style={{height:hp(7)}} className="flex-row gap-2 px-1 mx-1 my-3 items-center bg-neutral-100 rounded-xl">
            <Octicons name='lock' size={hp(3)} color="gray"/>
            <TextInput
              onChangeText={value=>passwordRef.current=value}
              style={{fontSize: hp(2)}}
              className="flex-1 font-semibold text-neutral-700"
              placeholder='Password'
              secureTextEntry
              placeholderTextColor={'gray'}
            />
          </View>
          <Text style={{fontSize: hp(1.8)}} className='font-semibold text-right text-neutral-500'>forgot password?</Text>
        </View>
        {/* Submit Button */}

        <View>
          {isLoading?(
            <View className="flex-row justify-center">

              <Loading size={hp(10)}/>
            </View>
          ):(
            <TouchableOpacity
              style={{fontSize:hp(2.7), height:hp(5)}}
              className="bg-indigo-500 rounded-xl justify-center items-center"
              onPress={handleLogin}
            >
              <Text className="text-white font-bold tracking-wider">Sign In</Text>
            </TouchableOpacity>
          )}
        </View>
        <View className="flex-row justify-center">
          <Text style={{fontSize:hp(1.8)}} className="font-semibold text-neutral-500">Don't have an acocunt?  </Text>
          <Pressable
            onPress={()=>router.push('signUp')}
          >
            <Text style={{fontSize:hp(1.8)}} className="font-semibold text-indigo-500">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </CustomKeyboardView>
  )
}

export default SignIn