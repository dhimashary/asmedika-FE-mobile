import Tab from '../Tab'
import Home from '~/features/Home'
import SignIn from '~/features/SignIn'
import SignUp from '~/features/SignUp'
import PasswordReset from '~/features/PasswordReset'
import OurLocation from '~/features/OurLocation'
import VaccineResult from '~/features/VaccineResult'

export default function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{}}
      barStyle={{
        backgroundColor: 'white',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Vaccine Result" component={VaccineResult} />
      <Tab.Screen name="Location" component={OurLocation} />
      <Tab.Screen name="Riwayat" component={SignIn} />
      <Tab.Screen name="Akun" component={SignUp} />
      <Tab.Screen name="Akun2" component={PasswordReset} />
    </Tab.Navigator>
  )
}
