"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_with_ts_2_1 = __importDefault(require("sdk-with-ts-2"));
const client = new sdk_with_ts_2_1.default({
    apiKey: '123',
});
client.getPosts().then((p) => {
    console.log('GETPOSTS results');
    console.log(p);
});
client.getPostById(1).then((p) => {
    console.log('GETPOSTBYID result');
    console.log(p);
});
client.createPost({
    title: "foo",
    body: "bar",
    userId: 1
}).then((p) => {
    console.log('CREATEPOST result');
    console.log(`New post is created with ${p.id}`);
    console.log(p);
});
