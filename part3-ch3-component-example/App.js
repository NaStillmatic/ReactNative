
import { Button, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { HeaderWithoutCompound } from './src/components/HeaderWithoutCompound';
import { Header } from './src/components/Header/Header';
import { Typography } from './src/components/Typography';
import { LocalImage } from './src/components/LocalImage';
import { RemoteImage } from './src/components/RemoteImage';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{
        flex: 1, 
        alignItems: 
        'center', 
        justifyContent: 'center'
      }}>
        <Typography 
          fontSize={16} 
          color='black'
        >
          TEXT
        </Typography>

        <LocalImage 
          localAsset={require('./assets/favicon.png')} 
          width={100} 
          height={100} 
        />

        <RemoteImage
            url='https://images.unsplash.com/photo-1649191629437-2dc474bc11ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1625&q=80'
            width={200} 
            height={200} 
        />

      </View>
    </SafeAreaProvider>
  );
}