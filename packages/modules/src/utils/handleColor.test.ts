import { handleColor } from './handleColor';

describe('handleColor', () => {
  test('hex color', () => {
    const color = handleColor('fff');
    expect(color).toBe('#fff');
  });

  test('rgb color', () => {
    const color = handleColor('255_0_255');
    expect(color).toBe('rgb(255,0,255)');
  });

  test('rgba color', () => {
    const color = handleColor('255_0_255_50');
    expect(color).toBe('rgba(255,0,255,0.5)');
  });
});
