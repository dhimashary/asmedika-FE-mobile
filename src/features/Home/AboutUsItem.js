import { Image, View } from 'react-native'
import HStack from '~/components/base/HStack'
import baseStyles from '~/styles'
import BaseText from '~/components/base/BaseText'
import { StyleSheet } from 'react-native'
import bullet from '~assets/bullet.png'
import { Dimensions } from 'react-native'
import { Text } from 'react-native'

const width = Dimensions.get('window').width

export default function AboutUsItem({ item }) {
  return (
    <View style={styles.container}>
      <HStack style={styles.center}>
        <View style={styles.bulletContainer}>
          <Image source={bullet} style={styles.icon} />
        </View>
        <Text style={styles.title}>{item.title}</Text>
      </HStack>
      <BaseText>{item.text}</BaseText>
    </View>
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
    width: (width * 70) / 100,
    marginRight: baseStyles.space.sm,
    backgroundColor: 'white',
    // borderWidth: 1,
    // borderColor: baseStyles.color.primary
  },
  center: {
    alignItems: 'center',
    marginBottom: baseStyles.space.sm,
  },
  icon: {
    flex: 1,
  },
  bulletContainer: {
    flex: 2,
  },
  title: {
    flex: 8,
    paddingLeft: baseStyles.space.sm,
    fontSize: baseStyles.font.size.sm,
    fontFamily: 'nunitoSemiBold',
  },
})
