import React, { useEffect, useState } from 'react'
import { View, Text, TouchableHighlight, TouchableOpacity, TextInput, Image, StyleSheet, BackHandler, ActivityIndicator, Alert} from 'react-native'
import { base_color } from '../../data';
import auth from '@react-native-firebase/auth';
import { useDispatch } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#DCDCDC',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginVertical:10,
        flexDirection: 'row',
        alignItems:'center',
        elevation:0.5
    },
    inputs:{
        height:45,
        marginLeft:6,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: base_color,
    },
    loginText: {
      color: 'white',
      fontWeight:"700"
    }
  });
  
                                              
function LoginStaff({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [page, setPage] = useState(1);
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    
    
    const createUserAccount = () =>{
        
        if(email, pass1, pass2, firstname, lastname){
            setLoading(true)
            const fullname = firstname + " " + lastname
            auth().createUserWithEmailAndPassword(email, pass2)
                .then((data)=>{
                    console.log('User account created & signed in!', data);
                    firestore().collection('Users').doc(data.user.uid).set({
                        firstName: firstname,
                        lastName: lastname
                    })
                    .then(()=>{
                        setLoading(false)
                        setPage(page+1)
                        dispatch({type:'auth_success', payload:user})
                    })
                    .catch(e=>{
                        setLoading(false)
                        console.log(e, "errror")
                    })
                    

                })
                .catch((e)=>{
                    console.log(e);
                    setLoading(false);
                    
                })
        }
        else{
            Alert.alert("Required")
        }
    }
    const registerUser = () =>{
        
    }
    // Handle user state changes
    function onAuthStateChanged(user) {
        
        if(!user){
            navigation.navigate('AuthStaff')
        }
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;
    const login = () =>{
        console.log(email)
        auth()
        .signInWithEmailAndPassword(email, password)
        .then((data) => {
            console.log('User account created & signed in!', data.user);
            firestore().collection('Users').doc(data.user.uid).get()
                .then((res)=>{
                    dispatch({type:'user_loaded', payload:res._data})
                    dispatch({type:'auth_success', payload:data.user})
                }).catch(e=>console.log(e))
            
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            }

            console.error(error);
        });
    }

    
    return (
        <View style={styles.container}>
                <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-cyber-security-kiranshastry-lineal-color-kiranshastry-1.png'}}/>
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    value={email}
                    onChangeText={(email) => setEmail(email)}/>
                </View>
                
                <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/cotton/64/000000/lock--v1.png'}}/>
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={password}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => setPass(password)}/>
                </View>
    
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => login()}>
                <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
    
                <TouchableHighlight style={styles.buttonContainer} onPress={() =>{}}>
                    <Text>Forgot your password?</Text>
                </TouchableHighlight>
    
                <TouchableHighlight style={styles.buttonContainer} onPress={() => navigation.navigate('RegisterStaff')}>
                    <Text>Register</Text>
                </TouchableHighlight>
          </View>
        
    )
}

export default LoginStaff
