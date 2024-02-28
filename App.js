import { StyleSheet, Text, View, Image } from 'react-native';
import Picture from './components/main/Picture'

export default function App() {
  return (
    <View style={styles.container}>
      <Picture />
      <Text>This is a frog</Text>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
