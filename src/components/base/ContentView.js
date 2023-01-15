import { View } from 'react-native'

export default function ContentView({ children, style, ...rest }) {
  return (
    <View
      {...rest}
      style={{
        width: '90%',
        ...style,
      }}>
      {children}
    </View>
  )
}
