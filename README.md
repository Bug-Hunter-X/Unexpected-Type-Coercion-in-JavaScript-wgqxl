# Unexpected Type Coercion in JavaScript

This repository demonstrates a common JavaScript bug related to unexpected type coercion.  JavaScript's dynamic typing system can sometimes lead to behavior that may not be immediately intuitive to developers coming from statically-typed languages.

## The Bug
The `foo` function attempts to add two variables. However, because one is a number and the other is a string, JavaScript performs string concatenation rather than numerical addition.

## The Solution
The solution involves using explicit type checking or conversion to ensure both operands are numbers before performing the addition.  This prevents unintended string concatenation.

## How to Reproduce
1. Clone the repository.
2. Open `bug.js` and run it using a JavaScript runtime (e.g., Node.js).
3. Observe the unexpected output.  Then, compare to the solution in `bugSolution.js`.