import React, { useState, useContext } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigation } from '@react-navigation/native';
import Container, { Toast } from 'toastify-react-native';


export function Register(){

    const navigation = useNavigation();
    const {username,setUsername} = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [includeDependent, setIncludeDependent] = useState(false);
    const [dependentName, setDependentName] = useState('');
    const [dependentCpf, setDependentCpf] = useState('');
  
    const handleRegister = () => {
      if (username == '' || email=='' || cpf=='' || password=='' || confirmPassword=='') {
      Toast.error('Preencha os campos.');
        return;
      }
  
      if (password !== confirmPassword) {
        Toast.warn('Senhas diferentes.');
        return;
      }
      Toast.success(`Registrado ${username}`)
      // realizar o registro do usuário
      navigation.navigate("Login");
    };
  
    const handleIncludeDependent = () => {
      setIncludeDependent(!includeDependent);
    };

    return(
        <View style={styles.container}>
          <Container position="top" />
          <Image source={require('../../../assets/logo.png')} style={{marginBottom:20,}}/>
          <TextInput
            style={styles.input}
            placeholder="Nome de usuário"
            value={username}
            onChangeText={setUsername}
          />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmação de senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.includeDependentButton}
        onPress={() => setIncludeDependent(!includeDependent)}
      >
        <Text style={styles.includeDependentButtonText}>
          {includeDependent ? 'Excluir dependente' : 'Incluir dependente'}
        </Text>
      </TouchableOpacity>
      {includeDependent && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Nome do dependente"
            value={dependentName}
            onChangeText={setDependentName}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF do dependente"
            value={dependentCpf}
            onChangeText={setDependentCpf}
            keyboardType="numeric"
          />
        </>
      )}
      <TouchableOpacity style={styles.button} onPress={()=>{handleRegister()}}>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      input: {
        borderWidth: 1.5,
        borderColor: '#cecece',
        borderRadius: 5,
        padding: 10,
        width: '80%',
        marginBottom: 10,
      },
      includeDependentButton: {
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 20,

      },
      includeDependentButtonText: {
        textDecorationLine: 'underline',
        color: '#007AFF',
        fontSize:18,

      },
      button: {
        backgroundColor: '#007AFF',
        borderRadius: 5,
        padding: 10,
        width: '80%',
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
})