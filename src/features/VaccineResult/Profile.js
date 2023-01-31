import { View, Text, StyleSheet } from 'react-native'
import baseStyles from '~/styles'

export default function Profile() {
  return (
    <View style={[styles.container, baseStyles.shadow.md]}>
      <Text style={styles.label}>Nama Lengkap</Text>
      <Text style={styles.content}>Hary Dhimas Prakoso</Text>
      <Text style={styles.label}>NIK (Nomor KTP)</Text>
      <Text style={styles.content}>3000000000000005</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    fontFamily: 'nunitoMedium',
    color: '#616161',
    marginBottom: baseStyles.space.xs,
  },
  content: {
    fontSize: baseStyles.font.size.sm,
    fontFamily: 'nunitoSemiBold',
    marginBottom: baseStyles.space.md,
  },
  container: {
    flex: 2,
    backgroundColor: 'white',
    padding: baseStyles.space.sm,
    borderRadius: baseStyles.radius.xs,
    marginBottom: baseStyles.space.md,
  },
})
