import { Text, StyleSheet } from 'react-native'
import baseStyles from '~/styles'

export default function BaseTitle({ style, children, ...rest }) {
  return (
    <Text style={{ ...styles.title, ...style }} {...rest}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: baseStyles.font.size.md,
    fontFamily: 'nunitoSemiBold',
    marginBottom: baseStyles.space.sm,
  },
})
