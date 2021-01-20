export function styleAppender(className: string, cb: () => string) {
  let styles = document.querySelector(`style[data-booleon="${className}"]`);
  if (!styles) {
    styles = document.createElement('style');
    styles.setAttribute('data-booleon', className);
    document.head.appendChild(styles);
    styles.innerHTML = cb?.();
  }
}
