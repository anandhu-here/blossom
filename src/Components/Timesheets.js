import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';

const style = StyleSheet.create({
    left:{
        width: "100%",
        alignItems:'center',
        backgroundColor:'yellow'
    },
    right:{
        width: "100%",
        alignItems:'flex-end',
    }
})

function Timesheets() {
    
    return (
        <View style={{flex:1}}>
            <View style={{flex:0.1}}>
                
            <Text>Blossomvalley Care</Text>
            </View>
            <View style={{flex:0.9}}>
            <View style={{flex:1,    flexDirection:'row', justifyContent:'space-evenly', flexWrap:'wrap', alignItems:'flex-start',}}>
                <TextInput
                        value='Anandhu Satheesh'
                        style={{width:'60%', fontSize:20,elevation:10, padding:20, textAlign:'center'}}
                        editable={false}
                    />
                    <TextInput
                        value='Anandhu Satheesh'
                        style={{width:'60%', fontSize:20,elevation:10, padding:20, textAlign:'center', marginTop:10}}
                        editable={false}
                    />
            </View>
            
            </View>
        </View>
    )
}

export default Timesheets;