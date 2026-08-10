export function msToMins(ms: number) {
    return new Date(ms).toISOString().slice(14, 19);
}
