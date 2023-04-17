import 'react-native-gesture-handler';
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { AuthProvider } from './src/contexts/AuthContext';
import { MenuProvider } from 'react-native-popup-menu';


export default function App() {
  return (
<NavigationContainer>
  <MenuProvider>
  <AuthProvider>
    <StatusBar
      backgroundColor="#FAFAFA"
      barStyle="dark-content"
    />
    <Routes />
    </AuthProvider>
  </MenuProvider>

</NavigationContainer>

  );
}

