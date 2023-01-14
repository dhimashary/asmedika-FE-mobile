import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import HStack from '~/components/base/HStack'
import baseStyles from '~/styles'
import BaseText from '~/components/base/BaseText'
import { StyleSheet } from 'react-native'

export default function SelectServiceItem({ service }) {
  return (
    <TouchableOpacity style={styles.container}>
      <HStack style={styles.center}>
        <Image source={service.source} style={styles.icon} />
        <BaseText>{service.text}</BaseText>
      </HStack>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: baseStyles.radius.sm,
    padding: baseStyles.space.sm,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: 'white',
    width: '100%',
    marginBottom: baseStyles.space.md,
  },
  center: {
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: baseStyles.space.sm,
  },
})
