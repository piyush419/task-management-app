Task Management Application

This is a simple Task Management Application built using React. It allows users to create, update, delete, and track tasks. Tasks can be marked as complete or incomplete, and they can be filtered and sorted based on different criteria. Additionally, the app provides routing functionality for navigating between the task list and detailed task views.

Core Features

Task CRUD Operations:

Create, update, and delete tasks.
Mark tasks as completed or incomplete.

Task Filtering:

Filter tasks by status (All, Completed, Incomplete).

Task Sorting:

Sort tasks by creation date or priority.

Routing:
Home Page: Displays a list of tasks.
Task Detail Page: Displays detailed information about a selected task.

Tools and Libraries Used

React: A JavaScript library for building user interfaces.

React Router: For routing between different pages in the application.

React Hooks (useState, useEffect): To manage component state and lifecycle methods.

CSS (TailwindCSS): For styling the components.

Material Ui : CSS Framework for styling the components

Approach and Thought Process

Core Functionality:

Task Management:

Each task has properties like id, title, description, completed, and priority.
Users can add new tasks with a title and description.
Tasks can be marked as completed or incomplete by toggling the completed state.
The app supports deleting tasks from the list.
Filtering and Sorting:

Users can filter tasks by their status (All, Completed, Incomplete).
The app allows sorting tasks by their creation date or priority level.
Routing:

The application uses React Router to manage routing.
The Home Page (/) displays the task list with filtering and sorting options.
The Task Detail Page (/task-details/:id) shows detailed information about a selected task.
State Management:

The app manages the list of tasks using React's useState hook.
useEffect is used for handling any side effects (e.g., loading tasks from local storage or performing cleanup).
UI Components:

The UI is simple and clean, designed using TailwindCSS for responsiveness and ease of styling.
The components include a task list, task item, task form for adding new tasks, and a task detail page.

Setup and Running the Application

1. Clone the repository:
bash
Copy
git clone https://github.com/yourusername/task-management-app.git
cd task-management-app
2. Install Dependencies:
Install all the necessary dependencies using either npm or yarn.

bash
Copy
npm install
or

bash
Copy
yarn install

3. Start the Development Server:
Start the React development server to run the app locally.

bash
Copy
npm start
or

bash
Copy
yarn start
The app should now be running at http://localhost:3000.

4. Running Tests:
To run unit tests with Jest, use the following command:

bash
Copy
npm test
or

bash
Copy
yarn test
This will run all the unit tests and display the results in the terminal.

Key Features in Detail
Task Management
The task list is managed through React's useState hook, allowing users to create new tasks, update existing tasks, and delete tasks. Each task is displayed with a title, description, and status (completed/incomplete). Users can click buttons to mark tasks as completed or delete them.

Filtering and Sorting
Users can filter tasks by status (All, Completed, Incomplete) and sort them by creation date or priority level. This allows for easy task management and organization.

Routing
The app uses React Router to navigate between different pages:

The Home Page displays a list of tasks and provides options to filter, sort, and add tasks.
The Task Detail Page shows detailed information about a specific task when clicked.

Conclusion
This Task Management Application is a simple yet powerful tool for organizing and managing tasks. It is built with React and uses core features like state management, routing, and conditional rendering to provide a seamless user experience. The app can be easily extended with new features, such as user authentication or task persistence, to improve functionality.