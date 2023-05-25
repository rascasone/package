export type StepIndex = 0 | 1 | 2;

export type Either<L, R> = L | R;

export type Maybe<T> = Either<undefined, T>;

export type Nullable<T> = Either<null, T>;
