import React,{useState} from 'react';
import { View, 
    Text, 
    Modal, 
    Pressable, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';


export default function Prescription() {
 
    const [modalVisible, setModalVisible] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [image, setImage] = useState(null);
    
    const handleSubmit = () => {
        // Aqui você pode implementar a lógica para enviar os dados para a API ou para um servidor externo.
        setModalVisible(!modalVisible)
        setEmail('');
        setName('');
        setPhone('');
        setImage(null);
      };
    
      const handleImagePicker = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.assets[0].uri);
        }
      };
    
    return (
    <View>

    <Text style={styles.textPrescription}>Deseja enviar sua receita?</Text>

    <View>
    <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <Text style={styles.modalText}> Envie Sua Receita : </Text>
            <Pressable
            style={styles.buttonClose}
            onPress={() => {
                setModalVisible(!modalVisible)
                setEmail('');
                setName('');
                setPhone('');
                setImage(null);
                }}>
            <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
        </View>

    <View style={styles.form}>
    <Text style={styles.textForm}>Envie-nos sua receita preenchendo os campos abaixo, e logo retornaremos com o orçamento por email ou telefone.</Text>
        
    <View style={styles.formContent}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Nome"
        placeholderTextColor="#000"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        placeholderTextColor="#000"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={(text) => setPhone(text)}
        placeholder="Celular"
        placeholderTextColor="#000"
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={handleImagePicker}>
        <Text style={styles.buttonText}>Selecionar imagem</Text>
      </TouchableOpacity>
      {image && (
        <View style={styles.previewContainer}>
          <Text style={styles.previewText}>Imagem selecionada:</Text>
          <Image source={{ uri: image }} style={[styles.previewImage, {width: 260, height: 70,resizeMode: 'stretch'}]} />
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>

        </View>

        </View>
    </Modal>
    <Pressable
        style={styles.buttonOpen}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textOpen}>Clique aqui!</Text>
    </Pressable>
    </View>

    </View>
 );
}

const styles = StyleSheet.create({
    textPrescription:{
        fontSize:18,
        fontWeight:'900',
    },
    textOpen:{
        fontSize:16,
        color:'#F99907',
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 15,
    },
    centeredView:{
        backgroundColor:'#fff',
        flex:1,
    },
    modalView:{
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.3)',
    },
    modalText:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textStyle:{
        color: 'red',
        fontWeight: '900',
        backgroundColor:'#e8e8e8',
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        borderWidth: 1.2,
        borderColor: 'rgba(0,0,0,0.3)',
    },
    form:{
        alignItems:'center',
        justifyContent:'center',
        textAlign: 'center',
        padding:15,
    },
    textForm:{
        fontSize:16,
        fontWeight: '600',
    },
    formContent:{
        width:'100%',
        padding: 30,
        gap:25,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
        fontSize: 16,
        color: '#333',
      },
      button: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
        alignItems: 'center',
        marginBottom: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      previewContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginTop: 5,
        height: 120,
      },
      previewText: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
      },
})