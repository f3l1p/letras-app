import React from "react";
import { Button, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Colors from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

import SongsList from "../screens/SongsList";
import NewSongScreen from "../screens/NewSongScreen";
import TabNav from "../navigation/TabNavigator";

const Stack = createNativeStackNavigator();

const SongsNavigator = () => {
	const navigation = useNavigation();

	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.background,
				},

				headerTintColor: Colors.titleHColor,
			}}
		>
			<Stack.Screen
				name="Home"
				component={SongsList}
				options={{
					title: "My Songs",
					headerRight: () => (
						<TouchableOpacity>
							<Button
								onPress={() => navigation.navigate("NewSong")}
								title="New"
								color={Colors.background}
							/>
						</TouchableOpacity>
					),
				}}
			/>
			<Stack.Screen
				name="NewSong"
				component={NewSongScreen}
				options={() => ({
					title: "New Song",
				})}
			/>
			<Stack.Screen
				name="Detail"
				component={TabNav}
				options={() => ({
					title: "Detail",
				})}
			/>
		</Stack.Navigator>
	);
};

export default SongsNavigator;
