import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import BaseText from '~/components/base/BaseText'
import BaseTitle from '~/components/base/BaseTitle'
import HStack from '~/components/base/HStack'
import baseStyles from '~/styles'
import AboutUsItem from './AboutUsItem'

const items = [
  {
    id: 1,
    title: 'Lokasi Swab',
    text: 'Pilih dan nikmati layanan tes kami di berbagai lokasi yang tersebar di sekitarmu',
  },
  {
    id: 2,
    title: 'Tes Mudah, Cepat, dan Terpercaya',
    text: 'Hasil tes Swab Antigen hanya butuh waktu -+ 15 menit dan Tes Swab PCR 4-8 jam, kami kirimkan langsung ke ponselmu',
  },
]

export default function AboutUs() {
  return (
    <View
      style={{
        width: '100%',
      }}>
      <BaseTitle>Tentang Kami</BaseTitle>
      <BaseText
        style={{
          marginBottom: baseStyles.space.md,
        }}>
        Kami berkomitmen untuk memberikan akses layanan uji kesehatan yang aman,
        cepat, mudah, dan terpercaya
      </BaseText>
      <View>
        <ScrollView
          horizontal={true}
          style={{
            // padding: baseStyles.space.xs,
            flex: 1,
          }}
          contentContainerStyle={{ flexGrow: 1, padding: baseStyles.space.sm }}>
          {items.map(item => (
            <AboutUsItem key={item.id} item={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}
