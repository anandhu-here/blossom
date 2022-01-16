import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
function Profile() {
    const dispatch = useDispatch()
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Icon name={"account-circle-outline"} size={100} />
                <Text>Anandhu Satheesh</Text>
                <Text>Care Assistant</Text>
                <TouchableOpacity style={{padding:10,paddingHorizontal:30, backgroundColor:'pink', borderRadius:20}} onPress={()=>{
                    auth().signOut()
                    .then(()=>{
                        dispatch({type:'logout_success', action:null})
                    })
                }}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Peformance</Text>
                <View style={{flexDirection:'row'}}>
                    <Text>This week</Text>
                    <Text>70%</Text>
                </View>
            </View>
            <View></View>
        </View>
    )
}

export default Profile
