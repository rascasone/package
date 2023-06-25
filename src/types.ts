export type StepIndex = 0 | 1 | 2 | 3;

export type Either<L, R> = L | R;

export type Maybe<T> = Either<undefined, T>;

export type Nullable<T> = Either<null, T>;

export type Template<$Variations extends string[]> = {
  variants: () => $Variations;
  create: (props: {
    packageName: string,
    templateName: string,
    variant: $Variations[number]
  }) => Promise<void>;
};
