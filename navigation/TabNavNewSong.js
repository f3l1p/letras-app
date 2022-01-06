import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import SearchRimeScreen from "../screens/SearchRimeScreen";
import RecordScreen from "../screens/RecordScreen";
import NewSongScreen from "../screens/NewSongScreen";
import Colors from "../constants/colors";

const Tab = createBottomTabNavigator();

function TabNavNewSong() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarStyle: {
					backgroundColor: Colors.background,
					height: 60,
					paddingBottom: 8,
					paddingTop: 8,
				},
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Song") {
						iconName = focused ? "pencil" : "pencil";
					} else if (route.name === "Search") {
						iconName = focused ? "search" : "search-sharp";
					} else if (route.name === "Record") {
						iconName = focused ? "mic" : "mic-outline";
					}

					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
		>
			<Tab.Screen name="Song" component={NewSongScreen} />
			<Tab.Screen name="Search" component={SearchRimeScreen} />
			<Tab.Screen name="Record" component={RecordScreen} />
		</Tab.Navigator>
	);
}

export default TabNavNewSong;
