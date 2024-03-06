import { StyleSheet, Image } from 'react-native';

export default function Picture({ uri }) {
    return (
        <Image 
            source={ uri != '' ? { uri: uri } : {} }
            style={styles.picture}
        />
    )
}

const styles = StyleSheet.create({
    picture: {
        width: 300,
        height: 300,
        borderRadius: 8,
        margin: 10
    }
})