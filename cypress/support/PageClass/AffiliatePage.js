class AffiliatePage {

    // This class contains reusable methods for actions related to the Affiliate page.

    // Method to navigate to the 'My Account' page by clicking on the 'My Account' button.
    MyAccount() {
        cy.contains('My Account').click(); // Locates the 'My Account' button using text content and simulates a click action.
    }

    // Method to click on the link to register for an affiliate account.
    clickOnAffiliate() {
        cy.contains('Register for an affiliate account').click(); // Locates the 'Register for an affiliate account' button using text content and clicks it.
    }

    // Method to fill out the affiliate registration form with the provided input values.
    FillAffiliateForm({ company, website, taxId, paymentMethod, chequePayeeName, bankName, abaNumber, swiftCode, accountName, accountNumber }) {
        cy.get('#input-company').type(company); // Fills in the 'Company' input field with the provided company name.
        cy.get('#input-website').type(website); // Fills in the 'Website' input field with the provided website URL.
        cy.get('#input-tax').type(taxId); // Fills in the 'Tax ID' input field with the provided tax ID.
        
        // Selects the payment method radio button (either 'cheque', 'paypal', or 'bank') based on the input value.
        cy.get(`input[name="payment_method"][value="${paymentMethod}"]`).check();

        // Logic to handle additional form fields based on the selected payment method:
        if (paymentMethod === 'cheque') {
            cy.get('#input-cheque').should('be.visible').type(chequePayeeName); // If payment method is 'cheque', fill in the 'Cheque Payee Name' field.
        } else if (paymentMethod === 'paypal') {
            cy.get('#input-paypal').should('be.visible').type(paypalEmail); // If payment method is 'paypal', fill in the 'PayPal Email' field.
        } else if (paymentMethod === 'bank') {
            // If payment method is 'bank', fill in the bank details fields.
            cy.get('#input-bank-name').should('be.visible').type(bankName); // Fills in the 'Bank Name' field.
            cy.get('#input-bank-branch-number').should('be.visible').type(abaNumber); // Fills in the 'ABA/BSB Number' field.
            cy.get('#input-bank-swift-code').should('be.visible').type(swiftCode); // Fills in the 'SWIFT Code' field.
            cy.get('#input-bank-account-name').should('be.visible').type(accountName); // Fills in the 'Account Name' field.
            cy.get('#input-bank-account-number').should('be.visible').type(accountNumber); // Fills in the 'Account Number' field.
        }
    }

    // Method to check the 'Agree to terms and conditions' checkbox.
    AgreeToTerms() {
        cy.get('input[type="checkbox"]').check(); // Locates the terms and conditions checkbox and checks it.
    }

    // Method to submit the affiliate registration form.
    SubmitAffiliateForm() {
        cy.get('.text-end > .btn').click(); // Locates the submit button (usually at the end of the form) and clicks it to submit the form.
    }

    // Method to verify if the affiliate registration was successful by checking for a success message.
    VerifyAffiliateSuccess() {
        // Asserts that a success alert message containing the success text is displayed.
        cy.get('.alert-success').should('contain', ' Success: Your affiliate account has been successfully updated.');
    }

    // Method to navigate to the 'About Us' page.
    AboutUs() {
        cy.contains('About Us').click(); // Locates the 'About Us' link using text content and clicks it.
    }

    // Method to return to the homepage by clicking on the store logo.
    BackToHome() {
        cy.get('img[title="Your Store"]').click(); // Locates the store logo using its title attribute and clicks it to navigate back to the homepage.
    }
}

export default AffiliatePage; // Exports the AffiliatePage class for use in other files.
