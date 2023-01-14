import { useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import logo from '~assets/logo-asmedika.png'
import baseStyles from '~/styles'
import AuthLayout from '~/layout/AuthLayout'
import ContentView from '~/components/base/ContentView'
import PrimaryButton from '~/components/primary/PrimaryButton'
import PrimaryInput from '~/components/primary/PrimaryInput'
import BaseText from '~/components/base/BaseText'
import BaseLink from '~/components/base/BaseLink'
import PasswordIcon from '~/components/PasswordIcon'

function SignIn({ navigation }) {
  const [text, setText] = useState('')
  const [showPassword, setShowPassword] = useState(true)

  return (
    <AuthLayout>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logoImg} />
        <Text style={styles.logoFont}>Asmedika</Text>
      </View>
      <ContentView>
        <PrimaryInput
          label="Email"
          onChangeText={text => setText(text)}
          value={text}
        />
        <PrimaryInput
          label="Password"
          secureTextEntry={showPassword}
          value={text}
          onChangeText={text => setText(text)}
          right={
            <PasswordIcon
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          }
        />
        <BaseLink style={styles.textForgotPassword}>Lupa password?</BaseLink>
        <PrimaryButton onPress={() => navigation.navigate('Main')}>
          Masuk
        </PrimaryButton>
      </ContentView>
      <View style={styles.registerContainer}>
        <BaseText
          style={{
            marginRight: baseStyles.space.xs,
          }}>
          Belum memiliki akun?
        </BaseText>
        <BaseLink>Daftar</BaseLink>
      </View>
    </AuthLayout>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: baseStyles.space.md,
  },
  logoImg: {
    height: 100,
    width: 100,
    marginRight: baseStyles.space.xs,
  },
  logoFont: {
    fontSize: baseStyles.font.size.lg,
    color: baseStyles.color.primary,
    fontFamily: 'nunitoBold',
  },
  textForgotPassword: {
    alignSelf: 'flex-end',
  },
  registerContainer: {
    flexDirection: 'row',
    marginTop: baseStyles.space.md,
  },
})

export default SignIn
