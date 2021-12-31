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
    View, } from 'react-native'
import { base_color, home_buttons, home_but_color } from '../../data';
import Geolocation from '@react-native-community/geolocation';
import Icon from 'react-native-vector-icons/Ionicons';
import LocationEnabler from 'react-native-location-enabler';
import { ActivityIndicator } from 'react-native-paper';


const {
    PRIORITIES: { HIGH_ACCURACY },
    useLocationSettings,
  } = LocationEnabler;


const styles = StyleSheet.create({
    homeBut:{marginBottom:15, width:'30%',height:"30%", backgroundColor:home_buttons,elevation:5, borderRadius:10, justifyContent:'center', alignItems:'center'}
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
      
      
      const requestLocationPermission = new Promise((res, rej) => {
        if (Platform.OS === 'ios') {
          getOneTimeLocation();
          subscribeLocationLocation();
        } 
        else {
        try {
            PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            ).then(granted=>{
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //To Check, If Permission is granted
                    Geolocation.getCurrentPosition(
                        //Will give you the current location
                        (position) => {
                          res(position);
                        },
                        (error) => {
                          rej(error)
                        },
                        {
                          enableHighAccuracy: false,
                          timeout: 30000,
                          maximumAge: 1000
                        },
                      );
                  } 
                else {
                    rej('403')
                }
            }).catch(e=>rej(e))
    
          
        }
        catch{
            rej('error')
        }
    }})

      const getOneTimeLocation = () => {
        setLocationStatus('Getting Location ...');
        
      };
    
      const subscribeLocationLocation = () => {
        watchID = Geolocation.watchPosition(
          (position) => {
            //Will give you the location on location change
            
            setLocationStatus('You are Here');
            console.log(position, "mlmlml");
    
            //getting the Longitude from the location json        
            const currentLongitude =
              JSON.stringify(position.coords.longitude);
    
            //getting the Latitude from the location json
            const currentLatitude = 
              JSON.stringify(position.coords.latitude);
    
            //Setting Longitude state
            setCurrentLongitude(currentLongitude);
    
            //Setting Latitude state
            setCurrentLatitude(currentLatitude);
          },
          (error) => {
            setLocationStatus(error.message);
          },
          {
            enableHighAccuracy: false,
            maximumAge: 1000
          },
        );
      };
    useEffect(()=>{
        if(!enabled){
            requestResolution()
        }
        setLoading(true);
        requestLocationPermission.then(pos=>{
            setCurrentLatitude(pos.coords.latitude)
            setCurrentLongitude(pos.coords.longitude)
            setLoading(false);

        }).catch(e=>{
            setLoading(false)
        })
        
    }, [])
    
    useEffect(()=>{
        console.log(currentLatitude, "kuna")
        
    }, [currentLatitude, enabled])
    
    return(
        <>
            {loading?(
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size={"large"} />
                </View>
            ):(
                <View style={{
                    flex:1,
                    backgroundColor:base_color,
                    alignItems:"center"
                }} >
                    <View style={{flex:2, justifyContent:'center', alignItems:"center"}} >
                        <Text style={{fontSize:25}} >Hello,</Text>
                        <Text style={{fontSize:30}} >Anandhu Satheesh</Text>
                    </View>
                    <View style={{flex:6,backgroundColor:'white', borderTopLeftRadius:50, borderTopRightRadius:50, padding:10, width:'95%' }} >
                        <View  style={{flex:2, flexDirection:'row', alignItems:"center", padding:1,borderWidth:0.2,elevation:10,backgroundColor:'white', borderRadius:70, justifyContent:'space-evenly',}} >
                            <TouchableOpacity onPress={()=>{
                            
                            if(currentLatitude){
                                
                                setsigned(true);
                                
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
                            <TouchableOpacity>
                                <Icon name="exit-outline" size={25} color={"teal"}/>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={{flex:6}} >
                            <View style={{flex:1, flexDirection:'row', justifyContent:'space-evenly', flexWrap:'wrap', alignItems:'flex-start', paddingTop:20}}>
                                <TouchableOpacity style={styles.homeBut} >
                                    <Text style={{fontSize:15, fontWeight:"700", color:'white'}}>Vacancies</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity  style={styles.homeBut} >
                                    <Text style={{fontSize:15, fontWeight:"700", color:'white'}}>Timings</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.homeBut} >
                                    <Text style={{fontSize:15, fontWeight:"700", color:'white'}}>Homes</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{
                                        navigation.navigate('Timesheet')
                                }} style={{marginBottom:15, width:'30%',height:"30%", backgroundColor:home_buttons,elevation:5,  borderRadius:10, justifyContent:'center', alignItems:'center'}} >
                                    <Text style={{fontSize:15, fontWeight:"700", color:'white'}}>Timesheet</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.homeBut} >
                                    <Text style={{fontSize:15, fontWeight:"700", color:'white'}}>Documents</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.homeBut} >
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