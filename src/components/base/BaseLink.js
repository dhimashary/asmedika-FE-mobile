import { Text } from 'react-native'
import baseStyles from '~/styles'

export default function BaseLink({ children, style, ...rest }) {
  return (
    <Text
      {...rest}
      style={{
        fontSize: baseStyles.font.size.sm,
        fontFamily: 'nunitoSemiBold',
        color: baseStyles.color.tertiary,
        marginBottom: baseStyles.space.md,
        ...style,
      }}>
      {children}
    </Text>
  )
}
