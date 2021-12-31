import React, { useCallback, useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import MonthPicker from 'react-native-month-year-picker';

import moment from 'moment'

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function Shifts() {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [head, setHead] = useState({year:date.getFullYear(), month:monthNames[date.getMonth()]});
    const showPicker = useCallback((value) => setShow(value), []);

    const changeFormat = () =>{
        const year = date.getFullYear()
        const month = monthNames[date.getMonth()]

        return year + " " + month
    }
    const onValueChange = (e,valu) =>{
        setDate(valu)
        setShow(false);

    }
    useEffect(()=>{
        setShow(false)
    },[])
    return (
        <View style={{flex:1, }} >
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}} >
                <TouchableOpacity onPress={()=>setShow(true)} >
                    <Text style={{fontSize:25}} >{ head.year } {head.month}</Text>
                </TouchableOpacity>
                
            </View>
            <View style={{flex:7}}>

            </View>
        </View>
    )
}

export default Shifts
