import { uniqueClass } from './uniqueClass';

test('uniqueClass', () => {
  const className = uniqueClass('flex', 'flex', 'grid', 'grid');
  expect(className).toBe('flex grid');
  expect(className).not.toBe('flex flex grid grid');
});
