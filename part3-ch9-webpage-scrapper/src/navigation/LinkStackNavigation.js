import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinkListScreen } from '../screen/LinkListScreen';
import { LinkDetailScreen } from '../screen/LinkDetailScreen';

const Stack = createNativeStackNavigator();

export const LinkStackNavigation = () => {
    return (
        <Stack.Navigator 
            initialRouteName='LinkList'
            screenOptions={{
                presentation: 'card',
                headerShown: false,
            }}
        >
            <Stack.Screen name='LinkList' component={LinkListScreen} />
            <Stack.Screen name='LinkDetail' component={LinkDetailScreen} />
        </Stack.Navigator>
    )
}