Part 16 of My JavaScript Journey 🚀, What I learned in this part👇.

🔹Parsing Fetch Responses to JSON — Understood why we use .json() after a fetch() call. The initial fetch Promise only gives us the Response object — not the actual data. We need to parse it to get usable JSON.

🔹Two Promise Stages in Fetch —
 1️⃣ The first Promise resolves once the request is completed, headers are received, and a Response object is created.
 2️⃣ The second Promise (from .json()) resolves when the actual body data is read and converted to a JavaScript object.

🔹Fetch Behavior — Realized that the Fetch API treats any server response (even 400, 404, or 500) as a successful fetch, because the request technically reached the server and got a reply.

🔹Fetch Rejections — Fetch only rejects when there’s a network-level failure — like no internet, DNS issues, or CORS blocks.

🔹Async Functions Always Return Promises — Understood that every async function always returns a fulfilled Promise, unless it throws an error that’s not caught. Even if we return a value inside an async function, it’s wrapped inside a resolved Promise.

🔹Axios — Explored Axios, a popular alternative to Fetch. It automatically converts JSON data, handles errors more easily like 404, 500 etc and allows setting headers..

🔹Fetch vs Axios — Fetch is built-in and lightweight but needs manual parsing and error handling. Axios is more feature-rich, automatically parses JSON, and simplifies request configuration.

🔹Passing Headers in Axios — Learned how to send headers like content types easily using Axios configuration objects — making it more flexible for API communication.

🔹Error Handling in Axios — Practiced handling Axios errors inside try–catch blocks. If an error is thrown and not caught, the Promise returned by the async function becomes rejected.

💡 Key Takeaway:
Understanding how Fetch and Axios handle requests, responses, and errors differently helps write cleaner, more reliable async code. Axios saves time for complex APIs, while Fetch remains great for lightweight use cases.