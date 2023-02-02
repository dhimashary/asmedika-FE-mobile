import { useState, useCallback } from 'react'
import DropDown from 'react-native-paper-dropdown'
import baseStyles from '~/styles'
import { DatePickerModal } from 'react-native-paper-dates'
import { View, TouchableHighlight } from 'react-native'
import BaseText from '~/components/base/BaseText'

const locations = [
  {
    id: 1,
    label: 'Asmedika SCBD',
    value: 'Asmedika SCBD',
  },
  {
    id: 2,
    label: 'Asmedika Kemang',
    value: 'Asmedika Kemang',
  },
  {
    id: 3,
    label: 'Asmedika Taman Anggrek',
    value: 'Asmedika Taman Anggrek',
  },
  {
    id: 4,
    label: 'Asmedika Central Park',
    value: 'Asmedika Central Park',
  },
]

const hours = [
  {
    id: 1,
    label: '08.00 - 09.00',
    value: '08.00 - 09.00',
  },
  {
    id: 2,
    label: '09.00 - 10.00',
    value: '09.00 - 10.00',
  },
  {
    id: 3,
    label: '10.00 - 11.00',
    value: '10.00 - 11.00',
  },
  {
    id: 4,
    label: '11.00 - 12.00',
    value: '11.00 - 12.00',
  },
]

const numbers = [
  {
    id: 1,
    label: '1',
    value: '1',
  },
  {
    id: 2,
    label: '2',
    value: '2',
  },
  {
    id: 3,
    label: '3',
    value: '3',
  },
]

export default function SelectOrderDetailForm() {
  const [showDropDown, setShowDropDown] = useState(false)
  const [showDropDownHour, setShowDropDownHour] = useState(false)
  const [showDropDownTotal, setShowDropDownTotal] = useState(false)
  const [location, setLocation] = useState('')
  const [hour, setHour] = useState('')
  const [totalBooking, setTotalBooking] = useState('')
  const [date, setDate] = useState(undefined)
  const [open, setOpen] = useState(false)
  console.log(totalBooking)
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
          label={'Lokasi'}
          mode={'outlined'}
          visible={showDropDown}
          showDropDown={() => setShowDropDown(true)}
          onDismiss={() => setShowDropDown(false)}
          value={location}
          setValue={setLocation}
          list={locations}
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
      <View
        style={{
          marginBottom: baseStyles.space.sm,
        }}>
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
            <BaseText>
              {date ? date.toLocaleDateString('en') : 'Tanggal'}
            </BaseText>
          </View>
        </TouchableHighlight>
      </View>
      <View
        style={{
          marginBottom: baseStyles.space.sm,
        }}>
        <DropDown
          label={'Jam'}
          mode={'outlined'}
          visible={showDropDownHour}
          showDropDown={() => setShowDropDownHour(true)}
          onDismiss={() => setShowDropDownHour(false)}
          value={hour}
          setValue={setHour}
          list={hours}
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
      <View
        style={{
          marginBottom: baseStyles.space.sm,
        }}>
        <DropDown
          label={'Jumlah Pendaftar'}
          mode={'outlined'}
          visible={showDropDownTotal}
          showDropDown={() => setShowDropDownTotal(true)}
          onDismiss={() => setShowDropDownTotal(false)}
          value={totalBooking}
          setValue={setTotalBooking}
          list={numbers}
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
