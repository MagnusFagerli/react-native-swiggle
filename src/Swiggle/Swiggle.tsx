import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, Easing, View } from 'react-native';
import { SwiggleProps } from './Swiggle.types';
import styles from './Swiggle.styles';

const Swiggle = ({
  isActive,
  onPress,
  enabledBackgroundColor,
  innerCircleEnabledColor,
  hitSlop,
  containerHeight,
  containerWidth,
  innerCircleHeight,
  innerCircleWidth,
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
    <Pressable onPress={onPress} hitSlop={hitSlop ?? 20}>
      <View
        style={[
          styles.container,
          containerHeight ? { height: containerHeight } : { height: 25 },
          containerWidth ? { width: containerWidth } : { width: 50 },
          isToggled ? styles.containerEnabled : styles.containerDisabled,
          isToggled && enabledBackgroundColor
            ? { backgroundColor: enabledBackgroundColor }
            : null,
        ]}
      >
        <Animated.View
          style={[
            styles.innerCircle,
            innerCircleHeight ? { height: innerCircleHeight } : { height: 16 },
            innerCircleWidth ? { width: innerCircleWidth } : { width: 16 },
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
