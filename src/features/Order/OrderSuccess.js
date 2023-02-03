import ScreenContainer from '~/components/base/ScreenContainer'
import ContentView from '~/components/base/ContentView'
import NavigationHeading from '~/components/base/NavigationHeading'
import PrimaryButton from '~/components/primary/PrimaryButton'
import BaseTitle from '~/components/base/BaseTitle'
import logo from '~assets/logo-asmedika.png'
import HStack from '~/components/base/HStack'
import baseStyles from '~/styles'
import { Image, View, ScrollView } from 'react-native'
import BaseText from '~/components/base/BaseText'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export default function OrderSuccess({ navigation }) {
  return (
    <ScreenContainer
      style={{
        alignItems: 'center',
      }}>
      <NavigationHeading title="Pendaftaran Berhasil" />
      <ContentView
        style={{
          flex: 9,
          alignItems: 'center',
        }}>
        <ScrollView>
          <BaseTitle>Terima kasih telah mempercayakan</BaseTitle>
          <HStack
            style={{
              justifyContent: 'center',
            }}>
            <Image
              source={logo}
              style={{
                width: 50,
                height: 50,
                marginRight: baseStyles.space.xs,
              }}
              resizeMode="contain"
            />
            <View
              style={{
                justifyContent: 'center',
              }}>
              <BaseTitle
                style={{
                  color: baseStyles.color.primary,
                  marginBottom: 0,
                  fontFamily: 'nunitoBold',
                }}>
                Asmedika
              </BaseTitle>
            </View>
          </HStack>
          <View
            style={[
              {
                padding: baseStyles.space.xs,
              },
            ]}>
            <View
              style={[
                {
                  borderRadius: baseStyles.space.xs,
                  padding: baseStyles.space.sm,
                },
                baseStyles.shadow.md,
              ]}>
              <View
                style={{
                  flex: 2,
                }}>
                <BaseTitle
                  style={{
                    fontSize: baseStyles.font.size.sm,
                  }}>
                  Swab PCR
                </BaseTitle>
                <HStack
                  style={{
                    alignItems: 'center',
                    marginBottom: baseStyles.space.xs,
                  }}>
                  <MaterialCommunityIcons
                    name="clock"
                    size={24}
                    color={baseStyles.color.primary}
                    style={{
                      marginRight: baseStyles.space.xs,
                    }}
                  />
                  <BaseText>12/10/2021 | 08.00 - 09.00</BaseText>
                </HStack>
                <HStack
                  style={{
                    alignItems: 'center',
                    marginBottom: baseStyles.space.xs,
                  }}>
                  <MaterialCommunityIcons
                    name="map-marker"
                    size={24}
                    color={baseStyles.color.primary}
                    style={{
                      marginRight: baseStyles.space.xs,
                    }}
                  />
                  <BaseText>Asmedika SCBD</BaseText>
                </HStack>
              </View>
              <View
                style={{
                  alignItems: 'center',
                  marginBottom: baseStyles.space.xs,
                }}>
                <Image
                  source={{
                    uri: 'https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg',
                  }}
                  resizeMode="contain"
                  style={{
                    width: width / 2,
                    height: width / 2,
                  }}
                />
              </View>
              <BaseText
                style={{
                  textAlign: 'center',
                  marginBottom: baseStyles.space.xs,
                }}>
                Silakan tunjukan QR code ke petugas kami di lokasi dan waktu
                yang telah dipilih
              </BaseText>
              <PrimaryButton
                style={{
                  width: '100%',
                }}
                onPress={() => navigation.navigate('DetailIdentity')}>
                Kembali ke Home
              </PrimaryButton>
            </View>
          </View>
        </ScrollView>
      </ContentView>
    </ScreenContainer>
  )
}
