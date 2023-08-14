import React from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header/Header';

export const HistoryListScreen = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Title title='History'></Header.Title>
            </Header>
        </View>
    )
}