import ScreenContainer from '~/components/base/ScreenContainer'
import BaseHeader from '~/components/base/BaseHeader'
import HStack from '~/components/base/HStack'
import { View, StyleSheet } from 'react-native'
import { useState } from 'react'
import baseStyles from '~/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ContentView from '~/components/base/ContentView'
import BaseTitle from '~/components/base/BaseTitle'
import VaccineProgram from './VaccineProgram'
import Profile from './Profile'
import SwabResult from './SwabResult'

export default function VaccineResult() {
  const [text, setText] = useState('')

  return (
    <ScreenContainer
      style={{
        alignItems: 'center',
      }}>
      <BaseHeader
        style={{
          flex: 1,
          alignItems: 'center',
        }}>
        <HStack
          style={{
            padding: baseStyles.space.sm,
          }}>
          <MaterialCommunityIcons
            name="chevron-left"
            size={40}
            color="#3B3B3B"
          />
          <View style={styles.headingTitleContainer}>
            <View style={{ backgroundColor: 'white' }}>
              <BaseTitle style={styles.headingTitle}>
                Hasil Vaksin dan Tes Swab
              </BaseTitle>
            </View>
          </View>
        </HStack>
      </BaseHeader>
      <ContentView
        style={{
          flex: 9,
        }}>
        <Profile />
        <VaccineProgram />
        <SwabResult />
      </ContentView>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  headingTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: baseStyles.space.xs,
  },
  headingTitle: {
    fontSize: baseStyles.space.md,
    textAlign: 'center',
    backgroundColor: 'white',
    textAlignVertical: 'center',
    marginBottom: 0,
    // margin: 'auto'
  },
})
