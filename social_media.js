describe('Social Media', () => {
    it('fb', () => {
        //visit website
        cy.visit('https://cook-book-pied.vercel.app/')

        //to access facebook
        cy.xpath('//a[@href="https://www.facebook.com/"]').click()
        cy.wait(3000)



        
    });

    
    it('Instagram', () => {
                //visit website

        cy.visit('https://cook-book-pied.vercel.app/')
        //to access instagram
        cy.xpath('//a[@href="https://www.instagram.com"]').click()


        
    });
});