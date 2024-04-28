import { View, Text, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React from 'react'

const ios = Platform.OS == 'ios';
const CustomKeyboardView = ({children, inChat}) => {
  let kavConfig = {};
  let ScrollViewConfig = {};

  if(inChat){
    kavConfig = {keyboardVerticalOffset: 100}
    ScrollViewConfig = {contentContainerStyle: {flex:1}}
  }

  return (
    <KeyboardAvoidingView
        behavior={ios?'padding':'height'}
        style={{flex:1}}
        {...kavConfig}
    >

        <ScrollView
            style={{flex:1}}
            {...ScrollViewConfig}
            bounces={false}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps='handled'
        >
            {children}
        </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default CustomKeyboardView