import * as http from 'http'
test('server is listening ', async () => {
    const server = module.require('./index').requesting();
    expect(server).toBeInstanceOf(http.Server);
    server.close();
});