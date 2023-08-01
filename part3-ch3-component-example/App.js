
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { HeaderWithoutCompound } from './src/components/HeaderWithoutCompound';
import { Header } from './src/components/Header/Header';
import { Typography } from './src/components/Typography';
import { LocalImage } from './src/components/LocalImage';
import { RemoteImage } from './src/components/RemoteImage';
import { Spacer } from './src/components/Spacer';
import { Divider } from './src/components/Divider';
import { HookTestComponent } from './src/components/HookTestComponent';
import { useCallback, useState } from 'react';
import { Button } from './src/components/Button';

export default function App() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    const doSum = useCallback(() => {
        return (a+b)        
    }, [a, b])

    return (
        <SafeAreaProvider>
        <View style={{flex: 1}}>
            <Header>
            <Header.Group>
                <Header.Icon iconName='arrow-back' />
                <Header.Title title='HEADER'></Header.Title>
            </Header.Group>
            <Header.Icon iconName='close' />
            </Header>
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <HookTestComponent a={a} b={b}></HookTestComponent>

                <Typography>현재 callback으로 계산 된 값: {doSum()}</Typography>
                <Button
                    onPress={() =>{
                        console.log('press'),
                        setA(a+1)
                    }}>
                    <Typography>A더하기</Typography>
                </Button>
            </View>
        </View>
        </SafeAreaProvider>
    );
}