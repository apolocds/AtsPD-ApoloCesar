import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
      </Text>
      <Card>
        <AssetExample />
      </Card>
      <Text style={styles.paragraph}>
       Apollo César 3ºB
      </Text>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
    padding: 8,
  },
  paragraph: {
    margin: 1,
    fontSize: '10',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
  },
});
