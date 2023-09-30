import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateCategory from './screens/CreateCategory';
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>

        <Stack.Screen 

        name="Cadastro"
        component={CreateCategory}
        options={{ 
          title: "Cadastrar",
          headerStyle: {
            backgroundColor: '#181F27',
          },
          headerTintColor: '#28FFC6',
    }}

        />

      </Stack.Navigator>

    </NavigationContainer>
  )
}
