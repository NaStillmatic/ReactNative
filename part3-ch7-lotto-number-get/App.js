import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomTabNavigation } from './src/navigation/BottomTabNavigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persisor } from './src/store/store';

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate persistor={persisor}>        
          <NavigationContainer>
            <BottomTabNavigation></BottomTabNavigation>
          </NavigationContainer>
        </PersistGate>
      </Provider>        
    </SafeAreaProvider>
  );
}
