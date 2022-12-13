/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display login page correctly', () => {
    cy.get('input[placeholder="Email"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display alert when email is empty', () => {
    // click button without input email and password
    cy.get('button').contains(/^Login$/).click();

    // show window.alert for error message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // input email
    cy.get('input[placeholder="Email"]').type('test@email.com');

    // click button login withour input password
    cy.get('button').contains(/^Login$/).click();

    // show window.alert for error message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when Email and password are wrong', () => {
    // input email
    cy.get('input[placeholder="Email"]').type('test@email.com');

    // input wrong password
    cy.get('input[placeholder="Password"]').type('wrong_password');

    // click button login
    cy.get('button').contains(/^Login$/).click();

    // show window.alert for error message from API
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should display homepage when Email and password are correct', () => {
    // input email
    cy.get('input[placeholder="Email"]').type('test@email.com');

    // input password
    cy.get('input[placeholder="Password"]').type('test123456');

    // click button login
    cy.get('button').contains(/^Login$/).click();

    // show header
    cy.get('header').should('be.visible');
  });
});
