import { StyleSheet, Text, View, Image } from 'react-native';

export default function Picture({ uri }) {
    return (
        <Image style={styles.picture} source={require(uri)} />
    )
}

const styles = StyleSheet.create({
    picture: {
        width: '70%',
        borderRadius: 8,
    }
})