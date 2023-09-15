# react-native-swiggle

Should it be a toggle? Should it be a switch? No, it should be a swiggle!

This is a Toggle component for React Native.

## Installation

```sh
npm install react-native-swiggle
```

## Usage

```js
import Swiggle from 'react-native-swiggle';

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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
