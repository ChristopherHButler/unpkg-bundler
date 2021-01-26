import bundle from '../src';

test('Test UNPKG import', async () => {
  // TO DO - How to fake using browser here. chromium?
  const module1 = 'import React from \'react\'';
  const module2 = 'const b = 5;';
  const module3 = 'const b = 5;';
  const module4 = 'console.log(a + b)';

  const modules = [module1, module2, module3, module4].join('\n');

  const { code, err } = await bundle(modules);

  expect(code).toContain('Facebook');
});
