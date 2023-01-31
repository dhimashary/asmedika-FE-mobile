import { View, Text, StyleSheet } from 'react-native'
import baseStyles from '~/styles'

export default function SwabResult() {
  return (
    <View style={[styles.container, baseStyles.shadow.md]}>
      <Text
        style={[
          styles.label,
          {
            marginBottom: baseStyles.space.sm,
          },
        ]}>
        Hasil Tes Swab Terakhir
      </Text>
      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginBottom: baseStyles.space.sm,
        }}
      />
      <Text style={styles.label}>Layanan</Text>
      <Text style={styles.content}>Tes Swab Antigen</Text>
      <Text style={styles.label}>Lokasi dan Waktu</Text>
      <Text style={styles.content}>Asmedika SCBD | 12/10/2021, 08:30</Text>
      <Text style={styles.label}>Hasil</Text>
      <Text style={styles.content}>Negatif</Text>
      <Text
        style={[
          styles.content,
          {
            textAlign: 'center',
            marginTop: baseStyles.space.md,
            fontFamily: 'nunitoSemiBold',
            color: baseStyles.color.tertiary,
          },
        ]}>
        Unduh Lampiran Hasil
      </Text>
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
    marginBottom: baseStyles.space.sm,
  },
  container: {
    flex: 5,
    backgroundColor: 'white',
    padding: baseStyles.space.sm,
    borderRadius: baseStyles.radius.xs,
  },
})
