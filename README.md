# To-do-list-project
# Elegant To-Do List Application

## Project Description

This Elegant To-Do List is a web-based application that allows users to manage their tasks efficiently. Built with HTML, CSS, and JavaScript, it provides a sleek, user-friendly interface with a modern design. The application uses JSON Server as a mock backend to simulate data persistence.

## Features

- Add new tasks
- Mark tasks as completed or uncompleted
- Delete tasks
- Persistent storage using JSON Server
- Responsive design with glassmorphism effect
- Gradient background for enhanced visual appeal

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- JSON Server (for mock backend)

## Project Structure
elegant-todo-list/
│
├── index.html
├── style.css
├── script.js
├── db.json
└── README.md

## Setup and Installation

1. Clone the repository or download the project files.

2. Ensure you have Node.js installed on your system.

3. Install JSON Server globally:
4. Navigate to the project directory in your terminal.

5. Start JSON Server:
6. Open `index.html` in a web browser.

## How to Use

1. **Adding a Task**: 
- Type your task in the input field.
- Click the "Add" button or press Enter to add the task.

2. **Completing a Task**:
- Click on a task to mark it as completed.
- Click again to mark it as uncompleted.

3. **Deleting a Task**:
- Click on the "×" button next to a task to delete it.

## Code Overview

- `index.html`: Structures the web page and includes necessary scripts.
- `style.css`: Contains all the styling for the application, including the glassmorphism effect and responsive design.
- `script.js`: Handles all the JavaScript functionality, including:
- Fetching tasks from the server
- Adding new tasks
- Updating task status (completed/uncompleted)
- Deleting tasks
- `db.json`: Serves as the database for JSON Server, storing all task data.

## API Endpoints

- GET `/tasks`: Retrieve all tasks
- POST `/tasks`: Add a new task
- PATCH `/tasks/:id`: Update a task's status
- DELETE `/tasks/:id`: Delete a task

## Future Enhancements

- User authentication
- Task categories or tags
- Due dates for tasks
- Priority levels for tasks
- Search functionality
- Dark mode toggle

## Contributing

Contributions to improve the application are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact
phone : 0748862662
Your Name -Ali Abdikadir

