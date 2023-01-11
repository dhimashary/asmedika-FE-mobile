import { View } from 'react-native'

export default function HStack({ children, style, ...rest }) {
  return (
    <View
      {...rest}
      style={{
        flexDirection: 'row',
        width: '100%',
        ...style,
      }}>
      {children}
    </View>
  )
}
