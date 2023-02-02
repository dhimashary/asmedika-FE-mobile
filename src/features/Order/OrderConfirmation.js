import { List } from 'react-native-paper'
import { View, Text, ScrollView } from 'react-native'
import ScreenContainer from '~/components/base/ScreenContainer'
import NavigationHeading from '~/components/base/NavigationHeading'
import baseStyles from '~/styles'
import Profile from './Profile'
import ProductType from './ProductType'
import PrimaryButton from '~/components/primary/PrimaryButton'

const profiles = [
  {
    id: 1,
    fullName: 'Gorgon Maeda',
    gender: 'Laki - laki',
    birthDate: '02 November 2000',
    identityNumber: '31512312312098',
  },
  {
    id: 1,
    fullName: 'Hary Kane',
    gender: 'Laki - laki',
    birthDate: '02 October 2001',
    identityNumber: '31512312312098',
  },
]

const product = {
  name: 'Tes SWAB',
  location: 'Asmedika SCBD',
  schedule: '12 March 2023, 08:00',
  totalPrice: 'Rp. 500.000',
}

export default function OrderConfirmation() {
  return (
    <ScreenContainer
      style={{
        alignItems: 'center',
      }}>
      <NavigationHeading title="Rincian Pendaftaran" />
      <View
        style={{
          flex: 9,
          width: '100%',
          paddingBottom: baseStyles.space.sm,
        }}>
        <ScrollView
          style={{
            padding: baseStyles.space.sm,
          }}>
          {profiles.map((profile, idx) => (
            <View
              style={[
                baseStyles.shadow.md,
                {
                  marginBottom: baseStyles.space.md,
                  borderRadius: baseStyles.radius.xs,
                },
              ]}>
              <View
                key={profile.id}
                style={[
                  {
                    borderRadius: baseStyles.radius.xs,
                    overflow: 'hidden',
                  },
                ]}>
                <List.Accordion
                  title={`Detail Pendaftar ${idx + 1}`}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: baseStyles.radius.sm,
                  }}>
                  <Profile profile={profile} />
                </List.Accordion>
              </View>
            </View>
          ))}
          <ProductType product={product} />
          <PrimaryButton>Daftar</PrimaryButton>
        </ScrollView>
      </View>
    </ScreenContainer>
  )
}
