describe('Amazonia Tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Shoud load Calculate fast routes section', () => {
    cy.contains('Calculate fast routes');
  });
  it('Should display Calculate route button disable when page loads', () => {
    cy.get('[data-testid="calculate-route-submit-button"]').should(
      'be.disabled'
    );
  });
  it('Should display Calculate route button disable if form is invalid', () => {
    cy.get('input[id=origin]').type('A0');
    cy.get('input[id=object]').type('A0');
    cy.get('input[id=destination]').type('A0');
    cy.get('[data-testid="calculate-route-submit-button"]').should(
      'be.disabled'
    );
  });
  it('Should display Calculate route button enabled if form is valid', () => {
    cy.get('input[id=origin]').type('A1');
    cy.get('input[id=object]').type('A1');
    cy.get('input[id=destination]').type('A1');
    cy.get('[data-testid="calculate-route-submit-button"]').should(
      'be.enabled'
    );
  });
  it('Should calculate a route successfully', () => {
    cy.get('input[id=origin]').type('A1');
    cy.get('input[id=object]').type('A2');
    cy.get('input[id=destination]').type('A1');
    cy.get('[data-testid="calculate-route-submit-button"]').click();
    cy.contains('Calculation completed');
  });
});
