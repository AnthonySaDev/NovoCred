import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const SLIDER_WIDHT = Dimensions.get('window').width;
const ITEM_WIDHT = SLIDER_WIDHT *0.88;

export default function Redirect() {
 return (
    <View style={styles.redirect}>
    <Text style={{ fontSize: 18,fontWeight: 'bold'}}>Acesse nosso e-commerce</Text>
    <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.redirectIcon}>
        <Ionicons name='logo-google-playstore' size={30} color={'red'}/>
        <Text>Aplicativo</Text>
        </TouchableOpacity>
        <Text>ou</Text>
        <TouchableOpacity style={styles.redirectIcon}>
        <Ionicons name='earth-outline' size={30} color={'red'}/>
        <Text>Navegador</Text>
        </TouchableOpacity>
    </View>

</View>
 );
}

const styles = StyleSheet.create({
    redirect:{
        backgroundColor: 'white',
        marginBottom: 30,
        width: ITEM_WIDHT,
        textAlign:'center',
        alignItems:'center',
        padding: 25,
        borderRadius: 8,
    },
    areaBtn:{
        marginTop:15,
        flexDirection:'row',
        justifyContent:'space-between',
        marginBottom:40
    },
    redirectIcon:{
        alignItems:'center',
        justifyContent:'center',
        gap: 8,
        padding:4,
    }
}) 