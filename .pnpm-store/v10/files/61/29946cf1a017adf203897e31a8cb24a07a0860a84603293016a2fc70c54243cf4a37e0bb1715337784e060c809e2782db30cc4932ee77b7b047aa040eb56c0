export type Dictionary<T = unknown> = Record<string, T>;
export type SafeObject = Dictionary<unknown>;
export type NumericDictionary<T = unknown> = Record<number, T>;

export type SafeFunction = (...args: unknown[]) => unknown;
export type AnyFunction = (...args: any[]) => any;
export type VoidFunction = () => void;

export type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType] extends object
    ? Simplify<T[KeyType]>
    : T[KeyType];
} & {};

export type StrictOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type DeepPartial<T extends object> = {
  [K in keyof T]?: NonNullable<T[K]> extends object
    ? DeepPartial<NonNullable<T[K]>>
    : T[K];
};

export type DeepRequired<T extends object> = {
  [K in keyof T]-?: NonNullable<T[K]> extends object
    ? DeepRequired<NonNullable<T[K]>>
    : T[K];
};

export type DeepReadonly<T extends object> = {
  readonly [K in keyof T]: NonNullable<T[K]> extends object
    ? DeepReadonly<NonNullable<T[K]>>
    : T[K];
};

export type DeepMutable<T extends object> = {
  -readonly [K in keyof T]: NonNullable<T[K]> extends object
    ? DeepMutable<NonNullable<T[K]>>
    : T[K];
};

export type DeepNonNullable<T extends object> = {
  [K in keyof T]: NonNullable<T[K]> extends object
    ? DeepNonNullable<NonNullable<T[K]>>
    : NonNullable<T[K]>;
};

export type Nullable<T> = T | null;

export type DeepNullable<T extends object> = {
  [K in keyof T]: NonNullable<T[K]> extends object
    ? DeepNullable<NonNullable<T[K]>>
    : Nullable<T[K]>;
};

export type MarkPartial<
  T extends object,
  K extends keyof T = keyof T
> = Simplify<Partial<Pick<T, K>> & Omit<T, K>>;

export type MarkRequired<
  T extends object,
  K extends keyof T = keyof T
> = Simplify<Omit<T, K> & Required<Pick<T, K>>>;

export type MarkReadonly<
  T extends object,
  K extends keyof T = keyof T
> = Simplify<Omit<T, K> & Readonly<Pick<T, K>>>;

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

export type MarkMutable<
  T extends object,
  K extends keyof T = keyof T
> = Simplify<Omit<T, K> & Mutable<Pick<T, K>>>;

export type MarkNullable<
  T extends object,
  K extends keyof T = keyof T
> = Simplify<Omit<T, K> & Nullable<Pick<T, K>>>;

export type MarkNonNullable<
  T extends object,
  K extends keyof T = keyof T
> = Simplify<Omit<T, K> & NonNullable<Pick<T, K>>>;

export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

export type XOR<T, U> = (Without<T, U> & U) | (Without<U, T> & T);

export type Concurrence<A, B> = A | B;

export type Intersection<A, B> = A extends B ? A : never;

export type Difference<A, B> = A extends B ? never : A;

export type Complement<A, B extends A> = Difference<A, B>;

export type ArrayElementType<T> = T extends readonly (infer U)[] ? U : never;

export type SmartLiteral<T extends keyof any> = T | (string & {});

export type MaybeArray<T> = T | T[];
export type MaybePromise<T> = T | Promise<T>;

export type StringLiteralBoolType = 'true' | 'false';

export type PickKeysByValueType<T extends object, ValueType> = {
  [K in keyof T]: T[K] extends ValueType ? K : never;
}[keyof T];

export type OmitKeysByValueType<T extends object, ValueType> = {
  [K in keyof T]: T[K] extends ValueType ? never : K;
}[keyof T];

export type ConvertValueType<T extends object, ValueType, ConvertType> = {
  [K in keyof T]: T[K] extends ValueType ? ConvertType : T[K];
};

export type YouCanAlsoUseReturnType<T extends AnyFunction> = T extends (
  ...args: unknown[]
) => infer ReturnType
  ? ReturnType | T
  : never;

export type TimerID = ReturnType<typeof setTimeout>;
