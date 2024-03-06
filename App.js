import { StyleSheet, View } from 'react-native';
import Picture from './components/main/Picture';
import CustomButton from './components/common/CustomButton';
import { useState, useEffect } from 'react';

export default function App() {
  const [pictureUri, setPictureUri] = useState('');

  const fetchNewPicture = async() => {
    const randomFrogResponse = await fetch('https://frogs.media/api/random');
    const randomFrogData = await randomFrogResponse.json();
    const randomFrogUri = randomFrogData.url;
    console.log(randomFrogData);
    setPictureUri(randomFrogUri);
  };

  useEffect(() => {
    fetchNewPicture();
  }, [null])

  return (
    <View style={styles.container}>
      <Picture uri={pictureUri}/>
      <CustomButton title='Next frog' onPress={ fetchNewPicture }/>
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
