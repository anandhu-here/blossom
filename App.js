/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Router from './src/Components';
import Home from './src/Components/Main';
import store from './src/redux/store';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const App = () => {
  

  return (
    <Provider store={store} >
        <AppContainer />
    </Provider>
    
  );
};


const AppContainer = () =>{
  const isDarkMode = useColorScheme() === 'dark';
  const [loading, setLoading] = useState(true);
  const [isauth, setisAuth] = useState(false);
  const auth_state = useSelector(state=>state.auth)
  const dispatch = useDispatch()
  // useEffect(()=>{
  //   if(auth_state.uid){
  //     setLoading(false);
  //     setisAuth(true);
  //     firestore().collection('Users').doc(auth_state.uid).get()
  //       .then(user=>{
  //         dispatch({type:'register_success', payload:{firstName, lastName, jobPosition}})
  //       })
  //       .catch(e=>console.log(e))
  //   }
    

  // }, [auth_state])
  useEffect(() => {
    const user = auth().currentUser;
    
    if(user){
      firestore().collection('Users').doc(user.uid).get()
      .then(res=>{
        setLoading(false);
        dispatch({type:'user_loaded', payload:res._data})
      
        dispatch({type:'auth_success', payload:user})
        
      }).catch(e=>setLoading(false))
    }
    return () => {
      
    }
  }, [])
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return(
    <View style={{flex:1, backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,}}>
      {loading?(<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Image source={require('./src/BVC.png')} style={{width:'50%', height:'50%'}}/>
      </View>):(<Router  />)}
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
