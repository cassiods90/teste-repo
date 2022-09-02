import React from 'react';
import { Alert, Button, Text, View } from 'react-native';


export default function () {
    return (
        <View>
            <Text>Bem-vindo</Text>

            <Button title="Clique aqui !!!" onPress={() => Alert.alert('Botão Pressionado')} />
        </View>
    )
}