import { Dimensions, View, Text } from 'react-native'
import baseStyles from '~/styles'
import serviceSwab from '~assets/service-swab.png'
import serviceVaccine from '~assets/service-vaccine.png'
import serviceAntibodi from '~assets/service-antibodi.png'
import SelectServiceItem from './SelectServiceItem'

const height = Dimensions.get('window').height

const services = [
  {
    source: serviceVaccine,
    text: 'Vaksin',
  },
  {
    source: serviceSwab,
    text: 'Tes Swab',
  },
  {
    source: serviceAntibodi,
    text: 'Tes Antibodi',
  },
]

export default function SelectService() {
  return (
    <View
      style={{
        width: '100%',
      }}>
      <Text
        style={{
          fontSize: baseStyles.font.size.md,
          fontFamily: 'nunitoSemiBold',
          marginBottom: baseStyles.space.md,
        }}>
        Pilih Jenis Layanan
      </Text>
      {services.map(service => (
        <SelectServiceItem service={service} key={service.text} />
      ))}
    </View>
  )
}
