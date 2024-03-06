# Employee Management System

The Employee Management System is a web application built to facilitate the management of employee data within an organization. It allows users to perform CRUD (Create, Read, Update, Delete) operations on employee records through an intuitive and user-friendly interface.

## Technologies Used

- **Frontend**: React
- **Backend**: Spring Boot
- **Database**: MySQL

## Features

- **CRUD Operations**: Users can create, read, update, and delete employee records.
- **Dynamic UI**: The frontend is built using React, providing a dynamic and responsive user interface.
- **RESTful APIs**: The backend is developed with Spring Boot, offering robust RESTful APIs for communication between the frontend and backend components.
- **Data Storage**: Employee data is stored in a MySQL database, ensuring reliability and efficiency in data management.
- **User Authentication and Authorization (Optional)**: Optional features for user authentication and authorization can be implemented to secure access to employee data.

<img width="800" alt="Screenshot 2024-03-05 at 4 42 46 PM" src="https://github.com/PavanKalavakuri/Employee-Management/assets/42912788/6c876e46-4204-4689-9897-38bff9354bc0">

<img width="738" alt="Screenshot 2024-03-05 at 4 43 07 PM" src="https://github.com/PavanKalavakuri/Employee-Management/assets/42912788/7be9d80c-0410-47dd-b38f-c8c9e9963143">

## Setup Instructions

1. **Clone the Repository**: 
git clone https://github.com/PavanKalavakuri/Employee-Management.git


2. **Backend Setup**:
- Navigate to the `backend` directory:
  ```
  cd backend
  ```
- Configure MySQL database properties in `application.properties`.
- Run the Spring Boot application:
  ```
  ./mvnw spring-boot:run
  ```

3. **Frontend Setup**:
- Navigate to the `frontend` directory:
  ```
  cd frontend
  ```
- Install dependencies:
  ```
  npm install
  ```
- Start the React development server:
  ```
  npm start
  ```

4. **Access the Application**:
- Open your web browser and navigate to `http://localhost:3000` to access the Employee Management System.
