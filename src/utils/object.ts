export function keys<O>(o: O) {
  return Object.keys(o) as Array<keyof O>;
}

export function chunk<T>(chunkSize: number, array: Array<T>): Array<T[]> {
  if (chunkSize < 1) {
    throw new Error();
  }
  return Array<T>(Math.ceil(array.length / chunkSize))
    .fill(array[0])
    .map((_, i) => array.slice(i * chunkSize, i * chunkSize + chunkSize));
}

export const safeLocalStorage = () => (typeof window !== 'undefined' ? localStorage : undefined);
