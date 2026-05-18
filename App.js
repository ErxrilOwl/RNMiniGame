import { ImageBackground, StyleSheet, View } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

import { StartGameScreen } from './screens/StartGameScreen';
import { GameScreen } from './screens/GameScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Colors from './constants/colors';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}>
          <SafeAreaProvider>
            <SafeAreaView style={styles.rootScreen}>
              {screen}
            </SafeAreaView>
          </SafeAreaProvider>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
