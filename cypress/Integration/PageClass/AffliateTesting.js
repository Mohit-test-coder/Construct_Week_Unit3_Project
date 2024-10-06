// Importing the necessary Page Object Model classes for different pages in the application.
import HomePage from '../../support/PageClass/HomePage'; // Imports HomePage class for actions related to the homepage.
import LoginPage from '../../support/PageClass/LoginPage'; // Imports LoginPage class for actions related to the login page.
import Register from '../../support/PageClass/Register'; // Imports Register class for actions related to user registration.
import LogoutPage from '../../support/PageClass/LogoutPage'; // Imports LogoutPage class for actions related to user logout.
import AffiliatePage from '../../support/PageClass/AffiliatePage'; // Imports AffiliatePage class for actions on the affiliate page.
import Checkout from '../../support/PageClass/Checkout'; // Imports Checkout class for actions related to the checkout process.

describe('OpenCart Usage Test', () => {
    // Creating instances of the imported page classes for use in the tests.
    const homePage = new HomePage();
    const registerPage = new Register();
    const loginPage = new LoginPage();
    const logoutPage = new LogoutPage();
    const affiliatePage = new AffiliatePage();
    const checkout = new Checkout();

    // Test case for the complete user workflow: visiting URL, registering, logging out, and more.
    it('should perform the complete workflow: visit URL, assert homepage, register, logout, login, and check Affiliate page', () => {
        // Step 1: Visit the application URL
        homePage.EnterURL(); // Calls the method to enter the homepage URL.
        cy.wait(2000); // Wait for 2 seconds to ensure the page loads completely.

        // Step 2: Assertions for the Homepage
        homePage.VerifyLogoVisibility(); // Checks if the logo is visible on the homepage.
        homePage.CartButtonVisibility(); // Checks if the cart button is visible on the homepage.

        // Step 3: Register a new user
        homePage.GoToRegisterPage(); // Navigates to the registration page.
        cy.wait(2000); // Wait for 2 seconds for the registration page to load.
        registerPage.EnterFirstName('Mohit'); // Enters the first name in the registration form.
        registerPage.EnterLastName('Gupta'); // Enters the last name in the registration form.
        registerPage.EnterEmail('Sushant4@gmail.com'); // Enters the email address in the registration form.
        registerPage.EnterPassword('Password123'); // Enters the password in the registration form.
        registerPage.SubscribeToNewsletter(true); // Subscribes to the newsletter by selecting the checkbox.
        registerPage.AgreeToPrivacyPolicy(); // Agrees to the privacy policy by checking the checkbox.
        registerPage.SubmitRegistration(); // Submits the registration form.
        registerPage.VerifyRegistrationSuccess(); // Verifies if the registration was successful by checking for a success message.
        homePage.MyAccountDropdown(); // Opens the account dropdown to access logout functionality.
        logoutPage.Logout(); // Calls the method to log out the user.
        logoutPage.Clicking_on_Continue(); // Clicks the continue button after logout to return to the homepage.
    });

    // Test case for logging in and checking the checkout process.
    it('should perform the complete workflow: visit URL, assert homepage, register, logout, login, and check Affiliate page', () => {
        homePage.EnterURL(); // Visits the application URL again.
        cy.wait(2000); // Wait for 2 seconds to ensure the page loads completely.

        homePage.MyAccountDropdown(); // Opens the account dropdown to access the login page.
        homePage.GoToLoginPage(); // Navigates to the login page.
        loginPage.EnterEmail('sushant4@gmail.com'); // Enters the email for login.
        loginPage.EnterPassword('Password123'); // Enters the password for login.
        loginPage.ClickLoginButton(); // Clicks the login button to submit the login form.
        
        // checkout.Search_Product('Iphone'); // Searches for the product "Iphone".

        cy.wait(2000); // Wait for 2 seconds to ensure the search results are loaded.
        checkout.SearchButton(); // Clicks the search button to execute the search.
        checkout.SearchHP(); // Selects the search results to view the product details.
        checkout.AddToCartButton(); // Clicks the button to add the product to the shopping cart.
        checkout.CheckOutButton(); // Clicks the checkout button to proceed to the checkout page.
        checkout.ClickOnCheckoutButton(); // Clicks on the checkout button to start the checkout process.
        checkout.AddressDetails(); // Enters the required address details for the order.
        checkout.VerifyOrderSuccess(); // Verifies that the order was successfully placed.

        // This section can be expanded further for more actions related to the Affiliate Page.
    });

    // Test case for navigating to the Affiliate page and filling out the affiliate registration form.
    it('Affiliate Page', () => {
        homePage.EnterURL(); // Visits the application URL again.
        cy.wait(2000); // Wait for 2 seconds to ensure the page loads completely.

        homePage.MyAccountDropdown(); // Opens the account dropdown to access the login page.
        homePage.GoToLoginPage(); // Navigates to the login page.
        loginPage.EnterEmail('sushant4@gmail.com'); // Enters the email for login.
        loginPage.EnterPassword('Password123'); // Enters the password for login.
        loginPage.ClickLoginButton(); // Clicks the login button to submit the login form.

        homePage.MyAccountDropdown(); // Opens the account dropdown again for accessing the affiliate page.
        
        affiliatePage.MyAccount(); // Navigates to the My Account section.
        affiliatePage.clickOnAffiliate(); // Clicks on the link to register for an affiliate account.

        // Fills in the affiliate registration form with necessary details.
        affiliatePage.FillAffiliateForm({
            company: 'Mohit Inc.', // Company name for the affiliate registration.
            website: 'www.Mohitinc.com', // Website URL for the affiliate registration.
            taxId: 'TX123456', // Tax ID for the affiliate registration.
            paymentMethod: 'bank', // Selected payment method for the affiliate account.
            chequePayeeName: '', // Not required for bank payment; left blank.
            bankName: 'Bank of Mohit', // Name of the bank for the bank payment method.
            abaNumber: '123456789', // ABA number for the bank.
            swiftCode: 'DOEBUS33', // SWIFT code for the bank.
            accountName: 'Mohit Gupta', // Name associated with the bank account.
            accountNumber: '987654321' // Bank account number.
        });

        affiliatePage.AgreeToTerms(); // Checks the checkbox to agree to terms and conditions.
        affiliatePage.SubmitAffiliateForm(); // Submits the affiliate registration form.
        affiliatePage.VerifyAffiliateSuccess(); // Verifies that the affiliate account has been successfully updated.

        affiliatePage.BackToHome(); // Navigates back to the homepage after completing the affiliate registration.
    });
});
