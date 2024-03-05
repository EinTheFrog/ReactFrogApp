import { StyleSheet, View } from 'react-native';
import Picture from './components/main/Picture';
import CustomButton from './components/common/CustomButton';
import { useEffect } from 'react';

export default function App() {
  const [pictureUri, setPictureUri] = '';

  const fetchNewPicture = async() => {
    const randomFrogResponse = await fetch('frogs.media/api/random');
    const randomFrogData = randomFrogResponse.json();
    const randomFrogUri = randomFrogData.url;
    setPictureUri(randomFrogUri);
  };

  useEffect(fetchNewPicture);

  return (
    <View style={styles.container}>
      <Picture uri={pictureUri}/>
      <CustomButton title='Next frog' onPress={fetchNewPicture}/>
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
