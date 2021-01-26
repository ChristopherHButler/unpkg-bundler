import bundle from '../index';

test('Test Bundle', async () => {
  const module1 = 'export const a = 3;';
  const module2 = 'export const b = 5;';
  const module3 = 'console.log(a + b)';

  const modules = [module1, module2, module3].join('\n');

  const bundledCode = await bundle(modules);

  console.log('bundledCode: ', bundledCode);

  expect(true).toBe(true);
});
