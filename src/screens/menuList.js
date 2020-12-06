import React, {useState, useEffect} from 'react'
import { Text, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import {
  useQuery,
  gql
} from "@apollo/client";


function MenuList(props) {
  const { navigate } = useNavigation();

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
        <TouchableOpacity onPress={() => navigate('Pancake')}>
          <Text style={styles.boldText}>Pancake Problem Algo</Text>
        </TouchableOpacity>
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
    backgroundColor: '#333',
    alignItems: 'center'
  },
  boldText: {
    padding: 15,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  }
})

export default MenuList