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
   * Set the background color of the inner circle when the toggle is disabled.
   */
  disabledBackgroundColor?: string;

  /**
   * Set the background color of the inner circle when the toggle is enabled.
   */
  innerCircleEnabledColor?: string;

  /**
   * Set the background color of the inner circle when the toggle is disabled.
   */
  innerCircleDisabledColor?: string;
}
