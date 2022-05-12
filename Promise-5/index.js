
// Create a new promise and return it here
// If the `timeOfDay` is 'breakfast', 'lunch', or 'dinner' 
// resolve the promise with your favorite food for that time. 

// If the `timeOfDay` is anything else reject the promise with 
// the 'message' I'm not hungry right now.  
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

// Call your function and resolve the promise here! 
whatToEat('lunch')
.then(foodStr => console.log(`I should eat: ${foodStr}.`))
.catch(err => console.log(err));


