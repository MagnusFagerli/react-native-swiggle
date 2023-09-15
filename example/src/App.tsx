import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Swiggle } from 'react-native-swiggle';

export default function App() {
  const [exampleValue, setExampleValue] = useState(true);

  const handleToggle = () => {
    setExampleValue((prevValue) => !prevValue);
  };
  return (
    <View style={styles.container}>
      <Swiggle isActive={exampleValue} onPress={handleToggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
