
import { Button, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { HeaderWithoutCompound } from './src/components/HeaderWithoutCompound';
import { Header } from './src/components/Header/Header';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1, }}>
        {/* <HeaderWithoutCompound title='HEADER' /> */}
        <Header>
          <Header.Group>
            <Header.Icon iconName='arrow-back' />
            <Header.Title title='HEADER' />
          </Header.Group>
          <Header.Icon iconName='close' /> 
        </Header>
      </View>
    </SafeAreaProvider>
  );
}