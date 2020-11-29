export function styleAppender(className: string, css: string): void {
  let styles = document.getElementById(className);
  if (!styles) {
    styles = document.createElement('style');
    styles.setAttribute('id', className);
    document.head.appendChild(styles);
  }
  if (css !== styles.innerHTML) styles.innerHTML = css;
}
