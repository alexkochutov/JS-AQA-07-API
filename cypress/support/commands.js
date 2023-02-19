Cypress.Commands.add('createUser', (url, method, body) => {
  cy.request({
    url: url,
    method: method,
    headers: {
      api_key: "44399f97-e7da-440b-a39c-4ed7b1026adf"
    },
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

Cypress.Commands.add('modifyUser', (url, method, body) => {
  cy.request({
    url: `${url}/${body.username}`,
    method: method,
    headers: {
      api_key: "44399f97-e7da-440b-a39c-4ed7b1026adf"
    },
    body: {
      id: body.id,
      username: body.username,
      firstName: 'Java Creator',
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
    url: `${url}/${body.username}`,
    method: method,
    headers: {
      api_key: "44399f97-e7da-440b-a39c-4ed7b1026adf"
    },
  }).then((response) => {
      expect(response.status).to.be.eql(200)
    })
})