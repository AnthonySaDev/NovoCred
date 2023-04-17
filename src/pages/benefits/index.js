import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../../components/Header';
import Contact from '../../components/Contact';


const SLIDER_WIDHT = Dimensions.get('window').width;
const ITEM_WIDHT = SLIDER_WIDHT*0.88;
export function Benefits(){
    return(
        <ScrollView 
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.container}>
            <Header/>
            <View style={styles.content}>

            <View style={styles.banner}>
            <Image
            style={styles.image}
            source={{
            uri: 'https://www.drogariaminasbrasil.com.br/skin/frontend/guedesepaixao/default/images/cms/banner_clube_mais.jpg',
                }}
      />
            </View>
            <View style={styles.textArea}>
                <Text style={styles.text}>
                    Cadastre-se agora e descubra </Text>
                <Text style={styles.text}>
                    como ser 
                </Text>
                <Text style={[styles.text, {color:'red'}]}>
                   MUITO MAIS!
                </Text>
                <Text style={styles.secondText}>
                    Aproveite promoções, vantagens e descontos para comprar os produtos que você já conhece com a confiança que só a Drogaria Minas-Brasil pode oferecer!
                </Text>
                <Text style={styles.secondText}>
                    Seja Clube Mais!
                </Text>
            </View>

            <View style={styles.areaBtn}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Regulamento</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{color:'white', fontWeight:'bold'}}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>

            <Contact/>
            
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    
    container:{
        flex:1,
    },
    content:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:130,
    },
    banner:{
        width: ITEM_WIDHT,
        marginTop: 5,
    },
    image:{
        height:190,
        borderRadius: 8,
        resizeMode:'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    textArea:{
        marginTop: 20,
        width: ITEM_WIDHT,
        height: 200,
        textAlign: 'center',
        alignItems: 'center',
        padding: 10,
    },
    text:{
        fontSize: 20,
        fontWeight: 800,
    },
    secondText:{
        fontSize: 17,
        marginTop: 15,
        marginBottom:15,
    },
    areaBtn:{
        marginTop: 80,
        width: ITEM_WIDHT,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btn:{
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 8,
    }
})