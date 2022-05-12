const food = new Promise((resolve, reject) => {
  // **Challenge 1** Resolve your promise with the name of your favorite food. 
  // Do this by calling the `resolve` with an argument. 
  resolve('garlic bread');
})

// **Challenge 2** Resolve the `food` promise with that `.then()` syntax 
// and print your favorite food to the console. 
food
.then(foodStr => console.log(`${foodStr} is the best food`))
.catch(err => console.log(`:( Garlic bread not found: ${err}`));