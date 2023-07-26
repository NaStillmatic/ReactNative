import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Typography } from './src/components/Typography';
import { LocalImage } from './src/components/LocalImage';
import { RemoteImage } from './src/components/RemoteImage';
import { Icon } from './src/components/Icons';
import { Badge } from './src/components/Badge';
import { Button } from './src/components/Button';
import { Divider } from './src/components/Divider';
import { Spacer } from './src/components/Spacer';

export default function App() {
  return (
    <View style={styles.container}>
      <Typography color='red' fontSize={20}>
        이것은 텍스트 입니다.
      </Typography>

      <Divider />
      <Spacer space={20} />

      <LocalImage 
        localAsset={require('./assets/favicon.png')} 
        width={50} 
        height={50} 
      />
      
      <Spacer space={20} />
      <Divider />
      <Spacer space={20} />

      <RemoteImage 
        url={'https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1049&q=80'} 
        width={200}
        height={200}
      />
      <Icon name='home' size={40} color='red' />

      <Spacer space={20} />

      <View style={{flexDirection: 'row'}}>
        <Badge fontSize={10}>
          <Typography>BADGE</Typography>
        </Badge>

        <Badge fontSize={10}>
          <Icon name='home' size={50} color='black' />
        </Badge>
      </View>

      <Spacer space={20} />

      <View style={{flexDirection: 'row', marginTop: 32}}>
        <Button
          onPress={() => {
            console.log('PRESSED BUTTON')
          }}>
          <Typography>TEXT BUTTON</Typography>
        </Button>
        <Button 
          onPress={() => {
            console.log('PRESS ICON BUTTON')
          }}>
          <Icon name='home' size={50} color='green' />
        </Button>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
