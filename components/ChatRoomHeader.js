import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Stack} from 'expo-router'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { blurhash } from '../utils/constants';

const ChatRoomHeader = ({user, router}) => {
  return (
    <Stack.Screen
        options={{
            title:'',
            headerShadowVisible: false,
            headerLeft:()=>(
                <View className="flex-row py-5 items-center">
                    <TouchableOpacity onPress={()=>router.back()}>
                        <Entypo name='chevron-left' size={hp(4)} color="#737373"/>
                    </TouchableOpacity>
                    <View className='flex-row items-center gap-3 mx-1'>
                        <Image
                            source={user?.profileurl}
                            style={{height:hp(5), aspectRatio:1, borderRadius:100}}
                            placeholder={blurhash}
                            transition={500}
                        />
                        <Text style={{fontSize:hp(2.5)}} className="text-neutral-700 font-medium">
                            {user?.username}
                        </Text>
                    </View>
                </View>
            ),
            headerRight: ()=>(
                <View className="flex-row items-center gap-8">
                    <Ionicons name='call' size={hp(2.8)} color={'#737373'}/>
                    <Ionicons name='videocam' size={hp(2.8)} color='#737373'/>
                </View>
            )
        }}
    />
  )
}

export default ChatRoomHeader