import { Text } from 'react-native'
import baseStyles from '~/styles'

export default function BaseText({ children, style, ...rest }) {
  return (
    <Text
      {...rest}
      style={{
        fontSize: baseStyles.font.size.sm,
        fontFamily: 'nunitoLight',
        marginHorizontal: baseStyles.space.xs,
        ...style,
      }}>
      {children}
    </Text>
  )
}
