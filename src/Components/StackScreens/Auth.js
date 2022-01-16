import React, { useEffect, useState } from 'react'
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { base_color } from '../../data'

const styles = StyleSheet.create({
    card:{
            justifyContent:'center',
            alignItems:'center', 
            paddingHorizontal:40,
            paddingVertical:40,
            backgroundColor:"#fff",
            elevation:10,
            marginHorizontal:5,
            marginVertical:10,
            borderRadius:20
        }
})

function Auth({navigation}) {
    const [fadevalue1] = useState(new Animated.Value(0))
    const [fadevalue2] = useState(new Animated.Value(0))
    const [fadevalue3] = useState(new Animated.Value(0))

    useEffect(()=>{
        Animated.timing(fadevalue1, {
            toValue:1,
            duration: 1000,
        }).start();
        Animated.timing(fadevalue2,{
            toValue:1,
            delay:500,
            duration:1000
        }).start()
        Animated.timing(fadevalue3,{
            toValue:1,
            delay:1000,
            duration:1000
        }).start()
    },[])
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:"center", backgroundColor:base_color}} >
            <Animated.View style={{ opacity:fadevalue1, width:'70%'}}>
                <Text  style={{ padding:30, color:"#595959", textShadowColor:'black',fontStyle:'italic', fontSize:25,fontWeight:"600", textAlign:'center'}}>Welcome to Blossomvalley care, recogonise yourself!</Text>
            </Animated.View>
            <View style={{flexDirection:'row'}}>
            <Animated.View style={{opacity:fadevalue2}}>
                <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('AuthHome')} >
                    <Image source={{uri:"https://img.icons8.com/color/48/000000/home.png"}} style={{width:40, height:50}} />
                    
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={{opacity:fadevalue3}}>
                <TouchableOpacity style={styles.card} onPress={()=>navigation.navigate('AuthStaff')}>
                    <Image source={{uri:"https://img.icons8.com/fluency/48/000000/conference-background-selected.png"}} style={{width:40, height:50}} />
                    
                </TouchableOpacity>
            </Animated.View>
            </View>
        </View>
    )
}

export default Auth
