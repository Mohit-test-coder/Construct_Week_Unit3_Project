class HomePage {

    // In this class, we write reusable Cypress methods for interacting with the home page.

    // Method to navigate to the given URL
    EnterURL() {
        cy.wait(3000); // Pauses execution for 3 seconds to allow any prior tasks to complete
        cy.visit('https://demo.opencart.com/'); // Navigates to the specified URL
        cy.wait(3000); // Pauses execution for another 3 seconds to allow the page to load fully
    }

    // Method to verify if the store's logo is visible on the homepage
    VerifyLogoVisibility() {
        cy.get('img[title="Your Store"]') // Selects the logo element using its title attribute
          .should('be.visible'); // Asserts that the logo is visible on the page
    }

    // Method to check if the Shopping Cart button is visible on the homepage
    CartButtonVisibility() {
        cy.contains('Shopping Cart') // Finds the element containing the text 'Shopping Cart'
          .should('be.visible'); // Asserts that the Shopping Cart button is visible
    }

    // Method to click on the 'My Account' dropdown
    MyAccountDropdown() {
        cy.contains('My Account') // Finds the element containing the text 'My Account'
          .click({ force: true }); // Clicks on the element, forcing the action even if the element isn't fully visible
    }

    // Method to navigate to the registration page
    GoToRegisterPage() {
        this.MyAccountDropdown(); // Calls the method to open the 'My Account' dropdown
        cy.contains('Register') // Finds the element containing the text 'Register'
          .click(); // Clicks on the 'Register' option to navigate to the registration page
    }

    // Method to navigate to the login page
    GoToLoginPage() {
        this.MyAccountDropdown(); // Calls the method to open the 'My Account' dropdown
        cy.contains('Login') // Finds the element containing the text 'Login'
          .click({ force: true }); // Clicks on the 'Login' option, forcing the click action even if the element isn't fully visible
    }
}

export default HomePage;
