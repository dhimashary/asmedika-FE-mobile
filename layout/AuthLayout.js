import { View, ImageBackground, Text } from 'react-native'
import bgFloat from '../assets/bg-float.png'

export default function AuthLayout() {
  ;<View
    style={{
      flex: 1,
      backgroundColor: 'tomato',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text>asd</Text>
    {/* <ImageBackground source={bgFloat} style={{
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
    }}>
      <Text>Elements</Text>
      <Text>in Front of</Text>
      <Text>Background</Text>
    </ImageBackground> */}
  </View>
}
