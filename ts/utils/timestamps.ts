export function isOlderThan(timestamp: number, delta: number): boolean {
  return timestamp <= Date.now() - delta;
}
