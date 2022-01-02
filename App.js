import React, { useEffect, useState } from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

import SongsNavigator from "./navigation/StackNavigator";
import { Provider as StoreProvider } from "react-redux";
import store from "./store/store";

import { init } from "./db";

export default function App() {
	const [loadDB, setLoadDB] = useState(false);
	const [loaded] = useFonts({
		claireRegular: require("./assets/fonts/ClaireHandRegular.otf"),
		ClaireBold: require("./assets/fonts/ClaireHandBold.otf"),
	});

	useEffect(() => {
		init()
			.then(() => {
				console.log("Database initialized");
				setLoadDB(true);
			})
			.catch((err) => {
				console.log("Database failed to connect");
				console.log(err.message);
			});
	}, []);

	if (!loaded) {
		return null;
	}

	return (
		<StoreProvider store={store}>
			<NavigationContainer>
				<View style={styles.container}>
					{loadDB ? <SongsNavigator /> : <ActivityIndicator />}
				</View>
			</NavigationContainer>
		</StoreProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
