import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
export default function AssetExample() {
  const handleButtonPress = () => {
    console.log('Botão foi pressionado!');
  };

  return (
    <View style={styles.container}>
    
     <Image style={styles.vvd} source={require('../assets/vvd.png')} />
      <Image style={styles.logo} source={require('../assets/pngwing.com.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding:  10,
    backgroundColor: 'black',
  },
  logo: {
    height: 250,
    width: 120,
  },
  vvd: {
    height: 250,
    width: 200,
  },
});
