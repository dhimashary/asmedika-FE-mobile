import Stack from '../Stack'
import Order from '~/features/Order'
import SelectOrderDetail from '~/features/Order/SelectOrderDetail'

function OrderStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OrderDetail" component={SelectOrderDetail} />
      <Stack.Screen name="Order" component={Order} />
    </Stack.Navigator>
  )
}

export default OrderStack
