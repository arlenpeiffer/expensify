const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Arlen',
      age: 31
    });
    // reject('Something went wrong!');
  }, 5000)
});

console.log('before');

promise.then((data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 5000);
  });
}).then((string) => {
  console.log('does this run?', string);
}).catch((error) => {
  console.log('error:', error);
});

console.log('after');