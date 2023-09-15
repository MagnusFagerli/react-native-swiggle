import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, Easing, View } from 'react-native';
import { SwiggleProps } from './Swiggle.types';
import styles from './Swiggle.styles';

const Swiggle = ({
  isActive,
  onPress,
  enabledBackgroundColor,
  innerCircleEnabledColor,
}: SwiggleProps) => {
  const [isToggled, setIsToggled] = useState(!isActive);
  const toggleAnimation = useRef(new Animated.Value(isActive ? 0 : 1)).current;
  const innerCircleTranslateX = toggleAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 23],
  });

  const handleToggle = () => {
    setIsToggled((prevValue) => !prevValue);
    const toValue = isToggled ? 0 : 1;
    Animated.timing(toggleAnimation, {
      toValue,
      duration: 150,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    handleToggle();
  }, [isActive]);

  return (
    <Pressable onPress={onPress} hitSlop={20}>
      <View
        style={[
          styles.container,
          isToggled ? styles.containerEnabled : styles.containerDisabled,
          isToggled && enabledBackgroundColor
            ? { backgroundColor: enabledBackgroundColor }
            : null,
        ]}
      >
        <Animated.View
          style={[
            styles.innerCircle,
            innerCircleEnabledColor
              ? { backgroundColor: innerCircleEnabledColor }
              : null,
            { transform: [{ translateX: innerCircleTranslateX }] },
          ]}
        />
      </View>
    </Pressable>
  );
};
export default Swiggle;
