describe('Article List Page', () => {
    it('loads the article list correctly', () => {
      cy.visit('http://localhost:3000/');
      cy.contains('h1', 'Article List').should('be.visible');
    });
  });