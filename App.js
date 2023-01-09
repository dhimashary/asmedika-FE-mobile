import { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native'
import logo from './assets/logo-asmedika.png'
import {
  useFonts,
  Nunito_500Medium,
  Nunito_300Light,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import { TextInput, Button } from 'react-native-paper'
import {
  Provider as PaperProvider,
  MD3LightTheme as DefaultTheme,
} from 'react-native-paper'
import bgFloat from './assets/bg-float.png'
import baseStyles from './styles'
import { useTheme } from 'react-native-paper'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7447D3',
    secondary: '#B9A3E9',
    tertiary: '#3A87F8',
  },
}

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  )
}

function App() {
  let [fontsLoaded] = useFonts({
    nunitoLight: Nunito_300Light,
    nunitoMedium: Nunito_500Medium,
    nunitoSemiBold: Nunito_600SemiBold,
    nunitoBold: Nunito_700Bold,
  })
  const theme = useTheme()
  const [text, setText] = useState('')
  const [showPassword, setShowPassword] = useState(true)

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <Image source={logo} style={{ width: 300, height: 300 }} />
      </View>
    )
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        width: '100%',
      }}>
      <ImageBackground
        style={{
          flex: 1,
          width: '100%',
          resizeMode: 'cover',
          justifyContent: 'center',
          opacity: 0.9,
        }}
        source={bgFloat}></ImageBackground>
      <View
        style={{
          flex: 3,
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 24,
          }}>
          <Image
            source={logo}
            style={{
              height: 100,
              width: 100,
              marginRight: 8,
            }}
          />
          <Text
            style={{
              fontSize: baseStyles['font-xl'],
              color: baseStyles['baseColor'],
              fontFamily: 'nunitoBold',
            }}>
            Asmedika
          </Text>
        </View>
        <View
          style={{
            width: '90%',
          }}>
          <TextInput
            label="Email"
            mode="outlined"
            value={text}
            onChangeText={text => setText(text)}
            outlineColor={theme.colors.primary}
            style={{
              width: '100%',
              marginBottom: 16,
              backgroundColor: 'white',
            }}
          />
          <TextInput
            label="Password"
            secureTextEntry={showPassword}
            mode="outlined"
            value={text}
            onChangeText={text => setText(text)}
            outlineColor={theme.colors.primary}
            style={{
              width: '100%',
              backgroundColor: 'white',
              marginBottom: 16,
            }}
            right={
              !showPassword ? (
                <TextInput.Icon
                  icon="eye"
                  onPress={() => setShowPassword(!showPassword)}
                />
              ) : (
                <TextInput.Icon
                  icon="eye-off"
                  onPress={() => setShowPassword(!showPassword)}
                />
              )
            }
          />
          <Text
            style={{
              fontSize: baseStyles['font-md'],
              fontFamily: 'nunitoSemiBold',
              color: theme.colors.tertiary,
              alignSelf: 'flex-end',
              marginBottom: 16,
            }}>
            Lupa password?
          </Text>
          <Button
            mode="contained"
            style={{ padding: 6, borderRadius: 24, marginVertical: 16 }}
            onPress={() => console.log('Pressed')}>
            <Text
              style={{
                fontSize: baseStyles['font-md'],
                fontFamily: 'nunitoBold',
              }}>
              Masuk
            </Text>
          </Button>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 16,
          }}>
          <Text
            style={{
              fontSize: baseStyles['font-md'],
              fontFamily: 'nunitoLight',
              marginRight: 4,
            }}>
            Belum memiliki akun?
          </Text>
          <Text
            style={{
              fontSize: baseStyles['font-md'],
              fontFamily: 'nunitoSemiBold',
              color: theme.colors.tertiary,
            }}>
            Daftar
          </Text>
        </View>
      </View>
    </View>
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
