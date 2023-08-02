import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ImaageListScreen } from '../screen/ImageListScreen';
import { FavoriteImageListScreen } from '../screen/FavoriteImageListScreen';
import { TabIcon } from '../components/TabIcon';
const Tabs = createBottomTabNavigator();

export const BottomTabNavigations = () => {
    return (
        <Tabs.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon:({focused, color, size}) => {
                const getIconName = () => {
                    if (route.name === 'ImageList') {
                        return 'home'
                    } else if (route.name === 'FavoriteImageList') {                    
                        return 'star'
                    }                    
                }
                const iconName = getIconName();
                return (
                    <TabIcon iconName={iconName} iconColor={color} />
                )
            }
        })}>
            <Tabs.Screen name='ImageList' component={ImaageListScreen} />
            <Tabs.Screen name='FavoriteImageList' component={FavoriteImageListScreen} />
        </Tabs.Navigator>
    );
}