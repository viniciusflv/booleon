import { cleanTransformFilter } from '../../packages/core/src';

describe('cleanTransformFilter', () => {
  const fl =
    'filter:' +
    'invert(100%)' +
    ';filter:drop-shadow(0 1px 1px rgba(0,0,0,0.14))' +
    ';filter:drop-shadow(0 2px 1px rgba(0,0,0,0.12))' +
    ';filter:drop-shadow(0 1px 3px rgba(0,0,0,0.20))' +
    ';filter:sepia(10%)' +
    ';filter:saturate(10)' +
    ';filter:opacity(10%)' +
    ';filter:hue-rotate(10deg)' +
    ';filter:grayscale(100%)' +
    ';filter:contrast(100%)' +
    ';filter:brightness(1)' +
    ';filter:blur(1rem);';
  const flAfter =
    'filter:' +
    'invert(100%)' +
    'drop-shadow(0 1px 1px rgba(0,0,0,0.14))' +
    'drop-shadow(0 2px 1px rgba(0,0,0,0.12))' +
    'drop-shadow(0 1px 3px rgba(0,0,0,0.20))' +
    'sepia(10%)' +
    'saturate(10)' +
    'opacity(10%)' +
    'hue-rotate(10deg)' +
    'grayscale(100%)' +
    'contrast(100%)' +
    'brightness(1)' +
    'blur(1rem);';
  const tf =
    'transform:' +
    ';transform:translateY(-100)' +
    ';transform:translateX(100)' +
    ';transform:translate(-100,-100)' +
    ';transform:translate(100,100)' +
    ';transform:rotate(-30deg)' +
    ';transform:rotate(30deg)' +
    ';transform:skewY(-30deg)' +
    ';transform:skewX(-30deg)' +
    ';transform:skew(-30deg,-30deg)' +
    ';transform:skewY(30deg)' +
    ';transform:skewX(30deg)' +
    ';transform:skew(30deg,30deg)' +
    ';transform:scaleY(-0.01)' +
    ';transform:scaleX(-0.01)' +
    ';transform:scale(-0.01,-0.01)' +
    ';transform:scaleY(0.01)' +
    ';transform:scaleX(0.01)' +
    ';transform:scale(0.01,0.01);';
  const tfAfter =
    'transform:' +
    'translateY(-100)' +
    'translateX(100)' +
    'translate(-100,-100)' +
    'translate(100,100)' +
    'rotate(-30deg)' +
    'rotate(30deg)' +
    'skewY(-30deg)' +
    'skewX(-30deg)' +
    'skew(-30deg,-30deg)' +
    'skewY(30deg)' +
    'skewX(30deg)' +
    'skew(30deg,30deg)' +
    'scaleY(-0.01)' +
    'scaleX(-0.01)' +
    'scale(-0.01,-0.01)' +
    'scaleY(0.01)' +
    'scaleX(0.01)' +
    'scale(0.01,0.01);';

  test('filter', () => {
    expect(cleanTransformFilter(fl)).toBe(flAfter);
  });

  test('transform', () => {
    expect(cleanTransformFilter(tf)).toBe(tfAfter);
  });
});
