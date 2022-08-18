describe('Acesso a plataforma de testes do curso de cypress da alura', () =>{
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
    })
    it('Verifica mensagens de validação de imputs', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click(); 
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('h4', 'Register to embrace a new world!').should('be.visible');
    })
    it('Verifica mensagem de validação de email inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"').type('Jéssica')
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

})