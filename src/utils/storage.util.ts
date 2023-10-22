import { KEY_LOCAL_STORAGE } from './constants/storage.constant';

export function getLocalStorage<T>(key: KEY_LOCAL_STORAGE): T | null {
    return JSON.parse(localStorage.getItem(key) ?? 'null');
}

export function setLocalStorage<T>(key: KEY_LOCAL_STORAGE, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
}
