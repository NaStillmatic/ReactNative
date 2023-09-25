import React, { useCallback, useEffect, useState } from 'react';
import { View, Animated } from 'react-native';
import { Typography } from './Typography';

export const LottoNumberView = (props) => {
    const [viewHeight, setViewHeight] = useState(0);
    const [animatedValue] = useState(new Animated.Value(1));

    const getNumberBackgroundColor = (props) => {
        if (props < 11) {
            return 'yellow';
        } else if (props > 10 && props < 21) {
            return 'blue';
        } else if (props > 20 && props < 31) {
            return 'red';
        } else if (props > 30 && props < 41) {
            return 'gray';
        } else {
            return 'green';
        }
    }

    const translateY = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [-viewHeight * 0.6, 0]
    })

    useEffect(() => {
        animatedValue.setValue(0);

        Animated.timing(animatedValue, {
            duration: 1000,
            toValue: 1,
            useNativeDriver: true,
        }).start();
    }, [props.numbers])

    return (
        <View 
            style={{
                flex: 1, 
                flexDirection: 'row', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                overflow: 'hidden',
            }}
            onLayout={({nativeEvent}) => {
                console.log(nativeEvent.layout)
                setViewHeight(nativeEvent.layout.height)
            }}
        >
            {props.numbers.map((item) => {
                return (
                    <Animated.View
                        style={{ 
                            backgroundColor: getNumberBackgroundColor(item), 
                            width: 40, 
                            height: 40, 
                            borderRadius: 20, 
                            alignItems: 'center',
                            justifyContent: 'center',                            
                            transform: [
                                {
                                    translateY: translateY
                                }
                            ]
                        }}
                    >
                        <Typography fontSize={20} color='white'>{item}</Typography>                                    
                    </Animated.View>
                )
            })}                        
        </View>
    )
}