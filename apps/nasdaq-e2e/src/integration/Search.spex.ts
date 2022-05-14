describe('Explore stocks', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should search  stocks', () => {
    cy.get('.Search__Input-pscwmk-0').type('AAPL');
    cy.get('ul li').should('have.length', 1);
  });
});
