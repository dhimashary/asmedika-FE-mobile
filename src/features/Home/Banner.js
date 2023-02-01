import { HStack } from '@react-native-material/core'
import { Text, View } from 'react-native'
import { ImageBackground } from 'react-native'
import bannerVector from '~assets/banner-vector.png'
import bannerNurse from '~assets/banner-nurse.png'
import asmedikaLogo from '~assets/logo-asmedika.png'
import baseStyles from '~/styles'
import { Dimensions } from 'react-native'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import BaseText from '~/components/base/BaseText'
import PrimaryButton from '~/components/primary/PrimaryButton'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Banner() {
  return (
    <ImageBackground
      source={bannerVector}
      resizeMode="cover"
      style={styles.bgImage}>
      <HStack style={styles.mainContent}>
        <View style={styles.bannerContent}>
          <View
            style={{
              backgroundColor: 'white',
              alignItems: 'center',
              height: 30,
              width: 120,
              flexDirection: 'row',
              borderRadius: baseStyles.radius.sm,
              paddingHorizontal: baseStyles.space.xs,
              marginBottom: baseStyles.space.xs,
            }}>
            <Image
              source={asmedikaLogo}
              style={{
                width: 20,
                height: 20,
                marginRight: baseStyles.space.xs,
              }}
            />
            <Text
              style={{
                fontFamily: 'nunitoBold',
                color: baseStyles.color.primary,
              }}>
              Asmedika
            </Text>
          </View>
          <Text
            style={{
              fontFamily: 'nunitoBold',
              fontSize: baseStyles.font.size.md,
              color: baseStyles.color.primary,
              marginBottom: baseStyles.space.xs,
            }}>
            Bersama Lawan Covid-19!
          </Text>
          <BaseText
            style={{
              // fontFamily: 'nunoSemiBold'
              marginBottom: baseStyles.space.sm,
            }}>
            Vaksin dan Test SWAB untuk lindungi diri dan keluarga
          </BaseText>
          <PrimaryButton onPress={() => console.log('test')}>
            Daftar Sekarang
          </PrimaryButton>
        </View>
        <View style={styles.bannerContent}>
          <Image
            source={bannerNurse}
            style={styles.bannerImg}
            resizeMode="contain"
          />
        </View>
      </HStack>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  bgImage: {
    width: width,
    backgroundColor: baseStyles.color.secondary,
    height: (height * 5) / 12,
    marginBottom: baseStyles.space.md,
  },
  mainContent: {
    height: '100%',
    alignItems: 'center',
  },
  bannerContent: { flex: 1, paddingHorizontal: baseStyles.space.sm },
  bannerImg: {
    height: '100%',
    width: '100%',
  },
})
