Cypress.Commands.add('buscarProduto', (produto, enterOulupa) => {
  cy.get('.home').should('be.visible')
  cy.get('.nav-search-input')
    .focus()
    .should('be.visible')
    .type(produto)
  if (enterOulupa == "enter" || "Enter") {
    cy.get('.nav-search-input')
      .should('be.visible')
      .focus()
      .type('{enter}');
  } else if (enterOulupa == "lupa" || "Lupa") {
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
  }
})

Cypress.Commands.add('validaProdutoExibido', () => {
  cy.origin('https://lista.mercadolivre.com.br/', () => {
    cy.url().should('match', /\/iphone-12|\/ipone-12/)
    cy.get('h3.poly-component__title-wrapper')
      .should('be.visible')
      .should('include.text', 'iPhone')
  })
})

Cypress.Commands.add('verificaSeOProdutoTemPreco', () => {
  cy.validaProdutoExibido();
  cy.origin('https://lista.mercadolivre.com.br/', () => {
    cy.get('.andes-money-amount__fraction')
      .eq(1)
      .invoke('text')
      .should('not.be.empty')
      .should('match', /^-?\d+(\.\d+)?$/)
    cy.get('.andes-money-amount__currency-symbol')
      .eq(1)
      .invoke('text')
      .should('contain', '$')
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