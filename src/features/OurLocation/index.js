import ScreenContainer from '~/components/base/ScreenContainer'
import BaseHeader from '~/components/base/BaseHeader'
import HStack from '~/components/base/HStack'
import { View } from 'react-native'
import { TextInput, FlatList } from 'react-native'
import { useState } from 'react'
import baseStyles from '~/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import LocationCard from './LocationCard'
import ContentView from '~/components/base/ContentView'
import { Dimensions } from 'react-native'
const height = Dimensions.get('window').height

const locations = [
  {
    id: 1,
    name: 'Asmedika SCBD',
    address:
      'Jl. Jend Sudirman Kav 52-53 Lot 22 Senayan, Kebayoran Baru Jakarta Selatan, DKI Jakarta – 12190',
    phone: '08128128128',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1706&q=80',
  },
  {
    id: 2,
    name: 'Asmedika Semarang',
    address:
      'Jl. Jend Sudirman Kav 52-53 Lot 22 Senayan, Kebayoran Baru Jakarta Selatan, DKI Jakarta – 12190',
    phone: '08128128128',
    img: 'https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80',
  },
  {
    id: 3,
    name: 'Asmedika Bandung',
    address:
      'Jl. Jend Sudirman Kav 52-53 Lot 22 Senayan, Kebayoran Baru Jakarta Selatan, DKI Jakarta – 12190',
    phone: '08128128128',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1706&q=80',
  },
  {
    id: 4,
    name: 'Asmedika SCBD',
    address:
      'Jl. Jend Sudirman Kav 52-53 Lot 22 Senayan, Kebayoran Baru Jakarta Selatan, DKI Jakarta – 12190',
    phone: '08128128128',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1706&q=80',
  },
]

export default function OurLocation() {
  const [text, setText] = useState('')

  return (
    <ScreenContainer
      style={{
        alignItems: 'center',
      }}>
      <BaseHeader
        style={{
          flex: 1,
          // backgroundColor: 'red',
          alignItems: 'center',
        }}>
        <HStack
          style={{
            padding: baseStyles.space.sm,
            alignItems: 'center',
          }}>
          <View>
            <MaterialCommunityIcons
              name="chevron-left"
              size={40}
              color="#3B3B3B"
            />
          </View>
          <View
            style={{
              flex: 10,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#F5F5F5',
              borderRadius: baseStyles.space.xs,
              overflow: 'hidden',
            }}>
            <View
              style={{
                flex: 1,
                paddingLeft: baseStyles.space.xs,
              }}>
              <MaterialCommunityIcons
                name="magnify"
                size={28}
                color="#9E9E9E"
              />
            </View>
            <TextInput
              value={text}
              onChangeText={text => setText(text)}
              placeholder="Cari Lokasi"
              style={{
                flex: 9,
                backgroundColor: '#F5F5F5',
                paddingVertical: baseStyles.space.xs,
                fontFamily: 'nunitoBold',
                fontSize: baseStyles.font.size.sm,
                color: '#9E9E9E',
              }}
            />
          </View>
        </HStack>
      </BaseHeader>
      <ContentView
        style={{
          flex: 9,
          // backgroundColor: 'red'
        }}>
        <FlatList
          data={locations}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <LocationCard location={item} />}
        />
      </ContentView>
    </ScreenContainer>
  )
}
