import { View, Text, StyleSheet } from "react-native"

export const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>Opponen'ts Guess!</Text>
            <View>
                <Text>Higher or Lower?</Text>
            </View>
            <View>
                <Text>Log Rounds</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    }
})