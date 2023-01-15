import { View } from 'react-native'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function BaseHeader({ children, style, ...rest }) {
  return (
    <View
      style={{
        // width,
        // height: height / 12,
        // justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
      {...rest}>
      {children}
    </View>
  )
}
