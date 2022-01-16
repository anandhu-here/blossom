import React, { useRef, useState } from 'react'
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { base_color } from '../data';
import SignatureScreen from 'react-native-signature-canvas';
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
    const [signOpen, setSignOpen] = useState(false)
    const [signed, setSigned] = useState(false)
    const ref = useRef();
    const handleSignature = (signature) => {
        
        console.log("kunnall")
        setSignOpen(false)
        setSigned(true)
      };
    
      const handleEmpty = () => {
        console.log('Empty');
      };
    
      const handleClear = () => {
        console.log('clear success!');
      };
    
      
    
    return (
        <View style={{flex:1}}>
            <View style={{paddingTop:20, justifyContent:'center', alignItems:"center"}}>
                
                <Text style={{fontSize:35}}>Blossomvalley Care</Text>
                <Text style={{fontSize:20}}>192, Oakly Road</Text>
                <Text style={{fontSize:20}}>Southampton, Hampshire SO16 4NS</Text>
                <Text style={{fontSize:20}}>Telephone: 02380 777204 or 07402834573</Text>
                <Text style={{fontSize:15}}>Email: info@blossomvalleycare.co.uk</Text>
                <Text style={{fontSize:15, color:'navy'}} >Website: www.blossomvalleycare.co.uk</Text>

            </View>
            <View style={{justifyContent:'center', alignItems:'center', paddingTop:30}}     >
                <Text style={{fontSize:25}} >Work Details</Text>
                <View style={{flexDirection:'row', padding:5, elevation:2, backgroundColor:base_color, borderRadius:10, paddingHorizontal:20, marginBottom:10}}>
                    <Text style={{fontSize:20}}>Name of the worker: </Text>
                    <Text style={{fontSize:20, paddingLeft:10}}>Anandhu Satheesh</Text>
                </View>
                <View style={{flexDirection:'row', padding:5, elevation:2, backgroundColor:base_color, borderRadius:10, paddingHorizontal:20, marginBottom:10}}>
                    <Text style={{fontSize:20}}>Job title: </Text>
                    <Text style={{fontSize:20, paddingLeft:10}}>Care Assistant</Text>
                </View>
                <View style={{flexDirection:'row', padding:5, elevation:2, backgroundColor:base_color, borderRadius:10, paddingHorizontal:20, marginBottom:10}}>
                    <Text style={{fontSize:20}}>Band: </Text>
                    <Text style={{fontSize:20, paddingLeft:10}}></Text>
                </View>
                <View style={{flexDirection:'row', padding:5, elevation:2, backgroundColor:base_color, borderRadius:10, paddingHorizontal:20, marginBottom:10}}>
                    <Text style={{fontSize:20}}>Place of work</Text>
                    <Text style={{fontSize:20, paddingLeft:10}}>BrendonCare</Text>
                </View>
                <View style={{flexDirection:'row', padding:5, elevation:2, backgroundColor:base_color, borderRadius:10, paddingHorizontal:20, marginBottom:10}}>
                    <Text style={{fontSize:20}}>Date: </Text>
                    <Text style={{fontSize:20, paddingLeft:10}}>31-12-2021</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <View style={{flexDirection:'row', padding:5, elevation:2, backgroundColor:base_color, borderRadius:10, paddingHorizontal:20, marginBottom:10}}>
                        <Text style={{fontSize:20}}> Start time:</Text>
                        <Text style={{fontSize:20, paddingLeft:10}}>08:00</Text>
                    </View>
                    <View style={{flexDirection:'row', padding:5, elevation:2, backgroundColor:base_color, borderRadius:10, paddingHorizontal:20, marginBottom:10}}>
                        <Text style={{fontSize:20}}> End time:</Text>
                        <Text style={{fontSize:20, paddingLeft:10}}>20:00</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', padding:5, elevation:2, backgroundColor:base_color, borderRadius:10, paddingHorizontal:20, marginBottom:10}}>
                    <Text style={{fontSize:20}}>Rest Break: </Text>
                    <Text style={{fontSize:20, paddingLeft:10}}>60 min</Text>
                </View>
                <View style={{flexDirection:'row', padding:5, elevation:2, backgroundColor:base_color, borderRadius:10, paddingHorizontal:20, marginBottom:10}}>
                    <Text style={{fontSize:20}}>Total Hours </Text>
                    <Text style={{fontSize:20, paddingLeft:10}}>12 hr</Text>
                </View>
            </View>
            <View style={{justifyContent:"center", alignItems:"center", paddingTop:10}}>
                <TouchableOpacity onPress={()=>setSignOpen(true)} style={{padding:20, backgroundColor:'teal', borderRadius:100,width:'60%', alignItems:'center'}} >
                    {!signed?<Text style={{color:'white', fontSize:18, fontWeight:"700"}} >Sign</Text>
                    :<Text style={{color:'white', fontSize:18, fontWeight:"700"}} >Upload</Text>}
                </TouchableOpacity>
            </View>
            <Modal 
                visible={signOpen}
                onRequestClose={()=>setSignOpen(false)}
                style={{flex:1}}
            >
                <View style={{flex:1,  justifyContent:"center",}} > 
                    <View style={{flex:0.5}} >
                    <SignatureScreen
                    style={{}}
                    ref={ref}
                    onOK={handleSignature}
                    onEmpty={handleEmpty}
                    onClear={handleClear}
                    descriptionText={'Sign here!'}
                    webStyle={`.m-signature-pad--footer
                        .button {
                        background-color: teal
                        ;
                        color: #FFF;
                        }`}
                />
                    </View>
                </View>
                
            </Modal>
        </View>
    )
}

export default Timesheets;