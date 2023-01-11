import { View } from 'react-native'

export default function ContentView({ children, ...rest }) {
  return (
    <View
      {...rest}
      style={{
        width: '90%',
      }}>
      {children}
    </View>
  )
}
