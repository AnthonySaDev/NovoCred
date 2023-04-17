import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contexts/AuthContext';
import {Ionicons} from '@expo/vector-icons';
import Container, { Toast } from 'toastify-react-native';

export function Login(){

const navigation = useNavigation();
const {logIn, username, setUsername} = useContext(AuthContext);
const [password, setPassword] = useState('');
const [showPassword, setShowPassword] = useState(false);


  const handleUsernameChange = (text) => {
    setUsername(text);
  };
  
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
    
  function handleLogin(username){
    if(username == '' || password == ''){
      Toast.error('Preencha os campos');
    }
      Toast.success(`Bem vindo ${username}`)
    logIn(username);
  }

    return(
        <View style={styles.container}>
          <Container position="top"/>
            <Image source={require('../../../assets/logo.png')} style={{marginBottom:60,}}/>
            <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            onChangeText={handleUsernameChange}
            value={username}
          
            />
        <View style={styles.passwordContainer}>
            <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Senha"
                keyboardType="numeric"
                secureTextEntry={!showPassword}
                onChangeText={handlePasswordChange}
                value={password}
            />
            <TouchableOpacity style={styles.passwordButton} onPress={handleShowPassword}>
                {showPassword ? <Ionicons name='eye' size={22}/> : <Ionicons name='eye-off-outline'size={22}/>}
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.forgotPasswordButtonText}>Esqueci minha senha</Text>
            </TouchableOpacity>
        
        <View style={styles.bottomContainer}>

            <TouchableOpacity style={styles.registerButton} onPress={()=> navigation.navigate("Register") }>
                <Text style={styles.registerButtonText}>Quero me cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton} onPress= {()=>{handleLogin(username)}}>
                <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>
  </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    input: {
      width: '80%',
      backgroundColor:'#fff',
      height: 40,
      borderWidth: 2,
      borderRadius: 8,
      borderColor: '#CCCCCC',
      marginBottom: 10,
      paddingLeft: 10,
    },
    passwordContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '80%',
      marginBottom: 10,
    },
    passwordInput: {
      flex: 1,
    },
    passwordButton: {
      position: 'absolute',
      right:12,
      justifyContent: 'center',
      alignItems: 'center',

    },
    passwordButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    bottomContainer: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '80%',
    },
    forgotPasswordButtonText: {
     color: '#000',
     textAlign:'right',
     fontSize: 13,
     textDecorationLine: 'underline',
     width: 300,
     fontWeight: '900',
    },
    registerButton:{
      backgroundColor:'#F99907',
      padding: 10,
      borderRadius: 8,
    },
    registerButtonText:{
      color: 'white',
      fontSize: 16,
    },
    loginButton:{
      backgroundColor:'#3896f3',
      padding: 10,
      borderRadius: 8,
    },
    loginButtonText:{
      color: 'white',
      fontSize: 16,
    }
});