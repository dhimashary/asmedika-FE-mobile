import ScreenContainer from '~/components/base/ScreenContainer'
import BaseHeader from '~/components/base/BaseHeader'
import HStack from '~/components/base/HStack'
import { View } from 'react-native'
import baseStyles from '~/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ContentView from '~/components/base/ContentView'
import BaseTitle from '~/components/base/BaseTitle'
import VaccineProgram from './VaccineProgram'
import Profile from './Profile'
import SwabResult from './SwabResult'
import NavigationHeading from '~/components/base/NavigationHeading'

export default function VaccineResult() {
  return (
    <ScreenContainer
      style={{
        alignItems: 'center',
      }}>
      <NavigationHeading title="Hasil Vaksin dan Tes Swab" />
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
