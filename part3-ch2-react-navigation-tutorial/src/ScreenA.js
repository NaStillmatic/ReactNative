import React from "react";
import { Button, Text, View } from "react-native";

export class ScreenA extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>이것은 ScreenA 입니다.</Text>
                
                <Button 
                    title="B스크린으로 이동하기"
                    onPress={() => {
                        // console.log('B스크린으로 이동하기')
                        this.props.navigation.navigate('ScreenB', {value: 'fromA'});
                    }} />
                <Button 
                    title="C스크린으로 이동하기"
                    onPress={() => {
                        // console.log('C스크린으로 이동하기')
                        this.props.navigation.navigate('ScreenC', {screen: 'ScreenC'});
                    }} />
            </View>
        )
    }
}