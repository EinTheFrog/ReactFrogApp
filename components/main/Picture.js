import { StyleSheet, Text, View, Image } from 'react-native';

export default function Picture() {
    return (
        <Image 
        source={{
            uri: 'https://i.natgeofe.com/k/8fa25ea4-6409-47fb-b3cc-4af8e0dc9616/red-eyed-tree-frog-on-leaves-3-2_3x4.jpg',
        }}
        style={styles.picture}
      />
    )
}

const styles = StyleSheet.create({
    picture: {
        width: 300,
        height: 300,
        borderRadius: 8,
        borderColor: '#000000'
    }
})