import { View, ImageBackground, StyleSheet } from 'react-native'
import bgFloat from '~assets/bg-float.png'
import baseStyles from '~/styles'

function AuthLayout({ children }) {
  return (
    <View style={baseStyles.flexCenter}>
      <ImageBackground
        style={styles.bgImage}
        source={bgFloat}></ImageBackground>
      <View style={styles.content}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    opacity: 0.9,
  },
  content: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
  },
})

export default AuthLayout
