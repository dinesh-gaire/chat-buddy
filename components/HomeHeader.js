import { View, Text, Platform } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Image } from 'expo-image';
import { blurhash } from '../utils/constants';
import { useAuth } from '../context/authContext';

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import { MenuItem } from './CustomMenuItems';
import {MaterialIcons, Octicons } from '@expo/vector-icons';

const ios = Platform.OS=='ios'
const HomeHeader = () => {
    const {top} = useSafeAreaInsets();
    const {logout, user} = useAuth();
    // console.log('hello', user.username);

    const handleProfile=()=>{

    }

    
    const handleLogout = async()=>{
        await logout();
    }
  return (
      <View style={{paddingTop:ios?top:top+10}} className="flex-row justify-between  px-5 bg-indigo-400 pb-6 rounded-b-3xl">
        <View>
            <Text  style={{fontSize:hp(3)}} className="font-medium text-white">Chats</Text>
        </View>
        <View>
            <Menu>
                <MenuTrigger>
                    <Image
                        style={{height:hp(4.2), aspectRatio:1, borderRadius:100}}
                        source={{uri:user?.profilrUrl}}
                        placeholder={blurhash}
                        transition={500}
                    />
                </MenuTrigger>
                <MenuOptions
                    customStyles={{
                        optionsContainer:{
                            borderRadius:10,
                            borderCurve:'continuous',
                            marginTop:40,
                            backgroundColor:'white',
                            shadowOpacity:0.2,
                            shadowOffset:{width:0, height:0},
                            width:160
                        }
                    }}
                >
                    <MenuItem
                        text="Profile"
                        action={handleProfile}
                        value={null}
                        icon={<Octicons name='person' size={hp(3)} color="#737373"/>}
                    />
                    <Divider/>
                    <MenuItem
                        text="logout"
                        action={handleLogout}
                        value={null}
                        icon={<MaterialIcons name='logout' size={hp(3)} color="#737373"/>}
                    />
                </MenuOptions>
            </Menu>
        </View>
      </View>
  )
}

export default HomeHeader

const Divider =()=>{
    return(
        <View className="p-[1px] w-full bg-neutral-200"/>
    )
}