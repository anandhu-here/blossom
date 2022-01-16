import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { base_color } from '../../data';
import CheckBox from '@react-native-community/checkbox';
import auth from '@react-native-firebase/auth';
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
        width:'80%',
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
      marginVertical:10
    },
    loginText: {
      color: 'white',
      fontWeight:"700",
      
    },
    checkCont:{
        flexDirection:"row",
        width: '80%',
        alignItems:'center',
    },
    jobName:{
        fontSize:20,
        fontWeight:'700'
    }
  });
  const items = [
    {
      itemKey:1,
      itemDescription:'Item 1'
      },
    {
      itemKey:2,
      itemDescription:'Item 2'
      },
    {
      itemKey:3,
      itemDescription:'Item 3'
      }
  ];
function RegisterStaff({navigation}) {
    const [firstname, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [lastname, setLastName] = useState('');
    const [page, setPage] = useState(1);
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState('');
    const [loading, setLoading] = useState(false);
    const [job, setJob] = useState(null);
    const [options, setOptions] = useState([
        {
            title:'Health Care Assistant',
            check:false,
            disabled:false,
            id:0,
        },
        {
            title:'Senior Care Assistant',
            check:false,
            disabled:false,
            id:1
        },
        {
            title:'Nurse',
            check:false,
            disabled:false,
            id:2
        },

    ])
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
                        lastName: lastname,
                        jobPosition: job
                    })
                    .then((res)=>{
                        setLoading(false)
                        setPage(page+1)
                        dispatch({type:'register_success', payload:data.user})
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
    const setToggleCheckBox = (check,title, id) =>{
        
        setOptions(prevState=>prevState.map(i=>{
            if(i.id === id){
                
                i.check = check
                
            }
            else{
                i.check = false
            }
            
            return i
        }))
        setJob(title);
    }
    let page_;
    switch(page){
        case 1:
            page_ = <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-cyber-security-kiranshastry-lineal-color-kiranshastry-1.png"}}/>
                        <TextInput style={styles.inputs}
                            placeholder="Email"
                            keyboardType="email-address"
                            underlineColorAndroid='transparent'
                            value={email}
                            onChangeText={(email) => setEmail(email)}/>
                    </View>
        break;
        case 2:
            page_ = <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri:"https://img.icons8.com/cotton/64/000000/lock--v1.png"}}/>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                value={pass1}
                underlineColorAndroid='transparent'
                onChangeText={(password) => setPass1(password)}/>
            </View>
        break;
        case 3:
            page_ = <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri:"https://img.icons8.com/cotton/64/000000/lock--v1.png"}}/>
                    <TextInput style={styles.inputs}
                        placeholder="Confirm Password"
                        value={pass2}
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => setPass2(password)}/>
                    </View>
        break;
        case 4:
            page_=<>
                <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri:"https://img.icons8.com/doodle/48/000000/test-account.png"}}/>
            <TextInput style={styles.inputs}
                placeholder="First Name"
                keyboardType="text"
                value={firstname}
                underlineColorAndroid='transparent'
                onChangeText={(name) => setFirstName(name)}/>
            </View>
            <View style={styles.inputContainer}>
            <View style={styles.inputIcon}></View>
            <TextInput style={styles.inputs}
                placeholder="Last name"
                keyboardType="text"
                value={lastname}
                underlineColorAndroid='transparent'
                onChangeText={(name) =>setLastName(name)}/>
            </View>
            {
                options.map(job=>(
                    <View style={styles.checkCont} >
                        <CheckBox
                            disabled={job.disabled}
                            value={job.check}
                            onValueChange={(newValue) => setToggleCheckBox(newValue, job.title, job.id)}
                        />
                        <Text style={styles.jobName}>{job.title}</Text>
                    </View>
                ))
            }
            
            </>
        break;
        default:
            page_ = <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-cyber-security-kiranshastry-lineal-color-kiranshastry-1.png"}}/>
                        <TextInput style={styles.inputs}
                            placeholder="Email"
                            keyboardType="email-address"
                            underlineColorAndroid='transparent'
                            value={email}
                            onChangeText={(email) => setEmail(email)}/>
                    </View>

    }
    return (
        <View style={styles.container}>
            {page_}
        
        {page!==4?<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() =>setPage(page+1)}>
            <Text>Next</Text>
        </TouchableHighlight>
        :<TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => createUserAccount()}>
        <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>}
        <TouchableHighlight style={styles.buttonContainer} onPress={() =>{}}>
            <Text>Forgot your password?</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => navigation.navigate('AuthStaff')}>
            <Text>Login</Text>
        </TouchableHighlight>
            {loading&&<View style={{display:'flex',width:'100%', height:'100%', position:'absolute', backgroundColor:'pink', justifyContent:'center', alignItems:'center'}} >
                <ActivityIndicator size={30}  />
            </View>}
          </View>
    )
}

export default RegisterStaff
