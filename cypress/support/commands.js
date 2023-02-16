Cypress.Commands.add('createUser', (url, method, body) => {
  cy.request({
    url: url,
    method: method,
    body: {
      id: body.id,
      username: body.username,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: body.password,
      phone: body.phone,
      userStatus: body.userStatus
    }
  }).then((response) => {
      expect(response.status).to.be.eql(200)
      expect(response.body).to.be.eql({
        code: 200,
        message: `${body.id}`,
        type: "unknown"
      })
    })
})

Cypress.Commands.add('loginUser', (url, method, body) => {
  cy.request({
    url: `${url}/login?username=${body.userName}&password=${body.password}`,
    method: method,
  }).then((response) => {
      expect(response.status).to.be.eql(200)
    })
})

Cypress.Commands.add('modifyUser', (url, method, body) => {
  cy.request({
    url: `${url}/${body.userName}`,
    method: method,
    body: {
      id: body.id,
      username: body.username,
      firstName: 'Aleksandr',
      lastName: body.lastName,
      email: body.email,
      password: body.password,
      phone: body.phone,
      userStatus: body.userStatus
    }
  }).then((response) => {
      expect(response.status).to.be.eql(200)
    })
})

Cypress.Commands.add('deleteUser', (url, method, body) => {
  cy.request({
    url: `${url}/${body.userName}`,
    method: method,
  }).then((response) => {
      expect(response.status).to.be.eql(200)
    })
})