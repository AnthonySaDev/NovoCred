import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default function Contact() {
 return (
   <View style={styles.container}>
    <View>
    <Text style={{color:'red', fontWeight:'bold', fontSize:18}}>ATENDIMENTO</Text>
    </View>
    <View style={{marginTop:5,marginBottom:5}}>
    <Text>Dúvidas sobre produtos e serviços? {'\n'}
    Entre em contato pelo telefone:</Text>
    </View>
    <View style={styles.areaNumber}>
        <Ionicons name='call-outline' size={26} color='red'/>
        <Text style={{fontSize:20, fontWeight:'bold'}}>(38) 2211-2080</Text>
    </View>
    <View style={{marginTop:10,alignItems:'center'}}>
        <Text style={{color:'#5d5d5d'}}>
        Segunda à Sexta: 08:00 às 19:00</Text>
        <Text style={{color:'#5d5d5d'}}>
        Sábado das 08:00 às 18:00</Text>
    </View>
   </View>
 );
}

const styles = StyleSheet.create({
    container:{
        marginTop: 20,
        textAlign:'center',
        alignItems:'center',
    },
    areaNumber:{
        flexDirection:'row',
        gap: 8,
        padding:5
    }
})