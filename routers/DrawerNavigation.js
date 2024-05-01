import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavoriteStackNavigation, ContactStackNavigation, OptionsStackNavigation } from './StackNavigation';
import Contacts from '../screen/Contacts';
import Favorites from '../screen/Favorites';
import User from '../screen/User';
import MyCustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={ContactStackNavigation}
            />
            <Drawer.Screen
                name="Favorite"
                component={FavoriteStackNavigation}
            />
            <Drawer.Screen
                name="User"
                component={OptionsStackNavigation}
            />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator