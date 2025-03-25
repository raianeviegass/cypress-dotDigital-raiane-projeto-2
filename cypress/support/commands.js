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

  Cypress.Commands.add('validaProdutoExibido', () => {
    cy.origin('https://lista.mercadolivre.com.br/', () => {
      cy.url().should('contains', '/iphone-12')
      cy.get('h3.poly-component__title-wrapper')
        .should('be.visible')
        .first()
        .should('include.text', 'iPhone')
    })
  })

Cypress.Commands.add('verificaSeOProdutoExibePreco', () => {
  cy.validaProdutoExibido()  
  cy.origin('https://lista.mercadolivre.com.br/', () => {
  cy.get('.andes-money-amount__fraction')
      .eq(1)
      .invoke('text')
      .should('not.be.empty')
      .should('match', /^-?\d+(\.\d+)?$/)
  })      
})

  