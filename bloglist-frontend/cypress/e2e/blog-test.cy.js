

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
  describe('when logged in', function() {
    beforeEach(function() {
      cy.get('#username').type('admin')
      cy.get('#password').type('password')
      cy.get('button').click()
    })
    it('logged in user can create new blog', function() {
      cy.contains('new blog').click()
      cy.get('#title').type('test title')
      cy.get('#author').type('test author')
      cy.get('#url').type('test url')
      cy.contains('post').click()
      cy.contains('a new blog test title by test author')
      cy.request('GET', 'http://localhost:8080/api/blogs')
      .then(response => expect(response.body[0].title).equal('test title'))
    })
    it('like button works as intended', function () {
      cy.contains('new blog').click()
      cy.get('#title').type('test title')
      cy.get('#author').type('test author')
      cy.get('#url').type('test url')
      cy.contains('post').click()
      cy.contains('view').click()
      cy.get('#testtitlelikes').click()
      cy.get('#testtitlelikes').click()
      cy.get('#testtitlelikes').click()
      cy.get('#testtitlelikes').click()
      cy.get('#testtitlelikes').click()
      cy.contains('likes: 5')
    })
  })
})