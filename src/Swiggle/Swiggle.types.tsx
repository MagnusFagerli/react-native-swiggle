export interface SwiggleProps {
  /**
   * Is the toggle active?
   */
  isActive: boolean;

  /**
   * Function to execute on press.
   */
  onPress: () => void;

  /**
   * Set the background color when the toggle is enabled.
   */
  enabledBackgroundColor?: string;

  /**
   * Set the background color of the inner circle when the toggle is enabled.
   */
  innerCircleEnabledColor?: string;

  /**
   * Set the touchable area of the Swiggle.
   */
  hitSlop?: number;

  /**
   * Adjust the width of the Swiggle.
   */
  containerWidth?: number;

  /**
   * Adjust the height of the Swiggle.
   */
  containerHeight?: number;

  /**
   * Adjust the size of the inner circle.
   */
  innerCircleWidth?: number;

  /**
   * Adjust the height of the inner circle.
   */
  innerCircleHeight?: number;
}
