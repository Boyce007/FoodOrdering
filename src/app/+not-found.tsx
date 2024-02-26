// Import necessary dependencies
import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Text, View } from '@components/Themed';

// Define the NotFoundScreen component
export default function NotFoundScreen() {
  return (
    <>
      {/* Render a Stack.Screen component with options for the screen title */}
      <Stack.Screen options={{ title: 'Oops!' }} />

      {/* Render the main UI */}
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>

        {/* Render a Link component as a button to navigate to the home screen */}
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

// Define styles using StyleSheet.create()
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
