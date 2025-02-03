import { snakeToCamelCase } from './string-utils';

/**
 * Converts an object's snake_case keys to camelCase keys.
 *
 * @template T - The expected output type with camelCase keys. - defaults to any object
 * @param {Record<string, any>} data - The object with snake_case keys.
 * @returns {T} - A new object with camelCase keys and the same values.
 *
 * @example
 * const data = {
 *   snake_case: true,
 *   hello: 1
 * };
 * const result = transformToCamelCase(data);
 * console.log(result);
 * // Output: { snakeCase: true, hello: 1 }
 */
export const transformToCamelCase = <T = Record<string, any>>(
  data: Record<string, any>
): T => {
  return Object.entries(data).reduce((output, [key, value]) => {
    const camelKey = snakeToCamelCase(key) as keyof T;
    output[camelKey] = value;
    return output;
  }, {} as Partial<T>) as T;
};
