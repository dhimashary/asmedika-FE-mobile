import { useState, useCallback } from 'react'
import DropDown from 'react-native-paper-dropdown'
import baseStyles from '~/styles'
import { DatePickerModal } from 'react-native-paper-dates'
import { View, TouchableHighlight } from 'react-native'
import BaseText from '~/components/base/BaseText'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const genderList = [
  {
    label: 'Male',
    value: 'male',
  },
  {
    label: 'Female',
    value: 'female',
  },
  {
    label: 'Others',
    value: 'others',
  },
]

const locations = [
  {
    id: 1,
    name: 'Asmedika SCBD',
  },
  {
    id: 2,
    name: 'Asmedika Kemang',
  },
  {
    id: 3,
    name: 'Asmedika Taman Anggrek',
  },
  {
    id: 4,
    name: 'Asmedika Central Park',
  },
]

const hours = [
  {
    id: 1,
    hour: '08.00 - 09.00',
  },
  {
    id: 2,
    hour: '09.00 - 10.00',
  },
  {
    id: 3,
    hour: '10.00 - 11.00',
  },
  {
    id: 4,
    hour: '11.00 - 12.00',
  },
]

const numbers = [
  {
    id: 1,
    total: 1,
  },
  {
    id: 2,
    total: 2,
  },
  {
    id: 3,
    total: 3,
  },
]
export default function SelectOrderDetailForm() {
  const [showDropDown, setShowDropDown] = useState(false)
  const [gender, setGender] = useState('')
  const [date, setDate] = useState(undefined)
  const [open, setOpen] = useState(false)

  const onDismissSingle = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const onConfirmSingle = useCallback(
    params => {
      setOpen(false)
      setDate(params.date)
    },
    [setOpen, setDate]
  )

  return (
    <View>
      <View
        style={{
          marginBottom: baseStyles.space.sm,
        }}>
        <DropDown
          label={'Gender'}
          mode={'outlined'}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={gender}
          setValue={setGender}
          list={genderList}
          right={
            <MaterialCommunityIcons
              name="chevron-down"
              size={24}
              color="#3B3B3B"
            />
          }
          theme={{
            colors: {
              primary: baseStyles.color.primary,
              outline: baseStyles.color.primary,
              background: 'white',
            },
            roundness: baseStyles.space.xs,
          }}
          dropDownStyle={{
            backgroundColor: 'white',
          }}
          dropDownItemStyle={{
            backgroundColor: 'white',
          }}
          dropDownItemSelectedStyle={{
            backgroundColor: 'white',
          }}
        />
      </View>
      <TouchableHighlight
        style={{
          borderColor: baseStyles.color.primary,
          padding: baseStyles.space.sm,
          borderRadius: baseStyles.space.xs,
          borderWidth: 1,
        }}
        onPress={() => {
          console.log('tessssss')
          setOpen(true)
        }}
        activeOpacity={0.9}
        underlayColor="#DDDDDD">
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <BaseText>Tanggal {JSON.stringify(open)}</BaseText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={24}
            color="#3B3B3B"
          />
        </View>
      </TouchableHighlight>
      <DatePickerModal
        locale="en"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={date}
        onConfirm={onConfirmSingle}
      />
    </View>
  )
}
