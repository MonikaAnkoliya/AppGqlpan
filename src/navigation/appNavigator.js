import * as React from 'react';
import { Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

import MenuList from '../screens/menuList'
import MenuDetail from '../screens/menuDetail'
import PancakeFlip from '../screens/pancakeFlip'

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: Platform.OS === 'android' ? 'http://10.0.2.2:4000/graphql' : 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function AppNavigator() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Menu" component={MenuList} />
          <Stack.Screen name="MenuDetail" component={MenuDetail} />
          <Stack.Screen name="Pancake" component={PancakeFlip} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default AppNavigator;