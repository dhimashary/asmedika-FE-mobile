import { StyleSheet, View, Image } from 'react-native'
import logo from './assets/logo-asmedika.png'
import {
  useFonts,
  Nunito_500Medium,
  Nunito_300Light,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import { Provider as PaperProvider } from 'react-native-paper'
import { useTheme } from 'react-native-paper'
import SignUp from '~/features/SignUp'
import SignIn from '~/features/SignIn'
import PasswordText from '~/features/PasswordReset'

export default function Main() {
  let [fontsLoaded] = useFonts({
    nunitoLight: Nunito_300Light,
    nunitoMedium: Nunito_500Medium,
    nunitoSemiBold: Nunito_600SemiBold,
    nunitoBold: Nunito_700Bold,
  })
  const theme = useTheme()

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Image source={logo} style={{ width: 300, height: 300 }} />
      </View>
    )
  }
  return (
    <PaperProvider theme={theme}>
      <SignIn />
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
