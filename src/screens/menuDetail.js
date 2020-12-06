import React from 'react';
import { StyleSheet } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { WebView } from 'react-native-webview';

function MenuDetail() {
  const route = useRoute();
  const uri = route.params.uri;
    return (
      <WebView
        ref={(ref) => { this.webview = ref; }}
        source={{ uri }}
      />
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
  
  export default MenuDetail