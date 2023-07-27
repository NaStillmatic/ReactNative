
import { Button, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { HeaderWithoutCompound } from './src/components/HeaderWithoutCompound';
import { Header } from './src/components/Header/Header';
import { Typography } from './src/components/Typography';
import { LocalImage } from './src/components/LocalImage';
import { RemoteImage } from './src/components/RemoteImage';
import { Spacer } from './src/components/Spacer';
import { Divider } from './src/components/Divider';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1, }}>
        <Header>
        <Header.Group>
            <Header.Icon iconName='arrow-back' />
            <Header.Title title='HEADER'></Header.Title>
        </Header.Group>
        <Header.Icon iconName='close' />
        </Header>
        
      </View>
    </SafeAreaProvider>
  );
}