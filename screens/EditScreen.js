import React, { useState } from "react";
import {
	View,
	TextInput,
	StyleSheet,
	Button,
	TouchableOpacity,
	Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { updateLyricAction, deletelyricAction } from "../store/reducers";
import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/colors";

const EditScreen = (props) => {
	const { title: prevTitle, lyrics: prevLyrics } = props.route.params;

	const [title, onChangeTitle] = useState(prevTitle);
	const [lyric, onChangeText] = useState(prevTitle);
	const navigation = useNavigation();

	const dispatch = useDispatch();

	const songId = props.route.params.id;

	// Aun no sirve
	const updateLyricsHandler = (id, title, lyric) => {
		dispatch(updateLyricAction(id, title, lyric));
		navigation.navigate("Home");
	};
	// Aun no sirve
	const deleteLyricHandler = (id) => {
		dispatch(deletelyricAction(id));
		navigation.navigate("Home");
	};

	const alertHandler = () => {
		Alert.alert(
			"Tenemos un problema",
			"No te preocupes, un grupo de monos esta trabajando en esto. Pronto estara solucionado!",
			[{ text: "OK", onPress: () => console.log("OK Pressed") }]
		);
	};

	return (
		<View style={styles.container}>
			<TextInput style={styles.inputTitle} onChangeText={onChangeTitle}>
				{props.route.params.title}
			</TextInput>
			<TextInput
				multiline={true}
				style={styles.inputText}
				onChangeText={onChangeText}
			>
				{props.route.params.lyric}
			</TextInput>
			<View style={styles.buttonsGroup}>
				<TouchableOpacity style={styles.buttonContainer}>
					<Button
						onPress={() => {
							updateLyricsHandler(songId, title, lyric);
							console.log("update action");
						}}
						title="Save"
						color={Colors.background}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonContainer}>
					<Button
						onPress={() => {
							deleteLyricHandler(songId);
							console.log("delete action");
						}}
						title="Delete"
						color={Colors.details}
					/>
				</TouchableOpacity>
			</View>
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
		fontFamily: "claireBold",
	},

	inputText: {
		padding: 10,
		fontSize: 16,
		fontFamily: "claireRegular",
	},

	buttonsGroup: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignContent: "space-around",
	},

	buttonContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-end",
		maxWidth: "80%",
	},
});

export default EditScreen;
