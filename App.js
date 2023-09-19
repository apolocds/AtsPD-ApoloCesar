import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';
import Buton from './components/Buton';
import Img from './components/Img';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <AssetExample />
      </Card>

      <Img />

      <Buton />

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
    backgroundColor: 'black',
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
