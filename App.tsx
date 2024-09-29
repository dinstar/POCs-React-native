import React, { createContext, useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

const
  StackSelectionCtx = createContext<any>(null),
  getStackSelectionCtx = () => useContext(StackSelectionCtx),
  Stack = createNativeStackNavigator();

const
  StackSwitcher = () =>
  {
    const
      { value, setValue } = getStackSelectionCtx();
    const
      onPress = () => setValue(isStackA => !isStackA);
    return <View style={{ padding: 20 }}>
      <Text style={[styles.text, { color: 'black' }]}>{`isStackA: ${value}`}</Text>
      <TouchableHighlight onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{`Switch to Stack ${value ? 'B' : 'A'}`}</Text>
      </TouchableHighlight>
    </View>
  },
  ScreenA = () => <View><StackSwitcher/></View>,
  ScreenB = () => <View><StackSwitcher/></View>;

const ScreenStack = ({ value }) => {
  if (value)
    return <Stack.Navigator>
      <Stack.Screen name="ScreenA1" component={ScreenA} />
    </Stack.Navigator>;
  else
    return <Stack.Navigator>
      <Stack.Screen name="ScreenB1" component={ScreenB} />
    </Stack.Navigator>;
};

const App = () => {
  const
    [value, setValue] = useState(true);
  return (
    <StackSelectionCtx.Provider value={{ value, setValue }}>
      <NavigationContainer>
        <ScreenStack value={value} />
      </NavigationContainer>
    </StackSelectionCtx.Provider>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "gray",
    borderRadius: 20,
    margin: 14,
    width: "78%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 0.25
  },
});

export default App;
