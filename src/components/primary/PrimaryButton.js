import { Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'
import baseStyles from '~/styles'

function PrimaryButton({ children, ...rest }) {
  return (
    <Button {...rest} mode="contained" style={styles.submitButton}>
      <Text style={styles.submitText}>{children}</Text>
    </Button>
  )
}

const styles = StyleSheet.create({
  submitButton: {
    paddingVertical: baseStyles.space.xs,
    borderRadius: baseStyles.radius.md,
    marginBottom: baseStyles.space.sm,
  },
  submitText: {
    fontSize: baseStyles.font.size.sm,
    fontFamily: 'nunitoBold',
  },
})

export default PrimaryButton
