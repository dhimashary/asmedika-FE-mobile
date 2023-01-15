import { Image, Text, StyleSheet } from 'react-native'
import HStack from '~/components/base/HStack'
import baseStyles from '~/styles'
import bullet from '~assets/bullet.png'

export default function VaccineReasonItem({ reason }) {
  return (
    <HStack style={styles.container}>
      <Image source={bullet} style={styles.bullet} resizeMode="contain" />
      <Text style={styles.text}>{reason.text}</Text>
    </HStack>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: baseStyles.space.sm,
    alignItems: 'center',
  },
  bullet: {
    flex: 1,
    marginRight: baseStyles.space.xs,
  },
  text: {
    flex: 11,
    fontFamily: 'nunitoLight',
    fontSize: baseStyles.font.size.sm,
  },
})
