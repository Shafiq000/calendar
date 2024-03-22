import React from 'react'
// import { NavigationCotainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Main from '../Screen/Main'
import Setting from '../Screen/Setting';
import MoreApps from '../Screen/MoreApps';
const Stack = createNativeStackNavigator();
function AppStack() {
    return (

        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="MoreApps" component={MoreApps} />
        </Stack.Navigator>
    )
}

export default AppStack
