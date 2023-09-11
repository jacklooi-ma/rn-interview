import type { StorageInterface } from "../types";

export class LocalStorageService implements StorageInterface {
  public static readonly THEME = "theme";
  public static readonly TODO_LIST = "todo_list";

  public static stringify<T>(value: T): string {
    return JSON.stringify(value);
  }

  public static parse<T>(value: string): T {
    return JSON.parse(value);
  }

  get<T = unknown>(key: string): T | null {
    const data = localStorage.getItem(key);
    if (data) {
      return LocalStorageService.parse(data);
    }
    return null;
  }

  set<T = unknown>(key: string, value: T): void {
    const data = LocalStorageService.stringify(value);
    localStorage.setItem(key, data);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}

export const localStorageService = new LocalStorageService();
