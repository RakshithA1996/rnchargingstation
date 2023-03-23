import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import ChargingStationNavigator from './src/routes';

const RNChargingStation = (props) => {
    return (
        <NavigationContainer>
            <ChargingStationNavigator />
        </NavigationContainer>
    )
}

export default RNChargingStation