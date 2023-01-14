import { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import baseStyles from '~/styles'
import AuthLayout from '~/layout/AuthLayout'
import PrimaryInput from '~/components/primary/PrimaryInput'
import PrimaryButton from '~/components/primary/PrimaryButton'
import BaseText from '~/components/base/BaseText'
import ContentView from '~/components/base/ContentView'
import BaseModal from '~/components/base/BaseModal'

function PasswordReset() {
  const [text, setText] = useState('')
  const [visible, setVisible] = useState(false)

  return (
    <AuthLayout>
      <BaseModal visible={visible} setVisible={setVisible}>
        <Text style={styles.modalHeader}>Email telah dikirim</Text>
        <Text style={styles.modalText}>
          Instruksi atur ulang password telah dikirim ke email email@email.com
        </Text>
        <PrimaryButton
          onPress={() => {
            setVisible(false)
          }}>
          OK
        </PrimaryButton>
      </BaseModal>
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
        <PrimaryButton
          onPress={() => {
            setVisible(true)
          }}>
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
    width: '90%',
  },
  logoFont: {
    fontSize: baseStyles.font.size.lg,
    color: baseStyles.color.primary,
    fontFamily: 'nunitoBold',
    marginBottom: baseStyles.space.md,
  },
  inputContainer: {
    width: '90%',
  },
  modalHeader: {
    fontFamily: 'nunitoSemiBold',
    fontSize: baseStyles.font.size.md,
    textAlign: 'center',
    marginBottom: baseStyles.space.sm,
  },
  modalText: {
    textAlign: 'center',
    marginBottom: baseStyles.space.sm,
  },
})

export default PasswordReset
