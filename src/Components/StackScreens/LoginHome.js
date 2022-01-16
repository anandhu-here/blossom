import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Image, TouchableOpacity, TouchableHighlight, Text } from 'react-native'
import { base_color } from '../../data';

function LoginHome() {
    const [tab, setTab] = useState(0);
    
    return (
        <View style={{flex:1, justifyContent:'center'}}>
            {tab === 0?(
                <View style={styles.container}>
                <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                <TextInput style={styles.inputs}
                    placeholder="Email"
                    keyboardType="email-address"
                    underlineColorAndroid='transparent'
                    onChangeText={(email) => this.setState({email})}/>
                </View>
                
                <View style={styles.inputContainer}>
                <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                <TextInput style={styles.inputs}
                    placeholder="Password"
                    secureTextEntry={true}
                    underlineColorAndroid='transparent'
                    onChangeText={(password) => this.setState({password})}/>
                </View>
    
                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => {}}>
                <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>
    
                <TouchableHighlight style={styles.buttonContainer} onPress={() =>{}}>
                    <Text>Forgot your password?</Text>
                </TouchableHighlight>
    
                <TouchableHighlight style={styles.buttonContainer} onPress={() => setTab(tab-1)}>
                    <Text>Register</Text>
                </TouchableHighlight>
          </View>
            ):(
                <View style={styles.container}>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/color/48/000000/home.png"}}/>
            <TextInput style={styles.inputs}
                placeholder="Name"
                keyboardType="text"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
            </View>
            <View style={styles.inputContainer}>
            
            <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/64/000000/external-location-contact-us-flatart-icons-lineal-color-flatarticons.png"}}/>
            <TextInput style={styles.inputs}
                placeholder="Enter your postcode"
                keyboardType="text"
                
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
            </View>
            <View style={styles.inputContainer}>
            
            <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-home-address-food-delivery-photo3ideastudio-lineal-color-photo3ideastudio.png"}}/>
            <TextInput style={styles.inputs}
                placeholder="Your address"
                keyboardType="text"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
            </View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: "https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-email-cyber-security-kiranshastry-lineal-color-kiranshastry-1.png"}}/>
            <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
            </View>
            
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri:"https://img.icons8.com/cotton/64/000000/lock--v1.png"}}/>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}/>
            </View>
            <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri:"https://img.icons8.com/cotton/64/000000/lock--v1.png"}}/>
            <TextInput style={styles.inputs}
                placeholder="Confirm Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}/>
            </View>
            

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => {}}>
            <Text style={styles.loginText}>Register</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() =>{}}>
                <Text>Forgot your password?</Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.buttonContainer} onPress={() => setTab(tab+1)}>
                <Text>Login</Text>
            </TouchableHighlight>
      </View>
            )}
        </View>
    )
}

export default LoginHome




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
      marginLeft:16,
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

                                            