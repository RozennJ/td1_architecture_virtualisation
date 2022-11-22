/*describe('typeScript test suite', () => {
  it('should return "Hello world!"', () => {
    expect.assertions(1);
    expect(helloWorld()).toBe('Hello world!');
  });
});*/
test('server is listening ', async () => {
  const data = module.require('./index').requesting();
  expect(data).toBe('Server listening on port 3030');
});
