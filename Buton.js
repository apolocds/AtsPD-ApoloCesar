import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
export default function Teste() {
  const handleButtonPress = () => {
    console.log('Botão foi pressionado!');
  };

  return (
    <View style={styles.container}>
 
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
  customButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
