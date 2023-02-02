import ScreenContainer from '~/components/base/ScreenContainer'
import ContentView from '~/components/base/ContentView'
import NavigationHeading from '~/components/base/NavigationHeading'
import PrimaryButton from '~/components/primary/PrimaryButton'
import { ScrollView, View, TouchableHighlight } from 'react-native'
import BaseTitle from '~/components/base/BaseTitle'
import BaseText from '~/components/base/BaseText'
import baseStyles from '~/styles'
import { Controller, useForm, useFieldArray } from 'react-hook-form'
import PrimaryInput from '~/components/primary/PrimaryInput'
import { useState, useCallback } from 'react'
import { DatePickerModal } from 'react-native-paper-dates'
import { RadioButton, Switch } from 'react-native-paper'
import HStack from '~/components/base/HStack'

const gender = [
  {
    label: 'Laki - laki',
    value: 'male',
  },
  {
    label: 'Perempuan',
    value: 'female',
  },
]

export default function OrderDetailIdentity({ navigation }) {
  const { handleSubmit, control, getValues, setValue } = useForm({
    defaultValues: {
      email: '',
      fullName: '',
      phoneNumber: '',
      profiles: [
        {
          fullName: '',
          identityNumber: '',
          phoneNumber: '',
          birthDate: '',
          gender: 'male',
        },
        {
          fullName: '',
          identityNumber: '',
          phoneNumber: '',
          birthDate: '',
          gender: 'male',
        },
      ],
    },
  })

  const { fields, update } = useFieldArray({
    control,
    name: 'profiles',
  })

  const [open, setOpen] = useState(false)
  const [modalIndex, setModalIndex] = useState(0)
  const [isSwitchOn, setIsSwitchOn] = useState(false)

  const onDismissSingle = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  const onSubmit = data => console.log(data)
  return (
    <ScreenContainer
      style={{
        alignItems: 'center',
      }}>
      <NavigationHeading title="Daftar Identitas Diri" />
      <ContentView
        style={{
          flex: 9,
          justifyContent: 'space-between',
        }}>
        <ScrollView>
          <BaseTitle
            style={{
              fontSize: baseStyles.font.size.sm,
            }}>
            Data Pemesan (untuk E-tiket atau Hasil Test)
          </BaseTitle>
          <Controller
            control={control}
            name="fullName"
            render={({ field: { onChange, value, onBlur } }) => (
              <PrimaryInput
                label="Nama Lengkap"
                value={value}
                onChangeText={text => onChange(text)}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value, onBlur } }) => (
              <PrimaryInput
                label="Email"
                value={value}
                onChangeText={text => onChange(text)}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            control={control}
            name="phoneNumber"
            render={({ field: { onChange, value, onBlur } }) => (
              <PrimaryInput
                label="Nomor HP"
                value={value}
                onChangeText={text => onChange(text)}
                onBlur={onBlur}
              />
            )}
          />
          {fields.map((item, i) => {
            return (
              <View key={item.id}>
                <BaseTitle
                  style={{
                    fontSize: baseStyles.font.size.sm,
                  }}>
                  Detail Pendaftar {i + 1}
                </BaseTitle>
                {i === 0 && (
                  <Controller
                    render={({ field: { value } }) => (
                      <HStack
                        style={{
                          alignItems: 'center',
                          marginBottom: baseStyles.space.sm,
                        }}>
                        <Switch
                          style={{
                            marginRight: baseStyles.space.xs,
                          }}
                          value={isSwitchOn}
                          onValueChange={() => {
                            const { fullName, phoneNumber } = getValues()
                            if (!isSwitchOn) {
                              update(0, {
                                ...value,
                                fullName,
                                phoneNumber,
                              })
                            } else {
                              update(0, {
                                birthDate: '',
                                fullName: '',
                                gender: 'male',
                                identityNumber: '',
                                phoneNumber: '',
                              })
                            }
                            setIsSwitchOn(!isSwitchOn)
                          }}
                        />
                        <BaseText>Data sama dengan pemesan</BaseText>
                      </HStack>
                    )}
                    name={`profiles.${i}`}
                    control={control}
                  />
                )}
                <Controller
                  render={({ field: { onChange, value, onBlur } }) => (
                    <PrimaryInput
                      label="Nama Lengkap"
                      onChangeText={text => onChange(text)}
                      value={value}
                      onBlur={onBlur}
                    />
                  )}
                  name={`profiles.${i}.fullName`}
                  control={control}
                />

                <Controller
                  render={({ field: { onChange, value } }) => (
                    <HStack>
                      <RadioButton.Group
                        style={{
                          backgroundColor: 'red',
                          flexDirection: 'row',
                        }}
                        onValueChange={newValue => onChange(newValue)}
                        value={value}>
                        <HStack>
                          {gender.map(item => {
                            return (
                              <TouchableHighlight
                                key={item.label}
                                style={{
                                  flexDirection: 'row',
                                  alignItems: 'center',
                                  paddingRight: baseStyles.space.sm,
                                  borderRadius: baseStyles.radius.xs,
                                }}
                                onPress={() => onChange(item.value)}
                                activeOpacity={0.9}
                                underlayColor={baseStyles.color.secondary}>
                                <>
                                  <RadioButton value={item.value} />
                                  <BaseText>{item.label}</BaseText>
                                </>
                              </TouchableHighlight>
                            )
                          })}
                        </HStack>
                      </RadioButton.Group>
                    </HStack>
                  )}
                  name={`profiles.${i}.gender`}
                  control={control}
                />
                <Controller
                  render={({ field: { onChange, value, onBlur } }) => (
                    <PrimaryInput
                      label="NIK (Nomor KTP)"
                      onChangeText={text => onChange(text)}
                      value={value}
                      onBlur={onBlur}
                    />
                  )}
                  name={`profiles.${i}.identityNumber`}
                  control={control}
                />
                <Controller
                  render={({ field: { onChange, value, onBlur } }) => (
                    <PrimaryInput
                      label="Nomor HP"
                      onChangeText={text => onChange(text)}
                      value={value}
                      onBlur={onBlur}
                    />
                  )}
                  name={`profiles.${i}.phoneNumber`}
                  control={control}
                />
                <Controller
                  render={({ field: { value } }) => (
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
                          setModalIndex(i)
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
                            {value
                              ? value.toLocaleDateString('en')
                              : 'Tanggal Lahir'}
                          </BaseText>
                        </View>
                      </TouchableHighlight>
                    </View>
                  )}
                  name={`profiles.${i}.birthDate`}
                  control={control}
                />
              </View>
            )
          })}
          <Controller
            render={({ field: { onChange, value } }) => (
              <DatePickerModal
                locale="en"
                mode="single"
                visible={open}
                onDismiss={onDismissSingle}
                date={value}
                onConfirm={params => {
                  setOpen(false)
                  onChange(params.date)
                }}
              />
            )}
            name={`profiles.${modalIndex}.birthDate`}
            control={control}
          />
          <PrimaryButton onPress={handleSubmit(onSubmit)}>Lanjut</PrimaryButton>
        </ScrollView>
      </ContentView>
    </ScreenContainer>
  )
}
