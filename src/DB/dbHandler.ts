import { LocalStorage } from "./db";
import type { Task } from "../types/Task";

export class Storage {
    static orderKey: string = "order";

    constructor() {
        if (LocalStorage.load(Storage.orderKey) === null) {
            LocalStorage.save(Storage.orderKey, []);
        }
    }

    loadList() {
        const order = LocalStorage.load(Storage.orderKey);

        const taskList: Task[] = order.map((key: string) =>
            LocalStorage.load(key)
        );

        return taskList || [];
    }
    clearAll() {
        LocalStorage.clear();
        LocalStorage.save(Storage.orderKey, []);
    }
    addTask(key: string, task) {
        LocalStorage.save(key, task);

        const order: string[] = LocalStorage.load(Storage.orderKey);
        order.push(key);
        LocalStorage.save(Storage.orderKey, order);
    }
    removeTask(key: string) {
        LocalStorage.remove(key);

        const order: string[] = LocalStorage.load(Storage.orderKey);
        const index: number = order.indexOf(key);

        order.splice(index, 1);
        localStorage.setItem(Storage.orderKey, JSON.stringify(order));
        LocalStorage.save(Storage.orderKey, order);
    }
}
