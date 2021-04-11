export const sym = <T>(a: any): T => (Symbol(a) as unknown) as T;
