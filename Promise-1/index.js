// Make a new Promise
const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('>>> Success! <<<');
    resolve('>>> Success! <<<');
    reject("--- Oops ---");
  }, 2000);
});

p.then((message) => {
  console.log('Promise resolved successfully! 😀');
  console.log(message);
}).catch((err) => {
  console.log('Promise rejected 😞');
  console.log(err);
});

// **Problems to solve**

// **1)** What happens when a promise is rejected? Test it by calling `reject()`
// The promise is rejected

// **2)** What happens when you call both `resolve` and `reject`? Test this.
// The one that is called first is the one that goes through, kinda like if you had two return statements in a row.

// **3)** Does the order matter you call resolve and reject matter? Test this. 
// yes the order matters

// **4)** What happens if you call `resolve` or `reject` more than once? Test this out for yourself.
// the promise can only be resolved/rejected once.