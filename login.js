describe('Login', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });



    it('first', () => {
       
       cy.visit('https://cook-book-pied.vercel.app/')
       //cy.xpath("//button[normalize-space()='LogIn']").click()

       // click on login
       cy.contains('LogIn').click()
       //enter email
       cy.xpath("//input[@placeholder='Email']").type('pratik@gmail.com')
       //enter password
       cy.xpath("//input[@placeholder='Password']").type('1234')
       //click on submit button
       cy.xpath("//button[@type='submit']").click()








        


       
    });
});