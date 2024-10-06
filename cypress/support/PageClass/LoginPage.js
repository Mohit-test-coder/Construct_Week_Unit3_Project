class LoginPage {

    // Method to enter the email into the email input field
    EnterEmail(email) {
        cy.wait(2000); // Pauses execution for 2 seconds to allow any prior tasks to complete
        cy.get('#input-email') // Selects the email input field using its ID
          .type(email); // Types the provided email into the field
    }

    // Method to enter the password into the password input field
    EnterPassword(password) {
        cy.get('#input-password') // Selects the password input field using its ID
          .type(password); // Types the provided password into the field
    }

    // Method to click the login button to submit the login form
    ClickLoginButton() {
        cy.get('#form-login > .text-end > .btn') // Selects the login button using the CSS path
          .click(); // Clicks the login button to attempt to log in
    }

    // Method to verify a successful login by checking for a success alert message
    VerifyLoginSuccess() {
        cy.get('.alert-success') // Selects the alert element containing the success message
          .should('contain', 'Your Account Has Been Created!'); // Asserts that the success message contains the expected text
    }

    // Method to verify a login failure by checking for a warning alert message
    VerifyLoginFailure() {
        cy.get('.alert-danger') // Selects the alert element containing the error message
          .should('contain', 'Warning: No match for E-Mail Address and/or Password.'); // Asserts that the error message contains the expected text for a failed login
    }
}

export default LoginPage;
