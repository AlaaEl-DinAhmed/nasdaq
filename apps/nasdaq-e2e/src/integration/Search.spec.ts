describe('Explore stocks', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should search  stocks', () => {
    cy.get('.Search__SearchInput-sc-1fgx8du-0').type('AAPL');
    cy.get('ul li').should('have.length', 1);
  });
});
