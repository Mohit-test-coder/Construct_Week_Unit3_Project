class LogoutPage {

    // Method to perform the logout action
    Logout() {
        cy.contains('Logout') // Finds the element that contains the text 'Logout'
          .click({force: true}); // Clicks on the 'Logout' button to log the user out
    }

    // Method to click the 'Continue' button after logging out
    Clicking_on_Continue() {
      cy.get('.text-end > .btn').click({force: true}); // Finds the element that contains the text 'Continue'
      
    }

}

export default LogoutPage;
