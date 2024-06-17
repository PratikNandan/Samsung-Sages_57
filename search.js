describe('Search', () => {
    it('search', () => {

        //visit site

        cy.visit('https://cook-book-pied.vercel.app/')

        //search for item
        // here we are searching for Biryani

        cy.xpath('//input[@type="text"]').type('Biryani')




        
    });
});