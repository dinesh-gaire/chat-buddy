import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MessageItem from './MessageItem'

const MessageList = ({messages, scrollViewRef}) => {
  return (
    <ScrollView
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingTop:10}}
    >
        {
            messages.map((message, index)=>{
                return(
                    <MessageItem message={message} key={index}/>
                )
            })
        }
    </ScrollView>
  )
}

export default MessageList