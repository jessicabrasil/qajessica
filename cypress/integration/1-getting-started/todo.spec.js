/// <reference types="cypress" />


describe('Exemplo 1', () => {
  it('deve pesquisar o que eu quero', () => {
   cy.visit('www.google.com');
   cy.get('.gLFyf').type('Brasil{enter}');
  })
  it('Existe um link da wikipédia explicando', () => {
    cy.get('h3.LC20lb.MBeuO.DKV0Md').should('contain', 'Brasil – Wikipédia, a enciclopédia livre');
    })
})
