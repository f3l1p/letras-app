import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const LoadingScreen = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../assets/background-leader.jpg")}
				resizeMode="cover"
				style={styles.image}
			>
				<View style={styles.textCard}>
					<View style={styles.textContainer}>
						<Text style={styles.text}>Mi</Text>
						<Text style={styles.text}>cuaderno</Text>
						<Text style={styles.text}>de letras</Text>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	image: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	textCard: {
		backgroundColor: "white",
		borderRadius: 10,
		height: 250,
		maxWidth: "80%",
		width: 400,
		alignItems: "center",
		justifyContent: "center",
	},

	textContainer: {
		borderWidth: 3,
		borderColor: "black",
		borderRadius: 10,

		height: 200,
		width: 300,
		maxWidth: "80%",
		padding: 20,
		alignItems: "center",
		justifyContent: "center",
	},

	text: {
		fontSize: 40,
	},
});

export default LoadingScreen;
