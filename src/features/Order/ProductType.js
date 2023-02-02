import { View, Text, StyleSheet } from 'react-native'
import baseStyles from '~/styles'

export default function ProductType({ product }) {
  return (
    <View style={[styles.container, baseStyles.shadow.md]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.label}>Jenis Layanan</Text>
        <Text style={styles.content}>{product.name}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.label}>Lokasi</Text>
        <Text style={styles.content}>{product.location}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.label}>Jadwal</Text>
        <Text style={styles.content}>{product.schedule}</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.label}>Total Harga</Text>
        <Text
          style={{
            fontFamily: 'nunitoBold',
            fontSize: baseStyles.font.size.md,
            color: baseStyles.color.primary,
          }}>
          {product.totalPrice}
        </Text>
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
