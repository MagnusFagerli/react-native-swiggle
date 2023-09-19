import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  switchWrapper: {
    marginBottom: 12,
    alignItems: 'center',
    flexDirection: 'row',
  },
  container: {
    borderRadius: 30,
    justifyContent: 'center',
  },
  containerDisabled: {
    backgroundColor: '#C1C1C1',
  },
  containerEnabled: {
    backgroundColor: '#28CD41',
  },
  innerCircle: {
    margin: 5,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
  },
});

export default styles;
