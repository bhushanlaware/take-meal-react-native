import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


export default function CategoryMealScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Categories Meal Screen</Text>
      <Button title='Go to Details!'
        onPress={() => { navigation.navigate('MealDetailScreen') }}>
      </Button>
    </View>
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
