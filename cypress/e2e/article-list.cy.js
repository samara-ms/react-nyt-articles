describe('Article List', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.contains('h1', 'NY Times Most Popular Articles').should('be.visible');
  });

  it('should display a list of articles', () => {
    // Check if the list of articles is present
    cy.get('.article-list').should('exist');

    // Check if at least one article is displayed
    cy.get('.article-item').should('have.length.greaterThan', 0);
  });
});