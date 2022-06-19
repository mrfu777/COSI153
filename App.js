import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Text, FlatList, View,Button, Image, StyleSheet, ActivityIndicator, TextInput } from 'react-native';



const CPA02 = () => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [ingredient, setIngredient] = useState('beef')

    const getMeals = async () => {
        try {
          const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
          const response = await fetch(url);
          const json = await response.json();
          setData(json.meals); 
        } catch (error) {
          console.error(error);
        } finally {
            setLoading(false);
        }
      };

    useEffect(() => {getMeals()}, [ingredient])
    const renderItem = ({ item }) => (
      <Item title1={item.strMeal} url={item.strMealThumb} id1={item.idMeal}/>
    );
    return(
        <View style={{ flex: 1, padding: 24 }}>
          <Text style={styles.title}>Meal Finder</Text>
          <TextInput
            placeholder="Enter Ingredient"
            onChangeText={newText => 
              setIngredient(newText)}
          />
          <Button
                title="Submit"
                onPress={() => {
                    setIngredient(newText)
                }}
            />
        
          {loading ? <ActivityIndicator/> : (
            <FlatList
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={renderItem}
            />
          )}
        
        </View>
    );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 40,
  },
  item: {
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row-reverse"
  },
  image: {
    width: 66,
    height: 58,
    left: 150,
  },
  text: {
    fontSize: 15,
  }
});

const Item = ({ title1, url, id1 }) => (
  <View style={styles.item}>
    <Text style={styles.text}>{title1}</Text>
    <View style={{ flex: 1}}>
      <Image style={styles.image} source={{uri:url}} />
    </View>
    <Text style={styles.text}>{id1}</Text>
  </View>
);

export default CPA02;
//github