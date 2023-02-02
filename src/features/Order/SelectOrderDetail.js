import ScreenContainer from '~/components/base/ScreenContainer'
import ContentView from '~/components/base/ContentView'
import NavigationHeading from '~/components/base/NavigationHeading'
import PrimaryButton from '~/components/primary/PrimaryButton'
import SelectOrderDetailForm from './SelectOrderDetailForm'

export default function SelectOrderDetail({ navigation }) {
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
        <PrimaryButton onPress={() => navigation.navigate('DetailIdentity')}>
          Lanjut
        </PrimaryButton>
      </ContentView>
    </ScreenContainer>
  )
}
