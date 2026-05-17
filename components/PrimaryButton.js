import { View, Text, Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
    }
});

export const PrimaryButton = ({ children }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
              style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
              android_ripple={{
              color:
              '#3f0321'
              }}>
                <Text style={styles.buttonText}>{ children }</Text>
            </Pressable>
        </View>
    );
}