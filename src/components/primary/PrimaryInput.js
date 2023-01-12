import { TextInput } from 'react-native-paper'
import { View } from 'react-native'
import baseStyles from '~/styles'
import { HelperText } from 'react-native-paper'

export default function PrimaryInput({
  color,
  helperVisible,
  helperText,
  ...rest
}) {
  return (
    <View>
      <TextInput
        {...rest}
        outlineColor={baseStyles.color.primary}
        mode="outlined"
        style={{
          width: '100%',
          backgroundColor: 'white',
        }}
      />
      <HelperText
        type="error"
        visible={helperVisible}
        style={{
          paddingLeft: 4,
        }}>
        {helperText}
      </HelperText>
    </View>
  )
}
