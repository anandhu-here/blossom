import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
import {agenda, shifts} from '../../data';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Clock from 'react-native-vector-icons/MaterialCommunityIcons';


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
const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule = () => {
  const [items, setItems] = useState({});

  const loadItems = (day) => {
    setTimeout(() => {
      setItems(agenda)
    }, 1000);
  };
  const daytriggered = (ff) =>{
      console.log(ff)
  }

  const renderItem = (item) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <TouchableOpacity style={{ }} >
                    <Text style={style.position}>{item.position}</Text>
                    
                    <Text style={style.Home}>{item.home}</Text>
                    <View style={{flexDirection:'row',paddingTop:5}} >
                        <Icon name='location-on' size={20} />
                        <Text  style={style.loc}>{item.location}</Text>
                    </View>
                    <View style={{flexDirection:'row',paddingTop:5}} >
                        <Clock name='clock-outline' size={20} />
                        <Text style={style.time} >{item.startTime} - {item.endTime}</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };
  const emptyrend = () =>(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}} >
        <Text>Oops! There is no shifts available for you this day</Text>
    </View>
  )
  return (
    <View style={{flex: 1}}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={new Date().toJSON().split('T')[0]}
        renderItem={renderItem}
        onDayPress={daytriggered}
        renderEmptyData={emptyrend}
        
      />
    </View>
  );
};

export default Schedule;