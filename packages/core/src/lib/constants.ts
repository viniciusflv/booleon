export const pseudo = [
  "after",
  "before",
  "active",
  "checked",
  "disabled",
  "focus",
  "hover",
  "visited",
] as const;
export const medias = ["xs", "sm", "md", "lg", "xl"] as const;
export const mediasMap = new Map([
  [medias[0], "(min-width: 640px)"],
  [medias[1], "(min-width: 768px)"],
  [medias[2], "(min-width: 1024px)"],
  [medias[3], "(min-width: 1440px)"],
  [medias[4], "(min-width: 1920px)"],
]);

export const hexColor = '([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})';
