"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const server = (0, server_1.createApolloServer)();
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=app.js.map