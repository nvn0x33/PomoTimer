export class LocalStorage {
    static save(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    static load(key) {
        const data = localStorage.getItem(key);

        return JSON.parse(data);
    }
    static remove(key) {
        localStorage.removeItem(key);
    }
    static clear() {
        localStorage.clear();
    }
}
