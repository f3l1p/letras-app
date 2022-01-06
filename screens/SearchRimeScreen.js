import React, { useState } from "react";
import {
	StyleSheet,
	FlatList,
	View,
	Text,
	TextInput,
	Button,
	TouchableOpacity,
} from "react-native";
import Colors from "../constants/colors";

import wordsDB from "../db/wordsDB";

const SearchRimeScreen = () => {
	const [search, setSearch] = useState("");
	const [filteredData, setFilteredData] = useState();

	let searchLower = search.toLocaleLowerCase();

	const searchSeparation = searchLower.split("");

	let counter = 0;
	for (const obj of searchSeparation) {
		if (obj) counter++;
	}

	const searchRimesHandler = () => {
		const filterData = wordsDB.filter(
			(w) => w.word.slice(-+counter) === searchLower
		);
		setFilteredData(filterData);
	};

	return (
		<View style={styles.screen}>
			{!filteredData ? (
				<View style={styles.textContainer}>
					<Text>
						Busca tu rima escribiendo las ultimas letras que quieres que rimen
					</Text>
				</View>
			) : (
				<View style={styles.listContainer}>
					<FlatList
						data={filteredData}
						renderItem={({ item }) => (
							<Text style={styles.rimes}>{item.word}</Text>
						)}
					/>
				</View>
			)}
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Search..."
					style={styles.input}
					onChangeText={setSearch}
					value={search.toLowerCase()}
				/>
				<TouchableOpacity style={styles.button}>
					<Button title="search" onPress={searchRimesHandler} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		margin: 0,
	},

	textContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	listContainer: {
		flex: 1,
	},

	inputContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		maxHeight: 80,
		padding: 10,
		backgroundColor: Colors.background,
	},

	input: {
		flex: 1,
		maxWidth: "60%",
		borderRadius: 10,
		backgroundColor: Colors.titleHColor,
		color: Colors.background,
		paddingHorizontal: 10,
	},

	button: {
		maxWidth: "20%",
		borderRadius: 10,
		overflow: "hidden",
		padding: "auto",
	},

	rimes: {
		marginLeft: 18,
		marginVertical: 5,
		fontSize: 16,
	},
});

export default SearchRimeScreen;
