import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CATEGORIES } from '../data/Categories';
const CategoryCard = ({ title, color }) => {
  return (<View style={{
    height: 200,
    flex: 1,
    backgroundColor: color,
    padding: 5,
    width: '100%',
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 5,
  }}><Text>{title}</Text> </View>)
}

export default function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%', marginRight: 10, marginTop: 10 }}
        data={CATEGORIES}
        numColumns={2}
        renderItem={({ item }) => <CategoryCard title={item.title} color={item.color} ></CategoryCard>}>
      </FlatList>
    </View>
  );
}
CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: 'red'
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
