/* ============================================================
   JavaScript Prototypal Behavior – 
   ============================================================ */

/*
   JavaScript follows prototypal inheritance.
  If a property or method is not found on the object itself,
  JS looks upward through the prototype chain until it finds
  the property or reaches `null`.
*/

/* ------------------------------------------------------------
   🔹 Everything Is (Almost) an Object
   ------------------------------------------------------------
   Arrays, strings, numbers, functions, etc. behave like objects.
   All of them eventually point to `Object.prototype`,
   and the chain finally ends at `null`.
*/

/* ------------------------------------------------------------
   🔹 1. prototype
   ------------------------------------------------------------
   - A property available on constructor functions
     (except arrow functions).
   - Used to define methods and properties shared
     across all instances created using that constructor.
   - Helps save memory by avoiding method duplication.
*/

/*
   👉 When an object is created using `new`,
   its internal [[Prototype]] is linked to
   the constructor’s `prototype`.
*/

/* ------------------------------------------------------------
   🔹 2. [[Prototype]]
   ------------------------------------------------------------
   - An internal hidden link present in every object.
   - Points to the parent’s prototype object.
   - Enables inheritance and method/property lookup.
*/

/* ------------------------------------------------------------
   🔹 3. __proto__
   ------------------------------------------------------------
   - An accessor property on object instances.
   - Exposes the internal [[Prototype]] reference.
   - Points to the prototype object from which
     the instance was created.
*/

/* ------------------------------------------------------------
   🔹 4. Prototype Chain
   ------------------------------------------------------------
   - A lookup mechanism used by JavaScript.
   - Allows objects to inherit properties and methods
     from other objects.
   - The chain continues until the property is found
     or `null` is reached.
*/
