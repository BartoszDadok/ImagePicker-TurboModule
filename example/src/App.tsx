import { useState } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import {
  getPermissionStatus,
  requestPermission,
  pickImage,
} from 'react-native-image-picker';

export default function App() {
  const [imageUri, setImageUri] = useState<string | null>(null);
  return (
    <View style={styles.container}>
      <Button
        title="Get Permission Status"
        onPress={() => {
          const newStatus = getPermissionStatus();
          console.log('newStatus', newStatus);
        }}
      />
      <Button
        title="Request Permission"
        onPress={async () => {
          try {
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
            (uri) => setImageUri(uri),
            (error) => console.log('error', error)
          )
        }
      />
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={{ width: 200, height: 200 }}
          resizeMode="contain"
        />
      )}
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
