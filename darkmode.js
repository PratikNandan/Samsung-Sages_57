///<reference types="Cypress"/>
///<reference types='@cypress/xpath'/>
describe('darkmode', () => {
    it.only('check', () => {
       // cy.visit('https://cook-book-pied.vercel.app/').click()
       // cy.xpath("//button[@class='chakra-button css-15w88gn']").click()    //temp working

        cy.visit('https://cook-book-pied.vercel.app/')   //(//button[@type="button"])[6]

        
        //cy.xpath('(//button[@type="button"])[1]').should('exist').click({force: true})

        cy.xpath('//button[@type="button"])[6]').should('exist').click({force: true})
        


        

    });

    it('dm', () => {
        cy.visit('https://cook-book-pied.vercel.app/');
        
        cy.xpath('(//button[@type="button"])[1]').should('exist').click({force: true})
        
        cy.get('body').should('have.class', 'dark-mode');
    });

    it.skip('login', () => {
        //Cypress.on('uncaught:exception', (err, runnable) => {
                 //  return false;
         // });
          cy.visit('https://cook-book-pied.vercel.app/')
          cy.wait(4000)
          cy.xpath("(//button[@class='chakra-button css-15w88gn'])[1]").click()
          cy.wait(4000)
    

    });
});