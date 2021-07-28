describe('My First Cypress Test', function() {
    it('Visits the ToolsQA Demo Page and check the menu items', function() {
    //Visit the Demo QA Website
    //cy.visit("http://118.185.187.242:6031");
    cy.visit('https://118.185.187.242:6027')
    cy.wait(2000)
    cy.get('#user').should('be.visible').type('Supervisor')//username
    cy.get('#pwd').type('S@danfoss123')//password
    cy.get('form.ng-dirty > .btn').click()//signin
    cy.get(':nth-child(1) > .datatable-body-row > .datatable-row-center > :nth-child(6)').then(function($elem) {
        this.ClearedTime=($elem.text())
        cy.get(':nth-child(8) > .col-sm-8').should('contain',this.ClearedTime)
})
})
})