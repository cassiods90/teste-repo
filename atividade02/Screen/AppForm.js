
import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AsyncStorage } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'

export default function AppForm({ navigation }) {

    const [nome, setNome] = useState(''); const [sobrenome, setSobrenome] = useState('');
    //Funções chamadas sempre que o TextInput for alterado
    function handleNomeChange(nome) { 
        setNome(nome); 
    }
    
    function handleSobrenomeChange(sobrenome) {
        setSobrenome(sobrenome); 
    }
    
    function handleButtonPress() {
        console.log({id: new Date().getTime(), nome, sobrenome});        
        navigation.navigate("AppList");
    }
    async function handleButtonPress(){
        const listItem = {id: new Date().getTime(), nome:nome, sobrenome:sobrenome};

        let savedItems = [];
        const response = await AsyncStorage.getItem('nomes');
        if(response) savedItems = JSON.parse(response);
        
        savedItems.push(listItem);
        await AsyncStorage.setItem('nomes', JSON.stringify(savedItems));
        navigation.navigate("AppList", listItem);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar Pessoa</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={handleNomeChange} placeholder="Nome"
                    clearButtonMode="always" 
                /> 
                <TextInput
                    style={styles.input}
                    onChangeText={handleSobrenomeChange}
                    placeholder="Sobrenome"
                    clearButtonMode="always" 
                /> 
                <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
                    <Text style={styles.buttonText}>Salvar</Text>
                    <Icon name="trash" color="white" size={18} />
                </TouchableOpacity>
            </View>
            <StatusBar style="light" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#036FFC',
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
    },
    inputContainer: {
        flex: 1,
        marginTop: 30,
        width: '90%',
        padding: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        alignItems: 'stretch',
        backgroundColor: '#fff'
    },
    input: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'stretch'
    },
    button: {
        marginTop: 10,
        height: 60,
        backgroundColor: '#036FFC',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 20,
        shadowOpacity: 20,
        shadowColor: '#ccc',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
});

