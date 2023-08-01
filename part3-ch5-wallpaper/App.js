import { NavigationContainer } from "@react-navigation/native"
import { RootsStackNavigations } from "./src/navigations/RootStackNavigations";

export default function App() {
  return (
    <NavigationContainer>      
      <RootsStackNavigations />
    </NavigationContainer>
  );
}

