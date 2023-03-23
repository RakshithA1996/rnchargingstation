import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "../screens/homepage";
import ChargingPage from "../screens/chargingpage";

export type ChargingStationParamList = {
    HomePage: {},
    ChargingPage: {}
}

const ChargingStation = createNativeStackNavigator<ChargingStationParamList>()

// Defining all the screens in the project
const ChargingStationNavigator = () => {
    return (
        <ChargingStation.Navigator
            screenOptions={{
                headerShown: false,
                animationEnabled: false,
            }}
            initialRouteName={"HomePage"}
        >
            <ChargingStation.Screen name="HomePage" component={HomePage} />
            <ChargingStation.Screen name="ChargingPage" component={ChargingPage} />
        </ChargingStation.Navigator>
    )
}

export default ChargingStationNavigator;