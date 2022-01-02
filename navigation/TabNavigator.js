import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import SearchRimeScreen from "../screens/SearchRimeScreen";
import RecordScreen from "../screens/RecordScreen";
import EditScreen from "../screens/EditScreen";
import Colors from "../constants/colors";

const Tab = createBottomTabNavigator();

function TabNav() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarStyle: {
					backgroundColor: Colors.background,
					borderWidth: 0,
					paddingVertical: 10,
				},
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;

					if (route.name === "Edit") {
						iconName = focused ? "pencil" : "pencil";
					} else if (route.name === "Search") {
						iconName = focused ? "search" : "search-sharp";
					} else if (route.name === "Record") {
						iconName = focused ? "mic" : "mic-outline";
					}

					// You can return any component that you like here!
					return <Ionicons name={iconName} size={size} color={color} />;
				},
			})}
		>
			<Tab.Screen name="Edit" component={EditScreen} />
			<Tab.Screen name="Search" component={SearchRimeScreen} />
			<Tab.Screen name="Record" component={RecordScreen} />
		</Tab.Navigator>
	);
}

export default TabNav;
