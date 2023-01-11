import { TextInput } from 'react-native-paper'
import baseStyles from '~/styles'

export default function PrimaryInput({ color, ...rest }) {
  return (
    <TextInput
      {...rest}
      outlineColor={baseStyles.color.primary}
      mode="outlined"
      style={{
        width: '100%',
        marginBottom: baseStyles.space.md,
        backgroundColor: 'white',
      }}
    />
  )
}
