import 'intl'
import { Platform } from 'react-native'

if (Platform.OS === 'android') {
  // See https://github.com/expo/expo/issues/6536 for this issue.
  if (typeof Intl.__disableRegExpRestore === 'function') {
    Intl.__disableRegExpRestore()
  }
}

import 'intl/locale-data/jsonp/en'
import { enGB, registerTranslation } from 'react-native-paper-dates'
registerTranslation('en', enGB)
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
import theme from '~/theme/paperTheme'
import MainStack from '~/navigations/navigators/MainStack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

export default function App() {
  let [fontsLoaded] = useFonts({
    nunitoLight: Nunito_300Light,
    nunitoMedium: Nunito_500Medium,
    nunitoSemiBold: Nunito_600SemiBold,
    nunitoBold: Nunito_700Bold,
  })

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Image source={logo} style={{ width: 300, height: 300 }} />
      </View>
    )
  }
  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <MainStack />
      </SafeAreaProvider>
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
