import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ChargingStationParamList } from '../routes/index'

type HomePageNavigatorProp = NativeStackNavigationProp<ChargingStationParamList, 'HomePage'>;

const HomePage= () => {
    const navigation:HomePageNavigatorProp = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#000000', textAlign: 'center', marginBottom: 25 }}>Home page</Text>
            <Pressable  
                onPress={() => navigation.navigate('ChargingPage', {})}
                style={{ backgroundColor: '#000000', paddingVertical: 10, width: 100 }}
            >
                <Text style={{ color: '#FFFFFF', textAlign: 'center' }}>Click</Text>
            </Pressable>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({})