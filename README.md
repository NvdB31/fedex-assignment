# Fexed Shipping Example Project - Signup Form with Angular

This example project demonstrates a simple signup form implementation using Angular. It includes form validation, custom components, and state management using NgRx.

## Project Structure

The project follows a basic folder structure:

- `src/`: Contains the source code of the Angular application.
  - `app/`: Contains the main application code.
    - `components/`: Contains (reusable) components used in views, like buttons, container etc.
    - `views/`: Contains components to be used as views.
    - `store/`: Contains the state management files for user-related data using NgRx.
  - `assets/`: Contains static assets like images or stylesheets.
  - `index.html`: The main HTML file of the application.
  - `styles.css`: The global styles for the application, which is mainly used to import the TailwindCSS stylesheets.

## Functionality

The example project implements a simple signup form where users can enter their first name, last name, email, and password. The form includes validation rules and displays error messages for invalid inputs.

Key features of the project:

- Form validation: Validates input fields and displays error messages for invalid inputs.
- Password validation: Validates the password based on specific criteria, such as minimum characters and letter casing.
- State management: Uses NgRx to manage the user state and dispatch actions when the form is submitted.
- Routing: Includes basic routing to navigate between different pages/components.

## Setup and Installation

To run the example project locally, follow these steps:

1. Clone the repository or download the source code.
2. Ensure you have Node.js and npm installed on your machine.
3. Open a terminal or command prompt in the project directory.
4. Run the following command to install project dependencies:
   ```shell
   npm install
   ```
5. After the installation is complete, start the development server by running:
   ```shell
   ng serve
   ```
6. Open a web browser and navigate to `http://localhost:4200` to view the application.

## Unit Testing

The project includes unit tests for some of the components and services. To run the unit tests, use the following command:

```shell
ng test
```

This will execute the tests and provide feedback on their results.

## Further Improvements

The example project serves as a starting point and can be extended and improved in various ways, such as:

- Enhancing form validation and error handling, such as for the first and last name fields.
- Adding more features to the signup form, such as additional fields or optional inputs.
- Implementing server-side email validation (more reliable) and integrating with a backend API.
- Adding more comprehensive unit tests to cover all components and services.

Feel free to explore and modify the codebase to suit your specific needs and requirements.

## License

This project is released under the [MIT License](LICENSE).

---

Thank you for checking out this example project! If you have any questions or feedback, please don't hesitate to reach out.
# fedex-assignment
