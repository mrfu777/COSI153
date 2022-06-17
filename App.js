import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const BMI = () => {
  const [y, setY] = useState("");
  const [x, setX] = useState("");
  const [z, setZ] = useState("");
  const [bmi,setBMI] = useState(0);

  return (
    <View style={{padding: 10}}>
      <Text style={{fontSize: 30,fontWeight: 'bold'}}>
        Distance of (x,y,z) from (0,0,0)
      </Text>
      <Text>
        Write the code for this app which calculates
        d = Math.sqrt(x*x+y*y+z*z)
      </Text>
      <TextInput
        style={{height: 40}}
        placeholder="Enter your x"
        onChangeText={newText => 
             setX(newText)}
        defaultValue={x}
      />
     <TextInput
        style={{weight: 40}}
        placeholder="Enter your y"
        onChangeText={newText => 
             setY(newText)}
        defaultValue={y}
      />
      <TextInput
        style={{height: 40}}
        placeholder="Enter your z"
        onChangeText={newText => 
             setZ(newText)}
        defaultValue={z}
      />
      <Button
        title="calculate distance"
        onPress = {() => {
            setBMI(Math.sqrt(x*x+y*y+z*z))
        }}
      />
      <Text>
        distance to ({x},{y},{z}) is d = {bmi}
      </Text>
    </View>
  );
}

export default BMI;
//aaaaaaaaaa