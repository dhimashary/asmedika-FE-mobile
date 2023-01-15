import { View } from 'react-native'
import PrimaryButton from '~/components/primary/PrimaryButton'
import baseStyles from '~/styles'
import VaccineReasonItem from './VaccineReasonItem'
import BaseTitle from '~/components/base/BaseTitle'

const reasons = [
  {
    id: 1,
    text: 'Membuat tubuh kita terlindungi dari virus COVID-19 dengan cara membentuk antibodi',
  },
  {
    id: 2,
    text: 'Membantu mencegah tubuh dari sakit parah atau komplikasi penyakit serius',
  },
  {
    id: 3,
    text: 'Melindungi orang sekitar dari paparan virus COVID-19',
  },
]

export default function VaccineReason() {
  return (
    <View
      style={{
        width: '100%',
        marginBottom: baseStyles.space.md,
      }}>
      <BaseTitle>Kenapa Harus Vaksin?</BaseTitle>
      {reasons.map(reason => (
        <VaccineReasonItem reason={reason} key={reason.id} />
      ))}
      <PrimaryButton>Daftar Vaksin Sekarang</PrimaryButton>
    </View>
  )
}
