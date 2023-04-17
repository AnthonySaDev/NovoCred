import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from '../pages/home';
import {Statement} from '../pages/statement';
import {Benefits} from '../pages/benefits';
import {Payments} from '../pages/payments';
import CustomTabBar from '../components/CustomTabBar';


const Tab = createBottomTabNavigator();

export function TabRoutes(){
    
   // const {isLogged} = useContext(AuthContext);
   let isLogged = true; 
      
   return (
            <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle:{
                    borderTopWidth: 0,
                    backgroundColor: '#fff'
                }

            }}
            tabBar={(props)=><CustomTabBar {...props}/>}
            >
                <Tab.Screen 
                name='Home' 
                component={Home}
                options={{
                    tabBarIcon: "home"
                }}
                />
                <Tab.Screen 
                name='Extrato' 
                component={Statement}
                options={{
                    tabBarIcon: "list"
                }}
                />
                <Tab.Screen 
                name='Pagamentos' 
                component={Payments}
                options={{
                    tabBarIcon: "cash"
                }}
                />
                <Tab.Screen 
                name='Benefícios' 
                component={Benefits}
                options={{
                    tabBarIcon: "person-add"
                }}
                />
            </Tab.Navigator>

   );   
    }

