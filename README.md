# CDAC Assignment: Login Page

This project is a simple login web page built with HTML, CSS, and JavaScript. The page integrates with an open login API and includes form field validations. The login form is designed to be responsive, functioning well on both web and mobile devices.

## Live Demo

You can view the live version of the login page [here](https://helloworldfardeen.github.io/awak-assignment-CDAC/).

## Features

- **HTML Structure**: Includes a basic form with fields for username/email and password.
- **CSS Styling**: The form is styled to be visually appealing and responsive, adapting to various screen sizes using media queries.
- **JavaScript Validation**: 
  - Validates that the username/email is not empty and follows a proper email format.
  - Validates that the password is not empty and meets basic complexity requirements (minimum 6 characters).
  - Displays error messages for invalid input.
- **API Integration**: 
  - Utilizes the following API to simulate login:
    ```sh
    curl -X POST https://jsonplaceholder.typicode.com/posts \
    -H "Content-Type: application/json" \
    -d '{
      "username": "user@example.com",
      "password": "yourpassword"
    }'
    ```
  - Displays a success message upon successful login and an error message on failure.
- **Responsive Design**: The form adapts to various screen sizes, including mobile, using responsive design principles.

## How to Run the Project

1. Clone the repository:
    ```sh
    git clone https://github.com/Helloworldfardeen/awak-assignment-CDAC.git
    ```
2. Navigate to the project directory:
    ```sh
    cd awak-assignment-CDAC
    ```
3. Open the `index.html` file in your web browser to view the login page.

## Bonus Features (Optional)
- Show/Hide password functionality.
- "Remember Me" checkbox.
- Loading spinner during the API call.

## Evaluation Criteria

1. **Correctness**: The login form works as expected with proper validations and API integration.
2. **Code Quality**: Code is well-organized, follows best practices, and is commented.
3. **UI/UX**: The form is visually appealing and user-friendly.
4. **Responsiveness**: Works seamlessly on both web and mobile devices.
5. **Bonus**: Implements additional optional features.

## Contact

For any questions or suggestions, feel free to contact me at [fardeen8303@gmail.com](mailto:fardeen8303@gmail.com).
