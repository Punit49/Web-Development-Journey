// ? In JavaScript, garbage collection is the process of automatic memory management. The JavaScript engine periodically identifies and reclaims memory that is no longer in use, freeing it up for future allocations. The main garbage collector algorithm used in modern JavaScript engines is called "Mark-and-Sweep."

// * Here's a brief overview of how the Mark-and-Sweep algorithm works:

// * Mark Phase:
    // The garbage collector starts from a set of root objects (such as global objects, local variables, and currently executing functions).
    // It recursively traverses all objects that are reachable from these roots, marking them as "alive."

// * Sweep Phase:
    // After the marking phase, the garbage collector scans through the memory.
    // Any object that was not marked as "alive" is considered garbage and can be reclaimed.
