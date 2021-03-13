import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import TopAppbar from '../components/TopAppbar';

const Stack = createStackNavigator();

export default function MealNavigator({ toggleTheme }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories" screenOptions={{
        header: (props) => <TopAppbar {...props} toggleTheme={toggleTheme} />,
      }}>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="CategoryMeal" component={CategoryMealScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}