import React from 'react'
import { Text, StatusBar, StyleSheet, TouchableOpacity, SafeAreaView, View, FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import {
  useQuery,
  gql
} from "@apollo/client";
import Header from '../commonComponents/headerComponent'

function MenuList(props) {
  const { navigate } = useNavigation();
  const navigation = useNavigation();

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

  console.log('****', loading, data);

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigate('MenuDetail', { uri: item.url})}>
      <Text style={styles.boldText}>{item.title}</Text>
     </TouchableOpacity>
  );

  if(error) {return <Text style={styles.boldText}>There is no data</Text>}

  return (
    <SafeAreaView style={styles.container}>
        <Header onPress={() => {navigation.openDrawer()}} />
        <TouchableOpacity onPress={() => navigate('Pancake')}>
          <Text style={styles.boldText}>Pancake Problem Algo</Text>
        </TouchableOpacity>
        <Text style={styles.boldText}>-: List of Menu :-</Text>
        {!loading && data.menu.length >0 && <FlatList
                  data={data.menu}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                />}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    marginTop: StatusBar.height
  },
  boldText: {
    padding: 15,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default MenuList