import {View, Text, StyleSheet} from 'react-native';

export function Payments(){
    return(
        <View style={styles.container}>
            <Text>Pagamentos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
    }
})