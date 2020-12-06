import React, {useState} from 'react';
import { StyleSheet, TextInput, Button, Text, FlatList, SafeAreaView } from 'react-native';
import { findTotalNoOfFlipinEachCase } from '../actions/getPancakeFlipCount';

function PancakeFlip() {
    const [value, onChangeText] = useState('');
    const [result, setResult] = useState([]);

    const onPressLearnMore = () => {
        const result = findTotalNoOfFlipinEachCase(value)
        setResult(result);
        console.log('+++++++++++', result)
    }

    return (
      <SafeAreaView>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin:15, padding: 10 }}
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
      backgroundColor: '#333',
      justifyContent: 'center',
      alignItems: 'center'
    },
    boldText: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold'
    }
  })
  
  export default PancakeFlip