import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const SLIDER_WIDHT = Dimensions.get('window').width;
const ITEM_WIDHT = SLIDER_WIDHT *0.88;
export default function Cashback() {
 return (

<View style={styles.cashback}>
                <Text style={styles.title}>Seu saldo em Cashback :</Text>
                <Text style={styles.cashbackValue}>R$ 0,00</Text>
            </View>

 );
}

const styles = StyleSheet.create({
    cashback:{
        backgroundColor: 'white',
        width: ITEM_WIDHT,
        marginBottom: 10,
        marginTop: 30,
        height: 80,
        borderRadius: 6,
        padding: 10,
        borderWidth:.5,
        borderColor: 'rgba(0,0,0,0.2)',
        elevation:13,
      shadowColor:'#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 3.80
    },title:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    cashbackValue:{
        color:'green',
        fontSize: 16,
        fontWeight: 'bold',
        padding: 10,
    },
})