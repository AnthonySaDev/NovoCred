import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Movements({data}) {
 
    const [showValue, setShowValue]= useState(false);
 
 
    return (
   <TouchableOpacity style={styles.container} onPress={()=>setShowValue(!showValue)}>
    <Text style={styles.date}>{data.date}</Text>
    <View style={styles.content}>
    <Text style={styles.label}>{data.label}</Text>
    {showValue ? (   <Text style={styles.value}>R$ {data.value}</Text>) 
    : (
    <View style={{}}>
        <Ionicons name='eye-off' size={22}/>
    </View>)
    }
    </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginBottom: 26,
        borderBottomWidth: 0.8,
        borderBottomColor: 'rgba(0,0,0,0.3)',
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
    },
    date:{
        color:'#5d5d5d',
        fontWeight: 'bold',
        marginBottom: 8,
    },
    label:{
        maxWidth: '60%',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
    },
    value:{
        fontSize: 17,
        color:'#F99907',
        fontWeight: '900'
    },
})