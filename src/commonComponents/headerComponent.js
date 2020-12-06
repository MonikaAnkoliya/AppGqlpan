import React from 'react';
import { TouchableOpacity, Dimensions, View, StyleSheet, Text } from 'react-native';

function Header({onPress}) {
    return (
        <View style={styles.headerWrap}>
          <TouchableOpacity onPress={onPress}>
            <Text style={{color:'#000'}}>test</Text>
          </TouchableOpacity>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    headerWrap: {
        height: 45,
        backgroundColor: '#FFF',
        width: Dimensions.get('window').width,
        padding: 15
    }
  })
  
  export default Header;