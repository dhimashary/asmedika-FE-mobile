import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, StyleSheet } from 'react-native'
import BaseHeader from './BaseHeader'
import HStack from './HStack'
import BaseTitle from './BaseTitle'
import baseStyles from '~/styles'

export default function NavigationHeading({ title }) {
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
        <MaterialCommunityIcons name="chevron-left" size={40} color="#3B3B3B" />
        <View style={styles.headingTitleContainer}>
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
    paddingLeft: baseStyles.space.sm,
  },
  headingTitle: {
    fontSize: baseStyles.space.md,
    textAlign: 'center',
    backgroundColor: 'white',
    textAlignVertical: 'center',
    marginBottom: 0,
  },
})
