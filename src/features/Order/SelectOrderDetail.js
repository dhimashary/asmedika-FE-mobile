import ScreenContainer from '~/components/base/ScreenContainer'
import ContentView from '~/components/base/ContentView'
import NavigationHeading from '~/components/base/NavigationHeading'
import { useState } from 'react'
import PrimaryButton from '~/components/primary/PrimaryButton'
import SelectOrderDetailForm from './SelectOrderDetailForm'

export default function SelectOrderDetail() {
  const [selectedProduct, setSelectedProduct] = useState(1)

  return (
    <ScreenContainer
      style={{
        alignItems: 'center',
      }}>
      <NavigationHeading title="Pilih Lokasi dan Jadwal" />
      <ContentView
        style={{
          flex: 9,
          justifyContent: 'space-between',
        }}>
        <SelectOrderDetailForm />
        <PrimaryButton onPress={() => console.log('test')}>
          Lanjut
        </PrimaryButton>
      </ContentView>
    </ScreenContainer>
  )
}
