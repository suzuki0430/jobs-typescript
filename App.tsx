import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { AuthScreen } from './screens/AuthScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { MapScreen } from './screens/MapScreen';
import { DeckScreen } from './screens/DeckScreen';
import { ReviewScreen } from './screens/ReviewScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { Button } from 'react-native-elements';

const ReviewStack = createStackNavigator();

const ReviewStackScreen = () => {
  const navigation = useNavigation();

  return (
    <ReviewStack.Navigator>
      <ReviewStack.Screen
        name="review"
        component={ReviewScreen}
        options={({ navigation }) => ({
          title: 'Review Jobs',
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('settings')}
              title="settings"
              buttonStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
              titleStyle={{ color: 'rgba(0,122,255,1)' }}
            />
          ),
          style: {
            marginTop: Platform.OS === 'android' ? 24 : 0,
          },
        })}
      />
      <ReviewStack.Screen name="settings" component={SettingsScreen} />
    </ReviewStack.Navigator>
  );
};

const MainTab = createBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name="Map" component={MapScreen} />
      <MainTab.Screen name="Deck" component={DeckScreen} />
      <MainTab.Screen name="Review" component={ReviewStackScreen} />
    </MainTab.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Welcome" component={WelcomeScreen} />
        <Tab.Screen name="Auth" component={AuthScreen} />
        <Tab.Screen name="Main" component={MainTabScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
