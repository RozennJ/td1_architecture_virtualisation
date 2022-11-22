const index = require('./index');

test('server is listening ', async () => {
  const data = await module.require('./index').requesting();
  expect(data).toBe('Server listening on port 3030');
});

