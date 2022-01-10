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
		const dateId = new Date().getTime().toString();
		dispatch(addLyric(dateId, title, lyric));
	};

	return (
		<View style={styles.screen}>
			<View style={styles.containerText}>
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
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.buttonWrap}>
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
	screen: {
		flex: 1,
		flexDirection: "column",
		marginTop: 10,
		alignItems: "center",
	},

	containerText: {
		flex: 1,
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

	buttonContainer: {
		flex: 1,
		flexDirection: "row",
		maxHeight: 50,
	},

	buttonWrap: {
		flex: 1,
		justifyContent: "flex-end",
	},
});

export default NewSongScreen;
