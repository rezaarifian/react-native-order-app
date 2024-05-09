import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import OrderScreen from '../components/orderScreen';
import DetailsScreen from '../components/DetailsScreen'
import CreateOrderScreen from '../components/CreateOrderScreen';

const Stack = createNativeStackNavigator();

const Main: React.FC = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Order"
                component={OrderScreen}
                options={({ navigation }) => ({
                  title: 'Order',
                  headerStyle: {
                    backgroundColor: '#ffff',
                  },
                  headerTitleAlign: 'center',
                  headerTintColor: 'black',
                  headerLeft: () => (
                    <Icon
                      onPress={() => navigation.navigate('CreateOrderScreen')}
                      name="add"
                      size={30} color={'#3e81ed'}
                    />
                  ),
                })}
            />
            <Stack.Screen
                name="CreateOrderScreen"
                component={CreateOrderScreen}
                options={({ navigation }) => ({
                  title: 'Add New Order',
                  headerStyle: {
                    backgroundColor: '#ffff',
                  },
                  headerTitleAlign: 'center',
                  headerTintColor: 'black',
                  headerLeft: () => (
                    <Icon
                      onPress={() => navigation.goBack()}
                      name="arrow-back"
                      size={30} color={'black'}
                    />
                  ),
                })}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={({ navigation }) => ({
                  title: 'Detail Order',
                  headerStyle: {
                    backgroundColor: '#ffff',
                  },
                  headerTitleAlign: 'center',
                  headerTintColor: 'black',
                  headerLeft: () => (
                    <Icon
                      onPress={() => navigation.goBack()}
                      name="arrow-back"
                      size={30} color={'black'}
                    />
                  ),
                })}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;