export function handleCssVars(
  scope: string,
  values: string,
  cb: (values: string) => string,
) {
  if (values.startsWith('var')) {
    return `var(--${values.replace('var', scope).replace(/_/g, '-')})`;
  }
  return cb(values);
}
