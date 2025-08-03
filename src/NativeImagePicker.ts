import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

interface Spec extends TurboModule {
  getPermissionStatus(): string;
  requestPermission(): Promise<string>;
  pickImage(
    onSuccess: (uri: string) => void,
    onError: (error: string) => void
  ): void;
}

export type { Spec };
export default TurboModuleRegistry.getEnforcing<Spec>('ImagePicker');
