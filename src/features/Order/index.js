import ScreenContainer from '~/components/base/ScreenContainer'
import ContentView from '~/components/base/ContentView'
import NavigationHeading from '~/components/base/NavigationHeading'
import MyComponent from './ProductOption'

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

export default function Order() {
  return (
    <ScreenContainer
      style={{
        alignItems: 'center',
      }}>
      <NavigationHeading title="Pilih Jenis Vaksin" />
      <ContentView
        style={{
          flex: 9,
        }}>
        <MyComponent />
      </ContentView>
    </ScreenContainer>
  )
}
