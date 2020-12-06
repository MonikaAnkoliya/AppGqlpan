import React, {useState} from 'react';
import { useNavigation } from "@react-navigation/native";

import { TouchableOpacity, Dimensions, View, StyleSheet, TextInput, StatusBar, Button, Text, FlatList, SafeAreaView } from 'react-native';
import { findTotalNoOfFlipinEachCase } from '../actions/getPancakeFlipCount';
import Header from '../commonComponents/headerComponent'

function PancakeFlip() {
    const [value, onChangeText] = useState('');
    const [result, setResult] = useState([]);
    const navigation = useNavigation();

    const onPressLearnMore = () => {
        const result = findTotalNoOfFlipinEachCase(value)
        setResult(result);
        console.log('+++++++++++', result)
    }

    return (
      <SafeAreaView style={styles.container}>
        <Header onPress={() => {navigation.openDrawer()}} />
        <TextInput
            style={styles.testInput}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder='Write an Input'
        />
        <Button
            onPress={() => onPressLearnMore()}
            title="Press here to get Solution"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
        <FlatList
            data={result}
            renderItem={({item})=><Text>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
        />
      </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: StatusBar.height
    },
    boldText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold'
    },
    testInput: { 
        height: 40,
        width: Dimensions.get('window').width - 40,
        marginTop: 20,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10
    }
  })
  
  export default PancakeFlip