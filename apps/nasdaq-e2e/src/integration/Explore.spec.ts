describe('Explore stocks', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Should list of stocks', () => {
    cy.get('ul li').should('have.length', 50);
    cy.scrollTo('bottom');
  });

  it('Should get more stock when scrolling bottom', () => {
    cy.get('ul li').should('have.length', 50);
    cy.scrollTo('bottom');
    cy.get('ul li').should('have.length', 100);
  });
});
