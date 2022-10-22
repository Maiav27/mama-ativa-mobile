import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MinhasDoacoes from './src/screens/MinhasDoacoes';
import NovaDoacao from './src/screens/NovaDoacao';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator initialRouteName='MinhasDoacoes' >
        <Stack.Screen name='MinhasDoacoes' component={MinhasDoacoes} options={{title : 'Minhas Doações'}}  />
        <Stack.Screen name='NovaDoacao' component={NovaDoacao} options={{title : 'Nova Doação'}} />
      </Stack.Navigator>
     </NavigationContainer>
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
