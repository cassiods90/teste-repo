import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons'

export default function AppItem(props) {
    function handleDeletePress() {
        Alert.alert(
            "Atenção",
            "Você tem certeza que deseja excluir este nome ?",
            [
                {
                    text: "Não",
                    onPress: ( ) => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Sim", 
                    onPress: async () => {
                        let savedItems = [ ];
                        const response = await AsyncStorage.getItem('nomes1');
                        if (response) savedItems = JSON.parse(response);
                        const index = await savedItems.findIndex(item => item.id === props.id);
                        savedItems.splice(index, 1);
                        AsyncStorage.setItem('nomes1', JSON.stringify(savedItems));
                        props.navigation.navigate("AppList", {id: props.id});
                    }
                }
            ],
            { 
                cancelable: false 
            }
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textItem}>{props.nome + " " + props.sobrenome}</Text>
            <View style={styles.buttonsContainer} >
                <TouchableOpacity style={styles.deleteButton} onPress = { handleDeletePress } >
                    <Icon name="trash" color="white" size={18} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginTop: 20,
        width: '100%'
    },
    buttonsContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
        paddingBottom: 10,
        marginTop: 10,
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        backgroundColor: 'blue',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    deleteButton: {
        marginLeft: 10,
        height: 40,
        width: 40,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    textItem: {
        fontSize: 20,
    }
});