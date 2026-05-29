import { Dimensions, StyleSheet, View } from "react-native"
import Colors from "../../constants/colors"

export const Card = ({ children }) => {
    return <View style={styles.cardContainer}>{ children }</View>
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    cardContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
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
        marginTop: 36,
        backgroundColor: Colors.primary800
    },
})