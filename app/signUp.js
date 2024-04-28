import { View, Text, Image, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import Loading from '../components/Loading';
import CustomKeyboardView from '../components/CustomKeyboardView';
import { useAuth } from '../context/authContext';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {register}=useAuth();
  
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const profileUrlRef = useRef("");

  const handleRegister = async()=>{
    if(!usernameRef.current || !emailRef.current || !passwordRef.current || !profileUrlRef.current){
      Alert.alert('Sign Up', 'Please fill all the fields')
      return;
    }
    setIsLoading(true)
    // register process
    let response = await register(emailRef.current, passwordRef.current, usernameRef.current, profileUrlRef.current)
    setIsLoading(false);
    // console.log('got result', response);

    if(!response.success){
      Alert.alert('Sign Up', response.msg)
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
          <Text style={{fontSize:hp(4)}} className="font-bold tracking-wider text-center text-neutral-800">Sign Up</Text>

          <View style={{height:hp(7)}} className="flex-row gap-2 px-3 mx-1 my-3 items-center bg-neutral-100 rounded-xl">
            <Octicons name='person' size={hp(3)} color="gray"/>
            <TextInput
              onChangeText={value=>usernameRef.current=value}
              style={{fontSize: hp(2)}}
              className="flex-1 font-semibold text-neutral-700"
              placeholder='Username'
              placeholderTextColor={'gray'}
            />
          </View>

          <View style={{height:hp(7)}} className="flex-row gap-2 px-3 mx-1 my-3 items-center bg-neutral-100 rounded-xl">
            <Octicons name='mail' size={hp(3)} color="gray"/>
            <TextInput
              onChangeText={value=>emailRef.current=value}
              style={{fontSize: hp(2)}}
              className="flex-1 font-semibold text-neutral-700"
              placeholder='Email Address'
              placeholderTextColor={'gray'}
            />
          </View>

          <View style={{height:hp(7)}} className="flex-row gap-2 px-3 mx-1 my-3 items-center bg-neutral-100 rounded-xl">
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

          <View style={{height:hp(7)}} className="flex-row gap-2 px-3 mx-1 my-3 items-center bg-neutral-100 rounded-xl">
            <Octicons name='image' size={hp(3)} color="gray"/>
            <TextInput
              onChangeText={value=>profileUrlRef.current=value}
              style={{fontSize: hp(2)}}
              className="flex-1 font-semibold text-neutral-700"
              placeholder='Profile Url'
              placeholderTextColor={'gray'}
            />
          </View>
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
              onPress={handleRegister}
            >
              <Text className="text-white font-bold tracking-wider">Sign Up</Text>
            </TouchableOpacity>
          )}
        </View>
        <View className="flex-row justify-center">
          <Text style={{fontSize:hp(1.8)}} className="font-semibold text-neutral-500">Already have an acocunt?  </Text>
          <Pressable
            onPress={()=>router.push('signIn')}
          >
            <Text style={{fontSize:hp(1.8)}} className="font-semibold text-indigo-500">Sign In</Text>
          </Pressable>
        </View>
      </View>
    </CustomKeyboardView>
  )
}

export default SignUp