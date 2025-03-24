describe('Buscar Produto', () => {
  beforeEach(() => {
    cy.visit('/')
  })

    it('Busca por palavras-chave clicando no botão de lupa', () => {
      cy.buscarProdutoComLupa('iPhone 12')
      cy.origin('https://lista.mercadolivre.com.br/', () => {
      cy.url().should('contains', '/iphone-12')
      cy.get('h3.poly-component__title-wrapper')
        .should('be.visible')
        .first()
        .should('include.text', 'iPhone')
      })
    })

    it('Busca por palavras-chave pressionando a tecla “Enter”', () => {
      cy.buscarProdutoComEnter('iPhone 12')
      cy.origin('https://lista.mercadolivre.com.br/', () => {
      cy.url().should('contains', '/iphone-12')
      cy.get('h3.poly-component__title-wrapper')
        .should('be.visible')
        .first()
        .should('include.text', 'iPhone')
      })
    })

    it('Busca por palavras-chave com erro de digitação', () => {
      cy.buscarComErroDigitacao('ipone')
      cy.origin('https://lista.mercadolivre.com.br/', () => {
      cy.url().should('contains', '/ipone-12')
      cy.get('h3.poly-component__title-wrapper')
        .should('be.visible')
        .first()
        .should('include.text', 'iPhone')    
      })
    })

    it('Os produtos relacionados à busca por palavras-chave devem ser exibidos por ordem de relevância', () => {
      cy.buscarProdutoComEnter()
      cy.origin('https://lista.mercadolivre.com.br/', () => {
      cy.url().should('contains', '/iphone-12')
      cy.get('h3.poly-component__title-wrapper')
        .should('be.visible')
        .first()
        .should('include.text', 'iPhone')
      cy.get('span[id=":R2m55ie:-label"]')
        .should('have.text', 'Mais relevantes')
      })
   })

    it('O produto relacionado à busca por palavras-chave deve conter o valor', () => {
      cy.buscarProdutoComEnter()
      cy.origin('https://lista.mercadolivre.com.br/', () => {
      cy.url().should('contains', '/iphone-12')
      cy.get('h3.poly-component__title-wrapper')
        .should('be.visible')
        .first()
        .should('include.text', 'iPhone')
      cy.get('.andes-money-amount__fraction')
        .eq(1)
        .invoke('text')
        .should('not.be.empty')
        .should('match', /^-?\d+(\.\d+)?$/)
      })
    })

})