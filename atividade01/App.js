import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.title}>Atividade 01 Unigran</Text>
			
				<Text style={styles.title}>Cassio Spessatto</Text>
			</View>
			<Button 
				title="Clique aqui !!!"
				onPress={() => Alert.alert('Botão Pressionado')}
			/>
			
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 24,
		backgroundColor:"#292929",
		height: 100,
		justifyContent: 'center',
	},
	title: {
		backgroundColor: "#FFCA00",
		color: "#20232a",
		textAlign: "center",
		fontSize: 30,
		fontWeight: "bold",
	}
});