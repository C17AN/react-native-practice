import React from 'react';
import DetailScreen from './screens/DetailScreen';
// import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// const {Navigator, Screen} = createNativeStackNavigator();
const {Navigator, Screen} = createDrawerNavigator();

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button title="열기" onPress={() => navigation.openDrawer()} />
      <Button
        title="Setting 열기"
        onPress={() => navigation.navigate('settings')}
      />
    </View>
  );
};

const SettingScreen = ({navigation}) => {
  return (
    <View>
      <Text>Setting</Text>
      <Button title="뒤로가기" onPress={() => navigation.goBack()} />
    </View>
  );
};

const App = () => {
  console.log('rendered');
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" backBehavior="history">
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Setting" component={SettingScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
