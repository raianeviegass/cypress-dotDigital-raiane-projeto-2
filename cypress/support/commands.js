Cypress.Commands.add('buscarProdutoComLupa', (produto) => {
    cy.get('.home').should('be.visible')
    cy.get('.nav-search-input')
      .focus()
      .should('be.visible')
      .type(produto)
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
  })

  Cypress.Commands.add('buscarProdutoComEnter', (produto) => {
    cy.get('.home').should('be.visible')
    cy.get('.nav-search-input')
      .focus()
      .should('be.visible')
      .type(produto)
    cy.get('.nav-search-input')
      .should('be.visible')
      .focus()
      .type('{enter}');
  })