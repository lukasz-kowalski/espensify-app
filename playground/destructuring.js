const person = {
  name: 'Lucas',
  age: 28,
  location: {
    city: 'Szczecin',
    temperature: 15
  }
};

const { name = 'Anonymous', age } = person;

const { city: myCity, temperature } = person.location;

console.log(`${name} is ${age}.`);

console.log(`It's ${temperature} in ${myCity}`);

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

const address = ['1299 S Juniper Street', 'Szczecin', 'Zachodniopomorskie', '70-421'];

const [, city, state = 'Poland'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, , price] = item;

console.log(`A medium ${coffee} costs ${price}`);
