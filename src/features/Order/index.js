import ScreenContainer from '~/components/base/ScreenContainer'
import ContentView from '~/components/base/ContentView'
import NavigationHeading from '~/components/base/NavigationHeading'
import ProductOption from './ProductOption'
import { useState } from 'react'
import PrimaryButton from '~/components/primary/PrimaryButton'

const SWAB_DATA = [
  {
    id: 1,
    name: 'PCR',
  },
  {
    id: 2,
    name: 'Antigen',
  },
  {
    id: 3,
    name: 'Antibodi',
  },
]

export default function Order({ navigation }) {
  const [selectedProduct, setSelectedProduct] = useState(1)

  return (
    <ScreenContainer
      style={{
        alignItems: 'center',
      }}>
      <NavigationHeading title="Pilih Jenis Swab" enableGoBack />
      <ContentView
        style={{
          flex: 9,
          justifyContent: 'space-between',
        }}>
        <ProductOption
          data={SWAB_DATA}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
        <PrimaryButton onPress={() => navigation.navigate('OrderDetail')}>
          Lanjut
        </PrimaryButton>
      </ContentView>
    </ScreenContainer>
  )
}
