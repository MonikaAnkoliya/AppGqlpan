import * as React from 'react';
import { Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';

import MenuList from '../screens/menuList'
import MenuDetail from '../screens/menuDetail'
import PancakeFlip from '../screens/pancakeFlip'
import {
  useQuery,
  gql
} from "@apollo/client";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const client = new ApolloClient({
  uri: Platform.OS === 'android' ? 'http://10.0.2.2:4000/graphql' : 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

function StackNavigator() {
  return (
    <Stack.Navigator>
          <Stack.Screen name="Menu" component={MenuList} />
          <Stack.Screen name="MenuDetail" component={MenuDetail} />
          <Stack.Screen name="Pancake" component={PancakeFlip} />
    </Stack.Navigator>
  )
}

function DrawerNavigation() {
  const { loading, error, data } = useQuery(gql`
  {
      menu{
          id
          name
          title
          url
      }    
  }
`);
  return (
    <Drawer.Navigator>
          {/* <Drawer.Screen name="Menu" component={StackNavigator} /> */}
          <Drawer.Screen name="Pancake" component={PancakeFlip} />
          {!loading && data.menu.length >0 && 
                data.menu.map((item)=><Drawer.Screen name={item.title} component={MenuDetail} initialParams={{ uri: item.url}}/>)
          }
        </Drawer.Navigator>
  )
}


function AppNavigator() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </ApolloProvider>
  );
}

export default AppNavigator;