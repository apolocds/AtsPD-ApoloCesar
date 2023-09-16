import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
export default function AssetExample() {
  const handleButtonPress = () => {
    console.log('Botão foi pressionado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        "O maior clube da Inglaterra"
      </Text>
>     <Image style={styles.vvd} source={require('../assets/vvd.png')} />
      <Image style={styles.logo} source={require('../assets/pngwing.com.png')} />
      <TouchableOpacity
        style={styles.customButton}
      >
        <Text style={styles.buttonText}>YOU NEVER WALK ALONE!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:  10,
    backgroundColor: 'black',
  },
  paragraph: {
    margin: 8,
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
  logo: {
    height: 250,
    width: 150,
  },
  vvd: {
    alignItems: 'center',
    height: 150,
    width: 120,
  },
  customButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
