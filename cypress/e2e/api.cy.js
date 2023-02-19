const user = require('../fixtures/user')
const url = 'https://petstore.swagger.io/v2/user'

describe('petstore api (new user)', () => {
  it('creates new user', () => {
    cy.createUser(url, 'POST', user)
  })
})

describe('petstore api (modify user)', () => {
  it('modifies created user', () => {
    cy.createUser(url, 'POST', user)
    cy.modifyUser(url, 'PUT', user)
  })
})

describe('petstore api (delete user)', () => {
  it('removes user', () => {
    cy.createUser(url, 'POST', user)
    cy.deleteUser(url, 'DELETE', user)
    })
})