# Quiz Funnel

Welcome to Quiz Funnel, an interactive quiz application built with Next.js. Engage your users with a fun quiz experience! Gather their email addresses, challenge them with 15 questions, and provide insightful reports.

# Table of Contents

1. [Quiz Funnel Overview](#quiz-funnel)
   - [Approach](#approach)
   - [Components](#components)

2. [Features](#features)

3. [Challenges Faced](#challenges-faced)
   - [Dashboard of Questions](#1-dashboard-of-questions)
   - [Option Handling in Radio Inputs](#2-option-handling-in-radio-inputs)
   - [Dangerous HTML Rendering](#3-dangerous-html-rendering)
   - [Timer Function](#4-timer-function)
   - [Layout](#5-layout)

4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Usage](#usage)

5. [Data Source](#data-source)

6. [Contributing](#contributing)

7. [License](#license)

8. [Contact](#contact)




## Overview

### Approach

Quiz Funnel aims to create an engaging quiz experience for users. Our approach to the problem involved several key components:

1. **Start Page**: We designed a start page where users can provide their email addresses. This step serves to collect user information and prepare them for the quiz.

2. **Quiz Questions**: The core of the application involves presenting users with 15 trivia questions. To accomplish this, we leveraged the Open Trivia Database API, fetching questions and options dynamically.

3. **Timer**: A countdown timer, displayed at the top of the quiz page, adds a sense of urgency. The quiz auto-submits when the timer reaches zero.

4. **Navigation**: Users can navigate to specific questions during the quiz, enhancing the user experience. An overview panel provides visual cues about visited and attempted questions.

5. **End of Quiz**: After completing the quiz or when the timer expires, users are redirected to a report page. This report displays each question with the user's answer and the correct answer for easy comparison.

### Components

The application consists of several key components, including:
- `StartPage`: Handles user email submission.
- `Question`: Renders and manages individual quiz questions.
- `Timer`: Displays and manages the countdown timer.
- `QuizNav`: Provides navigation and overview panel functionality.
- `Report`: Generates the end-of-quiz report.

## Features

- **Start Page**: Users begin by submitting their name and email address.
- **Quiz Questions**: The application presents 15 questions to the user.
  - A timer counts down from 30 minutes at the top of the page.
  - The quiz automatically submits when the timer reaches zero.
- **Navigation**:
  - Users can navigate to specific questions during the quiz.
  - An overview panel indicates:
    - Which questions the user has visited.
    - Which questions the user has not attempted.
    - Which questions they have attempted.
- **End of Quiz**:
  - After completing the quiz or when the timer ends, users are directed to a report page.
  - The report displays each question with the user's answer and the correct answer side by side for easy comparison.

## Challenges Faced

During the development of Quiz Funnel, we encountered several challenges, each requiring careful consideration and problem-solving. Here are the key challenges we faced and how we addressed them:

### 1. Dashboard of Questions

- **Color Coding**: One challenge was to implement a visual dashboard that indicates the status of each question (visited, attempted, unvisited). We needed to dynamically change the color of each question box based on the user's actions.

- **Data Management**: Managing the state of each question and keeping it synchronized with the user's interactions required careful state management and efficient data structures.

### 2. Option Handling in Radio Inputs

- **Radio Input Synchronization**: Handling user interactions with radio inputs for selecting quiz options was a challenge. Ensuring that only one option could be selected per question and properly updating the state was crucial.

- **Event Handling**: Managing the radio input events and linking them to specific questions and options required thoughtful event handling to prevent unintended behavior.

### 3. Dangerous HTML Rendering

- **Security Concerns**: Rendering HTML content received from an external API posed potential security risks. We needed to implement a safe way to render this content while preventing cross-site scripting (XSS) attacks.

- **React's 'dangerouslySetInnerHTML'**: We utilized React's `dangerouslySetInnerHTML` feature to render HTML content safely, ensuring that user-generated content was sanitized and posed no security threats.

### 4. Timer Function

- **Countdown Synchronization**: Implementing a countdown timer that is synchronized across different components was challenging. We needed to ensure that the timer accurately counted down and auto-submitted the quiz when it reached zero.

- **Interval Management**: Managing the timer interval and handling its effects on the application's state and UI required careful coordination and testing.

### 5. Layout

- **Responsive Design**: Creating a responsive layout that adapts to various screen sizes and devices was a significant challenge. We needed to ensure a consistent user experience across desktop and mobile devices.

- **Component Styling**: Applying consistent styles to components while maintaining flexibility and modularity was another layout-related challenge.

These challenges were critical in shaping the development of Quiz Funnel, and by addressing them, we were able to create a robust and engaging quiz application.


## Getting Started

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository:

   ``` sh
   git clone https://github.com/itsmedeepak/quiz-funnel.git

2. Navigate to the project directory:
   ``` sh
   cd quiz-funnel
3. Install the dependencies:
   ``` sh
   npm install
   
## Usage

1. Start the development server:

   ```sh
   npm run dev

2. Open your web browser and access the application at http://localhost:3000.

### Data Source

The quiz questions used in this application are fetched from the [Open Trivia Database](https://opentdb.com/api.php?amount=15) API. This API provides a wide range of trivia questions on various topics. Here's how the data source is utilized:

- **API Endpoint**: The API endpoint used to fetch quiz questions is `https://opentdb.com/api.php?amount=15`.

- **Question Display**: The `question` parameter from the API response is used to display the actual question to the users.

- **Choices**: For each question, the choices presented to the user are generated by concatenating the `correct_answer` and `incorrect_answers` parameters from the API response. This provides a list of options for the user to choose from.

- **Correct Answer**: The correct answer for each question is available in the `correct_answer` parameter in the API response. This allows the application to compare the user's choice with the correct answer in the report at the end of the quiz.

By leveraging the Open Trivia Database API, the Quiz Funnel project ensures a diverse and engaging set of questions for users to answer during the quiz.

For more details about the Open Trivia Database API and its capabilities, please visit the [Open Trivia Database website](https://opentdb.com/).

If you have any questions about the data source or would like to explore different trivia categories, you can customize the API endpoint to suit your preferences.

## Contributing

Contributions to this project are welcome! If you'd like to contribute, please follow these guidelines:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
4. Make your changes and commit them with a descriptive message.
5. Push your changes to your forked repository: `git push origin feature-name`.
6. Create a pull request from your forked repository to the main project repository.

Please ensure your code follows the project's coding standards and conventions. Your contributions will be reviewed, and feedback may be provided.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feedback, or suggestions, please don't hesitate to reach out to us. You can contact us at:

- Your Name: [Deepak Kumar](mailto:kumardeepak070901@email.com)


We value your input and would be happy to hear from you.

---

