export function styleAppender(className: string, cb: () => string): void {
  let styles = document.getElementById(className);
  if (!styles) {
    styles = document.createElement('style');
    styles.setAttribute('id', className);
    document.head.appendChild(styles);
    styles.innerHTML = cb();
  }
}
