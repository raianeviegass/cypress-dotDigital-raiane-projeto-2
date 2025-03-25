describe('Buscar Produto', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Busca por palavras-chave clicando no botão de lupa', () => {
    cy.buscarProduto('iphone 12', 'Lupa')
    cy.validaProdutoExibido()
  })

  it('Busca por palavras-chave pressionando a tecla “Enter”', () => {
    cy.buscarProduto('iphone 12', 'Enter')
    cy.validaProdutoExibido()
  })

  it('Busca por palavras-chave com erro de digitação', () => {
    cy.buscarProduto('ipone 12', 'lupa')
    cy.origin('https://lista.mercadolivre.com.br/', () => {
      cy.url().should('contains', '/ipone-12')
      cy.get('h3.poly-component__title-wrapper')
        .should('be.visible')
        .first()
        .should('include.text', 'iPhone')
    })
  })

  it('Os produtos relacionados à busca por palavras-chave devem ser exibidos por ordem de relevância', () => {
    cy.buscarProduto('iphone 12', 'enter')
    cy.validaProdutoExibido()
    cy.origin('https://lista.mercadolivre.com.br/', () => {
      cy.get('span[id=":R2m55ie:-label"]')
        .should('have.text', 'Mais relevantes')
    })
  })

  it('O produto relacionado à busca por palavras-chave deve conter seu preço', () => {
    cy.buscarProduto('iphone 12', 'lupa')
    cy.verificaSeOProdutoTemPreco()
  })

})