/*
    WHAT IS MONGOOSE MIDDLEWARE?

    Middleware (also called hooks) are functions that run 
    before or after certain mongoose operations.

    They allow us to add custom logic during database operations.

    Types:
    1. Pre Middleware  -> runs BEFORE the operation
    2. Post Middleware -> runs AFTER the operation

*/


/*
    PROBLEM WITH findByIdAndDelete()

    Mongoose does NOT provide middleware directly for:
    findByIdAndDelete()

    But internally:
    findByIdAndDelete() → calls → findOneAndDelete()

    So if we attach middleware to findOneAndDelete,
    it will automatically work for findByIdAndDelete().
*/


/*
    DELETION HANDLING USING MIDDLEWARE

    We can handle deletion using:

    1. Pre Middleware
    Runs BEFORE the document is deleted.

    2. Post Middleware
    Runs AFTER the document is deleted.
*/
