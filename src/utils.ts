// export function interopDefault<T>(m: T): T extends { default: infer U } ? U : T {
//   return (m as any).default || m;
// }

/**
 * Interop default.
 *
 * @param m Imported package
 * @returns Actual package for using
 */
export function interopDefault(m: any) {
  return m.default || m;
}

/**
 * Combine arrays into one.
 *
 * @param args Arrays
 * @returns Array
 */
export function combine(...args: (any | any[])[]) {
  return args.flat(Number.POSITIVE_INFINITY);
}
