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
});
