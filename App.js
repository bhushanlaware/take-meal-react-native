import * as React from 'react';
import { DarkTheme, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import MealNavigator from './src/navigations/MealsNavigator';
import BluePink from './src/themes/OrangePurple';



const Darktheme = {
  ...DarkTheme,
  roundness: 2,
  mode: 'exact',
  colors: {
    ...DarkTheme.colors,
    ...BluePink
  },
};
const Lighttheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    ...BluePink
  },
};


export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    console.log('a')
  }

  const theme = isDarkTheme ? Darktheme : Lighttheme;
  return (
    <PaperProvider theme={theme}>
      <MealNavigator toggleTheme={toggleTheme} ></MealNavigator>
    </PaperProvider>
  );
}

