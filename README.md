# Tech Quiz Test Suite

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) - https://opensource.org/licenses/MIT

## Table of Contents 
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Tests](#tests)

[License](#license)

[Questions](#questions)

[Resources](#resources)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3rd-Party Software](#3rd-party-software)

[Video Demonstration](#video-demonstration)

## Description
The Tech Quiz is a web application designed to provide users with an interactive quiz experience. Built with React and TypeScript, this application allows users to test their knowledge on various technical topics through a series of multiple-choice questions. The backend is powered by Express and MongoDB, ensuring a robust and scalable solution for managing quiz data. The application also includes comprehensive end-to-end and component testing using Cypress, ensuring a high level of reliability and performance. Whether you're a developer looking to brush up on your skills or just someone who enjoys a good quiz, the Tech Quiz Test Suite offers a fun and engaging way to learn.

## Installation
To install and run the Tech Quiz Test Suite locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Lauren245/tech-quiz-test-suite.git
   cd tech-quiz-test-suite

2. **Install the dependencies using:**
    ```npm install```

3. **Set up the environment variables:**  Create a ```.env``` file in the root directory and add the following variable:
    ```MONGODB_URI=your_mongodb_connection_string```

4. **Build the project:** Use the ```npm run build``` command at the root level to build the application.

5. **Seed the database:** Use the ```npm run seed``` command at the root level to seed the database.

6. **Run the application:** Use the ```npm run start:dev``` command at the root level to run the application.

7. **Run the Cypress tests:** Open a new terminal window and run: ```npx cypress open```

Your application should now be running locally at http://127.0.0.1:3001/

## Usage
## Usage

To interact with the Tech Quiz Test Suite, follow these steps:

1. **Open the application:**
   Once the application is running locally, open your web browser and navigate to `http://127.0.0.1:3001/`.

2. **Start a quiz:**
   - On the homepage, click the "Start Quiz" button to begin a new quiz session.
   - The application will fetch a random set of multiple-choice questions from the backend.

3. **Answer questions:**
   - Read each question carefully and select the answer you believe is correct.
   - Click the "Next" button to proceed to the next question.

4. **Submit the quiz:**
   - After answering all the questions, click the "Submit" button to complete the quiz.
   - The application will display your score.

5. **Run Cypress tests:**
   - To ensure the application is functioning correctly, you can run the Cypress tests.
   - Open a new terminal window and run:
     ```bash
     npx cypress open
     ```
   - This will open the Cypress Test Runner, where you can run the tests and see the results.

Enjoy using the Tech Quiz Test Suite to test and improve your technical knowledge!

## Tests
The Tech Quiz Test Suite includes testing to ensure the application functions correctly and reliably. The tests are written using Cypress, a powerful end-to-end testing framework. The following types of tests are included:

1. **Component Tests:**
   - These tests verify the functionality of individual React components.
   - Example: The `Quiz.cy.tsx` file contains a test that checks if the quiz card is displayed after the "Start Quiz" button is clicked.

2. **End-to-End Tests:**
   - These tests simulate user interactions with the application to ensure it behaves as expected from start to finish.
   - Example: Tests that simulate a user starting a quiz, and getting the response back from the GET request it sends to the server ensuring it succeeded with a status code of 200, and an array of 10 questions was returned.

### Running the Tests

To run the Cypress tests, you can use the test scripts defined in the `package.json` file. Follow these steps:

1. **Open a new terminal window:**
   Ensure your application is running locally.

2. **Run the Cypress Test Runner:**
   ```bash
   npm run cypress:open

3. **If you prefer to run all tests in headless mode (without opening the Cypress Test Runner), use the following commands:**
    - ```npm run test``` to run all tests (*application must be running*)
    - ```npm run test:component``` to only run component tests
    - ```npm run test:e2e``` to only run end-to-end tests (*application must be running*)

## License
Copyright 2025 Lauren Moore

This software uses an [MIT license](https://opensource.org/license/MIT).

## Questions
If you have additional questions, you can contact me at: 

GitHub: [Lauren245](https://github.com/Lauren245)

Email: laurenmoorejm@gmail.com

## Resources

### Tutorials
1. **[Cypress Testing with React - Simple Tutorial](https://www.youtube.com/watch?v=6BkcHAEWeTU&t=223s)** YouTube video by [Cosden Solutions](https://www.youtube.com/@cosdensolutions). Resource for how to write component and e2e tests using Cypress.

2. **[How to write component tests with Cypress](https://www.youtube.com/watch?v=vJ0rDP4CG-w)** YouTube video by [Cypress.io](https://www.youtube.com/@Cypressio). Resource for how to write component tests using Cypress

3. **[Cypress Docs](https://docs.cypress.io/app/get-started/why-cypress)** Official documentation for Cypress.

### 3rd-Party Software
1. **[React](https://reactjs.org/)** - A JavaScript library for building user interfaces.

2. **[TypeScript](https://www.typescriptlang.org/)** - A typed superset of JavaScript that compiles to plain JavaScript.

3. **[Express](https://expressjs.com/)** - A minimal and flexible Node.js web application framework.
   
4. **[MongoDB](https://www.mongodb.com/)** - A document-oriented NoSQL database used for high volume data storage.

5. **[Cypress](https://www.cypress.io/)** - A JavaScript end-to-end testing framework.
   
6. **[Mongoose](https://mongoosejs.com/)** - An elegant MongoDB object modeling for Node.js.
   
7. **[Webpack](https://webpack.js.org/)** - A static module bundler for modern JavaScript applications.

8. **[ESLint](https://eslint.org/)** - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
    
## Video Demonstration
[Link to demonstration video on Google Drive]()

---

**[Back to top](#tech-quiz-test-suite)**