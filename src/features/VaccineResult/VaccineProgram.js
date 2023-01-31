import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, StyleSheet } from 'react-native'
import baseStyles from '~/styles'

export default function VaccineProgram() {
  return (
    <View style={[styles.container, baseStyles.shadow.md]}>
      <Text style={styles.label}>Program Vaksinasi</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.content}>Sudah Vaksin Kedua</Text>
        <MaterialCommunityIcons
          name="check-decagram"
          size={20}
          color={baseStyles.color.primary}
          style={{ paddingLeft: baseStyles.space.xs }}
        />
      </View>
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
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: baseStyles.space.sm,
    borderRadius: baseStyles.radius.xs,
    marginBottom: baseStyles.space.md,
  },
})
