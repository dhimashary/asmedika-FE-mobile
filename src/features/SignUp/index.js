import { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import baseStyles from '~/styles'
import AuthLayout from '~/layout/AuthLayout'
import PrimaryInput from '~/components/primary/PrimaryInput'
import HStack from '~/components/base/HStack'
import PasswordIcon from '~/components/PasswordIcon'
import PrimaryButton from '~/components/primary/PrimaryButton'
import BaseLink from '~/components/base/BaseLink'
import BaseText from '~/components/base/BaseText'
import ContentView from '~/components/base/ContentView'

function SignUp() {
  const [text, setText] = useState('')
  const [showPassword, setShowPassword] = useState(true)
  const hasErrors = () => {
    return !text.includes('@') && text !== ''
  }

  return (
    <AuthLayout>
      <View style={styles.logoContainer}>
        <Text style={styles.logoFont}>Buat Akun</Text>
      </View>
      <ContentView>
        <PrimaryInput
          label="Nama Lengkap"
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
        />
        <PrimaryInput
          label="Email"
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
          error={hasErrors()}
          helperText="Email address is invalid!"
          helperVisible={hasErrors()}
        />
        <PrimaryInput
          label="Password"
          secureTextEntry={showPassword}
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
          right={
            <PasswordIcon
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          }
        />
        <PrimaryInput
          label="Konfirmasi Password"
          secureTextEntry={showPassword}
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
          right={
            <PasswordIcon
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          }
        />
        <PrimaryButton onPress={() => console.log('Pressed')}>
          Daftar
        </PrimaryButton>
      </ContentView>
      <View style={styles.confirmationContainer}>
        <BaseText>Dengan mendaftar, saya menyetujui</BaseText>
        <HStack
          style={{
            marginBottom: baseStyles.space.lg,
          }}>
          <BaseLink>Syarat dan Ketentuan</BaseLink>
          <BaseText
            style={{
              marginHorizontal: baseStyles.space.xs,
            }}>
            dan
          </BaseText>
          <BaseLink>Kebijakan Privasi</BaseLink>
        </HStack>
        <HStack>
          <BaseText
            style={{
              marginRight: baseStyles.space.xs,
            }}>
            Sudah memiliki akun?
          </BaseText>
          <BaseLink>Masuk</BaseLink>
        </HStack>
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
  inputContainer: {
    width: '90%',
  },
  textForgotPassword: {
    fontSize: baseStyles.font.size.sm,
    fontFamily: 'nunitoSemiBold',
    color: baseStyles.color.tertiary,
    alignSelf: 'flex-end',
    marginBottom: baseStyles.space.md,
  },
  submitButton: {
    paddingVertical: baseStyles.space.xs,
    borderRadius: baseStyles.radius.md,
    marginVertical: baseStyles.space.md,
  },
  submitText: {
    fontSize: baseStyles.font.size.sm,
    fontFamily: 'nunitoBold',
  },
  confirmationContainer: {
    marginTop: baseStyles.space.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigateRegisterText: {
    fontSize: baseStyles.font.size.sm,
    fontFamily: 'nunitoLight',
    marginRight: baseStyles.space.xs,
  },
  registerText: {
    fontSize: baseStyles.font.size.sm,
    fontFamily: 'nunitoSemiBold',
    color: baseStyles.color.tertiary,
  },
  text: {
    fontSize: baseStyles.font.size.sm,
    fontFamily: 'nunitoLight',
    marginHorizontal: baseStyles.space.xs,
  },
})

export default SignUp
