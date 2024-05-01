import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import DrawerNavigator from './routers/DrawerNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <DrawerNavigator/>
      </PaperProvider>
    </NavigationContainer>
  );
}