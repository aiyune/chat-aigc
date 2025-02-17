export function insert<T>(array: T[], index: number, ...items: T[]): T[] {
  return [...array.slice(0, index), ...items, ...array.slice(index)];
}

export function remove<T>(array: T[], index: number): T[] {
  return [...array.slice(0, index), ...array.slice(index + 1)];
}

export function replace<T>(array: T[], index: number, item: T): T[] {
  return [...array.slice(0, index), item, ...array.slice(index + 1)];
}

export function swap<T>(array: T[], index1: number, index2: number): T[] {
  const item1 = array[index1];
  const item2 = array[index2];
  return replace(replace(array, index1, item2), index2, item1);
}

export function move<T>(array: T[], from: number, to: number): T[] {
  const item = array[from];
  return insert(remove(array, from), to, item);
}

export function sum(array: number[]): number {
  return array.reduce((a, b) => a + b, 0);
}

export function average(array: number[]): number {
  return sum(array) / array.length;
}

export function median(array: number[]): number {
  const sorted = array.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[middle - 1] + sorted[middle]) / 2
    : sorted[middle];
}

export function min(array: number[]): number {
  return Math.min(...array);
}

export function max(array: number[]): number {
    return Math.max(...array);
}

export function numberNegative(value: string, negative = true): string {
    let result = value.replace(negative ? /[^-0-9.]/g : /[^0-9.]/g, "");

    if (negative) {
        result = result.replace(/(?!^)-/g, "");
    }
    else {
        result = result.replace(/-/g, "");
    }

    const parts = result.split(".");
    if (parts.length > 2) {
        result = `${parts.shift()}.${parts.join("")}`;
    }

    return result;
}

export function parseNumber(value: string): number {
    return parseFloat(numberNegative(value));
}

export function parseInteger(value: string): number {
    return parseInt(numberNegative(value, false));
}

export function formatNumber(value: number, fractionDigits = 2): number {
    return parseFloat(value.toFixed(fractionDigits));
}

export function generateRandomChar(n: number): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array(n).fill(0).map(
        () => chars[Math.floor(Math.random() * chars.length)]
    ).join("");
}

export function generateRandomString(n: number, char = ""): string {
    return Array(n).fill(0).map(
        () => generateRandomChar(1)
    ).join(char);
}

export function generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

