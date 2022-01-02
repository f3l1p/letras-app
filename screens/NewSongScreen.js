import React, { useState } from "react";
import Colors from "../constants/colors";
import {
	View,
	TextInput,
	StyleSheet,
	TouchableOpacity,
	Button,
} from "react-native";
import { addLyric } from "../store/reducers";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const NewSongScreen = () => {
	const [title, onChangeTitle] = useState("");
	const [lyric, onChangeLyric] = useState("");
	const navigation = useNavigation();

	const dispatch = useDispatch();

	const addLyricHandler = (title, lyric) => {
		dispatch(addLyric(title, lyric));
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={styles.inputTitle}
				onChangeText={onChangeTitle}
				value={title}
				placeholder="Title..."
			/>
			<TextInput
				style={styles.inputText}
				onChangeText={onChangeLyric}
				value={lyric}
				multiline={true}
				placeholder="Lyrics..."
			/>
			<View style={styles.buttonContainer}>
				<TouchableOpacity>
					<Button
						onPress={() => {
							addLyricHandler(title, lyric);
							navigation.navigate("Home");
						}}
						title="Save"
						color={Colors.background}
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

export default NewSongScreen;
