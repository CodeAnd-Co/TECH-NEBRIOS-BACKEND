
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model ADMINISTRADOR
 * 
 */
export type ADMINISTRADOR = $Result.DefaultSelection<Prisma.$ADMINISTRADORPayload>
/**
 * Model CHAROLA
 * 
 */
export type CHAROLA = $Result.DefaultSelection<Prisma.$CHAROLAPayload>
/**
 * Model CHAROLA_CHAROLA
 * 
 */
export type CHAROLA_CHAROLA = $Result.DefaultSelection<Prisma.$CHAROLA_CHAROLAPayload>
/**
 * Model CHAROLA_COMIDA
 * 
 */
export type CHAROLA_COMIDA = $Result.DefaultSelection<Prisma.$CHAROLA_COMIDAPayload>
/**
 * Model CHAROLA_HIDRATACION
 * 
 */
export type CHAROLA_HIDRATACION = $Result.DefaultSelection<Prisma.$CHAROLA_HIDRATACIONPayload>
/**
 * Model COMIDA
 * 
 */
export type COMIDA = $Result.DefaultSelection<Prisma.$COMIDAPayload>
/**
 * Model FRAS
 * 
 */
export type FRAS = $Result.DefaultSelection<Prisma.$FRASPayload>
/**
 * Model HIDRATACION
 * 
 */
export type HIDRATACION = $Result.DefaultSelection<Prisma.$HIDRATACIONPayload>
/**
 * Model USUARIO
 * 
 */
export type USUARIO = $Result.DefaultSelection<Prisma.$USUARIOPayload>
/**
 * Model USUARIO_CHAROLA
 * 
 */
export type USUARIO_CHAROLA = $Result.DefaultSelection<Prisma.$USUARIO_CHAROLAPayload>
/**
 * Model CHAROLA_FRAS
 * 
 */
export type CHAROLA_FRAS = $Result.DefaultSelection<Prisma.$CHAROLA_FRASPayload>
/**
 * Model CHAROLA_PUPA
 * 
 */
export type CHAROLA_PUPA = $Result.DefaultSelection<Prisma.$CHAROLA_PUPAPayload>
/**
 * Model PUPA
 * 
 */
export type PUPA = $Result.DefaultSelection<Prisma.$PUPAPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ADMINISTRADORS
 * const aDMINISTRADORS = await prisma.aDMINISTRADOR.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more ADMINISTRADORS
   * const aDMINISTRADORS = await prisma.aDMINISTRADOR.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.aDMINISTRADOR`: Exposes CRUD operations for the **ADMINISTRADOR** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ADMINISTRADORS
    * const aDMINISTRADORS = await prisma.aDMINISTRADOR.findMany()
    * ```
    */
  get aDMINISTRADOR(): Prisma.ADMINISTRADORDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cHAROLA`: Exposes CRUD operations for the **CHAROLA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CHAROLAS
    * const cHAROLAS = await prisma.cHAROLA.findMany()
    * ```
    */
  get cHAROLA(): Prisma.CHAROLADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cHAROLA_CHAROLA`: Exposes CRUD operations for the **CHAROLA_CHAROLA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CHAROLA_CHAROLAS
    * const cHAROLA_CHAROLAS = await prisma.cHAROLA_CHAROLA.findMany()
    * ```
    */
  get cHAROLA_CHAROLA(): Prisma.CHAROLA_CHAROLADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cHAROLA_COMIDA`: Exposes CRUD operations for the **CHAROLA_COMIDA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CHAROLA_COMIDAS
    * const cHAROLA_COMIDAS = await prisma.cHAROLA_COMIDA.findMany()
    * ```
    */
  get cHAROLA_COMIDA(): Prisma.CHAROLA_COMIDADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cHAROLA_HIDRATACION`: Exposes CRUD operations for the **CHAROLA_HIDRATACION** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CHAROLA_HIDRATACIONS
    * const cHAROLA_HIDRATACIONS = await prisma.cHAROLA_HIDRATACION.findMany()
    * ```
    */
  get cHAROLA_HIDRATACION(): Prisma.CHAROLA_HIDRATACIONDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cOMIDA`: Exposes CRUD operations for the **COMIDA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more COMIDAS
    * const cOMIDAS = await prisma.cOMIDA.findMany()
    * ```
    */
  get cOMIDA(): Prisma.COMIDADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fRAS`: Exposes CRUD operations for the **FRAS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FRAS
    * const fRAS = await prisma.fRAS.findMany()
    * ```
    */
  get fRAS(): Prisma.FRASDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hIDRATACION`: Exposes CRUD operations for the **HIDRATACION** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HIDRATACIONS
    * const hIDRATACIONS = await prisma.hIDRATACION.findMany()
    * ```
    */
  get hIDRATACION(): Prisma.HIDRATACIONDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uSUARIO`: Exposes CRUD operations for the **USUARIO** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more USUARIOS
    * const uSUARIOS = await prisma.uSUARIO.findMany()
    * ```
    */
  get uSUARIO(): Prisma.USUARIODelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.uSUARIO_CHAROLA`: Exposes CRUD operations for the **USUARIO_CHAROLA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more USUARIO_CHAROLAS
    * const uSUARIO_CHAROLAS = await prisma.uSUARIO_CHAROLA.findMany()
    * ```
    */
  get uSUARIO_CHAROLA(): Prisma.USUARIO_CHAROLADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cHAROLA_FRAS`: Exposes CRUD operations for the **CHAROLA_FRAS** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CHAROLA_FRAS
    * const cHAROLA_FRAS = await prisma.cHAROLA_FRAS.findMany()
    * ```
    */
  get cHAROLA_FRAS(): Prisma.CHAROLA_FRASDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cHAROLA_PUPA`: Exposes CRUD operations for the **CHAROLA_PUPA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CHAROLA_PUPAS
    * const cHAROLA_PUPAS = await prisma.cHAROLA_PUPA.findMany()
    * ```
    */
  get cHAROLA_PUPA(): Prisma.CHAROLA_PUPADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pUPA`: Exposes CRUD operations for the **PUPA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PUPAS
    * const pUPAS = await prisma.pUPA.findMany()
    * ```
    */
  get pUPA(): Prisma.PUPADelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    ADMINISTRADOR: 'ADMINISTRADOR',
    CHAROLA: 'CHAROLA',
    CHAROLA_CHAROLA: 'CHAROLA_CHAROLA',
    CHAROLA_COMIDA: 'CHAROLA_COMIDA',
    CHAROLA_HIDRATACION: 'CHAROLA_HIDRATACION',
    COMIDA: 'COMIDA',
    FRAS: 'FRAS',
    HIDRATACION: 'HIDRATACION',
    USUARIO: 'USUARIO',
    USUARIO_CHAROLA: 'USUARIO_CHAROLA',
    CHAROLA_FRAS: 'CHAROLA_FRAS',
    CHAROLA_PUPA: 'CHAROLA_PUPA',
    PUPA: 'PUPA'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "aDMINISTRADOR" | "cHAROLA" | "cHAROLA_CHAROLA" | "cHAROLA_COMIDA" | "cHAROLA_HIDRATACION" | "cOMIDA" | "fRAS" | "hIDRATACION" | "uSUARIO" | "uSUARIO_CHAROLA" | "cHAROLA_FRAS" | "cHAROLA_PUPA" | "pUPA"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      ADMINISTRADOR: {
        payload: Prisma.$ADMINISTRADORPayload<ExtArgs>
        fields: Prisma.ADMINISTRADORFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ADMINISTRADORFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRADORPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ADMINISTRADORFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRADORPayload>
          }
          findFirst: {
            args: Prisma.ADMINISTRADORFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRADORPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ADMINISTRADORFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRADORPayload>
          }
          findMany: {
            args: Prisma.ADMINISTRADORFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRADORPayload>[]
          }
          create: {
            args: Prisma.ADMINISTRADORCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRADORPayload>
          }
          createMany: {
            args: Prisma.ADMINISTRADORCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ADMINISTRADORDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRADORPayload>
          }
          update: {
            args: Prisma.ADMINISTRADORUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRADORPayload>
          }
          deleteMany: {
            args: Prisma.ADMINISTRADORDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ADMINISTRADORUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ADMINISTRADORUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ADMINISTRADORPayload>
          }
          aggregate: {
            args: Prisma.ADMINISTRADORAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateADMINISTRADOR>
          }
          groupBy: {
            args: Prisma.ADMINISTRADORGroupByArgs<ExtArgs>
            result: $Utils.Optional<ADMINISTRADORGroupByOutputType>[]
          }
          count: {
            args: Prisma.ADMINISTRADORCountArgs<ExtArgs>
            result: $Utils.Optional<ADMINISTRADORCountAggregateOutputType> | number
          }
        }
      }
      CHAROLA: {
        payload: Prisma.$CHAROLAPayload<ExtArgs>
        fields: Prisma.CHAROLAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CHAROLAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CHAROLAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLAPayload>
          }
          findFirst: {
            args: Prisma.CHAROLAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CHAROLAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLAPayload>
          }
          findMany: {
            args: Prisma.CHAROLAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLAPayload>[]
          }
          create: {
            args: Prisma.CHAROLACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLAPayload>
          }
          createMany: {
            args: Prisma.CHAROLACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CHAROLADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLAPayload>
          }
          update: {
            args: Prisma.CHAROLAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLAPayload>
          }
          deleteMany: {
            args: Prisma.CHAROLADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CHAROLAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CHAROLAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLAPayload>
          }
          aggregate: {
            args: Prisma.CHAROLAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCHAROLA>
          }
          groupBy: {
            args: Prisma.CHAROLAGroupByArgs<ExtArgs>
            result: $Utils.Optional<CHAROLAGroupByOutputType>[]
          }
          count: {
            args: Prisma.CHAROLACountArgs<ExtArgs>
            result: $Utils.Optional<CHAROLACountAggregateOutputType> | number
          }
        }
      }
      CHAROLA_CHAROLA: {
        payload: Prisma.$CHAROLA_CHAROLAPayload<ExtArgs>
        fields: Prisma.CHAROLA_CHAROLAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CHAROLA_CHAROLAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_CHAROLAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CHAROLA_CHAROLAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_CHAROLAPayload>
          }
          findFirst: {
            args: Prisma.CHAROLA_CHAROLAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_CHAROLAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CHAROLA_CHAROLAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_CHAROLAPayload>
          }
          findMany: {
            args: Prisma.CHAROLA_CHAROLAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_CHAROLAPayload>[]
          }
          create: {
            args: Prisma.CHAROLA_CHAROLACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_CHAROLAPayload>
          }
          createMany: {
            args: Prisma.CHAROLA_CHAROLACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CHAROLA_CHAROLADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_CHAROLAPayload>
          }
          update: {
            args: Prisma.CHAROLA_CHAROLAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_CHAROLAPayload>
          }
          deleteMany: {
            args: Prisma.CHAROLA_CHAROLADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CHAROLA_CHAROLAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CHAROLA_CHAROLAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_CHAROLAPayload>
          }
          aggregate: {
            args: Prisma.CHAROLA_CHAROLAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCHAROLA_CHAROLA>
          }
          groupBy: {
            args: Prisma.CHAROLA_CHAROLAGroupByArgs<ExtArgs>
            result: $Utils.Optional<CHAROLA_CHAROLAGroupByOutputType>[]
          }
          count: {
            args: Prisma.CHAROLA_CHAROLACountArgs<ExtArgs>
            result: $Utils.Optional<CHAROLA_CHAROLACountAggregateOutputType> | number
          }
        }
      }
      CHAROLA_COMIDA: {
        payload: Prisma.$CHAROLA_COMIDAPayload<ExtArgs>
        fields: Prisma.CHAROLA_COMIDAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CHAROLA_COMIDAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_COMIDAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CHAROLA_COMIDAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_COMIDAPayload>
          }
          findFirst: {
            args: Prisma.CHAROLA_COMIDAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_COMIDAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CHAROLA_COMIDAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_COMIDAPayload>
          }
          findMany: {
            args: Prisma.CHAROLA_COMIDAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_COMIDAPayload>[]
          }
          create: {
            args: Prisma.CHAROLA_COMIDACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_COMIDAPayload>
          }
          createMany: {
            args: Prisma.CHAROLA_COMIDACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CHAROLA_COMIDADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_COMIDAPayload>
          }
          update: {
            args: Prisma.CHAROLA_COMIDAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_COMIDAPayload>
          }
          deleteMany: {
            args: Prisma.CHAROLA_COMIDADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CHAROLA_COMIDAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CHAROLA_COMIDAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_COMIDAPayload>
          }
          aggregate: {
            args: Prisma.CHAROLA_COMIDAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCHAROLA_COMIDA>
          }
          groupBy: {
            args: Prisma.CHAROLA_COMIDAGroupByArgs<ExtArgs>
            result: $Utils.Optional<CHAROLA_COMIDAGroupByOutputType>[]
          }
          count: {
            args: Prisma.CHAROLA_COMIDACountArgs<ExtArgs>
            result: $Utils.Optional<CHAROLA_COMIDACountAggregateOutputType> | number
          }
        }
      }
      CHAROLA_HIDRATACION: {
        payload: Prisma.$CHAROLA_HIDRATACIONPayload<ExtArgs>
        fields: Prisma.CHAROLA_HIDRATACIONFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CHAROLA_HIDRATACIONFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_HIDRATACIONPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CHAROLA_HIDRATACIONFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_HIDRATACIONPayload>
          }
          findFirst: {
            args: Prisma.CHAROLA_HIDRATACIONFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_HIDRATACIONPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CHAROLA_HIDRATACIONFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_HIDRATACIONPayload>
          }
          findMany: {
            args: Prisma.CHAROLA_HIDRATACIONFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_HIDRATACIONPayload>[]
          }
          create: {
            args: Prisma.CHAROLA_HIDRATACIONCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_HIDRATACIONPayload>
          }
          createMany: {
            args: Prisma.CHAROLA_HIDRATACIONCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CHAROLA_HIDRATACIONDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_HIDRATACIONPayload>
          }
          update: {
            args: Prisma.CHAROLA_HIDRATACIONUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_HIDRATACIONPayload>
          }
          deleteMany: {
            args: Prisma.CHAROLA_HIDRATACIONDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CHAROLA_HIDRATACIONUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CHAROLA_HIDRATACIONUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_HIDRATACIONPayload>
          }
          aggregate: {
            args: Prisma.CHAROLA_HIDRATACIONAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCHAROLA_HIDRATACION>
          }
          groupBy: {
            args: Prisma.CHAROLA_HIDRATACIONGroupByArgs<ExtArgs>
            result: $Utils.Optional<CHAROLA_HIDRATACIONGroupByOutputType>[]
          }
          count: {
            args: Prisma.CHAROLA_HIDRATACIONCountArgs<ExtArgs>
            result: $Utils.Optional<CHAROLA_HIDRATACIONCountAggregateOutputType> | number
          }
        }
      }
      COMIDA: {
        payload: Prisma.$COMIDAPayload<ExtArgs>
        fields: Prisma.COMIDAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.COMIDAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMIDAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.COMIDAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMIDAPayload>
          }
          findFirst: {
            args: Prisma.COMIDAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMIDAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.COMIDAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMIDAPayload>
          }
          findMany: {
            args: Prisma.COMIDAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMIDAPayload>[]
          }
          create: {
            args: Prisma.COMIDACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMIDAPayload>
          }
          createMany: {
            args: Prisma.COMIDACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.COMIDADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMIDAPayload>
          }
          update: {
            args: Prisma.COMIDAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMIDAPayload>
          }
          deleteMany: {
            args: Prisma.COMIDADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.COMIDAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.COMIDAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$COMIDAPayload>
          }
          aggregate: {
            args: Prisma.COMIDAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCOMIDA>
          }
          groupBy: {
            args: Prisma.COMIDAGroupByArgs<ExtArgs>
            result: $Utils.Optional<COMIDAGroupByOutputType>[]
          }
          count: {
            args: Prisma.COMIDACountArgs<ExtArgs>
            result: $Utils.Optional<COMIDACountAggregateOutputType> | number
          }
        }
      }
      FRAS: {
        payload: Prisma.$FRASPayload<ExtArgs>
        fields: Prisma.FRASFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FRASFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRASPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FRASFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRASPayload>
          }
          findFirst: {
            args: Prisma.FRASFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRASPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FRASFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRASPayload>
          }
          findMany: {
            args: Prisma.FRASFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRASPayload>[]
          }
          create: {
            args: Prisma.FRASCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRASPayload>
          }
          createMany: {
            args: Prisma.FRASCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FRASDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRASPayload>
          }
          update: {
            args: Prisma.FRASUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRASPayload>
          }
          deleteMany: {
            args: Prisma.FRASDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FRASUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FRASUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FRASPayload>
          }
          aggregate: {
            args: Prisma.FRASAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFRAS>
          }
          groupBy: {
            args: Prisma.FRASGroupByArgs<ExtArgs>
            result: $Utils.Optional<FRASGroupByOutputType>[]
          }
          count: {
            args: Prisma.FRASCountArgs<ExtArgs>
            result: $Utils.Optional<FRASCountAggregateOutputType> | number
          }
        }
      }
      HIDRATACION: {
        payload: Prisma.$HIDRATACIONPayload<ExtArgs>
        fields: Prisma.HIDRATACIONFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HIDRATACIONFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HIDRATACIONPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HIDRATACIONFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HIDRATACIONPayload>
          }
          findFirst: {
            args: Prisma.HIDRATACIONFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HIDRATACIONPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HIDRATACIONFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HIDRATACIONPayload>
          }
          findMany: {
            args: Prisma.HIDRATACIONFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HIDRATACIONPayload>[]
          }
          create: {
            args: Prisma.HIDRATACIONCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HIDRATACIONPayload>
          }
          createMany: {
            args: Prisma.HIDRATACIONCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HIDRATACIONDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HIDRATACIONPayload>
          }
          update: {
            args: Prisma.HIDRATACIONUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HIDRATACIONPayload>
          }
          deleteMany: {
            args: Prisma.HIDRATACIONDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HIDRATACIONUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HIDRATACIONUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HIDRATACIONPayload>
          }
          aggregate: {
            args: Prisma.HIDRATACIONAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHIDRATACION>
          }
          groupBy: {
            args: Prisma.HIDRATACIONGroupByArgs<ExtArgs>
            result: $Utils.Optional<HIDRATACIONGroupByOutputType>[]
          }
          count: {
            args: Prisma.HIDRATACIONCountArgs<ExtArgs>
            result: $Utils.Optional<HIDRATACIONCountAggregateOutputType> | number
          }
        }
      }
      USUARIO: {
        payload: Prisma.$USUARIOPayload<ExtArgs>
        fields: Prisma.USUARIOFieldRefs
        operations: {
          findUnique: {
            args: Prisma.USUARIOFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIOPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.USUARIOFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIOPayload>
          }
          findFirst: {
            args: Prisma.USUARIOFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIOPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.USUARIOFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIOPayload>
          }
          findMany: {
            args: Prisma.USUARIOFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIOPayload>[]
          }
          create: {
            args: Prisma.USUARIOCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIOPayload>
          }
          createMany: {
            args: Prisma.USUARIOCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.USUARIODeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIOPayload>
          }
          update: {
            args: Prisma.USUARIOUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIOPayload>
          }
          deleteMany: {
            args: Prisma.USUARIODeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.USUARIOUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.USUARIOUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIOPayload>
          }
          aggregate: {
            args: Prisma.USUARIOAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUSUARIO>
          }
          groupBy: {
            args: Prisma.USUARIOGroupByArgs<ExtArgs>
            result: $Utils.Optional<USUARIOGroupByOutputType>[]
          }
          count: {
            args: Prisma.USUARIOCountArgs<ExtArgs>
            result: $Utils.Optional<USUARIOCountAggregateOutputType> | number
          }
        }
      }
      USUARIO_CHAROLA: {
        payload: Prisma.$USUARIO_CHAROLAPayload<ExtArgs>
        fields: Prisma.USUARIO_CHAROLAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.USUARIO_CHAROLAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIO_CHAROLAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.USUARIO_CHAROLAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIO_CHAROLAPayload>
          }
          findFirst: {
            args: Prisma.USUARIO_CHAROLAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIO_CHAROLAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.USUARIO_CHAROLAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIO_CHAROLAPayload>
          }
          findMany: {
            args: Prisma.USUARIO_CHAROLAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIO_CHAROLAPayload>[]
          }
          create: {
            args: Prisma.USUARIO_CHAROLACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIO_CHAROLAPayload>
          }
          createMany: {
            args: Prisma.USUARIO_CHAROLACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.USUARIO_CHAROLADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIO_CHAROLAPayload>
          }
          update: {
            args: Prisma.USUARIO_CHAROLAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIO_CHAROLAPayload>
          }
          deleteMany: {
            args: Prisma.USUARIO_CHAROLADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.USUARIO_CHAROLAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.USUARIO_CHAROLAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$USUARIO_CHAROLAPayload>
          }
          aggregate: {
            args: Prisma.USUARIO_CHAROLAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUSUARIO_CHAROLA>
          }
          groupBy: {
            args: Prisma.USUARIO_CHAROLAGroupByArgs<ExtArgs>
            result: $Utils.Optional<USUARIO_CHAROLAGroupByOutputType>[]
          }
          count: {
            args: Prisma.USUARIO_CHAROLACountArgs<ExtArgs>
            result: $Utils.Optional<USUARIO_CHAROLACountAggregateOutputType> | number
          }
        }
      }
      CHAROLA_FRAS: {
        payload: Prisma.$CHAROLA_FRASPayload<ExtArgs>
        fields: Prisma.CHAROLA_FRASFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CHAROLA_FRASFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_FRASPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CHAROLA_FRASFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_FRASPayload>
          }
          findFirst: {
            args: Prisma.CHAROLA_FRASFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_FRASPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CHAROLA_FRASFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_FRASPayload>
          }
          findMany: {
            args: Prisma.CHAROLA_FRASFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_FRASPayload>[]
          }
          create: {
            args: Prisma.CHAROLA_FRASCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_FRASPayload>
          }
          createMany: {
            args: Prisma.CHAROLA_FRASCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CHAROLA_FRASDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_FRASPayload>
          }
          update: {
            args: Prisma.CHAROLA_FRASUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_FRASPayload>
          }
          deleteMany: {
            args: Prisma.CHAROLA_FRASDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CHAROLA_FRASUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CHAROLA_FRASUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_FRASPayload>
          }
          aggregate: {
            args: Prisma.CHAROLA_FRASAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCHAROLA_FRAS>
          }
          groupBy: {
            args: Prisma.CHAROLA_FRASGroupByArgs<ExtArgs>
            result: $Utils.Optional<CHAROLA_FRASGroupByOutputType>[]
          }
          count: {
            args: Prisma.CHAROLA_FRASCountArgs<ExtArgs>
            result: $Utils.Optional<CHAROLA_FRASCountAggregateOutputType> | number
          }
        }
      }
      CHAROLA_PUPA: {
        payload: Prisma.$CHAROLA_PUPAPayload<ExtArgs>
        fields: Prisma.CHAROLA_PUPAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CHAROLA_PUPAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_PUPAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CHAROLA_PUPAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_PUPAPayload>
          }
          findFirst: {
            args: Prisma.CHAROLA_PUPAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_PUPAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CHAROLA_PUPAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_PUPAPayload>
          }
          findMany: {
            args: Prisma.CHAROLA_PUPAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_PUPAPayload>[]
          }
          create: {
            args: Prisma.CHAROLA_PUPACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_PUPAPayload>
          }
          createMany: {
            args: Prisma.CHAROLA_PUPACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CHAROLA_PUPADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_PUPAPayload>
          }
          update: {
            args: Prisma.CHAROLA_PUPAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_PUPAPayload>
          }
          deleteMany: {
            args: Prisma.CHAROLA_PUPADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CHAROLA_PUPAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CHAROLA_PUPAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CHAROLA_PUPAPayload>
          }
          aggregate: {
            args: Prisma.CHAROLA_PUPAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCHAROLA_PUPA>
          }
          groupBy: {
            args: Prisma.CHAROLA_PUPAGroupByArgs<ExtArgs>
            result: $Utils.Optional<CHAROLA_PUPAGroupByOutputType>[]
          }
          count: {
            args: Prisma.CHAROLA_PUPACountArgs<ExtArgs>
            result: $Utils.Optional<CHAROLA_PUPACountAggregateOutputType> | number
          }
        }
      }
      PUPA: {
        payload: Prisma.$PUPAPayload<ExtArgs>
        fields: Prisma.PUPAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PUPAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PUPAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PUPAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PUPAPayload>
          }
          findFirst: {
            args: Prisma.PUPAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PUPAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PUPAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PUPAPayload>
          }
          findMany: {
            args: Prisma.PUPAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PUPAPayload>[]
          }
          create: {
            args: Prisma.PUPACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PUPAPayload>
          }
          createMany: {
            args: Prisma.PUPACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PUPADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PUPAPayload>
          }
          update: {
            args: Prisma.PUPAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PUPAPayload>
          }
          deleteMany: {
            args: Prisma.PUPADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PUPAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PUPAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PUPAPayload>
          }
          aggregate: {
            args: Prisma.PUPAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePUPA>
          }
          groupBy: {
            args: Prisma.PUPAGroupByArgs<ExtArgs>
            result: $Utils.Optional<PUPAGroupByOutputType>[]
          }
          count: {
            args: Prisma.PUPACountArgs<ExtArgs>
            result: $Utils.Optional<PUPACountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    aDMINISTRADOR?: ADMINISTRADOROmit
    cHAROLA?: CHAROLAOmit
    cHAROLA_CHAROLA?: CHAROLA_CHAROLAOmit
    cHAROLA_COMIDA?: CHAROLA_COMIDAOmit
    cHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONOmit
    cOMIDA?: COMIDAOmit
    fRAS?: FRASOmit
    hIDRATACION?: HIDRATACIONOmit
    uSUARIO?: USUARIOOmit
    uSUARIO_CHAROLA?: USUARIO_CHAROLAOmit
    cHAROLA_FRAS?: CHAROLA_FRASOmit
    cHAROLA_PUPA?: CHAROLA_PUPAOmit
    pUPA?: PUPAOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CHAROLACountOutputType
   */

  export type CHAROLACountOutputType = {
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA: number
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA: number
    CHAROLA_COMIDA: number
    CHAROLA_FRAS: number
    CHAROLA_HIDRATACION: number
    CHAROLA_PUPA: number
    FRAS: number
    USUARIO_CHAROLA: number
  }

  export type CHAROLACountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: boolean | CHAROLACountOutputTypeCountCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAArgs
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: boolean | CHAROLACountOutputTypeCountCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAArgs
    CHAROLA_COMIDA?: boolean | CHAROLACountOutputTypeCountCHAROLA_COMIDAArgs
    CHAROLA_FRAS?: boolean | CHAROLACountOutputTypeCountCHAROLA_FRASArgs
    CHAROLA_HIDRATACION?: boolean | CHAROLACountOutputTypeCountCHAROLA_HIDRATACIONArgs
    CHAROLA_PUPA?: boolean | CHAROLACountOutputTypeCountCHAROLA_PUPAArgs
    FRAS?: boolean | CHAROLACountOutputTypeCountFRASArgs
    USUARIO_CHAROLA?: boolean | CHAROLACountOutputTypeCountUSUARIO_CHAROLAArgs
  }

  // Custom InputTypes
  /**
   * CHAROLACountOutputType without action
   */
  export type CHAROLACountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLACountOutputType
     */
    select?: CHAROLACountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CHAROLACountOutputType without action
   */
  export type CHAROLACountOutputTypeCountCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_CHAROLAWhereInput
  }

  /**
   * CHAROLACountOutputType without action
   */
  export type CHAROLACountOutputTypeCountCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_CHAROLAWhereInput
  }

  /**
   * CHAROLACountOutputType without action
   */
  export type CHAROLACountOutputTypeCountCHAROLA_COMIDAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_COMIDAWhereInput
  }

  /**
   * CHAROLACountOutputType without action
   */
  export type CHAROLACountOutputTypeCountCHAROLA_FRASArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_FRASWhereInput
  }

  /**
   * CHAROLACountOutputType without action
   */
  export type CHAROLACountOutputTypeCountCHAROLA_HIDRATACIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_HIDRATACIONWhereInput
  }

  /**
   * CHAROLACountOutputType without action
   */
  export type CHAROLACountOutputTypeCountCHAROLA_PUPAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_PUPAWhereInput
  }

  /**
   * CHAROLACountOutputType without action
   */
  export type CHAROLACountOutputTypeCountFRASArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FRASWhereInput
  }

  /**
   * CHAROLACountOutputType without action
   */
  export type CHAROLACountOutputTypeCountUSUARIO_CHAROLAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: USUARIO_CHAROLAWhereInput
  }


  /**
   * Count Type COMIDACountOutputType
   */

  export type COMIDACountOutputType = {
    CHAROLA_COMIDA: number
  }

  export type COMIDACountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA_COMIDA?: boolean | COMIDACountOutputTypeCountCHAROLA_COMIDAArgs
  }

  // Custom InputTypes
  /**
   * COMIDACountOutputType without action
   */
  export type COMIDACountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMIDACountOutputType
     */
    select?: COMIDACountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * COMIDACountOutputType without action
   */
  export type COMIDACountOutputTypeCountCHAROLA_COMIDAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_COMIDAWhereInput
  }


  /**
   * Count Type FRASCountOutputType
   */

  export type FRASCountOutputType = {
    CHAROLA_FRAS: number
  }

  export type FRASCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA_FRAS?: boolean | FRASCountOutputTypeCountCHAROLA_FRASArgs
  }

  // Custom InputTypes
  /**
   * FRASCountOutputType without action
   */
  export type FRASCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRASCountOutputType
     */
    select?: FRASCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FRASCountOutputType without action
   */
  export type FRASCountOutputTypeCountCHAROLA_FRASArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_FRASWhereInput
  }


  /**
   * Count Type HIDRATACIONCountOutputType
   */

  export type HIDRATACIONCountOutputType = {
    CHAROLA_HIDRATACION: number
  }

  export type HIDRATACIONCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA_HIDRATACION?: boolean | HIDRATACIONCountOutputTypeCountCHAROLA_HIDRATACIONArgs
  }

  // Custom InputTypes
  /**
   * HIDRATACIONCountOutputType without action
   */
  export type HIDRATACIONCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HIDRATACIONCountOutputType
     */
    select?: HIDRATACIONCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HIDRATACIONCountOutputType without action
   */
  export type HIDRATACIONCountOutputTypeCountCHAROLA_HIDRATACIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_HIDRATACIONWhereInput
  }


  /**
   * Count Type USUARIOCountOutputType
   */

  export type USUARIOCountOutputType = {
    ADMINISTRADOR: number
    USUARIO_CHAROLA: number
  }

  export type USUARIOCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ADMINISTRADOR?: boolean | USUARIOCountOutputTypeCountADMINISTRADORArgs
    USUARIO_CHAROLA?: boolean | USUARIOCountOutputTypeCountUSUARIO_CHAROLAArgs
  }

  // Custom InputTypes
  /**
   * USUARIOCountOutputType without action
   */
  export type USUARIOCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIOCountOutputType
     */
    select?: USUARIOCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * USUARIOCountOutputType without action
   */
  export type USUARIOCountOutputTypeCountADMINISTRADORArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ADMINISTRADORWhereInput
  }

  /**
   * USUARIOCountOutputType without action
   */
  export type USUARIOCountOutputTypeCountUSUARIO_CHAROLAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: USUARIO_CHAROLAWhereInput
  }


  /**
   * Count Type PUPACountOutputType
   */

  export type PUPACountOutputType = {
    CHAROLA_PUPA: number
  }

  export type PUPACountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA_PUPA?: boolean | PUPACountOutputTypeCountCHAROLA_PUPAArgs
  }

  // Custom InputTypes
  /**
   * PUPACountOutputType without action
   */
  export type PUPACountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PUPACountOutputType
     */
    select?: PUPACountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PUPACountOutputType without action
   */
  export type PUPACountOutputTypeCountCHAROLA_PUPAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_PUPAWhereInput
  }


  /**
   * Models
   */

  /**
   * Model ADMINISTRADOR
   */

  export type AggregateADMINISTRADOR = {
    _count: ADMINISTRADORCountAggregateOutputType | null
    _avg: ADMINISTRADORAvgAggregateOutputType | null
    _sum: ADMINISTRADORSumAggregateOutputType | null
    _min: ADMINISTRADORMinAggregateOutputType | null
    _max: ADMINISTRADORMaxAggregateOutputType | null
  }

  export type ADMINISTRADORAvgAggregateOutputType = {
    adminId: number | null
    usuarioId: number | null
  }

  export type ADMINISTRADORSumAggregateOutputType = {
    adminId: number | null
    usuarioId: number | null
  }

  export type ADMINISTRADORMinAggregateOutputType = {
    adminId: number | null
    usuarioId: number | null
  }

  export type ADMINISTRADORMaxAggregateOutputType = {
    adminId: number | null
    usuarioId: number | null
  }

  export type ADMINISTRADORCountAggregateOutputType = {
    adminId: number
    usuarioId: number
    _all: number
  }


  export type ADMINISTRADORAvgAggregateInputType = {
    adminId?: true
    usuarioId?: true
  }

  export type ADMINISTRADORSumAggregateInputType = {
    adminId?: true
    usuarioId?: true
  }

  export type ADMINISTRADORMinAggregateInputType = {
    adminId?: true
    usuarioId?: true
  }

  export type ADMINISTRADORMaxAggregateInputType = {
    adminId?: true
    usuarioId?: true
  }

  export type ADMINISTRADORCountAggregateInputType = {
    adminId?: true
    usuarioId?: true
    _all?: true
  }

  export type ADMINISTRADORAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ADMINISTRADOR to aggregate.
     */
    where?: ADMINISTRADORWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ADMINISTRADORS to fetch.
     */
    orderBy?: ADMINISTRADOROrderByWithRelationInput | ADMINISTRADOROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ADMINISTRADORWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ADMINISTRADORS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ADMINISTRADORS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ADMINISTRADORS
    **/
    _count?: true | ADMINISTRADORCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ADMINISTRADORAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ADMINISTRADORSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ADMINISTRADORMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ADMINISTRADORMaxAggregateInputType
  }

  export type GetADMINISTRADORAggregateType<T extends ADMINISTRADORAggregateArgs> = {
        [P in keyof T & keyof AggregateADMINISTRADOR]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateADMINISTRADOR[P]>
      : GetScalarType<T[P], AggregateADMINISTRADOR[P]>
  }




  export type ADMINISTRADORGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ADMINISTRADORWhereInput
    orderBy?: ADMINISTRADOROrderByWithAggregationInput | ADMINISTRADOROrderByWithAggregationInput[]
    by: ADMINISTRADORScalarFieldEnum[] | ADMINISTRADORScalarFieldEnum
    having?: ADMINISTRADORScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ADMINISTRADORCountAggregateInputType | true
    _avg?: ADMINISTRADORAvgAggregateInputType
    _sum?: ADMINISTRADORSumAggregateInputType
    _min?: ADMINISTRADORMinAggregateInputType
    _max?: ADMINISTRADORMaxAggregateInputType
  }

  export type ADMINISTRADORGroupByOutputType = {
    adminId: number
    usuarioId: number | null
    _count: ADMINISTRADORCountAggregateOutputType | null
    _avg: ADMINISTRADORAvgAggregateOutputType | null
    _sum: ADMINISTRADORSumAggregateOutputType | null
    _min: ADMINISTRADORMinAggregateOutputType | null
    _max: ADMINISTRADORMaxAggregateOutputType | null
  }

  type GetADMINISTRADORGroupByPayload<T extends ADMINISTRADORGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ADMINISTRADORGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ADMINISTRADORGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ADMINISTRADORGroupByOutputType[P]>
            : GetScalarType<T[P], ADMINISTRADORGroupByOutputType[P]>
        }
      >
    >


  export type ADMINISTRADORSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    adminId?: boolean
    usuarioId?: boolean
    USUARIO?: boolean | ADMINISTRADOR$USUARIOArgs<ExtArgs>
  }, ExtArgs["result"]["aDMINISTRADOR"]>



  export type ADMINISTRADORSelectScalar = {
    adminId?: boolean
    usuarioId?: boolean
  }

  export type ADMINISTRADOROmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"adminId" | "usuarioId", ExtArgs["result"]["aDMINISTRADOR"]>
  export type ADMINISTRADORInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    USUARIO?: boolean | ADMINISTRADOR$USUARIOArgs<ExtArgs>
  }

  export type $ADMINISTRADORPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ADMINISTRADOR"
    objects: {
      USUARIO: Prisma.$USUARIOPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      adminId: number
      usuarioId: number | null
    }, ExtArgs["result"]["aDMINISTRADOR"]>
    composites: {}
  }

  type ADMINISTRADORGetPayload<S extends boolean | null | undefined | ADMINISTRADORDefaultArgs> = $Result.GetResult<Prisma.$ADMINISTRADORPayload, S>

  type ADMINISTRADORCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ADMINISTRADORFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ADMINISTRADORCountAggregateInputType | true
    }

  export interface ADMINISTRADORDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ADMINISTRADOR'], meta: { name: 'ADMINISTRADOR' } }
    /**
     * Find zero or one ADMINISTRADOR that matches the filter.
     * @param {ADMINISTRADORFindUniqueArgs} args - Arguments to find a ADMINISTRADOR
     * @example
     * // Get one ADMINISTRADOR
     * const aDMINISTRADOR = await prisma.aDMINISTRADOR.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ADMINISTRADORFindUniqueArgs>(args: SelectSubset<T, ADMINISTRADORFindUniqueArgs<ExtArgs>>): Prisma__ADMINISTRADORClient<$Result.GetResult<Prisma.$ADMINISTRADORPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ADMINISTRADOR that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ADMINISTRADORFindUniqueOrThrowArgs} args - Arguments to find a ADMINISTRADOR
     * @example
     * // Get one ADMINISTRADOR
     * const aDMINISTRADOR = await prisma.aDMINISTRADOR.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ADMINISTRADORFindUniqueOrThrowArgs>(args: SelectSubset<T, ADMINISTRADORFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ADMINISTRADORClient<$Result.GetResult<Prisma.$ADMINISTRADORPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ADMINISTRADOR that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADMINISTRADORFindFirstArgs} args - Arguments to find a ADMINISTRADOR
     * @example
     * // Get one ADMINISTRADOR
     * const aDMINISTRADOR = await prisma.aDMINISTRADOR.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ADMINISTRADORFindFirstArgs>(args?: SelectSubset<T, ADMINISTRADORFindFirstArgs<ExtArgs>>): Prisma__ADMINISTRADORClient<$Result.GetResult<Prisma.$ADMINISTRADORPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ADMINISTRADOR that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADMINISTRADORFindFirstOrThrowArgs} args - Arguments to find a ADMINISTRADOR
     * @example
     * // Get one ADMINISTRADOR
     * const aDMINISTRADOR = await prisma.aDMINISTRADOR.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ADMINISTRADORFindFirstOrThrowArgs>(args?: SelectSubset<T, ADMINISTRADORFindFirstOrThrowArgs<ExtArgs>>): Prisma__ADMINISTRADORClient<$Result.GetResult<Prisma.$ADMINISTRADORPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ADMINISTRADORS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADMINISTRADORFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ADMINISTRADORS
     * const aDMINISTRADORS = await prisma.aDMINISTRADOR.findMany()
     * 
     * // Get first 10 ADMINISTRADORS
     * const aDMINISTRADORS = await prisma.aDMINISTRADOR.findMany({ take: 10 })
     * 
     * // Only select the `adminId`
     * const aDMINISTRADORWithAdminIdOnly = await prisma.aDMINISTRADOR.findMany({ select: { adminId: true } })
     * 
     */
    findMany<T extends ADMINISTRADORFindManyArgs>(args?: SelectSubset<T, ADMINISTRADORFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ADMINISTRADORPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ADMINISTRADOR.
     * @param {ADMINISTRADORCreateArgs} args - Arguments to create a ADMINISTRADOR.
     * @example
     * // Create one ADMINISTRADOR
     * const ADMINISTRADOR = await prisma.aDMINISTRADOR.create({
     *   data: {
     *     // ... data to create a ADMINISTRADOR
     *   }
     * })
     * 
     */
    create<T extends ADMINISTRADORCreateArgs>(args: SelectSubset<T, ADMINISTRADORCreateArgs<ExtArgs>>): Prisma__ADMINISTRADORClient<$Result.GetResult<Prisma.$ADMINISTRADORPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ADMINISTRADORS.
     * @param {ADMINISTRADORCreateManyArgs} args - Arguments to create many ADMINISTRADORS.
     * @example
     * // Create many ADMINISTRADORS
     * const aDMINISTRADOR = await prisma.aDMINISTRADOR.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ADMINISTRADORCreateManyArgs>(args?: SelectSubset<T, ADMINISTRADORCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ADMINISTRADOR.
     * @param {ADMINISTRADORDeleteArgs} args - Arguments to delete one ADMINISTRADOR.
     * @example
     * // Delete one ADMINISTRADOR
     * const ADMINISTRADOR = await prisma.aDMINISTRADOR.delete({
     *   where: {
     *     // ... filter to delete one ADMINISTRADOR
     *   }
     * })
     * 
     */
    delete<T extends ADMINISTRADORDeleteArgs>(args: SelectSubset<T, ADMINISTRADORDeleteArgs<ExtArgs>>): Prisma__ADMINISTRADORClient<$Result.GetResult<Prisma.$ADMINISTRADORPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ADMINISTRADOR.
     * @param {ADMINISTRADORUpdateArgs} args - Arguments to update one ADMINISTRADOR.
     * @example
     * // Update one ADMINISTRADOR
     * const aDMINISTRADOR = await prisma.aDMINISTRADOR.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ADMINISTRADORUpdateArgs>(args: SelectSubset<T, ADMINISTRADORUpdateArgs<ExtArgs>>): Prisma__ADMINISTRADORClient<$Result.GetResult<Prisma.$ADMINISTRADORPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ADMINISTRADORS.
     * @param {ADMINISTRADORDeleteManyArgs} args - Arguments to filter ADMINISTRADORS to delete.
     * @example
     * // Delete a few ADMINISTRADORS
     * const { count } = await prisma.aDMINISTRADOR.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ADMINISTRADORDeleteManyArgs>(args?: SelectSubset<T, ADMINISTRADORDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ADMINISTRADORS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADMINISTRADORUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ADMINISTRADORS
     * const aDMINISTRADOR = await prisma.aDMINISTRADOR.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ADMINISTRADORUpdateManyArgs>(args: SelectSubset<T, ADMINISTRADORUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ADMINISTRADOR.
     * @param {ADMINISTRADORUpsertArgs} args - Arguments to update or create a ADMINISTRADOR.
     * @example
     * // Update or create a ADMINISTRADOR
     * const aDMINISTRADOR = await prisma.aDMINISTRADOR.upsert({
     *   create: {
     *     // ... data to create a ADMINISTRADOR
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ADMINISTRADOR we want to update
     *   }
     * })
     */
    upsert<T extends ADMINISTRADORUpsertArgs>(args: SelectSubset<T, ADMINISTRADORUpsertArgs<ExtArgs>>): Prisma__ADMINISTRADORClient<$Result.GetResult<Prisma.$ADMINISTRADORPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ADMINISTRADORS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADMINISTRADORCountArgs} args - Arguments to filter ADMINISTRADORS to count.
     * @example
     * // Count the number of ADMINISTRADORS
     * const count = await prisma.aDMINISTRADOR.count({
     *   where: {
     *     // ... the filter for the ADMINISTRADORS we want to count
     *   }
     * })
    **/
    count<T extends ADMINISTRADORCountArgs>(
      args?: Subset<T, ADMINISTRADORCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ADMINISTRADORCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ADMINISTRADOR.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADMINISTRADORAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ADMINISTRADORAggregateArgs>(args: Subset<T, ADMINISTRADORAggregateArgs>): Prisma.PrismaPromise<GetADMINISTRADORAggregateType<T>>

    /**
     * Group by ADMINISTRADOR.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ADMINISTRADORGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ADMINISTRADORGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ADMINISTRADORGroupByArgs['orderBy'] }
        : { orderBy?: ADMINISTRADORGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ADMINISTRADORGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetADMINISTRADORGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ADMINISTRADOR model
   */
  readonly fields: ADMINISTRADORFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ADMINISTRADOR.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ADMINISTRADORClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    USUARIO<T extends ADMINISTRADOR$USUARIOArgs<ExtArgs> = {}>(args?: Subset<T, ADMINISTRADOR$USUARIOArgs<ExtArgs>>): Prisma__USUARIOClient<$Result.GetResult<Prisma.$USUARIOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ADMINISTRADOR model
   */
  interface ADMINISTRADORFieldRefs {
    readonly adminId: FieldRef<"ADMINISTRADOR", 'Int'>
    readonly usuarioId: FieldRef<"ADMINISTRADOR", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ADMINISTRADOR findUnique
   */
  export type ADMINISTRADORFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRADOR
     */
    select?: ADMINISTRADORSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRADOR
     */
    omit?: ADMINISTRADOROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRADORInclude<ExtArgs> | null
    /**
     * Filter, which ADMINISTRADOR to fetch.
     */
    where: ADMINISTRADORWhereUniqueInput
  }

  /**
   * ADMINISTRADOR findUniqueOrThrow
   */
  export type ADMINISTRADORFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRADOR
     */
    select?: ADMINISTRADORSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRADOR
     */
    omit?: ADMINISTRADOROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRADORInclude<ExtArgs> | null
    /**
     * Filter, which ADMINISTRADOR to fetch.
     */
    where: ADMINISTRADORWhereUniqueInput
  }

  /**
   * ADMINISTRADOR findFirst
   */
  export type ADMINISTRADORFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRADOR
     */
    select?: ADMINISTRADORSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRADOR
     */
    omit?: ADMINISTRADOROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRADORInclude<ExtArgs> | null
    /**
     * Filter, which ADMINISTRADOR to fetch.
     */
    where?: ADMINISTRADORWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ADMINISTRADORS to fetch.
     */
    orderBy?: ADMINISTRADOROrderByWithRelationInput | ADMINISTRADOROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ADMINISTRADORS.
     */
    cursor?: ADMINISTRADORWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ADMINISTRADORS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ADMINISTRADORS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ADMINISTRADORS.
     */
    distinct?: ADMINISTRADORScalarFieldEnum | ADMINISTRADORScalarFieldEnum[]
  }

  /**
   * ADMINISTRADOR findFirstOrThrow
   */
  export type ADMINISTRADORFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRADOR
     */
    select?: ADMINISTRADORSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRADOR
     */
    omit?: ADMINISTRADOROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRADORInclude<ExtArgs> | null
    /**
     * Filter, which ADMINISTRADOR to fetch.
     */
    where?: ADMINISTRADORWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ADMINISTRADORS to fetch.
     */
    orderBy?: ADMINISTRADOROrderByWithRelationInput | ADMINISTRADOROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ADMINISTRADORS.
     */
    cursor?: ADMINISTRADORWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ADMINISTRADORS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ADMINISTRADORS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ADMINISTRADORS.
     */
    distinct?: ADMINISTRADORScalarFieldEnum | ADMINISTRADORScalarFieldEnum[]
  }

  /**
   * ADMINISTRADOR findMany
   */
  export type ADMINISTRADORFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRADOR
     */
    select?: ADMINISTRADORSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRADOR
     */
    omit?: ADMINISTRADOROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRADORInclude<ExtArgs> | null
    /**
     * Filter, which ADMINISTRADORS to fetch.
     */
    where?: ADMINISTRADORWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ADMINISTRADORS to fetch.
     */
    orderBy?: ADMINISTRADOROrderByWithRelationInput | ADMINISTRADOROrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ADMINISTRADORS.
     */
    cursor?: ADMINISTRADORWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ADMINISTRADORS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ADMINISTRADORS.
     */
    skip?: number
    distinct?: ADMINISTRADORScalarFieldEnum | ADMINISTRADORScalarFieldEnum[]
  }

  /**
   * ADMINISTRADOR create
   */
  export type ADMINISTRADORCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRADOR
     */
    select?: ADMINISTRADORSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRADOR
     */
    omit?: ADMINISTRADOROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRADORInclude<ExtArgs> | null
    /**
     * The data needed to create a ADMINISTRADOR.
     */
    data?: XOR<ADMINISTRADORCreateInput, ADMINISTRADORUncheckedCreateInput>
  }

  /**
   * ADMINISTRADOR createMany
   */
  export type ADMINISTRADORCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ADMINISTRADORS.
     */
    data: ADMINISTRADORCreateManyInput | ADMINISTRADORCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ADMINISTRADOR update
   */
  export type ADMINISTRADORUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRADOR
     */
    select?: ADMINISTRADORSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRADOR
     */
    omit?: ADMINISTRADOROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRADORInclude<ExtArgs> | null
    /**
     * The data needed to update a ADMINISTRADOR.
     */
    data: XOR<ADMINISTRADORUpdateInput, ADMINISTRADORUncheckedUpdateInput>
    /**
     * Choose, which ADMINISTRADOR to update.
     */
    where: ADMINISTRADORWhereUniqueInput
  }

  /**
   * ADMINISTRADOR updateMany
   */
  export type ADMINISTRADORUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ADMINISTRADORS.
     */
    data: XOR<ADMINISTRADORUpdateManyMutationInput, ADMINISTRADORUncheckedUpdateManyInput>
    /**
     * Filter which ADMINISTRADORS to update
     */
    where?: ADMINISTRADORWhereInput
    /**
     * Limit how many ADMINISTRADORS to update.
     */
    limit?: number
  }

  /**
   * ADMINISTRADOR upsert
   */
  export type ADMINISTRADORUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRADOR
     */
    select?: ADMINISTRADORSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRADOR
     */
    omit?: ADMINISTRADOROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRADORInclude<ExtArgs> | null
    /**
     * The filter to search for the ADMINISTRADOR to update in case it exists.
     */
    where: ADMINISTRADORWhereUniqueInput
    /**
     * In case the ADMINISTRADOR found by the `where` argument doesn't exist, create a new ADMINISTRADOR with this data.
     */
    create: XOR<ADMINISTRADORCreateInput, ADMINISTRADORUncheckedCreateInput>
    /**
     * In case the ADMINISTRADOR was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ADMINISTRADORUpdateInput, ADMINISTRADORUncheckedUpdateInput>
  }

  /**
   * ADMINISTRADOR delete
   */
  export type ADMINISTRADORDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRADOR
     */
    select?: ADMINISTRADORSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRADOR
     */
    omit?: ADMINISTRADOROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRADORInclude<ExtArgs> | null
    /**
     * Filter which ADMINISTRADOR to delete.
     */
    where: ADMINISTRADORWhereUniqueInput
  }

  /**
   * ADMINISTRADOR deleteMany
   */
  export type ADMINISTRADORDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ADMINISTRADORS to delete
     */
    where?: ADMINISTRADORWhereInput
    /**
     * Limit how many ADMINISTRADORS to delete.
     */
    limit?: number
  }

  /**
   * ADMINISTRADOR.USUARIO
   */
  export type ADMINISTRADOR$USUARIOArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO
     */
    select?: USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO
     */
    omit?: USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIOInclude<ExtArgs> | null
    where?: USUARIOWhereInput
  }

  /**
   * ADMINISTRADOR without action
   */
  export type ADMINISTRADORDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRADOR
     */
    select?: ADMINISTRADORSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRADOR
     */
    omit?: ADMINISTRADOROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRADORInclude<ExtArgs> | null
  }


  /**
   * Model CHAROLA
   */

  export type AggregateCHAROLA = {
    _count: CHAROLACountAggregateOutputType | null
    _avg: CHAROLAAvgAggregateOutputType | null
    _sum: CHAROLASumAggregateOutputType | null
    _min: CHAROLAMinAggregateOutputType | null
    _max: CHAROLAMaxAggregateOutputType | null
  }

  export type CHAROLAAvgAggregateOutputType = {
    charolaId: number | null
    comidaCiclo: number | null
    hidratacionCiclo: number | null
    densidadLarva: number | null
    pesoCharola: number | null
  }

  export type CHAROLASumAggregateOutputType = {
    charolaId: number | null
    comidaCiclo: number | null
    hidratacionCiclo: number | null
    densidadLarva: number | null
    pesoCharola: number | null
  }

  export type CHAROLAMinAggregateOutputType = {
    charolaId: number | null
    nombreCharola: string | null
    comidaCiclo: number | null
    hidratacionCiclo: number | null
    fechaActualizacion: Date | null
    estado: string | null
    densidadLarva: number | null
    fechaCreacion: Date | null
    pesoCharola: number | null
  }

  export type CHAROLAMaxAggregateOutputType = {
    charolaId: number | null
    nombreCharola: string | null
    comidaCiclo: number | null
    hidratacionCiclo: number | null
    fechaActualizacion: Date | null
    estado: string | null
    densidadLarva: number | null
    fechaCreacion: Date | null
    pesoCharola: number | null
  }

  export type CHAROLACountAggregateOutputType = {
    charolaId: number
    nombreCharola: number
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion: number
    estado: number
    densidadLarva: number
    fechaCreacion: number
    pesoCharola: number
    _all: number
  }


  export type CHAROLAAvgAggregateInputType = {
    charolaId?: true
    comidaCiclo?: true
    hidratacionCiclo?: true
    densidadLarva?: true
    pesoCharola?: true
  }

  export type CHAROLASumAggregateInputType = {
    charolaId?: true
    comidaCiclo?: true
    hidratacionCiclo?: true
    densidadLarva?: true
    pesoCharola?: true
  }

  export type CHAROLAMinAggregateInputType = {
    charolaId?: true
    nombreCharola?: true
    comidaCiclo?: true
    hidratacionCiclo?: true
    fechaActualizacion?: true
    estado?: true
    densidadLarva?: true
    fechaCreacion?: true
    pesoCharola?: true
  }

  export type CHAROLAMaxAggregateInputType = {
    charolaId?: true
    nombreCharola?: true
    comidaCiclo?: true
    hidratacionCiclo?: true
    fechaActualizacion?: true
    estado?: true
    densidadLarva?: true
    fechaCreacion?: true
    pesoCharola?: true
  }

  export type CHAROLACountAggregateInputType = {
    charolaId?: true
    nombreCharola?: true
    comidaCiclo?: true
    hidratacionCiclo?: true
    fechaActualizacion?: true
    estado?: true
    densidadLarva?: true
    fechaCreacion?: true
    pesoCharola?: true
    _all?: true
  }

  export type CHAROLAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CHAROLA to aggregate.
     */
    where?: CHAROLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLAS to fetch.
     */
    orderBy?: CHAROLAOrderByWithRelationInput | CHAROLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CHAROLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CHAROLAS
    **/
    _count?: true | CHAROLACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CHAROLAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CHAROLASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CHAROLAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CHAROLAMaxAggregateInputType
  }

  export type GetCHAROLAAggregateType<T extends CHAROLAAggregateArgs> = {
        [P in keyof T & keyof AggregateCHAROLA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCHAROLA[P]>
      : GetScalarType<T[P], AggregateCHAROLA[P]>
  }




  export type CHAROLAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLAWhereInput
    orderBy?: CHAROLAOrderByWithAggregationInput | CHAROLAOrderByWithAggregationInput[]
    by: CHAROLAScalarFieldEnum[] | CHAROLAScalarFieldEnum
    having?: CHAROLAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CHAROLACountAggregateInputType | true
    _avg?: CHAROLAAvgAggregateInputType
    _sum?: CHAROLASumAggregateInputType
    _min?: CHAROLAMinAggregateInputType
    _max?: CHAROLAMaxAggregateInputType
  }

  export type CHAROLAGroupByOutputType = {
    charolaId: number
    nombreCharola: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion: Date | null
    estado: string | null
    densidadLarva: number | null
    fechaCreacion: Date | null
    pesoCharola: number | null
    _count: CHAROLACountAggregateOutputType | null
    _avg: CHAROLAAvgAggregateOutputType | null
    _sum: CHAROLASumAggregateOutputType | null
    _min: CHAROLAMinAggregateOutputType | null
    _max: CHAROLAMaxAggregateOutputType | null
  }

  type GetCHAROLAGroupByPayload<T extends CHAROLAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CHAROLAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CHAROLAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CHAROLAGroupByOutputType[P]>
            : GetScalarType<T[P], CHAROLAGroupByOutputType[P]>
        }
      >
    >


  export type CHAROLASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    charolaId?: boolean
    nombreCharola?: boolean
    comidaCiclo?: boolean
    hidratacionCiclo?: boolean
    fechaActualizacion?: boolean
    estado?: boolean
    densidadLarva?: boolean
    fechaCreacion?: boolean
    pesoCharola?: boolean
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: boolean | CHAROLA$CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAArgs<ExtArgs>
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: boolean | CHAROLA$CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAArgs<ExtArgs>
    CHAROLA_COMIDA?: boolean | CHAROLA$CHAROLA_COMIDAArgs<ExtArgs>
    CHAROLA_FRAS?: boolean | CHAROLA$CHAROLA_FRASArgs<ExtArgs>
    CHAROLA_HIDRATACION?: boolean | CHAROLA$CHAROLA_HIDRATACIONArgs<ExtArgs>
    CHAROLA_PUPA?: boolean | CHAROLA$CHAROLA_PUPAArgs<ExtArgs>
    FRAS?: boolean | CHAROLA$FRASArgs<ExtArgs>
    USUARIO_CHAROLA?: boolean | CHAROLA$USUARIO_CHAROLAArgs<ExtArgs>
    _count?: boolean | CHAROLACountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cHAROLA"]>



  export type CHAROLASelectScalar = {
    charolaId?: boolean
    nombreCharola?: boolean
    comidaCiclo?: boolean
    hidratacionCiclo?: boolean
    fechaActualizacion?: boolean
    estado?: boolean
    densidadLarva?: boolean
    fechaCreacion?: boolean
    pesoCharola?: boolean
  }

  export type CHAROLAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"charolaId" | "nombreCharola" | "comidaCiclo" | "hidratacionCiclo" | "fechaActualizacion" | "estado" | "densidadLarva" | "fechaCreacion" | "pesoCharola", ExtArgs["result"]["cHAROLA"]>
  export type CHAROLAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: boolean | CHAROLA$CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAArgs<ExtArgs>
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: boolean | CHAROLA$CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAArgs<ExtArgs>
    CHAROLA_COMIDA?: boolean | CHAROLA$CHAROLA_COMIDAArgs<ExtArgs>
    CHAROLA_FRAS?: boolean | CHAROLA$CHAROLA_FRASArgs<ExtArgs>
    CHAROLA_HIDRATACION?: boolean | CHAROLA$CHAROLA_HIDRATACIONArgs<ExtArgs>
    CHAROLA_PUPA?: boolean | CHAROLA$CHAROLA_PUPAArgs<ExtArgs>
    FRAS?: boolean | CHAROLA$FRASArgs<ExtArgs>
    USUARIO_CHAROLA?: boolean | CHAROLA$USUARIO_CHAROLAArgs<ExtArgs>
    _count?: boolean | CHAROLACountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CHAROLAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CHAROLA"
    objects: {
      CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA: Prisma.$CHAROLA_CHAROLAPayload<ExtArgs>[]
      CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA: Prisma.$CHAROLA_CHAROLAPayload<ExtArgs>[]
      CHAROLA_COMIDA: Prisma.$CHAROLA_COMIDAPayload<ExtArgs>[]
      CHAROLA_FRAS: Prisma.$CHAROLA_FRASPayload<ExtArgs>[]
      CHAROLA_HIDRATACION: Prisma.$CHAROLA_HIDRATACIONPayload<ExtArgs>[]
      CHAROLA_PUPA: Prisma.$CHAROLA_PUPAPayload<ExtArgs>[]
      FRAS: Prisma.$FRASPayload<ExtArgs>[]
      USUARIO_CHAROLA: Prisma.$USUARIO_CHAROLAPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      charolaId: number
      nombreCharola: string | null
      comidaCiclo: number
      hidratacionCiclo: number
      fechaActualizacion: Date | null
      estado: string | null
      densidadLarva: number | null
      fechaCreacion: Date | null
      pesoCharola: number | null
    }, ExtArgs["result"]["cHAROLA"]>
    composites: {}
  }

  type CHAROLAGetPayload<S extends boolean | null | undefined | CHAROLADefaultArgs> = $Result.GetResult<Prisma.$CHAROLAPayload, S>

  type CHAROLACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CHAROLAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CHAROLACountAggregateInputType | true
    }

  export interface CHAROLADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CHAROLA'], meta: { name: 'CHAROLA' } }
    /**
     * Find zero or one CHAROLA that matches the filter.
     * @param {CHAROLAFindUniqueArgs} args - Arguments to find a CHAROLA
     * @example
     * // Get one CHAROLA
     * const cHAROLA = await prisma.cHAROLA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CHAROLAFindUniqueArgs>(args: SelectSubset<T, CHAROLAFindUniqueArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CHAROLA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CHAROLAFindUniqueOrThrowArgs} args - Arguments to find a CHAROLA
     * @example
     * // Get one CHAROLA
     * const cHAROLA = await prisma.cHAROLA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CHAROLAFindUniqueOrThrowArgs>(args: SelectSubset<T, CHAROLAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CHAROLA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLAFindFirstArgs} args - Arguments to find a CHAROLA
     * @example
     * // Get one CHAROLA
     * const cHAROLA = await prisma.cHAROLA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CHAROLAFindFirstArgs>(args?: SelectSubset<T, CHAROLAFindFirstArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CHAROLA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLAFindFirstOrThrowArgs} args - Arguments to find a CHAROLA
     * @example
     * // Get one CHAROLA
     * const cHAROLA = await prisma.cHAROLA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CHAROLAFindFirstOrThrowArgs>(args?: SelectSubset<T, CHAROLAFindFirstOrThrowArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CHAROLAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CHAROLAS
     * const cHAROLAS = await prisma.cHAROLA.findMany()
     * 
     * // Get first 10 CHAROLAS
     * const cHAROLAS = await prisma.cHAROLA.findMany({ take: 10 })
     * 
     * // Only select the `charolaId`
     * const cHAROLAWithCharolaIdOnly = await prisma.cHAROLA.findMany({ select: { charolaId: true } })
     * 
     */
    findMany<T extends CHAROLAFindManyArgs>(args?: SelectSubset<T, CHAROLAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CHAROLA.
     * @param {CHAROLACreateArgs} args - Arguments to create a CHAROLA.
     * @example
     * // Create one CHAROLA
     * const CHAROLA = await prisma.cHAROLA.create({
     *   data: {
     *     // ... data to create a CHAROLA
     *   }
     * })
     * 
     */
    create<T extends CHAROLACreateArgs>(args: SelectSubset<T, CHAROLACreateArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CHAROLAS.
     * @param {CHAROLACreateManyArgs} args - Arguments to create many CHAROLAS.
     * @example
     * // Create many CHAROLAS
     * const cHAROLA = await prisma.cHAROLA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CHAROLACreateManyArgs>(args?: SelectSubset<T, CHAROLACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CHAROLA.
     * @param {CHAROLADeleteArgs} args - Arguments to delete one CHAROLA.
     * @example
     * // Delete one CHAROLA
     * const CHAROLA = await prisma.cHAROLA.delete({
     *   where: {
     *     // ... filter to delete one CHAROLA
     *   }
     * })
     * 
     */
    delete<T extends CHAROLADeleteArgs>(args: SelectSubset<T, CHAROLADeleteArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CHAROLA.
     * @param {CHAROLAUpdateArgs} args - Arguments to update one CHAROLA.
     * @example
     * // Update one CHAROLA
     * const cHAROLA = await prisma.cHAROLA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CHAROLAUpdateArgs>(args: SelectSubset<T, CHAROLAUpdateArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CHAROLAS.
     * @param {CHAROLADeleteManyArgs} args - Arguments to filter CHAROLAS to delete.
     * @example
     * // Delete a few CHAROLAS
     * const { count } = await prisma.cHAROLA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CHAROLADeleteManyArgs>(args?: SelectSubset<T, CHAROLADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CHAROLAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CHAROLAS
     * const cHAROLA = await prisma.cHAROLA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CHAROLAUpdateManyArgs>(args: SelectSubset<T, CHAROLAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CHAROLA.
     * @param {CHAROLAUpsertArgs} args - Arguments to update or create a CHAROLA.
     * @example
     * // Update or create a CHAROLA
     * const cHAROLA = await prisma.cHAROLA.upsert({
     *   create: {
     *     // ... data to create a CHAROLA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CHAROLA we want to update
     *   }
     * })
     */
    upsert<T extends CHAROLAUpsertArgs>(args: SelectSubset<T, CHAROLAUpsertArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CHAROLAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLACountArgs} args - Arguments to filter CHAROLAS to count.
     * @example
     * // Count the number of CHAROLAS
     * const count = await prisma.cHAROLA.count({
     *   where: {
     *     // ... the filter for the CHAROLAS we want to count
     *   }
     * })
    **/
    count<T extends CHAROLACountArgs>(
      args?: Subset<T, CHAROLACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CHAROLACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CHAROLA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CHAROLAAggregateArgs>(args: Subset<T, CHAROLAAggregateArgs>): Prisma.PrismaPromise<GetCHAROLAAggregateType<T>>

    /**
     * Group by CHAROLA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CHAROLAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CHAROLAGroupByArgs['orderBy'] }
        : { orderBy?: CHAROLAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CHAROLAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCHAROLAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CHAROLA model
   */
  readonly fields: CHAROLAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CHAROLA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CHAROLAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA<T extends CHAROLA$CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLA$CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_CHAROLAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA<T extends CHAROLA$CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLA$CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_CHAROLAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CHAROLA_COMIDA<T extends CHAROLA$CHAROLA_COMIDAArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLA$CHAROLA_COMIDAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_COMIDAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CHAROLA_FRAS<T extends CHAROLA$CHAROLA_FRASArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLA$CHAROLA_FRASArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_FRASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CHAROLA_HIDRATACION<T extends CHAROLA$CHAROLA_HIDRATACIONArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLA$CHAROLA_HIDRATACIONArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_HIDRATACIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CHAROLA_PUPA<T extends CHAROLA$CHAROLA_PUPAArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLA$CHAROLA_PUPAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_PUPAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    FRAS<T extends CHAROLA$FRASArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLA$FRASArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FRASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    USUARIO_CHAROLA<T extends CHAROLA$USUARIO_CHAROLAArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLA$USUARIO_CHAROLAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USUARIO_CHAROLAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CHAROLA model
   */
  interface CHAROLAFieldRefs {
    readonly charolaId: FieldRef<"CHAROLA", 'Int'>
    readonly nombreCharola: FieldRef<"CHAROLA", 'String'>
    readonly comidaCiclo: FieldRef<"CHAROLA", 'Float'>
    readonly hidratacionCiclo: FieldRef<"CHAROLA", 'Float'>
    readonly fechaActualizacion: FieldRef<"CHAROLA", 'DateTime'>
    readonly estado: FieldRef<"CHAROLA", 'String'>
    readonly densidadLarva: FieldRef<"CHAROLA", 'Float'>
    readonly fechaCreacion: FieldRef<"CHAROLA", 'DateTime'>
    readonly pesoCharola: FieldRef<"CHAROLA", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CHAROLA findUnique
   */
  export type CHAROLAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA
     */
    select?: CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA
     */
    omit?: CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA to fetch.
     */
    where: CHAROLAWhereUniqueInput
  }

  /**
   * CHAROLA findUniqueOrThrow
   */
  export type CHAROLAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA
     */
    select?: CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA
     */
    omit?: CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA to fetch.
     */
    where: CHAROLAWhereUniqueInput
  }

  /**
   * CHAROLA findFirst
   */
  export type CHAROLAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA
     */
    select?: CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA
     */
    omit?: CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA to fetch.
     */
    where?: CHAROLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLAS to fetch.
     */
    orderBy?: CHAROLAOrderByWithRelationInput | CHAROLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CHAROLAS.
     */
    cursor?: CHAROLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CHAROLAS.
     */
    distinct?: CHAROLAScalarFieldEnum | CHAROLAScalarFieldEnum[]
  }

  /**
   * CHAROLA findFirstOrThrow
   */
  export type CHAROLAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA
     */
    select?: CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA
     */
    omit?: CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA to fetch.
     */
    where?: CHAROLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLAS to fetch.
     */
    orderBy?: CHAROLAOrderByWithRelationInput | CHAROLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CHAROLAS.
     */
    cursor?: CHAROLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CHAROLAS.
     */
    distinct?: CHAROLAScalarFieldEnum | CHAROLAScalarFieldEnum[]
  }

  /**
   * CHAROLA findMany
   */
  export type CHAROLAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA
     */
    select?: CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA
     */
    omit?: CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLAS to fetch.
     */
    where?: CHAROLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLAS to fetch.
     */
    orderBy?: CHAROLAOrderByWithRelationInput | CHAROLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CHAROLAS.
     */
    cursor?: CHAROLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLAS.
     */
    skip?: number
    distinct?: CHAROLAScalarFieldEnum | CHAROLAScalarFieldEnum[]
  }

  /**
   * CHAROLA create
   */
  export type CHAROLACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA
     */
    select?: CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA
     */
    omit?: CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLAInclude<ExtArgs> | null
    /**
     * The data needed to create a CHAROLA.
     */
    data: XOR<CHAROLACreateInput, CHAROLAUncheckedCreateInput>
  }

  /**
   * CHAROLA createMany
   */
  export type CHAROLACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CHAROLAS.
     */
    data: CHAROLACreateManyInput | CHAROLACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CHAROLA update
   */
  export type CHAROLAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA
     */
    select?: CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA
     */
    omit?: CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLAInclude<ExtArgs> | null
    /**
     * The data needed to update a CHAROLA.
     */
    data: XOR<CHAROLAUpdateInput, CHAROLAUncheckedUpdateInput>
    /**
     * Choose, which CHAROLA to update.
     */
    where: CHAROLAWhereUniqueInput
  }

  /**
   * CHAROLA updateMany
   */
  export type CHAROLAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CHAROLAS.
     */
    data: XOR<CHAROLAUpdateManyMutationInput, CHAROLAUncheckedUpdateManyInput>
    /**
     * Filter which CHAROLAS to update
     */
    where?: CHAROLAWhereInput
    /**
     * Limit how many CHAROLAS to update.
     */
    limit?: number
  }

  /**
   * CHAROLA upsert
   */
  export type CHAROLAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA
     */
    select?: CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA
     */
    omit?: CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLAInclude<ExtArgs> | null
    /**
     * The filter to search for the CHAROLA to update in case it exists.
     */
    where: CHAROLAWhereUniqueInput
    /**
     * In case the CHAROLA found by the `where` argument doesn't exist, create a new CHAROLA with this data.
     */
    create: XOR<CHAROLACreateInput, CHAROLAUncheckedCreateInput>
    /**
     * In case the CHAROLA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CHAROLAUpdateInput, CHAROLAUncheckedUpdateInput>
  }

  /**
   * CHAROLA delete
   */
  export type CHAROLADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA
     */
    select?: CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA
     */
    omit?: CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLAInclude<ExtArgs> | null
    /**
     * Filter which CHAROLA to delete.
     */
    where: CHAROLAWhereUniqueInput
  }

  /**
   * CHAROLA deleteMany
   */
  export type CHAROLADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CHAROLAS to delete
     */
    where?: CHAROLAWhereInput
    /**
     * Limit how many CHAROLAS to delete.
     */
    limit?: number
  }

  /**
   * CHAROLA.CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA
   */
  export type CHAROLA$CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_CHAROLA
     */
    select?: CHAROLA_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_CHAROLA
     */
    omit?: CHAROLA_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_CHAROLAInclude<ExtArgs> | null
    where?: CHAROLA_CHAROLAWhereInput
    orderBy?: CHAROLA_CHAROLAOrderByWithRelationInput | CHAROLA_CHAROLAOrderByWithRelationInput[]
    cursor?: CHAROLA_CHAROLAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CHAROLA_CHAROLAScalarFieldEnum | CHAROLA_CHAROLAScalarFieldEnum[]
  }

  /**
   * CHAROLA.CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA
   */
  export type CHAROLA$CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_CHAROLA
     */
    select?: CHAROLA_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_CHAROLA
     */
    omit?: CHAROLA_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_CHAROLAInclude<ExtArgs> | null
    where?: CHAROLA_CHAROLAWhereInput
    orderBy?: CHAROLA_CHAROLAOrderByWithRelationInput | CHAROLA_CHAROLAOrderByWithRelationInput[]
    cursor?: CHAROLA_CHAROLAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CHAROLA_CHAROLAScalarFieldEnum | CHAROLA_CHAROLAScalarFieldEnum[]
  }

  /**
   * CHAROLA.CHAROLA_COMIDA
   */
  export type CHAROLA$CHAROLA_COMIDAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_COMIDA
     */
    select?: CHAROLA_COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_COMIDA
     */
    omit?: CHAROLA_COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_COMIDAInclude<ExtArgs> | null
    where?: CHAROLA_COMIDAWhereInput
    orderBy?: CHAROLA_COMIDAOrderByWithRelationInput | CHAROLA_COMIDAOrderByWithRelationInput[]
    cursor?: CHAROLA_COMIDAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CHAROLA_COMIDAScalarFieldEnum | CHAROLA_COMIDAScalarFieldEnum[]
  }

  /**
   * CHAROLA.CHAROLA_FRAS
   */
  export type CHAROLA$CHAROLA_FRASArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_FRAS
     */
    select?: CHAROLA_FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_FRAS
     */
    omit?: CHAROLA_FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_FRASInclude<ExtArgs> | null
    where?: CHAROLA_FRASWhereInput
    orderBy?: CHAROLA_FRASOrderByWithRelationInput | CHAROLA_FRASOrderByWithRelationInput[]
    cursor?: CHAROLA_FRASWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CHAROLA_FRASScalarFieldEnum | CHAROLA_FRASScalarFieldEnum[]
  }

  /**
   * CHAROLA.CHAROLA_HIDRATACION
   */
  export type CHAROLA$CHAROLA_HIDRATACIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_HIDRATACION
     */
    select?: CHAROLA_HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_HIDRATACION
     */
    omit?: CHAROLA_HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_HIDRATACIONInclude<ExtArgs> | null
    where?: CHAROLA_HIDRATACIONWhereInput
    orderBy?: CHAROLA_HIDRATACIONOrderByWithRelationInput | CHAROLA_HIDRATACIONOrderByWithRelationInput[]
    cursor?: CHAROLA_HIDRATACIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CHAROLA_HIDRATACIONScalarFieldEnum | CHAROLA_HIDRATACIONScalarFieldEnum[]
  }

  /**
   * CHAROLA.CHAROLA_PUPA
   */
  export type CHAROLA$CHAROLA_PUPAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_PUPA
     */
    select?: CHAROLA_PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_PUPA
     */
    omit?: CHAROLA_PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_PUPAInclude<ExtArgs> | null
    where?: CHAROLA_PUPAWhereInput
    orderBy?: CHAROLA_PUPAOrderByWithRelationInput | CHAROLA_PUPAOrderByWithRelationInput[]
    cursor?: CHAROLA_PUPAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CHAROLA_PUPAScalarFieldEnum | CHAROLA_PUPAScalarFieldEnum[]
  }

  /**
   * CHAROLA.FRAS
   */
  export type CHAROLA$FRASArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRAS
     */
    select?: FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FRAS
     */
    omit?: FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FRASInclude<ExtArgs> | null
    where?: FRASWhereInput
    orderBy?: FRASOrderByWithRelationInput | FRASOrderByWithRelationInput[]
    cursor?: FRASWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FRASScalarFieldEnum | FRASScalarFieldEnum[]
  }

  /**
   * CHAROLA.USUARIO_CHAROLA
   */
  export type CHAROLA$USUARIO_CHAROLAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO_CHAROLA
     */
    select?: USUARIO_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO_CHAROLA
     */
    omit?: USUARIO_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIO_CHAROLAInclude<ExtArgs> | null
    where?: USUARIO_CHAROLAWhereInput
    orderBy?: USUARIO_CHAROLAOrderByWithRelationInput | USUARIO_CHAROLAOrderByWithRelationInput[]
    cursor?: USUARIO_CHAROLAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: USUARIO_CHAROLAScalarFieldEnum | USUARIO_CHAROLAScalarFieldEnum[]
  }

  /**
   * CHAROLA without action
   */
  export type CHAROLADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA
     */
    select?: CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA
     */
    omit?: CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLAInclude<ExtArgs> | null
  }


  /**
   * Model CHAROLA_CHAROLA
   */

  export type AggregateCHAROLA_CHAROLA = {
    _count: CHAROLA_CHAROLACountAggregateOutputType | null
    _avg: CHAROLA_CHAROLAAvgAggregateOutputType | null
    _sum: CHAROLA_CHAROLASumAggregateOutputType | null
    _min: CHAROLA_CHAROLAMinAggregateOutputType | null
    _max: CHAROLA_CHAROLAMaxAggregateOutputType | null
  }

  export type CHAROLA_CHAROLAAvgAggregateOutputType = {
    charolaHija: number | null
    charolaAncestro: number | null
  }

  export type CHAROLA_CHAROLASumAggregateOutputType = {
    charolaHija: number | null
    charolaAncestro: number | null
  }

  export type CHAROLA_CHAROLAMinAggregateOutputType = {
    charolaHija: number | null
    charolaAncestro: number | null
  }

  export type CHAROLA_CHAROLAMaxAggregateOutputType = {
    charolaHija: number | null
    charolaAncestro: number | null
  }

  export type CHAROLA_CHAROLACountAggregateOutputType = {
    charolaHija: number
    charolaAncestro: number
    _all: number
  }


  export type CHAROLA_CHAROLAAvgAggregateInputType = {
    charolaHija?: true
    charolaAncestro?: true
  }

  export type CHAROLA_CHAROLASumAggregateInputType = {
    charolaHija?: true
    charolaAncestro?: true
  }

  export type CHAROLA_CHAROLAMinAggregateInputType = {
    charolaHija?: true
    charolaAncestro?: true
  }

  export type CHAROLA_CHAROLAMaxAggregateInputType = {
    charolaHija?: true
    charolaAncestro?: true
  }

  export type CHAROLA_CHAROLACountAggregateInputType = {
    charolaHija?: true
    charolaAncestro?: true
    _all?: true
  }

  export type CHAROLA_CHAROLAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CHAROLA_CHAROLA to aggregate.
     */
    where?: CHAROLA_CHAROLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_CHAROLAS to fetch.
     */
    orderBy?: CHAROLA_CHAROLAOrderByWithRelationInput | CHAROLA_CHAROLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CHAROLA_CHAROLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_CHAROLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_CHAROLAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CHAROLA_CHAROLAS
    **/
    _count?: true | CHAROLA_CHAROLACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CHAROLA_CHAROLAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CHAROLA_CHAROLASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CHAROLA_CHAROLAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CHAROLA_CHAROLAMaxAggregateInputType
  }

  export type GetCHAROLA_CHAROLAAggregateType<T extends CHAROLA_CHAROLAAggregateArgs> = {
        [P in keyof T & keyof AggregateCHAROLA_CHAROLA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCHAROLA_CHAROLA[P]>
      : GetScalarType<T[P], AggregateCHAROLA_CHAROLA[P]>
  }




  export type CHAROLA_CHAROLAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_CHAROLAWhereInput
    orderBy?: CHAROLA_CHAROLAOrderByWithAggregationInput | CHAROLA_CHAROLAOrderByWithAggregationInput[]
    by: CHAROLA_CHAROLAScalarFieldEnum[] | CHAROLA_CHAROLAScalarFieldEnum
    having?: CHAROLA_CHAROLAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CHAROLA_CHAROLACountAggregateInputType | true
    _avg?: CHAROLA_CHAROLAAvgAggregateInputType
    _sum?: CHAROLA_CHAROLASumAggregateInputType
    _min?: CHAROLA_CHAROLAMinAggregateInputType
    _max?: CHAROLA_CHAROLAMaxAggregateInputType
  }

  export type CHAROLA_CHAROLAGroupByOutputType = {
    charolaHija: number
    charolaAncestro: number
    _count: CHAROLA_CHAROLACountAggregateOutputType | null
    _avg: CHAROLA_CHAROLAAvgAggregateOutputType | null
    _sum: CHAROLA_CHAROLASumAggregateOutputType | null
    _min: CHAROLA_CHAROLAMinAggregateOutputType | null
    _max: CHAROLA_CHAROLAMaxAggregateOutputType | null
  }

  type GetCHAROLA_CHAROLAGroupByPayload<T extends CHAROLA_CHAROLAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CHAROLA_CHAROLAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CHAROLA_CHAROLAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CHAROLA_CHAROLAGroupByOutputType[P]>
            : GetScalarType<T[P], CHAROLA_CHAROLAGroupByOutputType[P]>
        }
      >
    >


  export type CHAROLA_CHAROLASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    charolaHija?: boolean
    charolaAncestro?: boolean
    CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: boolean | CHAROLADefaultArgs<ExtArgs>
    CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: boolean | CHAROLADefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cHAROLA_CHAROLA"]>



  export type CHAROLA_CHAROLASelectScalar = {
    charolaHija?: boolean
    charolaAncestro?: boolean
  }

  export type CHAROLA_CHAROLAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"charolaHija" | "charolaAncestro", ExtArgs["result"]["cHAROLA_CHAROLA"]>
  export type CHAROLA_CHAROLAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: boolean | CHAROLADefaultArgs<ExtArgs>
    CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: boolean | CHAROLADefaultArgs<ExtArgs>
  }

  export type $CHAROLA_CHAROLAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CHAROLA_CHAROLA"
    objects: {
      CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA: Prisma.$CHAROLAPayload<ExtArgs>
      CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA: Prisma.$CHAROLAPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      charolaHija: number
      charolaAncestro: number
    }, ExtArgs["result"]["cHAROLA_CHAROLA"]>
    composites: {}
  }

  type CHAROLA_CHAROLAGetPayload<S extends boolean | null | undefined | CHAROLA_CHAROLADefaultArgs> = $Result.GetResult<Prisma.$CHAROLA_CHAROLAPayload, S>

  type CHAROLA_CHAROLACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CHAROLA_CHAROLAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CHAROLA_CHAROLACountAggregateInputType | true
    }

  export interface CHAROLA_CHAROLADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CHAROLA_CHAROLA'], meta: { name: 'CHAROLA_CHAROLA' } }
    /**
     * Find zero or one CHAROLA_CHAROLA that matches the filter.
     * @param {CHAROLA_CHAROLAFindUniqueArgs} args - Arguments to find a CHAROLA_CHAROLA
     * @example
     * // Get one CHAROLA_CHAROLA
     * const cHAROLA_CHAROLA = await prisma.cHAROLA_CHAROLA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CHAROLA_CHAROLAFindUniqueArgs>(args: SelectSubset<T, CHAROLA_CHAROLAFindUniqueArgs<ExtArgs>>): Prisma__CHAROLA_CHAROLAClient<$Result.GetResult<Prisma.$CHAROLA_CHAROLAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CHAROLA_CHAROLA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CHAROLA_CHAROLAFindUniqueOrThrowArgs} args - Arguments to find a CHAROLA_CHAROLA
     * @example
     * // Get one CHAROLA_CHAROLA
     * const cHAROLA_CHAROLA = await prisma.cHAROLA_CHAROLA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CHAROLA_CHAROLAFindUniqueOrThrowArgs>(args: SelectSubset<T, CHAROLA_CHAROLAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CHAROLA_CHAROLAClient<$Result.GetResult<Prisma.$CHAROLA_CHAROLAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CHAROLA_CHAROLA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_CHAROLAFindFirstArgs} args - Arguments to find a CHAROLA_CHAROLA
     * @example
     * // Get one CHAROLA_CHAROLA
     * const cHAROLA_CHAROLA = await prisma.cHAROLA_CHAROLA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CHAROLA_CHAROLAFindFirstArgs>(args?: SelectSubset<T, CHAROLA_CHAROLAFindFirstArgs<ExtArgs>>): Prisma__CHAROLA_CHAROLAClient<$Result.GetResult<Prisma.$CHAROLA_CHAROLAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CHAROLA_CHAROLA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_CHAROLAFindFirstOrThrowArgs} args - Arguments to find a CHAROLA_CHAROLA
     * @example
     * // Get one CHAROLA_CHAROLA
     * const cHAROLA_CHAROLA = await prisma.cHAROLA_CHAROLA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CHAROLA_CHAROLAFindFirstOrThrowArgs>(args?: SelectSubset<T, CHAROLA_CHAROLAFindFirstOrThrowArgs<ExtArgs>>): Prisma__CHAROLA_CHAROLAClient<$Result.GetResult<Prisma.$CHAROLA_CHAROLAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CHAROLA_CHAROLAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_CHAROLAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CHAROLA_CHAROLAS
     * const cHAROLA_CHAROLAS = await prisma.cHAROLA_CHAROLA.findMany()
     * 
     * // Get first 10 CHAROLA_CHAROLAS
     * const cHAROLA_CHAROLAS = await prisma.cHAROLA_CHAROLA.findMany({ take: 10 })
     * 
     * // Only select the `charolaHija`
     * const cHAROLA_CHAROLAWithCharolaHijaOnly = await prisma.cHAROLA_CHAROLA.findMany({ select: { charolaHija: true } })
     * 
     */
    findMany<T extends CHAROLA_CHAROLAFindManyArgs>(args?: SelectSubset<T, CHAROLA_CHAROLAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_CHAROLAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CHAROLA_CHAROLA.
     * @param {CHAROLA_CHAROLACreateArgs} args - Arguments to create a CHAROLA_CHAROLA.
     * @example
     * // Create one CHAROLA_CHAROLA
     * const CHAROLA_CHAROLA = await prisma.cHAROLA_CHAROLA.create({
     *   data: {
     *     // ... data to create a CHAROLA_CHAROLA
     *   }
     * })
     * 
     */
    create<T extends CHAROLA_CHAROLACreateArgs>(args: SelectSubset<T, CHAROLA_CHAROLACreateArgs<ExtArgs>>): Prisma__CHAROLA_CHAROLAClient<$Result.GetResult<Prisma.$CHAROLA_CHAROLAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CHAROLA_CHAROLAS.
     * @param {CHAROLA_CHAROLACreateManyArgs} args - Arguments to create many CHAROLA_CHAROLAS.
     * @example
     * // Create many CHAROLA_CHAROLAS
     * const cHAROLA_CHAROLA = await prisma.cHAROLA_CHAROLA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CHAROLA_CHAROLACreateManyArgs>(args?: SelectSubset<T, CHAROLA_CHAROLACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CHAROLA_CHAROLA.
     * @param {CHAROLA_CHAROLADeleteArgs} args - Arguments to delete one CHAROLA_CHAROLA.
     * @example
     * // Delete one CHAROLA_CHAROLA
     * const CHAROLA_CHAROLA = await prisma.cHAROLA_CHAROLA.delete({
     *   where: {
     *     // ... filter to delete one CHAROLA_CHAROLA
     *   }
     * })
     * 
     */
    delete<T extends CHAROLA_CHAROLADeleteArgs>(args: SelectSubset<T, CHAROLA_CHAROLADeleteArgs<ExtArgs>>): Prisma__CHAROLA_CHAROLAClient<$Result.GetResult<Prisma.$CHAROLA_CHAROLAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CHAROLA_CHAROLA.
     * @param {CHAROLA_CHAROLAUpdateArgs} args - Arguments to update one CHAROLA_CHAROLA.
     * @example
     * // Update one CHAROLA_CHAROLA
     * const cHAROLA_CHAROLA = await prisma.cHAROLA_CHAROLA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CHAROLA_CHAROLAUpdateArgs>(args: SelectSubset<T, CHAROLA_CHAROLAUpdateArgs<ExtArgs>>): Prisma__CHAROLA_CHAROLAClient<$Result.GetResult<Prisma.$CHAROLA_CHAROLAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CHAROLA_CHAROLAS.
     * @param {CHAROLA_CHAROLADeleteManyArgs} args - Arguments to filter CHAROLA_CHAROLAS to delete.
     * @example
     * // Delete a few CHAROLA_CHAROLAS
     * const { count } = await prisma.cHAROLA_CHAROLA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CHAROLA_CHAROLADeleteManyArgs>(args?: SelectSubset<T, CHAROLA_CHAROLADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CHAROLA_CHAROLAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_CHAROLAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CHAROLA_CHAROLAS
     * const cHAROLA_CHAROLA = await prisma.cHAROLA_CHAROLA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CHAROLA_CHAROLAUpdateManyArgs>(args: SelectSubset<T, CHAROLA_CHAROLAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CHAROLA_CHAROLA.
     * @param {CHAROLA_CHAROLAUpsertArgs} args - Arguments to update or create a CHAROLA_CHAROLA.
     * @example
     * // Update or create a CHAROLA_CHAROLA
     * const cHAROLA_CHAROLA = await prisma.cHAROLA_CHAROLA.upsert({
     *   create: {
     *     // ... data to create a CHAROLA_CHAROLA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CHAROLA_CHAROLA we want to update
     *   }
     * })
     */
    upsert<T extends CHAROLA_CHAROLAUpsertArgs>(args: SelectSubset<T, CHAROLA_CHAROLAUpsertArgs<ExtArgs>>): Prisma__CHAROLA_CHAROLAClient<$Result.GetResult<Prisma.$CHAROLA_CHAROLAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CHAROLA_CHAROLAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_CHAROLACountArgs} args - Arguments to filter CHAROLA_CHAROLAS to count.
     * @example
     * // Count the number of CHAROLA_CHAROLAS
     * const count = await prisma.cHAROLA_CHAROLA.count({
     *   where: {
     *     // ... the filter for the CHAROLA_CHAROLAS we want to count
     *   }
     * })
    **/
    count<T extends CHAROLA_CHAROLACountArgs>(
      args?: Subset<T, CHAROLA_CHAROLACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CHAROLA_CHAROLACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CHAROLA_CHAROLA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_CHAROLAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CHAROLA_CHAROLAAggregateArgs>(args: Subset<T, CHAROLA_CHAROLAAggregateArgs>): Prisma.PrismaPromise<GetCHAROLA_CHAROLAAggregateType<T>>

    /**
     * Group by CHAROLA_CHAROLA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_CHAROLAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CHAROLA_CHAROLAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CHAROLA_CHAROLAGroupByArgs['orderBy'] }
        : { orderBy?: CHAROLA_CHAROLAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CHAROLA_CHAROLAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCHAROLA_CHAROLAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CHAROLA_CHAROLA model
   */
  readonly fields: CHAROLA_CHAROLAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CHAROLA_CHAROLA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CHAROLA_CHAROLAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA<T extends CHAROLADefaultArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLADefaultArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA<T extends CHAROLADefaultArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLADefaultArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CHAROLA_CHAROLA model
   */
  interface CHAROLA_CHAROLAFieldRefs {
    readonly charolaHija: FieldRef<"CHAROLA_CHAROLA", 'Int'>
    readonly charolaAncestro: FieldRef<"CHAROLA_CHAROLA", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CHAROLA_CHAROLA findUnique
   */
  export type CHAROLA_CHAROLAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_CHAROLA
     */
    select?: CHAROLA_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_CHAROLA
     */
    omit?: CHAROLA_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_CHAROLA to fetch.
     */
    where: CHAROLA_CHAROLAWhereUniqueInput
  }

  /**
   * CHAROLA_CHAROLA findUniqueOrThrow
   */
  export type CHAROLA_CHAROLAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_CHAROLA
     */
    select?: CHAROLA_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_CHAROLA
     */
    omit?: CHAROLA_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_CHAROLA to fetch.
     */
    where: CHAROLA_CHAROLAWhereUniqueInput
  }

  /**
   * CHAROLA_CHAROLA findFirst
   */
  export type CHAROLA_CHAROLAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_CHAROLA
     */
    select?: CHAROLA_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_CHAROLA
     */
    omit?: CHAROLA_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_CHAROLA to fetch.
     */
    where?: CHAROLA_CHAROLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_CHAROLAS to fetch.
     */
    orderBy?: CHAROLA_CHAROLAOrderByWithRelationInput | CHAROLA_CHAROLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CHAROLA_CHAROLAS.
     */
    cursor?: CHAROLA_CHAROLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_CHAROLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_CHAROLAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CHAROLA_CHAROLAS.
     */
    distinct?: CHAROLA_CHAROLAScalarFieldEnum | CHAROLA_CHAROLAScalarFieldEnum[]
  }

  /**
   * CHAROLA_CHAROLA findFirstOrThrow
   */
  export type CHAROLA_CHAROLAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_CHAROLA
     */
    select?: CHAROLA_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_CHAROLA
     */
    omit?: CHAROLA_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_CHAROLA to fetch.
     */
    where?: CHAROLA_CHAROLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_CHAROLAS to fetch.
     */
    orderBy?: CHAROLA_CHAROLAOrderByWithRelationInput | CHAROLA_CHAROLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CHAROLA_CHAROLAS.
     */
    cursor?: CHAROLA_CHAROLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_CHAROLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_CHAROLAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CHAROLA_CHAROLAS.
     */
    distinct?: CHAROLA_CHAROLAScalarFieldEnum | CHAROLA_CHAROLAScalarFieldEnum[]
  }

  /**
   * CHAROLA_CHAROLA findMany
   */
  export type CHAROLA_CHAROLAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_CHAROLA
     */
    select?: CHAROLA_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_CHAROLA
     */
    omit?: CHAROLA_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_CHAROLAS to fetch.
     */
    where?: CHAROLA_CHAROLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_CHAROLAS to fetch.
     */
    orderBy?: CHAROLA_CHAROLAOrderByWithRelationInput | CHAROLA_CHAROLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CHAROLA_CHAROLAS.
     */
    cursor?: CHAROLA_CHAROLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_CHAROLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_CHAROLAS.
     */
    skip?: number
    distinct?: CHAROLA_CHAROLAScalarFieldEnum | CHAROLA_CHAROLAScalarFieldEnum[]
  }

  /**
   * CHAROLA_CHAROLA create
   */
  export type CHAROLA_CHAROLACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_CHAROLA
     */
    select?: CHAROLA_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_CHAROLA
     */
    omit?: CHAROLA_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_CHAROLAInclude<ExtArgs> | null
    /**
     * The data needed to create a CHAROLA_CHAROLA.
     */
    data: XOR<CHAROLA_CHAROLACreateInput, CHAROLA_CHAROLAUncheckedCreateInput>
  }

  /**
   * CHAROLA_CHAROLA createMany
   */
  export type CHAROLA_CHAROLACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CHAROLA_CHAROLAS.
     */
    data: CHAROLA_CHAROLACreateManyInput | CHAROLA_CHAROLACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CHAROLA_CHAROLA update
   */
  export type CHAROLA_CHAROLAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_CHAROLA
     */
    select?: CHAROLA_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_CHAROLA
     */
    omit?: CHAROLA_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_CHAROLAInclude<ExtArgs> | null
    /**
     * The data needed to update a CHAROLA_CHAROLA.
     */
    data: XOR<CHAROLA_CHAROLAUpdateInput, CHAROLA_CHAROLAUncheckedUpdateInput>
    /**
     * Choose, which CHAROLA_CHAROLA to update.
     */
    where: CHAROLA_CHAROLAWhereUniqueInput
  }

  /**
   * CHAROLA_CHAROLA updateMany
   */
  export type CHAROLA_CHAROLAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CHAROLA_CHAROLAS.
     */
    data: XOR<CHAROLA_CHAROLAUpdateManyMutationInput, CHAROLA_CHAROLAUncheckedUpdateManyInput>
    /**
     * Filter which CHAROLA_CHAROLAS to update
     */
    where?: CHAROLA_CHAROLAWhereInput
    /**
     * Limit how many CHAROLA_CHAROLAS to update.
     */
    limit?: number
  }

  /**
   * CHAROLA_CHAROLA upsert
   */
  export type CHAROLA_CHAROLAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_CHAROLA
     */
    select?: CHAROLA_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_CHAROLA
     */
    omit?: CHAROLA_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_CHAROLAInclude<ExtArgs> | null
    /**
     * The filter to search for the CHAROLA_CHAROLA to update in case it exists.
     */
    where: CHAROLA_CHAROLAWhereUniqueInput
    /**
     * In case the CHAROLA_CHAROLA found by the `where` argument doesn't exist, create a new CHAROLA_CHAROLA with this data.
     */
    create: XOR<CHAROLA_CHAROLACreateInput, CHAROLA_CHAROLAUncheckedCreateInput>
    /**
     * In case the CHAROLA_CHAROLA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CHAROLA_CHAROLAUpdateInput, CHAROLA_CHAROLAUncheckedUpdateInput>
  }

  /**
   * CHAROLA_CHAROLA delete
   */
  export type CHAROLA_CHAROLADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_CHAROLA
     */
    select?: CHAROLA_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_CHAROLA
     */
    omit?: CHAROLA_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_CHAROLAInclude<ExtArgs> | null
    /**
     * Filter which CHAROLA_CHAROLA to delete.
     */
    where: CHAROLA_CHAROLAWhereUniqueInput
  }

  /**
   * CHAROLA_CHAROLA deleteMany
   */
  export type CHAROLA_CHAROLADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CHAROLA_CHAROLAS to delete
     */
    where?: CHAROLA_CHAROLAWhereInput
    /**
     * Limit how many CHAROLA_CHAROLAS to delete.
     */
    limit?: number
  }

  /**
   * CHAROLA_CHAROLA without action
   */
  export type CHAROLA_CHAROLADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_CHAROLA
     */
    select?: CHAROLA_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_CHAROLA
     */
    omit?: CHAROLA_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_CHAROLAInclude<ExtArgs> | null
  }


  /**
   * Model CHAROLA_COMIDA
   */

  export type AggregateCHAROLA_COMIDA = {
    _count: CHAROLA_COMIDACountAggregateOutputType | null
    _avg: CHAROLA_COMIDAAvgAggregateOutputType | null
    _sum: CHAROLA_COMIDASumAggregateOutputType | null
    _min: CHAROLA_COMIDAMinAggregateOutputType | null
    _max: CHAROLA_COMIDAMaxAggregateOutputType | null
  }

  export type CHAROLA_COMIDAAvgAggregateOutputType = {
    id: number | null
    charolaId: number | null
    comidaId: number | null
    cantidadOtorgada: number | null
  }

  export type CHAROLA_COMIDASumAggregateOutputType = {
    id: number | null
    charolaId: number | null
    comidaId: number | null
    cantidadOtorgada: number | null
  }

  export type CHAROLA_COMIDAMinAggregateOutputType = {
    id: number | null
    charolaId: number | null
    comidaId: number | null
    cantidadOtorgada: number | null
  }

  export type CHAROLA_COMIDAMaxAggregateOutputType = {
    id: number | null
    charolaId: number | null
    comidaId: number | null
    cantidadOtorgada: number | null
  }

  export type CHAROLA_COMIDACountAggregateOutputType = {
    id: number
    charolaId: number
    comidaId: number
    cantidadOtorgada: number
    _all: number
  }


  export type CHAROLA_COMIDAAvgAggregateInputType = {
    id?: true
    charolaId?: true
    comidaId?: true
    cantidadOtorgada?: true
  }

  export type CHAROLA_COMIDASumAggregateInputType = {
    id?: true
    charolaId?: true
    comidaId?: true
    cantidadOtorgada?: true
  }

  export type CHAROLA_COMIDAMinAggregateInputType = {
    id?: true
    charolaId?: true
    comidaId?: true
    cantidadOtorgada?: true
  }

  export type CHAROLA_COMIDAMaxAggregateInputType = {
    id?: true
    charolaId?: true
    comidaId?: true
    cantidadOtorgada?: true
  }

  export type CHAROLA_COMIDACountAggregateInputType = {
    id?: true
    charolaId?: true
    comidaId?: true
    cantidadOtorgada?: true
    _all?: true
  }

  export type CHAROLA_COMIDAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CHAROLA_COMIDA to aggregate.
     */
    where?: CHAROLA_COMIDAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_COMIDAS to fetch.
     */
    orderBy?: CHAROLA_COMIDAOrderByWithRelationInput | CHAROLA_COMIDAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CHAROLA_COMIDAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_COMIDAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_COMIDAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CHAROLA_COMIDAS
    **/
    _count?: true | CHAROLA_COMIDACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CHAROLA_COMIDAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CHAROLA_COMIDASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CHAROLA_COMIDAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CHAROLA_COMIDAMaxAggregateInputType
  }

  export type GetCHAROLA_COMIDAAggregateType<T extends CHAROLA_COMIDAAggregateArgs> = {
        [P in keyof T & keyof AggregateCHAROLA_COMIDA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCHAROLA_COMIDA[P]>
      : GetScalarType<T[P], AggregateCHAROLA_COMIDA[P]>
  }




  export type CHAROLA_COMIDAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_COMIDAWhereInput
    orderBy?: CHAROLA_COMIDAOrderByWithAggregationInput | CHAROLA_COMIDAOrderByWithAggregationInput[]
    by: CHAROLA_COMIDAScalarFieldEnum[] | CHAROLA_COMIDAScalarFieldEnum
    having?: CHAROLA_COMIDAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CHAROLA_COMIDACountAggregateInputType | true
    _avg?: CHAROLA_COMIDAAvgAggregateInputType
    _sum?: CHAROLA_COMIDASumAggregateInputType
    _min?: CHAROLA_COMIDAMinAggregateInputType
    _max?: CHAROLA_COMIDAMaxAggregateInputType
  }

  export type CHAROLA_COMIDAGroupByOutputType = {
    id: number
    charolaId: number | null
    comidaId: number | null
    cantidadOtorgada: number
    _count: CHAROLA_COMIDACountAggregateOutputType | null
    _avg: CHAROLA_COMIDAAvgAggregateOutputType | null
    _sum: CHAROLA_COMIDASumAggregateOutputType | null
    _min: CHAROLA_COMIDAMinAggregateOutputType | null
    _max: CHAROLA_COMIDAMaxAggregateOutputType | null
  }

  type GetCHAROLA_COMIDAGroupByPayload<T extends CHAROLA_COMIDAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CHAROLA_COMIDAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CHAROLA_COMIDAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CHAROLA_COMIDAGroupByOutputType[P]>
            : GetScalarType<T[P], CHAROLA_COMIDAGroupByOutputType[P]>
        }
      >
    >


  export type CHAROLA_COMIDASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    charolaId?: boolean
    comidaId?: boolean
    cantidadOtorgada?: boolean
    CHAROLA?: boolean | CHAROLA_COMIDA$CHAROLAArgs<ExtArgs>
    COMIDA?: boolean | CHAROLA_COMIDA$COMIDAArgs<ExtArgs>
  }, ExtArgs["result"]["cHAROLA_COMIDA"]>



  export type CHAROLA_COMIDASelectScalar = {
    id?: boolean
    charolaId?: boolean
    comidaId?: boolean
    cantidadOtorgada?: boolean
  }

  export type CHAROLA_COMIDAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "charolaId" | "comidaId" | "cantidadOtorgada", ExtArgs["result"]["cHAROLA_COMIDA"]>
  export type CHAROLA_COMIDAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA?: boolean | CHAROLA_COMIDA$CHAROLAArgs<ExtArgs>
    COMIDA?: boolean | CHAROLA_COMIDA$COMIDAArgs<ExtArgs>
  }

  export type $CHAROLA_COMIDAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CHAROLA_COMIDA"
    objects: {
      CHAROLA: Prisma.$CHAROLAPayload<ExtArgs> | null
      COMIDA: Prisma.$COMIDAPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      charolaId: number | null
      comidaId: number | null
      cantidadOtorgada: number
    }, ExtArgs["result"]["cHAROLA_COMIDA"]>
    composites: {}
  }

  type CHAROLA_COMIDAGetPayload<S extends boolean | null | undefined | CHAROLA_COMIDADefaultArgs> = $Result.GetResult<Prisma.$CHAROLA_COMIDAPayload, S>

  type CHAROLA_COMIDACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CHAROLA_COMIDAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CHAROLA_COMIDACountAggregateInputType | true
    }

  export interface CHAROLA_COMIDADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CHAROLA_COMIDA'], meta: { name: 'CHAROLA_COMIDA' } }
    /**
     * Find zero or one CHAROLA_COMIDA that matches the filter.
     * @param {CHAROLA_COMIDAFindUniqueArgs} args - Arguments to find a CHAROLA_COMIDA
     * @example
     * // Get one CHAROLA_COMIDA
     * const cHAROLA_COMIDA = await prisma.cHAROLA_COMIDA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CHAROLA_COMIDAFindUniqueArgs>(args: SelectSubset<T, CHAROLA_COMIDAFindUniqueArgs<ExtArgs>>): Prisma__CHAROLA_COMIDAClient<$Result.GetResult<Prisma.$CHAROLA_COMIDAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CHAROLA_COMIDA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CHAROLA_COMIDAFindUniqueOrThrowArgs} args - Arguments to find a CHAROLA_COMIDA
     * @example
     * // Get one CHAROLA_COMIDA
     * const cHAROLA_COMIDA = await prisma.cHAROLA_COMIDA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CHAROLA_COMIDAFindUniqueOrThrowArgs>(args: SelectSubset<T, CHAROLA_COMIDAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CHAROLA_COMIDAClient<$Result.GetResult<Prisma.$CHAROLA_COMIDAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CHAROLA_COMIDA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_COMIDAFindFirstArgs} args - Arguments to find a CHAROLA_COMIDA
     * @example
     * // Get one CHAROLA_COMIDA
     * const cHAROLA_COMIDA = await prisma.cHAROLA_COMIDA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CHAROLA_COMIDAFindFirstArgs>(args?: SelectSubset<T, CHAROLA_COMIDAFindFirstArgs<ExtArgs>>): Prisma__CHAROLA_COMIDAClient<$Result.GetResult<Prisma.$CHAROLA_COMIDAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CHAROLA_COMIDA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_COMIDAFindFirstOrThrowArgs} args - Arguments to find a CHAROLA_COMIDA
     * @example
     * // Get one CHAROLA_COMIDA
     * const cHAROLA_COMIDA = await prisma.cHAROLA_COMIDA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CHAROLA_COMIDAFindFirstOrThrowArgs>(args?: SelectSubset<T, CHAROLA_COMIDAFindFirstOrThrowArgs<ExtArgs>>): Prisma__CHAROLA_COMIDAClient<$Result.GetResult<Prisma.$CHAROLA_COMIDAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CHAROLA_COMIDAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_COMIDAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CHAROLA_COMIDAS
     * const cHAROLA_COMIDAS = await prisma.cHAROLA_COMIDA.findMany()
     * 
     * // Get first 10 CHAROLA_COMIDAS
     * const cHAROLA_COMIDAS = await prisma.cHAROLA_COMIDA.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cHAROLA_COMIDAWithIdOnly = await prisma.cHAROLA_COMIDA.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CHAROLA_COMIDAFindManyArgs>(args?: SelectSubset<T, CHAROLA_COMIDAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_COMIDAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CHAROLA_COMIDA.
     * @param {CHAROLA_COMIDACreateArgs} args - Arguments to create a CHAROLA_COMIDA.
     * @example
     * // Create one CHAROLA_COMIDA
     * const CHAROLA_COMIDA = await prisma.cHAROLA_COMIDA.create({
     *   data: {
     *     // ... data to create a CHAROLA_COMIDA
     *   }
     * })
     * 
     */
    create<T extends CHAROLA_COMIDACreateArgs>(args: SelectSubset<T, CHAROLA_COMIDACreateArgs<ExtArgs>>): Prisma__CHAROLA_COMIDAClient<$Result.GetResult<Prisma.$CHAROLA_COMIDAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CHAROLA_COMIDAS.
     * @param {CHAROLA_COMIDACreateManyArgs} args - Arguments to create many CHAROLA_COMIDAS.
     * @example
     * // Create many CHAROLA_COMIDAS
     * const cHAROLA_COMIDA = await prisma.cHAROLA_COMIDA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CHAROLA_COMIDACreateManyArgs>(args?: SelectSubset<T, CHAROLA_COMIDACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CHAROLA_COMIDA.
     * @param {CHAROLA_COMIDADeleteArgs} args - Arguments to delete one CHAROLA_COMIDA.
     * @example
     * // Delete one CHAROLA_COMIDA
     * const CHAROLA_COMIDA = await prisma.cHAROLA_COMIDA.delete({
     *   where: {
     *     // ... filter to delete one CHAROLA_COMIDA
     *   }
     * })
     * 
     */
    delete<T extends CHAROLA_COMIDADeleteArgs>(args: SelectSubset<T, CHAROLA_COMIDADeleteArgs<ExtArgs>>): Prisma__CHAROLA_COMIDAClient<$Result.GetResult<Prisma.$CHAROLA_COMIDAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CHAROLA_COMIDA.
     * @param {CHAROLA_COMIDAUpdateArgs} args - Arguments to update one CHAROLA_COMIDA.
     * @example
     * // Update one CHAROLA_COMIDA
     * const cHAROLA_COMIDA = await prisma.cHAROLA_COMIDA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CHAROLA_COMIDAUpdateArgs>(args: SelectSubset<T, CHAROLA_COMIDAUpdateArgs<ExtArgs>>): Prisma__CHAROLA_COMIDAClient<$Result.GetResult<Prisma.$CHAROLA_COMIDAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CHAROLA_COMIDAS.
     * @param {CHAROLA_COMIDADeleteManyArgs} args - Arguments to filter CHAROLA_COMIDAS to delete.
     * @example
     * // Delete a few CHAROLA_COMIDAS
     * const { count } = await prisma.cHAROLA_COMIDA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CHAROLA_COMIDADeleteManyArgs>(args?: SelectSubset<T, CHAROLA_COMIDADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CHAROLA_COMIDAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_COMIDAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CHAROLA_COMIDAS
     * const cHAROLA_COMIDA = await prisma.cHAROLA_COMIDA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CHAROLA_COMIDAUpdateManyArgs>(args: SelectSubset<T, CHAROLA_COMIDAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CHAROLA_COMIDA.
     * @param {CHAROLA_COMIDAUpsertArgs} args - Arguments to update or create a CHAROLA_COMIDA.
     * @example
     * // Update or create a CHAROLA_COMIDA
     * const cHAROLA_COMIDA = await prisma.cHAROLA_COMIDA.upsert({
     *   create: {
     *     // ... data to create a CHAROLA_COMIDA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CHAROLA_COMIDA we want to update
     *   }
     * })
     */
    upsert<T extends CHAROLA_COMIDAUpsertArgs>(args: SelectSubset<T, CHAROLA_COMIDAUpsertArgs<ExtArgs>>): Prisma__CHAROLA_COMIDAClient<$Result.GetResult<Prisma.$CHAROLA_COMIDAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CHAROLA_COMIDAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_COMIDACountArgs} args - Arguments to filter CHAROLA_COMIDAS to count.
     * @example
     * // Count the number of CHAROLA_COMIDAS
     * const count = await prisma.cHAROLA_COMIDA.count({
     *   where: {
     *     // ... the filter for the CHAROLA_COMIDAS we want to count
     *   }
     * })
    **/
    count<T extends CHAROLA_COMIDACountArgs>(
      args?: Subset<T, CHAROLA_COMIDACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CHAROLA_COMIDACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CHAROLA_COMIDA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_COMIDAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CHAROLA_COMIDAAggregateArgs>(args: Subset<T, CHAROLA_COMIDAAggregateArgs>): Prisma.PrismaPromise<GetCHAROLA_COMIDAAggregateType<T>>

    /**
     * Group by CHAROLA_COMIDA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_COMIDAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CHAROLA_COMIDAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CHAROLA_COMIDAGroupByArgs['orderBy'] }
        : { orderBy?: CHAROLA_COMIDAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CHAROLA_COMIDAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCHAROLA_COMIDAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CHAROLA_COMIDA model
   */
  readonly fields: CHAROLA_COMIDAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CHAROLA_COMIDA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CHAROLA_COMIDAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CHAROLA<T extends CHAROLA_COMIDA$CHAROLAArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLA_COMIDA$CHAROLAArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    COMIDA<T extends CHAROLA_COMIDA$COMIDAArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLA_COMIDA$COMIDAArgs<ExtArgs>>): Prisma__COMIDAClient<$Result.GetResult<Prisma.$COMIDAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CHAROLA_COMIDA model
   */
  interface CHAROLA_COMIDAFieldRefs {
    readonly id: FieldRef<"CHAROLA_COMIDA", 'Int'>
    readonly charolaId: FieldRef<"CHAROLA_COMIDA", 'Int'>
    readonly comidaId: FieldRef<"CHAROLA_COMIDA", 'Int'>
    readonly cantidadOtorgada: FieldRef<"CHAROLA_COMIDA", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CHAROLA_COMIDA findUnique
   */
  export type CHAROLA_COMIDAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_COMIDA
     */
    select?: CHAROLA_COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_COMIDA
     */
    omit?: CHAROLA_COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_COMIDAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_COMIDA to fetch.
     */
    where: CHAROLA_COMIDAWhereUniqueInput
  }

  /**
   * CHAROLA_COMIDA findUniqueOrThrow
   */
  export type CHAROLA_COMIDAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_COMIDA
     */
    select?: CHAROLA_COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_COMIDA
     */
    omit?: CHAROLA_COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_COMIDAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_COMIDA to fetch.
     */
    where: CHAROLA_COMIDAWhereUniqueInput
  }

  /**
   * CHAROLA_COMIDA findFirst
   */
  export type CHAROLA_COMIDAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_COMIDA
     */
    select?: CHAROLA_COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_COMIDA
     */
    omit?: CHAROLA_COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_COMIDAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_COMIDA to fetch.
     */
    where?: CHAROLA_COMIDAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_COMIDAS to fetch.
     */
    orderBy?: CHAROLA_COMIDAOrderByWithRelationInput | CHAROLA_COMIDAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CHAROLA_COMIDAS.
     */
    cursor?: CHAROLA_COMIDAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_COMIDAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_COMIDAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CHAROLA_COMIDAS.
     */
    distinct?: CHAROLA_COMIDAScalarFieldEnum | CHAROLA_COMIDAScalarFieldEnum[]
  }

  /**
   * CHAROLA_COMIDA findFirstOrThrow
   */
  export type CHAROLA_COMIDAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_COMIDA
     */
    select?: CHAROLA_COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_COMIDA
     */
    omit?: CHAROLA_COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_COMIDAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_COMIDA to fetch.
     */
    where?: CHAROLA_COMIDAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_COMIDAS to fetch.
     */
    orderBy?: CHAROLA_COMIDAOrderByWithRelationInput | CHAROLA_COMIDAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CHAROLA_COMIDAS.
     */
    cursor?: CHAROLA_COMIDAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_COMIDAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_COMIDAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CHAROLA_COMIDAS.
     */
    distinct?: CHAROLA_COMIDAScalarFieldEnum | CHAROLA_COMIDAScalarFieldEnum[]
  }

  /**
   * CHAROLA_COMIDA findMany
   */
  export type CHAROLA_COMIDAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_COMIDA
     */
    select?: CHAROLA_COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_COMIDA
     */
    omit?: CHAROLA_COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_COMIDAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_COMIDAS to fetch.
     */
    where?: CHAROLA_COMIDAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_COMIDAS to fetch.
     */
    orderBy?: CHAROLA_COMIDAOrderByWithRelationInput | CHAROLA_COMIDAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CHAROLA_COMIDAS.
     */
    cursor?: CHAROLA_COMIDAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_COMIDAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_COMIDAS.
     */
    skip?: number
    distinct?: CHAROLA_COMIDAScalarFieldEnum | CHAROLA_COMIDAScalarFieldEnum[]
  }

  /**
   * CHAROLA_COMIDA create
   */
  export type CHAROLA_COMIDACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_COMIDA
     */
    select?: CHAROLA_COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_COMIDA
     */
    omit?: CHAROLA_COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_COMIDAInclude<ExtArgs> | null
    /**
     * The data needed to create a CHAROLA_COMIDA.
     */
    data: XOR<CHAROLA_COMIDACreateInput, CHAROLA_COMIDAUncheckedCreateInput>
  }

  /**
   * CHAROLA_COMIDA createMany
   */
  export type CHAROLA_COMIDACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CHAROLA_COMIDAS.
     */
    data: CHAROLA_COMIDACreateManyInput | CHAROLA_COMIDACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CHAROLA_COMIDA update
   */
  export type CHAROLA_COMIDAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_COMIDA
     */
    select?: CHAROLA_COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_COMIDA
     */
    omit?: CHAROLA_COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_COMIDAInclude<ExtArgs> | null
    /**
     * The data needed to update a CHAROLA_COMIDA.
     */
    data: XOR<CHAROLA_COMIDAUpdateInput, CHAROLA_COMIDAUncheckedUpdateInput>
    /**
     * Choose, which CHAROLA_COMIDA to update.
     */
    where: CHAROLA_COMIDAWhereUniqueInput
  }

  /**
   * CHAROLA_COMIDA updateMany
   */
  export type CHAROLA_COMIDAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CHAROLA_COMIDAS.
     */
    data: XOR<CHAROLA_COMIDAUpdateManyMutationInput, CHAROLA_COMIDAUncheckedUpdateManyInput>
    /**
     * Filter which CHAROLA_COMIDAS to update
     */
    where?: CHAROLA_COMIDAWhereInput
    /**
     * Limit how many CHAROLA_COMIDAS to update.
     */
    limit?: number
  }

  /**
   * CHAROLA_COMIDA upsert
   */
  export type CHAROLA_COMIDAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_COMIDA
     */
    select?: CHAROLA_COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_COMIDA
     */
    omit?: CHAROLA_COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_COMIDAInclude<ExtArgs> | null
    /**
     * The filter to search for the CHAROLA_COMIDA to update in case it exists.
     */
    where: CHAROLA_COMIDAWhereUniqueInput
    /**
     * In case the CHAROLA_COMIDA found by the `where` argument doesn't exist, create a new CHAROLA_COMIDA with this data.
     */
    create: XOR<CHAROLA_COMIDACreateInput, CHAROLA_COMIDAUncheckedCreateInput>
    /**
     * In case the CHAROLA_COMIDA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CHAROLA_COMIDAUpdateInput, CHAROLA_COMIDAUncheckedUpdateInput>
  }

  /**
   * CHAROLA_COMIDA delete
   */
  export type CHAROLA_COMIDADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_COMIDA
     */
    select?: CHAROLA_COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_COMIDA
     */
    omit?: CHAROLA_COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_COMIDAInclude<ExtArgs> | null
    /**
     * Filter which CHAROLA_COMIDA to delete.
     */
    where: CHAROLA_COMIDAWhereUniqueInput
  }

  /**
   * CHAROLA_COMIDA deleteMany
   */
  export type CHAROLA_COMIDADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CHAROLA_COMIDAS to delete
     */
    where?: CHAROLA_COMIDAWhereInput
    /**
     * Limit how many CHAROLA_COMIDAS to delete.
     */
    limit?: number
  }

  /**
   * CHAROLA_COMIDA.CHAROLA
   */
  export type CHAROLA_COMIDA$CHAROLAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA
     */
    select?: CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA
     */
    omit?: CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLAInclude<ExtArgs> | null
    where?: CHAROLAWhereInput
  }

  /**
   * CHAROLA_COMIDA.COMIDA
   */
  export type CHAROLA_COMIDA$COMIDAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMIDA
     */
    select?: COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMIDA
     */
    omit?: COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMIDAInclude<ExtArgs> | null
    where?: COMIDAWhereInput
  }

  /**
   * CHAROLA_COMIDA without action
   */
  export type CHAROLA_COMIDADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_COMIDA
     */
    select?: CHAROLA_COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_COMIDA
     */
    omit?: CHAROLA_COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_COMIDAInclude<ExtArgs> | null
  }


  /**
   * Model CHAROLA_HIDRATACION
   */

  export type AggregateCHAROLA_HIDRATACION = {
    _count: CHAROLA_HIDRATACIONCountAggregateOutputType | null
    _avg: CHAROLA_HIDRATACIONAvgAggregateOutputType | null
    _sum: CHAROLA_HIDRATACIONSumAggregateOutputType | null
    _min: CHAROLA_HIDRATACIONMinAggregateOutputType | null
    _max: CHAROLA_HIDRATACIONMaxAggregateOutputType | null
  }

  export type CHAROLA_HIDRATACIONAvgAggregateOutputType = {
    id: number | null
    charolaId: number | null
    hidratacionId: number | null
    cantidadOtorgada: number | null
  }

  export type CHAROLA_HIDRATACIONSumAggregateOutputType = {
    id: number | null
    charolaId: number | null
    hidratacionId: number | null
    cantidadOtorgada: number | null
  }

  export type CHAROLA_HIDRATACIONMinAggregateOutputType = {
    id: number | null
    charolaId: number | null
    hidratacionId: number | null
    cantidadOtorgada: number | null
  }

  export type CHAROLA_HIDRATACIONMaxAggregateOutputType = {
    id: number | null
    charolaId: number | null
    hidratacionId: number | null
    cantidadOtorgada: number | null
  }

  export type CHAROLA_HIDRATACIONCountAggregateOutputType = {
    id: number
    charolaId: number
    hidratacionId: number
    cantidadOtorgada: number
    _all: number
  }


  export type CHAROLA_HIDRATACIONAvgAggregateInputType = {
    id?: true
    charolaId?: true
    hidratacionId?: true
    cantidadOtorgada?: true
  }

  export type CHAROLA_HIDRATACIONSumAggregateInputType = {
    id?: true
    charolaId?: true
    hidratacionId?: true
    cantidadOtorgada?: true
  }

  export type CHAROLA_HIDRATACIONMinAggregateInputType = {
    id?: true
    charolaId?: true
    hidratacionId?: true
    cantidadOtorgada?: true
  }

  export type CHAROLA_HIDRATACIONMaxAggregateInputType = {
    id?: true
    charolaId?: true
    hidratacionId?: true
    cantidadOtorgada?: true
  }

  export type CHAROLA_HIDRATACIONCountAggregateInputType = {
    id?: true
    charolaId?: true
    hidratacionId?: true
    cantidadOtorgada?: true
    _all?: true
  }

  export type CHAROLA_HIDRATACIONAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CHAROLA_HIDRATACION to aggregate.
     */
    where?: CHAROLA_HIDRATACIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_HIDRATACIONS to fetch.
     */
    orderBy?: CHAROLA_HIDRATACIONOrderByWithRelationInput | CHAROLA_HIDRATACIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CHAROLA_HIDRATACIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_HIDRATACIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_HIDRATACIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CHAROLA_HIDRATACIONS
    **/
    _count?: true | CHAROLA_HIDRATACIONCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CHAROLA_HIDRATACIONAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CHAROLA_HIDRATACIONSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CHAROLA_HIDRATACIONMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CHAROLA_HIDRATACIONMaxAggregateInputType
  }

  export type GetCHAROLA_HIDRATACIONAggregateType<T extends CHAROLA_HIDRATACIONAggregateArgs> = {
        [P in keyof T & keyof AggregateCHAROLA_HIDRATACION]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCHAROLA_HIDRATACION[P]>
      : GetScalarType<T[P], AggregateCHAROLA_HIDRATACION[P]>
  }




  export type CHAROLA_HIDRATACIONGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_HIDRATACIONWhereInput
    orderBy?: CHAROLA_HIDRATACIONOrderByWithAggregationInput | CHAROLA_HIDRATACIONOrderByWithAggregationInput[]
    by: CHAROLA_HIDRATACIONScalarFieldEnum[] | CHAROLA_HIDRATACIONScalarFieldEnum
    having?: CHAROLA_HIDRATACIONScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CHAROLA_HIDRATACIONCountAggregateInputType | true
    _avg?: CHAROLA_HIDRATACIONAvgAggregateInputType
    _sum?: CHAROLA_HIDRATACIONSumAggregateInputType
    _min?: CHAROLA_HIDRATACIONMinAggregateInputType
    _max?: CHAROLA_HIDRATACIONMaxAggregateInputType
  }

  export type CHAROLA_HIDRATACIONGroupByOutputType = {
    id: number
    charolaId: number | null
    hidratacionId: number | null
    cantidadOtorgada: number
    _count: CHAROLA_HIDRATACIONCountAggregateOutputType | null
    _avg: CHAROLA_HIDRATACIONAvgAggregateOutputType | null
    _sum: CHAROLA_HIDRATACIONSumAggregateOutputType | null
    _min: CHAROLA_HIDRATACIONMinAggregateOutputType | null
    _max: CHAROLA_HIDRATACIONMaxAggregateOutputType | null
  }

  type GetCHAROLA_HIDRATACIONGroupByPayload<T extends CHAROLA_HIDRATACIONGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CHAROLA_HIDRATACIONGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CHAROLA_HIDRATACIONGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CHAROLA_HIDRATACIONGroupByOutputType[P]>
            : GetScalarType<T[P], CHAROLA_HIDRATACIONGroupByOutputType[P]>
        }
      >
    >


  export type CHAROLA_HIDRATACIONSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    charolaId?: boolean
    hidratacionId?: boolean
    cantidadOtorgada?: boolean
    CHAROLA?: boolean | CHAROLA_HIDRATACION$CHAROLAArgs<ExtArgs>
    HIDRATACION?: boolean | CHAROLA_HIDRATACION$HIDRATACIONArgs<ExtArgs>
  }, ExtArgs["result"]["cHAROLA_HIDRATACION"]>



  export type CHAROLA_HIDRATACIONSelectScalar = {
    id?: boolean
    charolaId?: boolean
    hidratacionId?: boolean
    cantidadOtorgada?: boolean
  }

  export type CHAROLA_HIDRATACIONOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "charolaId" | "hidratacionId" | "cantidadOtorgada", ExtArgs["result"]["cHAROLA_HIDRATACION"]>
  export type CHAROLA_HIDRATACIONInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA?: boolean | CHAROLA_HIDRATACION$CHAROLAArgs<ExtArgs>
    HIDRATACION?: boolean | CHAROLA_HIDRATACION$HIDRATACIONArgs<ExtArgs>
  }

  export type $CHAROLA_HIDRATACIONPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CHAROLA_HIDRATACION"
    objects: {
      CHAROLA: Prisma.$CHAROLAPayload<ExtArgs> | null
      HIDRATACION: Prisma.$HIDRATACIONPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      charolaId: number | null
      hidratacionId: number | null
      cantidadOtorgada: number
    }, ExtArgs["result"]["cHAROLA_HIDRATACION"]>
    composites: {}
  }

  type CHAROLA_HIDRATACIONGetPayload<S extends boolean | null | undefined | CHAROLA_HIDRATACIONDefaultArgs> = $Result.GetResult<Prisma.$CHAROLA_HIDRATACIONPayload, S>

  type CHAROLA_HIDRATACIONCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CHAROLA_HIDRATACIONFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CHAROLA_HIDRATACIONCountAggregateInputType | true
    }

  export interface CHAROLA_HIDRATACIONDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CHAROLA_HIDRATACION'], meta: { name: 'CHAROLA_HIDRATACION' } }
    /**
     * Find zero or one CHAROLA_HIDRATACION that matches the filter.
     * @param {CHAROLA_HIDRATACIONFindUniqueArgs} args - Arguments to find a CHAROLA_HIDRATACION
     * @example
     * // Get one CHAROLA_HIDRATACION
     * const cHAROLA_HIDRATACION = await prisma.cHAROLA_HIDRATACION.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CHAROLA_HIDRATACIONFindUniqueArgs>(args: SelectSubset<T, CHAROLA_HIDRATACIONFindUniqueArgs<ExtArgs>>): Prisma__CHAROLA_HIDRATACIONClient<$Result.GetResult<Prisma.$CHAROLA_HIDRATACIONPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CHAROLA_HIDRATACION that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CHAROLA_HIDRATACIONFindUniqueOrThrowArgs} args - Arguments to find a CHAROLA_HIDRATACION
     * @example
     * // Get one CHAROLA_HIDRATACION
     * const cHAROLA_HIDRATACION = await prisma.cHAROLA_HIDRATACION.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CHAROLA_HIDRATACIONFindUniqueOrThrowArgs>(args: SelectSubset<T, CHAROLA_HIDRATACIONFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CHAROLA_HIDRATACIONClient<$Result.GetResult<Prisma.$CHAROLA_HIDRATACIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CHAROLA_HIDRATACION that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_HIDRATACIONFindFirstArgs} args - Arguments to find a CHAROLA_HIDRATACION
     * @example
     * // Get one CHAROLA_HIDRATACION
     * const cHAROLA_HIDRATACION = await prisma.cHAROLA_HIDRATACION.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CHAROLA_HIDRATACIONFindFirstArgs>(args?: SelectSubset<T, CHAROLA_HIDRATACIONFindFirstArgs<ExtArgs>>): Prisma__CHAROLA_HIDRATACIONClient<$Result.GetResult<Prisma.$CHAROLA_HIDRATACIONPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CHAROLA_HIDRATACION that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_HIDRATACIONFindFirstOrThrowArgs} args - Arguments to find a CHAROLA_HIDRATACION
     * @example
     * // Get one CHAROLA_HIDRATACION
     * const cHAROLA_HIDRATACION = await prisma.cHAROLA_HIDRATACION.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CHAROLA_HIDRATACIONFindFirstOrThrowArgs>(args?: SelectSubset<T, CHAROLA_HIDRATACIONFindFirstOrThrowArgs<ExtArgs>>): Prisma__CHAROLA_HIDRATACIONClient<$Result.GetResult<Prisma.$CHAROLA_HIDRATACIONPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CHAROLA_HIDRATACIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_HIDRATACIONFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CHAROLA_HIDRATACIONS
     * const cHAROLA_HIDRATACIONS = await prisma.cHAROLA_HIDRATACION.findMany()
     * 
     * // Get first 10 CHAROLA_HIDRATACIONS
     * const cHAROLA_HIDRATACIONS = await prisma.cHAROLA_HIDRATACION.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cHAROLA_HIDRATACIONWithIdOnly = await prisma.cHAROLA_HIDRATACION.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CHAROLA_HIDRATACIONFindManyArgs>(args?: SelectSubset<T, CHAROLA_HIDRATACIONFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_HIDRATACIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CHAROLA_HIDRATACION.
     * @param {CHAROLA_HIDRATACIONCreateArgs} args - Arguments to create a CHAROLA_HIDRATACION.
     * @example
     * // Create one CHAROLA_HIDRATACION
     * const CHAROLA_HIDRATACION = await prisma.cHAROLA_HIDRATACION.create({
     *   data: {
     *     // ... data to create a CHAROLA_HIDRATACION
     *   }
     * })
     * 
     */
    create<T extends CHAROLA_HIDRATACIONCreateArgs>(args: SelectSubset<T, CHAROLA_HIDRATACIONCreateArgs<ExtArgs>>): Prisma__CHAROLA_HIDRATACIONClient<$Result.GetResult<Prisma.$CHAROLA_HIDRATACIONPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CHAROLA_HIDRATACIONS.
     * @param {CHAROLA_HIDRATACIONCreateManyArgs} args - Arguments to create many CHAROLA_HIDRATACIONS.
     * @example
     * // Create many CHAROLA_HIDRATACIONS
     * const cHAROLA_HIDRATACION = await prisma.cHAROLA_HIDRATACION.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CHAROLA_HIDRATACIONCreateManyArgs>(args?: SelectSubset<T, CHAROLA_HIDRATACIONCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CHAROLA_HIDRATACION.
     * @param {CHAROLA_HIDRATACIONDeleteArgs} args - Arguments to delete one CHAROLA_HIDRATACION.
     * @example
     * // Delete one CHAROLA_HIDRATACION
     * const CHAROLA_HIDRATACION = await prisma.cHAROLA_HIDRATACION.delete({
     *   where: {
     *     // ... filter to delete one CHAROLA_HIDRATACION
     *   }
     * })
     * 
     */
    delete<T extends CHAROLA_HIDRATACIONDeleteArgs>(args: SelectSubset<T, CHAROLA_HIDRATACIONDeleteArgs<ExtArgs>>): Prisma__CHAROLA_HIDRATACIONClient<$Result.GetResult<Prisma.$CHAROLA_HIDRATACIONPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CHAROLA_HIDRATACION.
     * @param {CHAROLA_HIDRATACIONUpdateArgs} args - Arguments to update one CHAROLA_HIDRATACION.
     * @example
     * // Update one CHAROLA_HIDRATACION
     * const cHAROLA_HIDRATACION = await prisma.cHAROLA_HIDRATACION.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CHAROLA_HIDRATACIONUpdateArgs>(args: SelectSubset<T, CHAROLA_HIDRATACIONUpdateArgs<ExtArgs>>): Prisma__CHAROLA_HIDRATACIONClient<$Result.GetResult<Prisma.$CHAROLA_HIDRATACIONPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CHAROLA_HIDRATACIONS.
     * @param {CHAROLA_HIDRATACIONDeleteManyArgs} args - Arguments to filter CHAROLA_HIDRATACIONS to delete.
     * @example
     * // Delete a few CHAROLA_HIDRATACIONS
     * const { count } = await prisma.cHAROLA_HIDRATACION.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CHAROLA_HIDRATACIONDeleteManyArgs>(args?: SelectSubset<T, CHAROLA_HIDRATACIONDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CHAROLA_HIDRATACIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_HIDRATACIONUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CHAROLA_HIDRATACIONS
     * const cHAROLA_HIDRATACION = await prisma.cHAROLA_HIDRATACION.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CHAROLA_HIDRATACIONUpdateManyArgs>(args: SelectSubset<T, CHAROLA_HIDRATACIONUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CHAROLA_HIDRATACION.
     * @param {CHAROLA_HIDRATACIONUpsertArgs} args - Arguments to update or create a CHAROLA_HIDRATACION.
     * @example
     * // Update or create a CHAROLA_HIDRATACION
     * const cHAROLA_HIDRATACION = await prisma.cHAROLA_HIDRATACION.upsert({
     *   create: {
     *     // ... data to create a CHAROLA_HIDRATACION
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CHAROLA_HIDRATACION we want to update
     *   }
     * })
     */
    upsert<T extends CHAROLA_HIDRATACIONUpsertArgs>(args: SelectSubset<T, CHAROLA_HIDRATACIONUpsertArgs<ExtArgs>>): Prisma__CHAROLA_HIDRATACIONClient<$Result.GetResult<Prisma.$CHAROLA_HIDRATACIONPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CHAROLA_HIDRATACIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_HIDRATACIONCountArgs} args - Arguments to filter CHAROLA_HIDRATACIONS to count.
     * @example
     * // Count the number of CHAROLA_HIDRATACIONS
     * const count = await prisma.cHAROLA_HIDRATACION.count({
     *   where: {
     *     // ... the filter for the CHAROLA_HIDRATACIONS we want to count
     *   }
     * })
    **/
    count<T extends CHAROLA_HIDRATACIONCountArgs>(
      args?: Subset<T, CHAROLA_HIDRATACIONCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CHAROLA_HIDRATACIONCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CHAROLA_HIDRATACION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_HIDRATACIONAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CHAROLA_HIDRATACIONAggregateArgs>(args: Subset<T, CHAROLA_HIDRATACIONAggregateArgs>): Prisma.PrismaPromise<GetCHAROLA_HIDRATACIONAggregateType<T>>

    /**
     * Group by CHAROLA_HIDRATACION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_HIDRATACIONGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CHAROLA_HIDRATACIONGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CHAROLA_HIDRATACIONGroupByArgs['orderBy'] }
        : { orderBy?: CHAROLA_HIDRATACIONGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CHAROLA_HIDRATACIONGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCHAROLA_HIDRATACIONGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CHAROLA_HIDRATACION model
   */
  readonly fields: CHAROLA_HIDRATACIONFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CHAROLA_HIDRATACION.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CHAROLA_HIDRATACIONClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CHAROLA<T extends CHAROLA_HIDRATACION$CHAROLAArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLA_HIDRATACION$CHAROLAArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    HIDRATACION<T extends CHAROLA_HIDRATACION$HIDRATACIONArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLA_HIDRATACION$HIDRATACIONArgs<ExtArgs>>): Prisma__HIDRATACIONClient<$Result.GetResult<Prisma.$HIDRATACIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CHAROLA_HIDRATACION model
   */
  interface CHAROLA_HIDRATACIONFieldRefs {
    readonly id: FieldRef<"CHAROLA_HIDRATACION", 'Int'>
    readonly charolaId: FieldRef<"CHAROLA_HIDRATACION", 'Int'>
    readonly hidratacionId: FieldRef<"CHAROLA_HIDRATACION", 'Int'>
    readonly cantidadOtorgada: FieldRef<"CHAROLA_HIDRATACION", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * CHAROLA_HIDRATACION findUnique
   */
  export type CHAROLA_HIDRATACIONFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_HIDRATACION
     */
    select?: CHAROLA_HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_HIDRATACION
     */
    omit?: CHAROLA_HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_HIDRATACIONInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_HIDRATACION to fetch.
     */
    where: CHAROLA_HIDRATACIONWhereUniqueInput
  }

  /**
   * CHAROLA_HIDRATACION findUniqueOrThrow
   */
  export type CHAROLA_HIDRATACIONFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_HIDRATACION
     */
    select?: CHAROLA_HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_HIDRATACION
     */
    omit?: CHAROLA_HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_HIDRATACIONInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_HIDRATACION to fetch.
     */
    where: CHAROLA_HIDRATACIONWhereUniqueInput
  }

  /**
   * CHAROLA_HIDRATACION findFirst
   */
  export type CHAROLA_HIDRATACIONFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_HIDRATACION
     */
    select?: CHAROLA_HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_HIDRATACION
     */
    omit?: CHAROLA_HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_HIDRATACIONInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_HIDRATACION to fetch.
     */
    where?: CHAROLA_HIDRATACIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_HIDRATACIONS to fetch.
     */
    orderBy?: CHAROLA_HIDRATACIONOrderByWithRelationInput | CHAROLA_HIDRATACIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CHAROLA_HIDRATACIONS.
     */
    cursor?: CHAROLA_HIDRATACIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_HIDRATACIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_HIDRATACIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CHAROLA_HIDRATACIONS.
     */
    distinct?: CHAROLA_HIDRATACIONScalarFieldEnum | CHAROLA_HIDRATACIONScalarFieldEnum[]
  }

  /**
   * CHAROLA_HIDRATACION findFirstOrThrow
   */
  export type CHAROLA_HIDRATACIONFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_HIDRATACION
     */
    select?: CHAROLA_HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_HIDRATACION
     */
    omit?: CHAROLA_HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_HIDRATACIONInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_HIDRATACION to fetch.
     */
    where?: CHAROLA_HIDRATACIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_HIDRATACIONS to fetch.
     */
    orderBy?: CHAROLA_HIDRATACIONOrderByWithRelationInput | CHAROLA_HIDRATACIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CHAROLA_HIDRATACIONS.
     */
    cursor?: CHAROLA_HIDRATACIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_HIDRATACIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_HIDRATACIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CHAROLA_HIDRATACIONS.
     */
    distinct?: CHAROLA_HIDRATACIONScalarFieldEnum | CHAROLA_HIDRATACIONScalarFieldEnum[]
  }

  /**
   * CHAROLA_HIDRATACION findMany
   */
  export type CHAROLA_HIDRATACIONFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_HIDRATACION
     */
    select?: CHAROLA_HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_HIDRATACION
     */
    omit?: CHAROLA_HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_HIDRATACIONInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_HIDRATACIONS to fetch.
     */
    where?: CHAROLA_HIDRATACIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_HIDRATACIONS to fetch.
     */
    orderBy?: CHAROLA_HIDRATACIONOrderByWithRelationInput | CHAROLA_HIDRATACIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CHAROLA_HIDRATACIONS.
     */
    cursor?: CHAROLA_HIDRATACIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_HIDRATACIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_HIDRATACIONS.
     */
    skip?: number
    distinct?: CHAROLA_HIDRATACIONScalarFieldEnum | CHAROLA_HIDRATACIONScalarFieldEnum[]
  }

  /**
   * CHAROLA_HIDRATACION create
   */
  export type CHAROLA_HIDRATACIONCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_HIDRATACION
     */
    select?: CHAROLA_HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_HIDRATACION
     */
    omit?: CHAROLA_HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_HIDRATACIONInclude<ExtArgs> | null
    /**
     * The data needed to create a CHAROLA_HIDRATACION.
     */
    data: XOR<CHAROLA_HIDRATACIONCreateInput, CHAROLA_HIDRATACIONUncheckedCreateInput>
  }

  /**
   * CHAROLA_HIDRATACION createMany
   */
  export type CHAROLA_HIDRATACIONCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CHAROLA_HIDRATACIONS.
     */
    data: CHAROLA_HIDRATACIONCreateManyInput | CHAROLA_HIDRATACIONCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CHAROLA_HIDRATACION update
   */
  export type CHAROLA_HIDRATACIONUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_HIDRATACION
     */
    select?: CHAROLA_HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_HIDRATACION
     */
    omit?: CHAROLA_HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_HIDRATACIONInclude<ExtArgs> | null
    /**
     * The data needed to update a CHAROLA_HIDRATACION.
     */
    data: XOR<CHAROLA_HIDRATACIONUpdateInput, CHAROLA_HIDRATACIONUncheckedUpdateInput>
    /**
     * Choose, which CHAROLA_HIDRATACION to update.
     */
    where: CHAROLA_HIDRATACIONWhereUniqueInput
  }

  /**
   * CHAROLA_HIDRATACION updateMany
   */
  export type CHAROLA_HIDRATACIONUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CHAROLA_HIDRATACIONS.
     */
    data: XOR<CHAROLA_HIDRATACIONUpdateManyMutationInput, CHAROLA_HIDRATACIONUncheckedUpdateManyInput>
    /**
     * Filter which CHAROLA_HIDRATACIONS to update
     */
    where?: CHAROLA_HIDRATACIONWhereInput
    /**
     * Limit how many CHAROLA_HIDRATACIONS to update.
     */
    limit?: number
  }

  /**
   * CHAROLA_HIDRATACION upsert
   */
  export type CHAROLA_HIDRATACIONUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_HIDRATACION
     */
    select?: CHAROLA_HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_HIDRATACION
     */
    omit?: CHAROLA_HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_HIDRATACIONInclude<ExtArgs> | null
    /**
     * The filter to search for the CHAROLA_HIDRATACION to update in case it exists.
     */
    where: CHAROLA_HIDRATACIONWhereUniqueInput
    /**
     * In case the CHAROLA_HIDRATACION found by the `where` argument doesn't exist, create a new CHAROLA_HIDRATACION with this data.
     */
    create: XOR<CHAROLA_HIDRATACIONCreateInput, CHAROLA_HIDRATACIONUncheckedCreateInput>
    /**
     * In case the CHAROLA_HIDRATACION was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CHAROLA_HIDRATACIONUpdateInput, CHAROLA_HIDRATACIONUncheckedUpdateInput>
  }

  /**
   * CHAROLA_HIDRATACION delete
   */
  export type CHAROLA_HIDRATACIONDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_HIDRATACION
     */
    select?: CHAROLA_HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_HIDRATACION
     */
    omit?: CHAROLA_HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_HIDRATACIONInclude<ExtArgs> | null
    /**
     * Filter which CHAROLA_HIDRATACION to delete.
     */
    where: CHAROLA_HIDRATACIONWhereUniqueInput
  }

  /**
   * CHAROLA_HIDRATACION deleteMany
   */
  export type CHAROLA_HIDRATACIONDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CHAROLA_HIDRATACIONS to delete
     */
    where?: CHAROLA_HIDRATACIONWhereInput
    /**
     * Limit how many CHAROLA_HIDRATACIONS to delete.
     */
    limit?: number
  }

  /**
   * CHAROLA_HIDRATACION.CHAROLA
   */
  export type CHAROLA_HIDRATACION$CHAROLAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA
     */
    select?: CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA
     */
    omit?: CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLAInclude<ExtArgs> | null
    where?: CHAROLAWhereInput
  }

  /**
   * CHAROLA_HIDRATACION.HIDRATACION
   */
  export type CHAROLA_HIDRATACION$HIDRATACIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HIDRATACION
     */
    select?: HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HIDRATACION
     */
    omit?: HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HIDRATACIONInclude<ExtArgs> | null
    where?: HIDRATACIONWhereInput
  }

  /**
   * CHAROLA_HIDRATACION without action
   */
  export type CHAROLA_HIDRATACIONDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_HIDRATACION
     */
    select?: CHAROLA_HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_HIDRATACION
     */
    omit?: CHAROLA_HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_HIDRATACIONInclude<ExtArgs> | null
  }


  /**
   * Model COMIDA
   */

  export type AggregateCOMIDA = {
    _count: COMIDACountAggregateOutputType | null
    _avg: COMIDAAvgAggregateOutputType | null
    _sum: COMIDASumAggregateOutputType | null
    _min: COMIDAMinAggregateOutputType | null
    _max: COMIDAMaxAggregateOutputType | null
  }

  export type COMIDAAvgAggregateOutputType = {
    comidaId: number | null
  }

  export type COMIDASumAggregateOutputType = {
    comidaId: number | null
  }

  export type COMIDAMinAggregateOutputType = {
    comidaId: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type COMIDAMaxAggregateOutputType = {
    comidaId: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type COMIDACountAggregateOutputType = {
    comidaId: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type COMIDAAvgAggregateInputType = {
    comidaId?: true
  }

  export type COMIDASumAggregateInputType = {
    comidaId?: true
  }

  export type COMIDAMinAggregateInputType = {
    comidaId?: true
    nombre?: true
    descripcion?: true
  }

  export type COMIDAMaxAggregateInputType = {
    comidaId?: true
    nombre?: true
    descripcion?: true
  }

  export type COMIDACountAggregateInputType = {
    comidaId?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type COMIDAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which COMIDA to aggregate.
     */
    where?: COMIDAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COMIDAS to fetch.
     */
    orderBy?: COMIDAOrderByWithRelationInput | COMIDAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: COMIDAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COMIDAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COMIDAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned COMIDAS
    **/
    _count?: true | COMIDACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: COMIDAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: COMIDASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: COMIDAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: COMIDAMaxAggregateInputType
  }

  export type GetCOMIDAAggregateType<T extends COMIDAAggregateArgs> = {
        [P in keyof T & keyof AggregateCOMIDA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCOMIDA[P]>
      : GetScalarType<T[P], AggregateCOMIDA[P]>
  }




  export type COMIDAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: COMIDAWhereInput
    orderBy?: COMIDAOrderByWithAggregationInput | COMIDAOrderByWithAggregationInput[]
    by: COMIDAScalarFieldEnum[] | COMIDAScalarFieldEnum
    having?: COMIDAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: COMIDACountAggregateInputType | true
    _avg?: COMIDAAvgAggregateInputType
    _sum?: COMIDASumAggregateInputType
    _min?: COMIDAMinAggregateInputType
    _max?: COMIDAMaxAggregateInputType
  }

  export type COMIDAGroupByOutputType = {
    comidaId: number
    nombre: string
    descripcion: string | null
    _count: COMIDACountAggregateOutputType | null
    _avg: COMIDAAvgAggregateOutputType | null
    _sum: COMIDASumAggregateOutputType | null
    _min: COMIDAMinAggregateOutputType | null
    _max: COMIDAMaxAggregateOutputType | null
  }

  type GetCOMIDAGroupByPayload<T extends COMIDAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<COMIDAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof COMIDAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], COMIDAGroupByOutputType[P]>
            : GetScalarType<T[P], COMIDAGroupByOutputType[P]>
        }
      >
    >


  export type COMIDASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    comidaId?: boolean
    nombre?: boolean
    descripcion?: boolean
    CHAROLA_COMIDA?: boolean | COMIDA$CHAROLA_COMIDAArgs<ExtArgs>
    _count?: boolean | COMIDACountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cOMIDA"]>



  export type COMIDASelectScalar = {
    comidaId?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type COMIDAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"comidaId" | "nombre" | "descripcion", ExtArgs["result"]["cOMIDA"]>
  export type COMIDAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA_COMIDA?: boolean | COMIDA$CHAROLA_COMIDAArgs<ExtArgs>
    _count?: boolean | COMIDACountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $COMIDAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "COMIDA"
    objects: {
      CHAROLA_COMIDA: Prisma.$CHAROLA_COMIDAPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      comidaId: number
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["cOMIDA"]>
    composites: {}
  }

  type COMIDAGetPayload<S extends boolean | null | undefined | COMIDADefaultArgs> = $Result.GetResult<Prisma.$COMIDAPayload, S>

  type COMIDACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<COMIDAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: COMIDACountAggregateInputType | true
    }

  export interface COMIDADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['COMIDA'], meta: { name: 'COMIDA' } }
    /**
     * Find zero or one COMIDA that matches the filter.
     * @param {COMIDAFindUniqueArgs} args - Arguments to find a COMIDA
     * @example
     * // Get one COMIDA
     * const cOMIDA = await prisma.cOMIDA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends COMIDAFindUniqueArgs>(args: SelectSubset<T, COMIDAFindUniqueArgs<ExtArgs>>): Prisma__COMIDAClient<$Result.GetResult<Prisma.$COMIDAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one COMIDA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {COMIDAFindUniqueOrThrowArgs} args - Arguments to find a COMIDA
     * @example
     * // Get one COMIDA
     * const cOMIDA = await prisma.cOMIDA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends COMIDAFindUniqueOrThrowArgs>(args: SelectSubset<T, COMIDAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__COMIDAClient<$Result.GetResult<Prisma.$COMIDAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first COMIDA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COMIDAFindFirstArgs} args - Arguments to find a COMIDA
     * @example
     * // Get one COMIDA
     * const cOMIDA = await prisma.cOMIDA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends COMIDAFindFirstArgs>(args?: SelectSubset<T, COMIDAFindFirstArgs<ExtArgs>>): Prisma__COMIDAClient<$Result.GetResult<Prisma.$COMIDAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first COMIDA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COMIDAFindFirstOrThrowArgs} args - Arguments to find a COMIDA
     * @example
     * // Get one COMIDA
     * const cOMIDA = await prisma.cOMIDA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends COMIDAFindFirstOrThrowArgs>(args?: SelectSubset<T, COMIDAFindFirstOrThrowArgs<ExtArgs>>): Prisma__COMIDAClient<$Result.GetResult<Prisma.$COMIDAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more COMIDAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COMIDAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all COMIDAS
     * const cOMIDAS = await prisma.cOMIDA.findMany()
     * 
     * // Get first 10 COMIDAS
     * const cOMIDAS = await prisma.cOMIDA.findMany({ take: 10 })
     * 
     * // Only select the `comidaId`
     * const cOMIDAWithComidaIdOnly = await prisma.cOMIDA.findMany({ select: { comidaId: true } })
     * 
     */
    findMany<T extends COMIDAFindManyArgs>(args?: SelectSubset<T, COMIDAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$COMIDAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a COMIDA.
     * @param {COMIDACreateArgs} args - Arguments to create a COMIDA.
     * @example
     * // Create one COMIDA
     * const COMIDA = await prisma.cOMIDA.create({
     *   data: {
     *     // ... data to create a COMIDA
     *   }
     * })
     * 
     */
    create<T extends COMIDACreateArgs>(args: SelectSubset<T, COMIDACreateArgs<ExtArgs>>): Prisma__COMIDAClient<$Result.GetResult<Prisma.$COMIDAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many COMIDAS.
     * @param {COMIDACreateManyArgs} args - Arguments to create many COMIDAS.
     * @example
     * // Create many COMIDAS
     * const cOMIDA = await prisma.cOMIDA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends COMIDACreateManyArgs>(args?: SelectSubset<T, COMIDACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a COMIDA.
     * @param {COMIDADeleteArgs} args - Arguments to delete one COMIDA.
     * @example
     * // Delete one COMIDA
     * const COMIDA = await prisma.cOMIDA.delete({
     *   where: {
     *     // ... filter to delete one COMIDA
     *   }
     * })
     * 
     */
    delete<T extends COMIDADeleteArgs>(args: SelectSubset<T, COMIDADeleteArgs<ExtArgs>>): Prisma__COMIDAClient<$Result.GetResult<Prisma.$COMIDAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one COMIDA.
     * @param {COMIDAUpdateArgs} args - Arguments to update one COMIDA.
     * @example
     * // Update one COMIDA
     * const cOMIDA = await prisma.cOMIDA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends COMIDAUpdateArgs>(args: SelectSubset<T, COMIDAUpdateArgs<ExtArgs>>): Prisma__COMIDAClient<$Result.GetResult<Prisma.$COMIDAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more COMIDAS.
     * @param {COMIDADeleteManyArgs} args - Arguments to filter COMIDAS to delete.
     * @example
     * // Delete a few COMIDAS
     * const { count } = await prisma.cOMIDA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends COMIDADeleteManyArgs>(args?: SelectSubset<T, COMIDADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more COMIDAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COMIDAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many COMIDAS
     * const cOMIDA = await prisma.cOMIDA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends COMIDAUpdateManyArgs>(args: SelectSubset<T, COMIDAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one COMIDA.
     * @param {COMIDAUpsertArgs} args - Arguments to update or create a COMIDA.
     * @example
     * // Update or create a COMIDA
     * const cOMIDA = await prisma.cOMIDA.upsert({
     *   create: {
     *     // ... data to create a COMIDA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the COMIDA we want to update
     *   }
     * })
     */
    upsert<T extends COMIDAUpsertArgs>(args: SelectSubset<T, COMIDAUpsertArgs<ExtArgs>>): Prisma__COMIDAClient<$Result.GetResult<Prisma.$COMIDAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of COMIDAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COMIDACountArgs} args - Arguments to filter COMIDAS to count.
     * @example
     * // Count the number of COMIDAS
     * const count = await prisma.cOMIDA.count({
     *   where: {
     *     // ... the filter for the COMIDAS we want to count
     *   }
     * })
    **/
    count<T extends COMIDACountArgs>(
      args?: Subset<T, COMIDACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], COMIDACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a COMIDA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COMIDAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends COMIDAAggregateArgs>(args: Subset<T, COMIDAAggregateArgs>): Prisma.PrismaPromise<GetCOMIDAAggregateType<T>>

    /**
     * Group by COMIDA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {COMIDAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends COMIDAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: COMIDAGroupByArgs['orderBy'] }
        : { orderBy?: COMIDAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, COMIDAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCOMIDAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the COMIDA model
   */
  readonly fields: COMIDAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for COMIDA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__COMIDAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CHAROLA_COMIDA<T extends COMIDA$CHAROLA_COMIDAArgs<ExtArgs> = {}>(args?: Subset<T, COMIDA$CHAROLA_COMIDAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_COMIDAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the COMIDA model
   */
  interface COMIDAFieldRefs {
    readonly comidaId: FieldRef<"COMIDA", 'Int'>
    readonly nombre: FieldRef<"COMIDA", 'String'>
    readonly descripcion: FieldRef<"COMIDA", 'String'>
  }
    

  // Custom InputTypes
  /**
   * COMIDA findUnique
   */
  export type COMIDAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMIDA
     */
    select?: COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMIDA
     */
    omit?: COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMIDAInclude<ExtArgs> | null
    /**
     * Filter, which COMIDA to fetch.
     */
    where: COMIDAWhereUniqueInput
  }

  /**
   * COMIDA findUniqueOrThrow
   */
  export type COMIDAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMIDA
     */
    select?: COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMIDA
     */
    omit?: COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMIDAInclude<ExtArgs> | null
    /**
     * Filter, which COMIDA to fetch.
     */
    where: COMIDAWhereUniqueInput
  }

  /**
   * COMIDA findFirst
   */
  export type COMIDAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMIDA
     */
    select?: COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMIDA
     */
    omit?: COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMIDAInclude<ExtArgs> | null
    /**
     * Filter, which COMIDA to fetch.
     */
    where?: COMIDAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COMIDAS to fetch.
     */
    orderBy?: COMIDAOrderByWithRelationInput | COMIDAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for COMIDAS.
     */
    cursor?: COMIDAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COMIDAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COMIDAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of COMIDAS.
     */
    distinct?: COMIDAScalarFieldEnum | COMIDAScalarFieldEnum[]
  }

  /**
   * COMIDA findFirstOrThrow
   */
  export type COMIDAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMIDA
     */
    select?: COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMIDA
     */
    omit?: COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMIDAInclude<ExtArgs> | null
    /**
     * Filter, which COMIDA to fetch.
     */
    where?: COMIDAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COMIDAS to fetch.
     */
    orderBy?: COMIDAOrderByWithRelationInput | COMIDAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for COMIDAS.
     */
    cursor?: COMIDAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COMIDAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COMIDAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of COMIDAS.
     */
    distinct?: COMIDAScalarFieldEnum | COMIDAScalarFieldEnum[]
  }

  /**
   * COMIDA findMany
   */
  export type COMIDAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMIDA
     */
    select?: COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMIDA
     */
    omit?: COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMIDAInclude<ExtArgs> | null
    /**
     * Filter, which COMIDAS to fetch.
     */
    where?: COMIDAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of COMIDAS to fetch.
     */
    orderBy?: COMIDAOrderByWithRelationInput | COMIDAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing COMIDAS.
     */
    cursor?: COMIDAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` COMIDAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` COMIDAS.
     */
    skip?: number
    distinct?: COMIDAScalarFieldEnum | COMIDAScalarFieldEnum[]
  }

  /**
   * COMIDA create
   */
  export type COMIDACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMIDA
     */
    select?: COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMIDA
     */
    omit?: COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMIDAInclude<ExtArgs> | null
    /**
     * The data needed to create a COMIDA.
     */
    data: XOR<COMIDACreateInput, COMIDAUncheckedCreateInput>
  }

  /**
   * COMIDA createMany
   */
  export type COMIDACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many COMIDAS.
     */
    data: COMIDACreateManyInput | COMIDACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * COMIDA update
   */
  export type COMIDAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMIDA
     */
    select?: COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMIDA
     */
    omit?: COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMIDAInclude<ExtArgs> | null
    /**
     * The data needed to update a COMIDA.
     */
    data: XOR<COMIDAUpdateInput, COMIDAUncheckedUpdateInput>
    /**
     * Choose, which COMIDA to update.
     */
    where: COMIDAWhereUniqueInput
  }

  /**
   * COMIDA updateMany
   */
  export type COMIDAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update COMIDAS.
     */
    data: XOR<COMIDAUpdateManyMutationInput, COMIDAUncheckedUpdateManyInput>
    /**
     * Filter which COMIDAS to update
     */
    where?: COMIDAWhereInput
    /**
     * Limit how many COMIDAS to update.
     */
    limit?: number
  }

  /**
   * COMIDA upsert
   */
  export type COMIDAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMIDA
     */
    select?: COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMIDA
     */
    omit?: COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMIDAInclude<ExtArgs> | null
    /**
     * The filter to search for the COMIDA to update in case it exists.
     */
    where: COMIDAWhereUniqueInput
    /**
     * In case the COMIDA found by the `where` argument doesn't exist, create a new COMIDA with this data.
     */
    create: XOR<COMIDACreateInput, COMIDAUncheckedCreateInput>
    /**
     * In case the COMIDA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<COMIDAUpdateInput, COMIDAUncheckedUpdateInput>
  }

  /**
   * COMIDA delete
   */
  export type COMIDADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMIDA
     */
    select?: COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMIDA
     */
    omit?: COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMIDAInclude<ExtArgs> | null
    /**
     * Filter which COMIDA to delete.
     */
    where: COMIDAWhereUniqueInput
  }

  /**
   * COMIDA deleteMany
   */
  export type COMIDADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which COMIDAS to delete
     */
    where?: COMIDAWhereInput
    /**
     * Limit how many COMIDAS to delete.
     */
    limit?: number
  }

  /**
   * COMIDA.CHAROLA_COMIDA
   */
  export type COMIDA$CHAROLA_COMIDAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_COMIDA
     */
    select?: CHAROLA_COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_COMIDA
     */
    omit?: CHAROLA_COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_COMIDAInclude<ExtArgs> | null
    where?: CHAROLA_COMIDAWhereInput
    orderBy?: CHAROLA_COMIDAOrderByWithRelationInput | CHAROLA_COMIDAOrderByWithRelationInput[]
    cursor?: CHAROLA_COMIDAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CHAROLA_COMIDAScalarFieldEnum | CHAROLA_COMIDAScalarFieldEnum[]
  }

  /**
   * COMIDA without action
   */
  export type COMIDADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the COMIDA
     */
    select?: COMIDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the COMIDA
     */
    omit?: COMIDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: COMIDAInclude<ExtArgs> | null
  }


  /**
   * Model FRAS
   */

  export type AggregateFRAS = {
    _count: FRASCountAggregateOutputType | null
    _avg: FRASAvgAggregateOutputType | null
    _sum: FRASSumAggregateOutputType | null
    _min: FRASMinAggregateOutputType | null
    _max: FRASMaxAggregateOutputType | null
  }

  export type FRASAvgAggregateOutputType = {
    frasId: number | null
    gramosGenerados: number | null
    charolaId: number | null
  }

  export type FRASSumAggregateOutputType = {
    frasId: number | null
    gramosGenerados: number | null
    charolaId: number | null
  }

  export type FRASMinAggregateOutputType = {
    frasId: number | null
    gramosGenerados: number | null
    charolaId: number | null
  }

  export type FRASMaxAggregateOutputType = {
    frasId: number | null
    gramosGenerados: number | null
    charolaId: number | null
  }

  export type FRASCountAggregateOutputType = {
    frasId: number
    gramosGenerados: number
    charolaId: number
    _all: number
  }


  export type FRASAvgAggregateInputType = {
    frasId?: true
    gramosGenerados?: true
    charolaId?: true
  }

  export type FRASSumAggregateInputType = {
    frasId?: true
    gramosGenerados?: true
    charolaId?: true
  }

  export type FRASMinAggregateInputType = {
    frasId?: true
    gramosGenerados?: true
    charolaId?: true
  }

  export type FRASMaxAggregateInputType = {
    frasId?: true
    gramosGenerados?: true
    charolaId?: true
  }

  export type FRASCountAggregateInputType = {
    frasId?: true
    gramosGenerados?: true
    charolaId?: true
    _all?: true
  }

  export type FRASAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRAS to aggregate.
     */
    where?: FRASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRAS to fetch.
     */
    orderBy?: FRASOrderByWithRelationInput | FRASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FRASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FRAS
    **/
    _count?: true | FRASCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FRASAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FRASSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FRASMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FRASMaxAggregateInputType
  }

  export type GetFRASAggregateType<T extends FRASAggregateArgs> = {
        [P in keyof T & keyof AggregateFRAS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFRAS[P]>
      : GetScalarType<T[P], AggregateFRAS[P]>
  }




  export type FRASGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FRASWhereInput
    orderBy?: FRASOrderByWithAggregationInput | FRASOrderByWithAggregationInput[]
    by: FRASScalarFieldEnum[] | FRASScalarFieldEnum
    having?: FRASScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FRASCountAggregateInputType | true
    _avg?: FRASAvgAggregateInputType
    _sum?: FRASSumAggregateInputType
    _min?: FRASMinAggregateInputType
    _max?: FRASMaxAggregateInputType
  }

  export type FRASGroupByOutputType = {
    frasId: number
    gramosGenerados: number
    charolaId: number | null
    _count: FRASCountAggregateOutputType | null
    _avg: FRASAvgAggregateOutputType | null
    _sum: FRASSumAggregateOutputType | null
    _min: FRASMinAggregateOutputType | null
    _max: FRASMaxAggregateOutputType | null
  }

  type GetFRASGroupByPayload<T extends FRASGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FRASGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FRASGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FRASGroupByOutputType[P]>
            : GetScalarType<T[P], FRASGroupByOutputType[P]>
        }
      >
    >


  export type FRASSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    frasId?: boolean
    gramosGenerados?: boolean
    charolaId?: boolean
    CHAROLA_FRAS?: boolean | FRAS$CHAROLA_FRASArgs<ExtArgs>
    CHAROLA?: boolean | FRAS$CHAROLAArgs<ExtArgs>
    _count?: boolean | FRASCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fRAS"]>



  export type FRASSelectScalar = {
    frasId?: boolean
    gramosGenerados?: boolean
    charolaId?: boolean
  }

  export type FRASOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"frasId" | "gramosGenerados" | "charolaId", ExtArgs["result"]["fRAS"]>
  export type FRASInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA_FRAS?: boolean | FRAS$CHAROLA_FRASArgs<ExtArgs>
    CHAROLA?: boolean | FRAS$CHAROLAArgs<ExtArgs>
    _count?: boolean | FRASCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FRASPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FRAS"
    objects: {
      CHAROLA_FRAS: Prisma.$CHAROLA_FRASPayload<ExtArgs>[]
      CHAROLA: Prisma.$CHAROLAPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      frasId: number
      gramosGenerados: number
      charolaId: number | null
    }, ExtArgs["result"]["fRAS"]>
    composites: {}
  }

  type FRASGetPayload<S extends boolean | null | undefined | FRASDefaultArgs> = $Result.GetResult<Prisma.$FRASPayload, S>

  type FRASCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FRASFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FRASCountAggregateInputType | true
    }

  export interface FRASDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FRAS'], meta: { name: 'FRAS' } }
    /**
     * Find zero or one FRAS that matches the filter.
     * @param {FRASFindUniqueArgs} args - Arguments to find a FRAS
     * @example
     * // Get one FRAS
     * const fRAS = await prisma.fRAS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FRASFindUniqueArgs>(args: SelectSubset<T, FRASFindUniqueArgs<ExtArgs>>): Prisma__FRASClient<$Result.GetResult<Prisma.$FRASPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FRAS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FRASFindUniqueOrThrowArgs} args - Arguments to find a FRAS
     * @example
     * // Get one FRAS
     * const fRAS = await prisma.fRAS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FRASFindUniqueOrThrowArgs>(args: SelectSubset<T, FRASFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FRASClient<$Result.GetResult<Prisma.$FRASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FRAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRASFindFirstArgs} args - Arguments to find a FRAS
     * @example
     * // Get one FRAS
     * const fRAS = await prisma.fRAS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FRASFindFirstArgs>(args?: SelectSubset<T, FRASFindFirstArgs<ExtArgs>>): Prisma__FRASClient<$Result.GetResult<Prisma.$FRASPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FRAS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRASFindFirstOrThrowArgs} args - Arguments to find a FRAS
     * @example
     * // Get one FRAS
     * const fRAS = await prisma.fRAS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FRASFindFirstOrThrowArgs>(args?: SelectSubset<T, FRASFindFirstOrThrowArgs<ExtArgs>>): Prisma__FRASClient<$Result.GetResult<Prisma.$FRASPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FRAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRASFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FRAS
     * const fRAS = await prisma.fRAS.findMany()
     * 
     * // Get first 10 FRAS
     * const fRAS = await prisma.fRAS.findMany({ take: 10 })
     * 
     * // Only select the `frasId`
     * const fRASWithFrasIdOnly = await prisma.fRAS.findMany({ select: { frasId: true } })
     * 
     */
    findMany<T extends FRASFindManyArgs>(args?: SelectSubset<T, FRASFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FRASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FRAS.
     * @param {FRASCreateArgs} args - Arguments to create a FRAS.
     * @example
     * // Create one FRAS
     * const FRAS = await prisma.fRAS.create({
     *   data: {
     *     // ... data to create a FRAS
     *   }
     * })
     * 
     */
    create<T extends FRASCreateArgs>(args: SelectSubset<T, FRASCreateArgs<ExtArgs>>): Prisma__FRASClient<$Result.GetResult<Prisma.$FRASPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FRAS.
     * @param {FRASCreateManyArgs} args - Arguments to create many FRAS.
     * @example
     * // Create many FRAS
     * const fRAS = await prisma.fRAS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FRASCreateManyArgs>(args?: SelectSubset<T, FRASCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FRAS.
     * @param {FRASDeleteArgs} args - Arguments to delete one FRAS.
     * @example
     * // Delete one FRAS
     * const FRAS = await prisma.fRAS.delete({
     *   where: {
     *     // ... filter to delete one FRAS
     *   }
     * })
     * 
     */
    delete<T extends FRASDeleteArgs>(args: SelectSubset<T, FRASDeleteArgs<ExtArgs>>): Prisma__FRASClient<$Result.GetResult<Prisma.$FRASPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FRAS.
     * @param {FRASUpdateArgs} args - Arguments to update one FRAS.
     * @example
     * // Update one FRAS
     * const fRAS = await prisma.fRAS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FRASUpdateArgs>(args: SelectSubset<T, FRASUpdateArgs<ExtArgs>>): Prisma__FRASClient<$Result.GetResult<Prisma.$FRASPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FRAS.
     * @param {FRASDeleteManyArgs} args - Arguments to filter FRAS to delete.
     * @example
     * // Delete a few FRAS
     * const { count } = await prisma.fRAS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FRASDeleteManyArgs>(args?: SelectSubset<T, FRASDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FRAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRASUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FRAS
     * const fRAS = await prisma.fRAS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FRASUpdateManyArgs>(args: SelectSubset<T, FRASUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FRAS.
     * @param {FRASUpsertArgs} args - Arguments to update or create a FRAS.
     * @example
     * // Update or create a FRAS
     * const fRAS = await prisma.fRAS.upsert({
     *   create: {
     *     // ... data to create a FRAS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FRAS we want to update
     *   }
     * })
     */
    upsert<T extends FRASUpsertArgs>(args: SelectSubset<T, FRASUpsertArgs<ExtArgs>>): Prisma__FRASClient<$Result.GetResult<Prisma.$FRASPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FRAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRASCountArgs} args - Arguments to filter FRAS to count.
     * @example
     * // Count the number of FRAS
     * const count = await prisma.fRAS.count({
     *   where: {
     *     // ... the filter for the FRAS we want to count
     *   }
     * })
    **/
    count<T extends FRASCountArgs>(
      args?: Subset<T, FRASCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FRASCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FRAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRASAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FRASAggregateArgs>(args: Subset<T, FRASAggregateArgs>): Prisma.PrismaPromise<GetFRASAggregateType<T>>

    /**
     * Group by FRAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FRASGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FRASGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FRASGroupByArgs['orderBy'] }
        : { orderBy?: FRASGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FRASGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFRASGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FRAS model
   */
  readonly fields: FRASFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FRAS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FRASClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CHAROLA_FRAS<T extends FRAS$CHAROLA_FRASArgs<ExtArgs> = {}>(args?: Subset<T, FRAS$CHAROLA_FRASArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_FRASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CHAROLA<T extends FRAS$CHAROLAArgs<ExtArgs> = {}>(args?: Subset<T, FRAS$CHAROLAArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FRAS model
   */
  interface FRASFieldRefs {
    readonly frasId: FieldRef<"FRAS", 'Int'>
    readonly gramosGenerados: FieldRef<"FRAS", 'Float'>
    readonly charolaId: FieldRef<"FRAS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FRAS findUnique
   */
  export type FRASFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRAS
     */
    select?: FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FRAS
     */
    omit?: FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FRASInclude<ExtArgs> | null
    /**
     * Filter, which FRAS to fetch.
     */
    where: FRASWhereUniqueInput
  }

  /**
   * FRAS findUniqueOrThrow
   */
  export type FRASFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRAS
     */
    select?: FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FRAS
     */
    omit?: FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FRASInclude<ExtArgs> | null
    /**
     * Filter, which FRAS to fetch.
     */
    where: FRASWhereUniqueInput
  }

  /**
   * FRAS findFirst
   */
  export type FRASFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRAS
     */
    select?: FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FRAS
     */
    omit?: FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FRASInclude<ExtArgs> | null
    /**
     * Filter, which FRAS to fetch.
     */
    where?: FRASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRAS to fetch.
     */
    orderBy?: FRASOrderByWithRelationInput | FRASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRAS.
     */
    cursor?: FRASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRAS.
     */
    distinct?: FRASScalarFieldEnum | FRASScalarFieldEnum[]
  }

  /**
   * FRAS findFirstOrThrow
   */
  export type FRASFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRAS
     */
    select?: FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FRAS
     */
    omit?: FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FRASInclude<ExtArgs> | null
    /**
     * Filter, which FRAS to fetch.
     */
    where?: FRASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRAS to fetch.
     */
    orderBy?: FRASOrderByWithRelationInput | FRASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FRAS.
     */
    cursor?: FRASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FRAS.
     */
    distinct?: FRASScalarFieldEnum | FRASScalarFieldEnum[]
  }

  /**
   * FRAS findMany
   */
  export type FRASFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRAS
     */
    select?: FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FRAS
     */
    omit?: FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FRASInclude<ExtArgs> | null
    /**
     * Filter, which FRAS to fetch.
     */
    where?: FRASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FRAS to fetch.
     */
    orderBy?: FRASOrderByWithRelationInput | FRASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FRAS.
     */
    cursor?: FRASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FRAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FRAS.
     */
    skip?: number
    distinct?: FRASScalarFieldEnum | FRASScalarFieldEnum[]
  }

  /**
   * FRAS create
   */
  export type FRASCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRAS
     */
    select?: FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FRAS
     */
    omit?: FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FRASInclude<ExtArgs> | null
    /**
     * The data needed to create a FRAS.
     */
    data: XOR<FRASCreateInput, FRASUncheckedCreateInput>
  }

  /**
   * FRAS createMany
   */
  export type FRASCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FRAS.
     */
    data: FRASCreateManyInput | FRASCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FRAS update
   */
  export type FRASUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRAS
     */
    select?: FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FRAS
     */
    omit?: FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FRASInclude<ExtArgs> | null
    /**
     * The data needed to update a FRAS.
     */
    data: XOR<FRASUpdateInput, FRASUncheckedUpdateInput>
    /**
     * Choose, which FRAS to update.
     */
    where: FRASWhereUniqueInput
  }

  /**
   * FRAS updateMany
   */
  export type FRASUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FRAS.
     */
    data: XOR<FRASUpdateManyMutationInput, FRASUncheckedUpdateManyInput>
    /**
     * Filter which FRAS to update
     */
    where?: FRASWhereInput
    /**
     * Limit how many FRAS to update.
     */
    limit?: number
  }

  /**
   * FRAS upsert
   */
  export type FRASUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRAS
     */
    select?: FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FRAS
     */
    omit?: FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FRASInclude<ExtArgs> | null
    /**
     * The filter to search for the FRAS to update in case it exists.
     */
    where: FRASWhereUniqueInput
    /**
     * In case the FRAS found by the `where` argument doesn't exist, create a new FRAS with this data.
     */
    create: XOR<FRASCreateInput, FRASUncheckedCreateInput>
    /**
     * In case the FRAS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FRASUpdateInput, FRASUncheckedUpdateInput>
  }

  /**
   * FRAS delete
   */
  export type FRASDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRAS
     */
    select?: FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FRAS
     */
    omit?: FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FRASInclude<ExtArgs> | null
    /**
     * Filter which FRAS to delete.
     */
    where: FRASWhereUniqueInput
  }

  /**
   * FRAS deleteMany
   */
  export type FRASDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FRAS to delete
     */
    where?: FRASWhereInput
    /**
     * Limit how many FRAS to delete.
     */
    limit?: number
  }

  /**
   * FRAS.CHAROLA_FRAS
   */
  export type FRAS$CHAROLA_FRASArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_FRAS
     */
    select?: CHAROLA_FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_FRAS
     */
    omit?: CHAROLA_FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_FRASInclude<ExtArgs> | null
    where?: CHAROLA_FRASWhereInput
    orderBy?: CHAROLA_FRASOrderByWithRelationInput | CHAROLA_FRASOrderByWithRelationInput[]
    cursor?: CHAROLA_FRASWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CHAROLA_FRASScalarFieldEnum | CHAROLA_FRASScalarFieldEnum[]
  }

  /**
   * FRAS.CHAROLA
   */
  export type FRAS$CHAROLAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA
     */
    select?: CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA
     */
    omit?: CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLAInclude<ExtArgs> | null
    where?: CHAROLAWhereInput
  }

  /**
   * FRAS without action
   */
  export type FRASDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FRAS
     */
    select?: FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FRAS
     */
    omit?: FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FRASInclude<ExtArgs> | null
  }


  /**
   * Model HIDRATACION
   */

  export type AggregateHIDRATACION = {
    _count: HIDRATACIONCountAggregateOutputType | null
    _avg: HIDRATACIONAvgAggregateOutputType | null
    _sum: HIDRATACIONSumAggregateOutputType | null
    _min: HIDRATACIONMinAggregateOutputType | null
    _max: HIDRATACIONMaxAggregateOutputType | null
  }

  export type HIDRATACIONAvgAggregateOutputType = {
    hidratacionId: number | null
  }

  export type HIDRATACIONSumAggregateOutputType = {
    hidratacionId: number | null
  }

  export type HIDRATACIONMinAggregateOutputType = {
    hidratacionId: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type HIDRATACIONMaxAggregateOutputType = {
    hidratacionId: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type HIDRATACIONCountAggregateOutputType = {
    hidratacionId: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type HIDRATACIONAvgAggregateInputType = {
    hidratacionId?: true
  }

  export type HIDRATACIONSumAggregateInputType = {
    hidratacionId?: true
  }

  export type HIDRATACIONMinAggregateInputType = {
    hidratacionId?: true
    nombre?: true
    descripcion?: true
  }

  export type HIDRATACIONMaxAggregateInputType = {
    hidratacionId?: true
    nombre?: true
    descripcion?: true
  }

  export type HIDRATACIONCountAggregateInputType = {
    hidratacionId?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type HIDRATACIONAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HIDRATACION to aggregate.
     */
    where?: HIDRATACIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HIDRATACIONS to fetch.
     */
    orderBy?: HIDRATACIONOrderByWithRelationInput | HIDRATACIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HIDRATACIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HIDRATACIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HIDRATACIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HIDRATACIONS
    **/
    _count?: true | HIDRATACIONCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HIDRATACIONAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HIDRATACIONSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HIDRATACIONMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HIDRATACIONMaxAggregateInputType
  }

  export type GetHIDRATACIONAggregateType<T extends HIDRATACIONAggregateArgs> = {
        [P in keyof T & keyof AggregateHIDRATACION]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHIDRATACION[P]>
      : GetScalarType<T[P], AggregateHIDRATACION[P]>
  }




  export type HIDRATACIONGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HIDRATACIONWhereInput
    orderBy?: HIDRATACIONOrderByWithAggregationInput | HIDRATACIONOrderByWithAggregationInput[]
    by: HIDRATACIONScalarFieldEnum[] | HIDRATACIONScalarFieldEnum
    having?: HIDRATACIONScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HIDRATACIONCountAggregateInputType | true
    _avg?: HIDRATACIONAvgAggregateInputType
    _sum?: HIDRATACIONSumAggregateInputType
    _min?: HIDRATACIONMinAggregateInputType
    _max?: HIDRATACIONMaxAggregateInputType
  }

  export type HIDRATACIONGroupByOutputType = {
    hidratacionId: number
    nombre: string | null
    descripcion: string | null
    _count: HIDRATACIONCountAggregateOutputType | null
    _avg: HIDRATACIONAvgAggregateOutputType | null
    _sum: HIDRATACIONSumAggregateOutputType | null
    _min: HIDRATACIONMinAggregateOutputType | null
    _max: HIDRATACIONMaxAggregateOutputType | null
  }

  type GetHIDRATACIONGroupByPayload<T extends HIDRATACIONGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HIDRATACIONGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HIDRATACIONGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HIDRATACIONGroupByOutputType[P]>
            : GetScalarType<T[P], HIDRATACIONGroupByOutputType[P]>
        }
      >
    >


  export type HIDRATACIONSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hidratacionId?: boolean
    nombre?: boolean
    descripcion?: boolean
    CHAROLA_HIDRATACION?: boolean | HIDRATACION$CHAROLA_HIDRATACIONArgs<ExtArgs>
    _count?: boolean | HIDRATACIONCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hIDRATACION"]>



  export type HIDRATACIONSelectScalar = {
    hidratacionId?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type HIDRATACIONOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"hidratacionId" | "nombre" | "descripcion", ExtArgs["result"]["hIDRATACION"]>
  export type HIDRATACIONInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA_HIDRATACION?: boolean | HIDRATACION$CHAROLA_HIDRATACIONArgs<ExtArgs>
    _count?: boolean | HIDRATACIONCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HIDRATACIONPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HIDRATACION"
    objects: {
      CHAROLA_HIDRATACION: Prisma.$CHAROLA_HIDRATACIONPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      hidratacionId: number
      nombre: string | null
      descripcion: string | null
    }, ExtArgs["result"]["hIDRATACION"]>
    composites: {}
  }

  type HIDRATACIONGetPayload<S extends boolean | null | undefined | HIDRATACIONDefaultArgs> = $Result.GetResult<Prisma.$HIDRATACIONPayload, S>

  type HIDRATACIONCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HIDRATACIONFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HIDRATACIONCountAggregateInputType | true
    }

  export interface HIDRATACIONDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HIDRATACION'], meta: { name: 'HIDRATACION' } }
    /**
     * Find zero or one HIDRATACION that matches the filter.
     * @param {HIDRATACIONFindUniqueArgs} args - Arguments to find a HIDRATACION
     * @example
     * // Get one HIDRATACION
     * const hIDRATACION = await prisma.hIDRATACION.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HIDRATACIONFindUniqueArgs>(args: SelectSubset<T, HIDRATACIONFindUniqueArgs<ExtArgs>>): Prisma__HIDRATACIONClient<$Result.GetResult<Prisma.$HIDRATACIONPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HIDRATACION that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HIDRATACIONFindUniqueOrThrowArgs} args - Arguments to find a HIDRATACION
     * @example
     * // Get one HIDRATACION
     * const hIDRATACION = await prisma.hIDRATACION.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HIDRATACIONFindUniqueOrThrowArgs>(args: SelectSubset<T, HIDRATACIONFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HIDRATACIONClient<$Result.GetResult<Prisma.$HIDRATACIONPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HIDRATACION that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HIDRATACIONFindFirstArgs} args - Arguments to find a HIDRATACION
     * @example
     * // Get one HIDRATACION
     * const hIDRATACION = await prisma.hIDRATACION.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HIDRATACIONFindFirstArgs>(args?: SelectSubset<T, HIDRATACIONFindFirstArgs<ExtArgs>>): Prisma__HIDRATACIONClient<$Result.GetResult<Prisma.$HIDRATACIONPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HIDRATACION that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HIDRATACIONFindFirstOrThrowArgs} args - Arguments to find a HIDRATACION
     * @example
     * // Get one HIDRATACION
     * const hIDRATACION = await prisma.hIDRATACION.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HIDRATACIONFindFirstOrThrowArgs>(args?: SelectSubset<T, HIDRATACIONFindFirstOrThrowArgs<ExtArgs>>): Prisma__HIDRATACIONClient<$Result.GetResult<Prisma.$HIDRATACIONPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HIDRATACIONS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HIDRATACIONFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HIDRATACIONS
     * const hIDRATACIONS = await prisma.hIDRATACION.findMany()
     * 
     * // Get first 10 HIDRATACIONS
     * const hIDRATACIONS = await prisma.hIDRATACION.findMany({ take: 10 })
     * 
     * // Only select the `hidratacionId`
     * const hIDRATACIONWithHidratacionIdOnly = await prisma.hIDRATACION.findMany({ select: { hidratacionId: true } })
     * 
     */
    findMany<T extends HIDRATACIONFindManyArgs>(args?: SelectSubset<T, HIDRATACIONFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HIDRATACIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HIDRATACION.
     * @param {HIDRATACIONCreateArgs} args - Arguments to create a HIDRATACION.
     * @example
     * // Create one HIDRATACION
     * const HIDRATACION = await prisma.hIDRATACION.create({
     *   data: {
     *     // ... data to create a HIDRATACION
     *   }
     * })
     * 
     */
    create<T extends HIDRATACIONCreateArgs>(args: SelectSubset<T, HIDRATACIONCreateArgs<ExtArgs>>): Prisma__HIDRATACIONClient<$Result.GetResult<Prisma.$HIDRATACIONPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HIDRATACIONS.
     * @param {HIDRATACIONCreateManyArgs} args - Arguments to create many HIDRATACIONS.
     * @example
     * // Create many HIDRATACIONS
     * const hIDRATACION = await prisma.hIDRATACION.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HIDRATACIONCreateManyArgs>(args?: SelectSubset<T, HIDRATACIONCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HIDRATACION.
     * @param {HIDRATACIONDeleteArgs} args - Arguments to delete one HIDRATACION.
     * @example
     * // Delete one HIDRATACION
     * const HIDRATACION = await prisma.hIDRATACION.delete({
     *   where: {
     *     // ... filter to delete one HIDRATACION
     *   }
     * })
     * 
     */
    delete<T extends HIDRATACIONDeleteArgs>(args: SelectSubset<T, HIDRATACIONDeleteArgs<ExtArgs>>): Prisma__HIDRATACIONClient<$Result.GetResult<Prisma.$HIDRATACIONPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HIDRATACION.
     * @param {HIDRATACIONUpdateArgs} args - Arguments to update one HIDRATACION.
     * @example
     * // Update one HIDRATACION
     * const hIDRATACION = await prisma.hIDRATACION.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HIDRATACIONUpdateArgs>(args: SelectSubset<T, HIDRATACIONUpdateArgs<ExtArgs>>): Prisma__HIDRATACIONClient<$Result.GetResult<Prisma.$HIDRATACIONPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HIDRATACIONS.
     * @param {HIDRATACIONDeleteManyArgs} args - Arguments to filter HIDRATACIONS to delete.
     * @example
     * // Delete a few HIDRATACIONS
     * const { count } = await prisma.hIDRATACION.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HIDRATACIONDeleteManyArgs>(args?: SelectSubset<T, HIDRATACIONDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HIDRATACIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HIDRATACIONUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HIDRATACIONS
     * const hIDRATACION = await prisma.hIDRATACION.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HIDRATACIONUpdateManyArgs>(args: SelectSubset<T, HIDRATACIONUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HIDRATACION.
     * @param {HIDRATACIONUpsertArgs} args - Arguments to update or create a HIDRATACION.
     * @example
     * // Update or create a HIDRATACION
     * const hIDRATACION = await prisma.hIDRATACION.upsert({
     *   create: {
     *     // ... data to create a HIDRATACION
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HIDRATACION we want to update
     *   }
     * })
     */
    upsert<T extends HIDRATACIONUpsertArgs>(args: SelectSubset<T, HIDRATACIONUpsertArgs<ExtArgs>>): Prisma__HIDRATACIONClient<$Result.GetResult<Prisma.$HIDRATACIONPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HIDRATACIONS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HIDRATACIONCountArgs} args - Arguments to filter HIDRATACIONS to count.
     * @example
     * // Count the number of HIDRATACIONS
     * const count = await prisma.hIDRATACION.count({
     *   where: {
     *     // ... the filter for the HIDRATACIONS we want to count
     *   }
     * })
    **/
    count<T extends HIDRATACIONCountArgs>(
      args?: Subset<T, HIDRATACIONCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HIDRATACIONCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HIDRATACION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HIDRATACIONAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HIDRATACIONAggregateArgs>(args: Subset<T, HIDRATACIONAggregateArgs>): Prisma.PrismaPromise<GetHIDRATACIONAggregateType<T>>

    /**
     * Group by HIDRATACION.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HIDRATACIONGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HIDRATACIONGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HIDRATACIONGroupByArgs['orderBy'] }
        : { orderBy?: HIDRATACIONGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HIDRATACIONGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHIDRATACIONGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HIDRATACION model
   */
  readonly fields: HIDRATACIONFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HIDRATACION.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HIDRATACIONClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CHAROLA_HIDRATACION<T extends HIDRATACION$CHAROLA_HIDRATACIONArgs<ExtArgs> = {}>(args?: Subset<T, HIDRATACION$CHAROLA_HIDRATACIONArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_HIDRATACIONPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HIDRATACION model
   */
  interface HIDRATACIONFieldRefs {
    readonly hidratacionId: FieldRef<"HIDRATACION", 'Int'>
    readonly nombre: FieldRef<"HIDRATACION", 'String'>
    readonly descripcion: FieldRef<"HIDRATACION", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HIDRATACION findUnique
   */
  export type HIDRATACIONFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HIDRATACION
     */
    select?: HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HIDRATACION
     */
    omit?: HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HIDRATACIONInclude<ExtArgs> | null
    /**
     * Filter, which HIDRATACION to fetch.
     */
    where: HIDRATACIONWhereUniqueInput
  }

  /**
   * HIDRATACION findUniqueOrThrow
   */
  export type HIDRATACIONFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HIDRATACION
     */
    select?: HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HIDRATACION
     */
    omit?: HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HIDRATACIONInclude<ExtArgs> | null
    /**
     * Filter, which HIDRATACION to fetch.
     */
    where: HIDRATACIONWhereUniqueInput
  }

  /**
   * HIDRATACION findFirst
   */
  export type HIDRATACIONFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HIDRATACION
     */
    select?: HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HIDRATACION
     */
    omit?: HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HIDRATACIONInclude<ExtArgs> | null
    /**
     * Filter, which HIDRATACION to fetch.
     */
    where?: HIDRATACIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HIDRATACIONS to fetch.
     */
    orderBy?: HIDRATACIONOrderByWithRelationInput | HIDRATACIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HIDRATACIONS.
     */
    cursor?: HIDRATACIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HIDRATACIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HIDRATACIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HIDRATACIONS.
     */
    distinct?: HIDRATACIONScalarFieldEnum | HIDRATACIONScalarFieldEnum[]
  }

  /**
   * HIDRATACION findFirstOrThrow
   */
  export type HIDRATACIONFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HIDRATACION
     */
    select?: HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HIDRATACION
     */
    omit?: HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HIDRATACIONInclude<ExtArgs> | null
    /**
     * Filter, which HIDRATACION to fetch.
     */
    where?: HIDRATACIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HIDRATACIONS to fetch.
     */
    orderBy?: HIDRATACIONOrderByWithRelationInput | HIDRATACIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HIDRATACIONS.
     */
    cursor?: HIDRATACIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HIDRATACIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HIDRATACIONS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HIDRATACIONS.
     */
    distinct?: HIDRATACIONScalarFieldEnum | HIDRATACIONScalarFieldEnum[]
  }

  /**
   * HIDRATACION findMany
   */
  export type HIDRATACIONFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HIDRATACION
     */
    select?: HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HIDRATACION
     */
    omit?: HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HIDRATACIONInclude<ExtArgs> | null
    /**
     * Filter, which HIDRATACIONS to fetch.
     */
    where?: HIDRATACIONWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HIDRATACIONS to fetch.
     */
    orderBy?: HIDRATACIONOrderByWithRelationInput | HIDRATACIONOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HIDRATACIONS.
     */
    cursor?: HIDRATACIONWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HIDRATACIONS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HIDRATACIONS.
     */
    skip?: number
    distinct?: HIDRATACIONScalarFieldEnum | HIDRATACIONScalarFieldEnum[]
  }

  /**
   * HIDRATACION create
   */
  export type HIDRATACIONCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HIDRATACION
     */
    select?: HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HIDRATACION
     */
    omit?: HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HIDRATACIONInclude<ExtArgs> | null
    /**
     * The data needed to create a HIDRATACION.
     */
    data: XOR<HIDRATACIONCreateInput, HIDRATACIONUncheckedCreateInput>
  }

  /**
   * HIDRATACION createMany
   */
  export type HIDRATACIONCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HIDRATACIONS.
     */
    data: HIDRATACIONCreateManyInput | HIDRATACIONCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HIDRATACION update
   */
  export type HIDRATACIONUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HIDRATACION
     */
    select?: HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HIDRATACION
     */
    omit?: HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HIDRATACIONInclude<ExtArgs> | null
    /**
     * The data needed to update a HIDRATACION.
     */
    data: XOR<HIDRATACIONUpdateInput, HIDRATACIONUncheckedUpdateInput>
    /**
     * Choose, which HIDRATACION to update.
     */
    where: HIDRATACIONWhereUniqueInput
  }

  /**
   * HIDRATACION updateMany
   */
  export type HIDRATACIONUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HIDRATACIONS.
     */
    data: XOR<HIDRATACIONUpdateManyMutationInput, HIDRATACIONUncheckedUpdateManyInput>
    /**
     * Filter which HIDRATACIONS to update
     */
    where?: HIDRATACIONWhereInput
    /**
     * Limit how many HIDRATACIONS to update.
     */
    limit?: number
  }

  /**
   * HIDRATACION upsert
   */
  export type HIDRATACIONUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HIDRATACION
     */
    select?: HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HIDRATACION
     */
    omit?: HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HIDRATACIONInclude<ExtArgs> | null
    /**
     * The filter to search for the HIDRATACION to update in case it exists.
     */
    where: HIDRATACIONWhereUniqueInput
    /**
     * In case the HIDRATACION found by the `where` argument doesn't exist, create a new HIDRATACION with this data.
     */
    create: XOR<HIDRATACIONCreateInput, HIDRATACIONUncheckedCreateInput>
    /**
     * In case the HIDRATACION was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HIDRATACIONUpdateInput, HIDRATACIONUncheckedUpdateInput>
  }

  /**
   * HIDRATACION delete
   */
  export type HIDRATACIONDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HIDRATACION
     */
    select?: HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HIDRATACION
     */
    omit?: HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HIDRATACIONInclude<ExtArgs> | null
    /**
     * Filter which HIDRATACION to delete.
     */
    where: HIDRATACIONWhereUniqueInput
  }

  /**
   * HIDRATACION deleteMany
   */
  export type HIDRATACIONDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HIDRATACIONS to delete
     */
    where?: HIDRATACIONWhereInput
    /**
     * Limit how many HIDRATACIONS to delete.
     */
    limit?: number
  }

  /**
   * HIDRATACION.CHAROLA_HIDRATACION
   */
  export type HIDRATACION$CHAROLA_HIDRATACIONArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_HIDRATACION
     */
    select?: CHAROLA_HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_HIDRATACION
     */
    omit?: CHAROLA_HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_HIDRATACIONInclude<ExtArgs> | null
    where?: CHAROLA_HIDRATACIONWhereInput
    orderBy?: CHAROLA_HIDRATACIONOrderByWithRelationInput | CHAROLA_HIDRATACIONOrderByWithRelationInput[]
    cursor?: CHAROLA_HIDRATACIONWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CHAROLA_HIDRATACIONScalarFieldEnum | CHAROLA_HIDRATACIONScalarFieldEnum[]
  }

  /**
   * HIDRATACION without action
   */
  export type HIDRATACIONDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HIDRATACION
     */
    select?: HIDRATACIONSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HIDRATACION
     */
    omit?: HIDRATACIONOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HIDRATACIONInclude<ExtArgs> | null
  }


  /**
   * Model USUARIO
   */

  export type AggregateUSUARIO = {
    _count: USUARIOCountAggregateOutputType | null
    _avg: USUARIOAvgAggregateOutputType | null
    _sum: USUARIOSumAggregateOutputType | null
    _min: USUARIOMinAggregateOutputType | null
    _max: USUARIOMaxAggregateOutputType | null
  }

  export type USUARIOAvgAggregateOutputType = {
    usuarioId: number | null
  }

  export type USUARIOSumAggregateOutputType = {
    usuarioId: number | null
  }

  export type USUARIOMinAggregateOutputType = {
    usuarioId: number | null
    user: string | null
    contrasena: string | null
    nombre: string | null
    apellido_m: string | null
    apellido_p: string | null
  }

  export type USUARIOMaxAggregateOutputType = {
    usuarioId: number | null
    user: string | null
    contrasena: string | null
    nombre: string | null
    apellido_m: string | null
    apellido_p: string | null
  }

  export type USUARIOCountAggregateOutputType = {
    usuarioId: number
    user: number
    contrasena: number
    nombre: number
    apellido_m: number
    apellido_p: number
    _all: number
  }


  export type USUARIOAvgAggregateInputType = {
    usuarioId?: true
  }

  export type USUARIOSumAggregateInputType = {
    usuarioId?: true
  }

  export type USUARIOMinAggregateInputType = {
    usuarioId?: true
    user?: true
    contrasena?: true
    nombre?: true
    apellido_m?: true
    apellido_p?: true
  }

  export type USUARIOMaxAggregateInputType = {
    usuarioId?: true
    user?: true
    contrasena?: true
    nombre?: true
    apellido_m?: true
    apellido_p?: true
  }

  export type USUARIOCountAggregateInputType = {
    usuarioId?: true
    user?: true
    contrasena?: true
    nombre?: true
    apellido_m?: true
    apellido_p?: true
    _all?: true
  }

  export type USUARIOAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USUARIO to aggregate.
     */
    where?: USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USUARIOS to fetch.
     */
    orderBy?: USUARIOOrderByWithRelationInput | USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USUARIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned USUARIOS
    **/
    _count?: true | USUARIOCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: USUARIOAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: USUARIOSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: USUARIOMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: USUARIOMaxAggregateInputType
  }

  export type GetUSUARIOAggregateType<T extends USUARIOAggregateArgs> = {
        [P in keyof T & keyof AggregateUSUARIO]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUSUARIO[P]>
      : GetScalarType<T[P], AggregateUSUARIO[P]>
  }




  export type USUARIOGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: USUARIOWhereInput
    orderBy?: USUARIOOrderByWithAggregationInput | USUARIOOrderByWithAggregationInput[]
    by: USUARIOScalarFieldEnum[] | USUARIOScalarFieldEnum
    having?: USUARIOScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: USUARIOCountAggregateInputType | true
    _avg?: USUARIOAvgAggregateInputType
    _sum?: USUARIOSumAggregateInputType
    _min?: USUARIOMinAggregateInputType
    _max?: USUARIOMaxAggregateInputType
  }

  export type USUARIOGroupByOutputType = {
    usuarioId: number
    user: string
    contrasena: string
    nombre: string
    apellido_m: string | null
    apellido_p: string | null
    _count: USUARIOCountAggregateOutputType | null
    _avg: USUARIOAvgAggregateOutputType | null
    _sum: USUARIOSumAggregateOutputType | null
    _min: USUARIOMinAggregateOutputType | null
    _max: USUARIOMaxAggregateOutputType | null
  }

  type GetUSUARIOGroupByPayload<T extends USUARIOGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<USUARIOGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof USUARIOGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], USUARIOGroupByOutputType[P]>
            : GetScalarType<T[P], USUARIOGroupByOutputType[P]>
        }
      >
    >


  export type USUARIOSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    user?: boolean
    contrasena?: boolean
    nombre?: boolean
    apellido_m?: boolean
    apellido_p?: boolean
    ADMINISTRADOR?: boolean | USUARIO$ADMINISTRADORArgs<ExtArgs>
    USUARIO_CHAROLA?: boolean | USUARIO$USUARIO_CHAROLAArgs<ExtArgs>
    _count?: boolean | USUARIOCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uSUARIO"]>



  export type USUARIOSelectScalar = {
    usuarioId?: boolean
    user?: boolean
    contrasena?: boolean
    nombre?: boolean
    apellido_m?: boolean
    apellido_p?: boolean
  }

  export type USUARIOOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuarioId" | "user" | "contrasena" | "nombre" | "apellido_m" | "apellido_p", ExtArgs["result"]["uSUARIO"]>
  export type USUARIOInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ADMINISTRADOR?: boolean | USUARIO$ADMINISTRADORArgs<ExtArgs>
    USUARIO_CHAROLA?: boolean | USUARIO$USUARIO_CHAROLAArgs<ExtArgs>
    _count?: boolean | USUARIOCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $USUARIOPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "USUARIO"
    objects: {
      ADMINISTRADOR: Prisma.$ADMINISTRADORPayload<ExtArgs>[]
      USUARIO_CHAROLA: Prisma.$USUARIO_CHAROLAPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      usuarioId: number
      user: string
      contrasena: string
      nombre: string
      apellido_m: string | null
      apellido_p: string | null
    }, ExtArgs["result"]["uSUARIO"]>
    composites: {}
  }

  type USUARIOGetPayload<S extends boolean | null | undefined | USUARIODefaultArgs> = $Result.GetResult<Prisma.$USUARIOPayload, S>

  type USUARIOCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<USUARIOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: USUARIOCountAggregateInputType | true
    }

  export interface USUARIODelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['USUARIO'], meta: { name: 'USUARIO' } }
    /**
     * Find zero or one USUARIO that matches the filter.
     * @param {USUARIOFindUniqueArgs} args - Arguments to find a USUARIO
     * @example
     * // Get one USUARIO
     * const uSUARIO = await prisma.uSUARIO.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends USUARIOFindUniqueArgs>(args: SelectSubset<T, USUARIOFindUniqueArgs<ExtArgs>>): Prisma__USUARIOClient<$Result.GetResult<Prisma.$USUARIOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one USUARIO that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {USUARIOFindUniqueOrThrowArgs} args - Arguments to find a USUARIO
     * @example
     * // Get one USUARIO
     * const uSUARIO = await prisma.uSUARIO.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends USUARIOFindUniqueOrThrowArgs>(args: SelectSubset<T, USUARIOFindUniqueOrThrowArgs<ExtArgs>>): Prisma__USUARIOClient<$Result.GetResult<Prisma.$USUARIOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USUARIO that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USUARIOFindFirstArgs} args - Arguments to find a USUARIO
     * @example
     * // Get one USUARIO
     * const uSUARIO = await prisma.uSUARIO.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends USUARIOFindFirstArgs>(args?: SelectSubset<T, USUARIOFindFirstArgs<ExtArgs>>): Prisma__USUARIOClient<$Result.GetResult<Prisma.$USUARIOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USUARIO that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USUARIOFindFirstOrThrowArgs} args - Arguments to find a USUARIO
     * @example
     * // Get one USUARIO
     * const uSUARIO = await prisma.uSUARIO.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends USUARIOFindFirstOrThrowArgs>(args?: SelectSubset<T, USUARIOFindFirstOrThrowArgs<ExtArgs>>): Prisma__USUARIOClient<$Result.GetResult<Prisma.$USUARIOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more USUARIOS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USUARIOFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all USUARIOS
     * const uSUARIOS = await prisma.uSUARIO.findMany()
     * 
     * // Get first 10 USUARIOS
     * const uSUARIOS = await prisma.uSUARIO.findMany({ take: 10 })
     * 
     * // Only select the `usuarioId`
     * const uSUARIOWithUsuarioIdOnly = await prisma.uSUARIO.findMany({ select: { usuarioId: true } })
     * 
     */
    findMany<T extends USUARIOFindManyArgs>(args?: SelectSubset<T, USUARIOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USUARIOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a USUARIO.
     * @param {USUARIOCreateArgs} args - Arguments to create a USUARIO.
     * @example
     * // Create one USUARIO
     * const USUARIO = await prisma.uSUARIO.create({
     *   data: {
     *     // ... data to create a USUARIO
     *   }
     * })
     * 
     */
    create<T extends USUARIOCreateArgs>(args: SelectSubset<T, USUARIOCreateArgs<ExtArgs>>): Prisma__USUARIOClient<$Result.GetResult<Prisma.$USUARIOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many USUARIOS.
     * @param {USUARIOCreateManyArgs} args - Arguments to create many USUARIOS.
     * @example
     * // Create many USUARIOS
     * const uSUARIO = await prisma.uSUARIO.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends USUARIOCreateManyArgs>(args?: SelectSubset<T, USUARIOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a USUARIO.
     * @param {USUARIODeleteArgs} args - Arguments to delete one USUARIO.
     * @example
     * // Delete one USUARIO
     * const USUARIO = await prisma.uSUARIO.delete({
     *   where: {
     *     // ... filter to delete one USUARIO
     *   }
     * })
     * 
     */
    delete<T extends USUARIODeleteArgs>(args: SelectSubset<T, USUARIODeleteArgs<ExtArgs>>): Prisma__USUARIOClient<$Result.GetResult<Prisma.$USUARIOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one USUARIO.
     * @param {USUARIOUpdateArgs} args - Arguments to update one USUARIO.
     * @example
     * // Update one USUARIO
     * const uSUARIO = await prisma.uSUARIO.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends USUARIOUpdateArgs>(args: SelectSubset<T, USUARIOUpdateArgs<ExtArgs>>): Prisma__USUARIOClient<$Result.GetResult<Prisma.$USUARIOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more USUARIOS.
     * @param {USUARIODeleteManyArgs} args - Arguments to filter USUARIOS to delete.
     * @example
     * // Delete a few USUARIOS
     * const { count } = await prisma.uSUARIO.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends USUARIODeleteManyArgs>(args?: SelectSubset<T, USUARIODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USUARIOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USUARIOUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many USUARIOS
     * const uSUARIO = await prisma.uSUARIO.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends USUARIOUpdateManyArgs>(args: SelectSubset<T, USUARIOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one USUARIO.
     * @param {USUARIOUpsertArgs} args - Arguments to update or create a USUARIO.
     * @example
     * // Update or create a USUARIO
     * const uSUARIO = await prisma.uSUARIO.upsert({
     *   create: {
     *     // ... data to create a USUARIO
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the USUARIO we want to update
     *   }
     * })
     */
    upsert<T extends USUARIOUpsertArgs>(args: SelectSubset<T, USUARIOUpsertArgs<ExtArgs>>): Prisma__USUARIOClient<$Result.GetResult<Prisma.$USUARIOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of USUARIOS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USUARIOCountArgs} args - Arguments to filter USUARIOS to count.
     * @example
     * // Count the number of USUARIOS
     * const count = await prisma.uSUARIO.count({
     *   where: {
     *     // ... the filter for the USUARIOS we want to count
     *   }
     * })
    **/
    count<T extends USUARIOCountArgs>(
      args?: Subset<T, USUARIOCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], USUARIOCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a USUARIO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USUARIOAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends USUARIOAggregateArgs>(args: Subset<T, USUARIOAggregateArgs>): Prisma.PrismaPromise<GetUSUARIOAggregateType<T>>

    /**
     * Group by USUARIO.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USUARIOGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends USUARIOGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: USUARIOGroupByArgs['orderBy'] }
        : { orderBy?: USUARIOGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, USUARIOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSUARIOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the USUARIO model
   */
  readonly fields: USUARIOFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for USUARIO.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__USUARIOClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ADMINISTRADOR<T extends USUARIO$ADMINISTRADORArgs<ExtArgs> = {}>(args?: Subset<T, USUARIO$ADMINISTRADORArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ADMINISTRADORPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    USUARIO_CHAROLA<T extends USUARIO$USUARIO_CHAROLAArgs<ExtArgs> = {}>(args?: Subset<T, USUARIO$USUARIO_CHAROLAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USUARIO_CHAROLAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the USUARIO model
   */
  interface USUARIOFieldRefs {
    readonly usuarioId: FieldRef<"USUARIO", 'Int'>
    readonly user: FieldRef<"USUARIO", 'String'>
    readonly contrasena: FieldRef<"USUARIO", 'String'>
    readonly nombre: FieldRef<"USUARIO", 'String'>
    readonly apellido_m: FieldRef<"USUARIO", 'String'>
    readonly apellido_p: FieldRef<"USUARIO", 'String'>
  }
    

  // Custom InputTypes
  /**
   * USUARIO findUnique
   */
  export type USUARIOFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO
     */
    select?: USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO
     */
    omit?: USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which USUARIO to fetch.
     */
    where: USUARIOWhereUniqueInput
  }

  /**
   * USUARIO findUniqueOrThrow
   */
  export type USUARIOFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO
     */
    select?: USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO
     */
    omit?: USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which USUARIO to fetch.
     */
    where: USUARIOWhereUniqueInput
  }

  /**
   * USUARIO findFirst
   */
  export type USUARIOFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO
     */
    select?: USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO
     */
    omit?: USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which USUARIO to fetch.
     */
    where?: USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USUARIOS to fetch.
     */
    orderBy?: USUARIOOrderByWithRelationInput | USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USUARIOS.
     */
    cursor?: USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USUARIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USUARIOS.
     */
    distinct?: USUARIOScalarFieldEnum | USUARIOScalarFieldEnum[]
  }

  /**
   * USUARIO findFirstOrThrow
   */
  export type USUARIOFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO
     */
    select?: USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO
     */
    omit?: USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which USUARIO to fetch.
     */
    where?: USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USUARIOS to fetch.
     */
    orderBy?: USUARIOOrderByWithRelationInput | USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USUARIOS.
     */
    cursor?: USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USUARIOS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USUARIOS.
     */
    distinct?: USUARIOScalarFieldEnum | USUARIOScalarFieldEnum[]
  }

  /**
   * USUARIO findMany
   */
  export type USUARIOFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO
     */
    select?: USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO
     */
    omit?: USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIOInclude<ExtArgs> | null
    /**
     * Filter, which USUARIOS to fetch.
     */
    where?: USUARIOWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USUARIOS to fetch.
     */
    orderBy?: USUARIOOrderByWithRelationInput | USUARIOOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing USUARIOS.
     */
    cursor?: USUARIOWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USUARIOS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USUARIOS.
     */
    skip?: number
    distinct?: USUARIOScalarFieldEnum | USUARIOScalarFieldEnum[]
  }

  /**
   * USUARIO create
   */
  export type USUARIOCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO
     */
    select?: USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO
     */
    omit?: USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIOInclude<ExtArgs> | null
    /**
     * The data needed to create a USUARIO.
     */
    data: XOR<USUARIOCreateInput, USUARIOUncheckedCreateInput>
  }

  /**
   * USUARIO createMany
   */
  export type USUARIOCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many USUARIOS.
     */
    data: USUARIOCreateManyInput | USUARIOCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * USUARIO update
   */
  export type USUARIOUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO
     */
    select?: USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO
     */
    omit?: USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIOInclude<ExtArgs> | null
    /**
     * The data needed to update a USUARIO.
     */
    data: XOR<USUARIOUpdateInput, USUARIOUncheckedUpdateInput>
    /**
     * Choose, which USUARIO to update.
     */
    where: USUARIOWhereUniqueInput
  }

  /**
   * USUARIO updateMany
   */
  export type USUARIOUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update USUARIOS.
     */
    data: XOR<USUARIOUpdateManyMutationInput, USUARIOUncheckedUpdateManyInput>
    /**
     * Filter which USUARIOS to update
     */
    where?: USUARIOWhereInput
    /**
     * Limit how many USUARIOS to update.
     */
    limit?: number
  }

  /**
   * USUARIO upsert
   */
  export type USUARIOUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO
     */
    select?: USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO
     */
    omit?: USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIOInclude<ExtArgs> | null
    /**
     * The filter to search for the USUARIO to update in case it exists.
     */
    where: USUARIOWhereUniqueInput
    /**
     * In case the USUARIO found by the `where` argument doesn't exist, create a new USUARIO with this data.
     */
    create: XOR<USUARIOCreateInput, USUARIOUncheckedCreateInput>
    /**
     * In case the USUARIO was found with the provided `where` argument, update it with this data.
     */
    update: XOR<USUARIOUpdateInput, USUARIOUncheckedUpdateInput>
  }

  /**
   * USUARIO delete
   */
  export type USUARIODeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO
     */
    select?: USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO
     */
    omit?: USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIOInclude<ExtArgs> | null
    /**
     * Filter which USUARIO to delete.
     */
    where: USUARIOWhereUniqueInput
  }

  /**
   * USUARIO deleteMany
   */
  export type USUARIODeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USUARIOS to delete
     */
    where?: USUARIOWhereInput
    /**
     * Limit how many USUARIOS to delete.
     */
    limit?: number
  }

  /**
   * USUARIO.ADMINISTRADOR
   */
  export type USUARIO$ADMINISTRADORArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ADMINISTRADOR
     */
    select?: ADMINISTRADORSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ADMINISTRADOR
     */
    omit?: ADMINISTRADOROmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ADMINISTRADORInclude<ExtArgs> | null
    where?: ADMINISTRADORWhereInput
    orderBy?: ADMINISTRADOROrderByWithRelationInput | ADMINISTRADOROrderByWithRelationInput[]
    cursor?: ADMINISTRADORWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ADMINISTRADORScalarFieldEnum | ADMINISTRADORScalarFieldEnum[]
  }

  /**
   * USUARIO.USUARIO_CHAROLA
   */
  export type USUARIO$USUARIO_CHAROLAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO_CHAROLA
     */
    select?: USUARIO_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO_CHAROLA
     */
    omit?: USUARIO_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIO_CHAROLAInclude<ExtArgs> | null
    where?: USUARIO_CHAROLAWhereInput
    orderBy?: USUARIO_CHAROLAOrderByWithRelationInput | USUARIO_CHAROLAOrderByWithRelationInput[]
    cursor?: USUARIO_CHAROLAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: USUARIO_CHAROLAScalarFieldEnum | USUARIO_CHAROLAScalarFieldEnum[]
  }

  /**
   * USUARIO without action
   */
  export type USUARIODefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO
     */
    select?: USUARIOSelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO
     */
    omit?: USUARIOOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIOInclude<ExtArgs> | null
  }


  /**
   * Model USUARIO_CHAROLA
   */

  export type AggregateUSUARIO_CHAROLA = {
    _count: USUARIO_CHAROLACountAggregateOutputType | null
    _avg: USUARIO_CHAROLAAvgAggregateOutputType | null
    _sum: USUARIO_CHAROLASumAggregateOutputType | null
    _min: USUARIO_CHAROLAMinAggregateOutputType | null
    _max: USUARIO_CHAROLAMaxAggregateOutputType | null
  }

  export type USUARIO_CHAROLAAvgAggregateOutputType = {
    usuarioId: number | null
    charolaId: number | null
  }

  export type USUARIO_CHAROLASumAggregateOutputType = {
    usuarioId: number | null
    charolaId: number | null
  }

  export type USUARIO_CHAROLAMinAggregateOutputType = {
    usuarioId: number | null
    charolaId: number | null
  }

  export type USUARIO_CHAROLAMaxAggregateOutputType = {
    usuarioId: number | null
    charolaId: number | null
  }

  export type USUARIO_CHAROLACountAggregateOutputType = {
    usuarioId: number
    charolaId: number
    _all: number
  }


  export type USUARIO_CHAROLAAvgAggregateInputType = {
    usuarioId?: true
    charolaId?: true
  }

  export type USUARIO_CHAROLASumAggregateInputType = {
    usuarioId?: true
    charolaId?: true
  }

  export type USUARIO_CHAROLAMinAggregateInputType = {
    usuarioId?: true
    charolaId?: true
  }

  export type USUARIO_CHAROLAMaxAggregateInputType = {
    usuarioId?: true
    charolaId?: true
  }

  export type USUARIO_CHAROLACountAggregateInputType = {
    usuarioId?: true
    charolaId?: true
    _all?: true
  }

  export type USUARIO_CHAROLAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USUARIO_CHAROLA to aggregate.
     */
    where?: USUARIO_CHAROLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USUARIO_CHAROLAS to fetch.
     */
    orderBy?: USUARIO_CHAROLAOrderByWithRelationInput | USUARIO_CHAROLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: USUARIO_CHAROLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USUARIO_CHAROLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USUARIO_CHAROLAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned USUARIO_CHAROLAS
    **/
    _count?: true | USUARIO_CHAROLACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: USUARIO_CHAROLAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: USUARIO_CHAROLASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: USUARIO_CHAROLAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: USUARIO_CHAROLAMaxAggregateInputType
  }

  export type GetUSUARIO_CHAROLAAggregateType<T extends USUARIO_CHAROLAAggregateArgs> = {
        [P in keyof T & keyof AggregateUSUARIO_CHAROLA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUSUARIO_CHAROLA[P]>
      : GetScalarType<T[P], AggregateUSUARIO_CHAROLA[P]>
  }




  export type USUARIO_CHAROLAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: USUARIO_CHAROLAWhereInput
    orderBy?: USUARIO_CHAROLAOrderByWithAggregationInput | USUARIO_CHAROLAOrderByWithAggregationInput[]
    by: USUARIO_CHAROLAScalarFieldEnum[] | USUARIO_CHAROLAScalarFieldEnum
    having?: USUARIO_CHAROLAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: USUARIO_CHAROLACountAggregateInputType | true
    _avg?: USUARIO_CHAROLAAvgAggregateInputType
    _sum?: USUARIO_CHAROLASumAggregateInputType
    _min?: USUARIO_CHAROLAMinAggregateInputType
    _max?: USUARIO_CHAROLAMaxAggregateInputType
  }

  export type USUARIO_CHAROLAGroupByOutputType = {
    usuarioId: number
    charolaId: number
    _count: USUARIO_CHAROLACountAggregateOutputType | null
    _avg: USUARIO_CHAROLAAvgAggregateOutputType | null
    _sum: USUARIO_CHAROLASumAggregateOutputType | null
    _min: USUARIO_CHAROLAMinAggregateOutputType | null
    _max: USUARIO_CHAROLAMaxAggregateOutputType | null
  }

  type GetUSUARIO_CHAROLAGroupByPayload<T extends USUARIO_CHAROLAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<USUARIO_CHAROLAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof USUARIO_CHAROLAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], USUARIO_CHAROLAGroupByOutputType[P]>
            : GetScalarType<T[P], USUARIO_CHAROLAGroupByOutputType[P]>
        }
      >
    >


  export type USUARIO_CHAROLASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    usuarioId?: boolean
    charolaId?: boolean
    USUARIO?: boolean | USUARIODefaultArgs<ExtArgs>
    CHAROLA?: boolean | CHAROLADefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uSUARIO_CHAROLA"]>



  export type USUARIO_CHAROLASelectScalar = {
    usuarioId?: boolean
    charolaId?: boolean
  }

  export type USUARIO_CHAROLAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"usuarioId" | "charolaId", ExtArgs["result"]["uSUARIO_CHAROLA"]>
  export type USUARIO_CHAROLAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    USUARIO?: boolean | USUARIODefaultArgs<ExtArgs>
    CHAROLA?: boolean | CHAROLADefaultArgs<ExtArgs>
  }

  export type $USUARIO_CHAROLAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "USUARIO_CHAROLA"
    objects: {
      USUARIO: Prisma.$USUARIOPayload<ExtArgs>
      CHAROLA: Prisma.$CHAROLAPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      usuarioId: number
      charolaId: number
    }, ExtArgs["result"]["uSUARIO_CHAROLA"]>
    composites: {}
  }

  type USUARIO_CHAROLAGetPayload<S extends boolean | null | undefined | USUARIO_CHAROLADefaultArgs> = $Result.GetResult<Prisma.$USUARIO_CHAROLAPayload, S>

  type USUARIO_CHAROLACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<USUARIO_CHAROLAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: USUARIO_CHAROLACountAggregateInputType | true
    }

  export interface USUARIO_CHAROLADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['USUARIO_CHAROLA'], meta: { name: 'USUARIO_CHAROLA' } }
    /**
     * Find zero or one USUARIO_CHAROLA that matches the filter.
     * @param {USUARIO_CHAROLAFindUniqueArgs} args - Arguments to find a USUARIO_CHAROLA
     * @example
     * // Get one USUARIO_CHAROLA
     * const uSUARIO_CHAROLA = await prisma.uSUARIO_CHAROLA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends USUARIO_CHAROLAFindUniqueArgs>(args: SelectSubset<T, USUARIO_CHAROLAFindUniqueArgs<ExtArgs>>): Prisma__USUARIO_CHAROLAClient<$Result.GetResult<Prisma.$USUARIO_CHAROLAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one USUARIO_CHAROLA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {USUARIO_CHAROLAFindUniqueOrThrowArgs} args - Arguments to find a USUARIO_CHAROLA
     * @example
     * // Get one USUARIO_CHAROLA
     * const uSUARIO_CHAROLA = await prisma.uSUARIO_CHAROLA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends USUARIO_CHAROLAFindUniqueOrThrowArgs>(args: SelectSubset<T, USUARIO_CHAROLAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__USUARIO_CHAROLAClient<$Result.GetResult<Prisma.$USUARIO_CHAROLAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USUARIO_CHAROLA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USUARIO_CHAROLAFindFirstArgs} args - Arguments to find a USUARIO_CHAROLA
     * @example
     * // Get one USUARIO_CHAROLA
     * const uSUARIO_CHAROLA = await prisma.uSUARIO_CHAROLA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends USUARIO_CHAROLAFindFirstArgs>(args?: SelectSubset<T, USUARIO_CHAROLAFindFirstArgs<ExtArgs>>): Prisma__USUARIO_CHAROLAClient<$Result.GetResult<Prisma.$USUARIO_CHAROLAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first USUARIO_CHAROLA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USUARIO_CHAROLAFindFirstOrThrowArgs} args - Arguments to find a USUARIO_CHAROLA
     * @example
     * // Get one USUARIO_CHAROLA
     * const uSUARIO_CHAROLA = await prisma.uSUARIO_CHAROLA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends USUARIO_CHAROLAFindFirstOrThrowArgs>(args?: SelectSubset<T, USUARIO_CHAROLAFindFirstOrThrowArgs<ExtArgs>>): Prisma__USUARIO_CHAROLAClient<$Result.GetResult<Prisma.$USUARIO_CHAROLAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more USUARIO_CHAROLAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USUARIO_CHAROLAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all USUARIO_CHAROLAS
     * const uSUARIO_CHAROLAS = await prisma.uSUARIO_CHAROLA.findMany()
     * 
     * // Get first 10 USUARIO_CHAROLAS
     * const uSUARIO_CHAROLAS = await prisma.uSUARIO_CHAROLA.findMany({ take: 10 })
     * 
     * // Only select the `usuarioId`
     * const uSUARIO_CHAROLAWithUsuarioIdOnly = await prisma.uSUARIO_CHAROLA.findMany({ select: { usuarioId: true } })
     * 
     */
    findMany<T extends USUARIO_CHAROLAFindManyArgs>(args?: SelectSubset<T, USUARIO_CHAROLAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USUARIO_CHAROLAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a USUARIO_CHAROLA.
     * @param {USUARIO_CHAROLACreateArgs} args - Arguments to create a USUARIO_CHAROLA.
     * @example
     * // Create one USUARIO_CHAROLA
     * const USUARIO_CHAROLA = await prisma.uSUARIO_CHAROLA.create({
     *   data: {
     *     // ... data to create a USUARIO_CHAROLA
     *   }
     * })
     * 
     */
    create<T extends USUARIO_CHAROLACreateArgs>(args: SelectSubset<T, USUARIO_CHAROLACreateArgs<ExtArgs>>): Prisma__USUARIO_CHAROLAClient<$Result.GetResult<Prisma.$USUARIO_CHAROLAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many USUARIO_CHAROLAS.
     * @param {USUARIO_CHAROLACreateManyArgs} args - Arguments to create many USUARIO_CHAROLAS.
     * @example
     * // Create many USUARIO_CHAROLAS
     * const uSUARIO_CHAROLA = await prisma.uSUARIO_CHAROLA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends USUARIO_CHAROLACreateManyArgs>(args?: SelectSubset<T, USUARIO_CHAROLACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a USUARIO_CHAROLA.
     * @param {USUARIO_CHAROLADeleteArgs} args - Arguments to delete one USUARIO_CHAROLA.
     * @example
     * // Delete one USUARIO_CHAROLA
     * const USUARIO_CHAROLA = await prisma.uSUARIO_CHAROLA.delete({
     *   where: {
     *     // ... filter to delete one USUARIO_CHAROLA
     *   }
     * })
     * 
     */
    delete<T extends USUARIO_CHAROLADeleteArgs>(args: SelectSubset<T, USUARIO_CHAROLADeleteArgs<ExtArgs>>): Prisma__USUARIO_CHAROLAClient<$Result.GetResult<Prisma.$USUARIO_CHAROLAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one USUARIO_CHAROLA.
     * @param {USUARIO_CHAROLAUpdateArgs} args - Arguments to update one USUARIO_CHAROLA.
     * @example
     * // Update one USUARIO_CHAROLA
     * const uSUARIO_CHAROLA = await prisma.uSUARIO_CHAROLA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends USUARIO_CHAROLAUpdateArgs>(args: SelectSubset<T, USUARIO_CHAROLAUpdateArgs<ExtArgs>>): Prisma__USUARIO_CHAROLAClient<$Result.GetResult<Prisma.$USUARIO_CHAROLAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more USUARIO_CHAROLAS.
     * @param {USUARIO_CHAROLADeleteManyArgs} args - Arguments to filter USUARIO_CHAROLAS to delete.
     * @example
     * // Delete a few USUARIO_CHAROLAS
     * const { count } = await prisma.uSUARIO_CHAROLA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends USUARIO_CHAROLADeleteManyArgs>(args?: SelectSubset<T, USUARIO_CHAROLADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USUARIO_CHAROLAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USUARIO_CHAROLAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many USUARIO_CHAROLAS
     * const uSUARIO_CHAROLA = await prisma.uSUARIO_CHAROLA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends USUARIO_CHAROLAUpdateManyArgs>(args: SelectSubset<T, USUARIO_CHAROLAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one USUARIO_CHAROLA.
     * @param {USUARIO_CHAROLAUpsertArgs} args - Arguments to update or create a USUARIO_CHAROLA.
     * @example
     * // Update or create a USUARIO_CHAROLA
     * const uSUARIO_CHAROLA = await prisma.uSUARIO_CHAROLA.upsert({
     *   create: {
     *     // ... data to create a USUARIO_CHAROLA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the USUARIO_CHAROLA we want to update
     *   }
     * })
     */
    upsert<T extends USUARIO_CHAROLAUpsertArgs>(args: SelectSubset<T, USUARIO_CHAROLAUpsertArgs<ExtArgs>>): Prisma__USUARIO_CHAROLAClient<$Result.GetResult<Prisma.$USUARIO_CHAROLAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of USUARIO_CHAROLAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USUARIO_CHAROLACountArgs} args - Arguments to filter USUARIO_CHAROLAS to count.
     * @example
     * // Count the number of USUARIO_CHAROLAS
     * const count = await prisma.uSUARIO_CHAROLA.count({
     *   where: {
     *     // ... the filter for the USUARIO_CHAROLAS we want to count
     *   }
     * })
    **/
    count<T extends USUARIO_CHAROLACountArgs>(
      args?: Subset<T, USUARIO_CHAROLACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], USUARIO_CHAROLACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a USUARIO_CHAROLA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USUARIO_CHAROLAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends USUARIO_CHAROLAAggregateArgs>(args: Subset<T, USUARIO_CHAROLAAggregateArgs>): Prisma.PrismaPromise<GetUSUARIO_CHAROLAAggregateType<T>>

    /**
     * Group by USUARIO_CHAROLA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USUARIO_CHAROLAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends USUARIO_CHAROLAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: USUARIO_CHAROLAGroupByArgs['orderBy'] }
        : { orderBy?: USUARIO_CHAROLAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, USUARIO_CHAROLAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSUARIO_CHAROLAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the USUARIO_CHAROLA model
   */
  readonly fields: USUARIO_CHAROLAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for USUARIO_CHAROLA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__USUARIO_CHAROLAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    USUARIO<T extends USUARIODefaultArgs<ExtArgs> = {}>(args?: Subset<T, USUARIODefaultArgs<ExtArgs>>): Prisma__USUARIOClient<$Result.GetResult<Prisma.$USUARIOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    CHAROLA<T extends CHAROLADefaultArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLADefaultArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the USUARIO_CHAROLA model
   */
  interface USUARIO_CHAROLAFieldRefs {
    readonly usuarioId: FieldRef<"USUARIO_CHAROLA", 'Int'>
    readonly charolaId: FieldRef<"USUARIO_CHAROLA", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * USUARIO_CHAROLA findUnique
   */
  export type USUARIO_CHAROLAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO_CHAROLA
     */
    select?: USUARIO_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO_CHAROLA
     */
    omit?: USUARIO_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIO_CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which USUARIO_CHAROLA to fetch.
     */
    where: USUARIO_CHAROLAWhereUniqueInput
  }

  /**
   * USUARIO_CHAROLA findUniqueOrThrow
   */
  export type USUARIO_CHAROLAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO_CHAROLA
     */
    select?: USUARIO_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO_CHAROLA
     */
    omit?: USUARIO_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIO_CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which USUARIO_CHAROLA to fetch.
     */
    where: USUARIO_CHAROLAWhereUniqueInput
  }

  /**
   * USUARIO_CHAROLA findFirst
   */
  export type USUARIO_CHAROLAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO_CHAROLA
     */
    select?: USUARIO_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO_CHAROLA
     */
    omit?: USUARIO_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIO_CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which USUARIO_CHAROLA to fetch.
     */
    where?: USUARIO_CHAROLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USUARIO_CHAROLAS to fetch.
     */
    orderBy?: USUARIO_CHAROLAOrderByWithRelationInput | USUARIO_CHAROLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USUARIO_CHAROLAS.
     */
    cursor?: USUARIO_CHAROLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USUARIO_CHAROLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USUARIO_CHAROLAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USUARIO_CHAROLAS.
     */
    distinct?: USUARIO_CHAROLAScalarFieldEnum | USUARIO_CHAROLAScalarFieldEnum[]
  }

  /**
   * USUARIO_CHAROLA findFirstOrThrow
   */
  export type USUARIO_CHAROLAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO_CHAROLA
     */
    select?: USUARIO_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO_CHAROLA
     */
    omit?: USUARIO_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIO_CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which USUARIO_CHAROLA to fetch.
     */
    where?: USUARIO_CHAROLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USUARIO_CHAROLAS to fetch.
     */
    orderBy?: USUARIO_CHAROLAOrderByWithRelationInput | USUARIO_CHAROLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USUARIO_CHAROLAS.
     */
    cursor?: USUARIO_CHAROLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USUARIO_CHAROLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USUARIO_CHAROLAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USUARIO_CHAROLAS.
     */
    distinct?: USUARIO_CHAROLAScalarFieldEnum | USUARIO_CHAROLAScalarFieldEnum[]
  }

  /**
   * USUARIO_CHAROLA findMany
   */
  export type USUARIO_CHAROLAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO_CHAROLA
     */
    select?: USUARIO_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO_CHAROLA
     */
    omit?: USUARIO_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIO_CHAROLAInclude<ExtArgs> | null
    /**
     * Filter, which USUARIO_CHAROLAS to fetch.
     */
    where?: USUARIO_CHAROLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USUARIO_CHAROLAS to fetch.
     */
    orderBy?: USUARIO_CHAROLAOrderByWithRelationInput | USUARIO_CHAROLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing USUARIO_CHAROLAS.
     */
    cursor?: USUARIO_CHAROLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USUARIO_CHAROLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USUARIO_CHAROLAS.
     */
    skip?: number
    distinct?: USUARIO_CHAROLAScalarFieldEnum | USUARIO_CHAROLAScalarFieldEnum[]
  }

  /**
   * USUARIO_CHAROLA create
   */
  export type USUARIO_CHAROLACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO_CHAROLA
     */
    select?: USUARIO_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO_CHAROLA
     */
    omit?: USUARIO_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIO_CHAROLAInclude<ExtArgs> | null
    /**
     * The data needed to create a USUARIO_CHAROLA.
     */
    data: XOR<USUARIO_CHAROLACreateInput, USUARIO_CHAROLAUncheckedCreateInput>
  }

  /**
   * USUARIO_CHAROLA createMany
   */
  export type USUARIO_CHAROLACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many USUARIO_CHAROLAS.
     */
    data: USUARIO_CHAROLACreateManyInput | USUARIO_CHAROLACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * USUARIO_CHAROLA update
   */
  export type USUARIO_CHAROLAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO_CHAROLA
     */
    select?: USUARIO_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO_CHAROLA
     */
    omit?: USUARIO_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIO_CHAROLAInclude<ExtArgs> | null
    /**
     * The data needed to update a USUARIO_CHAROLA.
     */
    data: XOR<USUARIO_CHAROLAUpdateInput, USUARIO_CHAROLAUncheckedUpdateInput>
    /**
     * Choose, which USUARIO_CHAROLA to update.
     */
    where: USUARIO_CHAROLAWhereUniqueInput
  }

  /**
   * USUARIO_CHAROLA updateMany
   */
  export type USUARIO_CHAROLAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update USUARIO_CHAROLAS.
     */
    data: XOR<USUARIO_CHAROLAUpdateManyMutationInput, USUARIO_CHAROLAUncheckedUpdateManyInput>
    /**
     * Filter which USUARIO_CHAROLAS to update
     */
    where?: USUARIO_CHAROLAWhereInput
    /**
     * Limit how many USUARIO_CHAROLAS to update.
     */
    limit?: number
  }

  /**
   * USUARIO_CHAROLA upsert
   */
  export type USUARIO_CHAROLAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO_CHAROLA
     */
    select?: USUARIO_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO_CHAROLA
     */
    omit?: USUARIO_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIO_CHAROLAInclude<ExtArgs> | null
    /**
     * The filter to search for the USUARIO_CHAROLA to update in case it exists.
     */
    where: USUARIO_CHAROLAWhereUniqueInput
    /**
     * In case the USUARIO_CHAROLA found by the `where` argument doesn't exist, create a new USUARIO_CHAROLA with this data.
     */
    create: XOR<USUARIO_CHAROLACreateInput, USUARIO_CHAROLAUncheckedCreateInput>
    /**
     * In case the USUARIO_CHAROLA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<USUARIO_CHAROLAUpdateInput, USUARIO_CHAROLAUncheckedUpdateInput>
  }

  /**
   * USUARIO_CHAROLA delete
   */
  export type USUARIO_CHAROLADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO_CHAROLA
     */
    select?: USUARIO_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO_CHAROLA
     */
    omit?: USUARIO_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIO_CHAROLAInclude<ExtArgs> | null
    /**
     * Filter which USUARIO_CHAROLA to delete.
     */
    where: USUARIO_CHAROLAWhereUniqueInput
  }

  /**
   * USUARIO_CHAROLA deleteMany
   */
  export type USUARIO_CHAROLADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USUARIO_CHAROLAS to delete
     */
    where?: USUARIO_CHAROLAWhereInput
    /**
     * Limit how many USUARIO_CHAROLAS to delete.
     */
    limit?: number
  }

  /**
   * USUARIO_CHAROLA without action
   */
  export type USUARIO_CHAROLADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USUARIO_CHAROLA
     */
    select?: USUARIO_CHAROLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the USUARIO_CHAROLA
     */
    omit?: USUARIO_CHAROLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: USUARIO_CHAROLAInclude<ExtArgs> | null
  }


  /**
   * Model CHAROLA_FRAS
   */

  export type AggregateCHAROLA_FRAS = {
    _count: CHAROLA_FRASCountAggregateOutputType | null
    _avg: CHAROLA_FRASAvgAggregateOutputType | null
    _sum: CHAROLA_FRASSumAggregateOutputType | null
    _min: CHAROLA_FRASMinAggregateOutputType | null
    _max: CHAROLA_FRASMaxAggregateOutputType | null
  }

  export type CHAROLA_FRASAvgAggregateOutputType = {
    charolaId: number | null
    frasId: number | null
  }

  export type CHAROLA_FRASSumAggregateOutputType = {
    charolaId: number | null
    frasId: number | null
  }

  export type CHAROLA_FRASMinAggregateOutputType = {
    charolaId: number | null
    frasId: number | null
  }

  export type CHAROLA_FRASMaxAggregateOutputType = {
    charolaId: number | null
    frasId: number | null
  }

  export type CHAROLA_FRASCountAggregateOutputType = {
    charolaId: number
    frasId: number
    _all: number
  }


  export type CHAROLA_FRASAvgAggregateInputType = {
    charolaId?: true
    frasId?: true
  }

  export type CHAROLA_FRASSumAggregateInputType = {
    charolaId?: true
    frasId?: true
  }

  export type CHAROLA_FRASMinAggregateInputType = {
    charolaId?: true
    frasId?: true
  }

  export type CHAROLA_FRASMaxAggregateInputType = {
    charolaId?: true
    frasId?: true
  }

  export type CHAROLA_FRASCountAggregateInputType = {
    charolaId?: true
    frasId?: true
    _all?: true
  }

  export type CHAROLA_FRASAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CHAROLA_FRAS to aggregate.
     */
    where?: CHAROLA_FRASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_FRAS to fetch.
     */
    orderBy?: CHAROLA_FRASOrderByWithRelationInput | CHAROLA_FRASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CHAROLA_FRASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_FRAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_FRAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CHAROLA_FRAS
    **/
    _count?: true | CHAROLA_FRASCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CHAROLA_FRASAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CHAROLA_FRASSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CHAROLA_FRASMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CHAROLA_FRASMaxAggregateInputType
  }

  export type GetCHAROLA_FRASAggregateType<T extends CHAROLA_FRASAggregateArgs> = {
        [P in keyof T & keyof AggregateCHAROLA_FRAS]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCHAROLA_FRAS[P]>
      : GetScalarType<T[P], AggregateCHAROLA_FRAS[P]>
  }




  export type CHAROLA_FRASGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_FRASWhereInput
    orderBy?: CHAROLA_FRASOrderByWithAggregationInput | CHAROLA_FRASOrderByWithAggregationInput[]
    by: CHAROLA_FRASScalarFieldEnum[] | CHAROLA_FRASScalarFieldEnum
    having?: CHAROLA_FRASScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CHAROLA_FRASCountAggregateInputType | true
    _avg?: CHAROLA_FRASAvgAggregateInputType
    _sum?: CHAROLA_FRASSumAggregateInputType
    _min?: CHAROLA_FRASMinAggregateInputType
    _max?: CHAROLA_FRASMaxAggregateInputType
  }

  export type CHAROLA_FRASGroupByOutputType = {
    charolaId: number
    frasId: number
    _count: CHAROLA_FRASCountAggregateOutputType | null
    _avg: CHAROLA_FRASAvgAggregateOutputType | null
    _sum: CHAROLA_FRASSumAggregateOutputType | null
    _min: CHAROLA_FRASMinAggregateOutputType | null
    _max: CHAROLA_FRASMaxAggregateOutputType | null
  }

  type GetCHAROLA_FRASGroupByPayload<T extends CHAROLA_FRASGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CHAROLA_FRASGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CHAROLA_FRASGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CHAROLA_FRASGroupByOutputType[P]>
            : GetScalarType<T[P], CHAROLA_FRASGroupByOutputType[P]>
        }
      >
    >


  export type CHAROLA_FRASSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    charolaId?: boolean
    frasId?: boolean
    CHAROLA?: boolean | CHAROLADefaultArgs<ExtArgs>
    FRAS?: boolean | FRASDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cHAROLA_FRAS"]>



  export type CHAROLA_FRASSelectScalar = {
    charolaId?: boolean
    frasId?: boolean
  }

  export type CHAROLA_FRASOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"charolaId" | "frasId", ExtArgs["result"]["cHAROLA_FRAS"]>
  export type CHAROLA_FRASInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA?: boolean | CHAROLADefaultArgs<ExtArgs>
    FRAS?: boolean | FRASDefaultArgs<ExtArgs>
  }

  export type $CHAROLA_FRASPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CHAROLA_FRAS"
    objects: {
      CHAROLA: Prisma.$CHAROLAPayload<ExtArgs>
      FRAS: Prisma.$FRASPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      charolaId: number
      frasId: number
    }, ExtArgs["result"]["cHAROLA_FRAS"]>
    composites: {}
  }

  type CHAROLA_FRASGetPayload<S extends boolean | null | undefined | CHAROLA_FRASDefaultArgs> = $Result.GetResult<Prisma.$CHAROLA_FRASPayload, S>

  type CHAROLA_FRASCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CHAROLA_FRASFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CHAROLA_FRASCountAggregateInputType | true
    }

  export interface CHAROLA_FRASDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CHAROLA_FRAS'], meta: { name: 'CHAROLA_FRAS' } }
    /**
     * Find zero or one CHAROLA_FRAS that matches the filter.
     * @param {CHAROLA_FRASFindUniqueArgs} args - Arguments to find a CHAROLA_FRAS
     * @example
     * // Get one CHAROLA_FRAS
     * const cHAROLA_FRAS = await prisma.cHAROLA_FRAS.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CHAROLA_FRASFindUniqueArgs>(args: SelectSubset<T, CHAROLA_FRASFindUniqueArgs<ExtArgs>>): Prisma__CHAROLA_FRASClient<$Result.GetResult<Prisma.$CHAROLA_FRASPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CHAROLA_FRAS that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CHAROLA_FRASFindUniqueOrThrowArgs} args - Arguments to find a CHAROLA_FRAS
     * @example
     * // Get one CHAROLA_FRAS
     * const cHAROLA_FRAS = await prisma.cHAROLA_FRAS.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CHAROLA_FRASFindUniqueOrThrowArgs>(args: SelectSubset<T, CHAROLA_FRASFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CHAROLA_FRASClient<$Result.GetResult<Prisma.$CHAROLA_FRASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CHAROLA_FRAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_FRASFindFirstArgs} args - Arguments to find a CHAROLA_FRAS
     * @example
     * // Get one CHAROLA_FRAS
     * const cHAROLA_FRAS = await prisma.cHAROLA_FRAS.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CHAROLA_FRASFindFirstArgs>(args?: SelectSubset<T, CHAROLA_FRASFindFirstArgs<ExtArgs>>): Prisma__CHAROLA_FRASClient<$Result.GetResult<Prisma.$CHAROLA_FRASPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CHAROLA_FRAS that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_FRASFindFirstOrThrowArgs} args - Arguments to find a CHAROLA_FRAS
     * @example
     * // Get one CHAROLA_FRAS
     * const cHAROLA_FRAS = await prisma.cHAROLA_FRAS.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CHAROLA_FRASFindFirstOrThrowArgs>(args?: SelectSubset<T, CHAROLA_FRASFindFirstOrThrowArgs<ExtArgs>>): Prisma__CHAROLA_FRASClient<$Result.GetResult<Prisma.$CHAROLA_FRASPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CHAROLA_FRAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_FRASFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CHAROLA_FRAS
     * const cHAROLA_FRAS = await prisma.cHAROLA_FRAS.findMany()
     * 
     * // Get first 10 CHAROLA_FRAS
     * const cHAROLA_FRAS = await prisma.cHAROLA_FRAS.findMany({ take: 10 })
     * 
     * // Only select the `charolaId`
     * const cHAROLA_FRASWithCharolaIdOnly = await prisma.cHAROLA_FRAS.findMany({ select: { charolaId: true } })
     * 
     */
    findMany<T extends CHAROLA_FRASFindManyArgs>(args?: SelectSubset<T, CHAROLA_FRASFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_FRASPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CHAROLA_FRAS.
     * @param {CHAROLA_FRASCreateArgs} args - Arguments to create a CHAROLA_FRAS.
     * @example
     * // Create one CHAROLA_FRAS
     * const CHAROLA_FRAS = await prisma.cHAROLA_FRAS.create({
     *   data: {
     *     // ... data to create a CHAROLA_FRAS
     *   }
     * })
     * 
     */
    create<T extends CHAROLA_FRASCreateArgs>(args: SelectSubset<T, CHAROLA_FRASCreateArgs<ExtArgs>>): Prisma__CHAROLA_FRASClient<$Result.GetResult<Prisma.$CHAROLA_FRASPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CHAROLA_FRAS.
     * @param {CHAROLA_FRASCreateManyArgs} args - Arguments to create many CHAROLA_FRAS.
     * @example
     * // Create many CHAROLA_FRAS
     * const cHAROLA_FRAS = await prisma.cHAROLA_FRAS.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CHAROLA_FRASCreateManyArgs>(args?: SelectSubset<T, CHAROLA_FRASCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CHAROLA_FRAS.
     * @param {CHAROLA_FRASDeleteArgs} args - Arguments to delete one CHAROLA_FRAS.
     * @example
     * // Delete one CHAROLA_FRAS
     * const CHAROLA_FRAS = await prisma.cHAROLA_FRAS.delete({
     *   where: {
     *     // ... filter to delete one CHAROLA_FRAS
     *   }
     * })
     * 
     */
    delete<T extends CHAROLA_FRASDeleteArgs>(args: SelectSubset<T, CHAROLA_FRASDeleteArgs<ExtArgs>>): Prisma__CHAROLA_FRASClient<$Result.GetResult<Prisma.$CHAROLA_FRASPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CHAROLA_FRAS.
     * @param {CHAROLA_FRASUpdateArgs} args - Arguments to update one CHAROLA_FRAS.
     * @example
     * // Update one CHAROLA_FRAS
     * const cHAROLA_FRAS = await prisma.cHAROLA_FRAS.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CHAROLA_FRASUpdateArgs>(args: SelectSubset<T, CHAROLA_FRASUpdateArgs<ExtArgs>>): Prisma__CHAROLA_FRASClient<$Result.GetResult<Prisma.$CHAROLA_FRASPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CHAROLA_FRAS.
     * @param {CHAROLA_FRASDeleteManyArgs} args - Arguments to filter CHAROLA_FRAS to delete.
     * @example
     * // Delete a few CHAROLA_FRAS
     * const { count } = await prisma.cHAROLA_FRAS.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CHAROLA_FRASDeleteManyArgs>(args?: SelectSubset<T, CHAROLA_FRASDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CHAROLA_FRAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_FRASUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CHAROLA_FRAS
     * const cHAROLA_FRAS = await prisma.cHAROLA_FRAS.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CHAROLA_FRASUpdateManyArgs>(args: SelectSubset<T, CHAROLA_FRASUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CHAROLA_FRAS.
     * @param {CHAROLA_FRASUpsertArgs} args - Arguments to update or create a CHAROLA_FRAS.
     * @example
     * // Update or create a CHAROLA_FRAS
     * const cHAROLA_FRAS = await prisma.cHAROLA_FRAS.upsert({
     *   create: {
     *     // ... data to create a CHAROLA_FRAS
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CHAROLA_FRAS we want to update
     *   }
     * })
     */
    upsert<T extends CHAROLA_FRASUpsertArgs>(args: SelectSubset<T, CHAROLA_FRASUpsertArgs<ExtArgs>>): Prisma__CHAROLA_FRASClient<$Result.GetResult<Prisma.$CHAROLA_FRASPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CHAROLA_FRAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_FRASCountArgs} args - Arguments to filter CHAROLA_FRAS to count.
     * @example
     * // Count the number of CHAROLA_FRAS
     * const count = await prisma.cHAROLA_FRAS.count({
     *   where: {
     *     // ... the filter for the CHAROLA_FRAS we want to count
     *   }
     * })
    **/
    count<T extends CHAROLA_FRASCountArgs>(
      args?: Subset<T, CHAROLA_FRASCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CHAROLA_FRASCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CHAROLA_FRAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_FRASAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CHAROLA_FRASAggregateArgs>(args: Subset<T, CHAROLA_FRASAggregateArgs>): Prisma.PrismaPromise<GetCHAROLA_FRASAggregateType<T>>

    /**
     * Group by CHAROLA_FRAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_FRASGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CHAROLA_FRASGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CHAROLA_FRASGroupByArgs['orderBy'] }
        : { orderBy?: CHAROLA_FRASGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CHAROLA_FRASGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCHAROLA_FRASGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CHAROLA_FRAS model
   */
  readonly fields: CHAROLA_FRASFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CHAROLA_FRAS.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CHAROLA_FRASClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CHAROLA<T extends CHAROLADefaultArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLADefaultArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    FRAS<T extends FRASDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FRASDefaultArgs<ExtArgs>>): Prisma__FRASClient<$Result.GetResult<Prisma.$FRASPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CHAROLA_FRAS model
   */
  interface CHAROLA_FRASFieldRefs {
    readonly charolaId: FieldRef<"CHAROLA_FRAS", 'Int'>
    readonly frasId: FieldRef<"CHAROLA_FRAS", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CHAROLA_FRAS findUnique
   */
  export type CHAROLA_FRASFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_FRAS
     */
    select?: CHAROLA_FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_FRAS
     */
    omit?: CHAROLA_FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_FRASInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_FRAS to fetch.
     */
    where: CHAROLA_FRASWhereUniqueInput
  }

  /**
   * CHAROLA_FRAS findUniqueOrThrow
   */
  export type CHAROLA_FRASFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_FRAS
     */
    select?: CHAROLA_FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_FRAS
     */
    omit?: CHAROLA_FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_FRASInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_FRAS to fetch.
     */
    where: CHAROLA_FRASWhereUniqueInput
  }

  /**
   * CHAROLA_FRAS findFirst
   */
  export type CHAROLA_FRASFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_FRAS
     */
    select?: CHAROLA_FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_FRAS
     */
    omit?: CHAROLA_FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_FRASInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_FRAS to fetch.
     */
    where?: CHAROLA_FRASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_FRAS to fetch.
     */
    orderBy?: CHAROLA_FRASOrderByWithRelationInput | CHAROLA_FRASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CHAROLA_FRAS.
     */
    cursor?: CHAROLA_FRASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_FRAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_FRAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CHAROLA_FRAS.
     */
    distinct?: CHAROLA_FRASScalarFieldEnum | CHAROLA_FRASScalarFieldEnum[]
  }

  /**
   * CHAROLA_FRAS findFirstOrThrow
   */
  export type CHAROLA_FRASFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_FRAS
     */
    select?: CHAROLA_FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_FRAS
     */
    omit?: CHAROLA_FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_FRASInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_FRAS to fetch.
     */
    where?: CHAROLA_FRASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_FRAS to fetch.
     */
    orderBy?: CHAROLA_FRASOrderByWithRelationInput | CHAROLA_FRASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CHAROLA_FRAS.
     */
    cursor?: CHAROLA_FRASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_FRAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_FRAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CHAROLA_FRAS.
     */
    distinct?: CHAROLA_FRASScalarFieldEnum | CHAROLA_FRASScalarFieldEnum[]
  }

  /**
   * CHAROLA_FRAS findMany
   */
  export type CHAROLA_FRASFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_FRAS
     */
    select?: CHAROLA_FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_FRAS
     */
    omit?: CHAROLA_FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_FRASInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_FRAS to fetch.
     */
    where?: CHAROLA_FRASWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_FRAS to fetch.
     */
    orderBy?: CHAROLA_FRASOrderByWithRelationInput | CHAROLA_FRASOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CHAROLA_FRAS.
     */
    cursor?: CHAROLA_FRASWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_FRAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_FRAS.
     */
    skip?: number
    distinct?: CHAROLA_FRASScalarFieldEnum | CHAROLA_FRASScalarFieldEnum[]
  }

  /**
   * CHAROLA_FRAS create
   */
  export type CHAROLA_FRASCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_FRAS
     */
    select?: CHAROLA_FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_FRAS
     */
    omit?: CHAROLA_FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_FRASInclude<ExtArgs> | null
    /**
     * The data needed to create a CHAROLA_FRAS.
     */
    data: XOR<CHAROLA_FRASCreateInput, CHAROLA_FRASUncheckedCreateInput>
  }

  /**
   * CHAROLA_FRAS createMany
   */
  export type CHAROLA_FRASCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CHAROLA_FRAS.
     */
    data: CHAROLA_FRASCreateManyInput | CHAROLA_FRASCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CHAROLA_FRAS update
   */
  export type CHAROLA_FRASUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_FRAS
     */
    select?: CHAROLA_FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_FRAS
     */
    omit?: CHAROLA_FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_FRASInclude<ExtArgs> | null
    /**
     * The data needed to update a CHAROLA_FRAS.
     */
    data: XOR<CHAROLA_FRASUpdateInput, CHAROLA_FRASUncheckedUpdateInput>
    /**
     * Choose, which CHAROLA_FRAS to update.
     */
    where: CHAROLA_FRASWhereUniqueInput
  }

  /**
   * CHAROLA_FRAS updateMany
   */
  export type CHAROLA_FRASUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CHAROLA_FRAS.
     */
    data: XOR<CHAROLA_FRASUpdateManyMutationInput, CHAROLA_FRASUncheckedUpdateManyInput>
    /**
     * Filter which CHAROLA_FRAS to update
     */
    where?: CHAROLA_FRASWhereInput
    /**
     * Limit how many CHAROLA_FRAS to update.
     */
    limit?: number
  }

  /**
   * CHAROLA_FRAS upsert
   */
  export type CHAROLA_FRASUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_FRAS
     */
    select?: CHAROLA_FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_FRAS
     */
    omit?: CHAROLA_FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_FRASInclude<ExtArgs> | null
    /**
     * The filter to search for the CHAROLA_FRAS to update in case it exists.
     */
    where: CHAROLA_FRASWhereUniqueInput
    /**
     * In case the CHAROLA_FRAS found by the `where` argument doesn't exist, create a new CHAROLA_FRAS with this data.
     */
    create: XOR<CHAROLA_FRASCreateInput, CHAROLA_FRASUncheckedCreateInput>
    /**
     * In case the CHAROLA_FRAS was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CHAROLA_FRASUpdateInput, CHAROLA_FRASUncheckedUpdateInput>
  }

  /**
   * CHAROLA_FRAS delete
   */
  export type CHAROLA_FRASDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_FRAS
     */
    select?: CHAROLA_FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_FRAS
     */
    omit?: CHAROLA_FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_FRASInclude<ExtArgs> | null
    /**
     * Filter which CHAROLA_FRAS to delete.
     */
    where: CHAROLA_FRASWhereUniqueInput
  }

  /**
   * CHAROLA_FRAS deleteMany
   */
  export type CHAROLA_FRASDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CHAROLA_FRAS to delete
     */
    where?: CHAROLA_FRASWhereInput
    /**
     * Limit how many CHAROLA_FRAS to delete.
     */
    limit?: number
  }

  /**
   * CHAROLA_FRAS without action
   */
  export type CHAROLA_FRASDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_FRAS
     */
    select?: CHAROLA_FRASSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_FRAS
     */
    omit?: CHAROLA_FRASOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_FRASInclude<ExtArgs> | null
  }


  /**
   * Model CHAROLA_PUPA
   */

  export type AggregateCHAROLA_PUPA = {
    _count: CHAROLA_PUPACountAggregateOutputType | null
    _avg: CHAROLA_PUPAAvgAggregateOutputType | null
    _sum: CHAROLA_PUPASumAggregateOutputType | null
    _min: CHAROLA_PUPAMinAggregateOutputType | null
    _max: CHAROLA_PUPAMaxAggregateOutputType | null
  }

  export type CHAROLA_PUPAAvgAggregateOutputType = {
    charolaId: number | null
    pupaId: number | null
  }

  export type CHAROLA_PUPASumAggregateOutputType = {
    charolaId: number | null
    pupaId: number | null
  }

  export type CHAROLA_PUPAMinAggregateOutputType = {
    charolaId: number | null
    pupaId: number | null
  }

  export type CHAROLA_PUPAMaxAggregateOutputType = {
    charolaId: number | null
    pupaId: number | null
  }

  export type CHAROLA_PUPACountAggregateOutputType = {
    charolaId: number
    pupaId: number
    _all: number
  }


  export type CHAROLA_PUPAAvgAggregateInputType = {
    charolaId?: true
    pupaId?: true
  }

  export type CHAROLA_PUPASumAggregateInputType = {
    charolaId?: true
    pupaId?: true
  }

  export type CHAROLA_PUPAMinAggregateInputType = {
    charolaId?: true
    pupaId?: true
  }

  export type CHAROLA_PUPAMaxAggregateInputType = {
    charolaId?: true
    pupaId?: true
  }

  export type CHAROLA_PUPACountAggregateInputType = {
    charolaId?: true
    pupaId?: true
    _all?: true
  }

  export type CHAROLA_PUPAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CHAROLA_PUPA to aggregate.
     */
    where?: CHAROLA_PUPAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_PUPAS to fetch.
     */
    orderBy?: CHAROLA_PUPAOrderByWithRelationInput | CHAROLA_PUPAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CHAROLA_PUPAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_PUPAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_PUPAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CHAROLA_PUPAS
    **/
    _count?: true | CHAROLA_PUPACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CHAROLA_PUPAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CHAROLA_PUPASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CHAROLA_PUPAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CHAROLA_PUPAMaxAggregateInputType
  }

  export type GetCHAROLA_PUPAAggregateType<T extends CHAROLA_PUPAAggregateArgs> = {
        [P in keyof T & keyof AggregateCHAROLA_PUPA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCHAROLA_PUPA[P]>
      : GetScalarType<T[P], AggregateCHAROLA_PUPA[P]>
  }




  export type CHAROLA_PUPAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CHAROLA_PUPAWhereInput
    orderBy?: CHAROLA_PUPAOrderByWithAggregationInput | CHAROLA_PUPAOrderByWithAggregationInput[]
    by: CHAROLA_PUPAScalarFieldEnum[] | CHAROLA_PUPAScalarFieldEnum
    having?: CHAROLA_PUPAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CHAROLA_PUPACountAggregateInputType | true
    _avg?: CHAROLA_PUPAAvgAggregateInputType
    _sum?: CHAROLA_PUPASumAggregateInputType
    _min?: CHAROLA_PUPAMinAggregateInputType
    _max?: CHAROLA_PUPAMaxAggregateInputType
  }

  export type CHAROLA_PUPAGroupByOutputType = {
    charolaId: number
    pupaId: number
    _count: CHAROLA_PUPACountAggregateOutputType | null
    _avg: CHAROLA_PUPAAvgAggregateOutputType | null
    _sum: CHAROLA_PUPASumAggregateOutputType | null
    _min: CHAROLA_PUPAMinAggregateOutputType | null
    _max: CHAROLA_PUPAMaxAggregateOutputType | null
  }

  type GetCHAROLA_PUPAGroupByPayload<T extends CHAROLA_PUPAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CHAROLA_PUPAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CHAROLA_PUPAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CHAROLA_PUPAGroupByOutputType[P]>
            : GetScalarType<T[P], CHAROLA_PUPAGroupByOutputType[P]>
        }
      >
    >


  export type CHAROLA_PUPASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    charolaId?: boolean
    pupaId?: boolean
    CHAROLA?: boolean | CHAROLADefaultArgs<ExtArgs>
    PUPA?: boolean | PUPADefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cHAROLA_PUPA"]>



  export type CHAROLA_PUPASelectScalar = {
    charolaId?: boolean
    pupaId?: boolean
  }

  export type CHAROLA_PUPAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"charolaId" | "pupaId", ExtArgs["result"]["cHAROLA_PUPA"]>
  export type CHAROLA_PUPAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA?: boolean | CHAROLADefaultArgs<ExtArgs>
    PUPA?: boolean | PUPADefaultArgs<ExtArgs>
  }

  export type $CHAROLA_PUPAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CHAROLA_PUPA"
    objects: {
      CHAROLA: Prisma.$CHAROLAPayload<ExtArgs>
      PUPA: Prisma.$PUPAPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      charolaId: number
      pupaId: number
    }, ExtArgs["result"]["cHAROLA_PUPA"]>
    composites: {}
  }

  type CHAROLA_PUPAGetPayload<S extends boolean | null | undefined | CHAROLA_PUPADefaultArgs> = $Result.GetResult<Prisma.$CHAROLA_PUPAPayload, S>

  type CHAROLA_PUPACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CHAROLA_PUPAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CHAROLA_PUPACountAggregateInputType | true
    }

  export interface CHAROLA_PUPADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CHAROLA_PUPA'], meta: { name: 'CHAROLA_PUPA' } }
    /**
     * Find zero or one CHAROLA_PUPA that matches the filter.
     * @param {CHAROLA_PUPAFindUniqueArgs} args - Arguments to find a CHAROLA_PUPA
     * @example
     * // Get one CHAROLA_PUPA
     * const cHAROLA_PUPA = await prisma.cHAROLA_PUPA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CHAROLA_PUPAFindUniqueArgs>(args: SelectSubset<T, CHAROLA_PUPAFindUniqueArgs<ExtArgs>>): Prisma__CHAROLA_PUPAClient<$Result.GetResult<Prisma.$CHAROLA_PUPAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CHAROLA_PUPA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CHAROLA_PUPAFindUniqueOrThrowArgs} args - Arguments to find a CHAROLA_PUPA
     * @example
     * // Get one CHAROLA_PUPA
     * const cHAROLA_PUPA = await prisma.cHAROLA_PUPA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CHAROLA_PUPAFindUniqueOrThrowArgs>(args: SelectSubset<T, CHAROLA_PUPAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CHAROLA_PUPAClient<$Result.GetResult<Prisma.$CHAROLA_PUPAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CHAROLA_PUPA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_PUPAFindFirstArgs} args - Arguments to find a CHAROLA_PUPA
     * @example
     * // Get one CHAROLA_PUPA
     * const cHAROLA_PUPA = await prisma.cHAROLA_PUPA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CHAROLA_PUPAFindFirstArgs>(args?: SelectSubset<T, CHAROLA_PUPAFindFirstArgs<ExtArgs>>): Prisma__CHAROLA_PUPAClient<$Result.GetResult<Prisma.$CHAROLA_PUPAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CHAROLA_PUPA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_PUPAFindFirstOrThrowArgs} args - Arguments to find a CHAROLA_PUPA
     * @example
     * // Get one CHAROLA_PUPA
     * const cHAROLA_PUPA = await prisma.cHAROLA_PUPA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CHAROLA_PUPAFindFirstOrThrowArgs>(args?: SelectSubset<T, CHAROLA_PUPAFindFirstOrThrowArgs<ExtArgs>>): Prisma__CHAROLA_PUPAClient<$Result.GetResult<Prisma.$CHAROLA_PUPAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CHAROLA_PUPAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_PUPAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CHAROLA_PUPAS
     * const cHAROLA_PUPAS = await prisma.cHAROLA_PUPA.findMany()
     * 
     * // Get first 10 CHAROLA_PUPAS
     * const cHAROLA_PUPAS = await prisma.cHAROLA_PUPA.findMany({ take: 10 })
     * 
     * // Only select the `charolaId`
     * const cHAROLA_PUPAWithCharolaIdOnly = await prisma.cHAROLA_PUPA.findMany({ select: { charolaId: true } })
     * 
     */
    findMany<T extends CHAROLA_PUPAFindManyArgs>(args?: SelectSubset<T, CHAROLA_PUPAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_PUPAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CHAROLA_PUPA.
     * @param {CHAROLA_PUPACreateArgs} args - Arguments to create a CHAROLA_PUPA.
     * @example
     * // Create one CHAROLA_PUPA
     * const CHAROLA_PUPA = await prisma.cHAROLA_PUPA.create({
     *   data: {
     *     // ... data to create a CHAROLA_PUPA
     *   }
     * })
     * 
     */
    create<T extends CHAROLA_PUPACreateArgs>(args: SelectSubset<T, CHAROLA_PUPACreateArgs<ExtArgs>>): Prisma__CHAROLA_PUPAClient<$Result.GetResult<Prisma.$CHAROLA_PUPAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CHAROLA_PUPAS.
     * @param {CHAROLA_PUPACreateManyArgs} args - Arguments to create many CHAROLA_PUPAS.
     * @example
     * // Create many CHAROLA_PUPAS
     * const cHAROLA_PUPA = await prisma.cHAROLA_PUPA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CHAROLA_PUPACreateManyArgs>(args?: SelectSubset<T, CHAROLA_PUPACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CHAROLA_PUPA.
     * @param {CHAROLA_PUPADeleteArgs} args - Arguments to delete one CHAROLA_PUPA.
     * @example
     * // Delete one CHAROLA_PUPA
     * const CHAROLA_PUPA = await prisma.cHAROLA_PUPA.delete({
     *   where: {
     *     // ... filter to delete one CHAROLA_PUPA
     *   }
     * })
     * 
     */
    delete<T extends CHAROLA_PUPADeleteArgs>(args: SelectSubset<T, CHAROLA_PUPADeleteArgs<ExtArgs>>): Prisma__CHAROLA_PUPAClient<$Result.GetResult<Prisma.$CHAROLA_PUPAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CHAROLA_PUPA.
     * @param {CHAROLA_PUPAUpdateArgs} args - Arguments to update one CHAROLA_PUPA.
     * @example
     * // Update one CHAROLA_PUPA
     * const cHAROLA_PUPA = await prisma.cHAROLA_PUPA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CHAROLA_PUPAUpdateArgs>(args: SelectSubset<T, CHAROLA_PUPAUpdateArgs<ExtArgs>>): Prisma__CHAROLA_PUPAClient<$Result.GetResult<Prisma.$CHAROLA_PUPAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CHAROLA_PUPAS.
     * @param {CHAROLA_PUPADeleteManyArgs} args - Arguments to filter CHAROLA_PUPAS to delete.
     * @example
     * // Delete a few CHAROLA_PUPAS
     * const { count } = await prisma.cHAROLA_PUPA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CHAROLA_PUPADeleteManyArgs>(args?: SelectSubset<T, CHAROLA_PUPADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CHAROLA_PUPAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_PUPAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CHAROLA_PUPAS
     * const cHAROLA_PUPA = await prisma.cHAROLA_PUPA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CHAROLA_PUPAUpdateManyArgs>(args: SelectSubset<T, CHAROLA_PUPAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CHAROLA_PUPA.
     * @param {CHAROLA_PUPAUpsertArgs} args - Arguments to update or create a CHAROLA_PUPA.
     * @example
     * // Update or create a CHAROLA_PUPA
     * const cHAROLA_PUPA = await prisma.cHAROLA_PUPA.upsert({
     *   create: {
     *     // ... data to create a CHAROLA_PUPA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CHAROLA_PUPA we want to update
     *   }
     * })
     */
    upsert<T extends CHAROLA_PUPAUpsertArgs>(args: SelectSubset<T, CHAROLA_PUPAUpsertArgs<ExtArgs>>): Prisma__CHAROLA_PUPAClient<$Result.GetResult<Prisma.$CHAROLA_PUPAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CHAROLA_PUPAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_PUPACountArgs} args - Arguments to filter CHAROLA_PUPAS to count.
     * @example
     * // Count the number of CHAROLA_PUPAS
     * const count = await prisma.cHAROLA_PUPA.count({
     *   where: {
     *     // ... the filter for the CHAROLA_PUPAS we want to count
     *   }
     * })
    **/
    count<T extends CHAROLA_PUPACountArgs>(
      args?: Subset<T, CHAROLA_PUPACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CHAROLA_PUPACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CHAROLA_PUPA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_PUPAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CHAROLA_PUPAAggregateArgs>(args: Subset<T, CHAROLA_PUPAAggregateArgs>): Prisma.PrismaPromise<GetCHAROLA_PUPAAggregateType<T>>

    /**
     * Group by CHAROLA_PUPA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CHAROLA_PUPAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CHAROLA_PUPAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CHAROLA_PUPAGroupByArgs['orderBy'] }
        : { orderBy?: CHAROLA_PUPAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CHAROLA_PUPAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCHAROLA_PUPAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CHAROLA_PUPA model
   */
  readonly fields: CHAROLA_PUPAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CHAROLA_PUPA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CHAROLA_PUPAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CHAROLA<T extends CHAROLADefaultArgs<ExtArgs> = {}>(args?: Subset<T, CHAROLADefaultArgs<ExtArgs>>): Prisma__CHAROLAClient<$Result.GetResult<Prisma.$CHAROLAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PUPA<T extends PUPADefaultArgs<ExtArgs> = {}>(args?: Subset<T, PUPADefaultArgs<ExtArgs>>): Prisma__PUPAClient<$Result.GetResult<Prisma.$PUPAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CHAROLA_PUPA model
   */
  interface CHAROLA_PUPAFieldRefs {
    readonly charolaId: FieldRef<"CHAROLA_PUPA", 'Int'>
    readonly pupaId: FieldRef<"CHAROLA_PUPA", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CHAROLA_PUPA findUnique
   */
  export type CHAROLA_PUPAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_PUPA
     */
    select?: CHAROLA_PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_PUPA
     */
    omit?: CHAROLA_PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_PUPAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_PUPA to fetch.
     */
    where: CHAROLA_PUPAWhereUniqueInput
  }

  /**
   * CHAROLA_PUPA findUniqueOrThrow
   */
  export type CHAROLA_PUPAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_PUPA
     */
    select?: CHAROLA_PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_PUPA
     */
    omit?: CHAROLA_PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_PUPAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_PUPA to fetch.
     */
    where: CHAROLA_PUPAWhereUniqueInput
  }

  /**
   * CHAROLA_PUPA findFirst
   */
  export type CHAROLA_PUPAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_PUPA
     */
    select?: CHAROLA_PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_PUPA
     */
    omit?: CHAROLA_PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_PUPAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_PUPA to fetch.
     */
    where?: CHAROLA_PUPAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_PUPAS to fetch.
     */
    orderBy?: CHAROLA_PUPAOrderByWithRelationInput | CHAROLA_PUPAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CHAROLA_PUPAS.
     */
    cursor?: CHAROLA_PUPAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_PUPAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_PUPAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CHAROLA_PUPAS.
     */
    distinct?: CHAROLA_PUPAScalarFieldEnum | CHAROLA_PUPAScalarFieldEnum[]
  }

  /**
   * CHAROLA_PUPA findFirstOrThrow
   */
  export type CHAROLA_PUPAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_PUPA
     */
    select?: CHAROLA_PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_PUPA
     */
    omit?: CHAROLA_PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_PUPAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_PUPA to fetch.
     */
    where?: CHAROLA_PUPAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_PUPAS to fetch.
     */
    orderBy?: CHAROLA_PUPAOrderByWithRelationInput | CHAROLA_PUPAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CHAROLA_PUPAS.
     */
    cursor?: CHAROLA_PUPAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_PUPAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_PUPAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CHAROLA_PUPAS.
     */
    distinct?: CHAROLA_PUPAScalarFieldEnum | CHAROLA_PUPAScalarFieldEnum[]
  }

  /**
   * CHAROLA_PUPA findMany
   */
  export type CHAROLA_PUPAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_PUPA
     */
    select?: CHAROLA_PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_PUPA
     */
    omit?: CHAROLA_PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_PUPAInclude<ExtArgs> | null
    /**
     * Filter, which CHAROLA_PUPAS to fetch.
     */
    where?: CHAROLA_PUPAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CHAROLA_PUPAS to fetch.
     */
    orderBy?: CHAROLA_PUPAOrderByWithRelationInput | CHAROLA_PUPAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CHAROLA_PUPAS.
     */
    cursor?: CHAROLA_PUPAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CHAROLA_PUPAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CHAROLA_PUPAS.
     */
    skip?: number
    distinct?: CHAROLA_PUPAScalarFieldEnum | CHAROLA_PUPAScalarFieldEnum[]
  }

  /**
   * CHAROLA_PUPA create
   */
  export type CHAROLA_PUPACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_PUPA
     */
    select?: CHAROLA_PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_PUPA
     */
    omit?: CHAROLA_PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_PUPAInclude<ExtArgs> | null
    /**
     * The data needed to create a CHAROLA_PUPA.
     */
    data: XOR<CHAROLA_PUPACreateInput, CHAROLA_PUPAUncheckedCreateInput>
  }

  /**
   * CHAROLA_PUPA createMany
   */
  export type CHAROLA_PUPACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CHAROLA_PUPAS.
     */
    data: CHAROLA_PUPACreateManyInput | CHAROLA_PUPACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CHAROLA_PUPA update
   */
  export type CHAROLA_PUPAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_PUPA
     */
    select?: CHAROLA_PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_PUPA
     */
    omit?: CHAROLA_PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_PUPAInclude<ExtArgs> | null
    /**
     * The data needed to update a CHAROLA_PUPA.
     */
    data: XOR<CHAROLA_PUPAUpdateInput, CHAROLA_PUPAUncheckedUpdateInput>
    /**
     * Choose, which CHAROLA_PUPA to update.
     */
    where: CHAROLA_PUPAWhereUniqueInput
  }

  /**
   * CHAROLA_PUPA updateMany
   */
  export type CHAROLA_PUPAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CHAROLA_PUPAS.
     */
    data: XOR<CHAROLA_PUPAUpdateManyMutationInput, CHAROLA_PUPAUncheckedUpdateManyInput>
    /**
     * Filter which CHAROLA_PUPAS to update
     */
    where?: CHAROLA_PUPAWhereInput
    /**
     * Limit how many CHAROLA_PUPAS to update.
     */
    limit?: number
  }

  /**
   * CHAROLA_PUPA upsert
   */
  export type CHAROLA_PUPAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_PUPA
     */
    select?: CHAROLA_PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_PUPA
     */
    omit?: CHAROLA_PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_PUPAInclude<ExtArgs> | null
    /**
     * The filter to search for the CHAROLA_PUPA to update in case it exists.
     */
    where: CHAROLA_PUPAWhereUniqueInput
    /**
     * In case the CHAROLA_PUPA found by the `where` argument doesn't exist, create a new CHAROLA_PUPA with this data.
     */
    create: XOR<CHAROLA_PUPACreateInput, CHAROLA_PUPAUncheckedCreateInput>
    /**
     * In case the CHAROLA_PUPA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CHAROLA_PUPAUpdateInput, CHAROLA_PUPAUncheckedUpdateInput>
  }

  /**
   * CHAROLA_PUPA delete
   */
  export type CHAROLA_PUPADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_PUPA
     */
    select?: CHAROLA_PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_PUPA
     */
    omit?: CHAROLA_PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_PUPAInclude<ExtArgs> | null
    /**
     * Filter which CHAROLA_PUPA to delete.
     */
    where: CHAROLA_PUPAWhereUniqueInput
  }

  /**
   * CHAROLA_PUPA deleteMany
   */
  export type CHAROLA_PUPADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CHAROLA_PUPAS to delete
     */
    where?: CHAROLA_PUPAWhereInput
    /**
     * Limit how many CHAROLA_PUPAS to delete.
     */
    limit?: number
  }

  /**
   * CHAROLA_PUPA without action
   */
  export type CHAROLA_PUPADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_PUPA
     */
    select?: CHAROLA_PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_PUPA
     */
    omit?: CHAROLA_PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_PUPAInclude<ExtArgs> | null
  }


  /**
   * Model PUPA
   */

  export type AggregatePUPA = {
    _count: PUPACountAggregateOutputType | null
    _avg: PUPAAvgAggregateOutputType | null
    _sum: PUPASumAggregateOutputType | null
    _min: PUPAMinAggregateOutputType | null
    _max: PUPAMaxAggregateOutputType | null
  }

  export type PUPAAvgAggregateOutputType = {
    pupaId: number | null
    cantidadObtenida: number | null
  }

  export type PUPASumAggregateOutputType = {
    pupaId: number | null
    cantidadObtenida: number | null
  }

  export type PUPAMinAggregateOutputType = {
    pupaId: number | null
    fechaRegistro: Date | null
    cantidadObtenida: number | null
  }

  export type PUPAMaxAggregateOutputType = {
    pupaId: number | null
    fechaRegistro: Date | null
    cantidadObtenida: number | null
  }

  export type PUPACountAggregateOutputType = {
    pupaId: number
    fechaRegistro: number
    cantidadObtenida: number
    _all: number
  }


  export type PUPAAvgAggregateInputType = {
    pupaId?: true
    cantidadObtenida?: true
  }

  export type PUPASumAggregateInputType = {
    pupaId?: true
    cantidadObtenida?: true
  }

  export type PUPAMinAggregateInputType = {
    pupaId?: true
    fechaRegistro?: true
    cantidadObtenida?: true
  }

  export type PUPAMaxAggregateInputType = {
    pupaId?: true
    fechaRegistro?: true
    cantidadObtenida?: true
  }

  export type PUPACountAggregateInputType = {
    pupaId?: true
    fechaRegistro?: true
    cantidadObtenida?: true
    _all?: true
  }

  export type PUPAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PUPA to aggregate.
     */
    where?: PUPAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PUPAS to fetch.
     */
    orderBy?: PUPAOrderByWithRelationInput | PUPAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PUPAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PUPAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PUPAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PUPAS
    **/
    _count?: true | PUPACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PUPAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PUPASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PUPAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PUPAMaxAggregateInputType
  }

  export type GetPUPAAggregateType<T extends PUPAAggregateArgs> = {
        [P in keyof T & keyof AggregatePUPA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePUPA[P]>
      : GetScalarType<T[P], AggregatePUPA[P]>
  }




  export type PUPAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PUPAWhereInput
    orderBy?: PUPAOrderByWithAggregationInput | PUPAOrderByWithAggregationInput[]
    by: PUPAScalarFieldEnum[] | PUPAScalarFieldEnum
    having?: PUPAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PUPACountAggregateInputType | true
    _avg?: PUPAAvgAggregateInputType
    _sum?: PUPASumAggregateInputType
    _min?: PUPAMinAggregateInputType
    _max?: PUPAMaxAggregateInputType
  }

  export type PUPAGroupByOutputType = {
    pupaId: number
    fechaRegistro: Date | null
    cantidadObtenida: number | null
    _count: PUPACountAggregateOutputType | null
    _avg: PUPAAvgAggregateOutputType | null
    _sum: PUPASumAggregateOutputType | null
    _min: PUPAMinAggregateOutputType | null
    _max: PUPAMaxAggregateOutputType | null
  }

  type GetPUPAGroupByPayload<T extends PUPAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PUPAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PUPAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PUPAGroupByOutputType[P]>
            : GetScalarType<T[P], PUPAGroupByOutputType[P]>
        }
      >
    >


  export type PUPASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pupaId?: boolean
    fechaRegistro?: boolean
    cantidadObtenida?: boolean
    CHAROLA_PUPA?: boolean | PUPA$CHAROLA_PUPAArgs<ExtArgs>
    _count?: boolean | PUPACountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pUPA"]>



  export type PUPASelectScalar = {
    pupaId?: boolean
    fechaRegistro?: boolean
    cantidadObtenida?: boolean
  }

  export type PUPAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pupaId" | "fechaRegistro" | "cantidadObtenida", ExtArgs["result"]["pUPA"]>
  export type PUPAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CHAROLA_PUPA?: boolean | PUPA$CHAROLA_PUPAArgs<ExtArgs>
    _count?: boolean | PUPACountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PUPAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PUPA"
    objects: {
      CHAROLA_PUPA: Prisma.$CHAROLA_PUPAPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pupaId: number
      fechaRegistro: Date | null
      cantidadObtenida: number | null
    }, ExtArgs["result"]["pUPA"]>
    composites: {}
  }

  type PUPAGetPayload<S extends boolean | null | undefined | PUPADefaultArgs> = $Result.GetResult<Prisma.$PUPAPayload, S>

  type PUPACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PUPAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PUPACountAggregateInputType | true
    }

  export interface PUPADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PUPA'], meta: { name: 'PUPA' } }
    /**
     * Find zero or one PUPA that matches the filter.
     * @param {PUPAFindUniqueArgs} args - Arguments to find a PUPA
     * @example
     * // Get one PUPA
     * const pUPA = await prisma.pUPA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PUPAFindUniqueArgs>(args: SelectSubset<T, PUPAFindUniqueArgs<ExtArgs>>): Prisma__PUPAClient<$Result.GetResult<Prisma.$PUPAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PUPA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PUPAFindUniqueOrThrowArgs} args - Arguments to find a PUPA
     * @example
     * // Get one PUPA
     * const pUPA = await prisma.pUPA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PUPAFindUniqueOrThrowArgs>(args: SelectSubset<T, PUPAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PUPAClient<$Result.GetResult<Prisma.$PUPAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PUPA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PUPAFindFirstArgs} args - Arguments to find a PUPA
     * @example
     * // Get one PUPA
     * const pUPA = await prisma.pUPA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PUPAFindFirstArgs>(args?: SelectSubset<T, PUPAFindFirstArgs<ExtArgs>>): Prisma__PUPAClient<$Result.GetResult<Prisma.$PUPAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PUPA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PUPAFindFirstOrThrowArgs} args - Arguments to find a PUPA
     * @example
     * // Get one PUPA
     * const pUPA = await prisma.pUPA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PUPAFindFirstOrThrowArgs>(args?: SelectSubset<T, PUPAFindFirstOrThrowArgs<ExtArgs>>): Prisma__PUPAClient<$Result.GetResult<Prisma.$PUPAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PUPAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PUPAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PUPAS
     * const pUPAS = await prisma.pUPA.findMany()
     * 
     * // Get first 10 PUPAS
     * const pUPAS = await prisma.pUPA.findMany({ take: 10 })
     * 
     * // Only select the `pupaId`
     * const pUPAWithPupaIdOnly = await prisma.pUPA.findMany({ select: { pupaId: true } })
     * 
     */
    findMany<T extends PUPAFindManyArgs>(args?: SelectSubset<T, PUPAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PUPAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PUPA.
     * @param {PUPACreateArgs} args - Arguments to create a PUPA.
     * @example
     * // Create one PUPA
     * const PUPA = await prisma.pUPA.create({
     *   data: {
     *     // ... data to create a PUPA
     *   }
     * })
     * 
     */
    create<T extends PUPACreateArgs>(args: SelectSubset<T, PUPACreateArgs<ExtArgs>>): Prisma__PUPAClient<$Result.GetResult<Prisma.$PUPAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PUPAS.
     * @param {PUPACreateManyArgs} args - Arguments to create many PUPAS.
     * @example
     * // Create many PUPAS
     * const pUPA = await prisma.pUPA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PUPACreateManyArgs>(args?: SelectSubset<T, PUPACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PUPA.
     * @param {PUPADeleteArgs} args - Arguments to delete one PUPA.
     * @example
     * // Delete one PUPA
     * const PUPA = await prisma.pUPA.delete({
     *   where: {
     *     // ... filter to delete one PUPA
     *   }
     * })
     * 
     */
    delete<T extends PUPADeleteArgs>(args: SelectSubset<T, PUPADeleteArgs<ExtArgs>>): Prisma__PUPAClient<$Result.GetResult<Prisma.$PUPAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PUPA.
     * @param {PUPAUpdateArgs} args - Arguments to update one PUPA.
     * @example
     * // Update one PUPA
     * const pUPA = await prisma.pUPA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PUPAUpdateArgs>(args: SelectSubset<T, PUPAUpdateArgs<ExtArgs>>): Prisma__PUPAClient<$Result.GetResult<Prisma.$PUPAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PUPAS.
     * @param {PUPADeleteManyArgs} args - Arguments to filter PUPAS to delete.
     * @example
     * // Delete a few PUPAS
     * const { count } = await prisma.pUPA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PUPADeleteManyArgs>(args?: SelectSubset<T, PUPADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PUPAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PUPAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PUPAS
     * const pUPA = await prisma.pUPA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PUPAUpdateManyArgs>(args: SelectSubset<T, PUPAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PUPA.
     * @param {PUPAUpsertArgs} args - Arguments to update or create a PUPA.
     * @example
     * // Update or create a PUPA
     * const pUPA = await prisma.pUPA.upsert({
     *   create: {
     *     // ... data to create a PUPA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PUPA we want to update
     *   }
     * })
     */
    upsert<T extends PUPAUpsertArgs>(args: SelectSubset<T, PUPAUpsertArgs<ExtArgs>>): Prisma__PUPAClient<$Result.GetResult<Prisma.$PUPAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PUPAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PUPACountArgs} args - Arguments to filter PUPAS to count.
     * @example
     * // Count the number of PUPAS
     * const count = await prisma.pUPA.count({
     *   where: {
     *     // ... the filter for the PUPAS we want to count
     *   }
     * })
    **/
    count<T extends PUPACountArgs>(
      args?: Subset<T, PUPACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PUPACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PUPA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PUPAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PUPAAggregateArgs>(args: Subset<T, PUPAAggregateArgs>): Prisma.PrismaPromise<GetPUPAAggregateType<T>>

    /**
     * Group by PUPA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PUPAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PUPAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PUPAGroupByArgs['orderBy'] }
        : { orderBy?: PUPAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PUPAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPUPAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PUPA model
   */
  readonly fields: PUPAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PUPA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PUPAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CHAROLA_PUPA<T extends PUPA$CHAROLA_PUPAArgs<ExtArgs> = {}>(args?: Subset<T, PUPA$CHAROLA_PUPAArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CHAROLA_PUPAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PUPA model
   */
  interface PUPAFieldRefs {
    readonly pupaId: FieldRef<"PUPA", 'Int'>
    readonly fechaRegistro: FieldRef<"PUPA", 'DateTime'>
    readonly cantidadObtenida: FieldRef<"PUPA", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PUPA findUnique
   */
  export type PUPAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PUPA
     */
    select?: PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the PUPA
     */
    omit?: PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PUPAInclude<ExtArgs> | null
    /**
     * Filter, which PUPA to fetch.
     */
    where: PUPAWhereUniqueInput
  }

  /**
   * PUPA findUniqueOrThrow
   */
  export type PUPAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PUPA
     */
    select?: PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the PUPA
     */
    omit?: PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PUPAInclude<ExtArgs> | null
    /**
     * Filter, which PUPA to fetch.
     */
    where: PUPAWhereUniqueInput
  }

  /**
   * PUPA findFirst
   */
  export type PUPAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PUPA
     */
    select?: PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the PUPA
     */
    omit?: PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PUPAInclude<ExtArgs> | null
    /**
     * Filter, which PUPA to fetch.
     */
    where?: PUPAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PUPAS to fetch.
     */
    orderBy?: PUPAOrderByWithRelationInput | PUPAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PUPAS.
     */
    cursor?: PUPAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PUPAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PUPAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PUPAS.
     */
    distinct?: PUPAScalarFieldEnum | PUPAScalarFieldEnum[]
  }

  /**
   * PUPA findFirstOrThrow
   */
  export type PUPAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PUPA
     */
    select?: PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the PUPA
     */
    omit?: PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PUPAInclude<ExtArgs> | null
    /**
     * Filter, which PUPA to fetch.
     */
    where?: PUPAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PUPAS to fetch.
     */
    orderBy?: PUPAOrderByWithRelationInput | PUPAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PUPAS.
     */
    cursor?: PUPAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PUPAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PUPAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PUPAS.
     */
    distinct?: PUPAScalarFieldEnum | PUPAScalarFieldEnum[]
  }

  /**
   * PUPA findMany
   */
  export type PUPAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PUPA
     */
    select?: PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the PUPA
     */
    omit?: PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PUPAInclude<ExtArgs> | null
    /**
     * Filter, which PUPAS to fetch.
     */
    where?: PUPAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PUPAS to fetch.
     */
    orderBy?: PUPAOrderByWithRelationInput | PUPAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PUPAS.
     */
    cursor?: PUPAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PUPAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PUPAS.
     */
    skip?: number
    distinct?: PUPAScalarFieldEnum | PUPAScalarFieldEnum[]
  }

  /**
   * PUPA create
   */
  export type PUPACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PUPA
     */
    select?: PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the PUPA
     */
    omit?: PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PUPAInclude<ExtArgs> | null
    /**
     * The data needed to create a PUPA.
     */
    data?: XOR<PUPACreateInput, PUPAUncheckedCreateInput>
  }

  /**
   * PUPA createMany
   */
  export type PUPACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PUPAS.
     */
    data: PUPACreateManyInput | PUPACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PUPA update
   */
  export type PUPAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PUPA
     */
    select?: PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the PUPA
     */
    omit?: PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PUPAInclude<ExtArgs> | null
    /**
     * The data needed to update a PUPA.
     */
    data: XOR<PUPAUpdateInput, PUPAUncheckedUpdateInput>
    /**
     * Choose, which PUPA to update.
     */
    where: PUPAWhereUniqueInput
  }

  /**
   * PUPA updateMany
   */
  export type PUPAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PUPAS.
     */
    data: XOR<PUPAUpdateManyMutationInput, PUPAUncheckedUpdateManyInput>
    /**
     * Filter which PUPAS to update
     */
    where?: PUPAWhereInput
    /**
     * Limit how many PUPAS to update.
     */
    limit?: number
  }

  /**
   * PUPA upsert
   */
  export type PUPAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PUPA
     */
    select?: PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the PUPA
     */
    omit?: PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PUPAInclude<ExtArgs> | null
    /**
     * The filter to search for the PUPA to update in case it exists.
     */
    where: PUPAWhereUniqueInput
    /**
     * In case the PUPA found by the `where` argument doesn't exist, create a new PUPA with this data.
     */
    create: XOR<PUPACreateInput, PUPAUncheckedCreateInput>
    /**
     * In case the PUPA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PUPAUpdateInput, PUPAUncheckedUpdateInput>
  }

  /**
   * PUPA delete
   */
  export type PUPADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PUPA
     */
    select?: PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the PUPA
     */
    omit?: PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PUPAInclude<ExtArgs> | null
    /**
     * Filter which PUPA to delete.
     */
    where: PUPAWhereUniqueInput
  }

  /**
   * PUPA deleteMany
   */
  export type PUPADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PUPAS to delete
     */
    where?: PUPAWhereInput
    /**
     * Limit how many PUPAS to delete.
     */
    limit?: number
  }

  /**
   * PUPA.CHAROLA_PUPA
   */
  export type PUPA$CHAROLA_PUPAArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CHAROLA_PUPA
     */
    select?: CHAROLA_PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the CHAROLA_PUPA
     */
    omit?: CHAROLA_PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CHAROLA_PUPAInclude<ExtArgs> | null
    where?: CHAROLA_PUPAWhereInput
    orderBy?: CHAROLA_PUPAOrderByWithRelationInput | CHAROLA_PUPAOrderByWithRelationInput[]
    cursor?: CHAROLA_PUPAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CHAROLA_PUPAScalarFieldEnum | CHAROLA_PUPAScalarFieldEnum[]
  }

  /**
   * PUPA without action
   */
  export type PUPADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PUPA
     */
    select?: PUPASelect<ExtArgs> | null
    /**
     * Omit specific fields from the PUPA
     */
    omit?: PUPAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PUPAInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ADMINISTRADORScalarFieldEnum: {
    adminId: 'adminId',
    usuarioId: 'usuarioId'
  };

  export type ADMINISTRADORScalarFieldEnum = (typeof ADMINISTRADORScalarFieldEnum)[keyof typeof ADMINISTRADORScalarFieldEnum]


  export const CHAROLAScalarFieldEnum: {
    charolaId: 'charolaId',
    nombreCharola: 'nombreCharola',
    comidaCiclo: 'comidaCiclo',
    hidratacionCiclo: 'hidratacionCiclo',
    fechaActualizacion: 'fechaActualizacion',
    estado: 'estado',
    densidadLarva: 'densidadLarva',
    fechaCreacion: 'fechaCreacion',
    pesoCharola: 'pesoCharola'
  };

  export type CHAROLAScalarFieldEnum = (typeof CHAROLAScalarFieldEnum)[keyof typeof CHAROLAScalarFieldEnum]


  export const CHAROLA_CHAROLAScalarFieldEnum: {
    charolaHija: 'charolaHija',
    charolaAncestro: 'charolaAncestro'
  };

  export type CHAROLA_CHAROLAScalarFieldEnum = (typeof CHAROLA_CHAROLAScalarFieldEnum)[keyof typeof CHAROLA_CHAROLAScalarFieldEnum]


  export const CHAROLA_COMIDAScalarFieldEnum: {
    id: 'id',
    charolaId: 'charolaId',
    comidaId: 'comidaId',
    cantidadOtorgada: 'cantidadOtorgada'
  };

  export type CHAROLA_COMIDAScalarFieldEnum = (typeof CHAROLA_COMIDAScalarFieldEnum)[keyof typeof CHAROLA_COMIDAScalarFieldEnum]


  export const CHAROLA_HIDRATACIONScalarFieldEnum: {
    id: 'id',
    charolaId: 'charolaId',
    hidratacionId: 'hidratacionId',
    cantidadOtorgada: 'cantidadOtorgada'
  };

  export type CHAROLA_HIDRATACIONScalarFieldEnum = (typeof CHAROLA_HIDRATACIONScalarFieldEnum)[keyof typeof CHAROLA_HIDRATACIONScalarFieldEnum]


  export const COMIDAScalarFieldEnum: {
    comidaId: 'comidaId',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type COMIDAScalarFieldEnum = (typeof COMIDAScalarFieldEnum)[keyof typeof COMIDAScalarFieldEnum]


  export const FRASScalarFieldEnum: {
    frasId: 'frasId',
    gramosGenerados: 'gramosGenerados',
    charolaId: 'charolaId'
  };

  export type FRASScalarFieldEnum = (typeof FRASScalarFieldEnum)[keyof typeof FRASScalarFieldEnum]


  export const HIDRATACIONScalarFieldEnum: {
    hidratacionId: 'hidratacionId',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type HIDRATACIONScalarFieldEnum = (typeof HIDRATACIONScalarFieldEnum)[keyof typeof HIDRATACIONScalarFieldEnum]


  export const USUARIOScalarFieldEnum: {
    usuarioId: 'usuarioId',
    user: 'user',
    contrasena: 'contrasena',
    nombre: 'nombre',
    apellido_m: 'apellido_m',
    apellido_p: 'apellido_p'
  };

  export type USUARIOScalarFieldEnum = (typeof USUARIOScalarFieldEnum)[keyof typeof USUARIOScalarFieldEnum]


  export const USUARIO_CHAROLAScalarFieldEnum: {
    usuarioId: 'usuarioId',
    charolaId: 'charolaId'
  };

  export type USUARIO_CHAROLAScalarFieldEnum = (typeof USUARIO_CHAROLAScalarFieldEnum)[keyof typeof USUARIO_CHAROLAScalarFieldEnum]


  export const CHAROLA_FRASScalarFieldEnum: {
    charolaId: 'charolaId',
    frasId: 'frasId'
  };

  export type CHAROLA_FRASScalarFieldEnum = (typeof CHAROLA_FRASScalarFieldEnum)[keyof typeof CHAROLA_FRASScalarFieldEnum]


  export const CHAROLA_PUPAScalarFieldEnum: {
    charolaId: 'charolaId',
    pupaId: 'pupaId'
  };

  export type CHAROLA_PUPAScalarFieldEnum = (typeof CHAROLA_PUPAScalarFieldEnum)[keyof typeof CHAROLA_PUPAScalarFieldEnum]


  export const PUPAScalarFieldEnum: {
    pupaId: 'pupaId',
    fechaRegistro: 'fechaRegistro',
    cantidadObtenida: 'cantidadObtenida'
  };

  export type PUPAScalarFieldEnum = (typeof PUPAScalarFieldEnum)[keyof typeof PUPAScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const CHAROLAOrderByRelevanceFieldEnum: {
    nombreCharola: 'nombreCharola',
    estado: 'estado'
  };

  export type CHAROLAOrderByRelevanceFieldEnum = (typeof CHAROLAOrderByRelevanceFieldEnum)[keyof typeof CHAROLAOrderByRelevanceFieldEnum]


  export const COMIDAOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type COMIDAOrderByRelevanceFieldEnum = (typeof COMIDAOrderByRelevanceFieldEnum)[keyof typeof COMIDAOrderByRelevanceFieldEnum]


  export const HIDRATACIONOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type HIDRATACIONOrderByRelevanceFieldEnum = (typeof HIDRATACIONOrderByRelevanceFieldEnum)[keyof typeof HIDRATACIONOrderByRelevanceFieldEnum]


  export const USUARIOOrderByRelevanceFieldEnum: {
    user: 'user',
    contrasena: 'contrasena',
    nombre: 'nombre',
    apellido_m: 'apellido_m',
    apellido_p: 'apellido_p'
  };

  export type USUARIOOrderByRelevanceFieldEnum = (typeof USUARIOOrderByRelevanceFieldEnum)[keyof typeof USUARIOOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type ADMINISTRADORWhereInput = {
    AND?: ADMINISTRADORWhereInput | ADMINISTRADORWhereInput[]
    OR?: ADMINISTRADORWhereInput[]
    NOT?: ADMINISTRADORWhereInput | ADMINISTRADORWhereInput[]
    adminId?: IntFilter<"ADMINISTRADOR"> | number
    usuarioId?: IntNullableFilter<"ADMINISTRADOR"> | number | null
    USUARIO?: XOR<USUARIONullableScalarRelationFilter, USUARIOWhereInput> | null
  }

  export type ADMINISTRADOROrderByWithRelationInput = {
    adminId?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    USUARIO?: USUARIOOrderByWithRelationInput
  }

  export type ADMINISTRADORWhereUniqueInput = Prisma.AtLeast<{
    adminId?: number
    AND?: ADMINISTRADORWhereInput | ADMINISTRADORWhereInput[]
    OR?: ADMINISTRADORWhereInput[]
    NOT?: ADMINISTRADORWhereInput | ADMINISTRADORWhereInput[]
    usuarioId?: IntNullableFilter<"ADMINISTRADOR"> | number | null
    USUARIO?: XOR<USUARIONullableScalarRelationFilter, USUARIOWhereInput> | null
  }, "adminId">

  export type ADMINISTRADOROrderByWithAggregationInput = {
    adminId?: SortOrder
    usuarioId?: SortOrderInput | SortOrder
    _count?: ADMINISTRADORCountOrderByAggregateInput
    _avg?: ADMINISTRADORAvgOrderByAggregateInput
    _max?: ADMINISTRADORMaxOrderByAggregateInput
    _min?: ADMINISTRADORMinOrderByAggregateInput
    _sum?: ADMINISTRADORSumOrderByAggregateInput
  }

  export type ADMINISTRADORScalarWhereWithAggregatesInput = {
    AND?: ADMINISTRADORScalarWhereWithAggregatesInput | ADMINISTRADORScalarWhereWithAggregatesInput[]
    OR?: ADMINISTRADORScalarWhereWithAggregatesInput[]
    NOT?: ADMINISTRADORScalarWhereWithAggregatesInput | ADMINISTRADORScalarWhereWithAggregatesInput[]
    adminId?: IntWithAggregatesFilter<"ADMINISTRADOR"> | number
    usuarioId?: IntNullableWithAggregatesFilter<"ADMINISTRADOR"> | number | null
  }

  export type CHAROLAWhereInput = {
    AND?: CHAROLAWhereInput | CHAROLAWhereInput[]
    OR?: CHAROLAWhereInput[]
    NOT?: CHAROLAWhereInput | CHAROLAWhereInput[]
    charolaId?: IntFilter<"CHAROLA"> | number
    nombreCharola?: StringNullableFilter<"CHAROLA"> | string | null
    comidaCiclo?: FloatFilter<"CHAROLA"> | number
    hidratacionCiclo?: FloatFilter<"CHAROLA"> | number
    fechaActualizacion?: DateTimeNullableFilter<"CHAROLA"> | Date | string | null
    estado?: StringNullableFilter<"CHAROLA"> | string | null
    densidadLarva?: FloatNullableFilter<"CHAROLA"> | number | null
    fechaCreacion?: DateTimeNullableFilter<"CHAROLA"> | Date | string | null
    pesoCharola?: FloatNullableFilter<"CHAROLA"> | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAListRelationFilter
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAListRelationFilter
    CHAROLA_COMIDA?: CHAROLA_COMIDAListRelationFilter
    CHAROLA_FRAS?: CHAROLA_FRASListRelationFilter
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONListRelationFilter
    CHAROLA_PUPA?: CHAROLA_PUPAListRelationFilter
    FRAS?: FRASListRelationFilter
    USUARIO_CHAROLA?: USUARIO_CHAROLAListRelationFilter
  }

  export type CHAROLAOrderByWithRelationInput = {
    charolaId?: SortOrder
    nombreCharola?: SortOrderInput | SortOrder
    comidaCiclo?: SortOrder
    hidratacionCiclo?: SortOrder
    fechaActualizacion?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    densidadLarva?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrderInput | SortOrder
    pesoCharola?: SortOrderInput | SortOrder
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAOrderByRelationAggregateInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAOrderByRelationAggregateInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAOrderByRelationAggregateInput
    CHAROLA_FRAS?: CHAROLA_FRASOrderByRelationAggregateInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONOrderByRelationAggregateInput
    CHAROLA_PUPA?: CHAROLA_PUPAOrderByRelationAggregateInput
    FRAS?: FRASOrderByRelationAggregateInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAOrderByRelationAggregateInput
    _relevance?: CHAROLAOrderByRelevanceInput
  }

  export type CHAROLAWhereUniqueInput = Prisma.AtLeast<{
    charolaId?: number
    AND?: CHAROLAWhereInput | CHAROLAWhereInput[]
    OR?: CHAROLAWhereInput[]
    NOT?: CHAROLAWhereInput | CHAROLAWhereInput[]
    nombreCharola?: StringNullableFilter<"CHAROLA"> | string | null
    comidaCiclo?: FloatFilter<"CHAROLA"> | number
    hidratacionCiclo?: FloatFilter<"CHAROLA"> | number
    fechaActualizacion?: DateTimeNullableFilter<"CHAROLA"> | Date | string | null
    estado?: StringNullableFilter<"CHAROLA"> | string | null
    densidadLarva?: FloatNullableFilter<"CHAROLA"> | number | null
    fechaCreacion?: DateTimeNullableFilter<"CHAROLA"> | Date | string | null
    pesoCharola?: FloatNullableFilter<"CHAROLA"> | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAListRelationFilter
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAListRelationFilter
    CHAROLA_COMIDA?: CHAROLA_COMIDAListRelationFilter
    CHAROLA_FRAS?: CHAROLA_FRASListRelationFilter
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONListRelationFilter
    CHAROLA_PUPA?: CHAROLA_PUPAListRelationFilter
    FRAS?: FRASListRelationFilter
    USUARIO_CHAROLA?: USUARIO_CHAROLAListRelationFilter
  }, "charolaId">

  export type CHAROLAOrderByWithAggregationInput = {
    charolaId?: SortOrder
    nombreCharola?: SortOrderInput | SortOrder
    comidaCiclo?: SortOrder
    hidratacionCiclo?: SortOrder
    fechaActualizacion?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    densidadLarva?: SortOrderInput | SortOrder
    fechaCreacion?: SortOrderInput | SortOrder
    pesoCharola?: SortOrderInput | SortOrder
    _count?: CHAROLACountOrderByAggregateInput
    _avg?: CHAROLAAvgOrderByAggregateInput
    _max?: CHAROLAMaxOrderByAggregateInput
    _min?: CHAROLAMinOrderByAggregateInput
    _sum?: CHAROLASumOrderByAggregateInput
  }

  export type CHAROLAScalarWhereWithAggregatesInput = {
    AND?: CHAROLAScalarWhereWithAggregatesInput | CHAROLAScalarWhereWithAggregatesInput[]
    OR?: CHAROLAScalarWhereWithAggregatesInput[]
    NOT?: CHAROLAScalarWhereWithAggregatesInput | CHAROLAScalarWhereWithAggregatesInput[]
    charolaId?: IntWithAggregatesFilter<"CHAROLA"> | number
    nombreCharola?: StringNullableWithAggregatesFilter<"CHAROLA"> | string | null
    comidaCiclo?: FloatWithAggregatesFilter<"CHAROLA"> | number
    hidratacionCiclo?: FloatWithAggregatesFilter<"CHAROLA"> | number
    fechaActualizacion?: DateTimeNullableWithAggregatesFilter<"CHAROLA"> | Date | string | null
    estado?: StringNullableWithAggregatesFilter<"CHAROLA"> | string | null
    densidadLarva?: FloatNullableWithAggregatesFilter<"CHAROLA"> | number | null
    fechaCreacion?: DateTimeNullableWithAggregatesFilter<"CHAROLA"> | Date | string | null
    pesoCharola?: FloatNullableWithAggregatesFilter<"CHAROLA"> | number | null
  }

  export type CHAROLA_CHAROLAWhereInput = {
    AND?: CHAROLA_CHAROLAWhereInput | CHAROLA_CHAROLAWhereInput[]
    OR?: CHAROLA_CHAROLAWhereInput[]
    NOT?: CHAROLA_CHAROLAWhereInput | CHAROLA_CHAROLAWhereInput[]
    charolaHija?: IntFilter<"CHAROLA_CHAROLA"> | number
    charolaAncestro?: IntFilter<"CHAROLA_CHAROLA"> | number
    CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: XOR<CHAROLAScalarRelationFilter, CHAROLAWhereInput>
    CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: XOR<CHAROLAScalarRelationFilter, CHAROLAWhereInput>
  }

  export type CHAROLA_CHAROLAOrderByWithRelationInput = {
    charolaHija?: SortOrder
    charolaAncestro?: SortOrder
    CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLAOrderByWithRelationInput
    CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLAOrderByWithRelationInput
  }

  export type CHAROLA_CHAROLAWhereUniqueInput = Prisma.AtLeast<{
    charolaHija_charolaAncestro?: CHAROLA_CHAROLACharolaHijaCharolaAncestroCompoundUniqueInput
    AND?: CHAROLA_CHAROLAWhereInput | CHAROLA_CHAROLAWhereInput[]
    OR?: CHAROLA_CHAROLAWhereInput[]
    NOT?: CHAROLA_CHAROLAWhereInput | CHAROLA_CHAROLAWhereInput[]
    charolaHija?: IntFilter<"CHAROLA_CHAROLA"> | number
    charolaAncestro?: IntFilter<"CHAROLA_CHAROLA"> | number
    CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: XOR<CHAROLAScalarRelationFilter, CHAROLAWhereInput>
    CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: XOR<CHAROLAScalarRelationFilter, CHAROLAWhereInput>
  }, "charolaHija_charolaAncestro">

  export type CHAROLA_CHAROLAOrderByWithAggregationInput = {
    charolaHija?: SortOrder
    charolaAncestro?: SortOrder
    _count?: CHAROLA_CHAROLACountOrderByAggregateInput
    _avg?: CHAROLA_CHAROLAAvgOrderByAggregateInput
    _max?: CHAROLA_CHAROLAMaxOrderByAggregateInput
    _min?: CHAROLA_CHAROLAMinOrderByAggregateInput
    _sum?: CHAROLA_CHAROLASumOrderByAggregateInput
  }

  export type CHAROLA_CHAROLAScalarWhereWithAggregatesInput = {
    AND?: CHAROLA_CHAROLAScalarWhereWithAggregatesInput | CHAROLA_CHAROLAScalarWhereWithAggregatesInput[]
    OR?: CHAROLA_CHAROLAScalarWhereWithAggregatesInput[]
    NOT?: CHAROLA_CHAROLAScalarWhereWithAggregatesInput | CHAROLA_CHAROLAScalarWhereWithAggregatesInput[]
    charolaHija?: IntWithAggregatesFilter<"CHAROLA_CHAROLA"> | number
    charolaAncestro?: IntWithAggregatesFilter<"CHAROLA_CHAROLA"> | number
  }

  export type CHAROLA_COMIDAWhereInput = {
    AND?: CHAROLA_COMIDAWhereInput | CHAROLA_COMIDAWhereInput[]
    OR?: CHAROLA_COMIDAWhereInput[]
    NOT?: CHAROLA_COMIDAWhereInput | CHAROLA_COMIDAWhereInput[]
    id?: IntFilter<"CHAROLA_COMIDA"> | number
    charolaId?: IntNullableFilter<"CHAROLA_COMIDA"> | number | null
    comidaId?: IntNullableFilter<"CHAROLA_COMIDA"> | number | null
    cantidadOtorgada?: FloatFilter<"CHAROLA_COMIDA"> | number
    CHAROLA?: XOR<CHAROLANullableScalarRelationFilter, CHAROLAWhereInput> | null
    COMIDA?: XOR<COMIDANullableScalarRelationFilter, COMIDAWhereInput> | null
  }

  export type CHAROLA_COMIDAOrderByWithRelationInput = {
    id?: SortOrder
    charolaId?: SortOrderInput | SortOrder
    comidaId?: SortOrderInput | SortOrder
    cantidadOtorgada?: SortOrder
    CHAROLA?: CHAROLAOrderByWithRelationInput
    COMIDA?: COMIDAOrderByWithRelationInput
  }

  export type CHAROLA_COMIDAWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CHAROLA_COMIDAWhereInput | CHAROLA_COMIDAWhereInput[]
    OR?: CHAROLA_COMIDAWhereInput[]
    NOT?: CHAROLA_COMIDAWhereInput | CHAROLA_COMIDAWhereInput[]
    charolaId?: IntNullableFilter<"CHAROLA_COMIDA"> | number | null
    comidaId?: IntNullableFilter<"CHAROLA_COMIDA"> | number | null
    cantidadOtorgada?: FloatFilter<"CHAROLA_COMIDA"> | number
    CHAROLA?: XOR<CHAROLANullableScalarRelationFilter, CHAROLAWhereInput> | null
    COMIDA?: XOR<COMIDANullableScalarRelationFilter, COMIDAWhereInput> | null
  }, "id">

  export type CHAROLA_COMIDAOrderByWithAggregationInput = {
    id?: SortOrder
    charolaId?: SortOrderInput | SortOrder
    comidaId?: SortOrderInput | SortOrder
    cantidadOtorgada?: SortOrder
    _count?: CHAROLA_COMIDACountOrderByAggregateInput
    _avg?: CHAROLA_COMIDAAvgOrderByAggregateInput
    _max?: CHAROLA_COMIDAMaxOrderByAggregateInput
    _min?: CHAROLA_COMIDAMinOrderByAggregateInput
    _sum?: CHAROLA_COMIDASumOrderByAggregateInput
  }

  export type CHAROLA_COMIDAScalarWhereWithAggregatesInput = {
    AND?: CHAROLA_COMIDAScalarWhereWithAggregatesInput | CHAROLA_COMIDAScalarWhereWithAggregatesInput[]
    OR?: CHAROLA_COMIDAScalarWhereWithAggregatesInput[]
    NOT?: CHAROLA_COMIDAScalarWhereWithAggregatesInput | CHAROLA_COMIDAScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CHAROLA_COMIDA"> | number
    charolaId?: IntNullableWithAggregatesFilter<"CHAROLA_COMIDA"> | number | null
    comidaId?: IntNullableWithAggregatesFilter<"CHAROLA_COMIDA"> | number | null
    cantidadOtorgada?: FloatWithAggregatesFilter<"CHAROLA_COMIDA"> | number
  }

  export type CHAROLA_HIDRATACIONWhereInput = {
    AND?: CHAROLA_HIDRATACIONWhereInput | CHAROLA_HIDRATACIONWhereInput[]
    OR?: CHAROLA_HIDRATACIONWhereInput[]
    NOT?: CHAROLA_HIDRATACIONWhereInput | CHAROLA_HIDRATACIONWhereInput[]
    id?: IntFilter<"CHAROLA_HIDRATACION"> | number
    charolaId?: IntNullableFilter<"CHAROLA_HIDRATACION"> | number | null
    hidratacionId?: IntNullableFilter<"CHAROLA_HIDRATACION"> | number | null
    cantidadOtorgada?: FloatFilter<"CHAROLA_HIDRATACION"> | number
    CHAROLA?: XOR<CHAROLANullableScalarRelationFilter, CHAROLAWhereInput> | null
    HIDRATACION?: XOR<HIDRATACIONNullableScalarRelationFilter, HIDRATACIONWhereInput> | null
  }

  export type CHAROLA_HIDRATACIONOrderByWithRelationInput = {
    id?: SortOrder
    charolaId?: SortOrderInput | SortOrder
    hidratacionId?: SortOrderInput | SortOrder
    cantidadOtorgada?: SortOrder
    CHAROLA?: CHAROLAOrderByWithRelationInput
    HIDRATACION?: HIDRATACIONOrderByWithRelationInput
  }

  export type CHAROLA_HIDRATACIONWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CHAROLA_HIDRATACIONWhereInput | CHAROLA_HIDRATACIONWhereInput[]
    OR?: CHAROLA_HIDRATACIONWhereInput[]
    NOT?: CHAROLA_HIDRATACIONWhereInput | CHAROLA_HIDRATACIONWhereInput[]
    charolaId?: IntNullableFilter<"CHAROLA_HIDRATACION"> | number | null
    hidratacionId?: IntNullableFilter<"CHAROLA_HIDRATACION"> | number | null
    cantidadOtorgada?: FloatFilter<"CHAROLA_HIDRATACION"> | number
    CHAROLA?: XOR<CHAROLANullableScalarRelationFilter, CHAROLAWhereInput> | null
    HIDRATACION?: XOR<HIDRATACIONNullableScalarRelationFilter, HIDRATACIONWhereInput> | null
  }, "id">

  export type CHAROLA_HIDRATACIONOrderByWithAggregationInput = {
    id?: SortOrder
    charolaId?: SortOrderInput | SortOrder
    hidratacionId?: SortOrderInput | SortOrder
    cantidadOtorgada?: SortOrder
    _count?: CHAROLA_HIDRATACIONCountOrderByAggregateInput
    _avg?: CHAROLA_HIDRATACIONAvgOrderByAggregateInput
    _max?: CHAROLA_HIDRATACIONMaxOrderByAggregateInput
    _min?: CHAROLA_HIDRATACIONMinOrderByAggregateInput
    _sum?: CHAROLA_HIDRATACIONSumOrderByAggregateInput
  }

  export type CHAROLA_HIDRATACIONScalarWhereWithAggregatesInput = {
    AND?: CHAROLA_HIDRATACIONScalarWhereWithAggregatesInput | CHAROLA_HIDRATACIONScalarWhereWithAggregatesInput[]
    OR?: CHAROLA_HIDRATACIONScalarWhereWithAggregatesInput[]
    NOT?: CHAROLA_HIDRATACIONScalarWhereWithAggregatesInput | CHAROLA_HIDRATACIONScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CHAROLA_HIDRATACION"> | number
    charolaId?: IntNullableWithAggregatesFilter<"CHAROLA_HIDRATACION"> | number | null
    hidratacionId?: IntNullableWithAggregatesFilter<"CHAROLA_HIDRATACION"> | number | null
    cantidadOtorgada?: FloatWithAggregatesFilter<"CHAROLA_HIDRATACION"> | number
  }

  export type COMIDAWhereInput = {
    AND?: COMIDAWhereInput | COMIDAWhereInput[]
    OR?: COMIDAWhereInput[]
    NOT?: COMIDAWhereInput | COMIDAWhereInput[]
    comidaId?: IntFilter<"COMIDA"> | number
    nombre?: StringFilter<"COMIDA"> | string
    descripcion?: StringNullableFilter<"COMIDA"> | string | null
    CHAROLA_COMIDA?: CHAROLA_COMIDAListRelationFilter
  }

  export type COMIDAOrderByWithRelationInput = {
    comidaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    CHAROLA_COMIDA?: CHAROLA_COMIDAOrderByRelationAggregateInput
    _relevance?: COMIDAOrderByRelevanceInput
  }

  export type COMIDAWhereUniqueInput = Prisma.AtLeast<{
    comidaId?: number
    AND?: COMIDAWhereInput | COMIDAWhereInput[]
    OR?: COMIDAWhereInput[]
    NOT?: COMIDAWhereInput | COMIDAWhereInput[]
    nombre?: StringFilter<"COMIDA"> | string
    descripcion?: StringNullableFilter<"COMIDA"> | string | null
    CHAROLA_COMIDA?: CHAROLA_COMIDAListRelationFilter
  }, "comidaId">

  export type COMIDAOrderByWithAggregationInput = {
    comidaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: COMIDACountOrderByAggregateInput
    _avg?: COMIDAAvgOrderByAggregateInput
    _max?: COMIDAMaxOrderByAggregateInput
    _min?: COMIDAMinOrderByAggregateInput
    _sum?: COMIDASumOrderByAggregateInput
  }

  export type COMIDAScalarWhereWithAggregatesInput = {
    AND?: COMIDAScalarWhereWithAggregatesInput | COMIDAScalarWhereWithAggregatesInput[]
    OR?: COMIDAScalarWhereWithAggregatesInput[]
    NOT?: COMIDAScalarWhereWithAggregatesInput | COMIDAScalarWhereWithAggregatesInput[]
    comidaId?: IntWithAggregatesFilter<"COMIDA"> | number
    nombre?: StringWithAggregatesFilter<"COMIDA"> | string
    descripcion?: StringNullableWithAggregatesFilter<"COMIDA"> | string | null
  }

  export type FRASWhereInput = {
    AND?: FRASWhereInput | FRASWhereInput[]
    OR?: FRASWhereInput[]
    NOT?: FRASWhereInput | FRASWhereInput[]
    frasId?: IntFilter<"FRAS"> | number
    gramosGenerados?: FloatFilter<"FRAS"> | number
    charolaId?: IntNullableFilter<"FRAS"> | number | null
    CHAROLA_FRAS?: CHAROLA_FRASListRelationFilter
    CHAROLA?: XOR<CHAROLANullableScalarRelationFilter, CHAROLAWhereInput> | null
  }

  export type FRASOrderByWithRelationInput = {
    frasId?: SortOrder
    gramosGenerados?: SortOrder
    charolaId?: SortOrderInput | SortOrder
    CHAROLA_FRAS?: CHAROLA_FRASOrderByRelationAggregateInput
    CHAROLA?: CHAROLAOrderByWithRelationInput
  }

  export type FRASWhereUniqueInput = Prisma.AtLeast<{
    frasId?: number
    AND?: FRASWhereInput | FRASWhereInput[]
    OR?: FRASWhereInput[]
    NOT?: FRASWhereInput | FRASWhereInput[]
    gramosGenerados?: FloatFilter<"FRAS"> | number
    charolaId?: IntNullableFilter<"FRAS"> | number | null
    CHAROLA_FRAS?: CHAROLA_FRASListRelationFilter
    CHAROLA?: XOR<CHAROLANullableScalarRelationFilter, CHAROLAWhereInput> | null
  }, "frasId">

  export type FRASOrderByWithAggregationInput = {
    frasId?: SortOrder
    gramosGenerados?: SortOrder
    charolaId?: SortOrderInput | SortOrder
    _count?: FRASCountOrderByAggregateInput
    _avg?: FRASAvgOrderByAggregateInput
    _max?: FRASMaxOrderByAggregateInput
    _min?: FRASMinOrderByAggregateInput
    _sum?: FRASSumOrderByAggregateInput
  }

  export type FRASScalarWhereWithAggregatesInput = {
    AND?: FRASScalarWhereWithAggregatesInput | FRASScalarWhereWithAggregatesInput[]
    OR?: FRASScalarWhereWithAggregatesInput[]
    NOT?: FRASScalarWhereWithAggregatesInput | FRASScalarWhereWithAggregatesInput[]
    frasId?: IntWithAggregatesFilter<"FRAS"> | number
    gramosGenerados?: FloatWithAggregatesFilter<"FRAS"> | number
    charolaId?: IntNullableWithAggregatesFilter<"FRAS"> | number | null
  }

  export type HIDRATACIONWhereInput = {
    AND?: HIDRATACIONWhereInput | HIDRATACIONWhereInput[]
    OR?: HIDRATACIONWhereInput[]
    NOT?: HIDRATACIONWhereInput | HIDRATACIONWhereInput[]
    hidratacionId?: IntFilter<"HIDRATACION"> | number
    nombre?: StringNullableFilter<"HIDRATACION"> | string | null
    descripcion?: StringNullableFilter<"HIDRATACION"> | string | null
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONListRelationFilter
  }

  export type HIDRATACIONOrderByWithRelationInput = {
    hidratacionId?: SortOrder
    nombre?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONOrderByRelationAggregateInput
    _relevance?: HIDRATACIONOrderByRelevanceInput
  }

  export type HIDRATACIONWhereUniqueInput = Prisma.AtLeast<{
    hidratacionId?: number
    AND?: HIDRATACIONWhereInput | HIDRATACIONWhereInput[]
    OR?: HIDRATACIONWhereInput[]
    NOT?: HIDRATACIONWhereInput | HIDRATACIONWhereInput[]
    nombre?: StringNullableFilter<"HIDRATACION"> | string | null
    descripcion?: StringNullableFilter<"HIDRATACION"> | string | null
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONListRelationFilter
  }, "hidratacionId">

  export type HIDRATACIONOrderByWithAggregationInput = {
    hidratacionId?: SortOrder
    nombre?: SortOrderInput | SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: HIDRATACIONCountOrderByAggregateInput
    _avg?: HIDRATACIONAvgOrderByAggregateInput
    _max?: HIDRATACIONMaxOrderByAggregateInput
    _min?: HIDRATACIONMinOrderByAggregateInput
    _sum?: HIDRATACIONSumOrderByAggregateInput
  }

  export type HIDRATACIONScalarWhereWithAggregatesInput = {
    AND?: HIDRATACIONScalarWhereWithAggregatesInput | HIDRATACIONScalarWhereWithAggregatesInput[]
    OR?: HIDRATACIONScalarWhereWithAggregatesInput[]
    NOT?: HIDRATACIONScalarWhereWithAggregatesInput | HIDRATACIONScalarWhereWithAggregatesInput[]
    hidratacionId?: IntWithAggregatesFilter<"HIDRATACION"> | number
    nombre?: StringNullableWithAggregatesFilter<"HIDRATACION"> | string | null
    descripcion?: StringNullableWithAggregatesFilter<"HIDRATACION"> | string | null
  }

  export type USUARIOWhereInput = {
    AND?: USUARIOWhereInput | USUARIOWhereInput[]
    OR?: USUARIOWhereInput[]
    NOT?: USUARIOWhereInput | USUARIOWhereInput[]
    usuarioId?: IntFilter<"USUARIO"> | number
    user?: StringFilter<"USUARIO"> | string
    contrasena?: StringFilter<"USUARIO"> | string
    nombre?: StringFilter<"USUARIO"> | string
    apellido_m?: StringNullableFilter<"USUARIO"> | string | null
    apellido_p?: StringNullableFilter<"USUARIO"> | string | null
    ADMINISTRADOR?: ADMINISTRADORListRelationFilter
    USUARIO_CHAROLA?: USUARIO_CHAROLAListRelationFilter
  }

  export type USUARIOOrderByWithRelationInput = {
    usuarioId?: SortOrder
    user?: SortOrder
    contrasena?: SortOrder
    nombre?: SortOrder
    apellido_m?: SortOrderInput | SortOrder
    apellido_p?: SortOrderInput | SortOrder
    ADMINISTRADOR?: ADMINISTRADOROrderByRelationAggregateInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAOrderByRelationAggregateInput
    _relevance?: USUARIOOrderByRelevanceInput
  }

  export type USUARIOWhereUniqueInput = Prisma.AtLeast<{
    usuarioId?: number
    AND?: USUARIOWhereInput | USUARIOWhereInput[]
    OR?: USUARIOWhereInput[]
    NOT?: USUARIOWhereInput | USUARIOWhereInput[]
    user?: StringFilter<"USUARIO"> | string
    contrasena?: StringFilter<"USUARIO"> | string
    nombre?: StringFilter<"USUARIO"> | string
    apellido_m?: StringNullableFilter<"USUARIO"> | string | null
    apellido_p?: StringNullableFilter<"USUARIO"> | string | null
    ADMINISTRADOR?: ADMINISTRADORListRelationFilter
    USUARIO_CHAROLA?: USUARIO_CHAROLAListRelationFilter
  }, "usuarioId">

  export type USUARIOOrderByWithAggregationInput = {
    usuarioId?: SortOrder
    user?: SortOrder
    contrasena?: SortOrder
    nombre?: SortOrder
    apellido_m?: SortOrderInput | SortOrder
    apellido_p?: SortOrderInput | SortOrder
    _count?: USUARIOCountOrderByAggregateInput
    _avg?: USUARIOAvgOrderByAggregateInput
    _max?: USUARIOMaxOrderByAggregateInput
    _min?: USUARIOMinOrderByAggregateInput
    _sum?: USUARIOSumOrderByAggregateInput
  }

  export type USUARIOScalarWhereWithAggregatesInput = {
    AND?: USUARIOScalarWhereWithAggregatesInput | USUARIOScalarWhereWithAggregatesInput[]
    OR?: USUARIOScalarWhereWithAggregatesInput[]
    NOT?: USUARIOScalarWhereWithAggregatesInput | USUARIOScalarWhereWithAggregatesInput[]
    usuarioId?: IntWithAggregatesFilter<"USUARIO"> | number
    user?: StringWithAggregatesFilter<"USUARIO"> | string
    contrasena?: StringWithAggregatesFilter<"USUARIO"> | string
    nombre?: StringWithAggregatesFilter<"USUARIO"> | string
    apellido_m?: StringNullableWithAggregatesFilter<"USUARIO"> | string | null
    apellido_p?: StringNullableWithAggregatesFilter<"USUARIO"> | string | null
  }

  export type USUARIO_CHAROLAWhereInput = {
    AND?: USUARIO_CHAROLAWhereInput | USUARIO_CHAROLAWhereInput[]
    OR?: USUARIO_CHAROLAWhereInput[]
    NOT?: USUARIO_CHAROLAWhereInput | USUARIO_CHAROLAWhereInput[]
    usuarioId?: IntFilter<"USUARIO_CHAROLA"> | number
    charolaId?: IntFilter<"USUARIO_CHAROLA"> | number
    USUARIO?: XOR<USUARIOScalarRelationFilter, USUARIOWhereInput>
    CHAROLA?: XOR<CHAROLAScalarRelationFilter, CHAROLAWhereInput>
  }

  export type USUARIO_CHAROLAOrderByWithRelationInput = {
    usuarioId?: SortOrder
    charolaId?: SortOrder
    USUARIO?: USUARIOOrderByWithRelationInput
    CHAROLA?: CHAROLAOrderByWithRelationInput
  }

  export type USUARIO_CHAROLAWhereUniqueInput = Prisma.AtLeast<{
    usuarioId_charolaId?: USUARIO_CHAROLAUsuarioIdCharolaIdCompoundUniqueInput
    AND?: USUARIO_CHAROLAWhereInput | USUARIO_CHAROLAWhereInput[]
    OR?: USUARIO_CHAROLAWhereInput[]
    NOT?: USUARIO_CHAROLAWhereInput | USUARIO_CHAROLAWhereInput[]
    usuarioId?: IntFilter<"USUARIO_CHAROLA"> | number
    charolaId?: IntFilter<"USUARIO_CHAROLA"> | number
    USUARIO?: XOR<USUARIOScalarRelationFilter, USUARIOWhereInput>
    CHAROLA?: XOR<CHAROLAScalarRelationFilter, CHAROLAWhereInput>
  }, "usuarioId_charolaId">

  export type USUARIO_CHAROLAOrderByWithAggregationInput = {
    usuarioId?: SortOrder
    charolaId?: SortOrder
    _count?: USUARIO_CHAROLACountOrderByAggregateInput
    _avg?: USUARIO_CHAROLAAvgOrderByAggregateInput
    _max?: USUARIO_CHAROLAMaxOrderByAggregateInput
    _min?: USUARIO_CHAROLAMinOrderByAggregateInput
    _sum?: USUARIO_CHAROLASumOrderByAggregateInput
  }

  export type USUARIO_CHAROLAScalarWhereWithAggregatesInput = {
    AND?: USUARIO_CHAROLAScalarWhereWithAggregatesInput | USUARIO_CHAROLAScalarWhereWithAggregatesInput[]
    OR?: USUARIO_CHAROLAScalarWhereWithAggregatesInput[]
    NOT?: USUARIO_CHAROLAScalarWhereWithAggregatesInput | USUARIO_CHAROLAScalarWhereWithAggregatesInput[]
    usuarioId?: IntWithAggregatesFilter<"USUARIO_CHAROLA"> | number
    charolaId?: IntWithAggregatesFilter<"USUARIO_CHAROLA"> | number
  }

  export type CHAROLA_FRASWhereInput = {
    AND?: CHAROLA_FRASWhereInput | CHAROLA_FRASWhereInput[]
    OR?: CHAROLA_FRASWhereInput[]
    NOT?: CHAROLA_FRASWhereInput | CHAROLA_FRASWhereInput[]
    charolaId?: IntFilter<"CHAROLA_FRAS"> | number
    frasId?: IntFilter<"CHAROLA_FRAS"> | number
    CHAROLA?: XOR<CHAROLAScalarRelationFilter, CHAROLAWhereInput>
    FRAS?: XOR<FRASScalarRelationFilter, FRASWhereInput>
  }

  export type CHAROLA_FRASOrderByWithRelationInput = {
    charolaId?: SortOrder
    frasId?: SortOrder
    CHAROLA?: CHAROLAOrderByWithRelationInput
    FRAS?: FRASOrderByWithRelationInput
  }

  export type CHAROLA_FRASWhereUniqueInput = Prisma.AtLeast<{
    charolaId_frasId?: CHAROLA_FRASCharolaIdFrasIdCompoundUniqueInput
    AND?: CHAROLA_FRASWhereInput | CHAROLA_FRASWhereInput[]
    OR?: CHAROLA_FRASWhereInput[]
    NOT?: CHAROLA_FRASWhereInput | CHAROLA_FRASWhereInput[]
    charolaId?: IntFilter<"CHAROLA_FRAS"> | number
    frasId?: IntFilter<"CHAROLA_FRAS"> | number
    CHAROLA?: XOR<CHAROLAScalarRelationFilter, CHAROLAWhereInput>
    FRAS?: XOR<FRASScalarRelationFilter, FRASWhereInput>
  }, "charolaId_frasId">

  export type CHAROLA_FRASOrderByWithAggregationInput = {
    charolaId?: SortOrder
    frasId?: SortOrder
    _count?: CHAROLA_FRASCountOrderByAggregateInput
    _avg?: CHAROLA_FRASAvgOrderByAggregateInput
    _max?: CHAROLA_FRASMaxOrderByAggregateInput
    _min?: CHAROLA_FRASMinOrderByAggregateInput
    _sum?: CHAROLA_FRASSumOrderByAggregateInput
  }

  export type CHAROLA_FRASScalarWhereWithAggregatesInput = {
    AND?: CHAROLA_FRASScalarWhereWithAggregatesInput | CHAROLA_FRASScalarWhereWithAggregatesInput[]
    OR?: CHAROLA_FRASScalarWhereWithAggregatesInput[]
    NOT?: CHAROLA_FRASScalarWhereWithAggregatesInput | CHAROLA_FRASScalarWhereWithAggregatesInput[]
    charolaId?: IntWithAggregatesFilter<"CHAROLA_FRAS"> | number
    frasId?: IntWithAggregatesFilter<"CHAROLA_FRAS"> | number
  }

  export type CHAROLA_PUPAWhereInput = {
    AND?: CHAROLA_PUPAWhereInput | CHAROLA_PUPAWhereInput[]
    OR?: CHAROLA_PUPAWhereInput[]
    NOT?: CHAROLA_PUPAWhereInput | CHAROLA_PUPAWhereInput[]
    charolaId?: IntFilter<"CHAROLA_PUPA"> | number
    pupaId?: IntFilter<"CHAROLA_PUPA"> | number
    CHAROLA?: XOR<CHAROLAScalarRelationFilter, CHAROLAWhereInput>
    PUPA?: XOR<PUPAScalarRelationFilter, PUPAWhereInput>
  }

  export type CHAROLA_PUPAOrderByWithRelationInput = {
    charolaId?: SortOrder
    pupaId?: SortOrder
    CHAROLA?: CHAROLAOrderByWithRelationInput
    PUPA?: PUPAOrderByWithRelationInput
  }

  export type CHAROLA_PUPAWhereUniqueInput = Prisma.AtLeast<{
    charolaId_pupaId?: CHAROLA_PUPACharolaIdPupaIdCompoundUniqueInput
    AND?: CHAROLA_PUPAWhereInput | CHAROLA_PUPAWhereInput[]
    OR?: CHAROLA_PUPAWhereInput[]
    NOT?: CHAROLA_PUPAWhereInput | CHAROLA_PUPAWhereInput[]
    charolaId?: IntFilter<"CHAROLA_PUPA"> | number
    pupaId?: IntFilter<"CHAROLA_PUPA"> | number
    CHAROLA?: XOR<CHAROLAScalarRelationFilter, CHAROLAWhereInput>
    PUPA?: XOR<PUPAScalarRelationFilter, PUPAWhereInput>
  }, "charolaId_pupaId">

  export type CHAROLA_PUPAOrderByWithAggregationInput = {
    charolaId?: SortOrder
    pupaId?: SortOrder
    _count?: CHAROLA_PUPACountOrderByAggregateInput
    _avg?: CHAROLA_PUPAAvgOrderByAggregateInput
    _max?: CHAROLA_PUPAMaxOrderByAggregateInput
    _min?: CHAROLA_PUPAMinOrderByAggregateInput
    _sum?: CHAROLA_PUPASumOrderByAggregateInput
  }

  export type CHAROLA_PUPAScalarWhereWithAggregatesInput = {
    AND?: CHAROLA_PUPAScalarWhereWithAggregatesInput | CHAROLA_PUPAScalarWhereWithAggregatesInput[]
    OR?: CHAROLA_PUPAScalarWhereWithAggregatesInput[]
    NOT?: CHAROLA_PUPAScalarWhereWithAggregatesInput | CHAROLA_PUPAScalarWhereWithAggregatesInput[]
    charolaId?: IntWithAggregatesFilter<"CHAROLA_PUPA"> | number
    pupaId?: IntWithAggregatesFilter<"CHAROLA_PUPA"> | number
  }

  export type PUPAWhereInput = {
    AND?: PUPAWhereInput | PUPAWhereInput[]
    OR?: PUPAWhereInput[]
    NOT?: PUPAWhereInput | PUPAWhereInput[]
    pupaId?: IntFilter<"PUPA"> | number
    fechaRegistro?: DateTimeNullableFilter<"PUPA"> | Date | string | null
    cantidadObtenida?: IntNullableFilter<"PUPA"> | number | null
    CHAROLA_PUPA?: CHAROLA_PUPAListRelationFilter
  }

  export type PUPAOrderByWithRelationInput = {
    pupaId?: SortOrder
    fechaRegistro?: SortOrderInput | SortOrder
    cantidadObtenida?: SortOrderInput | SortOrder
    CHAROLA_PUPA?: CHAROLA_PUPAOrderByRelationAggregateInput
  }

  export type PUPAWhereUniqueInput = Prisma.AtLeast<{
    pupaId?: number
    AND?: PUPAWhereInput | PUPAWhereInput[]
    OR?: PUPAWhereInput[]
    NOT?: PUPAWhereInput | PUPAWhereInput[]
    fechaRegistro?: DateTimeNullableFilter<"PUPA"> | Date | string | null
    cantidadObtenida?: IntNullableFilter<"PUPA"> | number | null
    CHAROLA_PUPA?: CHAROLA_PUPAListRelationFilter
  }, "pupaId">

  export type PUPAOrderByWithAggregationInput = {
    pupaId?: SortOrder
    fechaRegistro?: SortOrderInput | SortOrder
    cantidadObtenida?: SortOrderInput | SortOrder
    _count?: PUPACountOrderByAggregateInput
    _avg?: PUPAAvgOrderByAggregateInput
    _max?: PUPAMaxOrderByAggregateInput
    _min?: PUPAMinOrderByAggregateInput
    _sum?: PUPASumOrderByAggregateInput
  }

  export type PUPAScalarWhereWithAggregatesInput = {
    AND?: PUPAScalarWhereWithAggregatesInput | PUPAScalarWhereWithAggregatesInput[]
    OR?: PUPAScalarWhereWithAggregatesInput[]
    NOT?: PUPAScalarWhereWithAggregatesInput | PUPAScalarWhereWithAggregatesInput[]
    pupaId?: IntWithAggregatesFilter<"PUPA"> | number
    fechaRegistro?: DateTimeNullableWithAggregatesFilter<"PUPA"> | Date | string | null
    cantidadObtenida?: IntNullableWithAggregatesFilter<"PUPA"> | number | null
  }

  export type ADMINISTRADORCreateInput = {
    USUARIO?: USUARIOCreateNestedOneWithoutADMINISTRADORInput
  }

  export type ADMINISTRADORUncheckedCreateInput = {
    adminId?: number
    usuarioId?: number | null
  }

  export type ADMINISTRADORUpdateInput = {
    USUARIO?: USUARIOUpdateOneWithoutADMINISTRADORNestedInput
  }

  export type ADMINISTRADORUncheckedUpdateInput = {
    adminId?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ADMINISTRADORCreateManyInput = {
    adminId?: number
    usuarioId?: number | null
  }

  export type ADMINISTRADORUpdateManyMutationInput = {

  }

  export type ADMINISTRADORUncheckedUpdateManyInput = {
    adminId?: IntFieldUpdateOperationsInput | number
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CHAROLACreateInput = {
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDACreateNestedManyWithoutCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPACreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLACreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLAUncheckedCreateInput = {
    charolaId?: number
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedCreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedCreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLAUpdateInput = {
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUpdateManyWithoutCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUpdateManyWithoutCHAROLANestedInput
  }

  export type CHAROLAUncheckedUpdateInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedUpdateManyWithoutCHAROLANestedInput
  }

  export type CHAROLACreateManyInput = {
    charolaId?: number
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
  }

  export type CHAROLAUpdateManyMutationInput = {
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CHAROLAUncheckedUpdateManyInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type CHAROLA_CHAROLACreateInput = {
    CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA: CHAROLACreateNestedOneWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA: CHAROLACreateNestedOneWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
  }

  export type CHAROLA_CHAROLAUncheckedCreateInput = {
    charolaHija: number
    charolaAncestro: number
  }

  export type CHAROLA_CHAROLAUpdateInput = {
    CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLAUpdateOneRequiredWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLAUpdateOneRequiredWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
  }

  export type CHAROLA_CHAROLAUncheckedUpdateInput = {
    charolaHija?: IntFieldUpdateOperationsInput | number
    charolaAncestro?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_CHAROLACreateManyInput = {
    charolaHija: number
    charolaAncestro: number
  }

  export type CHAROLA_CHAROLAUpdateManyMutationInput = {

  }

  export type CHAROLA_CHAROLAUncheckedUpdateManyInput = {
    charolaHija?: IntFieldUpdateOperationsInput | number
    charolaAncestro?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_COMIDACreateInput = {
    cantidadOtorgada: number
    CHAROLA?: CHAROLACreateNestedOneWithoutCHAROLA_COMIDAInput
    COMIDA?: COMIDACreateNestedOneWithoutCHAROLA_COMIDAInput
  }

  export type CHAROLA_COMIDAUncheckedCreateInput = {
    id?: number
    charolaId?: number | null
    comidaId?: number | null
    cantidadOtorgada: number
  }

  export type CHAROLA_COMIDAUpdateInput = {
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
    CHAROLA?: CHAROLAUpdateOneWithoutCHAROLA_COMIDANestedInput
    COMIDA?: COMIDAUpdateOneWithoutCHAROLA_COMIDANestedInput
  }

  export type CHAROLA_COMIDAUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    charolaId?: NullableIntFieldUpdateOperationsInput | number | null
    comidaId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
  }

  export type CHAROLA_COMIDACreateManyInput = {
    id?: number
    charolaId?: number | null
    comidaId?: number | null
    cantidadOtorgada: number
  }

  export type CHAROLA_COMIDAUpdateManyMutationInput = {
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
  }

  export type CHAROLA_COMIDAUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    charolaId?: NullableIntFieldUpdateOperationsInput | number | null
    comidaId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
  }

  export type CHAROLA_HIDRATACIONCreateInput = {
    cantidadOtorgada: number
    CHAROLA?: CHAROLACreateNestedOneWithoutCHAROLA_HIDRATACIONInput
    HIDRATACION?: HIDRATACIONCreateNestedOneWithoutCHAROLA_HIDRATACIONInput
  }

  export type CHAROLA_HIDRATACIONUncheckedCreateInput = {
    id?: number
    charolaId?: number | null
    hidratacionId?: number | null
    cantidadOtorgada: number
  }

  export type CHAROLA_HIDRATACIONUpdateInput = {
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
    CHAROLA?: CHAROLAUpdateOneWithoutCHAROLA_HIDRATACIONNestedInput
    HIDRATACION?: HIDRATACIONUpdateOneWithoutCHAROLA_HIDRATACIONNestedInput
  }

  export type CHAROLA_HIDRATACIONUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    charolaId?: NullableIntFieldUpdateOperationsInput | number | null
    hidratacionId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
  }

  export type CHAROLA_HIDRATACIONCreateManyInput = {
    id?: number
    charolaId?: number | null
    hidratacionId?: number | null
    cantidadOtorgada: number
  }

  export type CHAROLA_HIDRATACIONUpdateManyMutationInput = {
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
  }

  export type CHAROLA_HIDRATACIONUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    charolaId?: NullableIntFieldUpdateOperationsInput | number | null
    hidratacionId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
  }

  export type COMIDACreateInput = {
    nombre: string
    descripcion?: string | null
    CHAROLA_COMIDA?: CHAROLA_COMIDACreateNestedManyWithoutCOMIDAInput
  }

  export type COMIDAUncheckedCreateInput = {
    comidaId?: number
    nombre: string
    descripcion?: string | null
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedCreateNestedManyWithoutCOMIDAInput
  }

  export type COMIDAUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    CHAROLA_COMIDA?: CHAROLA_COMIDAUpdateManyWithoutCOMIDANestedInput
  }

  export type COMIDAUncheckedUpdateInput = {
    comidaId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedUpdateManyWithoutCOMIDANestedInput
  }

  export type COMIDACreateManyInput = {
    comidaId?: number
    nombre: string
    descripcion?: string | null
  }

  export type COMIDAUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type COMIDAUncheckedUpdateManyInput = {
    comidaId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FRASCreateInput = {
    gramosGenerados: number
    CHAROLA_FRAS?: CHAROLA_FRASCreateNestedManyWithoutFRASInput
    CHAROLA?: CHAROLACreateNestedOneWithoutFRASInput
  }

  export type FRASUncheckedCreateInput = {
    frasId?: number
    gramosGenerados: number
    charolaId?: number | null
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedCreateNestedManyWithoutFRASInput
  }

  export type FRASUpdateInput = {
    gramosGenerados?: FloatFieldUpdateOperationsInput | number
    CHAROLA_FRAS?: CHAROLA_FRASUpdateManyWithoutFRASNestedInput
    CHAROLA?: CHAROLAUpdateOneWithoutFRASNestedInput
  }

  export type FRASUncheckedUpdateInput = {
    frasId?: IntFieldUpdateOperationsInput | number
    gramosGenerados?: FloatFieldUpdateOperationsInput | number
    charolaId?: NullableIntFieldUpdateOperationsInput | number | null
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedUpdateManyWithoutFRASNestedInput
  }

  export type FRASCreateManyInput = {
    frasId?: number
    gramosGenerados: number
    charolaId?: number | null
  }

  export type FRASUpdateManyMutationInput = {
    gramosGenerados?: FloatFieldUpdateOperationsInput | number
  }

  export type FRASUncheckedUpdateManyInput = {
    frasId?: IntFieldUpdateOperationsInput | number
    gramosGenerados?: FloatFieldUpdateOperationsInput | number
    charolaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type HIDRATACIONCreateInput = {
    hidratacionId: number
    nombre?: string | null
    descripcion?: string | null
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONCreateNestedManyWithoutHIDRATACIONInput
  }

  export type HIDRATACIONUncheckedCreateInput = {
    hidratacionId: number
    nombre?: string | null
    descripcion?: string | null
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedCreateNestedManyWithoutHIDRATACIONInput
  }

  export type HIDRATACIONUpdateInput = {
    hidratacionId?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUpdateManyWithoutHIDRATACIONNestedInput
  }

  export type HIDRATACIONUncheckedUpdateInput = {
    hidratacionId?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutHIDRATACIONNestedInput
  }

  export type HIDRATACIONCreateManyInput = {
    hidratacionId: number
    nombre?: string | null
    descripcion?: string | null
  }

  export type HIDRATACIONUpdateManyMutationInput = {
    hidratacionId?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HIDRATACIONUncheckedUpdateManyInput = {
    hidratacionId?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type USUARIOCreateInput = {
    user: string
    contrasena: string
    nombre: string
    apellido_m?: string | null
    apellido_p?: string | null
    ADMINISTRADOR?: ADMINISTRADORCreateNestedManyWithoutUSUARIOInput
    USUARIO_CHAROLA?: USUARIO_CHAROLACreateNestedManyWithoutUSUARIOInput
  }

  export type USUARIOUncheckedCreateInput = {
    usuarioId?: number
    user: string
    contrasena: string
    nombre: string
    apellido_m?: string | null
    apellido_p?: string | null
    ADMINISTRADOR?: ADMINISTRADORUncheckedCreateNestedManyWithoutUSUARIOInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedCreateNestedManyWithoutUSUARIOInput
  }

  export type USUARIOUpdateInput = {
    user?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_m?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_p?: NullableStringFieldUpdateOperationsInput | string | null
    ADMINISTRADOR?: ADMINISTRADORUpdateManyWithoutUSUARIONestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUpdateManyWithoutUSUARIONestedInput
  }

  export type USUARIOUncheckedUpdateInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_m?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_p?: NullableStringFieldUpdateOperationsInput | string | null
    ADMINISTRADOR?: ADMINISTRADORUncheckedUpdateManyWithoutUSUARIONestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedUpdateManyWithoutUSUARIONestedInput
  }

  export type USUARIOCreateManyInput = {
    usuarioId?: number
    user: string
    contrasena: string
    nombre: string
    apellido_m?: string | null
    apellido_p?: string | null
  }

  export type USUARIOUpdateManyMutationInput = {
    user?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_m?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_p?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type USUARIOUncheckedUpdateManyInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_m?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_p?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type USUARIO_CHAROLACreateInput = {
    USUARIO: USUARIOCreateNestedOneWithoutUSUARIO_CHAROLAInput
    CHAROLA: CHAROLACreateNestedOneWithoutUSUARIO_CHAROLAInput
  }

  export type USUARIO_CHAROLAUncheckedCreateInput = {
    usuarioId: number
    charolaId: number
  }

  export type USUARIO_CHAROLAUpdateInput = {
    USUARIO?: USUARIOUpdateOneRequiredWithoutUSUARIO_CHAROLANestedInput
    CHAROLA?: CHAROLAUpdateOneRequiredWithoutUSUARIO_CHAROLANestedInput
  }

  export type USUARIO_CHAROLAUncheckedUpdateInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    charolaId?: IntFieldUpdateOperationsInput | number
  }

  export type USUARIO_CHAROLACreateManyInput = {
    usuarioId: number
    charolaId: number
  }

  export type USUARIO_CHAROLAUpdateManyMutationInput = {

  }

  export type USUARIO_CHAROLAUncheckedUpdateManyInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    charolaId?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_FRASCreateInput = {
    CHAROLA: CHAROLACreateNestedOneWithoutCHAROLA_FRASInput
    FRAS: FRASCreateNestedOneWithoutCHAROLA_FRASInput
  }

  export type CHAROLA_FRASUncheckedCreateInput = {
    charolaId: number
    frasId: number
  }

  export type CHAROLA_FRASUpdateInput = {
    CHAROLA?: CHAROLAUpdateOneRequiredWithoutCHAROLA_FRASNestedInput
    FRAS?: FRASUpdateOneRequiredWithoutCHAROLA_FRASNestedInput
  }

  export type CHAROLA_FRASUncheckedUpdateInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
    frasId?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_FRASCreateManyInput = {
    charolaId: number
    frasId: number
  }

  export type CHAROLA_FRASUpdateManyMutationInput = {

  }

  export type CHAROLA_FRASUncheckedUpdateManyInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
    frasId?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_PUPACreateInput = {
    CHAROLA: CHAROLACreateNestedOneWithoutCHAROLA_PUPAInput
    PUPA: PUPACreateNestedOneWithoutCHAROLA_PUPAInput
  }

  export type CHAROLA_PUPAUncheckedCreateInput = {
    charolaId: number
    pupaId: number
  }

  export type CHAROLA_PUPAUpdateInput = {
    CHAROLA?: CHAROLAUpdateOneRequiredWithoutCHAROLA_PUPANestedInput
    PUPA?: PUPAUpdateOneRequiredWithoutCHAROLA_PUPANestedInput
  }

  export type CHAROLA_PUPAUncheckedUpdateInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
    pupaId?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_PUPACreateManyInput = {
    charolaId: number
    pupaId: number
  }

  export type CHAROLA_PUPAUpdateManyMutationInput = {

  }

  export type CHAROLA_PUPAUncheckedUpdateManyInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
    pupaId?: IntFieldUpdateOperationsInput | number
  }

  export type PUPACreateInput = {
    fechaRegistro?: Date | string | null
    cantidadObtenida?: number | null
    CHAROLA_PUPA?: CHAROLA_PUPACreateNestedManyWithoutPUPAInput
  }

  export type PUPAUncheckedCreateInput = {
    pupaId?: number
    fechaRegistro?: Date | string | null
    cantidadObtenida?: number | null
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedCreateNestedManyWithoutPUPAInput
  }

  export type PUPAUpdateInput = {
    fechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidadObtenida?: NullableIntFieldUpdateOperationsInput | number | null
    CHAROLA_PUPA?: CHAROLA_PUPAUpdateManyWithoutPUPANestedInput
  }

  export type PUPAUncheckedUpdateInput = {
    pupaId?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidadObtenida?: NullableIntFieldUpdateOperationsInput | number | null
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedUpdateManyWithoutPUPANestedInput
  }

  export type PUPACreateManyInput = {
    pupaId?: number
    fechaRegistro?: Date | string | null
    cantidadObtenida?: number | null
  }

  export type PUPAUpdateManyMutationInput = {
    fechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidadObtenida?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PUPAUncheckedUpdateManyInput = {
    pupaId?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidadObtenida?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type USUARIONullableScalarRelationFilter = {
    is?: USUARIOWhereInput | null
    isNot?: USUARIOWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ADMINISTRADORCountOrderByAggregateInput = {
    adminId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ADMINISTRADORAvgOrderByAggregateInput = {
    adminId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ADMINISTRADORMaxOrderByAggregateInput = {
    adminId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ADMINISTRADORMinOrderByAggregateInput = {
    adminId?: SortOrder
    usuarioId?: SortOrder
  }

  export type ADMINISTRADORSumOrderByAggregateInput = {
    adminId?: SortOrder
    usuarioId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CHAROLA_CHAROLAListRelationFilter = {
    every?: CHAROLA_CHAROLAWhereInput
    some?: CHAROLA_CHAROLAWhereInput
    none?: CHAROLA_CHAROLAWhereInput
  }

  export type CHAROLA_COMIDAListRelationFilter = {
    every?: CHAROLA_COMIDAWhereInput
    some?: CHAROLA_COMIDAWhereInput
    none?: CHAROLA_COMIDAWhereInput
  }

  export type CHAROLA_FRASListRelationFilter = {
    every?: CHAROLA_FRASWhereInput
    some?: CHAROLA_FRASWhereInput
    none?: CHAROLA_FRASWhereInput
  }

  export type CHAROLA_HIDRATACIONListRelationFilter = {
    every?: CHAROLA_HIDRATACIONWhereInput
    some?: CHAROLA_HIDRATACIONWhereInput
    none?: CHAROLA_HIDRATACIONWhereInput
  }

  export type CHAROLA_PUPAListRelationFilter = {
    every?: CHAROLA_PUPAWhereInput
    some?: CHAROLA_PUPAWhereInput
    none?: CHAROLA_PUPAWhereInput
  }

  export type FRASListRelationFilter = {
    every?: FRASWhereInput
    some?: FRASWhereInput
    none?: FRASWhereInput
  }

  export type USUARIO_CHAROLAListRelationFilter = {
    every?: USUARIO_CHAROLAWhereInput
    some?: USUARIO_CHAROLAWhereInput
    none?: USUARIO_CHAROLAWhereInput
  }

  export type CHAROLA_CHAROLAOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CHAROLA_COMIDAOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CHAROLA_FRASOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CHAROLA_HIDRATACIONOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CHAROLA_PUPAOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FRASOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type USUARIO_CHAROLAOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CHAROLAOrderByRelevanceInput = {
    fields: CHAROLAOrderByRelevanceFieldEnum | CHAROLAOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CHAROLACountOrderByAggregateInput = {
    charolaId?: SortOrder
    nombreCharola?: SortOrder
    comidaCiclo?: SortOrder
    hidratacionCiclo?: SortOrder
    fechaActualizacion?: SortOrder
    estado?: SortOrder
    densidadLarva?: SortOrder
    fechaCreacion?: SortOrder
    pesoCharola?: SortOrder
  }

  export type CHAROLAAvgOrderByAggregateInput = {
    charolaId?: SortOrder
    comidaCiclo?: SortOrder
    hidratacionCiclo?: SortOrder
    densidadLarva?: SortOrder
    pesoCharola?: SortOrder
  }

  export type CHAROLAMaxOrderByAggregateInput = {
    charolaId?: SortOrder
    nombreCharola?: SortOrder
    comidaCiclo?: SortOrder
    hidratacionCiclo?: SortOrder
    fechaActualizacion?: SortOrder
    estado?: SortOrder
    densidadLarva?: SortOrder
    fechaCreacion?: SortOrder
    pesoCharola?: SortOrder
  }

  export type CHAROLAMinOrderByAggregateInput = {
    charolaId?: SortOrder
    nombreCharola?: SortOrder
    comidaCiclo?: SortOrder
    hidratacionCiclo?: SortOrder
    fechaActualizacion?: SortOrder
    estado?: SortOrder
    densidadLarva?: SortOrder
    fechaCreacion?: SortOrder
    pesoCharola?: SortOrder
  }

  export type CHAROLASumOrderByAggregateInput = {
    charolaId?: SortOrder
    comidaCiclo?: SortOrder
    hidratacionCiclo?: SortOrder
    densidadLarva?: SortOrder
    pesoCharola?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CHAROLAScalarRelationFilter = {
    is?: CHAROLAWhereInput
    isNot?: CHAROLAWhereInput
  }

  export type CHAROLA_CHAROLACharolaHijaCharolaAncestroCompoundUniqueInput = {
    charolaHija: number
    charolaAncestro: number
  }

  export type CHAROLA_CHAROLACountOrderByAggregateInput = {
    charolaHija?: SortOrder
    charolaAncestro?: SortOrder
  }

  export type CHAROLA_CHAROLAAvgOrderByAggregateInput = {
    charolaHija?: SortOrder
    charolaAncestro?: SortOrder
  }

  export type CHAROLA_CHAROLAMaxOrderByAggregateInput = {
    charolaHija?: SortOrder
    charolaAncestro?: SortOrder
  }

  export type CHAROLA_CHAROLAMinOrderByAggregateInput = {
    charolaHija?: SortOrder
    charolaAncestro?: SortOrder
  }

  export type CHAROLA_CHAROLASumOrderByAggregateInput = {
    charolaHija?: SortOrder
    charolaAncestro?: SortOrder
  }

  export type CHAROLANullableScalarRelationFilter = {
    is?: CHAROLAWhereInput | null
    isNot?: CHAROLAWhereInput | null
  }

  export type COMIDANullableScalarRelationFilter = {
    is?: COMIDAWhereInput | null
    isNot?: COMIDAWhereInput | null
  }

  export type CHAROLA_COMIDACountOrderByAggregateInput = {
    id?: SortOrder
    charolaId?: SortOrder
    comidaId?: SortOrder
    cantidadOtorgada?: SortOrder
  }

  export type CHAROLA_COMIDAAvgOrderByAggregateInput = {
    id?: SortOrder
    charolaId?: SortOrder
    comidaId?: SortOrder
    cantidadOtorgada?: SortOrder
  }

  export type CHAROLA_COMIDAMaxOrderByAggregateInput = {
    id?: SortOrder
    charolaId?: SortOrder
    comidaId?: SortOrder
    cantidadOtorgada?: SortOrder
  }

  export type CHAROLA_COMIDAMinOrderByAggregateInput = {
    id?: SortOrder
    charolaId?: SortOrder
    comidaId?: SortOrder
    cantidadOtorgada?: SortOrder
  }

  export type CHAROLA_COMIDASumOrderByAggregateInput = {
    id?: SortOrder
    charolaId?: SortOrder
    comidaId?: SortOrder
    cantidadOtorgada?: SortOrder
  }

  export type HIDRATACIONNullableScalarRelationFilter = {
    is?: HIDRATACIONWhereInput | null
    isNot?: HIDRATACIONWhereInput | null
  }

  export type CHAROLA_HIDRATACIONCountOrderByAggregateInput = {
    id?: SortOrder
    charolaId?: SortOrder
    hidratacionId?: SortOrder
    cantidadOtorgada?: SortOrder
  }

  export type CHAROLA_HIDRATACIONAvgOrderByAggregateInput = {
    id?: SortOrder
    charolaId?: SortOrder
    hidratacionId?: SortOrder
    cantidadOtorgada?: SortOrder
  }

  export type CHAROLA_HIDRATACIONMaxOrderByAggregateInput = {
    id?: SortOrder
    charolaId?: SortOrder
    hidratacionId?: SortOrder
    cantidadOtorgada?: SortOrder
  }

  export type CHAROLA_HIDRATACIONMinOrderByAggregateInput = {
    id?: SortOrder
    charolaId?: SortOrder
    hidratacionId?: SortOrder
    cantidadOtorgada?: SortOrder
  }

  export type CHAROLA_HIDRATACIONSumOrderByAggregateInput = {
    id?: SortOrder
    charolaId?: SortOrder
    hidratacionId?: SortOrder
    cantidadOtorgada?: SortOrder
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type COMIDAOrderByRelevanceInput = {
    fields: COMIDAOrderByRelevanceFieldEnum | COMIDAOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type COMIDACountOrderByAggregateInput = {
    comidaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type COMIDAAvgOrderByAggregateInput = {
    comidaId?: SortOrder
  }

  export type COMIDAMaxOrderByAggregateInput = {
    comidaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type COMIDAMinOrderByAggregateInput = {
    comidaId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type COMIDASumOrderByAggregateInput = {
    comidaId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type FRASCountOrderByAggregateInput = {
    frasId?: SortOrder
    gramosGenerados?: SortOrder
    charolaId?: SortOrder
  }

  export type FRASAvgOrderByAggregateInput = {
    frasId?: SortOrder
    gramosGenerados?: SortOrder
    charolaId?: SortOrder
  }

  export type FRASMaxOrderByAggregateInput = {
    frasId?: SortOrder
    gramosGenerados?: SortOrder
    charolaId?: SortOrder
  }

  export type FRASMinOrderByAggregateInput = {
    frasId?: SortOrder
    gramosGenerados?: SortOrder
    charolaId?: SortOrder
  }

  export type FRASSumOrderByAggregateInput = {
    frasId?: SortOrder
    gramosGenerados?: SortOrder
    charolaId?: SortOrder
  }

  export type HIDRATACIONOrderByRelevanceInput = {
    fields: HIDRATACIONOrderByRelevanceFieldEnum | HIDRATACIONOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type HIDRATACIONCountOrderByAggregateInput = {
    hidratacionId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type HIDRATACIONAvgOrderByAggregateInput = {
    hidratacionId?: SortOrder
  }

  export type HIDRATACIONMaxOrderByAggregateInput = {
    hidratacionId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type HIDRATACIONMinOrderByAggregateInput = {
    hidratacionId?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type HIDRATACIONSumOrderByAggregateInput = {
    hidratacionId?: SortOrder
  }

  export type ADMINISTRADORListRelationFilter = {
    every?: ADMINISTRADORWhereInput
    some?: ADMINISTRADORWhereInput
    none?: ADMINISTRADORWhereInput
  }

  export type ADMINISTRADOROrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type USUARIOOrderByRelevanceInput = {
    fields: USUARIOOrderByRelevanceFieldEnum | USUARIOOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type USUARIOCountOrderByAggregateInput = {
    usuarioId?: SortOrder
    user?: SortOrder
    contrasena?: SortOrder
    nombre?: SortOrder
    apellido_m?: SortOrder
    apellido_p?: SortOrder
  }

  export type USUARIOAvgOrderByAggregateInput = {
    usuarioId?: SortOrder
  }

  export type USUARIOMaxOrderByAggregateInput = {
    usuarioId?: SortOrder
    user?: SortOrder
    contrasena?: SortOrder
    nombre?: SortOrder
    apellido_m?: SortOrder
    apellido_p?: SortOrder
  }

  export type USUARIOMinOrderByAggregateInput = {
    usuarioId?: SortOrder
    user?: SortOrder
    contrasena?: SortOrder
    nombre?: SortOrder
    apellido_m?: SortOrder
    apellido_p?: SortOrder
  }

  export type USUARIOSumOrderByAggregateInput = {
    usuarioId?: SortOrder
  }

  export type USUARIOScalarRelationFilter = {
    is?: USUARIOWhereInput
    isNot?: USUARIOWhereInput
  }

  export type USUARIO_CHAROLAUsuarioIdCharolaIdCompoundUniqueInput = {
    usuarioId: number
    charolaId: number
  }

  export type USUARIO_CHAROLACountOrderByAggregateInput = {
    usuarioId?: SortOrder
    charolaId?: SortOrder
  }

  export type USUARIO_CHAROLAAvgOrderByAggregateInput = {
    usuarioId?: SortOrder
    charolaId?: SortOrder
  }

  export type USUARIO_CHAROLAMaxOrderByAggregateInput = {
    usuarioId?: SortOrder
    charolaId?: SortOrder
  }

  export type USUARIO_CHAROLAMinOrderByAggregateInput = {
    usuarioId?: SortOrder
    charolaId?: SortOrder
  }

  export type USUARIO_CHAROLASumOrderByAggregateInput = {
    usuarioId?: SortOrder
    charolaId?: SortOrder
  }

  export type FRASScalarRelationFilter = {
    is?: FRASWhereInput
    isNot?: FRASWhereInput
  }

  export type CHAROLA_FRASCharolaIdFrasIdCompoundUniqueInput = {
    charolaId: number
    frasId: number
  }

  export type CHAROLA_FRASCountOrderByAggregateInput = {
    charolaId?: SortOrder
    frasId?: SortOrder
  }

  export type CHAROLA_FRASAvgOrderByAggregateInput = {
    charolaId?: SortOrder
    frasId?: SortOrder
  }

  export type CHAROLA_FRASMaxOrderByAggregateInput = {
    charolaId?: SortOrder
    frasId?: SortOrder
  }

  export type CHAROLA_FRASMinOrderByAggregateInput = {
    charolaId?: SortOrder
    frasId?: SortOrder
  }

  export type CHAROLA_FRASSumOrderByAggregateInput = {
    charolaId?: SortOrder
    frasId?: SortOrder
  }

  export type PUPAScalarRelationFilter = {
    is?: PUPAWhereInput
    isNot?: PUPAWhereInput
  }

  export type CHAROLA_PUPACharolaIdPupaIdCompoundUniqueInput = {
    charolaId: number
    pupaId: number
  }

  export type CHAROLA_PUPACountOrderByAggregateInput = {
    charolaId?: SortOrder
    pupaId?: SortOrder
  }

  export type CHAROLA_PUPAAvgOrderByAggregateInput = {
    charolaId?: SortOrder
    pupaId?: SortOrder
  }

  export type CHAROLA_PUPAMaxOrderByAggregateInput = {
    charolaId?: SortOrder
    pupaId?: SortOrder
  }

  export type CHAROLA_PUPAMinOrderByAggregateInput = {
    charolaId?: SortOrder
    pupaId?: SortOrder
  }

  export type CHAROLA_PUPASumOrderByAggregateInput = {
    charolaId?: SortOrder
    pupaId?: SortOrder
  }

  export type PUPACountOrderByAggregateInput = {
    pupaId?: SortOrder
    fechaRegistro?: SortOrder
    cantidadObtenida?: SortOrder
  }

  export type PUPAAvgOrderByAggregateInput = {
    pupaId?: SortOrder
    cantidadObtenida?: SortOrder
  }

  export type PUPAMaxOrderByAggregateInput = {
    pupaId?: SortOrder
    fechaRegistro?: SortOrder
    cantidadObtenida?: SortOrder
  }

  export type PUPAMinOrderByAggregateInput = {
    pupaId?: SortOrder
    fechaRegistro?: SortOrder
    cantidadObtenida?: SortOrder
  }

  export type PUPASumOrderByAggregateInput = {
    pupaId?: SortOrder
    cantidadObtenida?: SortOrder
  }

  export type USUARIOCreateNestedOneWithoutADMINISTRADORInput = {
    create?: XOR<USUARIOCreateWithoutADMINISTRADORInput, USUARIOUncheckedCreateWithoutADMINISTRADORInput>
    connectOrCreate?: USUARIOCreateOrConnectWithoutADMINISTRADORInput
    connect?: USUARIOWhereUniqueInput
  }

  export type USUARIOUpdateOneWithoutADMINISTRADORNestedInput = {
    create?: XOR<USUARIOCreateWithoutADMINISTRADORInput, USUARIOUncheckedCreateWithoutADMINISTRADORInput>
    connectOrCreate?: USUARIOCreateOrConnectWithoutADMINISTRADORInput
    upsert?: USUARIOUpsertWithoutADMINISTRADORInput
    disconnect?: USUARIOWhereInput | boolean
    delete?: USUARIOWhereInput | boolean
    connect?: USUARIOWhereUniqueInput
    update?: XOR<XOR<USUARIOUpdateToOneWithWhereWithoutADMINISTRADORInput, USUARIOUpdateWithoutADMINISTRADORInput>, USUARIOUncheckedUpdateWithoutADMINISTRADORInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    create?: XOR<CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput> | CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[] | CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    connectOrCreate?: CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput | CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    createMany?: CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInputEnvelope
    connect?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
  }

  export type CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    create?: XOR<CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput> | CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[] | CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    connectOrCreate?: CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput | CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    createMany?: CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInputEnvelope
    connect?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
  }

  export type CHAROLA_COMIDACreateNestedManyWithoutCHAROLAInput = {
    create?: XOR<CHAROLA_COMIDACreateWithoutCHAROLAInput, CHAROLA_COMIDAUncheckedCreateWithoutCHAROLAInput> | CHAROLA_COMIDACreateWithoutCHAROLAInput[] | CHAROLA_COMIDAUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_COMIDACreateOrConnectWithoutCHAROLAInput | CHAROLA_COMIDACreateOrConnectWithoutCHAROLAInput[]
    createMany?: CHAROLA_COMIDACreateManyCHAROLAInputEnvelope
    connect?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
  }

  export type CHAROLA_FRASCreateNestedManyWithoutCHAROLAInput = {
    create?: XOR<CHAROLA_FRASCreateWithoutCHAROLAInput, CHAROLA_FRASUncheckedCreateWithoutCHAROLAInput> | CHAROLA_FRASCreateWithoutCHAROLAInput[] | CHAROLA_FRASUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_FRASCreateOrConnectWithoutCHAROLAInput | CHAROLA_FRASCreateOrConnectWithoutCHAROLAInput[]
    createMany?: CHAROLA_FRASCreateManyCHAROLAInputEnvelope
    connect?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
  }

  export type CHAROLA_HIDRATACIONCreateNestedManyWithoutCHAROLAInput = {
    create?: XOR<CHAROLA_HIDRATACIONCreateWithoutCHAROLAInput, CHAROLA_HIDRATACIONUncheckedCreateWithoutCHAROLAInput> | CHAROLA_HIDRATACIONCreateWithoutCHAROLAInput[] | CHAROLA_HIDRATACIONUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_HIDRATACIONCreateOrConnectWithoutCHAROLAInput | CHAROLA_HIDRATACIONCreateOrConnectWithoutCHAROLAInput[]
    createMany?: CHAROLA_HIDRATACIONCreateManyCHAROLAInputEnvelope
    connect?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
  }

  export type CHAROLA_PUPACreateNestedManyWithoutCHAROLAInput = {
    create?: XOR<CHAROLA_PUPACreateWithoutCHAROLAInput, CHAROLA_PUPAUncheckedCreateWithoutCHAROLAInput> | CHAROLA_PUPACreateWithoutCHAROLAInput[] | CHAROLA_PUPAUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_PUPACreateOrConnectWithoutCHAROLAInput | CHAROLA_PUPACreateOrConnectWithoutCHAROLAInput[]
    createMany?: CHAROLA_PUPACreateManyCHAROLAInputEnvelope
    connect?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
  }

  export type FRASCreateNestedManyWithoutCHAROLAInput = {
    create?: XOR<FRASCreateWithoutCHAROLAInput, FRASUncheckedCreateWithoutCHAROLAInput> | FRASCreateWithoutCHAROLAInput[] | FRASUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: FRASCreateOrConnectWithoutCHAROLAInput | FRASCreateOrConnectWithoutCHAROLAInput[]
    createMany?: FRASCreateManyCHAROLAInputEnvelope
    connect?: FRASWhereUniqueInput | FRASWhereUniqueInput[]
  }

  export type USUARIO_CHAROLACreateNestedManyWithoutCHAROLAInput = {
    create?: XOR<USUARIO_CHAROLACreateWithoutCHAROLAInput, USUARIO_CHAROLAUncheckedCreateWithoutCHAROLAInput> | USUARIO_CHAROLACreateWithoutCHAROLAInput[] | USUARIO_CHAROLAUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: USUARIO_CHAROLACreateOrConnectWithoutCHAROLAInput | USUARIO_CHAROLACreateOrConnectWithoutCHAROLAInput[]
    createMany?: USUARIO_CHAROLACreateManyCHAROLAInputEnvelope
    connect?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
  }

  export type CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    create?: XOR<CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput> | CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[] | CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    connectOrCreate?: CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput | CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    createMany?: CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInputEnvelope
    connect?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
  }

  export type CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    create?: XOR<CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput> | CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[] | CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    connectOrCreate?: CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput | CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    createMany?: CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInputEnvelope
    connect?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
  }

  export type CHAROLA_COMIDAUncheckedCreateNestedManyWithoutCHAROLAInput = {
    create?: XOR<CHAROLA_COMIDACreateWithoutCHAROLAInput, CHAROLA_COMIDAUncheckedCreateWithoutCHAROLAInput> | CHAROLA_COMIDACreateWithoutCHAROLAInput[] | CHAROLA_COMIDAUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_COMIDACreateOrConnectWithoutCHAROLAInput | CHAROLA_COMIDACreateOrConnectWithoutCHAROLAInput[]
    createMany?: CHAROLA_COMIDACreateManyCHAROLAInputEnvelope
    connect?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
  }

  export type CHAROLA_FRASUncheckedCreateNestedManyWithoutCHAROLAInput = {
    create?: XOR<CHAROLA_FRASCreateWithoutCHAROLAInput, CHAROLA_FRASUncheckedCreateWithoutCHAROLAInput> | CHAROLA_FRASCreateWithoutCHAROLAInput[] | CHAROLA_FRASUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_FRASCreateOrConnectWithoutCHAROLAInput | CHAROLA_FRASCreateOrConnectWithoutCHAROLAInput[]
    createMany?: CHAROLA_FRASCreateManyCHAROLAInputEnvelope
    connect?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
  }

  export type CHAROLA_HIDRATACIONUncheckedCreateNestedManyWithoutCHAROLAInput = {
    create?: XOR<CHAROLA_HIDRATACIONCreateWithoutCHAROLAInput, CHAROLA_HIDRATACIONUncheckedCreateWithoutCHAROLAInput> | CHAROLA_HIDRATACIONCreateWithoutCHAROLAInput[] | CHAROLA_HIDRATACIONUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_HIDRATACIONCreateOrConnectWithoutCHAROLAInput | CHAROLA_HIDRATACIONCreateOrConnectWithoutCHAROLAInput[]
    createMany?: CHAROLA_HIDRATACIONCreateManyCHAROLAInputEnvelope
    connect?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
  }

  export type CHAROLA_PUPAUncheckedCreateNestedManyWithoutCHAROLAInput = {
    create?: XOR<CHAROLA_PUPACreateWithoutCHAROLAInput, CHAROLA_PUPAUncheckedCreateWithoutCHAROLAInput> | CHAROLA_PUPACreateWithoutCHAROLAInput[] | CHAROLA_PUPAUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_PUPACreateOrConnectWithoutCHAROLAInput | CHAROLA_PUPACreateOrConnectWithoutCHAROLAInput[]
    createMany?: CHAROLA_PUPACreateManyCHAROLAInputEnvelope
    connect?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
  }

  export type FRASUncheckedCreateNestedManyWithoutCHAROLAInput = {
    create?: XOR<FRASCreateWithoutCHAROLAInput, FRASUncheckedCreateWithoutCHAROLAInput> | FRASCreateWithoutCHAROLAInput[] | FRASUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: FRASCreateOrConnectWithoutCHAROLAInput | FRASCreateOrConnectWithoutCHAROLAInput[]
    createMany?: FRASCreateManyCHAROLAInputEnvelope
    connect?: FRASWhereUniqueInput | FRASWhereUniqueInput[]
  }

  export type USUARIO_CHAROLAUncheckedCreateNestedManyWithoutCHAROLAInput = {
    create?: XOR<USUARIO_CHAROLACreateWithoutCHAROLAInput, USUARIO_CHAROLAUncheckedCreateWithoutCHAROLAInput> | USUARIO_CHAROLACreateWithoutCHAROLAInput[] | USUARIO_CHAROLAUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: USUARIO_CHAROLACreateOrConnectWithoutCHAROLAInput | USUARIO_CHAROLACreateOrConnectWithoutCHAROLAInput[]
    createMany?: USUARIO_CHAROLACreateManyCHAROLAInputEnvelope
    connect?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput = {
    create?: XOR<CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput> | CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[] | CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    connectOrCreate?: CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput | CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    upsert?: CHAROLA_CHAROLAUpsertWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput | CHAROLA_CHAROLAUpsertWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    createMany?: CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInputEnvelope
    set?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    disconnect?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    delete?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    connect?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    update?: CHAROLA_CHAROLAUpdateWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput | CHAROLA_CHAROLAUpdateWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    updateMany?: CHAROLA_CHAROLAUpdateManyWithWhereWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput | CHAROLA_CHAROLAUpdateManyWithWhereWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    deleteMany?: CHAROLA_CHAROLAScalarWhereInput | CHAROLA_CHAROLAScalarWhereInput[]
  }

  export type CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput = {
    create?: XOR<CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput> | CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[] | CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    connectOrCreate?: CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput | CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    upsert?: CHAROLA_CHAROLAUpsertWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput | CHAROLA_CHAROLAUpsertWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    createMany?: CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInputEnvelope
    set?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    disconnect?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    delete?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    connect?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    update?: CHAROLA_CHAROLAUpdateWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput | CHAROLA_CHAROLAUpdateWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    updateMany?: CHAROLA_CHAROLAUpdateManyWithWhereWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput | CHAROLA_CHAROLAUpdateManyWithWhereWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    deleteMany?: CHAROLA_CHAROLAScalarWhereInput | CHAROLA_CHAROLAScalarWhereInput[]
  }

  export type CHAROLA_COMIDAUpdateManyWithoutCHAROLANestedInput = {
    create?: XOR<CHAROLA_COMIDACreateWithoutCHAROLAInput, CHAROLA_COMIDAUncheckedCreateWithoutCHAROLAInput> | CHAROLA_COMIDACreateWithoutCHAROLAInput[] | CHAROLA_COMIDAUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_COMIDACreateOrConnectWithoutCHAROLAInput | CHAROLA_COMIDACreateOrConnectWithoutCHAROLAInput[]
    upsert?: CHAROLA_COMIDAUpsertWithWhereUniqueWithoutCHAROLAInput | CHAROLA_COMIDAUpsertWithWhereUniqueWithoutCHAROLAInput[]
    createMany?: CHAROLA_COMIDACreateManyCHAROLAInputEnvelope
    set?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    disconnect?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    delete?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    connect?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    update?: CHAROLA_COMIDAUpdateWithWhereUniqueWithoutCHAROLAInput | CHAROLA_COMIDAUpdateWithWhereUniqueWithoutCHAROLAInput[]
    updateMany?: CHAROLA_COMIDAUpdateManyWithWhereWithoutCHAROLAInput | CHAROLA_COMIDAUpdateManyWithWhereWithoutCHAROLAInput[]
    deleteMany?: CHAROLA_COMIDAScalarWhereInput | CHAROLA_COMIDAScalarWhereInput[]
  }

  export type CHAROLA_FRASUpdateManyWithoutCHAROLANestedInput = {
    create?: XOR<CHAROLA_FRASCreateWithoutCHAROLAInput, CHAROLA_FRASUncheckedCreateWithoutCHAROLAInput> | CHAROLA_FRASCreateWithoutCHAROLAInput[] | CHAROLA_FRASUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_FRASCreateOrConnectWithoutCHAROLAInput | CHAROLA_FRASCreateOrConnectWithoutCHAROLAInput[]
    upsert?: CHAROLA_FRASUpsertWithWhereUniqueWithoutCHAROLAInput | CHAROLA_FRASUpsertWithWhereUniqueWithoutCHAROLAInput[]
    createMany?: CHAROLA_FRASCreateManyCHAROLAInputEnvelope
    set?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    disconnect?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    delete?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    connect?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    update?: CHAROLA_FRASUpdateWithWhereUniqueWithoutCHAROLAInput | CHAROLA_FRASUpdateWithWhereUniqueWithoutCHAROLAInput[]
    updateMany?: CHAROLA_FRASUpdateManyWithWhereWithoutCHAROLAInput | CHAROLA_FRASUpdateManyWithWhereWithoutCHAROLAInput[]
    deleteMany?: CHAROLA_FRASScalarWhereInput | CHAROLA_FRASScalarWhereInput[]
  }

  export type CHAROLA_HIDRATACIONUpdateManyWithoutCHAROLANestedInput = {
    create?: XOR<CHAROLA_HIDRATACIONCreateWithoutCHAROLAInput, CHAROLA_HIDRATACIONUncheckedCreateWithoutCHAROLAInput> | CHAROLA_HIDRATACIONCreateWithoutCHAROLAInput[] | CHAROLA_HIDRATACIONUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_HIDRATACIONCreateOrConnectWithoutCHAROLAInput | CHAROLA_HIDRATACIONCreateOrConnectWithoutCHAROLAInput[]
    upsert?: CHAROLA_HIDRATACIONUpsertWithWhereUniqueWithoutCHAROLAInput | CHAROLA_HIDRATACIONUpsertWithWhereUniqueWithoutCHAROLAInput[]
    createMany?: CHAROLA_HIDRATACIONCreateManyCHAROLAInputEnvelope
    set?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    disconnect?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    delete?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    connect?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    update?: CHAROLA_HIDRATACIONUpdateWithWhereUniqueWithoutCHAROLAInput | CHAROLA_HIDRATACIONUpdateWithWhereUniqueWithoutCHAROLAInput[]
    updateMany?: CHAROLA_HIDRATACIONUpdateManyWithWhereWithoutCHAROLAInput | CHAROLA_HIDRATACIONUpdateManyWithWhereWithoutCHAROLAInput[]
    deleteMany?: CHAROLA_HIDRATACIONScalarWhereInput | CHAROLA_HIDRATACIONScalarWhereInput[]
  }

  export type CHAROLA_PUPAUpdateManyWithoutCHAROLANestedInput = {
    create?: XOR<CHAROLA_PUPACreateWithoutCHAROLAInput, CHAROLA_PUPAUncheckedCreateWithoutCHAROLAInput> | CHAROLA_PUPACreateWithoutCHAROLAInput[] | CHAROLA_PUPAUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_PUPACreateOrConnectWithoutCHAROLAInput | CHAROLA_PUPACreateOrConnectWithoutCHAROLAInput[]
    upsert?: CHAROLA_PUPAUpsertWithWhereUniqueWithoutCHAROLAInput | CHAROLA_PUPAUpsertWithWhereUniqueWithoutCHAROLAInput[]
    createMany?: CHAROLA_PUPACreateManyCHAROLAInputEnvelope
    set?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    disconnect?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    delete?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    connect?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    update?: CHAROLA_PUPAUpdateWithWhereUniqueWithoutCHAROLAInput | CHAROLA_PUPAUpdateWithWhereUniqueWithoutCHAROLAInput[]
    updateMany?: CHAROLA_PUPAUpdateManyWithWhereWithoutCHAROLAInput | CHAROLA_PUPAUpdateManyWithWhereWithoutCHAROLAInput[]
    deleteMany?: CHAROLA_PUPAScalarWhereInput | CHAROLA_PUPAScalarWhereInput[]
  }

  export type FRASUpdateManyWithoutCHAROLANestedInput = {
    create?: XOR<FRASCreateWithoutCHAROLAInput, FRASUncheckedCreateWithoutCHAROLAInput> | FRASCreateWithoutCHAROLAInput[] | FRASUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: FRASCreateOrConnectWithoutCHAROLAInput | FRASCreateOrConnectWithoutCHAROLAInput[]
    upsert?: FRASUpsertWithWhereUniqueWithoutCHAROLAInput | FRASUpsertWithWhereUniqueWithoutCHAROLAInput[]
    createMany?: FRASCreateManyCHAROLAInputEnvelope
    set?: FRASWhereUniqueInput | FRASWhereUniqueInput[]
    disconnect?: FRASWhereUniqueInput | FRASWhereUniqueInput[]
    delete?: FRASWhereUniqueInput | FRASWhereUniqueInput[]
    connect?: FRASWhereUniqueInput | FRASWhereUniqueInput[]
    update?: FRASUpdateWithWhereUniqueWithoutCHAROLAInput | FRASUpdateWithWhereUniqueWithoutCHAROLAInput[]
    updateMany?: FRASUpdateManyWithWhereWithoutCHAROLAInput | FRASUpdateManyWithWhereWithoutCHAROLAInput[]
    deleteMany?: FRASScalarWhereInput | FRASScalarWhereInput[]
  }

  export type USUARIO_CHAROLAUpdateManyWithoutCHAROLANestedInput = {
    create?: XOR<USUARIO_CHAROLACreateWithoutCHAROLAInput, USUARIO_CHAROLAUncheckedCreateWithoutCHAROLAInput> | USUARIO_CHAROLACreateWithoutCHAROLAInput[] | USUARIO_CHAROLAUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: USUARIO_CHAROLACreateOrConnectWithoutCHAROLAInput | USUARIO_CHAROLACreateOrConnectWithoutCHAROLAInput[]
    upsert?: USUARIO_CHAROLAUpsertWithWhereUniqueWithoutCHAROLAInput | USUARIO_CHAROLAUpsertWithWhereUniqueWithoutCHAROLAInput[]
    createMany?: USUARIO_CHAROLACreateManyCHAROLAInputEnvelope
    set?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    disconnect?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    delete?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    connect?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    update?: USUARIO_CHAROLAUpdateWithWhereUniqueWithoutCHAROLAInput | USUARIO_CHAROLAUpdateWithWhereUniqueWithoutCHAROLAInput[]
    updateMany?: USUARIO_CHAROLAUpdateManyWithWhereWithoutCHAROLAInput | USUARIO_CHAROLAUpdateManyWithWhereWithoutCHAROLAInput[]
    deleteMany?: USUARIO_CHAROLAScalarWhereInput | USUARIO_CHAROLAScalarWhereInput[]
  }

  export type CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput = {
    create?: XOR<CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput> | CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[] | CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    connectOrCreate?: CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput | CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    upsert?: CHAROLA_CHAROLAUpsertWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput | CHAROLA_CHAROLAUpsertWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    createMany?: CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInputEnvelope
    set?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    disconnect?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    delete?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    connect?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    update?: CHAROLA_CHAROLAUpdateWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput | CHAROLA_CHAROLAUpdateWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    updateMany?: CHAROLA_CHAROLAUpdateManyWithWhereWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput | CHAROLA_CHAROLAUpdateManyWithWhereWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    deleteMany?: CHAROLA_CHAROLAScalarWhereInput | CHAROLA_CHAROLAScalarWhereInput[]
  }

  export type CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput = {
    create?: XOR<CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput> | CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[] | CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    connectOrCreate?: CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput | CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    upsert?: CHAROLA_CHAROLAUpsertWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput | CHAROLA_CHAROLAUpsertWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    createMany?: CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInputEnvelope
    set?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    disconnect?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    delete?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    connect?: CHAROLA_CHAROLAWhereUniqueInput | CHAROLA_CHAROLAWhereUniqueInput[]
    update?: CHAROLA_CHAROLAUpdateWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput | CHAROLA_CHAROLAUpdateWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    updateMany?: CHAROLA_CHAROLAUpdateManyWithWhereWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput | CHAROLA_CHAROLAUpdateManyWithWhereWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    deleteMany?: CHAROLA_CHAROLAScalarWhereInput | CHAROLA_CHAROLAScalarWhereInput[]
  }

  export type CHAROLA_COMIDAUncheckedUpdateManyWithoutCHAROLANestedInput = {
    create?: XOR<CHAROLA_COMIDACreateWithoutCHAROLAInput, CHAROLA_COMIDAUncheckedCreateWithoutCHAROLAInput> | CHAROLA_COMIDACreateWithoutCHAROLAInput[] | CHAROLA_COMIDAUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_COMIDACreateOrConnectWithoutCHAROLAInput | CHAROLA_COMIDACreateOrConnectWithoutCHAROLAInput[]
    upsert?: CHAROLA_COMIDAUpsertWithWhereUniqueWithoutCHAROLAInput | CHAROLA_COMIDAUpsertWithWhereUniqueWithoutCHAROLAInput[]
    createMany?: CHAROLA_COMIDACreateManyCHAROLAInputEnvelope
    set?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    disconnect?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    delete?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    connect?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    update?: CHAROLA_COMIDAUpdateWithWhereUniqueWithoutCHAROLAInput | CHAROLA_COMIDAUpdateWithWhereUniqueWithoutCHAROLAInput[]
    updateMany?: CHAROLA_COMIDAUpdateManyWithWhereWithoutCHAROLAInput | CHAROLA_COMIDAUpdateManyWithWhereWithoutCHAROLAInput[]
    deleteMany?: CHAROLA_COMIDAScalarWhereInput | CHAROLA_COMIDAScalarWhereInput[]
  }

  export type CHAROLA_FRASUncheckedUpdateManyWithoutCHAROLANestedInput = {
    create?: XOR<CHAROLA_FRASCreateWithoutCHAROLAInput, CHAROLA_FRASUncheckedCreateWithoutCHAROLAInput> | CHAROLA_FRASCreateWithoutCHAROLAInput[] | CHAROLA_FRASUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_FRASCreateOrConnectWithoutCHAROLAInput | CHAROLA_FRASCreateOrConnectWithoutCHAROLAInput[]
    upsert?: CHAROLA_FRASUpsertWithWhereUniqueWithoutCHAROLAInput | CHAROLA_FRASUpsertWithWhereUniqueWithoutCHAROLAInput[]
    createMany?: CHAROLA_FRASCreateManyCHAROLAInputEnvelope
    set?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    disconnect?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    delete?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    connect?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    update?: CHAROLA_FRASUpdateWithWhereUniqueWithoutCHAROLAInput | CHAROLA_FRASUpdateWithWhereUniqueWithoutCHAROLAInput[]
    updateMany?: CHAROLA_FRASUpdateManyWithWhereWithoutCHAROLAInput | CHAROLA_FRASUpdateManyWithWhereWithoutCHAROLAInput[]
    deleteMany?: CHAROLA_FRASScalarWhereInput | CHAROLA_FRASScalarWhereInput[]
  }

  export type CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutCHAROLANestedInput = {
    create?: XOR<CHAROLA_HIDRATACIONCreateWithoutCHAROLAInput, CHAROLA_HIDRATACIONUncheckedCreateWithoutCHAROLAInput> | CHAROLA_HIDRATACIONCreateWithoutCHAROLAInput[] | CHAROLA_HIDRATACIONUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_HIDRATACIONCreateOrConnectWithoutCHAROLAInput | CHAROLA_HIDRATACIONCreateOrConnectWithoutCHAROLAInput[]
    upsert?: CHAROLA_HIDRATACIONUpsertWithWhereUniqueWithoutCHAROLAInput | CHAROLA_HIDRATACIONUpsertWithWhereUniqueWithoutCHAROLAInput[]
    createMany?: CHAROLA_HIDRATACIONCreateManyCHAROLAInputEnvelope
    set?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    disconnect?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    delete?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    connect?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    update?: CHAROLA_HIDRATACIONUpdateWithWhereUniqueWithoutCHAROLAInput | CHAROLA_HIDRATACIONUpdateWithWhereUniqueWithoutCHAROLAInput[]
    updateMany?: CHAROLA_HIDRATACIONUpdateManyWithWhereWithoutCHAROLAInput | CHAROLA_HIDRATACIONUpdateManyWithWhereWithoutCHAROLAInput[]
    deleteMany?: CHAROLA_HIDRATACIONScalarWhereInput | CHAROLA_HIDRATACIONScalarWhereInput[]
  }

  export type CHAROLA_PUPAUncheckedUpdateManyWithoutCHAROLANestedInput = {
    create?: XOR<CHAROLA_PUPACreateWithoutCHAROLAInput, CHAROLA_PUPAUncheckedCreateWithoutCHAROLAInput> | CHAROLA_PUPACreateWithoutCHAROLAInput[] | CHAROLA_PUPAUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: CHAROLA_PUPACreateOrConnectWithoutCHAROLAInput | CHAROLA_PUPACreateOrConnectWithoutCHAROLAInput[]
    upsert?: CHAROLA_PUPAUpsertWithWhereUniqueWithoutCHAROLAInput | CHAROLA_PUPAUpsertWithWhereUniqueWithoutCHAROLAInput[]
    createMany?: CHAROLA_PUPACreateManyCHAROLAInputEnvelope
    set?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    disconnect?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    delete?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    connect?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    update?: CHAROLA_PUPAUpdateWithWhereUniqueWithoutCHAROLAInput | CHAROLA_PUPAUpdateWithWhereUniqueWithoutCHAROLAInput[]
    updateMany?: CHAROLA_PUPAUpdateManyWithWhereWithoutCHAROLAInput | CHAROLA_PUPAUpdateManyWithWhereWithoutCHAROLAInput[]
    deleteMany?: CHAROLA_PUPAScalarWhereInput | CHAROLA_PUPAScalarWhereInput[]
  }

  export type FRASUncheckedUpdateManyWithoutCHAROLANestedInput = {
    create?: XOR<FRASCreateWithoutCHAROLAInput, FRASUncheckedCreateWithoutCHAROLAInput> | FRASCreateWithoutCHAROLAInput[] | FRASUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: FRASCreateOrConnectWithoutCHAROLAInput | FRASCreateOrConnectWithoutCHAROLAInput[]
    upsert?: FRASUpsertWithWhereUniqueWithoutCHAROLAInput | FRASUpsertWithWhereUniqueWithoutCHAROLAInput[]
    createMany?: FRASCreateManyCHAROLAInputEnvelope
    set?: FRASWhereUniqueInput | FRASWhereUniqueInput[]
    disconnect?: FRASWhereUniqueInput | FRASWhereUniqueInput[]
    delete?: FRASWhereUniqueInput | FRASWhereUniqueInput[]
    connect?: FRASWhereUniqueInput | FRASWhereUniqueInput[]
    update?: FRASUpdateWithWhereUniqueWithoutCHAROLAInput | FRASUpdateWithWhereUniqueWithoutCHAROLAInput[]
    updateMany?: FRASUpdateManyWithWhereWithoutCHAROLAInput | FRASUpdateManyWithWhereWithoutCHAROLAInput[]
    deleteMany?: FRASScalarWhereInput | FRASScalarWhereInput[]
  }

  export type USUARIO_CHAROLAUncheckedUpdateManyWithoutCHAROLANestedInput = {
    create?: XOR<USUARIO_CHAROLACreateWithoutCHAROLAInput, USUARIO_CHAROLAUncheckedCreateWithoutCHAROLAInput> | USUARIO_CHAROLACreateWithoutCHAROLAInput[] | USUARIO_CHAROLAUncheckedCreateWithoutCHAROLAInput[]
    connectOrCreate?: USUARIO_CHAROLACreateOrConnectWithoutCHAROLAInput | USUARIO_CHAROLACreateOrConnectWithoutCHAROLAInput[]
    upsert?: USUARIO_CHAROLAUpsertWithWhereUniqueWithoutCHAROLAInput | USUARIO_CHAROLAUpsertWithWhereUniqueWithoutCHAROLAInput[]
    createMany?: USUARIO_CHAROLACreateManyCHAROLAInputEnvelope
    set?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    disconnect?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    delete?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    connect?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    update?: USUARIO_CHAROLAUpdateWithWhereUniqueWithoutCHAROLAInput | USUARIO_CHAROLAUpdateWithWhereUniqueWithoutCHAROLAInput[]
    updateMany?: USUARIO_CHAROLAUpdateManyWithWhereWithoutCHAROLAInput | USUARIO_CHAROLAUpdateManyWithWhereWithoutCHAROLAInput[]
    deleteMany?: USUARIO_CHAROLAScalarWhereInput | USUARIO_CHAROLAScalarWhereInput[]
  }

  export type CHAROLACreateNestedOneWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    create?: XOR<CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    connect?: CHAROLAWhereUniqueInput
  }

  export type CHAROLACreateNestedOneWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    create?: XOR<CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    connect?: CHAROLAWhereUniqueInput
  }

  export type CHAROLAUpdateOneRequiredWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput = {
    create?: XOR<CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    upsert?: CHAROLAUpsertWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    connect?: CHAROLAWhereUniqueInput
    update?: XOR<XOR<CHAROLAUpdateToOneWithWhereWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLAUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput>, CHAROLAUncheckedUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput>
  }

  export type CHAROLAUpdateOneRequiredWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput = {
    create?: XOR<CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    upsert?: CHAROLAUpsertWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    connect?: CHAROLAWhereUniqueInput
    update?: XOR<XOR<CHAROLAUpdateToOneWithWhereWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLAUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput>, CHAROLAUncheckedUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput>
  }

  export type CHAROLACreateNestedOneWithoutCHAROLA_COMIDAInput = {
    create?: XOR<CHAROLACreateWithoutCHAROLA_COMIDAInput, CHAROLAUncheckedCreateWithoutCHAROLA_COMIDAInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutCHAROLA_COMIDAInput
    connect?: CHAROLAWhereUniqueInput
  }

  export type COMIDACreateNestedOneWithoutCHAROLA_COMIDAInput = {
    create?: XOR<COMIDACreateWithoutCHAROLA_COMIDAInput, COMIDAUncheckedCreateWithoutCHAROLA_COMIDAInput>
    connectOrCreate?: COMIDACreateOrConnectWithoutCHAROLA_COMIDAInput
    connect?: COMIDAWhereUniqueInput
  }

  export type CHAROLAUpdateOneWithoutCHAROLA_COMIDANestedInput = {
    create?: XOR<CHAROLACreateWithoutCHAROLA_COMIDAInput, CHAROLAUncheckedCreateWithoutCHAROLA_COMIDAInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutCHAROLA_COMIDAInput
    upsert?: CHAROLAUpsertWithoutCHAROLA_COMIDAInput
    disconnect?: CHAROLAWhereInput | boolean
    delete?: CHAROLAWhereInput | boolean
    connect?: CHAROLAWhereUniqueInput
    update?: XOR<XOR<CHAROLAUpdateToOneWithWhereWithoutCHAROLA_COMIDAInput, CHAROLAUpdateWithoutCHAROLA_COMIDAInput>, CHAROLAUncheckedUpdateWithoutCHAROLA_COMIDAInput>
  }

  export type COMIDAUpdateOneWithoutCHAROLA_COMIDANestedInput = {
    create?: XOR<COMIDACreateWithoutCHAROLA_COMIDAInput, COMIDAUncheckedCreateWithoutCHAROLA_COMIDAInput>
    connectOrCreate?: COMIDACreateOrConnectWithoutCHAROLA_COMIDAInput
    upsert?: COMIDAUpsertWithoutCHAROLA_COMIDAInput
    disconnect?: COMIDAWhereInput | boolean
    delete?: COMIDAWhereInput | boolean
    connect?: COMIDAWhereUniqueInput
    update?: XOR<XOR<COMIDAUpdateToOneWithWhereWithoutCHAROLA_COMIDAInput, COMIDAUpdateWithoutCHAROLA_COMIDAInput>, COMIDAUncheckedUpdateWithoutCHAROLA_COMIDAInput>
  }

  export type CHAROLACreateNestedOneWithoutCHAROLA_HIDRATACIONInput = {
    create?: XOR<CHAROLACreateWithoutCHAROLA_HIDRATACIONInput, CHAROLAUncheckedCreateWithoutCHAROLA_HIDRATACIONInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutCHAROLA_HIDRATACIONInput
    connect?: CHAROLAWhereUniqueInput
  }

  export type HIDRATACIONCreateNestedOneWithoutCHAROLA_HIDRATACIONInput = {
    create?: XOR<HIDRATACIONCreateWithoutCHAROLA_HIDRATACIONInput, HIDRATACIONUncheckedCreateWithoutCHAROLA_HIDRATACIONInput>
    connectOrCreate?: HIDRATACIONCreateOrConnectWithoutCHAROLA_HIDRATACIONInput
    connect?: HIDRATACIONWhereUniqueInput
  }

  export type CHAROLAUpdateOneWithoutCHAROLA_HIDRATACIONNestedInput = {
    create?: XOR<CHAROLACreateWithoutCHAROLA_HIDRATACIONInput, CHAROLAUncheckedCreateWithoutCHAROLA_HIDRATACIONInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutCHAROLA_HIDRATACIONInput
    upsert?: CHAROLAUpsertWithoutCHAROLA_HIDRATACIONInput
    disconnect?: CHAROLAWhereInput | boolean
    delete?: CHAROLAWhereInput | boolean
    connect?: CHAROLAWhereUniqueInput
    update?: XOR<XOR<CHAROLAUpdateToOneWithWhereWithoutCHAROLA_HIDRATACIONInput, CHAROLAUpdateWithoutCHAROLA_HIDRATACIONInput>, CHAROLAUncheckedUpdateWithoutCHAROLA_HIDRATACIONInput>
  }

  export type HIDRATACIONUpdateOneWithoutCHAROLA_HIDRATACIONNestedInput = {
    create?: XOR<HIDRATACIONCreateWithoutCHAROLA_HIDRATACIONInput, HIDRATACIONUncheckedCreateWithoutCHAROLA_HIDRATACIONInput>
    connectOrCreate?: HIDRATACIONCreateOrConnectWithoutCHAROLA_HIDRATACIONInput
    upsert?: HIDRATACIONUpsertWithoutCHAROLA_HIDRATACIONInput
    disconnect?: HIDRATACIONWhereInput | boolean
    delete?: HIDRATACIONWhereInput | boolean
    connect?: HIDRATACIONWhereUniqueInput
    update?: XOR<XOR<HIDRATACIONUpdateToOneWithWhereWithoutCHAROLA_HIDRATACIONInput, HIDRATACIONUpdateWithoutCHAROLA_HIDRATACIONInput>, HIDRATACIONUncheckedUpdateWithoutCHAROLA_HIDRATACIONInput>
  }

  export type CHAROLA_COMIDACreateNestedManyWithoutCOMIDAInput = {
    create?: XOR<CHAROLA_COMIDACreateWithoutCOMIDAInput, CHAROLA_COMIDAUncheckedCreateWithoutCOMIDAInput> | CHAROLA_COMIDACreateWithoutCOMIDAInput[] | CHAROLA_COMIDAUncheckedCreateWithoutCOMIDAInput[]
    connectOrCreate?: CHAROLA_COMIDACreateOrConnectWithoutCOMIDAInput | CHAROLA_COMIDACreateOrConnectWithoutCOMIDAInput[]
    createMany?: CHAROLA_COMIDACreateManyCOMIDAInputEnvelope
    connect?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
  }

  export type CHAROLA_COMIDAUncheckedCreateNestedManyWithoutCOMIDAInput = {
    create?: XOR<CHAROLA_COMIDACreateWithoutCOMIDAInput, CHAROLA_COMIDAUncheckedCreateWithoutCOMIDAInput> | CHAROLA_COMIDACreateWithoutCOMIDAInput[] | CHAROLA_COMIDAUncheckedCreateWithoutCOMIDAInput[]
    connectOrCreate?: CHAROLA_COMIDACreateOrConnectWithoutCOMIDAInput | CHAROLA_COMIDACreateOrConnectWithoutCOMIDAInput[]
    createMany?: CHAROLA_COMIDACreateManyCOMIDAInputEnvelope
    connect?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CHAROLA_COMIDAUpdateManyWithoutCOMIDANestedInput = {
    create?: XOR<CHAROLA_COMIDACreateWithoutCOMIDAInput, CHAROLA_COMIDAUncheckedCreateWithoutCOMIDAInput> | CHAROLA_COMIDACreateWithoutCOMIDAInput[] | CHAROLA_COMIDAUncheckedCreateWithoutCOMIDAInput[]
    connectOrCreate?: CHAROLA_COMIDACreateOrConnectWithoutCOMIDAInput | CHAROLA_COMIDACreateOrConnectWithoutCOMIDAInput[]
    upsert?: CHAROLA_COMIDAUpsertWithWhereUniqueWithoutCOMIDAInput | CHAROLA_COMIDAUpsertWithWhereUniqueWithoutCOMIDAInput[]
    createMany?: CHAROLA_COMIDACreateManyCOMIDAInputEnvelope
    set?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    disconnect?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    delete?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    connect?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    update?: CHAROLA_COMIDAUpdateWithWhereUniqueWithoutCOMIDAInput | CHAROLA_COMIDAUpdateWithWhereUniqueWithoutCOMIDAInput[]
    updateMany?: CHAROLA_COMIDAUpdateManyWithWhereWithoutCOMIDAInput | CHAROLA_COMIDAUpdateManyWithWhereWithoutCOMIDAInput[]
    deleteMany?: CHAROLA_COMIDAScalarWhereInput | CHAROLA_COMIDAScalarWhereInput[]
  }

  export type CHAROLA_COMIDAUncheckedUpdateManyWithoutCOMIDANestedInput = {
    create?: XOR<CHAROLA_COMIDACreateWithoutCOMIDAInput, CHAROLA_COMIDAUncheckedCreateWithoutCOMIDAInput> | CHAROLA_COMIDACreateWithoutCOMIDAInput[] | CHAROLA_COMIDAUncheckedCreateWithoutCOMIDAInput[]
    connectOrCreate?: CHAROLA_COMIDACreateOrConnectWithoutCOMIDAInput | CHAROLA_COMIDACreateOrConnectWithoutCOMIDAInput[]
    upsert?: CHAROLA_COMIDAUpsertWithWhereUniqueWithoutCOMIDAInput | CHAROLA_COMIDAUpsertWithWhereUniqueWithoutCOMIDAInput[]
    createMany?: CHAROLA_COMIDACreateManyCOMIDAInputEnvelope
    set?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    disconnect?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    delete?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    connect?: CHAROLA_COMIDAWhereUniqueInput | CHAROLA_COMIDAWhereUniqueInput[]
    update?: CHAROLA_COMIDAUpdateWithWhereUniqueWithoutCOMIDAInput | CHAROLA_COMIDAUpdateWithWhereUniqueWithoutCOMIDAInput[]
    updateMany?: CHAROLA_COMIDAUpdateManyWithWhereWithoutCOMIDAInput | CHAROLA_COMIDAUpdateManyWithWhereWithoutCOMIDAInput[]
    deleteMany?: CHAROLA_COMIDAScalarWhereInput | CHAROLA_COMIDAScalarWhereInput[]
  }

  export type CHAROLA_FRASCreateNestedManyWithoutFRASInput = {
    create?: XOR<CHAROLA_FRASCreateWithoutFRASInput, CHAROLA_FRASUncheckedCreateWithoutFRASInput> | CHAROLA_FRASCreateWithoutFRASInput[] | CHAROLA_FRASUncheckedCreateWithoutFRASInput[]
    connectOrCreate?: CHAROLA_FRASCreateOrConnectWithoutFRASInput | CHAROLA_FRASCreateOrConnectWithoutFRASInput[]
    createMany?: CHAROLA_FRASCreateManyFRASInputEnvelope
    connect?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
  }

  export type CHAROLACreateNestedOneWithoutFRASInput = {
    create?: XOR<CHAROLACreateWithoutFRASInput, CHAROLAUncheckedCreateWithoutFRASInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutFRASInput
    connect?: CHAROLAWhereUniqueInput
  }

  export type CHAROLA_FRASUncheckedCreateNestedManyWithoutFRASInput = {
    create?: XOR<CHAROLA_FRASCreateWithoutFRASInput, CHAROLA_FRASUncheckedCreateWithoutFRASInput> | CHAROLA_FRASCreateWithoutFRASInput[] | CHAROLA_FRASUncheckedCreateWithoutFRASInput[]
    connectOrCreate?: CHAROLA_FRASCreateOrConnectWithoutFRASInput | CHAROLA_FRASCreateOrConnectWithoutFRASInput[]
    createMany?: CHAROLA_FRASCreateManyFRASInputEnvelope
    connect?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
  }

  export type CHAROLA_FRASUpdateManyWithoutFRASNestedInput = {
    create?: XOR<CHAROLA_FRASCreateWithoutFRASInput, CHAROLA_FRASUncheckedCreateWithoutFRASInput> | CHAROLA_FRASCreateWithoutFRASInput[] | CHAROLA_FRASUncheckedCreateWithoutFRASInput[]
    connectOrCreate?: CHAROLA_FRASCreateOrConnectWithoutFRASInput | CHAROLA_FRASCreateOrConnectWithoutFRASInput[]
    upsert?: CHAROLA_FRASUpsertWithWhereUniqueWithoutFRASInput | CHAROLA_FRASUpsertWithWhereUniqueWithoutFRASInput[]
    createMany?: CHAROLA_FRASCreateManyFRASInputEnvelope
    set?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    disconnect?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    delete?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    connect?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    update?: CHAROLA_FRASUpdateWithWhereUniqueWithoutFRASInput | CHAROLA_FRASUpdateWithWhereUniqueWithoutFRASInput[]
    updateMany?: CHAROLA_FRASUpdateManyWithWhereWithoutFRASInput | CHAROLA_FRASUpdateManyWithWhereWithoutFRASInput[]
    deleteMany?: CHAROLA_FRASScalarWhereInput | CHAROLA_FRASScalarWhereInput[]
  }

  export type CHAROLAUpdateOneWithoutFRASNestedInput = {
    create?: XOR<CHAROLACreateWithoutFRASInput, CHAROLAUncheckedCreateWithoutFRASInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutFRASInput
    upsert?: CHAROLAUpsertWithoutFRASInput
    disconnect?: CHAROLAWhereInput | boolean
    delete?: CHAROLAWhereInput | boolean
    connect?: CHAROLAWhereUniqueInput
    update?: XOR<XOR<CHAROLAUpdateToOneWithWhereWithoutFRASInput, CHAROLAUpdateWithoutFRASInput>, CHAROLAUncheckedUpdateWithoutFRASInput>
  }

  export type CHAROLA_FRASUncheckedUpdateManyWithoutFRASNestedInput = {
    create?: XOR<CHAROLA_FRASCreateWithoutFRASInput, CHAROLA_FRASUncheckedCreateWithoutFRASInput> | CHAROLA_FRASCreateWithoutFRASInput[] | CHAROLA_FRASUncheckedCreateWithoutFRASInput[]
    connectOrCreate?: CHAROLA_FRASCreateOrConnectWithoutFRASInput | CHAROLA_FRASCreateOrConnectWithoutFRASInput[]
    upsert?: CHAROLA_FRASUpsertWithWhereUniqueWithoutFRASInput | CHAROLA_FRASUpsertWithWhereUniqueWithoutFRASInput[]
    createMany?: CHAROLA_FRASCreateManyFRASInputEnvelope
    set?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    disconnect?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    delete?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    connect?: CHAROLA_FRASWhereUniqueInput | CHAROLA_FRASWhereUniqueInput[]
    update?: CHAROLA_FRASUpdateWithWhereUniqueWithoutFRASInput | CHAROLA_FRASUpdateWithWhereUniqueWithoutFRASInput[]
    updateMany?: CHAROLA_FRASUpdateManyWithWhereWithoutFRASInput | CHAROLA_FRASUpdateManyWithWhereWithoutFRASInput[]
    deleteMany?: CHAROLA_FRASScalarWhereInput | CHAROLA_FRASScalarWhereInput[]
  }

  export type CHAROLA_HIDRATACIONCreateNestedManyWithoutHIDRATACIONInput = {
    create?: XOR<CHAROLA_HIDRATACIONCreateWithoutHIDRATACIONInput, CHAROLA_HIDRATACIONUncheckedCreateWithoutHIDRATACIONInput> | CHAROLA_HIDRATACIONCreateWithoutHIDRATACIONInput[] | CHAROLA_HIDRATACIONUncheckedCreateWithoutHIDRATACIONInput[]
    connectOrCreate?: CHAROLA_HIDRATACIONCreateOrConnectWithoutHIDRATACIONInput | CHAROLA_HIDRATACIONCreateOrConnectWithoutHIDRATACIONInput[]
    createMany?: CHAROLA_HIDRATACIONCreateManyHIDRATACIONInputEnvelope
    connect?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
  }

  export type CHAROLA_HIDRATACIONUncheckedCreateNestedManyWithoutHIDRATACIONInput = {
    create?: XOR<CHAROLA_HIDRATACIONCreateWithoutHIDRATACIONInput, CHAROLA_HIDRATACIONUncheckedCreateWithoutHIDRATACIONInput> | CHAROLA_HIDRATACIONCreateWithoutHIDRATACIONInput[] | CHAROLA_HIDRATACIONUncheckedCreateWithoutHIDRATACIONInput[]
    connectOrCreate?: CHAROLA_HIDRATACIONCreateOrConnectWithoutHIDRATACIONInput | CHAROLA_HIDRATACIONCreateOrConnectWithoutHIDRATACIONInput[]
    createMany?: CHAROLA_HIDRATACIONCreateManyHIDRATACIONInputEnvelope
    connect?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
  }

  export type CHAROLA_HIDRATACIONUpdateManyWithoutHIDRATACIONNestedInput = {
    create?: XOR<CHAROLA_HIDRATACIONCreateWithoutHIDRATACIONInput, CHAROLA_HIDRATACIONUncheckedCreateWithoutHIDRATACIONInput> | CHAROLA_HIDRATACIONCreateWithoutHIDRATACIONInput[] | CHAROLA_HIDRATACIONUncheckedCreateWithoutHIDRATACIONInput[]
    connectOrCreate?: CHAROLA_HIDRATACIONCreateOrConnectWithoutHIDRATACIONInput | CHAROLA_HIDRATACIONCreateOrConnectWithoutHIDRATACIONInput[]
    upsert?: CHAROLA_HIDRATACIONUpsertWithWhereUniqueWithoutHIDRATACIONInput | CHAROLA_HIDRATACIONUpsertWithWhereUniqueWithoutHIDRATACIONInput[]
    createMany?: CHAROLA_HIDRATACIONCreateManyHIDRATACIONInputEnvelope
    set?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    disconnect?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    delete?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    connect?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    update?: CHAROLA_HIDRATACIONUpdateWithWhereUniqueWithoutHIDRATACIONInput | CHAROLA_HIDRATACIONUpdateWithWhereUniqueWithoutHIDRATACIONInput[]
    updateMany?: CHAROLA_HIDRATACIONUpdateManyWithWhereWithoutHIDRATACIONInput | CHAROLA_HIDRATACIONUpdateManyWithWhereWithoutHIDRATACIONInput[]
    deleteMany?: CHAROLA_HIDRATACIONScalarWhereInput | CHAROLA_HIDRATACIONScalarWhereInput[]
  }

  export type CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutHIDRATACIONNestedInput = {
    create?: XOR<CHAROLA_HIDRATACIONCreateWithoutHIDRATACIONInput, CHAROLA_HIDRATACIONUncheckedCreateWithoutHIDRATACIONInput> | CHAROLA_HIDRATACIONCreateWithoutHIDRATACIONInput[] | CHAROLA_HIDRATACIONUncheckedCreateWithoutHIDRATACIONInput[]
    connectOrCreate?: CHAROLA_HIDRATACIONCreateOrConnectWithoutHIDRATACIONInput | CHAROLA_HIDRATACIONCreateOrConnectWithoutHIDRATACIONInput[]
    upsert?: CHAROLA_HIDRATACIONUpsertWithWhereUniqueWithoutHIDRATACIONInput | CHAROLA_HIDRATACIONUpsertWithWhereUniqueWithoutHIDRATACIONInput[]
    createMany?: CHAROLA_HIDRATACIONCreateManyHIDRATACIONInputEnvelope
    set?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    disconnect?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    delete?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    connect?: CHAROLA_HIDRATACIONWhereUniqueInput | CHAROLA_HIDRATACIONWhereUniqueInput[]
    update?: CHAROLA_HIDRATACIONUpdateWithWhereUniqueWithoutHIDRATACIONInput | CHAROLA_HIDRATACIONUpdateWithWhereUniqueWithoutHIDRATACIONInput[]
    updateMany?: CHAROLA_HIDRATACIONUpdateManyWithWhereWithoutHIDRATACIONInput | CHAROLA_HIDRATACIONUpdateManyWithWhereWithoutHIDRATACIONInput[]
    deleteMany?: CHAROLA_HIDRATACIONScalarWhereInput | CHAROLA_HIDRATACIONScalarWhereInput[]
  }

  export type ADMINISTRADORCreateNestedManyWithoutUSUARIOInput = {
    create?: XOR<ADMINISTRADORCreateWithoutUSUARIOInput, ADMINISTRADORUncheckedCreateWithoutUSUARIOInput> | ADMINISTRADORCreateWithoutUSUARIOInput[] | ADMINISTRADORUncheckedCreateWithoutUSUARIOInput[]
    connectOrCreate?: ADMINISTRADORCreateOrConnectWithoutUSUARIOInput | ADMINISTRADORCreateOrConnectWithoutUSUARIOInput[]
    createMany?: ADMINISTRADORCreateManyUSUARIOInputEnvelope
    connect?: ADMINISTRADORWhereUniqueInput | ADMINISTRADORWhereUniqueInput[]
  }

  export type USUARIO_CHAROLACreateNestedManyWithoutUSUARIOInput = {
    create?: XOR<USUARIO_CHAROLACreateWithoutUSUARIOInput, USUARIO_CHAROLAUncheckedCreateWithoutUSUARIOInput> | USUARIO_CHAROLACreateWithoutUSUARIOInput[] | USUARIO_CHAROLAUncheckedCreateWithoutUSUARIOInput[]
    connectOrCreate?: USUARIO_CHAROLACreateOrConnectWithoutUSUARIOInput | USUARIO_CHAROLACreateOrConnectWithoutUSUARIOInput[]
    createMany?: USUARIO_CHAROLACreateManyUSUARIOInputEnvelope
    connect?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
  }

  export type ADMINISTRADORUncheckedCreateNestedManyWithoutUSUARIOInput = {
    create?: XOR<ADMINISTRADORCreateWithoutUSUARIOInput, ADMINISTRADORUncheckedCreateWithoutUSUARIOInput> | ADMINISTRADORCreateWithoutUSUARIOInput[] | ADMINISTRADORUncheckedCreateWithoutUSUARIOInput[]
    connectOrCreate?: ADMINISTRADORCreateOrConnectWithoutUSUARIOInput | ADMINISTRADORCreateOrConnectWithoutUSUARIOInput[]
    createMany?: ADMINISTRADORCreateManyUSUARIOInputEnvelope
    connect?: ADMINISTRADORWhereUniqueInput | ADMINISTRADORWhereUniqueInput[]
  }

  export type USUARIO_CHAROLAUncheckedCreateNestedManyWithoutUSUARIOInput = {
    create?: XOR<USUARIO_CHAROLACreateWithoutUSUARIOInput, USUARIO_CHAROLAUncheckedCreateWithoutUSUARIOInput> | USUARIO_CHAROLACreateWithoutUSUARIOInput[] | USUARIO_CHAROLAUncheckedCreateWithoutUSUARIOInput[]
    connectOrCreate?: USUARIO_CHAROLACreateOrConnectWithoutUSUARIOInput | USUARIO_CHAROLACreateOrConnectWithoutUSUARIOInput[]
    createMany?: USUARIO_CHAROLACreateManyUSUARIOInputEnvelope
    connect?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
  }

  export type ADMINISTRADORUpdateManyWithoutUSUARIONestedInput = {
    create?: XOR<ADMINISTRADORCreateWithoutUSUARIOInput, ADMINISTRADORUncheckedCreateWithoutUSUARIOInput> | ADMINISTRADORCreateWithoutUSUARIOInput[] | ADMINISTRADORUncheckedCreateWithoutUSUARIOInput[]
    connectOrCreate?: ADMINISTRADORCreateOrConnectWithoutUSUARIOInput | ADMINISTRADORCreateOrConnectWithoutUSUARIOInput[]
    upsert?: ADMINISTRADORUpsertWithWhereUniqueWithoutUSUARIOInput | ADMINISTRADORUpsertWithWhereUniqueWithoutUSUARIOInput[]
    createMany?: ADMINISTRADORCreateManyUSUARIOInputEnvelope
    set?: ADMINISTRADORWhereUniqueInput | ADMINISTRADORWhereUniqueInput[]
    disconnect?: ADMINISTRADORWhereUniqueInput | ADMINISTRADORWhereUniqueInput[]
    delete?: ADMINISTRADORWhereUniqueInput | ADMINISTRADORWhereUniqueInput[]
    connect?: ADMINISTRADORWhereUniqueInput | ADMINISTRADORWhereUniqueInput[]
    update?: ADMINISTRADORUpdateWithWhereUniqueWithoutUSUARIOInput | ADMINISTRADORUpdateWithWhereUniqueWithoutUSUARIOInput[]
    updateMany?: ADMINISTRADORUpdateManyWithWhereWithoutUSUARIOInput | ADMINISTRADORUpdateManyWithWhereWithoutUSUARIOInput[]
    deleteMany?: ADMINISTRADORScalarWhereInput | ADMINISTRADORScalarWhereInput[]
  }

  export type USUARIO_CHAROLAUpdateManyWithoutUSUARIONestedInput = {
    create?: XOR<USUARIO_CHAROLACreateWithoutUSUARIOInput, USUARIO_CHAROLAUncheckedCreateWithoutUSUARIOInput> | USUARIO_CHAROLACreateWithoutUSUARIOInput[] | USUARIO_CHAROLAUncheckedCreateWithoutUSUARIOInput[]
    connectOrCreate?: USUARIO_CHAROLACreateOrConnectWithoutUSUARIOInput | USUARIO_CHAROLACreateOrConnectWithoutUSUARIOInput[]
    upsert?: USUARIO_CHAROLAUpsertWithWhereUniqueWithoutUSUARIOInput | USUARIO_CHAROLAUpsertWithWhereUniqueWithoutUSUARIOInput[]
    createMany?: USUARIO_CHAROLACreateManyUSUARIOInputEnvelope
    set?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    disconnect?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    delete?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    connect?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    update?: USUARIO_CHAROLAUpdateWithWhereUniqueWithoutUSUARIOInput | USUARIO_CHAROLAUpdateWithWhereUniqueWithoutUSUARIOInput[]
    updateMany?: USUARIO_CHAROLAUpdateManyWithWhereWithoutUSUARIOInput | USUARIO_CHAROLAUpdateManyWithWhereWithoutUSUARIOInput[]
    deleteMany?: USUARIO_CHAROLAScalarWhereInput | USUARIO_CHAROLAScalarWhereInput[]
  }

  export type ADMINISTRADORUncheckedUpdateManyWithoutUSUARIONestedInput = {
    create?: XOR<ADMINISTRADORCreateWithoutUSUARIOInput, ADMINISTRADORUncheckedCreateWithoutUSUARIOInput> | ADMINISTRADORCreateWithoutUSUARIOInput[] | ADMINISTRADORUncheckedCreateWithoutUSUARIOInput[]
    connectOrCreate?: ADMINISTRADORCreateOrConnectWithoutUSUARIOInput | ADMINISTRADORCreateOrConnectWithoutUSUARIOInput[]
    upsert?: ADMINISTRADORUpsertWithWhereUniqueWithoutUSUARIOInput | ADMINISTRADORUpsertWithWhereUniqueWithoutUSUARIOInput[]
    createMany?: ADMINISTRADORCreateManyUSUARIOInputEnvelope
    set?: ADMINISTRADORWhereUniqueInput | ADMINISTRADORWhereUniqueInput[]
    disconnect?: ADMINISTRADORWhereUniqueInput | ADMINISTRADORWhereUniqueInput[]
    delete?: ADMINISTRADORWhereUniqueInput | ADMINISTRADORWhereUniqueInput[]
    connect?: ADMINISTRADORWhereUniqueInput | ADMINISTRADORWhereUniqueInput[]
    update?: ADMINISTRADORUpdateWithWhereUniqueWithoutUSUARIOInput | ADMINISTRADORUpdateWithWhereUniqueWithoutUSUARIOInput[]
    updateMany?: ADMINISTRADORUpdateManyWithWhereWithoutUSUARIOInput | ADMINISTRADORUpdateManyWithWhereWithoutUSUARIOInput[]
    deleteMany?: ADMINISTRADORScalarWhereInput | ADMINISTRADORScalarWhereInput[]
  }

  export type USUARIO_CHAROLAUncheckedUpdateManyWithoutUSUARIONestedInput = {
    create?: XOR<USUARIO_CHAROLACreateWithoutUSUARIOInput, USUARIO_CHAROLAUncheckedCreateWithoutUSUARIOInput> | USUARIO_CHAROLACreateWithoutUSUARIOInput[] | USUARIO_CHAROLAUncheckedCreateWithoutUSUARIOInput[]
    connectOrCreate?: USUARIO_CHAROLACreateOrConnectWithoutUSUARIOInput | USUARIO_CHAROLACreateOrConnectWithoutUSUARIOInput[]
    upsert?: USUARIO_CHAROLAUpsertWithWhereUniqueWithoutUSUARIOInput | USUARIO_CHAROLAUpsertWithWhereUniqueWithoutUSUARIOInput[]
    createMany?: USUARIO_CHAROLACreateManyUSUARIOInputEnvelope
    set?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    disconnect?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    delete?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    connect?: USUARIO_CHAROLAWhereUniqueInput | USUARIO_CHAROLAWhereUniqueInput[]
    update?: USUARIO_CHAROLAUpdateWithWhereUniqueWithoutUSUARIOInput | USUARIO_CHAROLAUpdateWithWhereUniqueWithoutUSUARIOInput[]
    updateMany?: USUARIO_CHAROLAUpdateManyWithWhereWithoutUSUARIOInput | USUARIO_CHAROLAUpdateManyWithWhereWithoutUSUARIOInput[]
    deleteMany?: USUARIO_CHAROLAScalarWhereInput | USUARIO_CHAROLAScalarWhereInput[]
  }

  export type USUARIOCreateNestedOneWithoutUSUARIO_CHAROLAInput = {
    create?: XOR<USUARIOCreateWithoutUSUARIO_CHAROLAInput, USUARIOUncheckedCreateWithoutUSUARIO_CHAROLAInput>
    connectOrCreate?: USUARIOCreateOrConnectWithoutUSUARIO_CHAROLAInput
    connect?: USUARIOWhereUniqueInput
  }

  export type CHAROLACreateNestedOneWithoutUSUARIO_CHAROLAInput = {
    create?: XOR<CHAROLACreateWithoutUSUARIO_CHAROLAInput, CHAROLAUncheckedCreateWithoutUSUARIO_CHAROLAInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutUSUARIO_CHAROLAInput
    connect?: CHAROLAWhereUniqueInput
  }

  export type USUARIOUpdateOneRequiredWithoutUSUARIO_CHAROLANestedInput = {
    create?: XOR<USUARIOCreateWithoutUSUARIO_CHAROLAInput, USUARIOUncheckedCreateWithoutUSUARIO_CHAROLAInput>
    connectOrCreate?: USUARIOCreateOrConnectWithoutUSUARIO_CHAROLAInput
    upsert?: USUARIOUpsertWithoutUSUARIO_CHAROLAInput
    connect?: USUARIOWhereUniqueInput
    update?: XOR<XOR<USUARIOUpdateToOneWithWhereWithoutUSUARIO_CHAROLAInput, USUARIOUpdateWithoutUSUARIO_CHAROLAInput>, USUARIOUncheckedUpdateWithoutUSUARIO_CHAROLAInput>
  }

  export type CHAROLAUpdateOneRequiredWithoutUSUARIO_CHAROLANestedInput = {
    create?: XOR<CHAROLACreateWithoutUSUARIO_CHAROLAInput, CHAROLAUncheckedCreateWithoutUSUARIO_CHAROLAInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutUSUARIO_CHAROLAInput
    upsert?: CHAROLAUpsertWithoutUSUARIO_CHAROLAInput
    connect?: CHAROLAWhereUniqueInput
    update?: XOR<XOR<CHAROLAUpdateToOneWithWhereWithoutUSUARIO_CHAROLAInput, CHAROLAUpdateWithoutUSUARIO_CHAROLAInput>, CHAROLAUncheckedUpdateWithoutUSUARIO_CHAROLAInput>
  }

  export type CHAROLACreateNestedOneWithoutCHAROLA_FRASInput = {
    create?: XOR<CHAROLACreateWithoutCHAROLA_FRASInput, CHAROLAUncheckedCreateWithoutCHAROLA_FRASInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutCHAROLA_FRASInput
    connect?: CHAROLAWhereUniqueInput
  }

  export type FRASCreateNestedOneWithoutCHAROLA_FRASInput = {
    create?: XOR<FRASCreateWithoutCHAROLA_FRASInput, FRASUncheckedCreateWithoutCHAROLA_FRASInput>
    connectOrCreate?: FRASCreateOrConnectWithoutCHAROLA_FRASInput
    connect?: FRASWhereUniqueInput
  }

  export type CHAROLAUpdateOneRequiredWithoutCHAROLA_FRASNestedInput = {
    create?: XOR<CHAROLACreateWithoutCHAROLA_FRASInput, CHAROLAUncheckedCreateWithoutCHAROLA_FRASInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutCHAROLA_FRASInput
    upsert?: CHAROLAUpsertWithoutCHAROLA_FRASInput
    connect?: CHAROLAWhereUniqueInput
    update?: XOR<XOR<CHAROLAUpdateToOneWithWhereWithoutCHAROLA_FRASInput, CHAROLAUpdateWithoutCHAROLA_FRASInput>, CHAROLAUncheckedUpdateWithoutCHAROLA_FRASInput>
  }

  export type FRASUpdateOneRequiredWithoutCHAROLA_FRASNestedInput = {
    create?: XOR<FRASCreateWithoutCHAROLA_FRASInput, FRASUncheckedCreateWithoutCHAROLA_FRASInput>
    connectOrCreate?: FRASCreateOrConnectWithoutCHAROLA_FRASInput
    upsert?: FRASUpsertWithoutCHAROLA_FRASInput
    connect?: FRASWhereUniqueInput
    update?: XOR<XOR<FRASUpdateToOneWithWhereWithoutCHAROLA_FRASInput, FRASUpdateWithoutCHAROLA_FRASInput>, FRASUncheckedUpdateWithoutCHAROLA_FRASInput>
  }

  export type CHAROLACreateNestedOneWithoutCHAROLA_PUPAInput = {
    create?: XOR<CHAROLACreateWithoutCHAROLA_PUPAInput, CHAROLAUncheckedCreateWithoutCHAROLA_PUPAInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutCHAROLA_PUPAInput
    connect?: CHAROLAWhereUniqueInput
  }

  export type PUPACreateNestedOneWithoutCHAROLA_PUPAInput = {
    create?: XOR<PUPACreateWithoutCHAROLA_PUPAInput, PUPAUncheckedCreateWithoutCHAROLA_PUPAInput>
    connectOrCreate?: PUPACreateOrConnectWithoutCHAROLA_PUPAInput
    connect?: PUPAWhereUniqueInput
  }

  export type CHAROLAUpdateOneRequiredWithoutCHAROLA_PUPANestedInput = {
    create?: XOR<CHAROLACreateWithoutCHAROLA_PUPAInput, CHAROLAUncheckedCreateWithoutCHAROLA_PUPAInput>
    connectOrCreate?: CHAROLACreateOrConnectWithoutCHAROLA_PUPAInput
    upsert?: CHAROLAUpsertWithoutCHAROLA_PUPAInput
    connect?: CHAROLAWhereUniqueInput
    update?: XOR<XOR<CHAROLAUpdateToOneWithWhereWithoutCHAROLA_PUPAInput, CHAROLAUpdateWithoutCHAROLA_PUPAInput>, CHAROLAUncheckedUpdateWithoutCHAROLA_PUPAInput>
  }

  export type PUPAUpdateOneRequiredWithoutCHAROLA_PUPANestedInput = {
    create?: XOR<PUPACreateWithoutCHAROLA_PUPAInput, PUPAUncheckedCreateWithoutCHAROLA_PUPAInput>
    connectOrCreate?: PUPACreateOrConnectWithoutCHAROLA_PUPAInput
    upsert?: PUPAUpsertWithoutCHAROLA_PUPAInput
    connect?: PUPAWhereUniqueInput
    update?: XOR<XOR<PUPAUpdateToOneWithWhereWithoutCHAROLA_PUPAInput, PUPAUpdateWithoutCHAROLA_PUPAInput>, PUPAUncheckedUpdateWithoutCHAROLA_PUPAInput>
  }

  export type CHAROLA_PUPACreateNestedManyWithoutPUPAInput = {
    create?: XOR<CHAROLA_PUPACreateWithoutPUPAInput, CHAROLA_PUPAUncheckedCreateWithoutPUPAInput> | CHAROLA_PUPACreateWithoutPUPAInput[] | CHAROLA_PUPAUncheckedCreateWithoutPUPAInput[]
    connectOrCreate?: CHAROLA_PUPACreateOrConnectWithoutPUPAInput | CHAROLA_PUPACreateOrConnectWithoutPUPAInput[]
    createMany?: CHAROLA_PUPACreateManyPUPAInputEnvelope
    connect?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
  }

  export type CHAROLA_PUPAUncheckedCreateNestedManyWithoutPUPAInput = {
    create?: XOR<CHAROLA_PUPACreateWithoutPUPAInput, CHAROLA_PUPAUncheckedCreateWithoutPUPAInput> | CHAROLA_PUPACreateWithoutPUPAInput[] | CHAROLA_PUPAUncheckedCreateWithoutPUPAInput[]
    connectOrCreate?: CHAROLA_PUPACreateOrConnectWithoutPUPAInput | CHAROLA_PUPACreateOrConnectWithoutPUPAInput[]
    createMany?: CHAROLA_PUPACreateManyPUPAInputEnvelope
    connect?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
  }

  export type CHAROLA_PUPAUpdateManyWithoutPUPANestedInput = {
    create?: XOR<CHAROLA_PUPACreateWithoutPUPAInput, CHAROLA_PUPAUncheckedCreateWithoutPUPAInput> | CHAROLA_PUPACreateWithoutPUPAInput[] | CHAROLA_PUPAUncheckedCreateWithoutPUPAInput[]
    connectOrCreate?: CHAROLA_PUPACreateOrConnectWithoutPUPAInput | CHAROLA_PUPACreateOrConnectWithoutPUPAInput[]
    upsert?: CHAROLA_PUPAUpsertWithWhereUniqueWithoutPUPAInput | CHAROLA_PUPAUpsertWithWhereUniqueWithoutPUPAInput[]
    createMany?: CHAROLA_PUPACreateManyPUPAInputEnvelope
    set?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    disconnect?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    delete?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    connect?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    update?: CHAROLA_PUPAUpdateWithWhereUniqueWithoutPUPAInput | CHAROLA_PUPAUpdateWithWhereUniqueWithoutPUPAInput[]
    updateMany?: CHAROLA_PUPAUpdateManyWithWhereWithoutPUPAInput | CHAROLA_PUPAUpdateManyWithWhereWithoutPUPAInput[]
    deleteMany?: CHAROLA_PUPAScalarWhereInput | CHAROLA_PUPAScalarWhereInput[]
  }

  export type CHAROLA_PUPAUncheckedUpdateManyWithoutPUPANestedInput = {
    create?: XOR<CHAROLA_PUPACreateWithoutPUPAInput, CHAROLA_PUPAUncheckedCreateWithoutPUPAInput> | CHAROLA_PUPACreateWithoutPUPAInput[] | CHAROLA_PUPAUncheckedCreateWithoutPUPAInput[]
    connectOrCreate?: CHAROLA_PUPACreateOrConnectWithoutPUPAInput | CHAROLA_PUPACreateOrConnectWithoutPUPAInput[]
    upsert?: CHAROLA_PUPAUpsertWithWhereUniqueWithoutPUPAInput | CHAROLA_PUPAUpsertWithWhereUniqueWithoutPUPAInput[]
    createMany?: CHAROLA_PUPACreateManyPUPAInputEnvelope
    set?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    disconnect?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    delete?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    connect?: CHAROLA_PUPAWhereUniqueInput | CHAROLA_PUPAWhereUniqueInput[]
    update?: CHAROLA_PUPAUpdateWithWhereUniqueWithoutPUPAInput | CHAROLA_PUPAUpdateWithWhereUniqueWithoutPUPAInput[]
    updateMany?: CHAROLA_PUPAUpdateManyWithWhereWithoutPUPAInput | CHAROLA_PUPAUpdateManyWithWhereWithoutPUPAInput[]
    deleteMany?: CHAROLA_PUPAScalarWhereInput | CHAROLA_PUPAScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type USUARIOCreateWithoutADMINISTRADORInput = {
    user: string
    contrasena: string
    nombre: string
    apellido_m?: string | null
    apellido_p?: string | null
    USUARIO_CHAROLA?: USUARIO_CHAROLACreateNestedManyWithoutUSUARIOInput
  }

  export type USUARIOUncheckedCreateWithoutADMINISTRADORInput = {
    usuarioId?: number
    user: string
    contrasena: string
    nombre: string
    apellido_m?: string | null
    apellido_p?: string | null
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedCreateNestedManyWithoutUSUARIOInput
  }

  export type USUARIOCreateOrConnectWithoutADMINISTRADORInput = {
    where: USUARIOWhereUniqueInput
    create: XOR<USUARIOCreateWithoutADMINISTRADORInput, USUARIOUncheckedCreateWithoutADMINISTRADORInput>
  }

  export type USUARIOUpsertWithoutADMINISTRADORInput = {
    update: XOR<USUARIOUpdateWithoutADMINISTRADORInput, USUARIOUncheckedUpdateWithoutADMINISTRADORInput>
    create: XOR<USUARIOCreateWithoutADMINISTRADORInput, USUARIOUncheckedCreateWithoutADMINISTRADORInput>
    where?: USUARIOWhereInput
  }

  export type USUARIOUpdateToOneWithWhereWithoutADMINISTRADORInput = {
    where?: USUARIOWhereInput
    data: XOR<USUARIOUpdateWithoutADMINISTRADORInput, USUARIOUncheckedUpdateWithoutADMINISTRADORInput>
  }

  export type USUARIOUpdateWithoutADMINISTRADORInput = {
    user?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_m?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_p?: NullableStringFieldUpdateOperationsInput | string | null
    USUARIO_CHAROLA?: USUARIO_CHAROLAUpdateManyWithoutUSUARIONestedInput
  }

  export type USUARIOUncheckedUpdateWithoutADMINISTRADORInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_m?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_p?: NullableStringFieldUpdateOperationsInput | string | null
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedUpdateManyWithoutUSUARIONestedInput
  }

  export type CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA: CHAROLACreateNestedOneWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
  }

  export type CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    charolaAncestro: number
  }

  export type CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    where: CHAROLA_CHAROLAWhereUniqueInput
    create: XOR<CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput>
  }

  export type CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInputEnvelope = {
    data: CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput | CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput[]
    skipDuplicates?: boolean
  }

  export type CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA: CHAROLACreateNestedOneWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
  }

  export type CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    charolaHija: number
  }

  export type CHAROLA_CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    where: CHAROLA_CHAROLAWhereUniqueInput
    create: XOR<CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput>
  }

  export type CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInputEnvelope = {
    data: CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput | CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput[]
    skipDuplicates?: boolean
  }

  export type CHAROLA_COMIDACreateWithoutCHAROLAInput = {
    cantidadOtorgada: number
    COMIDA?: COMIDACreateNestedOneWithoutCHAROLA_COMIDAInput
  }

  export type CHAROLA_COMIDAUncheckedCreateWithoutCHAROLAInput = {
    id?: number
    comidaId?: number | null
    cantidadOtorgada: number
  }

  export type CHAROLA_COMIDACreateOrConnectWithoutCHAROLAInput = {
    where: CHAROLA_COMIDAWhereUniqueInput
    create: XOR<CHAROLA_COMIDACreateWithoutCHAROLAInput, CHAROLA_COMIDAUncheckedCreateWithoutCHAROLAInput>
  }

  export type CHAROLA_COMIDACreateManyCHAROLAInputEnvelope = {
    data: CHAROLA_COMIDACreateManyCHAROLAInput | CHAROLA_COMIDACreateManyCHAROLAInput[]
    skipDuplicates?: boolean
  }

  export type CHAROLA_FRASCreateWithoutCHAROLAInput = {
    FRAS: FRASCreateNestedOneWithoutCHAROLA_FRASInput
  }

  export type CHAROLA_FRASUncheckedCreateWithoutCHAROLAInput = {
    frasId: number
  }

  export type CHAROLA_FRASCreateOrConnectWithoutCHAROLAInput = {
    where: CHAROLA_FRASWhereUniqueInput
    create: XOR<CHAROLA_FRASCreateWithoutCHAROLAInput, CHAROLA_FRASUncheckedCreateWithoutCHAROLAInput>
  }

  export type CHAROLA_FRASCreateManyCHAROLAInputEnvelope = {
    data: CHAROLA_FRASCreateManyCHAROLAInput | CHAROLA_FRASCreateManyCHAROLAInput[]
    skipDuplicates?: boolean
  }

  export type CHAROLA_HIDRATACIONCreateWithoutCHAROLAInput = {
    cantidadOtorgada: number
    HIDRATACION?: HIDRATACIONCreateNestedOneWithoutCHAROLA_HIDRATACIONInput
  }

  export type CHAROLA_HIDRATACIONUncheckedCreateWithoutCHAROLAInput = {
    id?: number
    hidratacionId?: number | null
    cantidadOtorgada: number
  }

  export type CHAROLA_HIDRATACIONCreateOrConnectWithoutCHAROLAInput = {
    where: CHAROLA_HIDRATACIONWhereUniqueInput
    create: XOR<CHAROLA_HIDRATACIONCreateWithoutCHAROLAInput, CHAROLA_HIDRATACIONUncheckedCreateWithoutCHAROLAInput>
  }

  export type CHAROLA_HIDRATACIONCreateManyCHAROLAInputEnvelope = {
    data: CHAROLA_HIDRATACIONCreateManyCHAROLAInput | CHAROLA_HIDRATACIONCreateManyCHAROLAInput[]
    skipDuplicates?: boolean
  }

  export type CHAROLA_PUPACreateWithoutCHAROLAInput = {
    PUPA: PUPACreateNestedOneWithoutCHAROLA_PUPAInput
  }

  export type CHAROLA_PUPAUncheckedCreateWithoutCHAROLAInput = {
    pupaId: number
  }

  export type CHAROLA_PUPACreateOrConnectWithoutCHAROLAInput = {
    where: CHAROLA_PUPAWhereUniqueInput
    create: XOR<CHAROLA_PUPACreateWithoutCHAROLAInput, CHAROLA_PUPAUncheckedCreateWithoutCHAROLAInput>
  }

  export type CHAROLA_PUPACreateManyCHAROLAInputEnvelope = {
    data: CHAROLA_PUPACreateManyCHAROLAInput | CHAROLA_PUPACreateManyCHAROLAInput[]
    skipDuplicates?: boolean
  }

  export type FRASCreateWithoutCHAROLAInput = {
    gramosGenerados: number
    CHAROLA_FRAS?: CHAROLA_FRASCreateNestedManyWithoutFRASInput
  }

  export type FRASUncheckedCreateWithoutCHAROLAInput = {
    frasId?: number
    gramosGenerados: number
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedCreateNestedManyWithoutFRASInput
  }

  export type FRASCreateOrConnectWithoutCHAROLAInput = {
    where: FRASWhereUniqueInput
    create: XOR<FRASCreateWithoutCHAROLAInput, FRASUncheckedCreateWithoutCHAROLAInput>
  }

  export type FRASCreateManyCHAROLAInputEnvelope = {
    data: FRASCreateManyCHAROLAInput | FRASCreateManyCHAROLAInput[]
    skipDuplicates?: boolean
  }

  export type USUARIO_CHAROLACreateWithoutCHAROLAInput = {
    USUARIO: USUARIOCreateNestedOneWithoutUSUARIO_CHAROLAInput
  }

  export type USUARIO_CHAROLAUncheckedCreateWithoutCHAROLAInput = {
    usuarioId: number
  }

  export type USUARIO_CHAROLACreateOrConnectWithoutCHAROLAInput = {
    where: USUARIO_CHAROLAWhereUniqueInput
    create: XOR<USUARIO_CHAROLACreateWithoutCHAROLAInput, USUARIO_CHAROLAUncheckedCreateWithoutCHAROLAInput>
  }

  export type USUARIO_CHAROLACreateManyCHAROLAInputEnvelope = {
    data: USUARIO_CHAROLACreateManyCHAROLAInput | USUARIO_CHAROLACreateManyCHAROLAInput[]
    skipDuplicates?: boolean
  }

  export type CHAROLA_CHAROLAUpsertWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    where: CHAROLA_CHAROLAWhereUniqueInput
    update: XOR<CHAROLA_CHAROLAUpdateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLA_CHAROLAUncheckedUpdateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput>
    create: XOR<CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput>
  }

  export type CHAROLA_CHAROLAUpdateWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    where: CHAROLA_CHAROLAWhereUniqueInput
    data: XOR<CHAROLA_CHAROLAUpdateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLA_CHAROLAUncheckedUpdateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput>
  }

  export type CHAROLA_CHAROLAUpdateManyWithWhereWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    where: CHAROLA_CHAROLAScalarWhereInput
    data: XOR<CHAROLA_CHAROLAUpdateManyMutationInput, CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput>
  }

  export type CHAROLA_CHAROLAScalarWhereInput = {
    AND?: CHAROLA_CHAROLAScalarWhereInput | CHAROLA_CHAROLAScalarWhereInput[]
    OR?: CHAROLA_CHAROLAScalarWhereInput[]
    NOT?: CHAROLA_CHAROLAScalarWhereInput | CHAROLA_CHAROLAScalarWhereInput[]
    charolaHija?: IntFilter<"CHAROLA_CHAROLA"> | number
    charolaAncestro?: IntFilter<"CHAROLA_CHAROLA"> | number
  }

  export type CHAROLA_CHAROLAUpsertWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    where: CHAROLA_CHAROLAWhereUniqueInput
    update: XOR<CHAROLA_CHAROLAUpdateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLA_CHAROLAUncheckedUpdateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput>
    create: XOR<CHAROLA_CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLA_CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput>
  }

  export type CHAROLA_CHAROLAUpdateWithWhereUniqueWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    where: CHAROLA_CHAROLAWhereUniqueInput
    data: XOR<CHAROLA_CHAROLAUpdateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLA_CHAROLAUncheckedUpdateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput>
  }

  export type CHAROLA_CHAROLAUpdateManyWithWhereWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    where: CHAROLA_CHAROLAScalarWhereInput
    data: XOR<CHAROLA_CHAROLAUpdateManyMutationInput, CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput>
  }

  export type CHAROLA_COMIDAUpsertWithWhereUniqueWithoutCHAROLAInput = {
    where: CHAROLA_COMIDAWhereUniqueInput
    update: XOR<CHAROLA_COMIDAUpdateWithoutCHAROLAInput, CHAROLA_COMIDAUncheckedUpdateWithoutCHAROLAInput>
    create: XOR<CHAROLA_COMIDACreateWithoutCHAROLAInput, CHAROLA_COMIDAUncheckedCreateWithoutCHAROLAInput>
  }

  export type CHAROLA_COMIDAUpdateWithWhereUniqueWithoutCHAROLAInput = {
    where: CHAROLA_COMIDAWhereUniqueInput
    data: XOR<CHAROLA_COMIDAUpdateWithoutCHAROLAInput, CHAROLA_COMIDAUncheckedUpdateWithoutCHAROLAInput>
  }

  export type CHAROLA_COMIDAUpdateManyWithWhereWithoutCHAROLAInput = {
    where: CHAROLA_COMIDAScalarWhereInput
    data: XOR<CHAROLA_COMIDAUpdateManyMutationInput, CHAROLA_COMIDAUncheckedUpdateManyWithoutCHAROLAInput>
  }

  export type CHAROLA_COMIDAScalarWhereInput = {
    AND?: CHAROLA_COMIDAScalarWhereInput | CHAROLA_COMIDAScalarWhereInput[]
    OR?: CHAROLA_COMIDAScalarWhereInput[]
    NOT?: CHAROLA_COMIDAScalarWhereInput | CHAROLA_COMIDAScalarWhereInput[]
    id?: IntFilter<"CHAROLA_COMIDA"> | number
    charolaId?: IntNullableFilter<"CHAROLA_COMIDA"> | number | null
    comidaId?: IntNullableFilter<"CHAROLA_COMIDA"> | number | null
    cantidadOtorgada?: FloatFilter<"CHAROLA_COMIDA"> | number
  }

  export type CHAROLA_FRASUpsertWithWhereUniqueWithoutCHAROLAInput = {
    where: CHAROLA_FRASWhereUniqueInput
    update: XOR<CHAROLA_FRASUpdateWithoutCHAROLAInput, CHAROLA_FRASUncheckedUpdateWithoutCHAROLAInput>
    create: XOR<CHAROLA_FRASCreateWithoutCHAROLAInput, CHAROLA_FRASUncheckedCreateWithoutCHAROLAInput>
  }

  export type CHAROLA_FRASUpdateWithWhereUniqueWithoutCHAROLAInput = {
    where: CHAROLA_FRASWhereUniqueInput
    data: XOR<CHAROLA_FRASUpdateWithoutCHAROLAInput, CHAROLA_FRASUncheckedUpdateWithoutCHAROLAInput>
  }

  export type CHAROLA_FRASUpdateManyWithWhereWithoutCHAROLAInput = {
    where: CHAROLA_FRASScalarWhereInput
    data: XOR<CHAROLA_FRASUpdateManyMutationInput, CHAROLA_FRASUncheckedUpdateManyWithoutCHAROLAInput>
  }

  export type CHAROLA_FRASScalarWhereInput = {
    AND?: CHAROLA_FRASScalarWhereInput | CHAROLA_FRASScalarWhereInput[]
    OR?: CHAROLA_FRASScalarWhereInput[]
    NOT?: CHAROLA_FRASScalarWhereInput | CHAROLA_FRASScalarWhereInput[]
    charolaId?: IntFilter<"CHAROLA_FRAS"> | number
    frasId?: IntFilter<"CHAROLA_FRAS"> | number
  }

  export type CHAROLA_HIDRATACIONUpsertWithWhereUniqueWithoutCHAROLAInput = {
    where: CHAROLA_HIDRATACIONWhereUniqueInput
    update: XOR<CHAROLA_HIDRATACIONUpdateWithoutCHAROLAInput, CHAROLA_HIDRATACIONUncheckedUpdateWithoutCHAROLAInput>
    create: XOR<CHAROLA_HIDRATACIONCreateWithoutCHAROLAInput, CHAROLA_HIDRATACIONUncheckedCreateWithoutCHAROLAInput>
  }

  export type CHAROLA_HIDRATACIONUpdateWithWhereUniqueWithoutCHAROLAInput = {
    where: CHAROLA_HIDRATACIONWhereUniqueInput
    data: XOR<CHAROLA_HIDRATACIONUpdateWithoutCHAROLAInput, CHAROLA_HIDRATACIONUncheckedUpdateWithoutCHAROLAInput>
  }

  export type CHAROLA_HIDRATACIONUpdateManyWithWhereWithoutCHAROLAInput = {
    where: CHAROLA_HIDRATACIONScalarWhereInput
    data: XOR<CHAROLA_HIDRATACIONUpdateManyMutationInput, CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutCHAROLAInput>
  }

  export type CHAROLA_HIDRATACIONScalarWhereInput = {
    AND?: CHAROLA_HIDRATACIONScalarWhereInput | CHAROLA_HIDRATACIONScalarWhereInput[]
    OR?: CHAROLA_HIDRATACIONScalarWhereInput[]
    NOT?: CHAROLA_HIDRATACIONScalarWhereInput | CHAROLA_HIDRATACIONScalarWhereInput[]
    id?: IntFilter<"CHAROLA_HIDRATACION"> | number
    charolaId?: IntNullableFilter<"CHAROLA_HIDRATACION"> | number | null
    hidratacionId?: IntNullableFilter<"CHAROLA_HIDRATACION"> | number | null
    cantidadOtorgada?: FloatFilter<"CHAROLA_HIDRATACION"> | number
  }

  export type CHAROLA_PUPAUpsertWithWhereUniqueWithoutCHAROLAInput = {
    where: CHAROLA_PUPAWhereUniqueInput
    update: XOR<CHAROLA_PUPAUpdateWithoutCHAROLAInput, CHAROLA_PUPAUncheckedUpdateWithoutCHAROLAInput>
    create: XOR<CHAROLA_PUPACreateWithoutCHAROLAInput, CHAROLA_PUPAUncheckedCreateWithoutCHAROLAInput>
  }

  export type CHAROLA_PUPAUpdateWithWhereUniqueWithoutCHAROLAInput = {
    where: CHAROLA_PUPAWhereUniqueInput
    data: XOR<CHAROLA_PUPAUpdateWithoutCHAROLAInput, CHAROLA_PUPAUncheckedUpdateWithoutCHAROLAInput>
  }

  export type CHAROLA_PUPAUpdateManyWithWhereWithoutCHAROLAInput = {
    where: CHAROLA_PUPAScalarWhereInput
    data: XOR<CHAROLA_PUPAUpdateManyMutationInput, CHAROLA_PUPAUncheckedUpdateManyWithoutCHAROLAInput>
  }

  export type CHAROLA_PUPAScalarWhereInput = {
    AND?: CHAROLA_PUPAScalarWhereInput | CHAROLA_PUPAScalarWhereInput[]
    OR?: CHAROLA_PUPAScalarWhereInput[]
    NOT?: CHAROLA_PUPAScalarWhereInput | CHAROLA_PUPAScalarWhereInput[]
    charolaId?: IntFilter<"CHAROLA_PUPA"> | number
    pupaId?: IntFilter<"CHAROLA_PUPA"> | number
  }

  export type FRASUpsertWithWhereUniqueWithoutCHAROLAInput = {
    where: FRASWhereUniqueInput
    update: XOR<FRASUpdateWithoutCHAROLAInput, FRASUncheckedUpdateWithoutCHAROLAInput>
    create: XOR<FRASCreateWithoutCHAROLAInput, FRASUncheckedCreateWithoutCHAROLAInput>
  }

  export type FRASUpdateWithWhereUniqueWithoutCHAROLAInput = {
    where: FRASWhereUniqueInput
    data: XOR<FRASUpdateWithoutCHAROLAInput, FRASUncheckedUpdateWithoutCHAROLAInput>
  }

  export type FRASUpdateManyWithWhereWithoutCHAROLAInput = {
    where: FRASScalarWhereInput
    data: XOR<FRASUpdateManyMutationInput, FRASUncheckedUpdateManyWithoutCHAROLAInput>
  }

  export type FRASScalarWhereInput = {
    AND?: FRASScalarWhereInput | FRASScalarWhereInput[]
    OR?: FRASScalarWhereInput[]
    NOT?: FRASScalarWhereInput | FRASScalarWhereInput[]
    frasId?: IntFilter<"FRAS"> | number
    gramosGenerados?: FloatFilter<"FRAS"> | number
    charolaId?: IntNullableFilter<"FRAS"> | number | null
  }

  export type USUARIO_CHAROLAUpsertWithWhereUniqueWithoutCHAROLAInput = {
    where: USUARIO_CHAROLAWhereUniqueInput
    update: XOR<USUARIO_CHAROLAUpdateWithoutCHAROLAInput, USUARIO_CHAROLAUncheckedUpdateWithoutCHAROLAInput>
    create: XOR<USUARIO_CHAROLACreateWithoutCHAROLAInput, USUARIO_CHAROLAUncheckedCreateWithoutCHAROLAInput>
  }

  export type USUARIO_CHAROLAUpdateWithWhereUniqueWithoutCHAROLAInput = {
    where: USUARIO_CHAROLAWhereUniqueInput
    data: XOR<USUARIO_CHAROLAUpdateWithoutCHAROLAInput, USUARIO_CHAROLAUncheckedUpdateWithoutCHAROLAInput>
  }

  export type USUARIO_CHAROLAUpdateManyWithWhereWithoutCHAROLAInput = {
    where: USUARIO_CHAROLAScalarWhereInput
    data: XOR<USUARIO_CHAROLAUpdateManyMutationInput, USUARIO_CHAROLAUncheckedUpdateManyWithoutCHAROLAInput>
  }

  export type USUARIO_CHAROLAScalarWhereInput = {
    AND?: USUARIO_CHAROLAScalarWhereInput | USUARIO_CHAROLAScalarWhereInput[]
    OR?: USUARIO_CHAROLAScalarWhereInput[]
    NOT?: USUARIO_CHAROLAScalarWhereInput | USUARIO_CHAROLAScalarWhereInput[]
    usuarioId?: IntFilter<"USUARIO_CHAROLA"> | number
    charolaId?: IntFilter<"USUARIO_CHAROLA"> | number
  }

  export type CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDACreateNestedManyWithoutCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPACreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLACreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    charolaId?: number
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedCreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedCreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    where: CHAROLAWhereUniqueInput
    create: XOR<CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput>
  }

  export type CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDACreateNestedManyWithoutCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPACreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLACreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    charolaId?: number
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedCreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedCreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLACreateOrConnectWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    where: CHAROLAWhereUniqueInput
    create: XOR<CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput>
  }

  export type CHAROLAUpsertWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    update: XOR<CHAROLAUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLAUncheckedUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput>
    create: XOR<CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput>
    where?: CHAROLAWhereInput
  }

  export type CHAROLAUpdateToOneWithWhereWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    where?: CHAROLAWhereInput
    data: XOR<CHAROLAUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput, CHAROLAUncheckedUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput>
  }

  export type CHAROLAUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUpdateManyWithoutCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUpdateManyWithoutCHAROLANestedInput
  }

  export type CHAROLAUncheckedUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedUpdateManyWithoutCHAROLANestedInput
  }

  export type CHAROLAUpsertWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    update: XOR<CHAROLAUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLAUncheckedUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput>
    create: XOR<CHAROLACreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLAUncheckedCreateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput>
    where?: CHAROLAWhereInput
  }

  export type CHAROLAUpdateToOneWithWhereWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    where?: CHAROLAWhereInput
    data: XOR<CHAROLAUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput, CHAROLAUncheckedUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput>
  }

  export type CHAROLAUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUpdateManyWithoutCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUpdateManyWithoutCHAROLANestedInput
  }

  export type CHAROLAUncheckedUpdateWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedUpdateManyWithoutCHAROLANestedInput
  }

  export type CHAROLACreateWithoutCHAROLA_COMIDAInput = {
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPACreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLACreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLAUncheckedCreateWithoutCHAROLA_COMIDAInput = {
    charolaId?: number
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedCreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedCreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLACreateOrConnectWithoutCHAROLA_COMIDAInput = {
    where: CHAROLAWhereUniqueInput
    create: XOR<CHAROLACreateWithoutCHAROLA_COMIDAInput, CHAROLAUncheckedCreateWithoutCHAROLA_COMIDAInput>
  }

  export type COMIDACreateWithoutCHAROLA_COMIDAInput = {
    nombre: string
    descripcion?: string | null
  }

  export type COMIDAUncheckedCreateWithoutCHAROLA_COMIDAInput = {
    comidaId?: number
    nombre: string
    descripcion?: string | null
  }

  export type COMIDACreateOrConnectWithoutCHAROLA_COMIDAInput = {
    where: COMIDAWhereUniqueInput
    create: XOR<COMIDACreateWithoutCHAROLA_COMIDAInput, COMIDAUncheckedCreateWithoutCHAROLA_COMIDAInput>
  }

  export type CHAROLAUpsertWithoutCHAROLA_COMIDAInput = {
    update: XOR<CHAROLAUpdateWithoutCHAROLA_COMIDAInput, CHAROLAUncheckedUpdateWithoutCHAROLA_COMIDAInput>
    create: XOR<CHAROLACreateWithoutCHAROLA_COMIDAInput, CHAROLAUncheckedCreateWithoutCHAROLA_COMIDAInput>
    where?: CHAROLAWhereInput
  }

  export type CHAROLAUpdateToOneWithWhereWithoutCHAROLA_COMIDAInput = {
    where?: CHAROLAWhereInput
    data: XOR<CHAROLAUpdateWithoutCHAROLA_COMIDAInput, CHAROLAUncheckedUpdateWithoutCHAROLA_COMIDAInput>
  }

  export type CHAROLAUpdateWithoutCHAROLA_COMIDAInput = {
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUpdateManyWithoutCHAROLANestedInput
  }

  export type CHAROLAUncheckedUpdateWithoutCHAROLA_COMIDAInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedUpdateManyWithoutCHAROLANestedInput
  }

  export type COMIDAUpsertWithoutCHAROLA_COMIDAInput = {
    update: XOR<COMIDAUpdateWithoutCHAROLA_COMIDAInput, COMIDAUncheckedUpdateWithoutCHAROLA_COMIDAInput>
    create: XOR<COMIDACreateWithoutCHAROLA_COMIDAInput, COMIDAUncheckedCreateWithoutCHAROLA_COMIDAInput>
    where?: COMIDAWhereInput
  }

  export type COMIDAUpdateToOneWithWhereWithoutCHAROLA_COMIDAInput = {
    where?: COMIDAWhereInput
    data: XOR<COMIDAUpdateWithoutCHAROLA_COMIDAInput, COMIDAUncheckedUpdateWithoutCHAROLA_COMIDAInput>
  }

  export type COMIDAUpdateWithoutCHAROLA_COMIDAInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type COMIDAUncheckedUpdateWithoutCHAROLA_COMIDAInput = {
    comidaId?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CHAROLACreateWithoutCHAROLA_HIDRATACIONInput = {
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDACreateNestedManyWithoutCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPACreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLACreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLAUncheckedCreateWithoutCHAROLA_HIDRATACIONInput = {
    charolaId?: number
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedCreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedCreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLACreateOrConnectWithoutCHAROLA_HIDRATACIONInput = {
    where: CHAROLAWhereUniqueInput
    create: XOR<CHAROLACreateWithoutCHAROLA_HIDRATACIONInput, CHAROLAUncheckedCreateWithoutCHAROLA_HIDRATACIONInput>
  }

  export type HIDRATACIONCreateWithoutCHAROLA_HIDRATACIONInput = {
    hidratacionId: number
    nombre?: string | null
    descripcion?: string | null
  }

  export type HIDRATACIONUncheckedCreateWithoutCHAROLA_HIDRATACIONInput = {
    hidratacionId: number
    nombre?: string | null
    descripcion?: string | null
  }

  export type HIDRATACIONCreateOrConnectWithoutCHAROLA_HIDRATACIONInput = {
    where: HIDRATACIONWhereUniqueInput
    create: XOR<HIDRATACIONCreateWithoutCHAROLA_HIDRATACIONInput, HIDRATACIONUncheckedCreateWithoutCHAROLA_HIDRATACIONInput>
  }

  export type CHAROLAUpsertWithoutCHAROLA_HIDRATACIONInput = {
    update: XOR<CHAROLAUpdateWithoutCHAROLA_HIDRATACIONInput, CHAROLAUncheckedUpdateWithoutCHAROLA_HIDRATACIONInput>
    create: XOR<CHAROLACreateWithoutCHAROLA_HIDRATACIONInput, CHAROLAUncheckedCreateWithoutCHAROLA_HIDRATACIONInput>
    where?: CHAROLAWhereInput
  }

  export type CHAROLAUpdateToOneWithWhereWithoutCHAROLA_HIDRATACIONInput = {
    where?: CHAROLAWhereInput
    data: XOR<CHAROLAUpdateWithoutCHAROLA_HIDRATACIONInput, CHAROLAUncheckedUpdateWithoutCHAROLA_HIDRATACIONInput>
  }

  export type CHAROLAUpdateWithoutCHAROLA_HIDRATACIONInput = {
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUpdateManyWithoutCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUpdateManyWithoutCHAROLANestedInput
  }

  export type CHAROLAUncheckedUpdateWithoutCHAROLA_HIDRATACIONInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedUpdateManyWithoutCHAROLANestedInput
  }

  export type HIDRATACIONUpsertWithoutCHAROLA_HIDRATACIONInput = {
    update: XOR<HIDRATACIONUpdateWithoutCHAROLA_HIDRATACIONInput, HIDRATACIONUncheckedUpdateWithoutCHAROLA_HIDRATACIONInput>
    create: XOR<HIDRATACIONCreateWithoutCHAROLA_HIDRATACIONInput, HIDRATACIONUncheckedCreateWithoutCHAROLA_HIDRATACIONInput>
    where?: HIDRATACIONWhereInput
  }

  export type HIDRATACIONUpdateToOneWithWhereWithoutCHAROLA_HIDRATACIONInput = {
    where?: HIDRATACIONWhereInput
    data: XOR<HIDRATACIONUpdateWithoutCHAROLA_HIDRATACIONInput, HIDRATACIONUncheckedUpdateWithoutCHAROLA_HIDRATACIONInput>
  }

  export type HIDRATACIONUpdateWithoutCHAROLA_HIDRATACIONInput = {
    hidratacionId?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HIDRATACIONUncheckedUpdateWithoutCHAROLA_HIDRATACIONInput = {
    hidratacionId?: IntFieldUpdateOperationsInput | number
    nombre?: NullableStringFieldUpdateOperationsInput | string | null
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CHAROLA_COMIDACreateWithoutCOMIDAInput = {
    cantidadOtorgada: number
    CHAROLA?: CHAROLACreateNestedOneWithoutCHAROLA_COMIDAInput
  }

  export type CHAROLA_COMIDAUncheckedCreateWithoutCOMIDAInput = {
    id?: number
    charolaId?: number | null
    cantidadOtorgada: number
  }

  export type CHAROLA_COMIDACreateOrConnectWithoutCOMIDAInput = {
    where: CHAROLA_COMIDAWhereUniqueInput
    create: XOR<CHAROLA_COMIDACreateWithoutCOMIDAInput, CHAROLA_COMIDAUncheckedCreateWithoutCOMIDAInput>
  }

  export type CHAROLA_COMIDACreateManyCOMIDAInputEnvelope = {
    data: CHAROLA_COMIDACreateManyCOMIDAInput | CHAROLA_COMIDACreateManyCOMIDAInput[]
    skipDuplicates?: boolean
  }

  export type CHAROLA_COMIDAUpsertWithWhereUniqueWithoutCOMIDAInput = {
    where: CHAROLA_COMIDAWhereUniqueInput
    update: XOR<CHAROLA_COMIDAUpdateWithoutCOMIDAInput, CHAROLA_COMIDAUncheckedUpdateWithoutCOMIDAInput>
    create: XOR<CHAROLA_COMIDACreateWithoutCOMIDAInput, CHAROLA_COMIDAUncheckedCreateWithoutCOMIDAInput>
  }

  export type CHAROLA_COMIDAUpdateWithWhereUniqueWithoutCOMIDAInput = {
    where: CHAROLA_COMIDAWhereUniqueInput
    data: XOR<CHAROLA_COMIDAUpdateWithoutCOMIDAInput, CHAROLA_COMIDAUncheckedUpdateWithoutCOMIDAInput>
  }

  export type CHAROLA_COMIDAUpdateManyWithWhereWithoutCOMIDAInput = {
    where: CHAROLA_COMIDAScalarWhereInput
    data: XOR<CHAROLA_COMIDAUpdateManyMutationInput, CHAROLA_COMIDAUncheckedUpdateManyWithoutCOMIDAInput>
  }

  export type CHAROLA_FRASCreateWithoutFRASInput = {
    CHAROLA: CHAROLACreateNestedOneWithoutCHAROLA_FRASInput
  }

  export type CHAROLA_FRASUncheckedCreateWithoutFRASInput = {
    charolaId: number
  }

  export type CHAROLA_FRASCreateOrConnectWithoutFRASInput = {
    where: CHAROLA_FRASWhereUniqueInput
    create: XOR<CHAROLA_FRASCreateWithoutFRASInput, CHAROLA_FRASUncheckedCreateWithoutFRASInput>
  }

  export type CHAROLA_FRASCreateManyFRASInputEnvelope = {
    data: CHAROLA_FRASCreateManyFRASInput | CHAROLA_FRASCreateManyFRASInput[]
    skipDuplicates?: boolean
  }

  export type CHAROLACreateWithoutFRASInput = {
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDACreateNestedManyWithoutCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPACreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLACreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLAUncheckedCreateWithoutFRASInput = {
    charolaId?: number
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedCreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLACreateOrConnectWithoutFRASInput = {
    where: CHAROLAWhereUniqueInput
    create: XOR<CHAROLACreateWithoutFRASInput, CHAROLAUncheckedCreateWithoutFRASInput>
  }

  export type CHAROLA_FRASUpsertWithWhereUniqueWithoutFRASInput = {
    where: CHAROLA_FRASWhereUniqueInput
    update: XOR<CHAROLA_FRASUpdateWithoutFRASInput, CHAROLA_FRASUncheckedUpdateWithoutFRASInput>
    create: XOR<CHAROLA_FRASCreateWithoutFRASInput, CHAROLA_FRASUncheckedCreateWithoutFRASInput>
  }

  export type CHAROLA_FRASUpdateWithWhereUniqueWithoutFRASInput = {
    where: CHAROLA_FRASWhereUniqueInput
    data: XOR<CHAROLA_FRASUpdateWithoutFRASInput, CHAROLA_FRASUncheckedUpdateWithoutFRASInput>
  }

  export type CHAROLA_FRASUpdateManyWithWhereWithoutFRASInput = {
    where: CHAROLA_FRASScalarWhereInput
    data: XOR<CHAROLA_FRASUpdateManyMutationInput, CHAROLA_FRASUncheckedUpdateManyWithoutFRASInput>
  }

  export type CHAROLAUpsertWithoutFRASInput = {
    update: XOR<CHAROLAUpdateWithoutFRASInput, CHAROLAUncheckedUpdateWithoutFRASInput>
    create: XOR<CHAROLACreateWithoutFRASInput, CHAROLAUncheckedCreateWithoutFRASInput>
    where?: CHAROLAWhereInput
  }

  export type CHAROLAUpdateToOneWithWhereWithoutFRASInput = {
    where?: CHAROLAWhereInput
    data: XOR<CHAROLAUpdateWithoutFRASInput, CHAROLAUncheckedUpdateWithoutFRASInput>
  }

  export type CHAROLAUpdateWithoutFRASInput = {
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUpdateManyWithoutCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUpdateManyWithoutCHAROLANestedInput
  }

  export type CHAROLAUncheckedUpdateWithoutFRASInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedUpdateManyWithoutCHAROLANestedInput
  }

  export type CHAROLA_HIDRATACIONCreateWithoutHIDRATACIONInput = {
    cantidadOtorgada: number
    CHAROLA?: CHAROLACreateNestedOneWithoutCHAROLA_HIDRATACIONInput
  }

  export type CHAROLA_HIDRATACIONUncheckedCreateWithoutHIDRATACIONInput = {
    id?: number
    charolaId?: number | null
    cantidadOtorgada: number
  }

  export type CHAROLA_HIDRATACIONCreateOrConnectWithoutHIDRATACIONInput = {
    where: CHAROLA_HIDRATACIONWhereUniqueInput
    create: XOR<CHAROLA_HIDRATACIONCreateWithoutHIDRATACIONInput, CHAROLA_HIDRATACIONUncheckedCreateWithoutHIDRATACIONInput>
  }

  export type CHAROLA_HIDRATACIONCreateManyHIDRATACIONInputEnvelope = {
    data: CHAROLA_HIDRATACIONCreateManyHIDRATACIONInput | CHAROLA_HIDRATACIONCreateManyHIDRATACIONInput[]
    skipDuplicates?: boolean
  }

  export type CHAROLA_HIDRATACIONUpsertWithWhereUniqueWithoutHIDRATACIONInput = {
    where: CHAROLA_HIDRATACIONWhereUniqueInput
    update: XOR<CHAROLA_HIDRATACIONUpdateWithoutHIDRATACIONInput, CHAROLA_HIDRATACIONUncheckedUpdateWithoutHIDRATACIONInput>
    create: XOR<CHAROLA_HIDRATACIONCreateWithoutHIDRATACIONInput, CHAROLA_HIDRATACIONUncheckedCreateWithoutHIDRATACIONInput>
  }

  export type CHAROLA_HIDRATACIONUpdateWithWhereUniqueWithoutHIDRATACIONInput = {
    where: CHAROLA_HIDRATACIONWhereUniqueInput
    data: XOR<CHAROLA_HIDRATACIONUpdateWithoutHIDRATACIONInput, CHAROLA_HIDRATACIONUncheckedUpdateWithoutHIDRATACIONInput>
  }

  export type CHAROLA_HIDRATACIONUpdateManyWithWhereWithoutHIDRATACIONInput = {
    where: CHAROLA_HIDRATACIONScalarWhereInput
    data: XOR<CHAROLA_HIDRATACIONUpdateManyMutationInput, CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutHIDRATACIONInput>
  }

  export type ADMINISTRADORCreateWithoutUSUARIOInput = {

  }

  export type ADMINISTRADORUncheckedCreateWithoutUSUARIOInput = {
    adminId?: number
  }

  export type ADMINISTRADORCreateOrConnectWithoutUSUARIOInput = {
    where: ADMINISTRADORWhereUniqueInput
    create: XOR<ADMINISTRADORCreateWithoutUSUARIOInput, ADMINISTRADORUncheckedCreateWithoutUSUARIOInput>
  }

  export type ADMINISTRADORCreateManyUSUARIOInputEnvelope = {
    data: ADMINISTRADORCreateManyUSUARIOInput | ADMINISTRADORCreateManyUSUARIOInput[]
    skipDuplicates?: boolean
  }

  export type USUARIO_CHAROLACreateWithoutUSUARIOInput = {
    CHAROLA: CHAROLACreateNestedOneWithoutUSUARIO_CHAROLAInput
  }

  export type USUARIO_CHAROLAUncheckedCreateWithoutUSUARIOInput = {
    charolaId: number
  }

  export type USUARIO_CHAROLACreateOrConnectWithoutUSUARIOInput = {
    where: USUARIO_CHAROLAWhereUniqueInput
    create: XOR<USUARIO_CHAROLACreateWithoutUSUARIOInput, USUARIO_CHAROLAUncheckedCreateWithoutUSUARIOInput>
  }

  export type USUARIO_CHAROLACreateManyUSUARIOInputEnvelope = {
    data: USUARIO_CHAROLACreateManyUSUARIOInput | USUARIO_CHAROLACreateManyUSUARIOInput[]
    skipDuplicates?: boolean
  }

  export type ADMINISTRADORUpsertWithWhereUniqueWithoutUSUARIOInput = {
    where: ADMINISTRADORWhereUniqueInput
    update: XOR<ADMINISTRADORUpdateWithoutUSUARIOInput, ADMINISTRADORUncheckedUpdateWithoutUSUARIOInput>
    create: XOR<ADMINISTRADORCreateWithoutUSUARIOInput, ADMINISTRADORUncheckedCreateWithoutUSUARIOInput>
  }

  export type ADMINISTRADORUpdateWithWhereUniqueWithoutUSUARIOInput = {
    where: ADMINISTRADORWhereUniqueInput
    data: XOR<ADMINISTRADORUpdateWithoutUSUARIOInput, ADMINISTRADORUncheckedUpdateWithoutUSUARIOInput>
  }

  export type ADMINISTRADORUpdateManyWithWhereWithoutUSUARIOInput = {
    where: ADMINISTRADORScalarWhereInput
    data: XOR<ADMINISTRADORUpdateManyMutationInput, ADMINISTRADORUncheckedUpdateManyWithoutUSUARIOInput>
  }

  export type ADMINISTRADORScalarWhereInput = {
    AND?: ADMINISTRADORScalarWhereInput | ADMINISTRADORScalarWhereInput[]
    OR?: ADMINISTRADORScalarWhereInput[]
    NOT?: ADMINISTRADORScalarWhereInput | ADMINISTRADORScalarWhereInput[]
    adminId?: IntFilter<"ADMINISTRADOR"> | number
    usuarioId?: IntNullableFilter<"ADMINISTRADOR"> | number | null
  }

  export type USUARIO_CHAROLAUpsertWithWhereUniqueWithoutUSUARIOInput = {
    where: USUARIO_CHAROLAWhereUniqueInput
    update: XOR<USUARIO_CHAROLAUpdateWithoutUSUARIOInput, USUARIO_CHAROLAUncheckedUpdateWithoutUSUARIOInput>
    create: XOR<USUARIO_CHAROLACreateWithoutUSUARIOInput, USUARIO_CHAROLAUncheckedCreateWithoutUSUARIOInput>
  }

  export type USUARIO_CHAROLAUpdateWithWhereUniqueWithoutUSUARIOInput = {
    where: USUARIO_CHAROLAWhereUniqueInput
    data: XOR<USUARIO_CHAROLAUpdateWithoutUSUARIOInput, USUARIO_CHAROLAUncheckedUpdateWithoutUSUARIOInput>
  }

  export type USUARIO_CHAROLAUpdateManyWithWhereWithoutUSUARIOInput = {
    where: USUARIO_CHAROLAScalarWhereInput
    data: XOR<USUARIO_CHAROLAUpdateManyMutationInput, USUARIO_CHAROLAUncheckedUpdateManyWithoutUSUARIOInput>
  }

  export type USUARIOCreateWithoutUSUARIO_CHAROLAInput = {
    user: string
    contrasena: string
    nombre: string
    apellido_m?: string | null
    apellido_p?: string | null
    ADMINISTRADOR?: ADMINISTRADORCreateNestedManyWithoutUSUARIOInput
  }

  export type USUARIOUncheckedCreateWithoutUSUARIO_CHAROLAInput = {
    usuarioId?: number
    user: string
    contrasena: string
    nombre: string
    apellido_m?: string | null
    apellido_p?: string | null
    ADMINISTRADOR?: ADMINISTRADORUncheckedCreateNestedManyWithoutUSUARIOInput
  }

  export type USUARIOCreateOrConnectWithoutUSUARIO_CHAROLAInput = {
    where: USUARIOWhereUniqueInput
    create: XOR<USUARIOCreateWithoutUSUARIO_CHAROLAInput, USUARIOUncheckedCreateWithoutUSUARIO_CHAROLAInput>
  }

  export type CHAROLACreateWithoutUSUARIO_CHAROLAInput = {
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDACreateNestedManyWithoutCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPACreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASCreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLAUncheckedCreateWithoutUSUARIO_CHAROLAInput = {
    charolaId?: number
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedCreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASUncheckedCreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLACreateOrConnectWithoutUSUARIO_CHAROLAInput = {
    where: CHAROLAWhereUniqueInput
    create: XOR<CHAROLACreateWithoutUSUARIO_CHAROLAInput, CHAROLAUncheckedCreateWithoutUSUARIO_CHAROLAInput>
  }

  export type USUARIOUpsertWithoutUSUARIO_CHAROLAInput = {
    update: XOR<USUARIOUpdateWithoutUSUARIO_CHAROLAInput, USUARIOUncheckedUpdateWithoutUSUARIO_CHAROLAInput>
    create: XOR<USUARIOCreateWithoutUSUARIO_CHAROLAInput, USUARIOUncheckedCreateWithoutUSUARIO_CHAROLAInput>
    where?: USUARIOWhereInput
  }

  export type USUARIOUpdateToOneWithWhereWithoutUSUARIO_CHAROLAInput = {
    where?: USUARIOWhereInput
    data: XOR<USUARIOUpdateWithoutUSUARIO_CHAROLAInput, USUARIOUncheckedUpdateWithoutUSUARIO_CHAROLAInput>
  }

  export type USUARIOUpdateWithoutUSUARIO_CHAROLAInput = {
    user?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_m?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_p?: NullableStringFieldUpdateOperationsInput | string | null
    ADMINISTRADOR?: ADMINISTRADORUpdateManyWithoutUSUARIONestedInput
  }

  export type USUARIOUncheckedUpdateWithoutUSUARIO_CHAROLAInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
    user?: StringFieldUpdateOperationsInput | string
    contrasena?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido_m?: NullableStringFieldUpdateOperationsInput | string | null
    apellido_p?: NullableStringFieldUpdateOperationsInput | string | null
    ADMINISTRADOR?: ADMINISTRADORUncheckedUpdateManyWithoutUSUARIONestedInput
  }

  export type CHAROLAUpsertWithoutUSUARIO_CHAROLAInput = {
    update: XOR<CHAROLAUpdateWithoutUSUARIO_CHAROLAInput, CHAROLAUncheckedUpdateWithoutUSUARIO_CHAROLAInput>
    create: XOR<CHAROLACreateWithoutUSUARIO_CHAROLAInput, CHAROLAUncheckedCreateWithoutUSUARIO_CHAROLAInput>
    where?: CHAROLAWhereInput
  }

  export type CHAROLAUpdateToOneWithWhereWithoutUSUARIO_CHAROLAInput = {
    where?: CHAROLAWhereInput
    data: XOR<CHAROLAUpdateWithoutUSUARIO_CHAROLAInput, CHAROLAUncheckedUpdateWithoutUSUARIO_CHAROLAInput>
  }

  export type CHAROLAUpdateWithoutUSUARIO_CHAROLAInput = {
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUpdateManyWithoutCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUpdateManyWithoutCHAROLANestedInput
  }

  export type CHAROLAUncheckedUpdateWithoutUSUARIO_CHAROLAInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUncheckedUpdateManyWithoutCHAROLANestedInput
  }

  export type CHAROLACreateWithoutCHAROLA_FRASInput = {
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDACreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPACreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLACreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLAUncheckedCreateWithoutCHAROLA_FRASInput = {
    charolaId?: number
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedCreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedCreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLACreateOrConnectWithoutCHAROLA_FRASInput = {
    where: CHAROLAWhereUniqueInput
    create: XOR<CHAROLACreateWithoutCHAROLA_FRASInput, CHAROLAUncheckedCreateWithoutCHAROLA_FRASInput>
  }

  export type FRASCreateWithoutCHAROLA_FRASInput = {
    gramosGenerados: number
    CHAROLA?: CHAROLACreateNestedOneWithoutFRASInput
  }

  export type FRASUncheckedCreateWithoutCHAROLA_FRASInput = {
    frasId?: number
    gramosGenerados: number
    charolaId?: number | null
  }

  export type FRASCreateOrConnectWithoutCHAROLA_FRASInput = {
    where: FRASWhereUniqueInput
    create: XOR<FRASCreateWithoutCHAROLA_FRASInput, FRASUncheckedCreateWithoutCHAROLA_FRASInput>
  }

  export type CHAROLAUpsertWithoutCHAROLA_FRASInput = {
    update: XOR<CHAROLAUpdateWithoutCHAROLA_FRASInput, CHAROLAUncheckedUpdateWithoutCHAROLA_FRASInput>
    create: XOR<CHAROLACreateWithoutCHAROLA_FRASInput, CHAROLAUncheckedCreateWithoutCHAROLA_FRASInput>
    where?: CHAROLAWhereInput
  }

  export type CHAROLAUpdateToOneWithWhereWithoutCHAROLA_FRASInput = {
    where?: CHAROLAWhereInput
    data: XOR<CHAROLAUpdateWithoutCHAROLA_FRASInput, CHAROLAUncheckedUpdateWithoutCHAROLA_FRASInput>
  }

  export type CHAROLAUpdateWithoutCHAROLA_FRASInput = {
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUpdateManyWithoutCHAROLANestedInput
  }

  export type CHAROLAUncheckedUpdateWithoutCHAROLA_FRASInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_PUPA?: CHAROLA_PUPAUncheckedUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedUpdateManyWithoutCHAROLANestedInput
  }

  export type FRASUpsertWithoutCHAROLA_FRASInput = {
    update: XOR<FRASUpdateWithoutCHAROLA_FRASInput, FRASUncheckedUpdateWithoutCHAROLA_FRASInput>
    create: XOR<FRASCreateWithoutCHAROLA_FRASInput, FRASUncheckedCreateWithoutCHAROLA_FRASInput>
    where?: FRASWhereInput
  }

  export type FRASUpdateToOneWithWhereWithoutCHAROLA_FRASInput = {
    where?: FRASWhereInput
    data: XOR<FRASUpdateWithoutCHAROLA_FRASInput, FRASUncheckedUpdateWithoutCHAROLA_FRASInput>
  }

  export type FRASUpdateWithoutCHAROLA_FRASInput = {
    gramosGenerados?: FloatFieldUpdateOperationsInput | number
    CHAROLA?: CHAROLAUpdateOneWithoutFRASNestedInput
  }

  export type FRASUncheckedUpdateWithoutCHAROLA_FRASInput = {
    frasId?: IntFieldUpdateOperationsInput | number
    gramosGenerados?: FloatFieldUpdateOperationsInput | number
    charolaId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CHAROLACreateWithoutCHAROLA_PUPAInput = {
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLACreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDACreateNestedManyWithoutCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONCreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLACreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLAUncheckedCreateWithoutCHAROLA_PUPAInput = {
    charolaId?: number
    nombreCharola?: string | null
    comidaCiclo: number
    hidratacionCiclo: number
    fechaActualizacion?: Date | string | null
    estado?: string | null
    densidadLarva?: number | null
    fechaCreacion?: Date | string | null
    pesoCharola?: number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedCreateNestedManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedCreateNestedManyWithoutCHAROLAInput
    FRAS?: FRASUncheckedCreateNestedManyWithoutCHAROLAInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedCreateNestedManyWithoutCHAROLAInput
  }

  export type CHAROLACreateOrConnectWithoutCHAROLA_PUPAInput = {
    where: CHAROLAWhereUniqueInput
    create: XOR<CHAROLACreateWithoutCHAROLA_PUPAInput, CHAROLAUncheckedCreateWithoutCHAROLA_PUPAInput>
  }

  export type PUPACreateWithoutCHAROLA_PUPAInput = {
    fechaRegistro?: Date | string | null
    cantidadObtenida?: number | null
  }

  export type PUPAUncheckedCreateWithoutCHAROLA_PUPAInput = {
    pupaId?: number
    fechaRegistro?: Date | string | null
    cantidadObtenida?: number | null
  }

  export type PUPACreateOrConnectWithoutCHAROLA_PUPAInput = {
    where: PUPAWhereUniqueInput
    create: XOR<PUPACreateWithoutCHAROLA_PUPAInput, PUPAUncheckedCreateWithoutCHAROLA_PUPAInput>
  }

  export type CHAROLAUpsertWithoutCHAROLA_PUPAInput = {
    update: XOR<CHAROLAUpdateWithoutCHAROLA_PUPAInput, CHAROLAUncheckedUpdateWithoutCHAROLA_PUPAInput>
    create: XOR<CHAROLACreateWithoutCHAROLA_PUPAInput, CHAROLAUncheckedCreateWithoutCHAROLA_PUPAInput>
    where?: CHAROLAWhereInput
  }

  export type CHAROLAUpdateToOneWithWhereWithoutCHAROLA_PUPAInput = {
    where?: CHAROLAWhereInput
    data: XOR<CHAROLAUpdateWithoutCHAROLA_PUPAInput, CHAROLAUncheckedUpdateWithoutCHAROLA_PUPAInput>
  }

  export type CHAROLAUpdateWithoutCHAROLA_PUPAInput = {
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUpdateManyWithoutCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUpdateManyWithoutCHAROLANestedInput
  }

  export type CHAROLAUncheckedUpdateWithoutCHAROLA_PUPAInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
    nombreCharola?: NullableStringFieldUpdateOperationsInput | string | null
    comidaCiclo?: FloatFieldUpdateOperationsInput | number
    hidratacionCiclo?: FloatFieldUpdateOperationsInput | number
    fechaActualizacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    densidadLarva?: NullableFloatFieldUpdateOperationsInput | number | null
    fechaCreacion?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pesoCharola?: NullableFloatFieldUpdateOperationsInput | number | null
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
    CHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
    CHAROLA_COMIDA?: CHAROLA_COMIDAUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    CHAROLA_HIDRATACION?: CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutCHAROLANestedInput
    FRAS?: FRASUncheckedUpdateManyWithoutCHAROLANestedInput
    USUARIO_CHAROLA?: USUARIO_CHAROLAUncheckedUpdateManyWithoutCHAROLANestedInput
  }

  export type PUPAUpsertWithoutCHAROLA_PUPAInput = {
    update: XOR<PUPAUpdateWithoutCHAROLA_PUPAInput, PUPAUncheckedUpdateWithoutCHAROLA_PUPAInput>
    create: XOR<PUPACreateWithoutCHAROLA_PUPAInput, PUPAUncheckedCreateWithoutCHAROLA_PUPAInput>
    where?: PUPAWhereInput
  }

  export type PUPAUpdateToOneWithWhereWithoutCHAROLA_PUPAInput = {
    where?: PUPAWhereInput
    data: XOR<PUPAUpdateWithoutCHAROLA_PUPAInput, PUPAUncheckedUpdateWithoutCHAROLA_PUPAInput>
  }

  export type PUPAUpdateWithoutCHAROLA_PUPAInput = {
    fechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidadObtenida?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PUPAUncheckedUpdateWithoutCHAROLA_PUPAInput = {
    pupaId?: IntFieldUpdateOperationsInput | number
    fechaRegistro?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cantidadObtenida?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CHAROLA_PUPACreateWithoutPUPAInput = {
    CHAROLA: CHAROLACreateNestedOneWithoutCHAROLA_PUPAInput
  }

  export type CHAROLA_PUPAUncheckedCreateWithoutPUPAInput = {
    charolaId: number
  }

  export type CHAROLA_PUPACreateOrConnectWithoutPUPAInput = {
    where: CHAROLA_PUPAWhereUniqueInput
    create: XOR<CHAROLA_PUPACreateWithoutPUPAInput, CHAROLA_PUPAUncheckedCreateWithoutPUPAInput>
  }

  export type CHAROLA_PUPACreateManyPUPAInputEnvelope = {
    data: CHAROLA_PUPACreateManyPUPAInput | CHAROLA_PUPACreateManyPUPAInput[]
    skipDuplicates?: boolean
  }

  export type CHAROLA_PUPAUpsertWithWhereUniqueWithoutPUPAInput = {
    where: CHAROLA_PUPAWhereUniqueInput
    update: XOR<CHAROLA_PUPAUpdateWithoutPUPAInput, CHAROLA_PUPAUncheckedUpdateWithoutPUPAInput>
    create: XOR<CHAROLA_PUPACreateWithoutPUPAInput, CHAROLA_PUPAUncheckedCreateWithoutPUPAInput>
  }

  export type CHAROLA_PUPAUpdateWithWhereUniqueWithoutPUPAInput = {
    where: CHAROLA_PUPAWhereUniqueInput
    data: XOR<CHAROLA_PUPAUpdateWithoutPUPAInput, CHAROLA_PUPAUncheckedUpdateWithoutPUPAInput>
  }

  export type CHAROLA_PUPAUpdateManyWithWhereWithoutPUPAInput = {
    where: CHAROLA_PUPAScalarWhereInput
    data: XOR<CHAROLA_PUPAUpdateManyMutationInput, CHAROLA_PUPAUncheckedUpdateManyWithoutPUPAInput>
  }

  export type CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    charolaAncestro: number
  }

  export type CHAROLA_CHAROLACreateManyCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    charolaHija: number
  }

  export type CHAROLA_COMIDACreateManyCHAROLAInput = {
    id?: number
    comidaId?: number | null
    cantidadOtorgada: number
  }

  export type CHAROLA_FRASCreateManyCHAROLAInput = {
    frasId: number
  }

  export type CHAROLA_HIDRATACIONCreateManyCHAROLAInput = {
    id?: number
    hidratacionId?: number | null
    cantidadOtorgada: number
  }

  export type CHAROLA_PUPACreateManyCHAROLAInput = {
    pupaId: number
  }

  export type FRASCreateManyCHAROLAInput = {
    frasId?: number
    gramosGenerados: number
  }

  export type USUARIO_CHAROLACreateManyCHAROLAInput = {
    usuarioId: number
  }

  export type CHAROLA_CHAROLAUpdateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLA?: CHAROLAUpdateOneRequiredWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLANestedInput
  }

  export type CHAROLA_CHAROLAUncheckedUpdateWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    charolaAncestro?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLAInput = {
    charolaAncestro?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_CHAROLAUpdateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLA?: CHAROLAUpdateOneRequiredWithoutCHAROLA_CHAROLA_CHAROLA_CHAROLA_charolaHijaToCHAROLANestedInput
  }

  export type CHAROLA_CHAROLAUncheckedUpdateWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    charolaHija?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_CHAROLAUncheckedUpdateManyWithoutCHAROLA_CHAROLA_CHAROLA_charolaAncestroToCHAROLAInput = {
    charolaHija?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_COMIDAUpdateWithoutCHAROLAInput = {
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
    COMIDA?: COMIDAUpdateOneWithoutCHAROLA_COMIDANestedInput
  }

  export type CHAROLA_COMIDAUncheckedUpdateWithoutCHAROLAInput = {
    id?: IntFieldUpdateOperationsInput | number
    comidaId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
  }

  export type CHAROLA_COMIDAUncheckedUpdateManyWithoutCHAROLAInput = {
    id?: IntFieldUpdateOperationsInput | number
    comidaId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
  }

  export type CHAROLA_FRASUpdateWithoutCHAROLAInput = {
    FRAS?: FRASUpdateOneRequiredWithoutCHAROLA_FRASNestedInput
  }

  export type CHAROLA_FRASUncheckedUpdateWithoutCHAROLAInput = {
    frasId?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_FRASUncheckedUpdateManyWithoutCHAROLAInput = {
    frasId?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_HIDRATACIONUpdateWithoutCHAROLAInput = {
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
    HIDRATACION?: HIDRATACIONUpdateOneWithoutCHAROLA_HIDRATACIONNestedInput
  }

  export type CHAROLA_HIDRATACIONUncheckedUpdateWithoutCHAROLAInput = {
    id?: IntFieldUpdateOperationsInput | number
    hidratacionId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
  }

  export type CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutCHAROLAInput = {
    id?: IntFieldUpdateOperationsInput | number
    hidratacionId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
  }

  export type CHAROLA_PUPAUpdateWithoutCHAROLAInput = {
    PUPA?: PUPAUpdateOneRequiredWithoutCHAROLA_PUPANestedInput
  }

  export type CHAROLA_PUPAUncheckedUpdateWithoutCHAROLAInput = {
    pupaId?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_PUPAUncheckedUpdateManyWithoutCHAROLAInput = {
    pupaId?: IntFieldUpdateOperationsInput | number
  }

  export type FRASUpdateWithoutCHAROLAInput = {
    gramosGenerados?: FloatFieldUpdateOperationsInput | number
    CHAROLA_FRAS?: CHAROLA_FRASUpdateManyWithoutFRASNestedInput
  }

  export type FRASUncheckedUpdateWithoutCHAROLAInput = {
    frasId?: IntFieldUpdateOperationsInput | number
    gramosGenerados?: FloatFieldUpdateOperationsInput | number
    CHAROLA_FRAS?: CHAROLA_FRASUncheckedUpdateManyWithoutFRASNestedInput
  }

  export type FRASUncheckedUpdateManyWithoutCHAROLAInput = {
    frasId?: IntFieldUpdateOperationsInput | number
    gramosGenerados?: FloatFieldUpdateOperationsInput | number
  }

  export type USUARIO_CHAROLAUpdateWithoutCHAROLAInput = {
    USUARIO?: USUARIOUpdateOneRequiredWithoutUSUARIO_CHAROLANestedInput
  }

  export type USUARIO_CHAROLAUncheckedUpdateWithoutCHAROLAInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type USUARIO_CHAROLAUncheckedUpdateManyWithoutCHAROLAInput = {
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_COMIDACreateManyCOMIDAInput = {
    id?: number
    charolaId?: number | null
    cantidadOtorgada: number
  }

  export type CHAROLA_COMIDAUpdateWithoutCOMIDAInput = {
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
    CHAROLA?: CHAROLAUpdateOneWithoutCHAROLA_COMIDANestedInput
  }

  export type CHAROLA_COMIDAUncheckedUpdateWithoutCOMIDAInput = {
    id?: IntFieldUpdateOperationsInput | number
    charolaId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
  }

  export type CHAROLA_COMIDAUncheckedUpdateManyWithoutCOMIDAInput = {
    id?: IntFieldUpdateOperationsInput | number
    charolaId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
  }

  export type CHAROLA_FRASCreateManyFRASInput = {
    charolaId: number
  }

  export type CHAROLA_FRASUpdateWithoutFRASInput = {
    CHAROLA?: CHAROLAUpdateOneRequiredWithoutCHAROLA_FRASNestedInput
  }

  export type CHAROLA_FRASUncheckedUpdateWithoutFRASInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_FRASUncheckedUpdateManyWithoutFRASInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_HIDRATACIONCreateManyHIDRATACIONInput = {
    id?: number
    charolaId?: number | null
    cantidadOtorgada: number
  }

  export type CHAROLA_HIDRATACIONUpdateWithoutHIDRATACIONInput = {
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
    CHAROLA?: CHAROLAUpdateOneWithoutCHAROLA_HIDRATACIONNestedInput
  }

  export type CHAROLA_HIDRATACIONUncheckedUpdateWithoutHIDRATACIONInput = {
    id?: IntFieldUpdateOperationsInput | number
    charolaId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
  }

  export type CHAROLA_HIDRATACIONUncheckedUpdateManyWithoutHIDRATACIONInput = {
    id?: IntFieldUpdateOperationsInput | number
    charolaId?: NullableIntFieldUpdateOperationsInput | number | null
    cantidadOtorgada?: FloatFieldUpdateOperationsInput | number
  }

  export type ADMINISTRADORCreateManyUSUARIOInput = {
    adminId?: number
  }

  export type USUARIO_CHAROLACreateManyUSUARIOInput = {
    charolaId: number
  }

  export type ADMINISTRADORUpdateWithoutUSUARIOInput = {

  }

  export type ADMINISTRADORUncheckedUpdateWithoutUSUARIOInput = {
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type ADMINISTRADORUncheckedUpdateManyWithoutUSUARIOInput = {
    adminId?: IntFieldUpdateOperationsInput | number
  }

  export type USUARIO_CHAROLAUpdateWithoutUSUARIOInput = {
    CHAROLA?: CHAROLAUpdateOneRequiredWithoutUSUARIO_CHAROLANestedInput
  }

  export type USUARIO_CHAROLAUncheckedUpdateWithoutUSUARIOInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
  }

  export type USUARIO_CHAROLAUncheckedUpdateManyWithoutUSUARIOInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_PUPACreateManyPUPAInput = {
    charolaId: number
  }

  export type CHAROLA_PUPAUpdateWithoutPUPAInput = {
    CHAROLA?: CHAROLAUpdateOneRequiredWithoutCHAROLA_PUPANestedInput
  }

  export type CHAROLA_PUPAUncheckedUpdateWithoutPUPAInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
  }

  export type CHAROLA_PUPAUncheckedUpdateManyWithoutPUPAInput = {
    charolaId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}