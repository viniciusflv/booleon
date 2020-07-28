import { fastHash } from './fastHash';

export function handleClasses(innerHTML: string, css: string) {
  const className = `bl-${fastHash(css)}`;
  innerHTML += `.${className}{${css}}`;
  const classRegex = /.([^)]+?){([^)]+?)}/g;
  const html = Array.from(new Set(innerHTML.match(classRegex))).join('');
  return [className, html];
}
