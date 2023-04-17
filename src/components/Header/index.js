import React, {useContext} from 'react';
import {View, 
    Image, 
    StyleSheet,
    Text,

} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';

import { AuthContext } from '../../contexts/AuthContext';


export default function Header(){
    
const {username, logOut} = useContext(AuthContext);

    return(
        <View style={styles.container}>
            <View style={styles.content}>
            <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
            <View style={styles.btns}>
           
                <Menu>
                <MenuTrigger style={styles.buttonUser}> 
                <Feather name='user' size={27} color={'red'}/>
                </MenuTrigger>
                <MenuOptions>
                <Text>Olá {username}!</Text>
                <MenuOption onSelect={() => alert(`Save`)}>
                    <Text>Adicionar dependente</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => alert(`Delete`)} >
                    <Text>Editar Perfil</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => logOut()} >
                    <Text style={{color: 'red'}}>Sair</Text>
                    </MenuOption>
                </MenuOptions>
                </Menu>
                
                <Menu>
                <MenuTrigger style={styles.buttonUser}> 
                <Feather name='bell' size={27} color={'red'}/>
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => alert(`Save`)}>
                    <Text >Não há notificações...</Text>
                    </MenuOption>
                </MenuOptions>
                </Menu>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FAFAFA',
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd:16,
        paddingBottom: 25,
        borderBottomWidth: .5,
        borderBottomColor: 'red'
    },
    content:{
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    userName:{
        fontSize:18,
        color: 'black',
        fontWeight: 'bold',
    },
    buttonUser:{
        width: 44,
        height: 44,
        backgroundColor:'rgba(180, 180, 180,0.4)',
        justifyContent:'center',
        alignItems: 'center',
        borderRadius:44/2,
    },
    btns:{
        flexDirection: 'row',
        width: 110,
        justifyContent: 'space-between'
    },
    logo: {
        marginTop:15,
        width:"40%",
        height:50,
        resizeMode:'stretch'
      },
})