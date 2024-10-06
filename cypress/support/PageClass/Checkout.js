class Checkout {

    // Method to search for a product by name
    Search_Product(productName) {
        cy.wait(3000); // Waits for 3 seconds to allow the page to load
        cy.get('[name="search"]') // Finds the search input field by the 'name' attribute
          .type(productName); // Types the given product name into the search field
        cy.wait(3000); // Waits for 3 seconds to allow search results to load
    }

    // Method to initiate the search by clicking the search button
    SearchButton() {
        cy.get('[data-lang="en-gb"]').click({force: true}); // Clicks a button or link based on the language attribute, forcing the click if needed
        cy.wait(3000); // Waits for 3 seconds to load the search page
        cy.get('#input-search').type('Hp'); // Types 'Hp' into the search input field (this can be modified to a dynamic value)
        cy.get('#button-search').click(); // Clicks the search button to submit the search request
    }

    // Method to specifically search for 'HP' products and select from results
    SearchHP(){
        cy.get("div[class='description'] h4 a").click(); // Clicks on the product link from the search results (usually the first HP product found)
    }

    // Method to add the selected product to the cart
    AddToCartButton() {
        cy.get('#button-cart').click(); // Clicks the 'Add to Cart' button
        cy.wait(5000); // Waits for 5 seconds to ensure the item is added to the cart
    }

    // Method to click on the cart button to view cart contents
    Click_On_Cart() {
        cy.get('[id="button-cart"]').click(); // Clicks the cart button (element with id 'button-cart')
        cy.wait(2000); // Waits for 2 seconds to load the cart view
    }

    // Method to click the 'Checkout' button and proceed to checkout
    CheckOutButton() {
        cy.contains('Checkout').click({force: true}); // Clicks the element containing the text 'Checkout' (likely a button)
    }

    // Redundant method to click on the checkout button (same as above)
    ClickOnCheckoutButton() {
        cy.wait(2000); // Waits for 2 seconds
        cy.contains('Checkout').click(); // Again, clicks the 'Checkout' button
        cy.wait(2000); // Waits for 2 seconds to allow the checkout page to load
    }

    // Method to click on the login link if the user is not logged in
    Click_Login() {
        cy.get('#form-register > p > a > strong').click(); // Finds and clicks on the login link within the register form
        cy.wait(2000); // Waits for 2 seconds to ensure the page loads
    }

    // Method to fill in the shipping address details during checkout
    AddressDetails() {
        // cy.get('#input-shipping-new').click(); // Selects the option to add a new shipping address
        cy.get('[name="firstname"]').type('Mohit'); // Types 'Mohit' into the first name input field
        cy.get('[name="lastname"]').type('Gupta'); // Types 'Gupta' into the last name input field
        // The email field is commented out (can be used if needed)
        // cy.get('#input-email').type('john.doe@example.com');
        cy.get('#input-shipping-address-1').type('Kalyan Naka, Bhiwandi'); // Types the first line of the shipping address
        cy.get('#input-shipping-address-2').type('ShriRang Nagar, Near Kamla Hotel'); // Types the second line of the address
        cy.get('#input-shipping-city').type('Bhiwandi'); // Types the city name
        cy.get('#input-shipping-postcode').type('421302'); // Types the postal code
        cy.get('#input-shipping-company').type('Mohit Enterprise'); // Optionally enters a company name
        cy.get('#input-shipping-country').select('India'); // Selects 'India' from the country dropdown
        cy.wait(2000); // Waits for 2 seconds before proceeding
        cy.get('#input-shipping-zone').select('Madhya Pradesh'); // Selects 'Madhya Pradesh' from the zone dropdown
        cy.get('#button-shipping-address').click(); // Clicks the button to confirm the shipping address
        cy.get('[id="button-shipping-methods"]').click(); // Proceeds to select shipping methods
        cy.get('#input-shipping-method-flat-flat').click(); // Selects the flat rate shipping method
        cy.get('#button-shipping-method').click(); // Confirms the selected shipping method
        cy.get('[id="button-payment-methods"]').click(); // Proceeds to payment methods
        cy.get('#input-payment-method-cod-cod').click(); // Selects the 'Cash on Delivery' payment method
        cy.get('#button-payment-method').click(); // Confirms the payment method
        cy.get('#input-comment').type('Please deliver the order as soon as possible'); // Adds a comment to the order
        cy.wait(5000); // Waits for 5 seconds to ensure everything is loaded
        cy.get('#button-confirm') // Finds the 'Confirm' button
          .should('be.visible') // Asserts that the 'Confirm' button is visible
          .should('exist') // Asserts that the 'Confirm' button exists
          .click(); // Clicks the 'Confirm' button to place the order
        cy.wait(5000); // Waits for 5 seconds to allow the order confirmation process to complete
    }

    // Method to verify that the order was successfully placed
    VerifyOrderSuccess() {
        cy.contains('Your order has been placed!') // Finds the success message
          .should('be.visible') // Asserts that the message is visible
          .should('have.text', 'Your order has been placed!'); // Asserts that the message has the exact text
          
        cy.get('.btn.btn-primary').click(); // Clicks the primary button (probably to proceed after order completion)
        cy.wait(5000); // Waits for 5 seconds before moving to the next step
    }
    
}

export default Checkout;
