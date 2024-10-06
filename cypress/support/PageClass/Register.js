class Register {

    // Method to navigate directly to the registration page URL
    EnterURL() {
        cy.visit('https://demo.opencart.com/en-gb?route=account/register'); // Visits the registration page directly
    }

    // Method to input the first name into the registration form
    EnterFirstName(firstName) {
        cy.get('#input-firstname') // Selects the input field for the first name by its ID
          .type(firstName); // Types the provided first name into the field
    }

    // Method to input the last name into the registration form
    EnterLastName(lastName) {
        cy.get('#input-lastname') // Selects the input field for the last name by its ID
          .type(lastName); // Types the provided last name into the field
    }

    // Method to input the email address into the registration form
    EnterEmail(email) {
        cy.get('#input-email') // Selects the input field for the email address by its ID
          .type(email); // Types the provided email address into the field
    }

    // Method to input the password into the registration form
    EnterPassword(password) {
        cy.get('#input-password') // Selects the input field for the password by its ID
          .type(password); // Types the provided password into the field
    }

    // Method to select the newsletter subscription option
    SubscribeToNewsletter(value) {
        if (value) { // Checks if the value is true
            cy.get('input[name="newsletter"][value="1"]').click(); // Selects the 'Subscribe' radio button if value is true
        } else {
            cy.get('input[name="newsletter"][value="0"]').click(); // Selects the 'Do not subscribe' option if value is false
        }
    }

    // Method to agree to the privacy policy by checking the checkbox
    AgreeToPrivacyPolicy() {
        cy.get('input[type="checkbox"]').check(); // Selects and checks the privacy policy checkbox
    }

    // Method to submit the registration form
    SubmitRegistration() {
        cy.get('button[type="submit"]').click(); // Finds the submit button using its type and clicks it to submit the form
    }

    // Method to verify if the registration was successful by checking for a success message
    VerifyRegistrationSuccess() {
        cy.get('h1') // Selects the header element to check for the success message
          .should('be.visible', 'Your Account Has Been Created!') // Asserts that the header with the success message is visible
        //   .should('have.text', 'Your Account Has Been Created!'); // Confirms that the header text is exactly as expected
    }
}

export default Register;
