Travlr Getaways

Travlr Getaways is a full-stack web application built to serve both customers and administrators. The customer-facing side allows users to browse trips, rooms, meals, and contact information, while the admin side provides secure tools for managing trips. The final version includes JWT authentication for secure admin login and protected API routes.

Architecture

This project uses two different frontend approaches. The customer-facing side uses server-rendered HTML with Express.js and Handlebars, which is simple and effective for displaying static and dynamic content. The admin side uses an Angular single-page application (SPA), which allows for faster navigation and more dynamic interaction, without reloading pages.
The backend uses MongoDB because it is flexible and works well with JSON-style data. Since trip records can be stored as documents, MongoDB made it easy to structure and update data.

Functionality

JSON played a big role in connecting everything together. It's different from JavaScript because it is just a way to organize and send data. In this project, the API sends trip information as JSON, and Angular reads it and displays it on the page.
Throughout development, I refactored code several times. One major improvement to the project was separating trip cards into reusable Angular components instead of repeating HTML. This made the code cleaner, easier to maintain, and more scalable. I also moved API calls into a dedicated service to keep components focused on UI logic.

Testing

Testing this project meant making sure API endpoints worked correctly for GET, PUT, and POST requests. I used browser developer tools, console logs, Postman, and database checks to confirm data was being retrieved and updated properly.
Authentication added another layer of testing. Protected routes required valid JWT tokens, so I had to verify token creation, storage, and validation. Common issues included change detection problems in Angular, stale values, and route mismatches.

Reflection

This course has given fantastic hands-on experience with full-stack development. It helped my understanding of frontend, backend, and database concepts and how to incorporate them into one working application. I strengthened my skills in Angular, Express, MongoDB, API creation, and authentication. This experience makes me feel much more prepared for a career in web development and data-focused software roles.
