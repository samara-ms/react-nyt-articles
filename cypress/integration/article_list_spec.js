describe('Article List Page', () => {
    it('loads the article list correctly', () => {
      cy.visit('/');
      cy.contains('h1', 'Article List').should('be.visible');
    });
  });