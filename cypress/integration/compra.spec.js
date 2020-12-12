/// <reference types="cypress"/> 
// Linha acima adiciona auto complete e acesso a doc do cypress

context('Compra', () => {
    it('Compra de um produto', () => {
        let nomeProduto = 'Faded Short Sleeve T-shirts'; 

        cy.visit('/');

        cy.contains(nomeProduto).trigger('mouseover') // verifica ação de houver
        
         cy.contains(nomeProduto) // Identifica o elemento com texto
          .parent() // identifica a linha que contem o texto
          .siblings('div.button-container') // procura seu irmao na mesma hierarquia
          .children('a') // procura seus filhos
          .first() // identifica a posição do botão adicionar
          .click(); // clica no botão

        cy.get(".button-container a[href$='order']").click(); // elemento .class childrenTag[atributoRegex='texto']

        cy.get("p[class='cart_navigation clearfix'] span").click(); // elm maior menor

        cy.get("#email").type('cypressoslec@mailinator.com')
          .get("#passwd").type('cypressoslec')
          .get("#SubmitLogin").click();

        cy.get("#addressesAreEquals").should('be.checked')
          .get("button[name=processAddress]").click();

        cy.get('input[type=checkbox]#cgv').check()
          .get('button[name=processCarrier]').click();
        
        cy.get("div#HOOK_PAYMENT a[title='Pay by bank wire']").click();

        cy.get('button[class$=button-medium]').click();

        cy.get('div[class=box]').should('contain.text', 'Your order on My Store is complete.')
    });
});