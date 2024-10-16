// const freelancers = [
//   { name: 'Dr. Slice', price: 25, occupation: 'gardener' },
//   { name: 'Dr. Pressure', price: 51, occupation: 'programmer' },
//   { name: 'Prof. Possibility', price: 43, occupation: 'teacher' },
//   { name: 'Prof. Prism', price: 81, occupation: 'teacher' },
//   { name: 'Dr. Impulse', price: 43, occupation: 'teacher' },
//   { name: 'Prof. Spark', price: 76, occupation: 'programmer' },
//   { name: 'Dr. Wire', price: 47, occupation: 'teacher' },
//   { name: 'Prof. Goose', price: 72, occupation: 'driver' },
// ];

// const averagePrice = () => {
//   let total = 0;
//   freelancers.forEach((element) => {
//     total += element.price;
//   });
//   return total / freelancers.length;
// };

// const init = () => {
//   const h1 = document.createElement('h1');
//   h1.style.textAlign = 'center';
//   h1.innerText = 'Freelancer Forum';
//   document.body.append(h1);

//   const h2 = document.createElement('h2');
//   h2.style.textAlign = 'center';
//   h2.innerText = `The average starting price is $${averagePrice()}`;
//   document.body.append(h2);

//   const div = document.createElement('div');
//   div.style.display = 'flex';
//   div.style.justifyContent = 'space-between';
//   div.style.width = '30%';
//   div.style.margin = '10px auto';

//   const nameHeader = document.createElement('spa');
//   nameHeader.innerText = 'Name';

//   const occupationHeader = document.createElement('h1');
//   occupationHeader.innerText = 'Occupation';

//   const priceHeader = document.createElement('h1');
//   priceHeader.innerText = '   Starting Price';

//   div.append(nameHeader, occupationHeader, priceHeader);
//   document.body.append(div);
// };

// init();

// const render = () => {
//   const div = document.createElement('div');
//   div.style.display = 'flex';
//   div.style.flexDirection = 'column';
//   div.style.width = '30%';
//   div.style.margin = '10px auto';

//   freelancers.forEach((elements) => {
//     const container = document.createElement('div');
//     container.style.display = 'flex';
//     container.style.justifyContent = 'space-between';

//     const name = document.createElement('div');
//     name.innerText = elements.name;

//     const occupation = document.createElement('div');
//     occupation.innerText = elements.occupation;

//     const price = document.createElement('div');
//     price.innerText = elements.price;

//     container.append(name);
//     container.append(occupation);
//     container.append(price);

//     div.append(container);
//   });
//   document.body.append(div);
// };

// render();

// const occupations = ['gardener', 'programmer', 'teacher', 'driver'];
// const maxFreelancers = 15;

// function addFreelancer() {
//   if (freelancers.length >= maxFreelancers) {
//     clearInterval(addFreelancerIntervalId);
//     return;
//   }

//   const randomName = `Random Freelancer ${Math.floor(Math.random() * 1000)}`;
//   const randomPrice = Math.floor(Math.random() * 100) + 20;
//   const randomOccupation =
//     occupations[Math.floor(Math.random() * occupations.length)];

//   freelancers.push({
//     name: randomName,
//     price: randomPrice,
//     occupation: randomOccupation,
//   });
// }

// const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

const freelancers = [
  { name: 'Dr. Slice', price: 25, occupation: 'gardener' },
  { name: 'Dr. Pressure', price: 51, occupation: 'programmer' },
  { name: 'Prof. Possibility', price: 43, occupation: 'teacher' },
  { name: 'Prof. Prism', price: 81, occupation: 'teacher' },
  // { name: 'Dr. Impulse', price: 43, occupation: 'teacher' },
  // { name: 'Prof. Spark', price: 76, occupation: 'programmer' },
  // { name: 'Dr. Wire', price: 47, occupation: 'teacher' },
  // { name: 'Prof. Goose', price: 72, occupation: 'driver' },
];

const occupations = [
  'gardener',
  'programmer',
  'teacher',
  'driver',
  'designer',
  'trainer',
  'consultant',
];
const names = [
  'Dr. Impulse',
  'Prof. Spark',
  'Dr. Wire',
  'Prof. Goose',
  'Dr. Rick Sanchez',
  'Prof. Morty',
  'Mr. Meeseeks',
];
const maxFreelancers = 20;

const calculateAveragePrice = () => {
  const totalPrice = freelancers.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  return (totalPrice / freelancers.length).toFixed(2);
};

const render = () => {
  const container = document.querySelector('.freelancer-container');
  container.innerHTML = '';

  freelancers.forEach((element) => {
    const freelancerDiv = document.createElement('div');
    freelancerDiv.style.display = 'flex';
    freelancerDiv.style.justifyContent = 'center';
    freelancerDiv.style.gap = '30px';

    const name = document.createElement('span');
    name.textContent = element.name;

    const occupation = document.createElement('span');
    occupation.textContent = element.occupation;

    const price = document.createElement('span');
    price.textContent = `$${element.price}`;

    freelancerDiv.append(name, occupation, price);
    container.append(freelancerDiv);
  });

  const averagePriceElement = document.querySelector('.average-price');
  averagePriceElement.textContent = `The average starting price is $${calculateAveragePrice()}`;
};

function addFreelancer() {
  if (freelancers.length >= maxFreelancers) {
    clearInterval(addFreelancerIntervalId);
    return;
  }

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomPrice = Math.floor(Math.random() * 100);
  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];

  freelancers.push({
    name: randomName,
    price: randomPrice,
    occupation: randomOccupation,
  });

  render();
}

const addFreelancerIntervalId = setInterval(addFreelancer, 1000);

const init = () => {
  const h1 = document.createElement('h1');
  h1.style.textAlign = 'center';
  h1.innerText = 'Freelancer Forum';
  document.body.append(h1);

  const h2 = document.createElement('h2');
  h2.classList.add('average-price');
  h2.style.textAlign = 'center';
  h2.textContent = `The average starting price is $${calculateAveragePrice()}`;
  document.body.append(h2);

  const headerDiv = document.createElement('div');
  headerDiv.style.display = 'flex';
  headerDiv.style.justifyContent = 'center';
  headerDiv.style.gap = '30px';
  headerDiv.style.fontWeight = 'bold';

  const nameHeader = document.createElement('span');
  nameHeader.innerText = 'Name';

  const occupationHeader = document.createElement('span');
  occupationHeader.innerText = 'Occupation';

  const priceHeader = document.createElement('span');
  priceHeader.innerText = 'Starting Price';

  headerDiv.append(nameHeader, occupationHeader, priceHeader);
  document.body.append(headerDiv);

  const container = document.createElement('div');
  container.classList.add('freelancer-container');
  document.body.append(container);

  render();
};

init();
