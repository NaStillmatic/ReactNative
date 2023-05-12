import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StateWithFuctionalComponent from './StateWithFuctionalComponent';
import StateWithClassComponent from './StateWithClassComponent';


export default function App() {
  return (
    <View style={styles.container}>
      <StateWithFuctionalComponent />
      {/* <StateWithClassComponent /> */}
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
