import { View, Text, Button } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Contacts from '../screen/Contacts';
import Profile from '../screen/Profile';
import Favorites from '../screen/Favorites';
import User from '../screen/User';
import Option from '../screen/Option'

const Stack = createNativeStackNavigator();

const ContactStackNavigation = () => {
    return (
        <Stack.Navigator back>
            <Stack.Screen name="Contact" component={Contacts} />
            <Stack.Screen
                name="Profile"
                component={Profile}

            />
            <Stack.Screen name='Favorite' component={Favorites} />
            <Stack.Screen name='User' component={User} />
        </Stack.Navigator>
    )
}

const FavoriteStackNavigation = () => {
    return (
        <Stack.Navigator back>
            <Stack.Screen name="Favorite" component={Favorites} />
            <Stack.Screen
                name="Profile"
                component={Profile}

            />
        </Stack.Navigator>
    )
}

const OptionsStackNavigation = () => {
    return (
        <Stack.Navigator back>
            <Stack.Screen name="User" component={User} />
            <Stack.Screen
                name="Options"
                component={Option}

            />
        </Stack.Navigator>
    )
}
export { ContactStackNavigation, FavoriteStackNavigation, OptionsStackNavigation }