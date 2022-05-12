// Use your what to eat promise here. 
// Add a finally block on the end so that after every meal you belch! 
// In many cultures it shows you had a satisfying meal! 

// Define the whatToEat function here:
function whatToEat(timeOfDay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof timeOfDay === 'string') { 
        switch (timeOfDay) {
          case 'breakfast':
            resolve('waffles');
            break;
          case 'lunch':
            resolve('pizza');
            break;
          case 'dinner':
            resolve('ice cream');
            break;
          default:
        }
      }
      reject("I'm not hungry right now.");
    }, 1000);
  });
}

// Resolve with .then(), .catch(), and .finally() here: 
whatToEat('breakfast')
.then(foodStr => console.log(`I should eat: ${foodStr}.`))
.catch(err => console.log(err))
.finally(() => console.log('belch'));

// Test all of the cases

whatToEat('lunch')
.then(foodStr => console.log(`I should eat: ${foodStr}.`))
.catch(err => console.log(err))
.finally(() => console.log('belch'));

whatToEat('dinner')
.then(foodStr => console.log(`I should eat: ${foodStr}.`))
.catch(err => console.log(err))
.finally(() => console.log('belch'));

whatToEat('dsfsfsd')
.then(foodStr => console.log(`I should eat: ${foodStr}.`))
.catch(err => console.log(err))
.finally(() => console.log('belch'));

whatToEat(123)
.then(foodStr => console.log(`I should eat: ${foodStr}.`))
.catch(err => console.log(err))
.finally(() => console.log('belch'));