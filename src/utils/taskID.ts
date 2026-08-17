export function genTaskID() {
    const handle = new Date();
    const dateTime =
        handle.getFullYear().toString() +
        handle.getMonth().toString() +
        handle.getDay().toString() +
        Date.now().toString();

    return `1${Math.floor(Math.random() * 10000).toString()}${dateTime}`;
}
