export function styleAppender(className: string, cb: () => string): void {
  let styles = document.querySelector(`[data-booleon="${className}"]`);
  if (!styles) {
    styles = document.createElement('style');
    styles.setAttribute('data-booleon', className);
    document.head.appendChild(styles);
    styles.innerHTML = cb();
  }
}
