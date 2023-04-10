/// <reference types= "cypress" />

context('Funcionalidade Login', () => {

    it('Deve fazer login com sucesso', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain',  "Olá, Aluno")
    });

    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get('#username').type('aluno_ebac@teste')
        cy.get('#password').type ('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', "Erro: o usuário aluno_ebac@teste não está cadastrado neste site.")
        
    });

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/")
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type ('teste@teste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should ('contain', "Erro: a senha fornecida para o e-mail aluno_ebac@teste.com está incorreta.")
    });
    
});