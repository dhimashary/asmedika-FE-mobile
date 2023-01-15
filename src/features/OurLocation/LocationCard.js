import { Image, View } from 'react-native'
import HStack from '~/components/base/HStack'
import baseStyles from '~/styles'
import { Dimensions } from 'react-native'
import BaseText from '~/components/base/BaseText'
import BaseTitle from '~/components/base/BaseTitle'
import BaseLink from '~/components/base/BaseLink'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const height = Dimensions.get('window').height

export default function LocationCard({ location }) {
  return (
    <View
      style={{
        borderRadius: baseStyles.radius.sm,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        backgroundColor: 'white',
        width: '99%',
        marginBottom: baseStyles.space.md,
      }}>
      <HStack
        style={{
          borderRadius: baseStyles.space.sm,
          overflow: 'hidden',
          width: '100%',
          height: height / 4,
        }}>
        <View
          style={{
            flex: 2,
          }}>
          <Image
            source={{ uri: location.img }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            flex: 6,
            paddingTop: baseStyles.space.sm,
            paddingHorizontal: baseStyles.space.sm,
          }}>
          <BaseTitle>{location.name}</BaseTitle>
          <BaseText
            style={{
              marginBottom: baseStyles.space.xs,
            }}>
            {location.address}
          </BaseText>
          <HStack
            style={{
              marginBottom: baseStyles.space.md,
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="phone"
              size={20}
              color={baseStyles.color.primary}
              style={{ marginRight: baseStyles.space.xs }}
            />
            <BaseText>{location.phone}</BaseText>
          </HStack>
          <View
            style={{
              width: '100%',
            }}>
            <BaseLink
              style={{
                textAlign: 'center',
              }}>
              Lihat Map
            </BaseLink>
          </View>
        </View>
      </HStack>
    </View>
  )
}
