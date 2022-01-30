export function cleanTransformFilter(str: string) {
  return [/transform:.*(;transform:)/g, /filter:.*(;filter:)/g].reduce(
    (acc, rgx) =>
      acc.replace(rgx, (match, group) =>
        match.replace(new RegExp(group, 'g'), ''),
      ),
    str,
  );
}
