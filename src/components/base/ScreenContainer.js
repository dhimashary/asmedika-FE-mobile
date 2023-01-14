import { SafeAreaView } from 'react-native-safe-area-context'

export default function ScreenContainer({ children, style, ...rest }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        ...style,
      }}
      {...rest}>
      {children}
    </SafeAreaView>
  )
}
