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

const SearchRimeScreen = () => {
	const [search, setSearch] = useState("");
	const [filteredData, setFilteredData] = useState([]);

	const searchSeparation = search.split("");

	let counter = 0;
	for (const obj of searchSeparation) {
		if (obj) counter++;
	}

	const allWords = [
		"hola",
		"ola",
		"pola",
		"marimañola",
		"tola",
		"cancion",
		"oracion",
		"negacion",
	];

	const searchRimesHandler = () => {
		const filteredData = allWords.filter((w) => w.slice(-+counter) === search);
		setFilteredData(filteredData);
	};

	return (
		<View style={styles.screen}>
			{filteredData === [] ? (
				<Text>
					Busca tu rima escribiendo las ultimas letras que quieres que rimen
				</Text>
			) : (
				<View>
					<FlatList
						data={filteredData}
						renderItem={({ item }) => <Text style={styles.rimes}>{item}</Text>}
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

	inputContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		maxHeight: 60,
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
