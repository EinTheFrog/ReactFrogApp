import { StyleSheet, View, Button } from 'react-native';
import Picture from './components/main/Picture'

export default function App() {
  return (
    <View style={styles.container}>
      <Picture uri='https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2_3x4.jpg'/>
      <Button title='Next frog'/>
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
