import ScreenContainer from '~/components/base/ScreenContainer'
import BaseText from '~/components/base/BaseText'
import BaseTitle from '~/components/base/BaseTitle'
import Lottie from 'lottie-react-native'
import paperPlane from '~assets/paper-loading.json'
import { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

export default function OrderLoading({ navigation }) {
  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        navigation.navigate('OrderSuccess')
      }, 1000)
    }, [])
  )

  return (
    <ScreenContainer
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Lottie
        source={paperPlane}
        autoPlay
        loop
        style={{
          width: '100%',
        }}
      />
      <BaseTitle>Mohon menunggu</BaseTitle>
      <BaseText>Pendaftaranmu sedang diproses</BaseText>
    </ScreenContainer>
  )
}
