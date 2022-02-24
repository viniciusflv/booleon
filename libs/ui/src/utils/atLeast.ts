export const atLeast = (minimum: number, ...args: unknown[]) =>
  args.filter(Boolean).length >= minimum;
