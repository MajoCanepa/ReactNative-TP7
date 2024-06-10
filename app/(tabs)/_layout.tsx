import { Tabs, Redirect } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen name='home' options={{ title: 'Home', tabBarIcon: ({color})=> <FontAwesome size={28} name='home' color={color}/>  }}/>
      <Tabs.Screen name='auth' options={{ title: 'Auth', tabBarIcon: ({color})=> <FontAwesome size={28} name='user' color={color}/>  }}/>
      <Tabs.Screen name='tasks' options={{ title: 'Tasks', tabBarIcon: ({color})=> <FontAwesome size={28} name='tasks' color={color}/>  }}/>
      <Tabs.Screen name='settings' options={{ title: 'Settings', tabBarIcon: ({color})=> <FontAwesome size={28} name='cog' color={color}/>  }}/>
    </Tabs>
  )
}