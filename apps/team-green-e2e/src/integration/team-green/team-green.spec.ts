describe('team-green: TeamGreen component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=teamgreen--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to TeamGreen!');
    });
});
