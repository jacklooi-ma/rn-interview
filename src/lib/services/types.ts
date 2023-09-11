export interface StorageInterface {
  get(key: string): string | null;
  set(key: string, value: string, options?: object): void;
  remove(key: string, options?: object): void;
}
