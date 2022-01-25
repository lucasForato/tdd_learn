"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mock = [
    {
        id: 0,
        name: "Lucas Forato",
        email: "lucas7forato@gmail.com",
        password: "12345",
    },
];
exports.default = {
    Query: {
        users: () => mock,
        user: (_, { id }, __, ___) => {
            return mock[id];
        },
    },
};
//# sourceMappingURL=User.js.map