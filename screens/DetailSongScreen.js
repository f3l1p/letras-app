import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SongDetail = (props) => {
	return (
		<View style={styles.container}>
			<TextInput defaultValue={props.route.params.title} />
			<Text>{props.route.params.text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},

	title: {
		fontSize: 20,
		padding: 8,
	},

	text: {
		fontSize: 16,
	},
});

export default SongDetail;
