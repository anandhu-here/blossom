import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, Alert,
    Button,
    Linking,
    PermissionsAndroid,
    Platform,
    ScrollView,
    Switch,
    ToastAndroid,
    View,
    Image, } from 'react-native'
import { base_color, home_buttons, home_but_color } from '../../data';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/Ionicons';
import LocationEnabler from 'react-native-location-enabler';
import { ActivityIndicator } from 'react-native-paper';
import { useSelector } from 'react-redux';


const {
    PRIORITIES: { HIGH_ACCURACY },
    useLocationSettings,
  } = LocationEnabler;


const styles = StyleSheet.create({
    homeBut:{marginBottom:15, width:'30%',height:"30%", backgroundColor:base_color,elevation:5, borderRadius:10, justifyContent:'center', alignItems:'center'}
    ,homeIcons:{width:50, height:50}
  })


const Home = () =>{
    const navigation = useNavigation();
    const [signed, setsigned] = useState(false);
    const [signedOut, setSignedOut] = useState(false);
    const [loading, setLoading] = useState(false);
    const [enabled, requestResolution] = useLocationSettings(
        {
          priority: HIGH_ACCURACY, // default BALANCED_POWER_ACCURACY
          alwaysShow: true, // default false
          needBle: true, // default false
        },
        false /* optional: default undefined */
      );
    const [
        currentLongitude,
        setCurrentLongitude
      ] = useState(null);
      const [
        currentLatitude,
        setCurrentLatitude
      ] = useState(null);
      const [
        locationStatus,
        setLocationStatus
      ] = useState('');
      
    //   const requestLocationPermission = new Promise((res, rej) => {
    //     if (Platform.OS === 'ios') {
    //       getOneTimeLocation();
    //       subscribeLocationLocation();
    //     } 
    //     else {
    //     try {
    //         PermissionsAndroid.request(
    //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    //         ).then(granted=>{
    //             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //                 //To Check, If Permission is granted
    //                 Geolocation.getCurrentPosition(
    //                     //Will give you the current location
    //                     (position) => {
    //                       res(position);
    //                     },
    //                     (error) => {
    //                       rej(error)
    //                     },
    //                     {
    //                       enableHighAccuracy: false,
    //                       timeout: 30000,
    //                       maximumAge: 1000
    //                     },
    //                   );
    //               } 
    //             else {
    //                 rej('403')
    //             }
    //         }).catch(e=>rej(e))
    
          
    //     }
    //     catch{
    //         rej('error')
    //     }
    // }})

    //   const getOneTimeLocation = () => {
    //     setLocationStatus('Getting Location ...');
        
    //   };
    
    //   const subscribeLocationLocation = () => {
    //     watchID = Geolocation.watchPosition(
    //       (position) => {
    //         //Will give you the location on location change
            
    //         setLocationStatus('You are Here');
    //         console.log(position, "mlmlml");
    
    //         //getting the Longitude from the location json        
    //         const currentLongitude =
    //           JSON.stringify(position.coords.longitude);
    
    //         //getting the Latitude from the location json
    //         const currentLatitude = 
    //           JSON.stringify(position.coords.latitude);
    
    //         //Setting Longitude state
    //         setCurrentLongitude(currentLongitude);
    
    //         //Setting Latitude state
    //         setCurrentLatitude(currentLatitude);
    //       },
    //       (error) => {
    //         setLocationStatus(error.message);
    //       },
    //       {
    //         enableHighAccuracy: false,
    //         maximumAge: 1000
    //       },
    //     );
    //   };
    // useEffect(()=>{
    //     if(!enabled){
    //         requestResolution()
    //     }
    //     setLoading(true);
    //     requestLocationPermission.then(pos=>{
    //         setCurrentLatitude(pos.coords.latitude)
    //         setCurrentLongitude(pos.coords.longitude)
    //         setLoading(false);

    //     }).catch(e=>{
    //         setLoading(false)
    //     })
        
    // }, [])
    
    // useEffect(()=>{
    //     console.log(currentLatitude, "kuna")
        
    // }, [currentLatitude, enabled])
    const auth_state = useSelector(state=>state.auth);
    const user_state = useSelector(state=>state.user);

    return(
        <>
            {loading?(
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size={"large"} />
                </View>
            ):(
                <View style={{
                    flex:1,
                    backgroundColor:'#fff',
                    alignItems:"center"
                }} >
                    <View style={{flex:3, justifyContent:'center', alignItems:"center",}} >
                        <Text style={{fontSize:25}} >Hello,</Text>
                        <Text style={{fontSize:30}} >{user_state.firstName}{" "}{user_state.lastName}</Text>
                        {signed&&<Text style={{fontSize:17}}>You have clocked in to Brendon care</Text>}
                    </View>
                    <View style={{flex:6,backgroundColor:'#f2f2f2', borderTopLeftRadius:50, borderTopRightRadius:50, padding:10, width:'95%' }} >
                        <View  style={{flex:2, flexDirection:'row', alignItems:"center", padding:1,borderWidth:0.5,elevation:10,backgroundColor:'white', borderRadius:70, justifyContent:'space-evenly',borderColor:'teal'}} >
                            <TouchableOpacity onPress={()=>{
                            
                            if(currentLatitude){
                                
                                setsigned(true);
                                Alert.alert("You are just signed in ")
                            }
                            console.log(currentLatitude, currentLongitude)
                        }} >
                                <Icon name="enter-outline" size={25} color={signed?"teal":'grey'}/>
                            </TouchableOpacity>
                            <View style={{alignItems:'center'}} >
                                <Text style={{fontSize:30, fontWeight:"700", color:"grey"}} >TODAY</Text>
                                <Text style={{fontSize:20, color:'grey'}}>08:00 - 20:00</Text>
                                <Text style={{fontSize:20, color:'grey'}} >BrendonCare</Text>
                            </View>
                            <TouchableOpacity onPress={()=>navigation.navigate('Timesheet')}>
                                <Icon name="exit-outline" size={25} color={"grey"}/> 
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{flex:6}} >
                            <View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly', flexWrap:'wrap', alignItems:'flex-start', paddingTop:20}}>
                                <TouchableOpacity onPress={()=>{
                                        navigation.navigate('Timesheet')}} style={styles.homeBut} >
                                    <Image source={{uri:"https://img.icons8.com/dusk/64/000000/property-time.png"}} style={styles.homeIcons} />
                                    <Text style={{fontSize:15, fontWeight:"700", color:'white'}}>Timesheet</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.homeBut} >
                                    <Image source={{uri:"https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-check-list-marketing-seo-flatart-icons-lineal-color-flatarticons.png"}} style={styles.homeIcons} />
                                    <Text style={{fontSize:15, fontWeight:"700", color:'white'}}>Vacancies</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity  style={styles.homeBut} >
                                    <Image source={{uri:"https://img.icons8.com/color/48/000000/search--v4.png"}} style={styles.homeIcons} />
                                    <Text style={{fontSize:15, fontWeight:"700", color:'white'}}>Bookings</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.homeBut} >
                                    <Image source={{uri:"https://img.icons8.com/color/48/000000/home.png"}} style={styles.homeIcons}/>
                                    <Text style={{fontSize:15, fontWeight:"700", color:'white'}}>Homes</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity style={styles.homeBut} >
                                    <Image source={{uri:"https://img.icons8.com/color/48/000000/document--v1.png" }} style={styles.homeIcons} />
                                    <Text style={{fontSize:15, fontWeight:"700", color:'white'}}>Documents</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.homeBut} >
                                    <Image style={styles.homeIcons} source={{uri:"https://img.icons8.com/plasticine/100/000000/share.png"}} />
                                    <Text style={{fontSize:15, fontWeight:"700", color:'white'}}>Refer a friend</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            )}
        </>
    )
}

export default Home;