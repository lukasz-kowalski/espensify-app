const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: 'Lukasz',
      age: 28
    });
  reject('Something went wrong!')
  }, 5000);
});

console.log('before');

promise.then(data => {
  console.log('1', data)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 5000);
  })
})
.then(str => console.log(str))
.catch(err => console.log(err)); 

console.log('after');
