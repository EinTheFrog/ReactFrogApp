import { StyleSheet, Pressable, Text } from 'react-native';
import { useState } from 'react';
import { colors } from './Colors';

console.log(colors)

export default function CustomButton({ title, onPress }) {
    const [pressed, setPressed] = useState(false)

    return (
        <Pressable 
        style={[styles.customButton, { backgroundColor: pressed ? colors.secondary : colors.primary }]} 
        onPressIn={() => {
            setPressed(true)
        }}
        onPressOut={() => {
            onPress()
            setPressed(false)
        }}
        >
            <Text style={styles.customButtonText}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    customButton: {
        margin: 10,
        padding: 10,
        borderRadius: 8
    },
    customButtonText: {
        color: colors.onPrimary,
        fontWeight: 'bold'
    }
})