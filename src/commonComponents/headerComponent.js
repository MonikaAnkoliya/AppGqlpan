import React from 'react';
import { TouchableOpacity, Dimensions, View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


function Header({onPress}) {
    return (
        <View style={styles.headerWrap}>
          <TouchableOpacity onPress={onPress}>
            <Icon name="bars" size={25} color="#000" />
          </TouchableOpacity>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
    headerWrap: {
        height: 65,
        backgroundColor: '#FFF',
        width: Dimensions.get('window').width,
        padding: 20,
        paddingLeft: 25
    }
  })
  
  export default Header;