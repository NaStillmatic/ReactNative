import { createContext, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CounterScreen } from './src/screens/CounterScreens';
import { RecoilRoot } from 'recoil';

export const CounterContext = createContext();

export default function App() {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <CounterScreen />
      </RecoilRoot>
    </SafeAreaProvider>    
  );
}

