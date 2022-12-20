import { View, Text, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}
export default NumberContainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 3,
    borderColor: Colors.accent500,
    padding: 24,
    marginVertical: 24,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold',
  },
});
