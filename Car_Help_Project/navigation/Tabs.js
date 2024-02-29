import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { UserProfile } from "../screens";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
};
export default Tabs;
