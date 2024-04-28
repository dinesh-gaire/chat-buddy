import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '../context/authContext'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MessageItem = ({message}) => {
    const {user} = useAuth();
    if(user?.userId == message?.userId){
        // my message
        return(
            <View className="flex-row justify-center mr-[-45px] mb-3">
                <View style={{width: wp(80)}}>
                    <View className="flex self-end p-3 rounded-2xl bg-white border border-neutral-200">
                        <Text style={{fontSize:hp(1.9)}}>
                            {message?.text}
                        </Text>
                    </View>
                </View>

            </View>
        )
    }else{
        return(
                <View style={{width: wp(80)}} className="ml-3 mb-3">
                    <View className="flex self-start p-3 px-4 rounded-2xl bg-indigo-100 border border-indigo-200">
                        <Text style={{fontSize:hp(1.9)}}>
                            {message?.text}
                        </Text>
                    </View>
                </View>

        )
    }
}

export default MessageItem