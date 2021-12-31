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
import { Provider } from 'react-redux';
import Router from './src/Components';
import Home from './src/Components/Main';
import store from './src/redux/store';


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
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return(
    <View style={{flex:1, backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,}}>
      {loading?(<View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Image source={require('./logo.png')} style={{width:'50%', height:'50%'}}/>
      </View>):(<Router />)}
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
