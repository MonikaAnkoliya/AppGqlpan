import React, {useState} from 'react';
import { StyleSheet, StatusBar, SafeAreaView, View, ActivityIndicator} from 'react-native';
import { useRoute, useNavigation } from "@react-navigation/native";
import { WebView } from 'react-native-webview';
import Header from '../commonComponents/headerComponent'

function MenuDetail() {
  const route = useRoute();
  const navigation = useNavigation();

  const [visible, setVisible] = useState(false);

  const ActivityIndicatorElement = () => {
    return (
      <View style={styles.activityIndicatorStyle}>
        <ActivityIndicator color="#009688" size="large" />
      </View>
    );
  };
  console.log('#####', route.params)
  const uri = route.params.uri;
    return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header onPress={() => {navigation.openDrawer()}} />
      <View style={styles.container}>
        <WebView
          style={{ flex: 1 }}
          //Loading URL
          source={{ uri }}
          //Enable Javascript support
          javaScriptEnabled={true}
          //For the Cache
          domStorageEnabled={true}
          onLoadStart={() => setVisible(true)}
          onLoad={() => setVisible(false)}
        />
        {visible ? <ActivityIndicatorElement /> : null}
      </View>
    </SafeAreaView>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FFF',
      flex: 1,
      marginTop: StatusBar.height
    },
    activityIndicatorStyle: {
      flex: 1,
      position: 'absolute',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 'auto',
      marginBottom: 'auto',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      justifyContent: 'center',
    },
  })
  
  export default MenuDetail