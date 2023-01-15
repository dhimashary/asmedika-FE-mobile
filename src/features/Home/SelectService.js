import { Dimensions, View, Text } from 'react-native'
import baseStyles from '~/styles'
import serviceSwab from '~assets/service-swab.png'
import serviceVaccine from '~assets/service-vaccine.png'
import serviceAntibodi from '~assets/service-antibodi.png'
import SelectServiceItem from './SelectServiceItem'
import BaseTitle from '~/components/base/BaseTitle'

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
      <BaseTitle>Pilih Jenis Layanan</BaseTitle>
      {services.map(service => (
        <SelectServiceItem service={service} key={service.text} />
      ))}
    </View>
  )
}
