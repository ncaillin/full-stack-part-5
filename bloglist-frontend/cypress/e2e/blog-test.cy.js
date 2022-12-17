

describe('blog app', function() {

  beforeEach(function() {
    cy.request('POST', 'http://localhost:3000/api/test/reset')
    cy.visit('http://localhost:3000')
  })

  it('login form shown', function() {
    cy.contains('log in')
  })
})