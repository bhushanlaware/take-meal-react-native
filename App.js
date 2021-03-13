import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { View } from 'react-native';
import MealsNavigator from './src/navigations/MealsNavigator';
const fetchFonts = () => Font.loadAsync({
  'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf'),
  'open-sans-italic': require('./assets/Fonts/OpenSans-Italic.ttf'),
})

export default function App() {
  const [loader, setLoader] = useState(true);
  if (loader) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setLoader(false)}
      onError={(err) => console.log(err)}
    />
  }
  return (
    <MealsNavigator></MealsNavigator>
  );
}

