document.addEventListener('DOMContentLoaded', function () {
    // Function to validate the form
    function validateForm() {
        // Get form inputs
        var firstName = document.getElementById('firstNameInput');
        var lastName = document.getElementById('lastNameInput');
        var email = document.getElementById('emailInput');
        var phone = document.getElementById('phoneInput');
        var password = document.getElementById('passwordInput');
        var confirmPassword = document.getElementById('confirmPasswordInput');
        var dob = document.getElementById('dobInput');
        var gender = document.getElementById('genderInput');

        // Simple check for empty fields
        if (firstName.value.trim() === '' || lastName.value.trim() === '' ||
            email.value.trim() === '' || phone.value.trim() === '' ||
            password.value === '' || confirmPassword.value === '' ||
            dob.value === '' || gender.value === '') {
            alert('Please fill in all fields.');
            return false;
        }

        // Check if passwords match
        if (password.value !== confirmPassword.value) {
            alert('Passwords do not match.');
            return false;
        }

        // Regular expression for alphabetic characters (A-Z)
        var nameRegex = /^[A-Za-z]+$/;

        // Check First Name against the regular expression
        if (!nameRegex.test(firstName.value)) {
            alert('Invalid First Name. Use only alphabetic characters.');
            return false;
        }

        // Check Last Name against the regular expression
        if (!nameRegex.test(lastName.value)) {
            alert('Invalid Last Name. Use only alphabetic characters.');
            return false;
        }

        // Email validation using a regular expression
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailRegex.test(email.value)) {
            alert('Invalid email address.');
            return false;
        }
        return true;
    }
    // Attach the validateForm function to the form submission
    document.querySelector('form').addEventListener('submit', function (e) {
        // Prevent the form from submitting if validation fails
        if (!validateForm()) {
            e.preventDefault();
        } else {
        alert('Sign-up Successful');
    }
    });
});