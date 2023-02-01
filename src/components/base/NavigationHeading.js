import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, StyleSheet } from 'react-native'
import BaseHeader from './BaseHeader'
import HStack from './HStack'
import BaseTitle from './BaseTitle'
import baseStyles from '~/styles'
import { useNavigation } from '@react-navigation/native'

export default function NavigationHeading({ title }) {
  const navigation = useNavigation()

  return (
    <BaseHeader
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <HStack
        style={{
          padding: baseStyles.space.sm,
        }}>
        <View style={styles.headingTitleContainer}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            color="#3B3B3B"
            style={styles.icon}
            onPress={() => {
              navigation.goBack()
            }}
          />
          <View style={{ backgroundColor: 'white' }}>
            <BaseTitle style={styles.headingTitle}>{title}</BaseTitle>
          </View>
        </View>
      </HStack>
    </BaseHeader>
  )
}

const styles = StyleSheet.create({
  headingTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingTitle: {
    fontSize: baseStyles.space.md,
    marginBottom: 0,
    marginTop: 4,
  },
  icon: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
})
