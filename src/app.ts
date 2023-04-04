import Typicode from 'sdk-with-ts-2';

const client = new Typicode({
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
  console.log(`New post is created with ${p.id}`)
  console.log(p);
});