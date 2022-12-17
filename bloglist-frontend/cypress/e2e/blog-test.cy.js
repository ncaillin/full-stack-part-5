

describe('blog app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3000/api/test/reset')
    cy.request('POST', 'http://localhost:8080/api/users', {username: 'admin', name: 'maple', password: 'password'})
    cy.visit('http://localhost:3000')
  })

  it('login form shown', function() {
    cy.contains('log in')
  })

  describe('login', function() {
    it('succeeds with correct credentials', function() {
      cy.get('#username').type('admin')
      cy.get('#password').type('password')
      cy.get('button').click()
      cy.contains('new blog')
    })
    it('fails with incorrect credentials', function() {
      cy.get('#username').type('wronguser')
      cy.get('#password').type('wrongpassword')
      cy.get('button').click()
      cy.get('#error').should('contain', 'invalid username or password')
      cy.get('#error').should('have.css', 'color', 'rgb(255, 0, 0)')
    })
  })
})