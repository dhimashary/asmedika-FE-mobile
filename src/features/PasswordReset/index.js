import { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import baseStyles from '~/styles'
import AuthLayout from '~/layout/AuthLayout'
import PrimaryInput from '~/components/primary/PrimaryInput'
import PrimaryButton from '~/components/primary/PrimaryButton'
import BaseText from '~/components/base/BaseText'
import ContentView from '~/components/base/ContentView'

function PasswordText() {
  const [text, setText] = useState('')

  return (
    <AuthLayout>
      <View style={styles.logoContainer}>
        <Text style={styles.logoFont}>Atur Ulang Password</Text>
        <BaseText>
          Masukkan email dan kami akan mengirimkan instruksi untuk mengatur
          ulang password
        </BaseText>
      </View>
      <ContentView>
        <PrimaryInput
          label="Email"
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
        />
        <PrimaryButton onPress={() => console.log('Pressed')}>
          Lanjut
        </PrimaryButton>
      </ContentView>
    </AuthLayout>
  )
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    marginBottom: baseStyles.space.md,
  },
  logoFont: {
    fontSize: baseStyles.font.size.lg,
    color: baseStyles.color.base,
    fontFamily: 'nunitoBold',
    marginBottom: baseStyles.space.md,
  },
  inputContainer: {
    width: '90%',
  },
})

export default PasswordText
