describe('basic homepage checks', () => {
  it('check if main page is available and loaded', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('nav').should('exist') // check if nav is on DOM
    cy.get('a.nav-link').should('have.length', 3) // check if the nav bar has 3 links
    cy.get('h1').should('contain', 'Home Page') // make sure the only h1 has the proper text in it
    cy.contains('Check out the Rick and Morty API').should('have.attr', 'href', 'https://rickandmortyapi.com/') // checks if api link is present
  })

  it('navigate to about and make sure it loads properly', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('[data-cy="aboutLink"]').click() //click about
    cy.get('h2').should('have.length', 4) // there should be 4 h2s
  })

  it('naviate to character page and check that 9 cards images exist', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('[data-cy="charLink"]').click() //click about
    cy.get('img').should('have.length', 9) // there should be 4 h2s
  })

  // need to add a test for bad pages
  it('test for 404 on bad pages', () => {
    cy.visit('http://127.0.0.1:5173/foo')
    cy.get('h1').should('contain', '404 - Not Found')
  })

})