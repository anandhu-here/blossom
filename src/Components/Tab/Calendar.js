import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, FlatList, StyleSheet } from 'react-native'
import { base_color } from '../../data';
import Calendar from '../calendar/Calendar';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Clock from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
    {
        id:1,
        position:'care assistant',
        home:'Durban House',
        location:'durban mukku, uk'
    },
    {
        id:1,
        position:'care assistant',
        home:'Durban House',
        location:'durban mukku, uk'
    },
    {
        id:1,
        position:'care assistant',
        home:'Durban House',
        location:'durban mukku, uk'
    },
    {
        id:1,
        position:'care assistant',
        home:'Durban House',
        location:'durban mukku, uk'
    },
    {
        id:1,
        position:'care assistant',
        home:'Durban House',
        location:'durban mukku, uk'
    },
    {
        id:1,
        position:'care assistant',
        home:'Durban House',
        location:'durban mukku, uk'
    },
    {
        id:1,
        position:'care assistant',
        home:'Durban House',
        location:'durban mukku, uk'
    },
]


const style = StyleSheet.create({
    position:{
        fontSize:20,

    },
    Home:{
        fontSize:18
    },
    loc:{
        fontSize:15,
        marginLeft:10,

    },
    time:{
        fontSize:15,
        marginLeft:10
    }
})

const Item = (data) =>{
    return(
        <TouchableOpacity style={{ padding:10, elevation:5, backgroundColor:'#F5FCFF', marginTop:10}} >
        <Text style={style.position}>Care Assistant</Text>
        
        <Text style={style.Home}>Durban House</Text>
        <View style={{flexDirection:'row',paddingTop:5}} >
            <Icon name='location-on' size={20} />
            <Text  style={style.loc}>Lorem ipsum street</Text>
        </View>
        <View style={{flexDirection:'row',}} >
            <Clock name='clock-outline' size={20} />
            <Text style={style.time} >08:00 - 20:00</Text>
        </View>
        </TouchableOpacity>
    )
}

function CalendarTab() {
    const renderItem = (data) =>(
        <Item data={data} />
    )
    return (
        <View style={{
            flex:1,
            backgroundColor:'white',
            alignItems:'center'
        }} >
            <View style={{flex:1, width:'100%', }}>
                <Calendar />
            </View>
            {/* <Text style={{fontSize:25}} >Shifts available</Text> */}

            {/* <SafeAreaView style={{flex:1,paddingHorizontal:20, alignItems:'center', width:'100%', }} >
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item=>item.id}
                    style={{ width:'100%', }}
                    contentContainerStyle={{}}

                />
            </SafeAreaView> */}
        </View>
    )
}

export default CalendarTab;
