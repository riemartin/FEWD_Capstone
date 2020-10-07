// test client code

import { uiUpdater } from './ui'
 
describe("Testing the update functionality", () => {
    test("Testing the uiUpdater() function", () => {
           expect(uiUpdater).toBeDefined();
    }); 
});

// test server code

const listening = require('../../server/server.js');

test('listening', () => {
    expect(listening).toBeDefined();
});
