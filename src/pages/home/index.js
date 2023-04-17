import React,{useState, useRef} from 'react';
import {View, 
    Text, 
    StyleSheet, 
    Dimensions, 
    Image, 
    TouchableOpacity, 
    ScrollView,
} from 'react-native';
import Carousel,{Pagination} from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import Cashback from '../../components/Cashback';
import Redirect from '../../components/Redirect';
import Prescription from '../../components/Prescription';



const SLIDER_WIDHT = Dimensions.get('window').width;
const ITEM_WIDHT = SLIDER_WIDHT *0.88;
const carouselItems=[
    {
        imgUrl:
        'https://www.drogariaminasbrasil.com.br/media/banners/cache/5/9df78eab33525d08d6e5fb8d27136e95/p/_/p_scoa_2.png'
    },
    {
        imgUrl:
        'https://www.drogariaminasbrasil.com.br/media/banners/cache/5/9df78eab33525d08d6e5fb8d27136e95/d/o/dorflex_1240x400px.jpg'
    },
    {
        imgUrl:
        'https://www.drogariaminasbrasil.com.br/media/banners/cache/5/9df78eab33525d08d6e5fb8d27136e95/l/i/life_strong_1240x400.png'
        
    },
    {
        imgUrl:
        'https://www.drogariaminasbrasil.com.br/media/banners/cache/5/9df78eab33525d08d6e5fb8d27136e95/d/r/drogaria-mb-sucos-alianca-1240x400px_1.png'
    },

]

function carouselCardItem({item, index}){
   

    return(
        <View style={styles.cardCarousel} key={index}>
            <Image style={styles.image} source={{uri: item.imgUrl}}/>
        </View>
    )
}
export function Home(){


    const navigation = useNavigation();
    const [index,setIndex] = useState(0);
    const isCarousel = useRef(null);
    return(
    <ScrollView 
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.container}>
            <Header name='Anthony Reis'/>

            <Carousel 
        layout={'stack'}
        data={carouselItems}
        renderItem={carouselCardItem}
        sliderWidth={SLIDER_WIDHT}
        ref={isCarousel}
        itemWidth={ITEM_WIDHT}
        useScrollView={false}
        onSnapToItem={index => setIndex(index)}
    />
        <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={index}
        ref={isCarousel}
        dotStyle={{
        width: 10,
        height: 10,
        borderRadius: 8,
        marginHorizontal: 0,
        backgroundColor: 'rgba(255, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.2}
        inactiveDotScale={0.5}
        tappableDots={false}
        />
            
        <Prescription/>
        
        <Cashback/>
            
        <View style={styles.copy}>
            <Text style={styles.copyText}>Se você quer ganhar dinheiro de volta em suas compras online, junte-se ao Clube Mais agora!</Text>
            <TouchableOpacity style={styles.copyBtn} onPress={()=>navigation.navigate('Benefícios')}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Juntar-se agora!</Text>
            </TouchableOpacity>
        </View>
            
            
        <Redirect/>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFF',
        flex:1,
        alignItems:'center',
    },
    cardCarousel:{
        width: ITEM_WIDHT,
        marginTop:10
    },
    image:{
        height:200,
        borderRadius: 8,
        resizeMode:'stretch'
    },

    copy:{
        width: ITEM_WIDHT,
        marginBottom: 30,
        padding: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    copyText:{
        fontWeight:'700'
    },
    copyBtn:{
        marginTop: 20,
        backgroundColor: 'green',
        alignItems: 'center',
        width: '50%',
        padding: 12,
        borderRadius: 50/2,
    },

    
})