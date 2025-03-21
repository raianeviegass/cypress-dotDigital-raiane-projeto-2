Cypress.Commands.add('buscarProdutoComLupa', (produto) => {
    cy.get('.home').should('be.visible')
    cy.get('.nav-search-input')
      .focus()
      .should('be.visible')
      .type(produto)
    cy.get('button[type="submit"]')
      .should('be.visible')
      .click()
  });


  Cypress.Commands.add('buscarProdutoComEnter', () => {
    cy.get('.home').should('be.visible')
    cy.get('.nav-search-input')
      .focus()
      .should('be.visible')
      .type('iphone 12')
    cy.get('.nav-search-input')
      .should('be.visible')
      .focus()
      .type('{enter}');
  });

  Cypress.Commands.add('buscarComErroDigitacao', () => {
    cy.get('.home').should('be.visible')
    cy.get('.nav-search-input')
      .should('be.visible')
      .type('ipone 12')
    cy.get('.nav-search-input')
      .should('be.visible')
      .focus()
      .type('{enter}');
  });

  Cypress.Commands.add('verificarProdutoNaLista', () => {     
    cy.get('h3.poly-component__title-wrapper')
      .should('be.visible')
      .first()
      .should('include.text', 'iPhone')
  });