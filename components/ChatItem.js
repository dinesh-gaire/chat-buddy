import { View, Text, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import { blurhash, formatDate, getRoomId } from '../utils/constants';
import { useAuth } from '../context/authContext';
import { collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const ChatItem = ({item, router, noBorder}) => {
    const {user} = useAuth();
    const [lastMessage, setLastMessage] = useState(undefined)

    useEffect(()=>{

        let roomId = getRoomId(user?.userId, item?.userId);
        const docRef = doc(db, "rooms", roomId)
        const messagesRef = collection(docRef, "messages")
        const q = query(messagesRef, orderBy('createdAt', 'desc'))

        let unsub = onSnapshot(q, (snapshot)=>{
            let allMessages = snapshot.docs.map(doc=>{
                return doc.data();

            })
            setLastMessage(allMessages[0]?allMessages[0]:null);
        })

    },[])

    const openChatRoom=()=>{
        router.push({pathname:'/chatRoom', params:item})
    }

    const renderTime=()=>{
        if(lastMessage){
            let date = lastMessage?.createdAt;
            return formatDate(new Date(date?.seconds*1000))
        }
    }

    const renderLastMessage=()=>{
        if(typeof lastMessage=='undefined') return 'Loading....'
        if(lastMessage){
            if(user?.userId == lastMessage?.userId) return "You: "+lastMessage?.text
            else return lastMessage?.text
        }else{
            return 'Say Hi 👋'
        }
    }
  return (
    <TouchableOpacity
        className={`flex-row justify-between mx-4 items-center gap-3 mb-4 pb-2  ${noBorder?'':'border-b border-b-neutral-300'}`}
        onPress={openChatRoom}
    >
        <Image
            source={{uri:'https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_640.jpg'}}
            style={{height:hp(6), aspectRatio:1}}
            className="rounded-full"
            placeholder={blurhash}
            transition={500}
        />

        {/* name and last message */}
        <View className="flex-1 gap-1">
            <View className="flex-row justify-between">
                <Text style={{fontSize:hp(1.8)}} className="font-semibold text-neutral-800">{item?.username}</Text>
                <Text style={{fontSize:hp(1.6)}} className="font-medium text-neutral-500">{renderTime()}</Text>
            </View>
            <Text style={{fontSize:hp(1.6)}} className="font-medium text-neutral-500">{renderLastMessage()}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ChatItem