import React, { useEffect } from "react";
import {
	FlatList,
	TouchableOpacity,
	Text,
	View,
	StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import SongItem from "../components/SongItem";
import { useSelector, useDispatch } from "react-redux";
import { loadLyrics } from "../store/reducers";

const SongsList = (props) => {
	const navigation = useNavigation();

	const LYRICS = useSelector((state) => state.lyrics);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadLyrics());
	}, []);

	return (
		<View>
			{LYRICS <= 0 ? (
				<View style={styles.containerText}>
					<Text style={styles.text}>No tienes canciones aun.</Text>
				</View>
			) : (
				<FlatList
					data={LYRICS}
					renderItem={({ item }) => (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("Detail", {
									screen: "Edit",
									params: { title: item.title, lyric: item.lyric },
								})
							}
						>
							<SongItem title={item.title} />
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item.id}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	containerText: {
		margin: 18,
		alignItems: "center",
	},

	text: {
		fontFamily: "claireRegular",
		fontSize: 18,
	},
});

export default SongsList;
