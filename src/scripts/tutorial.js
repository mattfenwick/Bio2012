var Tutorial = (function() {

// this is a comment
/* this is a multi-line 
   comment */

// here's how to make a function
//   'myFirstFunction' is the name of the function
//     what's a better name for this function?  (what does it do?)
//   'low' and 'high' are the names of the arguments
function myFirstFunction(low, high) {

  // ALWAYS use 'var' to create local variables
  //   if you don't use 'var', bad things WILL happen!
  var nums = [],
      i = low;

  // let's check the arguments to make sure they're sensical
  if( low > high ) {
    // javascript has exceptions !!
    throw new Error("low must be <= to high (got " + low + ", " + high + ")");
  }

  // this is a 'while' loop
  //   note the conditional
  while( i < high ) {

    // this adds the current value of 'i' to the array 'nums'
    nums.push(i);

    // this funny operator increases the value of 'i' by 1
    i++;
  }

  // what is the return value ??
  return nums;
}



// this is an 'object literal'
//   it creates an object with some fields and methods
//   this is what gets assigned to the global variable 'Tutorial'
return {
  'city': 'Farmington',

  'add': function(x, y) {
      return x + y;
  },

  'myTrueBoolean': true,

  'myArray1': [27, "dog"],

  'myArray2': [],

  'myFirstFunction': myFirstFunction

};

})();