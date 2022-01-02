import React, { useState } from "react";
import {
	View,
	TextInput,
	StyleSheet,
	Button,
	TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { updateLyricAction } from "../store/reducers";

import Colors from "../constants/colors";

const EditScreen = (props) => {
	const [lyric, onChangeText] = useState();
	const [title, onChangeTitle] = useState();

	const dispatch = useDispatch();

	const updateLyricsHandler = (title, lyric) => {
		dispatch(updateLyricAction(title, lyric));
	};

	return (
		<View style={styles.container}>
			<TextInput style={styles.inputTitle} onChangeText={onChangeTitle}>
				{props.route.params.title}
			</TextInput>
			<TextInput multiline={true} style={styles.inputText}>
				{props.route.params.lyric}
			</TextInput>
			<TouchableOpacity style={styles.buttonContainer}>
				<Button
					onPress={() => {
						updateLyricsHandler(title, lyric);
						console.log("hola");
					}}
					title="Save"
					color={Colors.background}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 10,
		alignItems: "center",
	},

	inputTitle: {
		padding: 10,
		fontSize: 20,
		fontWeight: "bold",
	},

	inputText: {
		padding: 10,
		fontSize: 16,
	},

	buttonContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-end",
		maxWidth: "80%",
	},
});

export default EditScreen;
