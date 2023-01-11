export default function PasswordIcon({ showPassword, setShowPassword }) {
  return !showPassword ? (
    <TextInput.Icon icon="eye" onPress={() => setShowPassword(!showPassword)} />
  ) : (
    <TextInput.Icon
      icon="eye-off"
      onPress={() => setShowPassword(!showPassword)}
    />
  )
}
