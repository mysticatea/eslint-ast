/**
 * The function to make a compile error if the type check is false.
 * @template C The condition value.
 */
export function assert<C extends true>(): void {
    // Do nothing.
}

/**
 * `true` if the two types are samely.
 * @template T A type to check.
 * @template U Another type to check.
 */
export type Equals<T, U> = [T] extends [U]
    ? [U] extends [T]
        ? true
        : { "Must equal the types.": false; "T=": T; "U=": U }
    : { "Must equal the types.": false; "T=": T; "U=": U }

/**
 * `true` if the two types are samely.
 * @template T A type to check.
 * @template U Another type to check.
 */
export type EqualsObject<T, U> = Equals<keyof T, keyof U> extends true
    ? {
          [P in keyof T & keyof U]: Equals<T[P], U[P]> extends true
              ? true
              : {
                    "Must equal the types of the property": P
                    "T=": T[P]
                    "U=": U[P]
                }
      }[keyof T & keyof U]
    : {
          "Must equal property names.": false
          "T=": keyof T
          "U=": keyof U
          "Diff=": Exclude<keyof T, keyof U> | Exclude<keyof U, keyof T>
      }
