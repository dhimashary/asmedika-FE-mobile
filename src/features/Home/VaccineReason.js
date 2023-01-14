import { Image } from 'react-native'
import { View, Text } from 'react-native'
import HStack from '~/components/base/HStack'
import PrimaryButton from '~/components/primary/PrimaryButton'
import baseStyles from '~/styles'
import bullet from '~assets/bullet.png'

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
      }}>
      <Text
        style={{
          fontSize: baseStyles.font.size.md,
          fontFamily: 'nunitoSemiBold',
          marginBottom: baseStyles.space.md,
        }}>
        Kenapa Harus Vaksin?
      </Text>
      {reasons.map(reason => (
        <HStack
          style={{
            marginBottom: baseStyles.space.sm,
            alignItems: 'center',
          }}
          key={reason.id}>
          <Image
            source={bullet}
            style={{
              flex: 1,
              marginRight: baseStyles.space.xs,
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              flex: 11,
              fontFamily: 'nunitoLight',
              fontSize: baseStyles.font.size.sm,
            }}>
            {reason.text}
          </Text>
        </HStack>
      ))}
      <PrimaryButton>Daftar Vaksin Sekarang</PrimaryButton>
    </View>
  )
}
