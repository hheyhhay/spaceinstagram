describe('Space images web application', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should visit page and see a page with images of Mars', () => {
    cy.get('.image-card').first().should('have.text', 'Curiosity Rover - Front Hazard Avoidance Camera2015-05-30Like')
  })

  it('User should be able to like the image', () => {
    cy.get('#102693').within(() => {
      cy.get('.like-button').click()
    })
  })
})
