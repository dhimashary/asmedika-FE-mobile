import { Dimensions, View, Text } from 'react-native'
import serviceSwab from '~assets/service-swab.png'
import serviceVaccine from '~assets/service-vaccine.png'
import serviceAntibodi from '~assets/service-antibodi.png'
import BaseTitle from '~/components/base/BaseTitle'
import BaseText from '~/components/base/BaseText'
import baseStyles from '~/styles'
import PrimaryButton from '~/components/primary/PrimaryButton'
import PrimaryInput from '~/components/primary/PrimaryInput'

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

export default function CheckVaccine() {
  return (
    <View
      style={{
        width: '100%',
      }}>
      <BaseTitle>Cek Hasil Vaksin dan Tes Swab</BaseTitle>
      <BaseText
        style={{
          marginBottom: baseStyles.space.sm,
        }}>
        Hasil vaksin dan tes swab hanya bisa dilihat jika kamu mendaftar di sini
      </BaseText>
      <View
        style={[
          {
            borderRadius: baseStyles.radius.xs,
            paddingVertical: baseStyles.space.md,
            paddingHorizontal: baseStyles.space.sm,
            marginBottom: baseStyles.space.md,
          },
          baseStyles.shadow.md,
        ]}>
        <PrimaryInput placeholder="Nama Lengkap" />
        <PrimaryInput placeholder="NIK (Nomor KTP)" />
        <PrimaryButton>Cek Hasil</PrimaryButton>
      </View>
    </View>
  )
}
