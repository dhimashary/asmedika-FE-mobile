import { Portal, Modal } from 'react-native-paper'
import { View } from 'react-native'
import baseStyles from '~/styles'

export default function BaseModal({ children, visible, setVisible }) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={() => setVisible(false)}
        contentContainerStyle={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: baseStyles.radius.sm,
          overflow: 'hidden',
        }}
        style={{
          alignItems: 'center',
        }}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          {children}
        </View>
      </Modal>
    </Portal>
  )
}
