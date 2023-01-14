import { Image } from 'react-native'
import { View, Text } from 'react-native'
import ScreenContainer from '~/components/base/ScreenContainer'
import BaseHeader from '~/components/base/BaseHeader'
import logoAsmedika from '~assets/logo-asmedika.png'
import Banner from './Banner'
import { ScrollView } from 'react-native'
import SelectService from './SelectService'
import VaccineReason from './VaccineReason'
import baseStyles from '~/styles'

export default function Home() {
  return (
    <ScreenContainer
      style={{
        alignItems: 'center',
      }}>
      <ScrollView
        style={{
          width: '100%',
        }}>
        <BaseHeader>
          <Image
            source={logoAsmedika}
            style={{
              width: 60,
              height: 60,
            }}
          />
        </BaseHeader>
        <Banner />
        <View
          style={{
            width: '100%',
            paddingHorizontal: baseStyles.space.sm,
          }}>
          <SelectService />
          <VaccineReason />
        </View>
      </ScrollView>
    </ScreenContainer>
  )
}
