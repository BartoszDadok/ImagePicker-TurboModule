import { View, StyleSheet, Button } from 'react-native';
import {
  getPermissionStatus,
  requestPermission,
  pickImage,
} from 'react-native-image-picker';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Get Permission Status"
        onPress={() => {
          console.log('getPermissionStatus');
          const status = getPermissionStatus();
          console.log('status', status);
        }}
      />
      <Button
        title="Request Permission"
        onPress={async () => {
          try {
            console.log('requestPermission');
            const status = requestPermission();
            console.log('requestPermission', status);
          } catch (error) {
            console.error('error', error);
          }
        }}
      />
      <Button
        title="Pick Image"
        onPress={() =>
          pickImage(
            (uri) => console.log('URI', uri),
            () => console.log('cancel')
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
