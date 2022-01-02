import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SongItem = (props) => {
	return (
		<View style={styles.container}>
			<Text StyleSheet={styles.title}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 0,
		padding: 20,
		marginVertical: 5,
		marginHorizontal: 8,
	},

	title: {
		fontSize: 16,
	},
});

export default SongItem;
