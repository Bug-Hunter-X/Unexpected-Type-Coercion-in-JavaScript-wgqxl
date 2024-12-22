function foo(a, b) {
  // Explicit type checking
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else {
    // Handle type mismatch (e.g., throw an error or return a default value)
    console.error('Invalid input types.  Both arguments must be numbers.');
    return 0;
  }
}

console.log(foo(1, 2));   // Output: 3
console.log(foo(1, '1')); // Output: Invalid input types.  Both arguments must be numbers. 0 