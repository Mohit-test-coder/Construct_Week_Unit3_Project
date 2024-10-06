# OpenCart E-Commerce Testing Project

## Overview
This project implements automated testing for the OpenCart e-commerce platform using Cypress and the Page Object Model (POM) design pattern. It provides comprehensive end-to-end testing of critical user journeys including account management, shopping experience, and affiliate program features.

## Features Tested
- User Registration and Authentication
  - New user registration
  - User login and logout
  - Form validation
- E-commerce Functionality
  - Product search
  - Shopping cart management
  - Checkout process
- Affiliate Program
  - Affiliate account registration
  - Form submission and validation

## Technologies Used
- [Cypress](https://www.cypress.io/) (v10+)
- JavaScript ES6+
- Page Object Model (POM)
- OpenCart Demo Site as Testing Environment

## Project Structure
```
├── cypress
│   ├── Integration
│   │   └── PageClass
│   │       └── AffiliateTesting.js    # Main test file
│   └── support
│       └── PageClass
│           ├── AffiliatePage.js       # Affiliate page actions
│           ├── Checkout.js            # Checkout process actions
│           ├── HomePage.js            # Homepage actions
│           ├── LoginPage.js           # Login functionality
│           ├── LogoutPage.js          # Logout functionality
│           └── Register.js            # Registration process
└── cypress.config.js                  # Cypress configuration
```

## Page Objects
1. **HomePage.js**
   - URL navigation
   - Logo visibility verification
   - Cart button verification
   - Account dropdown handling

2. **Register.js**
   - User registration form handling
   - Newsletter subscription
   - Privacy policy agreement
   - Registration success verification

3. **LoginPage.js**
   - Email and password input
   - Login button interaction
   - Success/failure verification

4. **LogoutPage.js**
   - Logout action
   - Post-logout navigation

5. **Checkout.js**
   - Product search
   - Cart management
   - Address details input
   - Order placement and verification

6. **AffiliatePage.js**
   - Affiliate form completion
   - Payment method selection
   - Terms agreement
   - Success verification

## Test Scenarios

### 1. Complete User Journey
```javascript
it('should perform the complete workflow', () => {
    // User Registration
    homePage.EnterURL();
    homePage.VerifyLogoVisibility();
    homePage.GoToRegisterPage();
    registerPage.EnterFirstName('Mohit');
    // ... additional registration steps

    // Logout & Login
    logoutPage.Logout();
    homePage.GoToLoginPage();
    loginPage.EnterEmail('sushant4@gmail.com');
    // ... login steps

    // Shopping & Checkout
    checkout.SearchHP();
    checkout.AddToCartButton();
    // ... checkout process
});
```

### 2. Affiliate Registration
```javascript
it('Affiliate Page', () => {
    // Login
    homePage.EnterURL();
    loginPage.EnterEmail('sushant4@gmail.com');
    // ... login steps

    // Affiliate Registration
    affiliatePage.clickOnAffiliate();
    affiliatePage.FillAffiliateForm({
        company: 'Mohit Inc.',
        website: 'www.Mohitinc.com',
        // ... additional form details
    });
    affiliatePage.VerifyAffiliateSuccess();
});
```

## Setup and Running Tests

### Prerequisites
- Node.js (v12 or higher)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/Mohit-test-coder/Construct_Week_Unit3_Project.git
   ```

2. Navigate to project directory:
   ```
   cd Construct_Week_Unit3_Project
   ```

3. Install dependencies:
   ```
   npm install
   ```

### Running Tests
1. Headless mode:
   ```
   npx cypress run
   ```

2. Test Runner (Interactive mode):
   ```
   npx cypress open
   ```

## Best Practices Implemented
- Page Object Model for improved maintainability
- Consistent waiting strategies using `cy.wait()`
- Descriptive test and method naming
- Reusable methods for common actions
- Robust element selection using IDs and reliable selectors
- Comprehensive error handling and verification

## Lessons Learned
- Effective use of Cypress for e-commerce testing
- Implementation of Page Object Model in JavaScript
- Handling of complex user journeys and form submissions
- Best practices for test organization and maintenance

## Future Enhancements
- [ ] Add API testing layer
- [ ] Implement data-driven testing
- [ ] Add visual regression tests
- [ ] Integrate with CI/CD pipeline

## Contributing
1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## Notes
- This project uses the OpenCart demo site for testing purposes
- Test data is currently hardcoded and should be moved to fixtures for production use
- Some tests may need adjustment based on the demo site's state

## Author
- Mohit Gupta

-----------------------------------------------------------------------------------------------
# Java Programming Concepts Project

## Overview
This project demonstrates key Java programming concepts including interface implementation, geometric shape calculations, and autoboxing/unboxing operations. It serves as an educational resource for understanding object-oriented programming in Java.

## Table of Contents
1. [Shape Implementation](#shape-implementation)
2. [Autoboxing and Unboxing](#autoboxing-and-unboxing)
3. [Project Structure](#project-structure)
4. [How to Run](#how-to-run)
5. [Concepts Covered](#concepts-covered)

## Shape Implementation

### Overview
Demonstrates the use of interfaces and implementing classes to create a geometric shape calculator.

### Components
1. **Shape Interface**
   ```java
   interface Shape {
       double area();
       double perimeter();
   }
   ```

2. **Implementing Classes**
   - `Circle`
   - `Rectangle`
   - `Square`
   - `Triangle`

### Features
- Calculation of area and perimeter for different shapes
- Implementation of interface methods
- Use of constructors for initialization
- Display methods for each shape

### Example Usage
```java
Circle circle = new Circle(5.0);
circle.display();

Rectangle rectangle = new Rectangle(4.0, 6.0);
rectangle.display();
```

## Autoboxing and Unboxing

### Overview
Demonstrates automatic conversion between primitive types and their corresponding wrapper classes.

### Features
- Autoboxing: Converting primitives to wrapper objects
- Unboxing: Converting wrapper objects back to primitives
- Examples with multiple data types (int, double)

### Example Usage
```java
// Autoboxing
int primitiveInt = 10;
Integer autoboxedInteger = primitiveInt;

// Unboxing
Integer autoboxedIntValue = 20;
int unboxedInt = autoboxedIntValue;
```

## Project Structure
```
Project_Construct_Week/
├── ShapeDemo.java
├── AutoboxingUnboxing.java
└── README.md
```

## How to Run

### Prerequisites
- Java Development Kit (JDK) 8 or higher
- Java IDE (Eclipse, IntelliJ IDEA) or command line compiler

### Running the Shape Demo
```bash
javac Project_Construct_Week/ShapeDemo.java
java Project_Construct_Week.ShapeDemo
```

### Running the Autoboxing/Unboxing Demo
```bash
javac Project_Construct_Week/AutoboxingUnboxing.java
java Project_Construct_Week.AutoboxingUnboxing
```

## Concepts Covered

### 1. Object-Oriented Programming
- Interfaces
- Class implementation
- Method overriding
- Encapsulation

### 2. Java Type System
- Primitive types
- Wrapper classes
- Automatic type conversion

### 3. Mathematical Concepts
- Geometric formulas
- Math class usage
- Precision in calculations

## Example Output

### Shape Demo
```
Circle:
Radius: 5.0
Area: 78.53981633974483
Perimeter: 31.41592653589793

Rectangle:
Width: 4.0, Height: 6.0
Area: 24.0
Perimeter: 20.0
...
```

### Autoboxing/Unboxing Demo
```
Autoboxing Example:
Primitive int: 10
Autoboxed Integer: 10

Unboxing Example:
Autoboxed Integer: 20
Unboxed int: 20
...
```

## Learning Outcomes
- Understanding interface implementation in Java
- Practicing object-oriented design principles
- Learning about Java's type system and automatic conversions
- Implementing mathematical concepts in programming
- 
## Author
- Mohit Gupta
