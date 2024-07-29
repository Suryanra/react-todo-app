# Todo List Application

## Overview
This is a frontend Todo List application built using React/Next.js. It includes features like creating, updating, marking as done, searching tasks, and displaying tasks in an expandable list format.

## System Design
- **Components**:
  - `TaskList`: Displays the list of tasks.
  - `TaskItem`: Displays individual tasks with expand/collapse functionality.
  - `TaskForm`: Handles adding and editing tasks.
  - `SearchBar`: Handles task search functionality.
- **State Management**: Managed in the parent component (`App`).

## Implementation
- **Create Task**: Form to add new tasks.
- **Update Task**: Form to edit existing tasks.
- **Mark as Done**: Checkbox/button to mark tasks as completed.
- **Search Tasks**: Search bar to filter tasks.
- **Expandable List**: Tasks can be expanded to show description and last update timestamp.

## Setup and Run
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd todo-app
