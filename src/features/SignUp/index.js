import { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import baseStyles from '~/styles'
import AuthLayout from '~/layout/AuthLayout'
import PrimaryInput from '~/components/primary/PrimaryInput'
import HStack from '~/components/base/HStack'

function SignUp() {
  const [text, setText] = useState('')
  const [showPassword, setShowPassword] = useState(true)

  return (
    <AuthLayout>
      <View style={styles.logoContainer}>
        <Text style={styles.logoFont}>Buat Akun</Text>
      </View>
      <View style={styles.inputContainer}>
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
        />
        <PrimaryInput
          label="Password"
          secureTextEntry={showPassword}
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
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
        <PrimaryInput
          label="Konfirmasi Password"
          secureTextEntry={showPassword}
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
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
        <Button
          mode="contained"
          style={styles.submitButton}
          onPress={() => console.log('Pressed')}>
          <Text style={styles.submitText}>Daftar</Text>
        </Button>
      </View>
      <View style={styles.confirmationContainer}>
        <Text style={styles.navigateRegisterText}>
          Dengan mendaftar, saya menyetujui
        </Text>
        <HStack
          style={{
            marginBottom: baseStyles.space.lg,
          }}>
          <Text style={styles.registerText}>Syarat dan Ketentuan</Text>
          <Text style={styles.text}>dan</Text>
          <Text style={styles.registerText}>Kebijakan Privasi</Text>
        </HStack>
        <HStack>
          <Text style={styles.text}>Sudah memiliki akun?</Text>
          <Text style={styles.registerText}>Masuk</Text>
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
    color: baseStyles.color.base,
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
