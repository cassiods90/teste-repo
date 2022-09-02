import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Componente from './components/Componente';

import AppTab from './Screen/AppTab';


export default function App() {
	return (
		<View style={styles.container}>
			
			
			<AppTab />
			<StatusBar style="light" />
			
			
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 0,
		backgroundColor:"#292929",
		height: 100,
		justifyContent: 'center',
	},
});

