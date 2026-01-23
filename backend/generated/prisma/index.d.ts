
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Agenda
 * 
 */
export type Agenda = $Result.DefaultSelection<Prisma.$AgendaPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model Pantient
 * 
 */
export type Pantient = $Result.DefaultSelection<Prisma.$PantientPayload>
/**
 * Model Attend
 * 
 */
export type Attend = $Result.DefaultSelection<Prisma.$AttendPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusUrgencia: {
  URGENTE: 'URGENTE',
  MODERADO: 'MODERADO',
  BAIXO: 'BAIXO'
};

export type StatusUrgencia = (typeof StatusUrgencia)[keyof typeof StatusUrgencia]


export const StatusAtendimento: {
  AGENDADO: 'AGENDADO',
  CONFIRMADO: 'CONFIRMADO',
  CANCELADO: 'CANCELADO',
  FINALIZADO: 'FINALIZADO'
};

export type StatusAtendimento = (typeof StatusAtendimento)[keyof typeof StatusAtendimento]


export const Role: {
  MEDICO: 'MEDICO',
  ATENDENTE: 'ATENDENTE',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type StatusUrgencia = $Enums.StatusUrgencia

export const StatusUrgencia: typeof $Enums.StatusUrgencia

export type StatusAtendimento = $Enums.StatusAtendimento

export const StatusAtendimento: typeof $Enums.StatusAtendimento

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agenda
 * const agenda = await prisma.agenda.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Agenda
   * const agenda = await prisma.agenda.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * `prisma.agenda`: Exposes CRUD operations for the **Agenda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agenda
    * const agenda = await prisma.agenda.findMany()
    * ```
    */
  get agenda(): Prisma.AgendaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pantient`: Exposes CRUD operations for the **Pantient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pantients
    * const pantients = await prisma.pantient.findMany()
    * ```
    */
  get pantient(): Prisma.PantientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attend`: Exposes CRUD operations for the **Attend** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attends
    * const attends = await prisma.attend.findMany()
    * ```
    */
  get attend(): Prisma.AttendDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Agenda: 'Agenda',
    Users: 'Users',
    Doctor: 'Doctor',
    Pantient: 'Pantient',
    Attend: 'Attend'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "agenda" | "users" | "doctor" | "pantient" | "attend"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Agenda: {
        payload: Prisma.$AgendaPayload<ExtArgs>
        fields: Prisma.AgendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          findFirst: {
            args: Prisma.AgendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          findMany: {
            args: Prisma.AgendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>[]
          }
          create: {
            args: Prisma.AgendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          createMany: {
            args: Prisma.AgendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgendaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>[]
          }
          delete: {
            args: Prisma.AgendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          update: {
            args: Prisma.AgendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          deleteMany: {
            args: Prisma.AgendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgendaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>[]
          }
          upsert: {
            args: Prisma.AgendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgendaPayload>
          }
          aggregate: {
            args: Prisma.AgendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgenda>
          }
          groupBy: {
            args: Prisma.AgendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgendaCountArgs<ExtArgs>
            result: $Utils.Optional<AgendaCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DoctorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DoctorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      Pantient: {
        payload: Prisma.$PantientPayload<ExtArgs>
        fields: Prisma.PantientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PantientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PantientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantientPayload>
          }
          findFirst: {
            args: Prisma.PantientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PantientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantientPayload>
          }
          findMany: {
            args: Prisma.PantientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantientPayload>[]
          }
          create: {
            args: Prisma.PantientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantientPayload>
          }
          createMany: {
            args: Prisma.PantientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PantientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantientPayload>[]
          }
          delete: {
            args: Prisma.PantientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantientPayload>
          }
          update: {
            args: Prisma.PantientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantientPayload>
          }
          deleteMany: {
            args: Prisma.PantientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PantientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PantientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantientPayload>[]
          }
          upsert: {
            args: Prisma.PantientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PantientPayload>
          }
          aggregate: {
            args: Prisma.PantientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePantient>
          }
          groupBy: {
            args: Prisma.PantientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PantientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PantientCountArgs<ExtArgs>
            result: $Utils.Optional<PantientCountAggregateOutputType> | number
          }
        }
      }
      Attend: {
        payload: Prisma.$AttendPayload<ExtArgs>
        fields: Prisma.AttendFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendPayload>
          }
          findFirst: {
            args: Prisma.AttendFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendPayload>
          }
          findMany: {
            args: Prisma.AttendFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendPayload>[]
          }
          create: {
            args: Prisma.AttendCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendPayload>
          }
          createMany: {
            args: Prisma.AttendCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendPayload>[]
          }
          delete: {
            args: Prisma.AttendDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendPayload>
          }
          update: {
            args: Prisma.AttendUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendPayload>
          }
          deleteMany: {
            args: Prisma.AttendDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendPayload>[]
          }
          upsert: {
            args: Prisma.AttendUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendPayload>
          }
          aggregate: {
            args: Prisma.AttendAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttend>
          }
          groupBy: {
            args: Prisma.AttendGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendCountArgs<ExtArgs>
            result: $Utils.Optional<AttendCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    agenda?: AgendaOmit
    users?: UsersOmit
    doctor?: DoctorOmit
    pantient?: PantientOmit
    attend?: AttendOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    agendas: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendas?: boolean | DoctorCountOutputTypeCountAgendasArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountAgendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendaWhereInput
  }


  /**
   * Count Type PantientCountOutputType
   */

  export type PantientCountOutputType = {
    agendas: number
  }

  export type PantientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendas?: boolean | PantientCountOutputTypeCountAgendasArgs
  }

  // Custom InputTypes
  /**
   * PantientCountOutputType without action
   */
  export type PantientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PantientCountOutputType
     */
    select?: PantientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PantientCountOutputType without action
   */
  export type PantientCountOutputTypeCountAgendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Agenda
   */

  export type AggregateAgenda = {
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  export type AgendaAvgAggregateOutputType = {
    pantId: number | null
    docId: number | null
  }

  export type AgendaSumAggregateOutputType = {
    pantId: number | null
    docId: number | null
  }

  export type AgendaMinAggregateOutputType = {
    id: string | null
    horario_atend: Date | null
    statusUrgencia: $Enums.StatusUrgencia | null
    status: $Enums.StatusAtendimento | null
    pantId: number | null
    docId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgendaMaxAggregateOutputType = {
    id: string | null
    horario_atend: Date | null
    statusUrgencia: $Enums.StatusUrgencia | null
    status: $Enums.StatusAtendimento | null
    pantId: number | null
    docId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgendaCountAggregateOutputType = {
    id: number
    horario_atend: number
    statusUrgencia: number
    status: number
    pantId: number
    docId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgendaAvgAggregateInputType = {
    pantId?: true
    docId?: true
  }

  export type AgendaSumAggregateInputType = {
    pantId?: true
    docId?: true
  }

  export type AgendaMinAggregateInputType = {
    id?: true
    horario_atend?: true
    statusUrgencia?: true
    status?: true
    pantId?: true
    docId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgendaMaxAggregateInputType = {
    id?: true
    horario_atend?: true
    statusUrgencia?: true
    status?: true
    pantId?: true
    docId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgendaCountAggregateInputType = {
    id?: true
    horario_atend?: true
    statusUrgencia?: true
    status?: true
    pantId?: true
    docId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agenda to aggregate.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agenda
    **/
    _count?: true | AgendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgendaMaxAggregateInputType
  }

  export type GetAgendaAggregateType<T extends AgendaAggregateArgs> = {
        [P in keyof T & keyof AggregateAgenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgenda[P]>
      : GetScalarType<T[P], AggregateAgenda[P]>
  }




  export type AgendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgendaWhereInput
    orderBy?: AgendaOrderByWithAggregationInput | AgendaOrderByWithAggregationInput[]
    by: AgendaScalarFieldEnum[] | AgendaScalarFieldEnum
    having?: AgendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgendaCountAggregateInputType | true
    _avg?: AgendaAvgAggregateInputType
    _sum?: AgendaSumAggregateInputType
    _min?: AgendaMinAggregateInputType
    _max?: AgendaMaxAggregateInputType
  }

  export type AgendaGroupByOutputType = {
    id: string
    horario_atend: Date
    statusUrgencia: $Enums.StatusUrgencia
    status: $Enums.StatusAtendimento
    pantId: number
    docId: number
    createdAt: Date
    updatedAt: Date
    _count: AgendaCountAggregateOutputType | null
    _avg: AgendaAvgAggregateOutputType | null
    _sum: AgendaSumAggregateOutputType | null
    _min: AgendaMinAggregateOutputType | null
    _max: AgendaMaxAggregateOutputType | null
  }

  type GetAgendaGroupByPayload<T extends AgendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgendaGroupByOutputType[P]>
            : GetScalarType<T[P], AgendaGroupByOutputType[P]>
        }
      >
    >


  export type AgendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horario_atend?: boolean
    statusUrgencia?: boolean
    status?: boolean
    pantId?: boolean
    docId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paciente?: boolean | PantientDefaultArgs<ExtArgs>
    medico?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda"]>

  export type AgendaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horario_atend?: boolean
    statusUrgencia?: boolean
    status?: boolean
    pantId?: boolean
    docId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paciente?: boolean | PantientDefaultArgs<ExtArgs>
    medico?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda"]>

  export type AgendaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horario_atend?: boolean
    statusUrgencia?: boolean
    status?: boolean
    pantId?: boolean
    docId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    paciente?: boolean | PantientDefaultArgs<ExtArgs>
    medico?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agenda"]>

  export type AgendaSelectScalar = {
    id?: boolean
    horario_atend?: boolean
    statusUrgencia?: boolean
    status?: boolean
    pantId?: boolean
    docId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "horario_atend" | "statusUrgencia" | "status" | "pantId" | "docId" | "createdAt" | "updatedAt", ExtArgs["result"]["agenda"]>
  export type AgendaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PantientDefaultArgs<ExtArgs>
    medico?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type AgendaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PantientDefaultArgs<ExtArgs>
    medico?: boolean | DoctorDefaultArgs<ExtArgs>
  }
  export type AgendaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PantientDefaultArgs<ExtArgs>
    medico?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $AgendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agenda"
    objects: {
      paciente: Prisma.$PantientPayload<ExtArgs>
      medico: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      horario_atend: Date
      statusUrgencia: $Enums.StatusUrgencia
      status: $Enums.StatusAtendimento
      pantId: number
      docId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agenda"]>
    composites: {}
  }

  type AgendaGetPayload<S extends boolean | null | undefined | AgendaDefaultArgs> = $Result.GetResult<Prisma.$AgendaPayload, S>

  type AgendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgendaCountAggregateInputType | true
    }

  export interface AgendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agenda'], meta: { name: 'Agenda' } }
    /**
     * Find zero or one Agenda that matches the filter.
     * @param {AgendaFindUniqueArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgendaFindUniqueArgs>(args: SelectSubset<T, AgendaFindUniqueArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agenda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgendaFindUniqueOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgendaFindUniqueOrThrowArgs>(args: SelectSubset<T, AgendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindFirstArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgendaFindFirstArgs>(args?: SelectSubset<T, AgendaFindFirstArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agenda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindFirstOrThrowArgs} args - Arguments to find a Agenda
     * @example
     * // Get one Agenda
     * const agenda = await prisma.agenda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgendaFindFirstOrThrowArgs>(args?: SelectSubset<T, AgendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agenda
     * const agenda = await prisma.agenda.findMany()
     * 
     * // Get first 10 Agenda
     * const agenda = await prisma.agenda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agendaWithIdOnly = await prisma.agenda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgendaFindManyArgs>(args?: SelectSubset<T, AgendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agenda.
     * @param {AgendaCreateArgs} args - Arguments to create a Agenda.
     * @example
     * // Create one Agenda
     * const Agenda = await prisma.agenda.create({
     *   data: {
     *     // ... data to create a Agenda
     *   }
     * })
     * 
     */
    create<T extends AgendaCreateArgs>(args: SelectSubset<T, AgendaCreateArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agenda.
     * @param {AgendaCreateManyArgs} args - Arguments to create many Agenda.
     * @example
     * // Create many Agenda
     * const agenda = await prisma.agenda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgendaCreateManyArgs>(args?: SelectSubset<T, AgendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agenda and returns the data saved in the database.
     * @param {AgendaCreateManyAndReturnArgs} args - Arguments to create many Agenda.
     * @example
     * // Create many Agenda
     * const agenda = await prisma.agenda.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agenda and only return the `id`
     * const agendaWithIdOnly = await prisma.agenda.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgendaCreateManyAndReturnArgs>(args?: SelectSubset<T, AgendaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agenda.
     * @param {AgendaDeleteArgs} args - Arguments to delete one Agenda.
     * @example
     * // Delete one Agenda
     * const Agenda = await prisma.agenda.delete({
     *   where: {
     *     // ... filter to delete one Agenda
     *   }
     * })
     * 
     */
    delete<T extends AgendaDeleteArgs>(args: SelectSubset<T, AgendaDeleteArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agenda.
     * @param {AgendaUpdateArgs} args - Arguments to update one Agenda.
     * @example
     * // Update one Agenda
     * const agenda = await prisma.agenda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgendaUpdateArgs>(args: SelectSubset<T, AgendaUpdateArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agenda.
     * @param {AgendaDeleteManyArgs} args - Arguments to filter Agenda to delete.
     * @example
     * // Delete a few Agenda
     * const { count } = await prisma.agenda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgendaDeleteManyArgs>(args?: SelectSubset<T, AgendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agenda
     * const agenda = await prisma.agenda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgendaUpdateManyArgs>(args: SelectSubset<T, AgendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agenda and returns the data updated in the database.
     * @param {AgendaUpdateManyAndReturnArgs} args - Arguments to update many Agenda.
     * @example
     * // Update many Agenda
     * const agenda = await prisma.agenda.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agenda and only return the `id`
     * const agendaWithIdOnly = await prisma.agenda.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgendaUpdateManyAndReturnArgs>(args: SelectSubset<T, AgendaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agenda.
     * @param {AgendaUpsertArgs} args - Arguments to update or create a Agenda.
     * @example
     * // Update or create a Agenda
     * const agenda = await prisma.agenda.upsert({
     *   create: {
     *     // ... data to create a Agenda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agenda we want to update
     *   }
     * })
     */
    upsert<T extends AgendaUpsertArgs>(args: SelectSubset<T, AgendaUpsertArgs<ExtArgs>>): Prisma__AgendaClient<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaCountArgs} args - Arguments to filter Agenda to count.
     * @example
     * // Count the number of Agenda
     * const count = await prisma.agenda.count({
     *   where: {
     *     // ... the filter for the Agenda we want to count
     *   }
     * })
    **/
    count<T extends AgendaCountArgs>(
      args?: Subset<T, AgendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgendaAggregateArgs>(args: Subset<T, AgendaAggregateArgs>): Prisma.PrismaPromise<GetAgendaAggregateType<T>>

    /**
     * Group by Agenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgendaGroupByArgs} args - Group by arguments.
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
      T extends AgendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgendaGroupByArgs['orderBy'] }
        : { orderBy?: AgendaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agenda model
   */
  readonly fields: AgendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agenda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PantientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PantientDefaultArgs<ExtArgs>>): Prisma__PantientClient<$Result.GetResult<Prisma.$PantientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medico<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Agenda model
   */
  interface AgendaFieldRefs {
    readonly id: FieldRef<"Agenda", 'String'>
    readonly horario_atend: FieldRef<"Agenda", 'DateTime'>
    readonly statusUrgencia: FieldRef<"Agenda", 'StatusUrgencia'>
    readonly status: FieldRef<"Agenda", 'StatusAtendimento'>
    readonly pantId: FieldRef<"Agenda", 'Int'>
    readonly docId: FieldRef<"Agenda", 'Int'>
    readonly createdAt: FieldRef<"Agenda", 'DateTime'>
    readonly updatedAt: FieldRef<"Agenda", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Agenda findUnique
   */
  export type AgendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda findUniqueOrThrow
   */
  export type AgendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda findFirst
   */
  export type AgendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda findFirstOrThrow
   */
  export type AgendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agenda.
     */
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda findMany
   */
  export type AgendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter, which Agenda to fetch.
     */
    where?: AgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agenda to fetch.
     */
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agenda.
     */
    cursor?: AgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agenda.
     */
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Agenda create
   */
  export type AgendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * The data needed to create a Agenda.
     */
    data: XOR<AgendaCreateInput, AgendaUncheckedCreateInput>
  }

  /**
   * Agenda createMany
   */
  export type AgendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agenda.
     */
    data: AgendaCreateManyInput | AgendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agenda createManyAndReturn
   */
  export type AgendaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * The data used to create many Agenda.
     */
    data: AgendaCreateManyInput | AgendaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agenda update
   */
  export type AgendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * The data needed to update a Agenda.
     */
    data: XOR<AgendaUpdateInput, AgendaUncheckedUpdateInput>
    /**
     * Choose, which Agenda to update.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda updateMany
   */
  export type AgendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agenda.
     */
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyInput>
    /**
     * Filter which Agenda to update
     */
    where?: AgendaWhereInput
    /**
     * Limit how many Agenda to update.
     */
    limit?: number
  }

  /**
   * Agenda updateManyAndReturn
   */
  export type AgendaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * The data used to update Agenda.
     */
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyInput>
    /**
     * Filter which Agenda to update
     */
    where?: AgendaWhereInput
    /**
     * Limit how many Agenda to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Agenda upsert
   */
  export type AgendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * The filter to search for the Agenda to update in case it exists.
     */
    where: AgendaWhereUniqueInput
    /**
     * In case the Agenda found by the `where` argument doesn't exist, create a new Agenda with this data.
     */
    create: XOR<AgendaCreateInput, AgendaUncheckedCreateInput>
    /**
     * In case the Agenda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgendaUpdateInput, AgendaUncheckedUpdateInput>
  }

  /**
   * Agenda delete
   */
  export type AgendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    /**
     * Filter which Agenda to delete.
     */
    where: AgendaWhereUniqueInput
  }

  /**
   * Agenda deleteMany
   */
  export type AgendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agenda to delete
     */
    where?: AgendaWhereInput
    /**
     * Limit how many Agenda to delete.
     */
    limit?: number
  }

  /**
   * Agenda without action
   */
  export type AgendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    nascimento: Date | null
    fone: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    nascimento: Date | null
    fone: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    nascimento: number
    fone: number
    email: number
    passwordHash: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    nascimento?: true
    fone?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    nascimento?: true
    fone?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    nascimento?: true
    fone?: true
    email?: true
    passwordHash?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    nome: string
    cpf: string
    nascimento: Date
    fone: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    nascimento?: boolean
    fone?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medico?: boolean | Users$medicoArgs<ExtArgs>
    atendente?: boolean | Users$atendenteArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    nascimento?: boolean
    fone?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    nascimento?: boolean
    fone?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    nascimento?: boolean
    fone?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "nascimento" | "fone" | "email" | "passwordHash" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medico?: boolean | Users$medicoArgs<ExtArgs>
    atendente?: boolean | Users$atendenteArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      medico: Prisma.$DoctorPayload<ExtArgs> | null
      atendente: Prisma.$AttendPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cpf: string
      nascimento: Date
      fone: string
      email: string
      passwordHash: string
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medico<T extends Users$medicoArgs<ExtArgs> = {}>(args?: Subset<T, Users$medicoArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    atendente<T extends Users$atendenteArgs<ExtArgs> = {}>(args?: Subset<T, Users$atendenteArgs<ExtArgs>>): Prisma__AttendClient<$Result.GetResult<Prisma.$AttendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly nome: FieldRef<"Users", 'String'>
    readonly cpf: FieldRef<"Users", 'String'>
    readonly nascimento: FieldRef<"Users", 'DateTime'>
    readonly fone: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly passwordHash: FieldRef<"Users", 'String'>
    readonly role: FieldRef<"Users", 'Role'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.medico
   */
  export type Users$medicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
  }

  /**
   * Users.atendente
   */
  export type Users$atendenteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attend
     */
    select?: AttendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attend
     */
    omit?: AttendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendInclude<ExtArgs> | null
    where?: AttendWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    userId: number | null
  }

  export type DoctorSumAggregateOutputType = {
    userId: number | null
  }

  export type DoctorMinAggregateOutputType = {
    userId: number | null
    crm: string | null
    especialidade: string | null
  }

  export type DoctorMaxAggregateOutputType = {
    userId: number | null
    crm: string | null
    especialidade: string | null
  }

  export type DoctorCountAggregateOutputType = {
    userId: number
    crm: number
    especialidade: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    userId?: true
  }

  export type DoctorSumAggregateInputType = {
    userId?: true
  }

  export type DoctorMinAggregateInputType = {
    userId?: true
    crm?: true
    especialidade?: true
  }

  export type DoctorMaxAggregateInputType = {
    userId?: true
    crm?: true
    especialidade?: true
  }

  export type DoctorCountAggregateInputType = {
    userId?: true
    crm?: true
    especialidade?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    userId: number
    crm: string
    especialidade: string
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    crm?: boolean
    especialidade?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    agendas?: boolean | Doctor$agendasArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    crm?: boolean
    especialidade?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    crm?: boolean
    especialidade?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>

  export type DoctorSelectScalar = {
    userId?: boolean
    crm?: boolean
    especialidade?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "crm" | "especialidade", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    agendas?: boolean | Doctor$agendasArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type DoctorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      agendas: Prisma.$AgendaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      crm: string
      especialidade: string
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const doctorWithUserIdOnly = await prisma.doctor.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Doctors and returns the data saved in the database.
     * @param {DoctorCreateManyAndReturnArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Doctors and only return the `userId`
     * const doctorWithUserIdOnly = await prisma.doctor.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DoctorCreateManyAndReturnArgs>(args?: SelectSubset<T, DoctorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors and returns the data updated in the database.
     * @param {DoctorUpdateManyAndReturnArgs} args - Arguments to update many Doctors.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Doctors and only return the `userId`
     * const doctorWithUserIdOnly = await prisma.doctor.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DoctorUpdateManyAndReturnArgs>(args: SelectSubset<T, DoctorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agendas<T extends Doctor$agendasArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$agendasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly userId: FieldRef<"Doctor", 'Int'>
    readonly crm: FieldRef<"Doctor", 'String'>
    readonly especialidade: FieldRef<"Doctor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor createManyAndReturn
   */
  export type DoctorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor updateManyAndReturn
   */
  export type DoctorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor.agendas
   */
  export type Doctor$agendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    where?: AgendaWhereInput
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    cursor?: AgendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model Pantient
   */

  export type AggregatePantient = {
    _count: PantientCountAggregateOutputType | null
    _avg: PantientAvgAggregateOutputType | null
    _sum: PantientSumAggregateOutputType | null
    _min: PantientMinAggregateOutputType | null
    _max: PantientMaxAggregateOutputType | null
  }

  export type PantientAvgAggregateOutputType = {
    id: number | null
  }

  export type PantientSumAggregateOutputType = {
    id: number | null
  }

  export type PantientMinAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    nascimento: Date | null
    telefone: string | null
    email: string | null
    cartaoSus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PantientMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    cpf: string | null
    nascimento: Date | null
    telefone: string | null
    email: string | null
    cartaoSus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PantientCountAggregateOutputType = {
    id: number
    nome: number
    cpf: number
    nascimento: number
    telefone: number
    email: number
    cartaoSus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PantientAvgAggregateInputType = {
    id?: true
  }

  export type PantientSumAggregateInputType = {
    id?: true
  }

  export type PantientMinAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    nascimento?: true
    telefone?: true
    email?: true
    cartaoSus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PantientMaxAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    nascimento?: true
    telefone?: true
    email?: true
    cartaoSus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PantientCountAggregateInputType = {
    id?: true
    nome?: true
    cpf?: true
    nascimento?: true
    telefone?: true
    email?: true
    cartaoSus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PantientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pantient to aggregate.
     */
    where?: PantientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pantients to fetch.
     */
    orderBy?: PantientOrderByWithRelationInput | PantientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PantientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pantients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pantients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pantients
    **/
    _count?: true | PantientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PantientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PantientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PantientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PantientMaxAggregateInputType
  }

  export type GetPantientAggregateType<T extends PantientAggregateArgs> = {
        [P in keyof T & keyof AggregatePantient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePantient[P]>
      : GetScalarType<T[P], AggregatePantient[P]>
  }




  export type PantientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PantientWhereInput
    orderBy?: PantientOrderByWithAggregationInput | PantientOrderByWithAggregationInput[]
    by: PantientScalarFieldEnum[] | PantientScalarFieldEnum
    having?: PantientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PantientCountAggregateInputType | true
    _avg?: PantientAvgAggregateInputType
    _sum?: PantientSumAggregateInputType
    _min?: PantientMinAggregateInputType
    _max?: PantientMaxAggregateInputType
  }

  export type PantientGroupByOutputType = {
    id: number
    nome: string
    cpf: string
    nascimento: Date
    telefone: string
    email: string | null
    cartaoSus: string
    createdAt: Date
    updatedAt: Date
    _count: PantientCountAggregateOutputType | null
    _avg: PantientAvgAggregateOutputType | null
    _sum: PantientSumAggregateOutputType | null
    _min: PantientMinAggregateOutputType | null
    _max: PantientMaxAggregateOutputType | null
  }

  type GetPantientGroupByPayload<T extends PantientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PantientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PantientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PantientGroupByOutputType[P]>
            : GetScalarType<T[P], PantientGroupByOutputType[P]>
        }
      >
    >


  export type PantientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    nascimento?: boolean
    telefone?: boolean
    email?: boolean
    cartaoSus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    agendas?: boolean | Pantient$agendasArgs<ExtArgs>
    _count?: boolean | PantientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pantient"]>

  export type PantientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    nascimento?: boolean
    telefone?: boolean
    email?: boolean
    cartaoSus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pantient"]>

  export type PantientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    cpf?: boolean
    nascimento?: boolean
    telefone?: boolean
    email?: boolean
    cartaoSus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pantient"]>

  export type PantientSelectScalar = {
    id?: boolean
    nome?: boolean
    cpf?: boolean
    nascimento?: boolean
    telefone?: boolean
    email?: boolean
    cartaoSus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PantientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "cpf" | "nascimento" | "telefone" | "email" | "cartaoSus" | "createdAt" | "updatedAt", ExtArgs["result"]["pantient"]>
  export type PantientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agendas?: boolean | Pantient$agendasArgs<ExtArgs>
    _count?: boolean | PantientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PantientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PantientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PantientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pantient"
    objects: {
      agendas: Prisma.$AgendaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      cpf: string
      nascimento: Date
      telefone: string
      email: string | null
      cartaoSus: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pantient"]>
    composites: {}
  }

  type PantientGetPayload<S extends boolean | null | undefined | PantientDefaultArgs> = $Result.GetResult<Prisma.$PantientPayload, S>

  type PantientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PantientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PantientCountAggregateInputType | true
    }

  export interface PantientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pantient'], meta: { name: 'Pantient' } }
    /**
     * Find zero or one Pantient that matches the filter.
     * @param {PantientFindUniqueArgs} args - Arguments to find a Pantient
     * @example
     * // Get one Pantient
     * const pantient = await prisma.pantient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PantientFindUniqueArgs>(args: SelectSubset<T, PantientFindUniqueArgs<ExtArgs>>): Prisma__PantientClient<$Result.GetResult<Prisma.$PantientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pantient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PantientFindUniqueOrThrowArgs} args - Arguments to find a Pantient
     * @example
     * // Get one Pantient
     * const pantient = await prisma.pantient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PantientFindUniqueOrThrowArgs>(args: SelectSubset<T, PantientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PantientClient<$Result.GetResult<Prisma.$PantientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pantient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantientFindFirstArgs} args - Arguments to find a Pantient
     * @example
     * // Get one Pantient
     * const pantient = await prisma.pantient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PantientFindFirstArgs>(args?: SelectSubset<T, PantientFindFirstArgs<ExtArgs>>): Prisma__PantientClient<$Result.GetResult<Prisma.$PantientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pantient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantientFindFirstOrThrowArgs} args - Arguments to find a Pantient
     * @example
     * // Get one Pantient
     * const pantient = await prisma.pantient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PantientFindFirstOrThrowArgs>(args?: SelectSubset<T, PantientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PantientClient<$Result.GetResult<Prisma.$PantientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pantients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pantients
     * const pantients = await prisma.pantient.findMany()
     * 
     * // Get first 10 Pantients
     * const pantients = await prisma.pantient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pantientWithIdOnly = await prisma.pantient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PantientFindManyArgs>(args?: SelectSubset<T, PantientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pantient.
     * @param {PantientCreateArgs} args - Arguments to create a Pantient.
     * @example
     * // Create one Pantient
     * const Pantient = await prisma.pantient.create({
     *   data: {
     *     // ... data to create a Pantient
     *   }
     * })
     * 
     */
    create<T extends PantientCreateArgs>(args: SelectSubset<T, PantientCreateArgs<ExtArgs>>): Prisma__PantientClient<$Result.GetResult<Prisma.$PantientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pantients.
     * @param {PantientCreateManyArgs} args - Arguments to create many Pantients.
     * @example
     * // Create many Pantients
     * const pantient = await prisma.pantient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PantientCreateManyArgs>(args?: SelectSubset<T, PantientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pantients and returns the data saved in the database.
     * @param {PantientCreateManyAndReturnArgs} args - Arguments to create many Pantients.
     * @example
     * // Create many Pantients
     * const pantient = await prisma.pantient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pantients and only return the `id`
     * const pantientWithIdOnly = await prisma.pantient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PantientCreateManyAndReturnArgs>(args?: SelectSubset<T, PantientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pantient.
     * @param {PantientDeleteArgs} args - Arguments to delete one Pantient.
     * @example
     * // Delete one Pantient
     * const Pantient = await prisma.pantient.delete({
     *   where: {
     *     // ... filter to delete one Pantient
     *   }
     * })
     * 
     */
    delete<T extends PantientDeleteArgs>(args: SelectSubset<T, PantientDeleteArgs<ExtArgs>>): Prisma__PantientClient<$Result.GetResult<Prisma.$PantientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pantient.
     * @param {PantientUpdateArgs} args - Arguments to update one Pantient.
     * @example
     * // Update one Pantient
     * const pantient = await prisma.pantient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PantientUpdateArgs>(args: SelectSubset<T, PantientUpdateArgs<ExtArgs>>): Prisma__PantientClient<$Result.GetResult<Prisma.$PantientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pantients.
     * @param {PantientDeleteManyArgs} args - Arguments to filter Pantients to delete.
     * @example
     * // Delete a few Pantients
     * const { count } = await prisma.pantient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PantientDeleteManyArgs>(args?: SelectSubset<T, PantientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pantients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pantients
     * const pantient = await prisma.pantient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PantientUpdateManyArgs>(args: SelectSubset<T, PantientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pantients and returns the data updated in the database.
     * @param {PantientUpdateManyAndReturnArgs} args - Arguments to update many Pantients.
     * @example
     * // Update many Pantients
     * const pantient = await prisma.pantient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pantients and only return the `id`
     * const pantientWithIdOnly = await prisma.pantient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PantientUpdateManyAndReturnArgs>(args: SelectSubset<T, PantientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PantientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pantient.
     * @param {PantientUpsertArgs} args - Arguments to update or create a Pantient.
     * @example
     * // Update or create a Pantient
     * const pantient = await prisma.pantient.upsert({
     *   create: {
     *     // ... data to create a Pantient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pantient we want to update
     *   }
     * })
     */
    upsert<T extends PantientUpsertArgs>(args: SelectSubset<T, PantientUpsertArgs<ExtArgs>>): Prisma__PantientClient<$Result.GetResult<Prisma.$PantientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pantients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantientCountArgs} args - Arguments to filter Pantients to count.
     * @example
     * // Count the number of Pantients
     * const count = await prisma.pantient.count({
     *   where: {
     *     // ... the filter for the Pantients we want to count
     *   }
     * })
    **/
    count<T extends PantientCountArgs>(
      args?: Subset<T, PantientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PantientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pantient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PantientAggregateArgs>(args: Subset<T, PantientAggregateArgs>): Prisma.PrismaPromise<GetPantientAggregateType<T>>

    /**
     * Group by Pantient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PantientGroupByArgs} args - Group by arguments.
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
      T extends PantientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PantientGroupByArgs['orderBy'] }
        : { orderBy?: PantientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PantientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPantientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pantient model
   */
  readonly fields: PantientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pantient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PantientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agendas<T extends Pantient$agendasArgs<ExtArgs> = {}>(args?: Subset<T, Pantient$agendasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Pantient model
   */
  interface PantientFieldRefs {
    readonly id: FieldRef<"Pantient", 'Int'>
    readonly nome: FieldRef<"Pantient", 'String'>
    readonly cpf: FieldRef<"Pantient", 'String'>
    readonly nascimento: FieldRef<"Pantient", 'DateTime'>
    readonly telefone: FieldRef<"Pantient", 'String'>
    readonly email: FieldRef<"Pantient", 'String'>
    readonly cartaoSus: FieldRef<"Pantient", 'String'>
    readonly createdAt: FieldRef<"Pantient", 'DateTime'>
    readonly updatedAt: FieldRef<"Pantient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pantient findUnique
   */
  export type PantientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantient
     */
    select?: PantientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantient
     */
    omit?: PantientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantientInclude<ExtArgs> | null
    /**
     * Filter, which Pantient to fetch.
     */
    where: PantientWhereUniqueInput
  }

  /**
   * Pantient findUniqueOrThrow
   */
  export type PantientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantient
     */
    select?: PantientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantient
     */
    omit?: PantientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantientInclude<ExtArgs> | null
    /**
     * Filter, which Pantient to fetch.
     */
    where: PantientWhereUniqueInput
  }

  /**
   * Pantient findFirst
   */
  export type PantientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantient
     */
    select?: PantientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantient
     */
    omit?: PantientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantientInclude<ExtArgs> | null
    /**
     * Filter, which Pantient to fetch.
     */
    where?: PantientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pantients to fetch.
     */
    orderBy?: PantientOrderByWithRelationInput | PantientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pantients.
     */
    cursor?: PantientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pantients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pantients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pantients.
     */
    distinct?: PantientScalarFieldEnum | PantientScalarFieldEnum[]
  }

  /**
   * Pantient findFirstOrThrow
   */
  export type PantientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantient
     */
    select?: PantientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantient
     */
    omit?: PantientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantientInclude<ExtArgs> | null
    /**
     * Filter, which Pantient to fetch.
     */
    where?: PantientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pantients to fetch.
     */
    orderBy?: PantientOrderByWithRelationInput | PantientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pantients.
     */
    cursor?: PantientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pantients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pantients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pantients.
     */
    distinct?: PantientScalarFieldEnum | PantientScalarFieldEnum[]
  }

  /**
   * Pantient findMany
   */
  export type PantientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantient
     */
    select?: PantientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantient
     */
    omit?: PantientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantientInclude<ExtArgs> | null
    /**
     * Filter, which Pantients to fetch.
     */
    where?: PantientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pantients to fetch.
     */
    orderBy?: PantientOrderByWithRelationInput | PantientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pantients.
     */
    cursor?: PantientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pantients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pantients.
     */
    skip?: number
    distinct?: PantientScalarFieldEnum | PantientScalarFieldEnum[]
  }

  /**
   * Pantient create
   */
  export type PantientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantient
     */
    select?: PantientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantient
     */
    omit?: PantientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantientInclude<ExtArgs> | null
    /**
     * The data needed to create a Pantient.
     */
    data: XOR<PantientCreateInput, PantientUncheckedCreateInput>
  }

  /**
   * Pantient createMany
   */
  export type PantientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pantients.
     */
    data: PantientCreateManyInput | PantientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pantient createManyAndReturn
   */
  export type PantientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantient
     */
    select?: PantientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pantient
     */
    omit?: PantientOmit<ExtArgs> | null
    /**
     * The data used to create many Pantients.
     */
    data: PantientCreateManyInput | PantientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pantient update
   */
  export type PantientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantient
     */
    select?: PantientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantient
     */
    omit?: PantientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantientInclude<ExtArgs> | null
    /**
     * The data needed to update a Pantient.
     */
    data: XOR<PantientUpdateInput, PantientUncheckedUpdateInput>
    /**
     * Choose, which Pantient to update.
     */
    where: PantientWhereUniqueInput
  }

  /**
   * Pantient updateMany
   */
  export type PantientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pantients.
     */
    data: XOR<PantientUpdateManyMutationInput, PantientUncheckedUpdateManyInput>
    /**
     * Filter which Pantients to update
     */
    where?: PantientWhereInput
    /**
     * Limit how many Pantients to update.
     */
    limit?: number
  }

  /**
   * Pantient updateManyAndReturn
   */
  export type PantientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantient
     */
    select?: PantientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pantient
     */
    omit?: PantientOmit<ExtArgs> | null
    /**
     * The data used to update Pantients.
     */
    data: XOR<PantientUpdateManyMutationInput, PantientUncheckedUpdateManyInput>
    /**
     * Filter which Pantients to update
     */
    where?: PantientWhereInput
    /**
     * Limit how many Pantients to update.
     */
    limit?: number
  }

  /**
   * Pantient upsert
   */
  export type PantientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantient
     */
    select?: PantientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantient
     */
    omit?: PantientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantientInclude<ExtArgs> | null
    /**
     * The filter to search for the Pantient to update in case it exists.
     */
    where: PantientWhereUniqueInput
    /**
     * In case the Pantient found by the `where` argument doesn't exist, create a new Pantient with this data.
     */
    create: XOR<PantientCreateInput, PantientUncheckedCreateInput>
    /**
     * In case the Pantient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PantientUpdateInput, PantientUncheckedUpdateInput>
  }

  /**
   * Pantient delete
   */
  export type PantientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantient
     */
    select?: PantientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantient
     */
    omit?: PantientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantientInclude<ExtArgs> | null
    /**
     * Filter which Pantient to delete.
     */
    where: PantientWhereUniqueInput
  }

  /**
   * Pantient deleteMany
   */
  export type PantientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pantients to delete
     */
    where?: PantientWhereInput
    /**
     * Limit how many Pantients to delete.
     */
    limit?: number
  }

  /**
   * Pantient.agendas
   */
  export type Pantient$agendasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agenda
     */
    select?: AgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agenda
     */
    omit?: AgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgendaInclude<ExtArgs> | null
    where?: AgendaWhereInput
    orderBy?: AgendaOrderByWithRelationInput | AgendaOrderByWithRelationInput[]
    cursor?: AgendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgendaScalarFieldEnum | AgendaScalarFieldEnum[]
  }

  /**
   * Pantient without action
   */
  export type PantientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pantient
     */
    select?: PantientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pantient
     */
    omit?: PantientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PantientInclude<ExtArgs> | null
  }


  /**
   * Model Attend
   */

  export type AggregateAttend = {
    _count: AttendCountAggregateOutputType | null
    _avg: AttendAvgAggregateOutputType | null
    _sum: AttendSumAggregateOutputType | null
    _min: AttendMinAggregateOutputType | null
    _max: AttendMaxAggregateOutputType | null
  }

  export type AttendAvgAggregateOutputType = {
    userId: number | null
  }

  export type AttendSumAggregateOutputType = {
    userId: number | null
  }

  export type AttendMinAggregateOutputType = {
    userId: number | null
    setor: string | null
  }

  export type AttendMaxAggregateOutputType = {
    userId: number | null
    setor: string | null
  }

  export type AttendCountAggregateOutputType = {
    userId: number
    setor: number
    _all: number
  }


  export type AttendAvgAggregateInputType = {
    userId?: true
  }

  export type AttendSumAggregateInputType = {
    userId?: true
  }

  export type AttendMinAggregateInputType = {
    userId?: true
    setor?: true
  }

  export type AttendMaxAggregateInputType = {
    userId?: true
    setor?: true
  }

  export type AttendCountAggregateInputType = {
    userId?: true
    setor?: true
    _all?: true
  }

  export type AttendAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attend to aggregate.
     */
    where?: AttendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attends to fetch.
     */
    orderBy?: AttendOrderByWithRelationInput | AttendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attends
    **/
    _count?: true | AttendCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendMaxAggregateInputType
  }

  export type GetAttendAggregateType<T extends AttendAggregateArgs> = {
        [P in keyof T & keyof AggregateAttend]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttend[P]>
      : GetScalarType<T[P], AggregateAttend[P]>
  }




  export type AttendGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendWhereInput
    orderBy?: AttendOrderByWithAggregationInput | AttendOrderByWithAggregationInput[]
    by: AttendScalarFieldEnum[] | AttendScalarFieldEnum
    having?: AttendScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendCountAggregateInputType | true
    _avg?: AttendAvgAggregateInputType
    _sum?: AttendSumAggregateInputType
    _min?: AttendMinAggregateInputType
    _max?: AttendMaxAggregateInputType
  }

  export type AttendGroupByOutputType = {
    userId: number
    setor: string
    _count: AttendCountAggregateOutputType | null
    _avg: AttendAvgAggregateOutputType | null
    _sum: AttendSumAggregateOutputType | null
    _min: AttendMinAggregateOutputType | null
    _max: AttendMaxAggregateOutputType | null
  }

  type GetAttendGroupByPayload<T extends AttendGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendGroupByOutputType[P]>
            : GetScalarType<T[P], AttendGroupByOutputType[P]>
        }
      >
    >


  export type AttendSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    setor?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attend"]>

  export type AttendSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    setor?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attend"]>

  export type AttendSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    setor?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attend"]>

  export type AttendSelectScalar = {
    userId?: boolean
    setor?: boolean
  }

  export type AttendOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "setor", ExtArgs["result"]["attend"]>
  export type AttendInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type AttendIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type AttendIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $AttendPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attend"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      setor: string
    }, ExtArgs["result"]["attend"]>
    composites: {}
  }

  type AttendGetPayload<S extends boolean | null | undefined | AttendDefaultArgs> = $Result.GetResult<Prisma.$AttendPayload, S>

  type AttendCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendCountAggregateInputType | true
    }

  export interface AttendDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attend'], meta: { name: 'Attend' } }
    /**
     * Find zero or one Attend that matches the filter.
     * @param {AttendFindUniqueArgs} args - Arguments to find a Attend
     * @example
     * // Get one Attend
     * const attend = await prisma.attend.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendFindUniqueArgs>(args: SelectSubset<T, AttendFindUniqueArgs<ExtArgs>>): Prisma__AttendClient<$Result.GetResult<Prisma.$AttendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attend that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendFindUniqueOrThrowArgs} args - Arguments to find a Attend
     * @example
     * // Get one Attend
     * const attend = await prisma.attend.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendClient<$Result.GetResult<Prisma.$AttendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attend that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendFindFirstArgs} args - Arguments to find a Attend
     * @example
     * // Get one Attend
     * const attend = await prisma.attend.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendFindFirstArgs>(args?: SelectSubset<T, AttendFindFirstArgs<ExtArgs>>): Prisma__AttendClient<$Result.GetResult<Prisma.$AttendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attend that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendFindFirstOrThrowArgs} args - Arguments to find a Attend
     * @example
     * // Get one Attend
     * const attend = await prisma.attend.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendClient<$Result.GetResult<Prisma.$AttendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attends
     * const attends = await prisma.attend.findMany()
     * 
     * // Get first 10 Attends
     * const attends = await prisma.attend.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const attendWithUserIdOnly = await prisma.attend.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends AttendFindManyArgs>(args?: SelectSubset<T, AttendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attend.
     * @param {AttendCreateArgs} args - Arguments to create a Attend.
     * @example
     * // Create one Attend
     * const Attend = await prisma.attend.create({
     *   data: {
     *     // ... data to create a Attend
     *   }
     * })
     * 
     */
    create<T extends AttendCreateArgs>(args: SelectSubset<T, AttendCreateArgs<ExtArgs>>): Prisma__AttendClient<$Result.GetResult<Prisma.$AttendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attends.
     * @param {AttendCreateManyArgs} args - Arguments to create many Attends.
     * @example
     * // Create many Attends
     * const attend = await prisma.attend.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendCreateManyArgs>(args?: SelectSubset<T, AttendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attends and returns the data saved in the database.
     * @param {AttendCreateManyAndReturnArgs} args - Arguments to create many Attends.
     * @example
     * // Create many Attends
     * const attend = await prisma.attend.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attends and only return the `userId`
     * const attendWithUserIdOnly = await prisma.attend.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attend.
     * @param {AttendDeleteArgs} args - Arguments to delete one Attend.
     * @example
     * // Delete one Attend
     * const Attend = await prisma.attend.delete({
     *   where: {
     *     // ... filter to delete one Attend
     *   }
     * })
     * 
     */
    delete<T extends AttendDeleteArgs>(args: SelectSubset<T, AttendDeleteArgs<ExtArgs>>): Prisma__AttendClient<$Result.GetResult<Prisma.$AttendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attend.
     * @param {AttendUpdateArgs} args - Arguments to update one Attend.
     * @example
     * // Update one Attend
     * const attend = await prisma.attend.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendUpdateArgs>(args: SelectSubset<T, AttendUpdateArgs<ExtArgs>>): Prisma__AttendClient<$Result.GetResult<Prisma.$AttendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attends.
     * @param {AttendDeleteManyArgs} args - Arguments to filter Attends to delete.
     * @example
     * // Delete a few Attends
     * const { count } = await prisma.attend.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendDeleteManyArgs>(args?: SelectSubset<T, AttendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attends
     * const attend = await prisma.attend.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendUpdateManyArgs>(args: SelectSubset<T, AttendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attends and returns the data updated in the database.
     * @param {AttendUpdateManyAndReturnArgs} args - Arguments to update many Attends.
     * @example
     * // Update many Attends
     * const attend = await prisma.attend.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attends and only return the `userId`
     * const attendWithUserIdOnly = await prisma.attend.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AttendUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attend.
     * @param {AttendUpsertArgs} args - Arguments to update or create a Attend.
     * @example
     * // Update or create a Attend
     * const attend = await prisma.attend.upsert({
     *   create: {
     *     // ... data to create a Attend
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attend we want to update
     *   }
     * })
     */
    upsert<T extends AttendUpsertArgs>(args: SelectSubset<T, AttendUpsertArgs<ExtArgs>>): Prisma__AttendClient<$Result.GetResult<Prisma.$AttendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendCountArgs} args - Arguments to filter Attends to count.
     * @example
     * // Count the number of Attends
     * const count = await prisma.attend.count({
     *   where: {
     *     // ... the filter for the Attends we want to count
     *   }
     * })
    **/
    count<T extends AttendCountArgs>(
      args?: Subset<T, AttendCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendAggregateArgs>(args: Subset<T, AttendAggregateArgs>): Prisma.PrismaPromise<GetAttendAggregateType<T>>

    /**
     * Group by Attend.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendGroupByArgs} args - Group by arguments.
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
      T extends AttendGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendGroupByArgs['orderBy'] }
        : { orderBy?: AttendGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attend model
   */
  readonly fields: AttendFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attend.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attend model
   */
  interface AttendFieldRefs {
    readonly userId: FieldRef<"Attend", 'Int'>
    readonly setor: FieldRef<"Attend", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Attend findUnique
   */
  export type AttendFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attend
     */
    select?: AttendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attend
     */
    omit?: AttendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendInclude<ExtArgs> | null
    /**
     * Filter, which Attend to fetch.
     */
    where: AttendWhereUniqueInput
  }

  /**
   * Attend findUniqueOrThrow
   */
  export type AttendFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attend
     */
    select?: AttendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attend
     */
    omit?: AttendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendInclude<ExtArgs> | null
    /**
     * Filter, which Attend to fetch.
     */
    where: AttendWhereUniqueInput
  }

  /**
   * Attend findFirst
   */
  export type AttendFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attend
     */
    select?: AttendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attend
     */
    omit?: AttendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendInclude<ExtArgs> | null
    /**
     * Filter, which Attend to fetch.
     */
    where?: AttendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attends to fetch.
     */
    orderBy?: AttendOrderByWithRelationInput | AttendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attends.
     */
    cursor?: AttendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attends.
     */
    distinct?: AttendScalarFieldEnum | AttendScalarFieldEnum[]
  }

  /**
   * Attend findFirstOrThrow
   */
  export type AttendFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attend
     */
    select?: AttendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attend
     */
    omit?: AttendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendInclude<ExtArgs> | null
    /**
     * Filter, which Attend to fetch.
     */
    where?: AttendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attends to fetch.
     */
    orderBy?: AttendOrderByWithRelationInput | AttendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attends.
     */
    cursor?: AttendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attends.
     */
    distinct?: AttendScalarFieldEnum | AttendScalarFieldEnum[]
  }

  /**
   * Attend findMany
   */
  export type AttendFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attend
     */
    select?: AttendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attend
     */
    omit?: AttendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendInclude<ExtArgs> | null
    /**
     * Filter, which Attends to fetch.
     */
    where?: AttendWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attends to fetch.
     */
    orderBy?: AttendOrderByWithRelationInput | AttendOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attends.
     */
    cursor?: AttendWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attends.
     */
    skip?: number
    distinct?: AttendScalarFieldEnum | AttendScalarFieldEnum[]
  }

  /**
   * Attend create
   */
  export type AttendCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attend
     */
    select?: AttendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attend
     */
    omit?: AttendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendInclude<ExtArgs> | null
    /**
     * The data needed to create a Attend.
     */
    data: XOR<AttendCreateInput, AttendUncheckedCreateInput>
  }

  /**
   * Attend createMany
   */
  export type AttendCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attends.
     */
    data: AttendCreateManyInput | AttendCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attend createManyAndReturn
   */
  export type AttendCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attend
     */
    select?: AttendSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attend
     */
    omit?: AttendOmit<ExtArgs> | null
    /**
     * The data used to create many Attends.
     */
    data: AttendCreateManyInput | AttendCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attend update
   */
  export type AttendUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attend
     */
    select?: AttendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attend
     */
    omit?: AttendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendInclude<ExtArgs> | null
    /**
     * The data needed to update a Attend.
     */
    data: XOR<AttendUpdateInput, AttendUncheckedUpdateInput>
    /**
     * Choose, which Attend to update.
     */
    where: AttendWhereUniqueInput
  }

  /**
   * Attend updateMany
   */
  export type AttendUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attends.
     */
    data: XOR<AttendUpdateManyMutationInput, AttendUncheckedUpdateManyInput>
    /**
     * Filter which Attends to update
     */
    where?: AttendWhereInput
    /**
     * Limit how many Attends to update.
     */
    limit?: number
  }

  /**
   * Attend updateManyAndReturn
   */
  export type AttendUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attend
     */
    select?: AttendSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attend
     */
    omit?: AttendOmit<ExtArgs> | null
    /**
     * The data used to update Attends.
     */
    data: XOR<AttendUpdateManyMutationInput, AttendUncheckedUpdateManyInput>
    /**
     * Filter which Attends to update
     */
    where?: AttendWhereInput
    /**
     * Limit how many Attends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attend upsert
   */
  export type AttendUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attend
     */
    select?: AttendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attend
     */
    omit?: AttendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendInclude<ExtArgs> | null
    /**
     * The filter to search for the Attend to update in case it exists.
     */
    where: AttendWhereUniqueInput
    /**
     * In case the Attend found by the `where` argument doesn't exist, create a new Attend with this data.
     */
    create: XOR<AttendCreateInput, AttendUncheckedCreateInput>
    /**
     * In case the Attend was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendUpdateInput, AttendUncheckedUpdateInput>
  }

  /**
   * Attend delete
   */
  export type AttendDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attend
     */
    select?: AttendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attend
     */
    omit?: AttendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendInclude<ExtArgs> | null
    /**
     * Filter which Attend to delete.
     */
    where: AttendWhereUniqueInput
  }

  /**
   * Attend deleteMany
   */
  export type AttendDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attends to delete
     */
    where?: AttendWhereInput
    /**
     * Limit how many Attends to delete.
     */
    limit?: number
  }

  /**
   * Attend without action
   */
  export type AttendDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attend
     */
    select?: AttendSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attend
     */
    omit?: AttendOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendInclude<ExtArgs> | null
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


  export const AgendaScalarFieldEnum: {
    id: 'id',
    horario_atend: 'horario_atend',
    statusUrgencia: 'statusUrgencia',
    status: 'status',
    pantId: 'pantId',
    docId: 'docId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgendaScalarFieldEnum = (typeof AgendaScalarFieldEnum)[keyof typeof AgendaScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    nascimento: 'nascimento',
    fone: 'fone',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    userId: 'userId',
    crm: 'crm',
    especialidade: 'especialidade'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const PantientScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    cpf: 'cpf',
    nascimento: 'nascimento',
    telefone: 'telefone',
    email: 'email',
    cartaoSus: 'cartaoSus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PantientScalarFieldEnum = (typeof PantientScalarFieldEnum)[keyof typeof PantientScalarFieldEnum]


  export const AttendScalarFieldEnum: {
    userId: 'userId',
    setor: 'setor'
  };

  export type AttendScalarFieldEnum = (typeof AttendScalarFieldEnum)[keyof typeof AttendScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'StatusUrgencia'
   */
  export type EnumStatusUrgenciaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusUrgencia'>
    


  /**
   * Reference to a field of type 'StatusUrgencia[]'
   */
  export type ListEnumStatusUrgenciaFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusUrgencia[]'>
    


  /**
   * Reference to a field of type 'StatusAtendimento'
   */
  export type EnumStatusAtendimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAtendimento'>
    


  /**
   * Reference to a field of type 'StatusAtendimento[]'
   */
  export type ListEnumStatusAtendimentoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusAtendimento[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AgendaWhereInput = {
    AND?: AgendaWhereInput | AgendaWhereInput[]
    OR?: AgendaWhereInput[]
    NOT?: AgendaWhereInput | AgendaWhereInput[]
    id?: StringFilter<"Agenda"> | string
    horario_atend?: DateTimeFilter<"Agenda"> | Date | string
    statusUrgencia?: EnumStatusUrgenciaFilter<"Agenda"> | $Enums.StatusUrgencia
    status?: EnumStatusAtendimentoFilter<"Agenda"> | $Enums.StatusAtendimento
    pantId?: IntFilter<"Agenda"> | number
    docId?: IntFilter<"Agenda"> | number
    createdAt?: DateTimeFilter<"Agenda"> | Date | string
    updatedAt?: DateTimeFilter<"Agenda"> | Date | string
    paciente?: XOR<PantientScalarRelationFilter, PantientWhereInput>
    medico?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type AgendaOrderByWithRelationInput = {
    id?: SortOrder
    horario_atend?: SortOrder
    statusUrgencia?: SortOrder
    status?: SortOrder
    pantId?: SortOrder
    docId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    paciente?: PantientOrderByWithRelationInput
    medico?: DoctorOrderByWithRelationInput
  }

  export type AgendaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgendaWhereInput | AgendaWhereInput[]
    OR?: AgendaWhereInput[]
    NOT?: AgendaWhereInput | AgendaWhereInput[]
    horario_atend?: DateTimeFilter<"Agenda"> | Date | string
    statusUrgencia?: EnumStatusUrgenciaFilter<"Agenda"> | $Enums.StatusUrgencia
    status?: EnumStatusAtendimentoFilter<"Agenda"> | $Enums.StatusAtendimento
    pantId?: IntFilter<"Agenda"> | number
    docId?: IntFilter<"Agenda"> | number
    createdAt?: DateTimeFilter<"Agenda"> | Date | string
    updatedAt?: DateTimeFilter<"Agenda"> | Date | string
    paciente?: XOR<PantientScalarRelationFilter, PantientWhereInput>
    medico?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id">

  export type AgendaOrderByWithAggregationInput = {
    id?: SortOrder
    horario_atend?: SortOrder
    statusUrgencia?: SortOrder
    status?: SortOrder
    pantId?: SortOrder
    docId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgendaCountOrderByAggregateInput
    _avg?: AgendaAvgOrderByAggregateInput
    _max?: AgendaMaxOrderByAggregateInput
    _min?: AgendaMinOrderByAggregateInput
    _sum?: AgendaSumOrderByAggregateInput
  }

  export type AgendaScalarWhereWithAggregatesInput = {
    AND?: AgendaScalarWhereWithAggregatesInput | AgendaScalarWhereWithAggregatesInput[]
    OR?: AgendaScalarWhereWithAggregatesInput[]
    NOT?: AgendaScalarWhereWithAggregatesInput | AgendaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Agenda"> | string
    horario_atend?: DateTimeWithAggregatesFilter<"Agenda"> | Date | string
    statusUrgencia?: EnumStatusUrgenciaWithAggregatesFilter<"Agenda"> | $Enums.StatusUrgencia
    status?: EnumStatusAtendimentoWithAggregatesFilter<"Agenda"> | $Enums.StatusAtendimento
    pantId?: IntWithAggregatesFilter<"Agenda"> | number
    docId?: IntWithAggregatesFilter<"Agenda"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Agenda"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Agenda"> | Date | string
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    nome?: StringFilter<"Users"> | string
    cpf?: StringFilter<"Users"> | string
    nascimento?: DateTimeFilter<"Users"> | Date | string
    fone?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    passwordHash?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    medico?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    atendente?: XOR<AttendNullableScalarRelationFilter, AttendWhereInput> | null
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    nascimento?: SortOrder
    fone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medico?: DoctorOrderByWithRelationInput
    atendente?: AttendOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    nome?: StringFilter<"Users"> | string
    nascimento?: DateTimeFilter<"Users"> | Date | string
    fone?: StringFilter<"Users"> | string
    passwordHash?: StringFilter<"Users"> | string
    role?: EnumRoleFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    medico?: XOR<DoctorNullableScalarRelationFilter, DoctorWhereInput> | null
    atendente?: XOR<AttendNullableScalarRelationFilter, AttendWhereInput> | null
  }, "id" | "cpf" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    nascimento?: SortOrder
    fone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    nome?: StringWithAggregatesFilter<"Users"> | string
    cpf?: StringWithAggregatesFilter<"Users"> | string
    nascimento?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    fone?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    passwordHash?: StringWithAggregatesFilter<"Users"> | string
    role?: EnumRoleWithAggregatesFilter<"Users"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    userId?: IntFilter<"Doctor"> | number
    crm?: StringFilter<"Doctor"> | string
    especialidade?: StringFilter<"Doctor"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    agendas?: AgendaListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    userId?: SortOrder
    crm?: SortOrder
    especialidade?: SortOrder
    user?: UsersOrderByWithRelationInput
    agendas?: AgendaOrderByRelationAggregateInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    crm?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    especialidade?: StringFilter<"Doctor"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    agendas?: AgendaListRelationFilter
  }, "userId" | "crm">

  export type DoctorOrderByWithAggregationInput = {
    userId?: SortOrder
    crm?: SortOrder
    especialidade?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Doctor"> | number
    crm?: StringWithAggregatesFilter<"Doctor"> | string
    especialidade?: StringWithAggregatesFilter<"Doctor"> | string
  }

  export type PantientWhereInput = {
    AND?: PantientWhereInput | PantientWhereInput[]
    OR?: PantientWhereInput[]
    NOT?: PantientWhereInput | PantientWhereInput[]
    id?: IntFilter<"Pantient"> | number
    nome?: StringFilter<"Pantient"> | string
    cpf?: StringFilter<"Pantient"> | string
    nascimento?: DateTimeFilter<"Pantient"> | Date | string
    telefone?: StringFilter<"Pantient"> | string
    email?: StringNullableFilter<"Pantient"> | string | null
    cartaoSus?: StringFilter<"Pantient"> | string
    createdAt?: DateTimeFilter<"Pantient"> | Date | string
    updatedAt?: DateTimeFilter<"Pantient"> | Date | string
    agendas?: AgendaListRelationFilter
  }

  export type PantientOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    nascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrderInput | SortOrder
    cartaoSus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    agendas?: AgendaOrderByRelationAggregateInput
  }

  export type PantientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cpf?: string
    cartaoSus?: string
    AND?: PantientWhereInput | PantientWhereInput[]
    OR?: PantientWhereInput[]
    NOT?: PantientWhereInput | PantientWhereInput[]
    nome?: StringFilter<"Pantient"> | string
    nascimento?: DateTimeFilter<"Pantient"> | Date | string
    telefone?: StringFilter<"Pantient"> | string
    email?: StringNullableFilter<"Pantient"> | string | null
    createdAt?: DateTimeFilter<"Pantient"> | Date | string
    updatedAt?: DateTimeFilter<"Pantient"> | Date | string
    agendas?: AgendaListRelationFilter
  }, "id" | "cpf" | "cartaoSus">

  export type PantientOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    nascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrderInput | SortOrder
    cartaoSus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PantientCountOrderByAggregateInput
    _avg?: PantientAvgOrderByAggregateInput
    _max?: PantientMaxOrderByAggregateInput
    _min?: PantientMinOrderByAggregateInput
    _sum?: PantientSumOrderByAggregateInput
  }

  export type PantientScalarWhereWithAggregatesInput = {
    AND?: PantientScalarWhereWithAggregatesInput | PantientScalarWhereWithAggregatesInput[]
    OR?: PantientScalarWhereWithAggregatesInput[]
    NOT?: PantientScalarWhereWithAggregatesInput | PantientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pantient"> | number
    nome?: StringWithAggregatesFilter<"Pantient"> | string
    cpf?: StringWithAggregatesFilter<"Pantient"> | string
    nascimento?: DateTimeWithAggregatesFilter<"Pantient"> | Date | string
    telefone?: StringWithAggregatesFilter<"Pantient"> | string
    email?: StringNullableWithAggregatesFilter<"Pantient"> | string | null
    cartaoSus?: StringWithAggregatesFilter<"Pantient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Pantient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pantient"> | Date | string
  }

  export type AttendWhereInput = {
    AND?: AttendWhereInput | AttendWhereInput[]
    OR?: AttendWhereInput[]
    NOT?: AttendWhereInput | AttendWhereInput[]
    userId?: IntFilter<"Attend"> | number
    setor?: StringFilter<"Attend"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type AttendOrderByWithRelationInput = {
    userId?: SortOrder
    setor?: SortOrder
    user?: UsersOrderByWithRelationInput
  }

  export type AttendWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: AttendWhereInput | AttendWhereInput[]
    OR?: AttendWhereInput[]
    NOT?: AttendWhereInput | AttendWhereInput[]
    setor?: StringFilter<"Attend"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "userId">

  export type AttendOrderByWithAggregationInput = {
    userId?: SortOrder
    setor?: SortOrder
    _count?: AttendCountOrderByAggregateInput
    _avg?: AttendAvgOrderByAggregateInput
    _max?: AttendMaxOrderByAggregateInput
    _min?: AttendMinOrderByAggregateInput
    _sum?: AttendSumOrderByAggregateInput
  }

  export type AttendScalarWhereWithAggregatesInput = {
    AND?: AttendScalarWhereWithAggregatesInput | AttendScalarWhereWithAggregatesInput[]
    OR?: AttendScalarWhereWithAggregatesInput[]
    NOT?: AttendScalarWhereWithAggregatesInput | AttendScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Attend"> | number
    setor?: StringWithAggregatesFilter<"Attend"> | string
  }

  export type AgendaCreateInput = {
    id?: string
    horario_atend: Date | string
    statusUrgencia?: $Enums.StatusUrgencia
    status?: $Enums.StatusAtendimento
    createdAt?: Date | string
    updatedAt?: Date | string
    paciente: PantientCreateNestedOneWithoutAgendasInput
    medico: DoctorCreateNestedOneWithoutAgendasInput
  }

  export type AgendaUncheckedCreateInput = {
    id?: string
    horario_atend: Date | string
    statusUrgencia?: $Enums.StatusUrgencia
    status?: $Enums.StatusAtendimento
    pantId: number
    docId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario_atend?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUrgencia?: EnumStatusUrgenciaFieldUpdateOperationsInput | $Enums.StatusUrgencia
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PantientUpdateOneRequiredWithoutAgendasNestedInput
    medico?: DoctorUpdateOneRequiredWithoutAgendasNestedInput
  }

  export type AgendaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario_atend?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUrgencia?: EnumStatusUrgenciaFieldUpdateOperationsInput | $Enums.StatusUrgencia
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    pantId?: IntFieldUpdateOperationsInput | number
    docId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaCreateManyInput = {
    id?: string
    horario_atend: Date | string
    statusUrgencia?: $Enums.StatusUrgencia
    status?: $Enums.StatusAtendimento
    pantId: number
    docId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario_atend?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUrgencia?: EnumStatusUrgenciaFieldUpdateOperationsInput | $Enums.StatusUrgencia
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario_atend?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUrgencia?: EnumStatusUrgenciaFieldUpdateOperationsInput | $Enums.StatusUrgencia
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    pantId?: IntFieldUpdateOperationsInput | number
    docId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersCreateInput = {
    nome: string
    cpf: string
    nascimento: Date | string
    fone: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    medico?: DoctorCreateNestedOneWithoutUserInput
    atendente?: AttendCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    nome: string
    cpf: string
    nascimento: Date | string
    fone: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    medico?: DoctorUncheckedCreateNestedOneWithoutUserInput
    atendente?: AttendUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    fone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: DoctorUpdateOneWithoutUserNestedInput
    atendente?: AttendUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    fone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: DoctorUncheckedUpdateOneWithoutUserNestedInput
    atendente?: AttendUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    nome: string
    cpf: string
    nascimento: Date | string
    fone: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    fone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    fone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorCreateInput = {
    crm: string
    especialidade: string
    user: UsersCreateNestedOneWithoutMedicoInput
    agendas?: AgendaCreateNestedManyWithoutMedicoInput
  }

  export type DoctorUncheckedCreateInput = {
    userId: number
    crm: string
    especialidade: string
    agendas?: AgendaUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type DoctorUpdateInput = {
    crm?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutMedicoNestedInput
    agendas?: AgendaUpdateManyWithoutMedicoNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    crm?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    agendas?: AgendaUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type DoctorCreateManyInput = {
    userId: number
    crm: string
    especialidade: string
  }

  export type DoctorUpdateManyMutationInput = {
    crm?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    crm?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type PantientCreateInput = {
    nome: string
    cpf: string
    nascimento: Date | string
    telefone: string
    email?: string | null
    cartaoSus: string
    createdAt?: Date | string
    updatedAt?: Date | string
    agendas?: AgendaCreateNestedManyWithoutPacienteInput
  }

  export type PantientUncheckedCreateInput = {
    id?: number
    nome: string
    cpf: string
    nascimento: Date | string
    telefone: string
    email?: string | null
    cartaoSus: string
    createdAt?: Date | string
    updatedAt?: Date | string
    agendas?: AgendaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PantientUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cartaoSus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendas?: AgendaUpdateManyWithoutPacienteNestedInput
  }

  export type PantientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cartaoSus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agendas?: AgendaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PantientCreateManyInput = {
    id?: number
    nome: string
    cpf: string
    nascimento: Date | string
    telefone: string
    email?: string | null
    cartaoSus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PantientUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cartaoSus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cartaoSus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendCreateInput = {
    setor: string
    user: UsersCreateNestedOneWithoutAtendenteInput
  }

  export type AttendUncheckedCreateInput = {
    userId: number
    setor: string
  }

  export type AttendUpdateInput = {
    setor?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutAtendenteNestedInput
  }

  export type AttendUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    setor?: StringFieldUpdateOperationsInput | string
  }

  export type AttendCreateManyInput = {
    userId: number
    setor: string
  }

  export type AttendUpdateManyMutationInput = {
    setor?: StringFieldUpdateOperationsInput | string
  }

  export type AttendUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    setor?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumStatusUrgenciaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUrgencia | EnumStatusUrgenciaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUrgencia[] | ListEnumStatusUrgenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusUrgencia[] | ListEnumStatusUrgenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusUrgenciaFilter<$PrismaModel> | $Enums.StatusUrgencia
  }

  export type EnumStatusAtendimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtendimento | EnumStatusAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtendimentoFilter<$PrismaModel> | $Enums.StatusAtendimento
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PantientScalarRelationFilter = {
    is?: PantientWhereInput
    isNot?: PantientWhereInput
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type AgendaCountOrderByAggregateInput = {
    id?: SortOrder
    horario_atend?: SortOrder
    statusUrgencia?: SortOrder
    status?: SortOrder
    pantId?: SortOrder
    docId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgendaAvgOrderByAggregateInput = {
    pantId?: SortOrder
    docId?: SortOrder
  }

  export type AgendaMaxOrderByAggregateInput = {
    id?: SortOrder
    horario_atend?: SortOrder
    statusUrgencia?: SortOrder
    status?: SortOrder
    pantId?: SortOrder
    docId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgendaMinOrderByAggregateInput = {
    id?: SortOrder
    horario_atend?: SortOrder
    statusUrgencia?: SortOrder
    status?: SortOrder
    pantId?: SortOrder
    docId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgendaSumOrderByAggregateInput = {
    pantId?: SortOrder
    docId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumStatusUrgenciaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUrgencia | EnumStatusUrgenciaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUrgencia[] | ListEnumStatusUrgenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusUrgencia[] | ListEnumStatusUrgenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusUrgenciaWithAggregatesFilter<$PrismaModel> | $Enums.StatusUrgencia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusUrgenciaFilter<$PrismaModel>
    _max?: NestedEnumStatusUrgenciaFilter<$PrismaModel>
  }

  export type EnumStatusAtendimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtendimento | EnumStatusAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtendimentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusAtendimento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAtendimentoFilter<$PrismaModel>
    _max?: NestedEnumStatusAtendimentoFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DoctorNullableScalarRelationFilter = {
    is?: DoctorWhereInput | null
    isNot?: DoctorWhereInput | null
  }

  export type AttendNullableScalarRelationFilter = {
    is?: AttendWhereInput | null
    isNot?: AttendWhereInput | null
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    nascimento?: SortOrder
    fone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    nascimento?: SortOrder
    fone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    nascimento?: SortOrder
    fone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type AgendaListRelationFilter = {
    every?: AgendaWhereInput
    some?: AgendaWhereInput
    none?: AgendaWhereInput
  }

  export type AgendaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorCountOrderByAggregateInput = {
    userId?: SortOrder
    crm?: SortOrder
    especialidade?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    userId?: SortOrder
    crm?: SortOrder
    especialidade?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    userId?: SortOrder
    crm?: SortOrder
    especialidade?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PantientCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    nascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    cartaoSus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PantientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PantientMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    nascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    cartaoSus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PantientMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    cpf?: SortOrder
    nascimento?: SortOrder
    telefone?: SortOrder
    email?: SortOrder
    cartaoSus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PantientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AttendCountOrderByAggregateInput = {
    userId?: SortOrder
    setor?: SortOrder
  }

  export type AttendAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type AttendMaxOrderByAggregateInput = {
    userId?: SortOrder
    setor?: SortOrder
  }

  export type AttendMinOrderByAggregateInput = {
    userId?: SortOrder
    setor?: SortOrder
  }

  export type AttendSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type PantientCreateNestedOneWithoutAgendasInput = {
    create?: XOR<PantientCreateWithoutAgendasInput, PantientUncheckedCreateWithoutAgendasInput>
    connectOrCreate?: PantientCreateOrConnectWithoutAgendasInput
    connect?: PantientWhereUniqueInput
  }

  export type DoctorCreateNestedOneWithoutAgendasInput = {
    create?: XOR<DoctorCreateWithoutAgendasInput, DoctorUncheckedCreateWithoutAgendasInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAgendasInput
    connect?: DoctorWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusUrgenciaFieldUpdateOperationsInput = {
    set?: $Enums.StatusUrgencia
  }

  export type EnumStatusAtendimentoFieldUpdateOperationsInput = {
    set?: $Enums.StatusAtendimento
  }

  export type PantientUpdateOneRequiredWithoutAgendasNestedInput = {
    create?: XOR<PantientCreateWithoutAgendasInput, PantientUncheckedCreateWithoutAgendasInput>
    connectOrCreate?: PantientCreateOrConnectWithoutAgendasInput
    upsert?: PantientUpsertWithoutAgendasInput
    connect?: PantientWhereUniqueInput
    update?: XOR<XOR<PantientUpdateToOneWithWhereWithoutAgendasInput, PantientUpdateWithoutAgendasInput>, PantientUncheckedUpdateWithoutAgendasInput>
  }

  export type DoctorUpdateOneRequiredWithoutAgendasNestedInput = {
    create?: XOR<DoctorCreateWithoutAgendasInput, DoctorUncheckedCreateWithoutAgendasInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutAgendasInput
    upsert?: DoctorUpsertWithoutAgendasInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutAgendasInput, DoctorUpdateWithoutAgendasInput>, DoctorUncheckedUpdateWithoutAgendasInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DoctorCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type AttendCreateNestedOneWithoutUserInput = {
    create?: XOR<AttendCreateWithoutUserInput, AttendUncheckedCreateWithoutUserInput>
    connectOrCreate?: AttendCreateOrConnectWithoutUserInput
    connect?: AttendWhereUniqueInput
  }

  export type DoctorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    connect?: DoctorWhereUniqueInput
  }

  export type AttendUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<AttendCreateWithoutUserInput, AttendUncheckedCreateWithoutUserInput>
    connectOrCreate?: AttendCreateOrConnectWithoutUserInput
    connect?: AttendWhereUniqueInput
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DoctorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type AttendUpdateOneWithoutUserNestedInput = {
    create?: XOR<AttendCreateWithoutUserInput, AttendUncheckedCreateWithoutUserInput>
    connectOrCreate?: AttendCreateOrConnectWithoutUserInput
    upsert?: AttendUpsertWithoutUserInput
    disconnect?: AttendWhereInput | boolean
    delete?: AttendWhereInput | boolean
    connect?: AttendWhereUniqueInput
    update?: XOR<XOR<AttendUpdateToOneWithWhereWithoutUserInput, AttendUpdateWithoutUserInput>, AttendUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutUserInput
    upsert?: DoctorUpsertWithoutUserInput
    disconnect?: DoctorWhereInput | boolean
    delete?: DoctorWhereInput | boolean
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutUserInput, DoctorUpdateWithoutUserInput>, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type AttendUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<AttendCreateWithoutUserInput, AttendUncheckedCreateWithoutUserInput>
    connectOrCreate?: AttendCreateOrConnectWithoutUserInput
    upsert?: AttendUpsertWithoutUserInput
    disconnect?: AttendWhereInput | boolean
    delete?: AttendWhereInput | boolean
    connect?: AttendWhereUniqueInput
    update?: XOR<XOR<AttendUpdateToOneWithWhereWithoutUserInput, AttendUpdateWithoutUserInput>, AttendUncheckedUpdateWithoutUserInput>
  }

  export type UsersCreateNestedOneWithoutMedicoInput = {
    create?: XOR<UsersCreateWithoutMedicoInput, UsersUncheckedCreateWithoutMedicoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMedicoInput
    connect?: UsersWhereUniqueInput
  }

  export type AgendaCreateNestedManyWithoutMedicoInput = {
    create?: XOR<AgendaCreateWithoutMedicoInput, AgendaUncheckedCreateWithoutMedicoInput> | AgendaCreateWithoutMedicoInput[] | AgendaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutMedicoInput | AgendaCreateOrConnectWithoutMedicoInput[]
    createMany?: AgendaCreateManyMedicoInputEnvelope
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
  }

  export type AgendaUncheckedCreateNestedManyWithoutMedicoInput = {
    create?: XOR<AgendaCreateWithoutMedicoInput, AgendaUncheckedCreateWithoutMedicoInput> | AgendaCreateWithoutMedicoInput[] | AgendaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutMedicoInput | AgendaCreateOrConnectWithoutMedicoInput[]
    createMany?: AgendaCreateManyMedicoInputEnvelope
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
  }

  export type UsersUpdateOneRequiredWithoutMedicoNestedInput = {
    create?: XOR<UsersCreateWithoutMedicoInput, UsersUncheckedCreateWithoutMedicoInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMedicoInput
    upsert?: UsersUpsertWithoutMedicoInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMedicoInput, UsersUpdateWithoutMedicoInput>, UsersUncheckedUpdateWithoutMedicoInput>
  }

  export type AgendaUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<AgendaCreateWithoutMedicoInput, AgendaUncheckedCreateWithoutMedicoInput> | AgendaCreateWithoutMedicoInput[] | AgendaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutMedicoInput | AgendaCreateOrConnectWithoutMedicoInput[]
    upsert?: AgendaUpsertWithWhereUniqueWithoutMedicoInput | AgendaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: AgendaCreateManyMedicoInputEnvelope
    set?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    disconnect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    delete?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    update?: AgendaUpdateWithWhereUniqueWithoutMedicoInput | AgendaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: AgendaUpdateManyWithWhereWithoutMedicoInput | AgendaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
  }

  export type AgendaUncheckedUpdateManyWithoutMedicoNestedInput = {
    create?: XOR<AgendaCreateWithoutMedicoInput, AgendaUncheckedCreateWithoutMedicoInput> | AgendaCreateWithoutMedicoInput[] | AgendaUncheckedCreateWithoutMedicoInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutMedicoInput | AgendaCreateOrConnectWithoutMedicoInput[]
    upsert?: AgendaUpsertWithWhereUniqueWithoutMedicoInput | AgendaUpsertWithWhereUniqueWithoutMedicoInput[]
    createMany?: AgendaCreateManyMedicoInputEnvelope
    set?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    disconnect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    delete?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    update?: AgendaUpdateWithWhereUniqueWithoutMedicoInput | AgendaUpdateWithWhereUniqueWithoutMedicoInput[]
    updateMany?: AgendaUpdateManyWithWhereWithoutMedicoInput | AgendaUpdateManyWithWhereWithoutMedicoInput[]
    deleteMany?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
  }

  export type AgendaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<AgendaCreateWithoutPacienteInput, AgendaUncheckedCreateWithoutPacienteInput> | AgendaCreateWithoutPacienteInput[] | AgendaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutPacienteInput | AgendaCreateOrConnectWithoutPacienteInput[]
    createMany?: AgendaCreateManyPacienteInputEnvelope
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
  }

  export type AgendaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<AgendaCreateWithoutPacienteInput, AgendaUncheckedCreateWithoutPacienteInput> | AgendaCreateWithoutPacienteInput[] | AgendaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutPacienteInput | AgendaCreateOrConnectWithoutPacienteInput[]
    createMany?: AgendaCreateManyPacienteInputEnvelope
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AgendaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<AgendaCreateWithoutPacienteInput, AgendaUncheckedCreateWithoutPacienteInput> | AgendaCreateWithoutPacienteInput[] | AgendaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutPacienteInput | AgendaCreateOrConnectWithoutPacienteInput[]
    upsert?: AgendaUpsertWithWhereUniqueWithoutPacienteInput | AgendaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: AgendaCreateManyPacienteInputEnvelope
    set?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    disconnect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    delete?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    update?: AgendaUpdateWithWhereUniqueWithoutPacienteInput | AgendaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: AgendaUpdateManyWithWhereWithoutPacienteInput | AgendaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
  }

  export type AgendaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<AgendaCreateWithoutPacienteInput, AgendaUncheckedCreateWithoutPacienteInput> | AgendaCreateWithoutPacienteInput[] | AgendaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: AgendaCreateOrConnectWithoutPacienteInput | AgendaCreateOrConnectWithoutPacienteInput[]
    upsert?: AgendaUpsertWithWhereUniqueWithoutPacienteInput | AgendaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: AgendaCreateManyPacienteInputEnvelope
    set?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    disconnect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    delete?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    connect?: AgendaWhereUniqueInput | AgendaWhereUniqueInput[]
    update?: AgendaUpdateWithWhereUniqueWithoutPacienteInput | AgendaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: AgendaUpdateManyWithWhereWithoutPacienteInput | AgendaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutAtendenteInput = {
    create?: XOR<UsersCreateWithoutAtendenteInput, UsersUncheckedCreateWithoutAtendenteInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAtendenteInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutAtendenteNestedInput = {
    create?: XOR<UsersCreateWithoutAtendenteInput, UsersUncheckedCreateWithoutAtendenteInput>
    connectOrCreate?: UsersCreateOrConnectWithoutAtendenteInput
    upsert?: UsersUpsertWithoutAtendenteInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutAtendenteInput, UsersUpdateWithoutAtendenteInput>, UsersUncheckedUpdateWithoutAtendenteInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumStatusUrgenciaFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUrgencia | EnumStatusUrgenciaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUrgencia[] | ListEnumStatusUrgenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusUrgencia[] | ListEnumStatusUrgenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusUrgenciaFilter<$PrismaModel> | $Enums.StatusUrgencia
  }

  export type NestedEnumStatusAtendimentoFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtendimento | EnumStatusAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtendimentoFilter<$PrismaModel> | $Enums.StatusAtendimento
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumStatusUrgenciaWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusUrgencia | EnumStatusUrgenciaFieldRefInput<$PrismaModel>
    in?: $Enums.StatusUrgencia[] | ListEnumStatusUrgenciaFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusUrgencia[] | ListEnumStatusUrgenciaFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusUrgenciaWithAggregatesFilter<$PrismaModel> | $Enums.StatusUrgencia
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusUrgenciaFilter<$PrismaModel>
    _max?: NestedEnumStatusUrgenciaFilter<$PrismaModel>
  }

  export type NestedEnumStatusAtendimentoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusAtendimento | EnumStatusAtendimentoFieldRefInput<$PrismaModel>
    in?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusAtendimento[] | ListEnumStatusAtendimentoFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusAtendimentoWithAggregatesFilter<$PrismaModel> | $Enums.StatusAtendimento
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusAtendimentoFilter<$PrismaModel>
    _max?: NestedEnumStatusAtendimentoFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PantientCreateWithoutAgendasInput = {
    nome: string
    cpf: string
    nascimento: Date | string
    telefone: string
    email?: string | null
    cartaoSus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PantientUncheckedCreateWithoutAgendasInput = {
    id?: number
    nome: string
    cpf: string
    nascimento: Date | string
    telefone: string
    email?: string | null
    cartaoSus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PantientCreateOrConnectWithoutAgendasInput = {
    where: PantientWhereUniqueInput
    create: XOR<PantientCreateWithoutAgendasInput, PantientUncheckedCreateWithoutAgendasInput>
  }

  export type DoctorCreateWithoutAgendasInput = {
    crm: string
    especialidade: string
    user: UsersCreateNestedOneWithoutMedicoInput
  }

  export type DoctorUncheckedCreateWithoutAgendasInput = {
    userId: number
    crm: string
    especialidade: string
  }

  export type DoctorCreateOrConnectWithoutAgendasInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutAgendasInput, DoctorUncheckedCreateWithoutAgendasInput>
  }

  export type PantientUpsertWithoutAgendasInput = {
    update: XOR<PantientUpdateWithoutAgendasInput, PantientUncheckedUpdateWithoutAgendasInput>
    create: XOR<PantientCreateWithoutAgendasInput, PantientUncheckedCreateWithoutAgendasInput>
    where?: PantientWhereInput
  }

  export type PantientUpdateToOneWithWhereWithoutAgendasInput = {
    where?: PantientWhereInput
    data: XOR<PantientUpdateWithoutAgendasInput, PantientUncheckedUpdateWithoutAgendasInput>
  }

  export type PantientUpdateWithoutAgendasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cartaoSus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PantientUncheckedUpdateWithoutAgendasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    telefone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    cartaoSus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUpsertWithoutAgendasInput = {
    update: XOR<DoctorUpdateWithoutAgendasInput, DoctorUncheckedUpdateWithoutAgendasInput>
    create: XOR<DoctorCreateWithoutAgendasInput, DoctorUncheckedCreateWithoutAgendasInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutAgendasInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutAgendasInput, DoctorUncheckedUpdateWithoutAgendasInput>
  }

  export type DoctorUpdateWithoutAgendasInput = {
    crm?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutMedicoNestedInput
  }

  export type DoctorUncheckedUpdateWithoutAgendasInput = {
    userId?: IntFieldUpdateOperationsInput | number
    crm?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
  }

  export type DoctorCreateWithoutUserInput = {
    crm: string
    especialidade: string
    agendas?: AgendaCreateNestedManyWithoutMedicoInput
  }

  export type DoctorUncheckedCreateWithoutUserInput = {
    crm: string
    especialidade: string
    agendas?: AgendaUncheckedCreateNestedManyWithoutMedicoInput
  }

  export type DoctorCreateOrConnectWithoutUserInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
  }

  export type AttendCreateWithoutUserInput = {
    setor: string
  }

  export type AttendUncheckedCreateWithoutUserInput = {
    setor: string
  }

  export type AttendCreateOrConnectWithoutUserInput = {
    where: AttendWhereUniqueInput
    create: XOR<AttendCreateWithoutUserInput, AttendUncheckedCreateWithoutUserInput>
  }

  export type DoctorUpsertWithoutUserInput = {
    update: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
    create: XOR<DoctorCreateWithoutUserInput, DoctorUncheckedCreateWithoutUserInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutUserInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutUserInput, DoctorUncheckedUpdateWithoutUserInput>
  }

  export type DoctorUpdateWithoutUserInput = {
    crm?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    agendas?: AgendaUpdateManyWithoutMedicoNestedInput
  }

  export type DoctorUncheckedUpdateWithoutUserInput = {
    crm?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    agendas?: AgendaUncheckedUpdateManyWithoutMedicoNestedInput
  }

  export type AttendUpsertWithoutUserInput = {
    update: XOR<AttendUpdateWithoutUserInput, AttendUncheckedUpdateWithoutUserInput>
    create: XOR<AttendCreateWithoutUserInput, AttendUncheckedCreateWithoutUserInput>
    where?: AttendWhereInput
  }

  export type AttendUpdateToOneWithWhereWithoutUserInput = {
    where?: AttendWhereInput
    data: XOR<AttendUpdateWithoutUserInput, AttendUncheckedUpdateWithoutUserInput>
  }

  export type AttendUpdateWithoutUserInput = {
    setor?: StringFieldUpdateOperationsInput | string
  }

  export type AttendUncheckedUpdateWithoutUserInput = {
    setor?: StringFieldUpdateOperationsInput | string
  }

  export type UsersCreateWithoutMedicoInput = {
    nome: string
    cpf: string
    nascimento: Date | string
    fone: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    atendente?: AttendCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutMedicoInput = {
    id?: number
    nome: string
    cpf: string
    nascimento: Date | string
    fone: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    atendente?: AttendUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutMedicoInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMedicoInput, UsersUncheckedCreateWithoutMedicoInput>
  }

  export type AgendaCreateWithoutMedicoInput = {
    id?: string
    horario_atend: Date | string
    statusUrgencia?: $Enums.StatusUrgencia
    status?: $Enums.StatusAtendimento
    createdAt?: Date | string
    updatedAt?: Date | string
    paciente: PantientCreateNestedOneWithoutAgendasInput
  }

  export type AgendaUncheckedCreateWithoutMedicoInput = {
    id?: string
    horario_atend: Date | string
    statusUrgencia?: $Enums.StatusUrgencia
    status?: $Enums.StatusAtendimento
    pantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendaCreateOrConnectWithoutMedicoInput = {
    where: AgendaWhereUniqueInput
    create: XOR<AgendaCreateWithoutMedicoInput, AgendaUncheckedCreateWithoutMedicoInput>
  }

  export type AgendaCreateManyMedicoInputEnvelope = {
    data: AgendaCreateManyMedicoInput | AgendaCreateManyMedicoInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithoutMedicoInput = {
    update: XOR<UsersUpdateWithoutMedicoInput, UsersUncheckedUpdateWithoutMedicoInput>
    create: XOR<UsersCreateWithoutMedicoInput, UsersUncheckedCreateWithoutMedicoInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMedicoInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMedicoInput, UsersUncheckedUpdateWithoutMedicoInput>
  }

  export type UsersUpdateWithoutMedicoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    fone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atendente?: AttendUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutMedicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    fone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atendente?: AttendUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AgendaUpsertWithWhereUniqueWithoutMedicoInput = {
    where: AgendaWhereUniqueInput
    update: XOR<AgendaUpdateWithoutMedicoInput, AgendaUncheckedUpdateWithoutMedicoInput>
    create: XOR<AgendaCreateWithoutMedicoInput, AgendaUncheckedCreateWithoutMedicoInput>
  }

  export type AgendaUpdateWithWhereUniqueWithoutMedicoInput = {
    where: AgendaWhereUniqueInput
    data: XOR<AgendaUpdateWithoutMedicoInput, AgendaUncheckedUpdateWithoutMedicoInput>
  }

  export type AgendaUpdateManyWithWhereWithoutMedicoInput = {
    where: AgendaScalarWhereInput
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyWithoutMedicoInput>
  }

  export type AgendaScalarWhereInput = {
    AND?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
    OR?: AgendaScalarWhereInput[]
    NOT?: AgendaScalarWhereInput | AgendaScalarWhereInput[]
    id?: StringFilter<"Agenda"> | string
    horario_atend?: DateTimeFilter<"Agenda"> | Date | string
    statusUrgencia?: EnumStatusUrgenciaFilter<"Agenda"> | $Enums.StatusUrgencia
    status?: EnumStatusAtendimentoFilter<"Agenda"> | $Enums.StatusAtendimento
    pantId?: IntFilter<"Agenda"> | number
    docId?: IntFilter<"Agenda"> | number
    createdAt?: DateTimeFilter<"Agenda"> | Date | string
    updatedAt?: DateTimeFilter<"Agenda"> | Date | string
  }

  export type AgendaCreateWithoutPacienteInput = {
    id?: string
    horario_atend: Date | string
    statusUrgencia?: $Enums.StatusUrgencia
    status?: $Enums.StatusAtendimento
    createdAt?: Date | string
    updatedAt?: Date | string
    medico: DoctorCreateNestedOneWithoutAgendasInput
  }

  export type AgendaUncheckedCreateWithoutPacienteInput = {
    id?: string
    horario_atend: Date | string
    statusUrgencia?: $Enums.StatusUrgencia
    status?: $Enums.StatusAtendimento
    docId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendaCreateOrConnectWithoutPacienteInput = {
    where: AgendaWhereUniqueInput
    create: XOR<AgendaCreateWithoutPacienteInput, AgendaUncheckedCreateWithoutPacienteInput>
  }

  export type AgendaCreateManyPacienteInputEnvelope = {
    data: AgendaCreateManyPacienteInput | AgendaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type AgendaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: AgendaWhereUniqueInput
    update: XOR<AgendaUpdateWithoutPacienteInput, AgendaUncheckedUpdateWithoutPacienteInput>
    create: XOR<AgendaCreateWithoutPacienteInput, AgendaUncheckedCreateWithoutPacienteInput>
  }

  export type AgendaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: AgendaWhereUniqueInput
    data: XOR<AgendaUpdateWithoutPacienteInput, AgendaUncheckedUpdateWithoutPacienteInput>
  }

  export type AgendaUpdateManyWithWhereWithoutPacienteInput = {
    where: AgendaScalarWhereInput
    data: XOR<AgendaUpdateManyMutationInput, AgendaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type UsersCreateWithoutAtendenteInput = {
    nome: string
    cpf: string
    nascimento: Date | string
    fone: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    medico?: DoctorCreateNestedOneWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutAtendenteInput = {
    id?: number
    nome: string
    cpf: string
    nascimento: Date | string
    fone: string
    email: string
    passwordHash: string
    role: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
    medico?: DoctorUncheckedCreateNestedOneWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutAtendenteInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutAtendenteInput, UsersUncheckedCreateWithoutAtendenteInput>
  }

  export type UsersUpsertWithoutAtendenteInput = {
    update: XOR<UsersUpdateWithoutAtendenteInput, UsersUncheckedUpdateWithoutAtendenteInput>
    create: XOR<UsersCreateWithoutAtendenteInput, UsersUncheckedCreateWithoutAtendenteInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutAtendenteInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutAtendenteInput, UsersUncheckedUpdateWithoutAtendenteInput>
  }

  export type UsersUpdateWithoutAtendenteInput = {
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    fone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: DoctorUpdateOneWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutAtendenteInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    nascimento?: DateTimeFieldUpdateOperationsInput | Date | string
    fone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: DoctorUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AgendaCreateManyMedicoInput = {
    id?: string
    horario_atend: Date | string
    statusUrgencia?: $Enums.StatusUrgencia
    status?: $Enums.StatusAtendimento
    pantId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendaUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario_atend?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUrgencia?: EnumStatusUrgenciaFieldUpdateOperationsInput | $Enums.StatusUrgencia
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paciente?: PantientUpdateOneRequiredWithoutAgendasNestedInput
  }

  export type AgendaUncheckedUpdateWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario_atend?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUrgencia?: EnumStatusUrgenciaFieldUpdateOperationsInput | $Enums.StatusUrgencia
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    pantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaUncheckedUpdateManyWithoutMedicoInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario_atend?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUrgencia?: EnumStatusUrgenciaFieldUpdateOperationsInput | $Enums.StatusUrgencia
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    pantId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaCreateManyPacienteInput = {
    id?: string
    horario_atend: Date | string
    statusUrgencia?: $Enums.StatusUrgencia
    status?: $Enums.StatusAtendimento
    docId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgendaUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario_atend?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUrgencia?: EnumStatusUrgenciaFieldUpdateOperationsInput | $Enums.StatusUrgencia
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medico?: DoctorUpdateOneRequiredWithoutAgendasNestedInput
  }

  export type AgendaUncheckedUpdateWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario_atend?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUrgencia?: EnumStatusUrgenciaFieldUpdateOperationsInput | $Enums.StatusUrgencia
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    docId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgendaUncheckedUpdateManyWithoutPacienteInput = {
    id?: StringFieldUpdateOperationsInput | string
    horario_atend?: DateTimeFieldUpdateOperationsInput | Date | string
    statusUrgencia?: EnumStatusUrgenciaFieldUpdateOperationsInput | $Enums.StatusUrgencia
    status?: EnumStatusAtendimentoFieldUpdateOperationsInput | $Enums.StatusAtendimento
    docId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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