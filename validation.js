const form = document.getElementById('form');
const email_input = document.getElementById('email-input');
const password_input = document.getElementById('password-input');
const errors_message = document.getElementById('error-message');
const togglePassword = document.getElementById('togglePassword');

// Show/Hide Password
togglePassword.addEventListener('click', () => {
    const type = password_input.getAttribute('type') === 'password' ? 'text' : 'password';
    password_input.setAttribute('type', type);
    togglePassword.classList.toggle('show');
    
});

// Form submit event listener
form.addEventListener('submit', async (e) => {
    let errors = [];
    clearErrors(); // Clear previous error states

    errors = getLoginFormErrors(email_input.value, password_input.value);

    if (errors.length > 0) {
        e.preventDefault();
        errors_message.innerText = errors.join('. ');
    } else {
        e.preventDefault(); // Prevent default form submission
        await submitLoginForm(email_input.value, password_input.value);
    }
});

// Function to validate login form
function getLoginFormErrors(email, password) {
    let errors = [];

    if (!validateEmail(email)) {
        errors.push('Please enter a valid email address');
        email_input.parentElement.classList.add('incorrect');
    }
    if (password.length < 6) {
        errors.push('Password must be at least 6 characters long');
        password_input.parentElement.classList.add('incorrect');
    }

    return errors;
}

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Function to clear previous error states
function clearErrors() {
    const allInputs = [email_input, password_input];
    
    allInputs.forEach(input => {
        input.parentElement.classList.remove('incorrect');
    });
    
    errors_message.innerText = '';
}

// API integration to handle login
// You can here integrate here
async function submitLoginForm(email, password) {
    const loading = document.getElementById('loading'); // Get the loading spinner element
    loading.style.display = 'block'; // Show the spinner

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: email,
                password: password,
            }),
        });

        const result = await response.json();

        if (response.ok) {
            errors_message.innerText = 'Login successful!';
            errors_message.style.color = 'green';
            // Redirect or handle success action here
        } else {
            throw new Error(result.message || 'Login failed');
        }
    } catch (error) {
        errors_message.innerText = error.message;
        errors_message.style.color = 'red';
    } finally {
        loading.style.display = 'none'; // Hide the spinner
    }
}

