import { View, Text, StyleSheet } from 'react-native'
import baseStyles from '~/styles'

export default function Profile({ profile }) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nama Lengkap</Text>
      <Text style={styles.content}>{profile.fullName}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.label}>Jenis Kelamin</Text>
          <Text style={styles.content}>{profile.gender}</Text>
        </View>
        <View>
          <Text style={styles.label}>Tanggal Lahir</Text>
          <Text style={styles.content}>{profile.birthDate}</Text>
        </View>
      </View>
      <Text style={styles.label}>NIK (Nomor KTP)</Text>
      <Text style={styles.content}>{profile.identityNumber}</Text>
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
    padding: baseStyles.space.sm,
  },
})
