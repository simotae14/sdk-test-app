import Typicode from 'sdk-with-ts-2';

const client = new Typicode({
  apiKey: '123',
});

client.getPosts().then((p) => {
  console.log(p);
});