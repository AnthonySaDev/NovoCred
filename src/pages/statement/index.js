import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../../components/Header';
import Movements from '../../components/Movements';

const list=[
    {
        id:1,
        label: "Loratadina 10 Mg C/ 12 Comprimidos Genérico",
        value:'37,46',
        date: '11/04/2023',
    },
    {
        id:2,
        label: "Dipirona Sodica 1g Com 10 Comprimidos",
        value:'17,60',
        date: '29/03/2023'
    },

    {
        id:3,
        label: "Fisioton 400mg C/ 30 Comprimidos",
        value:'102,40',
        date: '12/02/2023'
    },
    {
        id:4,
        label: "B.b. Cream Creme Milagroso 5 Em 1 Cor Clara Fps20 30ml",
        value:'43,92',
        date: '02/01/2023'
    },
    {
        id:5,
        label: "Loratadina 10 Mg C/ 12 Comprimidos Genérico",
        value:'37,46',
        date: '28/12/2022',
    },
    {
        id:6,
        label: "Dipirona Sodica 1g Com 10 Comprimidos",
        value:'17,60',
        date: '20/12/2022'
    },

    {
        id:7,
        label: "Fisioton 400mg C/ 30 Comprimidos",
        value:'102,40',
        date: '15/12/2022'
    },
    {
        id:8,
        label: "B.b. Cream Creme Milagroso 5 Em 1 Cor Clara Fps20 30ml",
        value:'43,92',
        date: '05/11/2022'
    },


]

export function Statement(){
    return(
        <View style={styles.container}>
            <Header name={'Anthony Reis'}/>
            <Text style={styles.title}>Últimas compras:</Text>
            <FlatList
            style={styles.list}
            data={list}
            keyExtractor={(item)=>String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=><Movements data={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flex:1,
    },
    title:{
        fontSize:18,
        fontWeight: 'bold',
        padding:4,
        backgroundColor:'red',
        color:'white'
    },
    list:{
        marginStart: 14,
        marginEnd: 14,
        marginBottom:60,
    }
})