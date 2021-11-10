export const sym = <S extends string>(str: S) => (Symbol(str) as unknown) as S;
