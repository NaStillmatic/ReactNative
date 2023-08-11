import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Header } from '../components/Header/Header';
import { Button } from '../components/Button';
import { Icon } from '../components/Icons';
import { Spacer } from '../components/Spacer';
import { Typography } from '../components/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addCount, deleteCount } from '../actions/counter';
import { CounterContext } from '../../App';
import { useRecoilState, useRecoilValue } from 'recoil';
import { counterState } from '../states/counter';
import { counterMultiplier } from '../selectors/counterMultiplier';

const CountetTitle = () => {
    // const [count] = useContext(CounterContext); 
    const count = useRecoilValue(counterState);    

    return (
        <Typography>
            {`${count}개`}
        </Typography>
    )
}

const CounterMultiplier = () => {
    const result = useRecoilValue(counterMultiplier);
    return (
        <Typography fontSize={20}>
            {`*5 = ${result}`}
        </Typography>
    )
}

export const CounterScreen = (props) => {
    // const [_, setCount] = useContext(CounterContext);
    // const [value, setValue] = useState(0);
    // const dispatch = useDispatch();
    // const value = useSelector((state) => state.count.count)
    const [count, setCount] = useRecoilState(counterState);

    const onPressMinus = useCallback(() => {
        setCount((value) => value-1)
        // dispatch(deleteCount());
    }, [])

    const onPressPlus = useCallback(() => {
        setCount((value) => value+1)
        // dispatch(addCount());
    }, [])

    return (
        <View style={{flex: 1, }}>
            <Header>
                <Header.Title title='COUNTER' />
            </Header>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>cd
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Button paddingHorizontal={4} pddingVertical={4} onPress={onPressMinus}>
                        <Icon name='remove' size={20} color='black' />
                    </Button>

                    <Spacer horizontal space={20} />
                    <CountetTitle />
                    <Spacer horizontal space={20} />

                    <Button paddingHorizontal={4} pddingVertical={4} onPress={onPressPlus}>
                        <Icon name='add' size={20} color='black' />
                    </Button>
                </View>
                <CounterMultiplier />
            </View>            
        </View>
    )
}