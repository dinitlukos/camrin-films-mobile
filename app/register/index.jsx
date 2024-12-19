import { Link } from 'expo-router';
import { Text, StyleSheet, View, useColorScheme } from 'react-native';

export default function App() {

  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Index Page</Text>
      <Link href='/register/package'>
      <Text>Phone Number reg</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
  lightContainer: {
    backgroundColor: '#d0d0c0',
  },
  darkContainer: {
    backgroundColor: '#242c40',
  },
  lightThemeText: {
    color: '#242c40',
  },
  darkThemeText: {
    color: '#d0d0c0',
  },
});
