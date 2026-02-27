/*
    Middlewares:

    -> Middleware :- Middleware is a function
    that executes between client request &
    server response, used to process and
    manipulate requests before actual route
    handlers.

    They have access to req & res object &
    can call next middleware in chain
    using next().

    * Functions :-
    1. Execute any code
    2. Make changes to req & res obj
    3. End req-res cycle
    4. call next middleware

    * Next() :- next is a function used to
    pass control to next middleware or route
    handler in req-res cycle,

*/