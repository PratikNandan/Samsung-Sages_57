describe('Login', () => {
    it('first', () => {
       cy.visit('https://cook-book-pied.vercel.app/') 

       cy.xpath('//button[normalize-space()="SignUp"]').click()
    });
});