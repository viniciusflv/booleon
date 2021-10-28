import { uniqueClass } from './uniqueClass';

test('uniqueClass', async () => {
  const className = uniqueClass('flex', 'flex', 'grid', 'grid');

  expect(className).toBe('flex grid');
  expect(className).not.toBe('flex flex grid grid');
});
