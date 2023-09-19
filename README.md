# react-native-swiggle

What is the correct term? Toggle or Switch? I don't know. Who knows?
That's why I created this component. It's a toggle, it's a switch, it's a Swiggle.

On a more serious note, this is a simple Toggle component for React Native.

## Installation

```sh
npm install react-native-swiggle
```

## Usage

```js
import Swiggle from 'react-native-swiggle';

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
```

## Usage with optional props

Default colors are iOS green for enabled background color, and white for innerCircle color.

```js
import Swiggle from 'react-native-swiggle';

export default function App() {
  const [exampleValue, setExampleValue] = useState(true);

  const handleSwiggle = () => {
    setExampleValue((prevValue) => !prevValue);
  };

  return (
    <View style={styles.container}>
      <Swiggle
        isActive={exampleValue}
        onPress={handleSwiggle}
        enabledBackgroundColor="blue"
        innerCircleEnabledColor="white"
        containerHeight={50}
        containerWidth={100}
        innerCircleHeight={40}
        innerCircleWidth={40}
      />
    </View>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
