import { Text, StyleSheet, Platform } from 'react-native';

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'ios' ? 2 : 0,
    // borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderWidth: 0,
    borderColor: 'white',
    borderRadius: 6,
    padding: 12,
    maxWidth: '80%',
    width: 300,
  },
});
