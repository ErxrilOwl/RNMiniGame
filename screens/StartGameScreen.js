import { TextInput, View, StyleSheet } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        marginTop: 100,
        backgroundColor: '#4a0829'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        marginTop: 4,
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
});

export const StartGameScreen = () => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType='number-pad'
              autoCorrect={false}
              autoCapitalize='none' />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
} 
