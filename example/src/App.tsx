import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Swiggle } from 'react-native-swiggle';

export default function App() {
  const [exampleValue, setExampleValue] = useState(true);

  const handleSwiggle = () => {
    setExampleValue((prevValue) => !prevValue);
  };
  return (
    <View style={styles.container}>
      <Swiggle isActive={exampleValue} onPress={handleSwiggle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
