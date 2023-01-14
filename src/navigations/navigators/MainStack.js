import { NavigationContainer } from '@react-navigation/native'
import Stack from '../Stack'
import SignIn from '~/features/SignIn'
import MainTab from './MainTab'

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Main">
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Main" component={MainTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
