import { StyleSheet, Text, View, Image } from 'react-native';

export default function Picture({ uri }) {
    return (
        <Image 
        source={{
            uri: uri,
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
        margin: 10,
        borderColor: '#000000'
    }
})