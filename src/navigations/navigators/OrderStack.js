import Stack from '../Stack'
import Order from '~/features/Order'
import SelectOrderDetail from '~/features/Order/SelectOrderDetail'
import OrderDetailIdentity from '~/features/Order/OrderDetaildentity'
import OrderConfirmation from '~/features/Order/OrderConfirmation'

function OrderStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} />
      <Stack.Screen
        name="OrderDetailIdentity"
        component={OrderDetailIdentity}
      />
      <Stack.Screen name="OrderDetail" component={SelectOrderDetail} />
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  )
}

export default OrderStack
