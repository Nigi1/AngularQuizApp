### Final Project – Quiz App

This project was developed as part of my final project during my further education program. It is a simple quiz application built with Angular. It's designed to demonstrate some features like routing, reactive forms, validation and component-based architecture. Users can select a quiz, answer multiple-choice questions, and view their results upon completion.

## Assignment Text

"Develop a simple quiz application with Angular. The application should have
a start page from which a quiz can be started. The quiz form should be
implemented with Reactive Forms and contain several multiple-choice
questions. After completing the quiz, the result should be displayed."

## Features

- Landing page with quiz selection
- Dynamic quiz form using Angular Reactive Forms
- Multiple-choice questions with validation
- Conditional submit button (only active when all questions are answered)
- Result component displaying the final score (with right and wrong answers)
- Angular service to manage quiz questions and evaluation logic
- Routing setup with parameters and fallback redirection

## Component Overview

- `HomeComponent` - Quiz selection interface
- `QuizComponent` - Reactive quiz form
- `ResultComponent` - Displays quiz results
- `QuizService` - Provides quiz data and handles scoring

## How to Run / Installation

```
# Clone the repository
git clone https://github.com/your-username/AngularQuizApp.git

# Navigate into the project folder
cd AngularQuizApp

# Install dependencies
npm install

# Run the application
ng serve
```
