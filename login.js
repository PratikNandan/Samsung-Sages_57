describe('Login', () => {
    it('first', () => {
       
       cy.visit('https://cook-book-pied.vercel.app/').click()

        cy.xpath("//button[normalize-space()='LogIn']").click()

        cy.xpath("//input[@placeholder='Email']").type('pratik@gmail.com')
        cy.xpath("//input[@placeholder='Password']").type('1234')

        cy.xpath("//button[@type='submit']").click()
        


       
    });
});